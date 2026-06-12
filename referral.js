
// ═══════════════════════════════════════════════════════════════
//  Navigate Germany — Referral Banner Widget
//  Shows rotating partner cards at bottom of every page
// ═══════════════════════════════════════════════════════════════
(function() {

const PARTNERS = [
  {
    id: "commerzbank",
    logo: "🏦",
    name: "Commerzbank",
    headline: "Open a German bank account — get €50 starting credit",
    desc: "Germany's most popular bank for newcomers. Free account with salary deposit. Branches in every city. Use promo code at signup.",
    badge: "€50 Bonus",
    badgeColor: "#16a34a",
    code: "PNGHRA",
    cta: "Open account →",
    url: "https://www.commerzbank.de/girokonto-antrag?path=/pk/de/Abschluss/GD51_Girokonto_DD_MCD_TGK_50Start_KwK&x-werbecode=PNGHRA",
    note: "Use code PNGHRA at checkout · Free · Takes 10 min online",
    color: "#FFD700",
    bg: "linear-gradient(135deg,#0a2342,#0d3060)",
  },
  {
    id: "advanzia",
    logo: "💳",
    name: "Advanzia Mastercard Gold",
    headline: "Free credit card — no annual fee, worldwide travel insurance",
    desc: "Germany's most popular free credit card. No annual fee ever. Accepted worldwide. Free travel insurance included. Perfect for newcomers.",
    badge: "100% Free",
    badgeColor: "#dc2626",
    code: null,
    cta: "Get free card →",
    url: "https://refer.gebuhrenfrei.com/shaistas-45",
    note: "No annual fee · No hidden costs · Instant online application",
    color: "#FFD700",
    bg: "linear-gradient(135deg,#1a0a0a,#3d0000)",
  },
  {
    id: "wise",
    logo: "💸",
    name: "Wise (TransferWise)",
    headline: "Send money home — real exchange rate, lowest fees",
    desc: "The cheapest way to send money to Pakistan, India, Bangladesh and 80+ countries. Up to 8× cheaper than your bank. Millions of immigrants use it.",
    badge: "Save up to 8×",
    badgeColor: "#0d9488",
    code: null,
    cta: "Send money cheaper →",
    url: "https://wise.com/invite/shaistashabbir",
    note: "Real mid-market rate · No hidden markup · Used by 16M+ people",
    color: "#00B9FF",
    bg: "linear-gradient(135deg,#00192b,#003352)",
  },
];

// ── Inject CSS ──────────────────────────────────────────────────
const style = document.createElement("style");
style.textContent = `
  .ref-bar {
    position: fixed; bottom: 0; left: 0; right: 0; z-index: 8000;
    padding: 0 12px 12px;
    pointer-events: none;
  }
  .ref-card {
    max-width: 480px;
    margin: 0 auto;
    border-radius: 16px;
    padding: 14px 16px;
    display: flex;
    gap: 12px;
    align-items: center;
    pointer-events: all;
    box-shadow: 0 8px 40px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.06);
    animation: refSlide .35s cubic-bezier(.34,1.56,.64,1);
    cursor: default;
    position: relative;
  }
  @keyframes refSlide {
    from { opacity:0; transform:translateY(20px) scale(.97); }
    to   { opacity:1; transform:translateY(0) scale(1); }
  }
  .ref-logo {
    font-size: 2rem;
    flex-shrink: 0;
    width: 48px; height: 48px;
    border-radius: 12px;
    background: rgba(255,255,255,.1);
    display: flex; align-items: center; justify-content: center;
  }
  .ref-body { flex: 1; min-width: 0; }
  .ref-top { display: flex; align-items: center; gap: 8px; margin-bottom: 2px; flex-wrap: wrap; }
  .ref-name { font-weight: 800; font-size: .82rem; color: #fff; }
  .ref-badge {
    font-size: .65rem; font-weight: 800;
    padding: 2px 8px; border-radius: 20px;
    color: #fff;
  }
  .ref-headline { font-size: .8rem; font-weight: 700; color: #fff; margin-bottom: 2px; line-height: 1.3; }
  .ref-note { font-size: .68rem; color: rgba(255,255,255,.5); line-height: 1.4; }
  .ref-code-pill {
    display: inline-flex; align-items: center; gap: 4px;
    background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.15);
    border-radius: 6px; padding: 2px 8px;
    font-size: .7rem; font-weight: 800; color: #FFD700;
    cursor: pointer; margin-top: 3px;
    transition: background .15s;
  }
  .ref-code-pill:hover { background: rgba(255,255,255,.18); }
  .ref-actions { display: flex; flex-direction: column; gap: 6px; flex-shrink: 0; }
  .ref-cta {
    display: inline-block;
    padding: 9px 14px;
    border-radius: 10px;
    background: #FFCC02;
    color: #0B1D3A;
    font-weight: 800;
    font-size: .75rem;
    text-decoration: none;
    white-space: nowrap;
    text-align: center;
    transition: transform .15s, box-shadow .15s;
    box-shadow: 0 2px 12px rgba(255,204,2,.3);
  }
  .ref-cta:hover { transform: scale(1.04); box-shadow: 0 4px 20px rgba(255,204,2,.5); }
  .ref-close {
    position: absolute; top: 10px; right: 12px;
    background: none; border: none; color: rgba(255,255,255,.35);
    font-size: .9rem; cursor: pointer; padding: 2px;
    line-height: 1; transition: color .15s;
  }
  .ref-close:hover { color: rgba(255,255,255,.8); }
  .ref-dots {
    display: flex; justify-content: center; gap: 5px;
    margin-top: 6px;
  }
  .ref-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: rgba(255,255,255,.25);
    cursor: pointer; transition: all .2s;
    border: none; padding: 0;
  }
  .ref-dot.active { background: #FFCC02; width: 18px; border-radius: 3px; }
  .ref-prev-next {
    display: flex; gap: 5px; align-items: center; justify-content: center; margin-top: 4px;
  }
  .ref-nav-btn {
    background: rgba(255,255,255,.08); border: none; border-radius: 6px;
    color: rgba(255,255,255,.5); font-size: .7rem; cursor: pointer;
    padding: 3px 8px; transition: all .15s;
  }
  .ref-nav-btn:hover { background: rgba(255,255,255,.15); color: #fff; }
  .ref-dismiss-all {
    display: block; text-align: center;
    font-size: .65rem; color: rgba(255,255,255,.25);
    cursor: pointer; margin-top: 3px;
    background: none; border: none; width: 100%;
    transition: color .15s;
  }
  .ref-dismiss-all:hover { color: rgba(255,255,255,.5); }
  @media (max-width: 520px) {
    .ref-card { padding: 12px 14px 14px; gap: 10px; }
    .ref-headline { font-size: .75rem; }
    .ref-cta { padding: 8px 11px; font-size: .72rem; }
  }
`;
document.head.appendChild(style);

// ── State ──────────────────────────────────────────────────────
const DISMISSED_KEY = "ng_ref_dismissed";
const SEEN_KEY = "ng_ref_seen";

function isDismissed() {
  try { return localStorage.getItem(DISMISSED_KEY) === "1"; } catch { return false; }
}
function markDismissed() {
  try { localStorage.setItem(DISMISSED_KEY, "1"); } catch {}
}
function getLastSeen() {
  try { return parseInt(localStorage.getItem(SEEN_KEY) || "0"); } catch { return 0; }
}
function saveLastSeen(i) {
  try { localStorage.setItem(SEEN_KEY, String(i)); } catch {}
}

if (isDismissed()) return;

let currentIdx = getLastSeen() % PARTNERS.length;
let bar, card, rotateTimer;

// ── Build bar ──────────────────────────────────────────────────
function buildBar() {
  bar = document.createElement("div");
  bar.className = "ref-bar";
  bar.id = "ref-bar";
  document.body.appendChild(bar);
  renderCard();

  // Auto-rotate every 12 seconds
  rotateTimer = setInterval(() => {
    currentIdx = (currentIdx + 1) % PARTNERS.length;
    saveLastSeen(currentIdx);
    renderCard();
  }, 12000);
}

function copyCode(code, el) {
  navigator.clipboard?.writeText(code).then(() => {
    el.textContent = "✓ Copied!";
    setTimeout(() => { el.textContent = `📋 ${code}`; }, 1500);
  }).catch(() => {
    el.textContent = `📋 ${code}`;
  });
}

function renderCard() {
  const p = PARTNERS[currentIdx];
  bar.innerHTML = "";

  const card = document.createElement("div");
  card.className = "ref-card";
  card.style.background = p.bg;

  card.innerHTML = `
    <button class="ref-close" aria-label="Close">✕</button>
    <div class="ref-logo">${p.logo}</div>
    <div class="ref-body">
      <div class="ref-top">
        <span class="ref-name">${p.name}</span>
        <span class="ref-badge" style="background:${p.badgeColor}">${p.badge}</span>
      </div>
      <div class="ref-headline">${p.headline}</div>
      ${p.code ? `<div class="ref-code-pill" onclick="navigator.clipboard?.writeText('${p.code}').then(()=>{this.textContent='✓ Copied!';setTimeout(()=>{this.textContent='📋 Code: ${p.code}'},1500)})">📋 Code: ${p.code}</div>` : ""}
      <div class="ref-note">${p.note}</div>
    </div>
    <div class="ref-actions">
      <a class="ref-cta" href="${p.url}" target="_blank" rel="noopener sponsored">
        ${p.cta}
      </a>
    </div>
  `;

  // Navigation dots
  const dotsRow = document.createElement("div");
  dotsRow.className = "ref-prev-next";

  const prev = document.createElement("button");
  prev.className = "ref-nav-btn";
  prev.textContent = "‹";
  prev.onclick = () => { currentIdx = (currentIdx - 1 + PARTNERS.length) % PARTNERS.length; saveLastSeen(currentIdx); renderCard(); resetTimer(); };

  const dots = document.createElement("div");
  dots.className = "ref-dots";
  PARTNERS.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "ref-dot" + (i === currentIdx ? " active" : "");
    dot.onclick = () => { currentIdx = i; saveLastSeen(i); renderCard(); resetTimer(); };
    dots.appendChild(dot);
  });

  const next = document.createElement("button");
  next.className = "ref-nav-btn";
  next.textContent = "›";
  next.onclick = () => { currentIdx = (currentIdx + 1) % PARTNERS.length; saveLastSeen(currentIdx); renderCard(); resetTimer(); };

  const dismiss = document.createElement("button");
  dismiss.className = "ref-dismiss-all";
  dismiss.textContent = "Don't show again";
  dismiss.onclick = () => { clearInterval(rotateTimer); bar.remove(); markDismissed(); };

  dotsRow.append(prev, dots, next);

  const wrapper = document.createElement("div");
  wrapper.style.cssText = "padding:0 4px 4px;";
  wrapper.append(card, dotsRow, dismiss);
  bar.appendChild(wrapper);

  // Close button
  card.querySelector(".ref-close").onclick = () => {
    clearInterval(rotateTimer);
    bar.remove();
    // Show again next page visit
    try { localStorage.removeItem(DISMISSED_KEY); } catch {}
  };
}

function resetTimer() {
  clearInterval(rotateTimer);
  rotateTimer = setInterval(() => {
    currentIdx = (currentIdx + 1) % PARTNERS.length;
    saveLastSeen(currentIdx);
    renderCard();
  }, 12000);
}

// ── Show after 3 seconds ───────────────────────────────────────
setTimeout(buildBar, 3000);

})();
