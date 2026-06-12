const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "ur", label: "اردو", flag: "🇵🇰" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "fa", label: "فارسی", flag: "🇮🇷" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "uk", label: "Українська", flag: "🇺🇦" },
];

const TRANSLATIONS = {
  en: ["Navigate Germany with Confidence", "Your official-link based multilingual guide for immigrants, students, families, and new arrivals."],
  de: ["Sicher durch Deutschland navigieren", "Ihr mehrsprachiger Wegweiser mit offiziellen Links für Zugewanderte, Studierende, Familien und Neuankömmlinge."],
  ar: ["تنقّل في ألمانيا بثقة", "دليلك متعدد اللغات القائم على الروابط الرسمية للمهاجرين والطلاب والعائلات والوافدين الجدد."],
  tr: ["Almanya'da güvenle yolunuzu bulun", "Göçmenler, öğrenciler, aileler ve yeni gelenler için resmi bağlantılara dayalı çok dilli rehberiniz."],
  ur: ["اعتماد کے ساتھ جرمنی میں رہنمائی پائیں", "تارکین وطن، طلبہ، خاندانوں اور نئے آنے والوں کے لیے سرکاری لنکس پر مبنی کثیر لسانی رہنما۔"],
  ru: ["Уверенно ориентируйтесь в Германии", "Многоязычный путеводитель по официальным источникам для иммигрантов, студентов, семей и новых жителей."],
  fr: ["Naviguez en Allemagne en toute confiance", "Votre guide multilingue fondé sur des liens officiels pour les immigrés, étudiants, familles et nouveaux arrivants."],
  fa: ["با اطمینان در آلمان مسیر خود را پیدا کنید", "راهنمای چندزبانه مبتنی بر لینک‌های رسمی برای مهاجران، دانشجویان، خانواده‌ها و تازه‌واردان."],
  it: ["Orientati in Germania con sicurezza", "La guida multilingue basata su fonti ufficiali per immigrati, studenti, famiglie e nuovi arrivati."],
  uk: ["Впевнено орієнтуйтеся в Німеччині", "Багатомовний путівник з офіційними посиланнями для іммігрантів, студентів, сімей і новоприбулих."],
};

const MODULES = [
  { id: "housing", icon: "⌂", title: "Housing", desc: "Find accommodation, understand rental contracts, deposits, and tenant rights.", url: "modules/housing.html", color: "#2563eb", bg: "#eff6ff", border: "#bfdbfe" },
  { id: "healthcare", icon: "✚", title: "Healthcare", desc: "Health insurance, doctors, hospitals, appointments, and wellbeing.", url: "modules/doctors.html", color: "#dc2626", bg: "#fef2f2", border: "#fecaca" },
  { id: "jobs", icon: "▣", title: "Jobs & Visa", desc: "Work opportunities, residence routes, Blue Card, and job search.", url: "modules/jobs.html", color: "#b45309", bg: "#fff7ed", border: "#fed7aa" },
  { id: "legal", icon: "⚖", title: "Legal Help", desc: "Residence law, official letters, deadlines, rights, and support.", url: "modules/legal.html", color: "#dc2626", bg: "#fff1f2", border: "#fecdd3" },
  { id: "language", icon: "•••", title: "Language", desc: "Learn German, practise daily phrases, and find language resources.", url: "modules/language.html", color: "#0f766e", bg: "#f0fdfa", border: "#99f6e4" },
  { id: "costs", icon: "€", title: "Cost of Living", desc: "Compare rent, expenses, salaries, banking, and everyday costs.", url: "modules/costs.html", color: "#d97706", bg: "#fffbeb", border: "#fde68a" },
  { id: "education", icon: "▤", title: "Education", desc: "Schools, childcare, integration courses, and learning pathways.", url: "modules/integration.html", color: "#7c3aed", bg: "#f5f3ff", border: "#ddd6fe" },
  { id: "banking", icon: "▥", title: "Banking & Taxes", desc: "Bank accounts, transfers, Schufa, tax ID, and finance basics.", url: "modules/banking.html", color: "#0369a1", bg: "#f0f9ff", border: "#bae6fd" },
  { id: "family", icon: "♡", title: "Family & Child Support", desc: "Kindergeld, Kita, schools, parental support, and family life.", url: "modules/family.html", color: "#be185d", bg: "#fdf2f8", border: "#fbcfe8" },
  { id: "transport", icon: "↔", title: "Transport", desc: "Driving licence and practical mobility steps for daily life.", url: "modules/bureaucracy.html", color: "#4f46e5", bg: "#eef2ff", border: "#c7d2fe" },
  { id: "emergency", icon: "!", title: "Emergency", desc: "Emergency numbers, urgent medical help, crisis lines, and safety.", url: "modules/emergency.html", color: "#b91c1c", bg: "#fef2f2", border: "#fecaca" },
  { id: "documents", icon: "▧", title: "Documents", desc: "Anmeldung, insurance, tax ID, bank account, and admin checklists.", url: "modules/bureaucracy.html", color: "#15803d", bg: "#f0fdf4", border: "#bbf7d0" },
];

