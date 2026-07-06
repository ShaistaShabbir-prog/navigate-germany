// navigate-germany — Emergency offline cache
// Caches critical emergency numbers for offline access

const EMERGENCY_DATA = {
  germany: {
    police: "110",
    fire: "112",
    ambulance: "112",
    poison: "030 19240",
    domestic_violence: "08000 116 016",
    mental_health: "0800 111 0 111",
    youth: "0800 111 0 333",
  },
  by_state: {
    hamburg: { buergeramt: "040 428 28-0", auslaenderbehoerde: "040 428 39-0" },
    berlin: { buergeramt: "030 115", auslaenderbehoerde: "030 90269-0" },
    bayern: { buergeramt: "089 233-0", auslaenderbehoerde: "089 233-44660" },
    nrw: { buergeramt: "0221 221-0", auslaenderbehoerde: "0221 221-27800" },
    bw: { buergeramt: "0711 216-0", auslaenderbehoerde: "0711 216-93000" },
    hessen: { buergeramt: "069 212-0", auslaenderbehoerde: "069 1563-0" },
    sachsen: { buergeramt: "0351 488-0", auslaenderbehoerde: "0351 488-2834" },
  }
};

// Cache to localStorage for offline access
function cacheEmergencyData() {
  try {
    localStorage.setItem('ng_emergency', JSON.stringify(EMERGENCY_DATA));
    localStorage.setItem('ng_emergency_cached', new Date().toISOString());
  } catch(e) { console.warn('Could not cache emergency data:', e); }
}

function getEmergencyData() {
  try {
    const cached = localStorage.getItem('ng_emergency');
    return cached ? JSON.parse(cached) : EMERGENCY_DATA;
  } catch(e) { return EMERGENCY_DATA; }
}

function renderEmergencyWidget() {
  const data = getEmergencyData();
  const el = document.getElementById('emergency-widget');
  if (!el) return;

  el.innerHTML = `
    <div style="background:#1a0a0a;border:1px solid #dc2626;border-radius:8px;padding:1rem;margin:1rem 0">
      <h3 style="color:#ef4444;margin:0 0 0.75rem">🆘 Emergency Numbers — Germany</h3>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;font-size:0.9rem">
        <div><strong style="color:#fca5a5">Police:</strong> <a href="tel:110" style="color:#fff">110</a></div>
        <div><strong style="color:#fca5a5">Fire/Ambulance:</strong> <a href="tel:112" style="color:#fff">112</a></div>
        <div><strong style="color:#fca5a5">Poison Control:</strong> <a href="tel:03019240" style="color:#fff">030 19240</a></div>
        <div><strong style="color:#fca5a5">DV Hotline:</strong> <a href="tel:08000116016" style="color:#fff">08000 116 016</a></div>
      </div>
      <p style="color:#9ca3af;font-size:0.75rem;margin:0.5rem 0 0">Works offline — saved to your device</p>
    </div>`;

  cacheEmergencyData();
}

document.addEventListener('DOMContentLoaded', renderEmergencyWidget);
