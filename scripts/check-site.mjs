import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = path.resolve(import.meta.dirname, "..");
const htmlFiles = [
  "index.html",
  "about.html",
  "resources.html",
  "privacy.html",
  "privacy-policy.html",
  ...fs.readdirSync(path.join(root, "modules"))
    .filter((name) => name.endsWith(".html"))
    .map((name) => `modules/${name}`),
  ...fs.readdirSync(path.join(root, "states"))
    .filter((name) => name.endsWith(".html"))
    .map((name) => `states/${name}`),
  ...fs.readdirSync(path.join(root, "journeys"))
    .filter((name) => name.endsWith(".html"))
    .map((name) => `journeys/${name}`),
];

const failures = [];

for (const relative of htmlFiles) {
  const absolute = path.join(root, relative);
  const html = fs.readFileSync(absolute, "utf8");
  const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((match) => match[1]);
  const h1Count = [...html.matchAll(/<h1(?:\s|>)/gi)].length;
  if (h1Count !== 1) failures.push(`${relative}: expected one h1, found ${h1Count}`);

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
const journeyCards = [...homepage.matchAll(/href="journeys\/[^"]+\.html"/g)];
if (journeyCards.length !== 6) {
  failures.push(`index.html: expected 6 journey cards, found ${journeyCards.length}`);
}
const mapStateLinks = [...homepage.matchAll(/class="map-state-links"[\s\S]*?<\/div>/g)][0]?.[0].match(/href="states\/[^"]+\.html"/g) || [];
if (mapStateLinks.length !== 16) {
  failures.push(`index.html: expected 16 map state links, found ${mapStateLinks.length}`);
}

for (const expectedModule of ["housing", "doctors", "jobs", "legal", "language", "costs", "education", "banking", "family", "transport", "emergency", "documents"]) {
  if (!homepage.includes(`modules/${expectedModule}.html`) && !fs.readFileSync(path.join(root, "home.js"), "utf8").includes(`modules/${expectedModule}.html`)) {
    failures.push(`homepage: missing module destination ${expectedModule}`);
  }
}

for (const stateFile of htmlFiles.filter((name) => name.startsWith("states/"))) {
  const html = fs.readFileSync(path.join(root, stateFile), "utf8");
  if (!html.includes('src="state-page.js"')) failures.push(`${stateFile}: missing shared state-page script`);
  if (/images\.unsplash\.com/.test(html)) failures.push(`${stateFile}: remote hero image still present`);
  if (!html.includes("internal-shell.css") || !html.includes("internal-shell.js")) failures.push(`${stateFile}: missing shared internal UI`);
}

for (const internalFile of htmlFiles.filter((name) => /^(modules|journeys)\//.test(name))) {
  const html = fs.readFileSync(path.join(root, internalFile), "utf8");
  if (!html.includes("internal-shell.css") || !html.includes("internal-shell.js")) failures.push(`${internalFile}: missing shared internal UI`);
}

for (const script of ["chatbot.js", "home.js", "legal.js", "referral.js", "internal-shell.js", "states/state-page.js"]) {
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
