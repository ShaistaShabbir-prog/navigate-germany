document.querySelectorAll(".city-chip").forEach((link) => {
  const city = link.textContent.replace("📍", "").trim();
  link.href = `../index.html?city=${encodeURIComponent(city)}#states`;
  link.setAttribute("aria-label", `Find ${city} in the state directory`);
});

document.querySelectorAll(".card p").forEach((paragraph) => {
  if (!/Hover to highlight|Click any city name/.test(paragraph.textContent)) return;
  paragraph.textContent = "Select a city to return to the directory with that city filtered.";
});

document.querySelectorAll(".emg-row").forEach((row) => {
  const number = row.querySelector(".emg-num")?.textContent.replace(/\s/g, "");
  if (!number) return;
  row.setAttribute("role", "link");
  row.setAttribute("tabindex", "0");
  row.setAttribute("aria-label", `Call ${number}`);
  const call = () => { window.location.href = `tel:${number}`; };
  row.addEventListener("click", call);
  row.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") call();
  });
});

const stateCode = window.location.pathname.split("/").pop().replace(".html", "").toUpperCase();
const stateFocus = {
  BW: ["Engineering jobs", "Research", "International students"],
  BY: ["Technology jobs", "Families", "Universities"],
  BE: ["Startups", "Creative careers", "International community"],
  BB: ["Families", "Research", "Berlin commuters"],
  HB: ["Logistics", "Students", "Maritime careers"],
  HH: ["Logistics", "Media", "International jobs"],
  HE: ["Finance jobs", "Research", "International schools"],
  MV: ["Healthcare careers", "Families", "Coastal living"],
  NI: ["Engineering jobs", "Research", "Families"],
  NW: ["Jobs", "Universities", "Large city choice"],
  RP: ["Families", "Research", "Wine and tourism"],
  SL: ["Cross-border jobs", "Research", "Affordable cities"],
  SN: ["Technology", "Students", "Research"],
  ST: ["Research", "Manufacturing", "Affordable cities"],
  SH: ["Maritime careers", "Families", "Coastal living"],
  TH: ["Research", "Manufacturing", "Students"],
};

const mainColumn = document.querySelector(".layout > div:first-child");
if (mainColumn) {
  const focusCard = document.createElement("section");
  focusCard.className = "card ng-state-focus";
  focusCard.innerHTML = `
    <div class="card-label">Good starting points</div>
    <div class="ng-state-tags">${(stateFocus[stateCode] || ["Jobs", "Study", "Family life"]).map((tag) => `<span>${tag}</span>`).join("")}</div>
    <p class="desc">These are orientation themes, not rankings. Opportunities and costs vary by city, qualification and personal situation.</p>
  `;
  mainColumn.prepend(focusCard);

  const planningCard = document.createElement("section");
  planningCard.className = "card ng-state-life";
  planningCard.innerHTML = `
    <div class="card-label">Newcomer essentials</div>
    <div class="ng-state-life-grid">
      <a href="../modules/bureaucracy.html"><strong>Authorities</strong><span>Registration, residence and the correct local office.</span></a>
      <a href="../modules/housing.html"><strong>Housing</strong><span>Rental search, contracts, deposits and tenant rights.</span></a>
      <a href="../modules/jobs.html"><strong>Jobs & industries</strong><span>Official job search, recognition and residence routes.</span></a>
      <a href="../modules/education.html"><strong>Universities</strong><span>Study pathways, schools and official education portals.</span></a>
      <a href="../modules/family.html"><strong>Family support</strong><span>Childcare, schools, benefits and local family services.</span></a>
      <a href="../modules/doctors.html"><strong>Healthcare</strong><span>Insurance, doctors, urgent care and pharmacies.</span></a>
    </div>
    <p class="desc" style="margin:14px 0 0">Immigration offices and appointment systems differ by city. Start with the official state or city portals listed on this page and verify the responsible authority before submitting documents.</p>
  `;
  mainColumn.appendChild(planningCard);
}

const recommendation = document.querySelector(".ref");
if (recommendation) {
  const label = recommendation.querySelector(".ref-lbl");
  if (label) label.textContent = "Partner / affiliate recommendation";
  const disclaimer = document.createElement("p");
  disclaimer.className = "ref-sub";
  disclaimer.textContent = "Optional partner link. Compare alternatives; this is not official government guidance.";
  recommendation.appendChild(disclaimer);
}
