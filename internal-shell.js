(() => {
  const path = window.location.pathname;
  const depth = path.includes("/modules/") || path.includes("/states/") || path.includes("/journeys/") ? "../" : "";
  const group = path.includes("/states/") ? "States" : path.includes("/journeys/") ? "Journeys" : path.includes("/modules/") ? "Modules" : "";
  const pageTitle = document.querySelector("h1")?.textContent.trim() || document.title.split("|")[0].split("—")[0].trim();

  const searchItems = [
    ["Housing","modules/housing.html","Guide"],["Healthcare","modules/doctors.html","Guide"],["Jobs & Visa","modules/jobs.html","Guide"],["Legal Help","modules/legal.html","Guide"],["Language","modules/language.html","Guide"],["Cost of Living","modules/costs.html","Guide"],["Education","modules/education.html","Guide"],["Banking & Taxes","modules/banking.html","Guide"],["Family & Child Support","modules/family.html","Guide"],["Transport","modules/transport.html","Guide"],["Emergency","modules/emergency.html","Guide"],["Documents","modules/documents.html","Guide"],
    ["Student roadmap","journeys/student.html","Journey"],["Skilled Worker roadmap","journeys/skilled-worker.html","Journey"],["Family roadmap","journeys/family.html","Journey"],["Researcher / PhD roadmap","journeys/researcher.html","Journey"],["Entrepreneur roadmap","journeys/entrepreneur.html","Journey"],["Refugee / Asylum support","journeys/refugee.html","Journey"],
    ["Baden-Württemberg","states/bw.html","State"],["Bavaria","states/by.html","State"],["Berlin","states/be.html","State"],["Brandenburg","states/bb.html","State"],["Bremen","states/hb.html","State"],["Hamburg","states/hh.html","State"],["Hessen","states/he.html","State"],["Mecklenburg-Vorpommern","states/mv.html","State"],["Lower Saxony","states/ni.html","State"],["North Rhine-Westphalia","states/nw.html","State"],["Rhineland-Palatinate","states/rp.html","State"],["Saarland","states/sl.html","State"],["Saxony","states/sn.html","State"],["Saxony-Anhalt","states/st.html","State"],["Schleswig-Holstein","states/sh.html","State"],["Thuringia","states/th.html","State"]
  ];

  const rootPath = (target) => `${depth}${target}`;
  const header = document.querySelector(".topbar, .topnav, body > nav");
  if (header && !header.querySelector(".ng-header-links")) {
    const headerLinks = document.createElement("div");
    headerLinks.className = "ng-header-links";
    headerLinks.innerHTML = `
      <a href="${rootPath("index.html")}">Home</a>
      <a href="${rootPath("index.html#states")}">States</a>
      <a href="${rootPath("index.html#guides")}">Guides</a>
      <a href="${rootPath("resources.html")}">Resources</a>
    `;
    header.appendChild(headerLinks);
  }

  const skip = document.createElement("a");
  skip.className = "ng-skip";
  skip.href = "#main-content";
  skip.textContent = "Skip to main content";
  document.body.prepend(skip);

  const main = document.querySelector("main, .wrap, .con, .shell") || document.body;
  if (!main.id) main.id = "main-content";

  const breadcrumb = document.createElement("nav");
  breadcrumb.className = "ng-breadcrumb";
  breadcrumb.setAttribute("aria-label", "Breadcrumb");
  breadcrumb.innerHTML = `<a href="${rootPath("index.html")}">Home</a>${group ? ` › <a href="${rootPath(group === "States" ? "index.html#states" : group === "Journeys" ? "index.html#journeys" : "index.html#guides")}">${group}</a>` : ""} › <span aria-current="page">${pageTitle}</span>`;
  main.before(breadcrumb);

  const tools = document.createElement("div");
  tools.className = "ng-tools";
  tools.innerHTML = `<label class="ng-search"><span aria-hidden="true">⌕</span><span style="position:absolute;clip:rect(0,0,0,0)">Search guides, states and journeys</span><input type="search" placeholder="Search guides, states, topics..." autocomplete="off"></label><div class="ng-search-results" aria-live="polite"></div>`;
  breadcrumb.after(tools);
  const input = tools.querySelector("input");
  const results = tools.querySelector(".ng-search-results");
  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    if (query.length < 2) { results.classList.remove("open"); results.innerHTML = ""; return; }
    const matches = searchItems.filter(([title,url,type]) => `${title} ${url} ${type}`.toLowerCase().includes(query)).slice(0,7);
    results.innerHTML = matches.length ? matches.map(([title,url,type]) => `<a href="${rootPath(url)}"><span>${title}</span><small>${type}</small></a>`).join("") : `<p>No simple match. Advanced search is coming soon.</p>`;
    results.classList.add("open");
  });

  const trust = document.createElement("div");
  trust.className = "ng-trust-strip";
  trust.innerHTML = `<span>Official-link focused</span><a href="https://www.make-it-in-germany.com/" target="_blank" rel="noopener">Make it in Germany ↗</a><a href="https://www.bamf.de/EN/Startseite/startseite_node.html" target="_blank" rel="noopener">BAMF ↗</a><a href="https://www.116117.de/" target="_blank" rel="noopener">116117 ↗</a><span>Last checked: June 2026</span>`;
  tools.after(trust);

  if (group === "Modules") {
    const currentSlug = path.split("/").pop().replace(".html", "");
    const related = searchItems
      .filter(([, url, type]) => type === "Guide" && !url.includes(`/${currentSlug}.html`))
      .slice(0, 3);
    const moduleSummary = document.createElement("section");
    moduleSummary.className = "ng-module-summary";
    moduleSummary.innerHTML = `
      <div>
        <span class="ng-section-label">Quick checklist</span>
        <h2>Before you act</h2>
        <ul>
          <li>Confirm which authority or organisation is responsible.</li>
          <li>Collect originals, copies, translations and reference numbers.</li>
          <li>Save appointment confirmations, letters and deadlines.</li>
          <li>Re-check fees and requirements on the official linked website.</li>
        </ul>
      </div>
      <div>
        <span class="ng-section-label">Keep exploring</span>
        <h2>Related guides</h2>
        <div class="ng-related-links">
          ${related.map(([title,url]) => `<a href="${rootPath(url)}">${title}<span>Open guide →</span></a>`).join("")}
        </div>
      </div>
    `;
    (document.querySelector("footer") || document.body).before(moduleSummary);
  }

  if (!document.querySelector(".ng-disclaimer")) {
    const disclaimer = document.createElement("aside");
    disclaimer.className = "ng-disclaimer";
    disclaimer.innerHTML = "<strong>Important:</strong> This page provides general guidance and links to official sources. Rules, thresholds and local procedures can change. Always verify with the responsible German authority.";
    (document.querySelector("footer") || document.body).before(disclaimer);
  }

  const emergency = document.createElement("nav");
  emergency.className = "ng-emergency-dock";
  emergency.setAttribute("aria-label", "Emergency telephone numbers");
  emergency.innerHTML = `<a href="tel:112">112<br><small>Emergency</small></a><a href="tel:110">110<br><small>Police</small></a><a href="tel:116117">116117<br><small>Doctor</small></a><a href="tel:08001110111">0800 111 0 111<br><small>Crisis</small></a>`;
  document.body.appendChild(emergency);

  const bottom = document.createElement("nav");
  bottom.className = "ng-bottom-nav";
  bottom.setAttribute("aria-label", "Mobile navigation");
  bottom.innerHTML = `<a href="${rootPath("index.html")}"${!group ? ' class="active" aria-current="page"' : ""}><span>⌂</span>Home</a><a href="${rootPath("index.html#states")}"${group === "States" ? ' class="active" aria-current="page"' : ""}><span>⌖</span>States</a><a href="${rootPath("index.html#guides")}"${group === "Modules" || group === "Journeys" ? ' class="active" aria-current="page"' : ""}><span>▤</span>Guides</a><a href="${rootPath("resources.html")}"><span>•••</span>More</a>`;
  document.body.appendChild(bottom);

  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    if (!link.rel.includes("noopener")) link.rel = `${link.rel} noopener`.trim();
  });

  if (!document.querySelector('script[data-ng-assistant]')) {
    const assistant = document.createElement("script");
    assistant.src = `${depth}assistant.js`;
    assistant.defer = true;
    assistant.dataset.ngAssistant = "";
    document.body.appendChild(assistant);
  }
})();
