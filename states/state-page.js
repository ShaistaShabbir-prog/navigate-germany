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

const mainColumn = document.querySelector(".layout > div:first-child");
if (mainColumn) {
  const planningCard = document.createElement("section");
  planningCard.className = "card";
  planningCard.innerHTML = `
    <div class="card-label">Newcomer planning</div>
    <div class="mods">
      <a href="../modules/bureaucracy.html" class="mod">Authorities & registration</a>
      <a href="../modules/housing.html" class="mod">Housing</a>
      <a href="../modules/jobs.html" class="mod">Jobs & residence</a>
      <a href="../modules/education.html" class="mod">Universities & education</a>
      <a href="../modules/family.html" class="mod">Family support</a>
      <a href="../modules/doctors.html" class="mod">Healthcare</a>
    </div>
    <p class="desc" style="margin:14px 0 0">Local immigration-office links differ by city. Use the official state and city portals on this page; additional authority links are being expanded.</p>
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
