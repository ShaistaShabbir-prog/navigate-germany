(() => {
  const faqs = [
    {
      q: "What should I do first after arriving in Germany?",
      a: "Start with Anmeldung, health insurance, tax ID, and a bank account. The Bureaucracy Guide explains the sequence and links to official services.",
      keys: ["first", "arrive", "arrival", "anmeldung", "register", "bureaucracy"],
      href: "modules/bureaucracy.html",
    },
    {
      q: "Where can I find jobs and visa information?",
      a: "The Jobs & Visa module covers Blue Card, Chancenkarte, salary information, visa paths, and qualification recognition. Verify current legal thresholds with the linked official sources.",
      keys: ["job", "work", "visa", "blue card", "chancenkarte", "salary", "recognition"],
      href: "modules/jobs.html",
    },
    {
      q: "How can I find housing?",
      a: "The Housing module lists major apartment portals and explains deposits, rent increases, service charges, eviction, and tenant associations. Never pay before verifying a listing.",
      keys: ["housing", "apartment", "flat", "rent", "landlord", "tenant", "kaution"],
      href: "modules/housing.html",
    },
    {
      q: "Which number should I call in an emergency?",
      a: "Call 112 for ambulance or fire, 110 for police, and 116 117 for non-life-threatening out-of-hours medical care. Open the Emergency module for more contacts.",
      keys: ["emergency", "ambulance", "fire", "police", "doctor", "urgent", "112", "110"],
      href: "modules/emergency.html",
    },
    {
      q: "Where can I get legal help?",
      a: "The Legal module explains support options and official resources. Website information is not legal advice; urgent or personal matters should go to a licensed lawyer or counselling service.",
      keys: ["legal", "law", "lawyer", "rights", "letter", "deadline"],
      href: "modules/legal.html",
    },
    {
      q: "How do I open a German bank account?",
      a: "The Banking module explains common account options, identity checks, transfers, and Schufa basics. Confirm fees and eligibility directly with the provider.",
      keys: ["bank", "account", "money", "wise", "schufa", "transfer"],
      href: "modules/banking.html",
    },
  ];

  const base = location.pathname.includes("/modules/") ? "../" : "";
  const normalize = (text) => text.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();
  const answer = (question) => {
    const tokens = normalize(question).split(" ").filter((token) => token.length > 2);
    const ranked = faqs.map((faq) => ({
      faq,
      score: tokens.reduce((score, token) => score + (normalize(`${faq.q} ${faq.a} ${faq.keys.join(" ")}`).includes(token) ? 1 : 0), 0),
    })).sort((a, b) => b.score - a.score);
    if (ranked[0] && ranked[0].score > 0) return { text: ranked[0].faq.a, source: ranked[0].faq };

    const matches = document.body.innerText.split(/(?<=[.!?])\s+/).map((sentence) => ({
      sentence: sentence.trim(),
      score: tokens.reduce((score, token) => score + (normalize(sentence).includes(token) ? 1 : 0), 0),
    })).filter((item) => item.score > 0 && item.sentence.length > 35 && item.sentence.length < 300).sort((a, b) => b.score - a.score).slice(0, 2);
    if (matches.length) return { text: `Based on this page: ${matches.map((item) => item.sentence).join(" ")}` };
    return { text: "I could not find that in the FAQs or on this page. Try asking about registration, jobs, visas, housing, banking, legal help, or emergencies." };
  };

  const style = document.createElement("style");
  style.textContent = `
    .ng-chat-button{position:fixed;left:22px;bottom:22px;z-index:9998;width:56px;height:56px;border:0;border-radius:50%;background:linear-gradient(135deg,#ffcc02,#dd0000);color:#111;font-size:23px;cursor:pointer;box-shadow:0 8px 25px #0008}
    .ng-chat{position:fixed;left:22px;bottom:88px;z-index:9999;width:min(370px,calc(100vw - 28px));height:min(520px,calc(100vh - 115px));display:none;flex-direction:column;overflow:hidden;border:1px solid #ffffff18;border-radius:18px;background:#111520;color:#f1f5f9;box-shadow:0 22px 60px #000b;font-family:Segoe UI,system-ui,sans-serif}
    .ng-chat.open{display:flex}.ng-head{padding:14px 16px;background:linear-gradient(135deg,#202638,#111520);border-bottom:2px solid #ffcc02;font-weight:800}.ng-head small{display:block;color:#94a3b8;font-weight:400;margin-top:3px}
    .ng-messages{flex:1;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:9px}.ng-msg{max-width:82%;padding:9px 11px;border-radius:13px;font-size:13px;line-height:1.55;white-space:pre-wrap}.ng-bot{background:#1a1f2e}.ng-user{background:#ffcc02;color:#111;align-self:flex-end}.ng-source{display:block;color:#ffcc02;margin-top:6px;font-size:11px}
    .ng-starters{padding:0 12px 8px;display:flex;gap:5px;flex-wrap:wrap}.ng-starters button{border:1px solid #ffffff18;border-radius:14px;background:#1a1f2e;color:#cbd5e1;padding:5px 8px;font-size:10px;cursor:pointer}
    .ng-form{display:flex;gap:7px;padding:10px;border-top:1px solid #ffffff12}.ng-form input{flex:1;min-width:0;padding:10px;border:1px solid #ffffff18;border-radius:9px;background:#0a0d14;color:#fff}.ng-form button{border:0;border-radius:9px;background:#ffcc02;color:#111;font-weight:800;padding:0 13px;cursor:pointer}
  `;
  document.head.appendChild(style);

  const panel = document.createElement("section");
  panel.className = "ng-chat";
  panel.setAttribute("aria-label", "Navigate Germany assistant");
  panel.innerHTML = `
    <div class="ng-head">Navigate Germany Assistant<small>FAQs + information from this website</small></div>
    <div class="ng-messages"><div class="ng-msg ng-bot">Hello! Ask me about living in Germany or the information on this page.</div></div>
    <div class="ng-starters">${faqs.slice(0, 4).map((faq) => `<button type="button">${faq.q}</button>`).join("")}</div>
    <form class="ng-form"><input aria-label="Your question" placeholder="Ask about Germany..." maxlength="500"><button>Send</button></form>
  `;
  const toggle = document.createElement("button");
  toggle.className = "ng-chat-button";
  toggle.type = "button";
  toggle.setAttribute("aria-label", "Open assistant");
  toggle.textContent = "?";
  document.body.append(panel, toggle);

  const messages = panel.querySelector(".ng-messages");
  const input = panel.querySelector("input");
  const starters = panel.querySelector(".ng-starters");
  const send = (question) => {
    const value = question.trim();
    if (!value) return;
    messages.insertAdjacentHTML("beforeend", `<div class="ng-msg ng-user"></div>`);
    messages.lastElementChild.textContent = value;
    const result = answer(value);
    const bot = document.createElement("div");
    bot.className = "ng-msg ng-bot";
    bot.textContent = result.text;
    if (result.source) {
      const link = document.createElement("a");
      link.className = "ng-source";
      link.href = `${base}${result.source.href}`;
      link.textContent = `Source: ${result.source.q}`;
      bot.appendChild(link);
    }
    messages.appendChild(bot);
    starters.style.display = "none";
    messages.scrollTop = messages.scrollHeight;
    input.value = "";
  };
  toggle.addEventListener("click", () => {
    panel.classList.toggle("open");
    toggle.textContent = panel.classList.contains("open") ? "x" : "?";
    if (panel.classList.contains("open")) input.focus();
  });
  panel.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    send(input.value);
  });
  starters.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => send(button.textContent)));
})();