// Each state currently uses a named scenic gradient placeholder. Replace the
// background value with a local image URL when licensed state photography is added.
const STATES = [
  state("BW", "Baden-Württemberg", "Stuttgart", "Black Forest & Stuttgart", "Industry, universities, registration services, and international communities.", "linear-gradient(145deg,#174d45,#5b926e 48%,#d09a4a)", [
    link("Official state portal", "https://www.baden-wuerttemberg.de"),
    link("Service-BW", "https://www.service-bw.de"),
    link("Stuttgart city portal", "https://www.stuttgart.de"),
  ]),
  state("BY", "Bavaria", "Munich", "Alps & Neuschwanstein", "Visa, work, housing, and family services across Bavaria's major cities.", "linear-gradient(145deg,#315f91,#84b9d3 47%,#506f36)", [
    link("Official state portal", "https://www.bayern.de"),
    link("BayernPortal", "https://www.bayernportal.de"),
    link("Munich city portal", "https://www.muenchen.de"),
  ]),
  state("BE", "Berlin", "Berlin", "TV Tower & city life", "Appointments, immigration, Anmeldung, housing, and multilingual support.", "linear-gradient(145deg,#d77748,#b4474c 48%,#35455f)", [
    link("Official Berlin portal", "https://www.berlin.de"),
    link("Service Berlin", "https://service.berlin.de"),
    link("Immigration portal", "https://www.berlin.de/einwanderung/"),
  ]),
  state("BB", "Brandenburg", "Potsdam", "Lakes & palaces", "Local authorities, commuter towns, employment, and arrival services.", "linear-gradient(145deg,#4f8ca6,#668b54 48%,#b9854e)", [
    link("Official state portal", "https://www.brandenburg.de"),
    link("Potsdam city portal", "https://www.potsdam.de"),
    link("Employment Agency", "https://www.arbeitsagentur.de/"),
  ]),
  state("HB", "Bremen", "Bremen", "Historic market & river", "Compact city-state resources for registration, work, study, and family life.", "linear-gradient(145deg,#547a98,#a1664c 52%,#354353)", [
    link("Official Bremen portal", "https://www.bremen.de"),
    link("Service Portal Bremen", "https://www.service.bremen.de"),
    link("Bremerhaven portal", "https://www.bremerhaven.de"),
  ]),
  state("HH", "Hamburg", "Hamburg", "Harbor & Elbphilharmonie", "Migration office, city services, jobs, housing, and welcome resources.", "linear-gradient(145deg,#3e708d,#78a8b6 45%,#995741)", [
    link("Official Hamburg portal", "https://www.hamburg.de"),
    link("Hamburg service portal", "https://www.hamburg.de/service/"),
    link("Welcome to Hamburg", "https://www.hamburg.com/welcome/"),
  ]),
  state("HE", "Hessen", "Wiesbaden / Frankfurt", "Frankfurt skyline", "Finance-sector jobs, integration services, universities, and local portals.", "linear-gradient(145deg,#477da7,#344f68 48%,#b98a45)", [
    link("Official state portal", "https://www.hessen.de"),
    link("Hessen service portal", "https://verwaltungsportal.hessen.de/"),
    link("Frankfurt city portal", "https://www.frankfurt.de"),
  ]),
  state("MV", "Mecklenburg-Vorpommern", "Schwerin / Rostock", "Baltic coast & lakes", "Regional services, coastal cities, study options, and employment support.", "linear-gradient(145deg,#2685a5,#65afb2 52%,#b5a650)", [
    link("Official state portal", "https://www.regierung-mv.de"),
    link("Service Portal MV", "https://www.service.mvnet.de"),
    link("Rostock city portal", "https://www.rostock.de"),
  ]),
  state("NI", "Lower Saxony", "Hannover", "Heathland & Hannover", "City portals, skilled work, family services, and registration information.", "linear-gradient(145deg,#456d91,#6f8e54 48%,#b77c4e)", [
    link("Official state portal", "https://www.niedersachsen.de"),
    link("Service Niedersachsen", "https://service.niedersachsen.de/"),
    link("Hannover portal", "https://www.hannover.de"),
  ]),
  state("NW", "North Rhine-Westphalia", "Düsseldorf / Cologne", "Cologne & Rhine cities", "Germany's largest urban region with extensive work and city services.", "linear-gradient(145deg,#3f6079,#354958 45%,#9f6742)", [
    link("Official NRW portal", "https://www.land.nrw/"),
    link("NRW service portal", "https://www.service.nrw.de"),
    link("Cologne city portal", "https://www.stadt-koeln.de"),
  ]),
  state("RP", "Rhineland-Palatinate", "Mainz", "Rhine valley & vineyards", "Residence services, family support, universities, and regional authorities.", "linear-gradient(145deg,#426d88,#607d3b 50%,#b28040)", [
    link("Official state portal", "https://www.rlp.de"),
    link("Service Portal RLP", "https://www.service.rlp.de"),
    link("Mainz city portal", "https://www.mainz.de"),
  ]),
  state("SL", "Saarland", "Saarbrücken", "Forests & Saar loop", "Cross-border life, citizen services, jobs, and compact local support.", "linear-gradient(145deg,#316d65,#5e824e 52%,#a97942)", [
    link("Official Saarland portal", "https://www.saarland.de"),
    link("Saarland citizen service", "https://www.saarland.de/DE/portale/buergerservice/"),
    link("Saarbrücken portal", "https://www.saarbruecken.de"),
  ]),
  state("SN", "Saxony", "Dresden / Leipzig", "Dresden & Leipzig", "Study, technology jobs, registration, housing, and integration resources.", "linear-gradient(145deg,#466f99,#8296a5 45%,#9f6746)", [
    link("Official Saxony portal", "https://www.sachsen.de"),
    link("Dresden city portal", "https://www.dresden.de"),
    link("Leipzig city portal", "https://www.leipzig.de"),
  ]),
  state("ST", "Saxony-Anhalt", "Magdeburg / Halle", "Cathedrals & countryside", "Affordable cities, university life, employment, and administration portals.", "linear-gradient(145deg,#5b7185,#858747 50%,#aa6849)", [
    link("Official state portal", "https://www.sachsen-anhalt.de"),
    link("Service Portal ST", "https://serviceportal.sachsen-anhalt.de/"),
    link("Magdeburg portal", "https://www.magdeburg.de"),
  ]),
  state("SH", "Schleswig-Holstein", "Kiel / Lübeck", "North Sea & Baltic coast", "Coastal city services, family support, work, and residence information.", "linear-gradient(145deg,#167797,#57a8b6 50%,#b0a04e)", [
    link("Official state portal", "https://www.schleswig-holstein.de"),
    link("SH service portal", "https://serviceportal.schleswig-holstein.de/"),
    link("Kiel city portal", "https://www.kiel.de"),
  ]),
  state("TH", "Thuringia", "Erfurt / Jena", "Forest & historic towns", "Research, skilled jobs, city services, and newcomer information.", "linear-gradient(145deg,#2d674e,#628a57 52%,#9d6745)", [
    link("Official Thuringia portal", "https://www.thueringen.de"),
    link("Citizen services", "https://www.thueringen.de/buerger/buergerdienste/"),
    link("Erfurt city portal", "https://www.erfurt.de"),
  ]),
];

