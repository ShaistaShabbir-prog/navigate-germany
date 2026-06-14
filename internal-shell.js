(() => {
  const path = window.location.pathname;
  const isModule = path.includes("/modules/");
  const isState  = path.includes("/states/");
  const depth    = (isModule || isState) ? "../" : "";
  const group    = isState ? "States" : isModule ? "Modules" : "";
  const pageTitle = document.querySelector("h1")?.textContent.trim() ||
                    document.title.split(/[|\-—]/)[0].trim();

  const searchItems = [
    ["Housing","modules/housing.html"],["Healthcare","modules/doctors.html"],
    ["Jobs & Visa","modules/jobs.html"],["Legal Help","modules/legal.html"],
    ["Language","modules/language.html"],["Cost of Living","modules/costs.html"],
    ["Banking & Taxes","modules/banking.html"],["Family","modules/family.html"],
    ["Emergency","modules/emergency.html"],["Bureaucracy","modules/bureaucracy.html"],
    ["Integration","modules/integration.html"],
    ["Baden-Württemberg","states/bw.html"],["Bavaria","states/by.html"],
    ["Berlin","states/be.html"],["Brandenburg","states/bb.html"],
    ["Bremen","states/hb.html"],["Hamburg","states/hh.html"],
    ["Hessen","states/he.html"],["Mecklenburg-Vorpommern","states/mv.html"],
    ["Lower Saxony","states/ni.html"],["North Rhine-Westphalia","states/nw.html"],
    ["Rhineland-Palatinate","states/rp.html"],["Saarland","states/sl.html"],
    ["Saxony","states/sn.html"],["Saxony-Anhalt","states/st.html"],
    ["Schleswig-Holstein","states/sh.html"],["Thuringia","states/th.html"],
  ];

  const root = t => `${depth}${t}`;

  // ── 1. Skip link (visually hidden, screen readers only) ──
  const skip = document.createElement("a");
  skip.className = "ng-skip";
  skip.href = "#main-content";
  skip.textContent = "Skip to main content";
  document.body.prepend(skip);

  const main = document.querySelector("main, .wrap, .con, .shell") || document.body;
  if (!main.id) main.id = "main-content";

  // ── 2. Breadcrumb — compact, inline after nav ──
  if (group) {
    const bc = document.createElement("nav");
    bc.className = "ng-breadcrumb";
    bc.setAttribute("aria-label", "Breadcrumb");
    const groupHref = group === "States" ? "index.html#states" : "index.html#guides";
    bc.innerHTML = `<a href="${root("index.html")}">Home</a> › <a href="${root(groupHref)}">${group}</a> › <span aria-current="page">${pageTitle}</span>`;
    main.before(bc);
  }

  // ── 3. Search bar — compact, dark, no white ──
  const tools = document.createElement("div");
  tools.className = "ng-tools";
  tools.innerHTML = `
    <div class="ng-search-wrap">
      <span class="ng-search-icon">⌕</span>
      <input class="ng-search-input" type="search" placeholder="Search guides, states, topics..." autocomplete="off">
      <div class="ng-search-results" role="listbox"></div>
    </div>
    <div class="ng-trust-pills">
      <a href="https://www.make-it-in-germany.com/" target="_blank" rel="noopener">Make it in Germany ↗</a>
      <a href="https://www.bamf.de" target="_blank" rel="noopener">BAMF ↗</a>
      <span>Last checked: June 2026</span>
    </div>`;

  if (group) {
    main.before(tools);
  }

  // Wire search
  const input = tools.querySelector(".ng-search-input");
  const results = tools.querySelector(".ng-search-results");
  if (input) {
    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      if (q.length < 2) { results.hidden = true; results.innerHTML = ""; return; }
      const matches = searchItems
        .filter(([t, u]) => `${t} ${u}`.toLowerCase().includes(q))
        .slice(0, 6);
      results.innerHTML = matches.length
        ? matches.map(([t, u]) => `<a href="${root(u)}" class="ng-sr">${t}</a>`).join("")
        : `<div class="ng-sr-empty">No match found</div>`;
      results.hidden = false;
    });
    document.addEventListener("click", e => {
      if (!tools.contains(e.target)) { results.hidden = true; }
    });
  }

  // ── 4. Disclaimer — only on module pages ──
  if (isModule && !document.querySelector(".ng-disclaimer")) {
    const d = document.createElement("aside");
    d.className = "ng-disclaimer";
    d.innerHTML = "<strong>Important:</strong> General guidance only. Rules change — always verify with the responsible German authority.";
    (document.querySelector("footer") || document.body).before(d);
  }

  // ── 5. Load assistant.js ──
  if (!document.querySelector("script[data-ng-assistant]")) {
    const s = document.createElement("script");
    s.src = `${depth}assistant.js`;
    s.defer = true;
    s.dataset.ngAssistant = "";
    document.body.appendChild(s);
  }
})();
