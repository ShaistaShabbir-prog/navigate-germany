(() => {
  const cache = new Map();
  const supported = new Set(["en","de","ur","ar","fr","hi","ru","tr","uk"]);

  async function load(code) {
    if (!supported.has(code)) return {};
    if (cache.has(code)) return cache.get(code);
    try {
      const r = await fetch(`i18n/${code}.json`, { cache: "force-cache" });
      if (!r.ok) throw new Error(`Translation file ${code} unavailable`);
      const msgs = await r.json();
      cache.set(code, msgs);
      return msgs;
    } catch (e) {
      console.warn("Navigate Germany translation fallback:", e.message);
      return {};
    }
  }

  async function apply(code) {
    const msgs = await load(code || "en");
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (msgs[key]) el.textContent = msgs[key];
    });
    document.documentElement.lang = code || "en";
    const rtl = ["ar","ur","fa","he"];
    document.documentElement.dir = rtl.includes(code) ? "rtl" : "ltr";
    try { localStorage.setItem("ng_lang", code); } catch(e) {}
  }

  window.NavigateGermanyI18n = { load, apply, supported: [...supported] };

  // Auto-apply saved language
  window.addEventListener("DOMContentLoaded", () => {
    const saved = (function(){ try { return localStorage.getItem("ng_lang"); } catch(e){ return null; }})();
    const browser = navigator.language.split("-")[0];
    const lang = supported.has(saved) ? saved : supported.has(browser) ? browser : "en";
    if (lang !== "en") apply(lang);

    // Wire up language select
    const sel = document.getElementById("language-select");
    if (sel) {
      if (saved && sel.querySelector(`option[value="${saved}"]`)) sel.value = saved;
      sel.addEventListener("change", e => apply(e.target.value));
    }
  });
})();
