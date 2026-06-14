document.querySelectorAll(".city-pill").forEach((pill) => {
  const city = pill.textContent.replace("📍", "").trim();
  const state = document.querySelector(".state-hero h1")?.textContent.trim() || "Germany";
  const link = document.createElement("a");
  link.className = pill.className;
  link.textContent = pill.textContent;
  link.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${city}, ${state}, Germany`)}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", `Open ${city} in Google Maps`);
  pill.replaceWith(link);
});

document.querySelectorAll(".card p").forEach((paragraph) => {
  if (!paragraph.textContent.includes("Click any city name")) return;
  paragraph.classList.add("city-help");
  paragraph.textContent = "Select a city to open it in Google Maps.";
});
