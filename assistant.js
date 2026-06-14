(() => {
  if (document.querySelector(".ng-assistant-root")) return;
  const nested = /\/(modules|states|journeys)\//.test(window.location.pathname);
  const base = nested ? "../" : "";
  const items = [
    ["Jobs & Visa","Guide","modules/jobs.html","blue card visa residence permit work skilled worker chancenkarte employment job salary"],
    ["Bureaucracy & Registration","Guide","modules/bureaucracy.html","anmeldung register address registration meldebescheinigung steuer id tax id city office"],
    ["Healthcare & Doctors","Guide","modules/doctors.html","doctor healthcare health insurance krankenkasse hospital medical appointment 116117"],
    ["Housing","Guide","modules/housing.html","housing apartment rent landlord tenant deposit kaution"],
    ["Legal Help","Guide","modules/legal.html","legal lawyer letter deadline dismissal kündigung rights appeal"],
    ["German Language","Guide","modules/language.html","german language course integration learn deutsch"],
    ["Banking & Taxes","Guide","modules/banking.html","bank account money tax schufa transfer iban"],
    ["Family & Child Support","Guide","modules/family.html","family child childcare kita school kindergeld reunification"],
    ["Education","Guide","modules/education.html","university study school education student phd"],
    ["Emergency","Guide","modules/emergency.html","emergency police ambulance fire crisis urgent 112 110"],
    ["Transport","Guide","modules/transport.html","transport train bus driving ticket deutschlandticket"],
    ["Documents","Guide","modules/documents.html","documents passport certificate translation paperwork"],
    ["Baden-Württemberg","State","states/baden-wuerttemberg.html","stuttgart karlsruhe mannheim freiburg"],
    ["Bavaria","State","states/bavaria.html","bayern munich nuremberg augsburg"],
    ["Berlin","State","states/berlin.html","berlin"],
    ["Brandenburg","State","states/brandenburg.html","potsdam brandenburg"],
    ["Bremen","State","states/bremen.html","bremen bremerhaven"],
    ["Hamburg","State","states/hamburg.html","hamburg"],
    ["Hessen","State","states/hessen.html","hessen frankfurt wiesbaden darmstadt"],
    ["Mecklenburg-Vorpommern","State","states/mecklenburg-vorpommern.html","schwerin rostock greifswald"],
    ["Lower Saxony","State","states/lower-saxony.html","niedersachsen hannover braunschweig gottingen"],
    ["North Rhine-Westphalia","State","states/north-rhine-westphalia.html","nrw düsseldorf cologne köln dortmund essen"],
    ["Rhineland-Palatinate","State","states/rhineland-palatinate.html","rheinland pfalz mainz koblenz trier"],
    ["Saarland","State","states/saarland.html","saarbrücken saarland"],
    ["Saxony","State","states/saxony.html","sachsen dresden leipzig chemnitz"],
    ["Saxony-Anhalt","State","states/saxony-anhalt.html","magdeburg halle dessau"],
    ["Schleswig-Holstein","State","states/schleswig-holstein.html","kiel lübeck flensburg"],
    ["Thuringia","State","states/thuringia.html","thüringen erfurt jena weimar"]
  ].map(([title,type,url,keywords]) => ({ title,type,url,keywords }));

  const normalise = (value) => value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const stopWords = new Set(["a","an","and","do","find","for","get","how","i","in","is","my","of","the","to"]);
  const score = (item, query) => {
    const words = normalise(query).split(/[^a-z0-9]+/).filter((word) => word.length > 1 && !stopWords.has(word));
    const haystack = normalise(`${item.title} ${item.type} ${item.keywords}`);
    const tokens = new Set(haystack.split(/[^a-z0-9]+/).filter(Boolean));
    const titleTokens = new Set(normalise(item.title).split(/[^a-z0-9]+/).filter(Boolean));
    return words.reduce((total, word) => total + (tokens.has(word) ? (titleTokens.has(word) ? 5 : 2) : 0), 0);
  };
  const describe = {
    "Jobs & Visa":"Work, residence routes, Blue Card and job-search guidance.",
    "Bureaucracy & Registration":"Address registration, tax ID and first administrative steps.",
    "Healthcare & Doctors":"Health insurance, finding doctors and urgent medical care."
  };

  async function mount() {
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = `${base}components/assistant.css`;
    document.head.appendChild(stylesheet);

    const root = document.createElement("div");
    root.className = "ng-assistant-root";
    try {
      const response = await fetch(`${base}components/assistant.html`);
      if (!response.ok) return;
      root.innerHTML = await response.text();
    } catch {
      return;
    }
    document.body.appendChild(root);

    const launcher = root.querySelector(".ng-assistant-launcher");
    const panel = root.querySelector(".ng-assistant-panel");
    const close = root.querySelector(".ng-assistant-close");
    const form = root.querySelector(".ng-assistant-form");
    const input = root.querySelector("input");
    const results = root.querySelector(".ng-assistant-results");

    const setOpen = (open) => {
      panel.hidden = !open;
      launcher.setAttribute("aria-expanded", String(open));
      if (open) input.focus();
    };
    const search = (query) => {
      const matches = items.map((item) => ({ ...item, score: score(item, query) }))
        .filter((item) => item.score > 0)
        .sort((a,b) => b.score - a.score)
        .slice(0,4);
      results.innerHTML = matches.length
        ? matches.map((item) => `<a class="ng-assistant-result" href="${base}${item.url}"><span>${item.type}</span><strong>${item.title}</strong><small>${describe[item.title] || `Open the ${item.title} page for relevant local guidance.`}</small></a>`).join("")
        : `<p class="ng-assistant-empty">No close match. Try “visa”, “registration”, “doctor”, “housing”, or a state/city name.</p>`;
    };

    launcher.addEventListener("click", () => setOpen(panel.hidden));
    close.addEventListener("click", () => setOpen(false));
    form.addEventListener("submit", (event) => { event.preventDefault(); search(input.value); });
    input.addEventListener("input", () => { if (input.value.trim().length >= 2) search(input.value); });
    root.querySelectorAll(".ng-assistant-examples button").forEach((button) => button.addEventListener("click", () => {
      input.value = button.textContent;
      search(input.value);
    }));
    document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !panel.hidden) setOpen(false); });
  }

  mount();
})();