function state(id, name, capital, visual, description, background, links) {
  return { id, name, capital, visual, description, background, links };
}

function link(label, url) {
  return { label, url };
}

const guidesGrid = document.querySelector("#guides-grid");
const statesGrid = document.querySelector("#states-grid");
const stateDetail = document.querySelector("#state-detail");
const languageSelect = document.querySelector("#language-select");
const languagePills = document.querySelector("#language-pills");
const savedGuides = new Set(JSON.parse(localStorage.getItem("ng_saved_guides") || "[]"));
let showingSavedOnly = false;

function renderModules(items = MODULES) {
  guidesGrid.innerHTML = items.map((item) => `
    <article class="module-card" style="--module-color:${item.color};--module-bg:${item.bg};--module-border:${item.border};--module-icon-bg:${item.bg}">
      <button class="save-guide ${savedGuides.has(item.id) ? "saved" : ""}" type="button" data-save="${item.id}" aria-label="${savedGuides.has(item.id) ? "Remove" : "Save"} ${item.title} guide">♡</button>
      <span class="module-icon" aria-hidden="true">${item.icon}</span>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <a class="module-link" href="${item.url}">Open Guide &nbsp;→</a>
    </article>
  `).join("");
}

function renderStates(items = STATES) {
  document.querySelector("#state-result-count").textContent = `${items.length} state${items.length === 1 ? "" : "s"}`;
  statesGrid.innerHTML = items.length ? items.map((item) => `
    <button class="state-card" type="button" data-state="${item.id}" style="--state-bg:${item.background}" aria-label="Open ${item.name} resources">
      <span class="state-card-content">
        <small>${item.visual}</small>
        <strong>${item.name}</strong>
        <span class="state-city">${item.capital}</span>
        <span class="state-description">${item.description}</span>
        <span class="state-cta">Open state guide →</span>
      </span>
    </button>
  `).join("") : '<div class="no-results">No state matches your search.</div>';
}

