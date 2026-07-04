(() => {
  const cache = new Map();
  const supported = new Set(["en", "de", "ur", "ar", "fa"]);

  async function load(code) {
    if (!supported.has(code)) return {};
    if (cache.has(code)) return cache.get(code);
    try {
      const response = await fetch(`i18n/${code}.json`, { cache: "force-cache" });
      if (!response.ok) throw new Error(`Translation file ${code} unavailable`);
      const messages = await response.json();
      cache.set(code, messages);
      return messages;
    } catch (error) {
      console.warn("Navigate Germany translation fallback:", error.message);
      return {};
    }
  }

  window.NavigateGermanyI18n = { load, supported: [...supported] };
})();
