/**
 * Navigate Germany — i18n translation loader
 * Provides NavigateGermanyI18n.load(code) for use by home.js setLanguage()
 * home.js handles all DOM updates and language select wiring
 */
(() => {
  const cache = new Map();
  const supported = new Set(["en","de","ur","ar","fr","hi","ru","tr","uk"]);

  async function load(code) {
    if (!code || !supported.has(code)) return {};
    if (cache.has(code)) return cache.get(code);
    try {
      const r = await fetch(`i18n/${code}.json`, { cache: "force-cache" });
      if (!r.ok) throw new Error(`i18n/${code}.json not found`);
      const msgs = await r.json();
      cache.set(code, msgs);
      return msgs;
    } catch (e) {
      console.warn("[navigate-germany i18n]", e.message);
      return {};
    }
  }

  window.NavigateGermanyI18n = { load, supported: [...supported] };
})();