function openState(id) {
  const selected = STATES.find((item) => item.id === id);
  if (!selected) return;
  document.querySelectorAll(".state-card").forEach((card) => card.classList.toggle("active", card.dataset.state === id));
  stateDetail.hidden = false;
  stateDetail.innerHTML = `
    <div class="state-detail-head">
      <div>
        <span class="kicker">Official local resources</span>
        <h3>${selected.name}</h3>
        <p>Capital: ${selected.capital} · Start with the state portal, then choose the relevant city or service.</p>
      </div>
      <button class="state-detail-close" type="button" aria-label="Close state details">×</button>
    </div>
    <div class="state-links">
      ${selected.links.map((item) => `<a href="${item.url}" target="_blank" rel="noopener noreferrer">↗ ${item.label}</a>`).join("")}
      <a href="modules/bureaucracy.html">Open arrival checklist →</a>
    </div>
  `;
  stateDetail.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function setLanguage(code) {
  const selected = LANGUAGES.find((item) => item.code === code) || LANGUAGES[0];
  const translation = TRANSLATIONS[selected.code] || TRANSLATIONS.en;
  const [titleStart, titleEmphasis = ""] = splitTitle(translation[0]);
  document.querySelector("#hero-title").innerHTML = `${titleStart} <em>${titleEmphasis}</em>`;
  document.querySelector("#hero-subtitle").textContent = translation[1];
  document.documentElement.dir = ["ar", "ur", "fa"].includes(selected.code) ? "rtl" : "ltr";
  languageSelect.value = selected.code;
  localStorage.setItem("ng_lang", selected.code);
  languagePills.querySelectorAll("button").forEach((button) => button.classList.toggle("active", button.dataset.lang === selected.code));
}

function splitTitle(title) {
  const words = title.split(" ");
  const splitAt = Math.max(1, Math.ceil(words.length / 2));
  return [words.slice(0, splitAt).join(" "), words.slice(splitAt).join(" ")];
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function toggleSavedGuides() {
  if (!savedGuides.size) {
    showToast("Save a guide with the heart button to find it here.");
    return;
  }
  showingSavedOnly = !showingSavedOnly;
  renderModules(showingSavedOnly ? MODULES.filter((item) => savedGuides.has(item.id)) : MODULES);
  document.querySelector("#saved-button").classList.toggle("active", showingSavedOnly);
  document.querySelector("#guides").scrollIntoView({ behavior: "smooth" });
  showToast(showingSavedOnly
    ? `${savedGuides.size} saved guide${savedGuides.size === 1 ? "" : "s"} shown.`
    : "All guides shown.");
}

function openMoreResources() {
  document.querySelector("#resources").scrollIntoView({ behavior: "smooth" });
}

function searchAll(query) {
  const normalized = query.trim().toLowerCase();
  if (normalized.length < 2) return [];
  const guideMatches = MODULES.filter((item) => `${item.title} ${item.desc}`.toLowerCase().includes(normalized))
    .slice(0, 4)
    .map((item) => ({ title: item.title, type: "Guide", url: item.url }));
  const stateMatches = STATES.filter((item) => `${item.name} ${item.capital} ${item.visual}`.toLowerCase().includes(normalized))
    .slice(0, 3)
    .map((item) => ({ title: item.name, type: "State", state: item.id }));
  return [...guideMatches, ...stateMatches];
}

function init() {
  renderModules();
  renderStates();
  languagePills.innerHTML = LANGUAGES.map((item) => `<button type="button" data-lang="${item.code}">${item.flag} ${item.label}</button>`).join("");
  setLanguage(localStorage.getItem("ng_lang") || "en");
  document.querySelector("#current-year").textContent = new Date().getFullYear();
}

document.querySelector(".menu-toggle").addEventListener("click", (event) => {
  const button = event.currentTarget;
  const isOpen = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!isOpen));
  document.querySelector("#primary-nav").classList.toggle("open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

document.querySelectorAll("#primary-nav a").forEach((linkItem) => linkItem.addEventListener("click", () => {
  document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
  document.querySelector("#primary-nav").classList.remove("open");
  document.body.classList.remove("menu-open");
}));

languageSelect.addEventListener("change", (event) => setLanguage(event.target.value));
languagePills.addEventListener("click", (event) => {
  const button = event.target.closest("[data-lang]");
  if (button) setLanguage(button.dataset.lang);
});

guidesGrid.addEventListener("click", (event) => {
  const saveButton = event.target.closest("[data-save]");
  if (!saveButton) return;
  const id = saveButton.dataset.save;
  savedGuides.has(id) ? savedGuides.delete(id) : savedGuides.add(id);
  localStorage.setItem("ng_saved_guides", JSON.stringify([...savedGuides]));
  renderModules();
  showToast(savedGuides.has(id) ? "Guide saved on this device." : "Guide removed from saved items.");
});

statesGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-state]");
  if (card) openState(card.dataset.state);
});

