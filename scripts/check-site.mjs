import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = path.resolve(import.meta.dirname, "..");
const htmlFiles = [
  "index.html",
  ...fs.readdirSync(path.join(root, "modules"))
    .filter((name) => name.endsWith(".html"))
    .map((name) => `modules/${name}`),
];

const failures = [];

for (const relative of htmlFiles) {
  const absolute = path.join(root, relative);
  const html = fs.readFileSync(absolute, "utf8");
  const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((match) => match[1]);

  for (const [index, script] of scripts.entries()) {
    try {
      new vm.Script(script, { filename: `${relative}#script-${index + 1}` });
    } catch (error) {
      failures.push(`${relative}: ${error.message}`);
    }
  }

  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
  for (const href of hrefs) {
    if (/^(https?:|mailto:|tel:|#|\$\{)/.test(href)) continue;
    const clean = href.split("#")[0].split("?")[0];
    if (!clean) continue;
    const target = path.resolve(path.dirname(absolute), clean);
    if (!fs.existsSync(target)) failures.push(`${relative}: missing local link ${href}`);
  }

  const sources = [...html.matchAll(/src="([^"]+)"/g)].map((match) => match[1]);
  for (const source of sources) {
    if (/^(https?:|data:|\$\{)/.test(source)) continue;
    const clean = source.split("?")[0];
    const target = path.resolve(path.dirname(absolute), clean);
    if (!fs.existsSync(target)) failures.push(`${relative}: missing local image/script ${source}`);
  }
}

const homepage = fs.readFileSync(path.join(root, "index.html"), "utf8");
const staticStateCards = [...homepage.matchAll(/data-state="[A-Z]{2}"/g)];
if (staticStateCards.length !== 16) {
  failures.push(`index.html: expected 16 static state cards, found ${staticStateCards.length}`);
}
const stateAudienceTags = [...homepage.matchAll(/data-best="[^"]+"/g)];
if (stateAudienceTags.length !== 16) {
  failures.push(`index.html: expected 16 state audience tags, found ${stateAudienceTags.length}`);
}
const staticStateImages = [...homepage.matchAll(/assets\/images\/states\/[^"]+\.jpg/g)];
if (staticStateImages.length !== 16) {
  failures.push(`index.html: expected 16 static state images, found ${staticStateImages.length}`);
}

for (const script of ["chatbot.js", "home.js", "legal.js"]) {
  try {
    new vm.Script(fs.readFileSync(path.join(root, script), "utf8"), { filename: script });
  } catch (error) {
    failures.push(`${script}: ${error.message}`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} pages, local links, and active scripts.`);