stateDetail.addEventListener("click", (event) => {
  if (!event.target.closest(".state-detail-close")) return;
  stateDetail.hidden = true;
  document.querySelectorAll(".state-card").forEach((card) => card.classList.remove("active"));
});

document.querySelector("#state-search").addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase().trim();
  renderStates(STATES.filter((item) => `${item.name} ${item.capital} ${item.description} ${item.visual}`.toLowerCase().includes(query)));
  stateDetail.hidden = true;
});

const siteSearch = document.querySelector("#site-search");
const searchResults = document.querySelector("#search-results");
siteSearch.addEventListener("input", () => {
  const results = searchAll(siteSearch.value);
  searchResults.innerHTML = results.map((item) => item.state
    ? `<button class="search-result" type="button" data-search-state="${item.state}"><span>${item.title}</span><small>${item.type}</small></button>`
    : `<a class="search-result" href="${item.url}"><span>${item.title}</span><small>${item.type}</small></a>`
  ).join("");
});
siteSearch.closest("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const first = searchAll(siteSearch.value)[0];
  if (!first) return showToast("Try searching for housing, visa, legal help, or a state.");
  if (first.state) {
    document.querySelector("#states").scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => openState(first.state), 350);
  } else {
    window.location.href = first.url;
  }
});
searchResults.addEventListener("click", (event) => {
  const stateButton = event.target.closest("[data-search-state]");
  if (!stateButton) return;
  searchResults.innerHTML = "";
  document.querySelector("#states").scrollIntoView({ behavior: "smooth" });
  window.setTimeout(() => openState(stateButton.dataset.searchState), 350);
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".hero-copy")) searchResults.innerHTML = "";
});

init();
