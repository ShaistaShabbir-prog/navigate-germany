
// Navigate Germany — Trusted Recommendations Widget
// "A friend who lives in Germany" recommendation style
(function () {

  const PARTNERS = [
    {
      id: "commerzbank",
      context: "bank",        // shown on banking, bureaucracy pages
      category: "🏦 Bank Account",
      title: "We use Commerzbank — and we think you should too",
      personal: "Opening a German bank account was one of the most stressful parts of arriving in Germany. After trying three options, our team settled on Commerzbank. Branches everywhere, real English support on the phone, and the account is free as long as you deposit your salary. We negotiated a €50 starting credit for our users — use the code below.",
      checklist: [
        "Free account — no monthly fees with salary",
        "Branches in every German city (important for newcomers)",
        "Accepted for Meldebescheinigung processes",
        "€50 starting credit with our promo code",
      ],
      safe: "Commerzbank is one of Germany's two largest banks. Regulated by BaFin. Your money is protected up to €100,000 by the Einlagensicherungsfonds.",
      code: "PNGHRA",
      codeLabel: "Your promo code",
      cta: "Open account with €50 bonus",
      url: "https://www.commerzbank.de/girokonto-antrag?path=/pk/de/Abschluss/GD51_Girokonto_DD_MCD_TGK_50Start_KwK&x-werbecode=PNGHRA",
      accent: "#FFD700",
      bg: "#0a1628",
      border: "rgba(255,215,0,.2)",
      note: "Takes 10 min online · Meldebescheinigung required · Schufa check",
    },
    {
      id: "advanzia",
      context: "bank",
      category: "💳 Credit Card",
      title: "The only credit card we recommend for newcomers in Germany",
      personal: "Most German credit cards have hidden fees. Advanzia Mastercard Gold is genuinely, permanently free — no annual fee, ever. We've been using it for years. The free worldwide travel insurance alone is worth more than most paid cards. It also helps build your Schufa score from day one.",
      checklist: [
        "Zero annual fee — no hidden costs, ever",
        "Free worldwide travel insurance (flights, hotels, luggage)",
        "Accepted everywhere Mastercard works",
        "Builds your German Schufa credit history",
        "Instant online application — approved in minutes",
      ],
      safe: "Advanzia Bank is a Luxembourg-based bank licensed by the CSSF. Cards issued under Mastercard's global fraud protection. Your application is handled securely online.",
      code: null,
      codeLabel: null,
      cta: "Get your free card →",
      url: "https://refer.gebuhrenfrei.com/shaistas-45",
      accent: "#f87171",
      bg: "#1a0505",
      border: "rgba(248,113,113,.2)",
      note: "No annual fee · No catch · Click our link to apply securely",
    },
    {
      id: "wise",
      context: "transfer",
      category: "💸 Money Transfer",
      title: "How we send money home — Wise saves us hundreds per year",
      personal: "When we first arrived in Germany, we sent money home through our German bank and lost €30–40 every time in hidden exchange rate fees. A colleague showed us Wise. The difference was immediate — same amount sent, 5–8× less in fees, money arrived the same day. We've recommended it to every immigrant we know since then.",
      checklist: [
        "Real mid-market exchange rate — no hidden markup",
        "Send to Pakistan (PKR), India (INR), Bangladesh (BDT) and 80+ countries",
        "Transfers arrive same day or next day",
        "Transparent fee shown upfront — no surprises",
        "Multi-currency account — hold money in 50+ currencies",
      ],
      safe: "Wise is regulated by the FCA (UK), FinCEN (USA), and financial authorities in 50+ countries. Used by 16 million customers worldwide. Your money is held in reputable banks, segregated from company funds.",
      code: null,
      codeLabel: null,
      cta: "Send your first transfer →",
      url: "https://wise.com/invite/shaistashabbir",
      accent: "#34d399",
      bg: "#00192b",
      border: "rgba(52,211,153,.2)",
      note: "First transfer fee-free with our link · Compare at wise.com before sending",
    },
  ];

  // ── CSS ────────────────────────────────────────────────────────
  const css = document.createElement("style");
  css.textContent = `
    .ng-rec-wrap {
      position: fixed; bottom: 16px; right: 16px; left: auto;
      z-index: 8000; pointer-events: none;
      width: min(360px, calc(100vw - 32px));
    }
    .ng-rec {
      max-width: 520px;
      margin: 0 auto;
      border-radius: 20px;
      overflow: hidden;
      pointer-events: all;
      box-shadow: 0 16px 48px rgba(0,0,0,.7), 0 0 0 1px rgba(255,255,255,.06);
      animation: ngRecIn .35s cubic-bezier(.34,1.56,.64,1);
      font-family: 'Segoe UI', system-ui, sans-serif;
    }
    @keyframes ngRecIn {
      from { opacity:0; transform:translateY(24px) scale(.96); }
      to   { opacity:1; transform:translateY(0) scale(1); }
    }

    /* Top bar — "personal recommendation" */
    .ng-rec-topbar {
      display: flex; align-items: center; gap: 8px;
      padding: 9px 16px;
      background: rgba(255,255,255,.04);
      border-bottom: 1px solid rgba(255,255,255,.06);
      font-size: .68rem; color: rgba(255,255,255,.45);
      letter-spacing: .03em;
    }
    .ng-rec-avatar {
      width: 22px; height: 22px; border-radius: 50%;
      background: linear-gradient(135deg, #FFCC02, #f59e0b);
      display: flex; align-items: center; justify-content: center;
      font-size: .7rem; font-weight: 900; color: #000;
      flex-shrink: 0;
    }
    .ng-rec-verified {
      margin-left: auto; display: flex; align-items: center; gap: 4px;
      color: rgba(255,255,255,.35); font-size: .62rem;
    }
    .ng-rec-verified-dot { width:5px;height:5px;border-radius:50%;background:#22c55e;flex-shrink:0; }

    /* Body */
    .ng-rec-body { padding: 16px 18px; }
    .ng-rec-cat { font-size:.65rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;opacity:.5;margin-bottom:5px; }
    .ng-rec-title { font-size:.9rem;font-weight:800;color:#fff;line-height:1.3;margin-bottom:10px; }
    .ng-rec-personal {
      font-size:.78rem;color:rgba(255,255,255,.6);line-height:1.7;
      padding:10px 12px;border-radius:10px;
      background:rgba(255,255,255,.04);border-left:2px solid;
      margin-bottom:10px;
      font-style:italic;
    }
    .ng-rec-checks { display:flex;flex-direction:column;gap:4px;margin-bottom:10px; }
    .ng-rec-check { display:flex;align-items:flex-start;gap:7px;font-size:.76rem;color:rgba(255,255,255,.75);line-height:1.4; }
    .ng-rec-checkmark { flex-shrink:0;font-size:.65rem;margin-top:2px; }

    /* Safety note */
    .ng-rec-safe {
      display:flex;align-items:flex-start;gap:6px;
      padding:8px 10px;border-radius:8px;
      background:rgba(34,197,94,.06);border:1px solid rgba(34,197,94,.15);
      font-size:.68rem;color:rgba(255,255,255,.45);line-height:1.5;
      margin-bottom:12px;
    }
    .ng-rec-safe-icon { flex-shrink:0;font-size:.75rem;margin-top:1px; }

    /* Code pill */
    .ng-rec-code-row { display:flex;align-items:center;gap:8px;margin-bottom:12px;flex-wrap:wrap; }
    .ng-rec-code-label { font-size:.65rem;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.06em; }
    .ng-rec-code-pill {
      display:inline-flex;align-items:center;gap:5px;
      background:rgba(255,204,2,.1);border:1px solid rgba(255,204,2,.3);
      border-radius:7px;padding:5px 11px;
      font-size:.8rem;font-weight:900;color:#FFCC02;
      cursor:pointer;transition:all .15s;letter-spacing:.08em;
    }
    .ng-rec-code-pill:hover { background:rgba(255,204,2,.18); }

    /* CTA row */
    .ng-rec-cta-row { display:flex;align-items:center;gap:10px;flex-wrap:wrap; }
    .ng-rec-cta {
      flex:1;min-width:0;text-align:center;
      display:block;padding:11px 18px;border-radius:12px;
      font-weight:800;font-size:.82rem;text-decoration:none;
      transition:transform .15s, box-shadow .15s;
    }
    .ng-rec-cta:hover { transform:scale(1.03); }
    .ng-rec-footnote { font-size:.62rem;color:rgba(255,255,255,.25);line-height:1.4; }

    /* Navigation */
    .ng-rec-nav {
      display:flex;align-items:center;justify-content:space-between;
      padding:8px 14px 10px;
      border-top:1px solid rgba(255,255,255,.05);
      background:rgba(0,0,0,.2);
    }
    .ng-rec-dots { display:flex;gap:5px;align-items:center; }
    .ng-rec-dot {
      width:6px;height:6px;border-radius:3px;
      background:rgba(255,255,255,.2);border:none;cursor:pointer;
      padding:0;transition:all .2s;
    }
    .ng-rec-dot.on { width:16px;background:#FFCC02; }
    .ng-rec-navbtn {
      background:rgba(255,255,255,.06);border:none;border-radius:7px;
      color:rgba(255,255,255,.4);font-size:.75rem;cursor:pointer;
      padding:4px 10px;transition:all .15s;
    }
    .ng-rec-navbtn:hover { background:rgba(255,255,255,.12);color:#fff; }
    .ng-rec-close {
      background:none;border:none;color:rgba(255,255,255,.25);
      font-size:.75rem;cursor:pointer;padding:2px 4px;
      transition:color .15s;letter-spacing:.02em;
    }
    .ng-rec-close:hover { color:rgba(255,255,255,.6); }

    @media(max-width:560px){
      .ng-rec-wrap { padding:0 0 8px; }
      .ng-rec { border-radius:16px 16px 0 0; max-width:100%; }
      .ng-rec-body { padding:14px 15px; }
      .ng-rec-personal { display:none; }
    }
  `;
  document.head.appendChild(css);

  // ── State ──────────────────────────────────────────────────────
  const SK = "ng_rec_idx", DK = "ng_rec_gone";
  const gone = () => { try { return localStorage.getItem(DK)==="1"; } catch { return false; } };
  const setGone = () => { try { localStorage.setItem(DK,"1"); } catch {} };
  const getIdx = () => { try { return parseInt(localStorage.getItem(SK)||"0"); } catch { return 0; } };
  const saveIdx = i => { try { localStorage.setItem(SK, String(i)); } catch {} };

  if (gone()) return;

  let idx = getIdx() % PARTNERS.length;
  let wrap, timer;

  function build() {
    wrap = document.createElement("div");
    wrap.className = "ng-rec-wrap";
    document.body.appendChild(wrap);
    render();
    timer = setInterval(() => { idx = (idx+1) % PARTNERS.length; saveIdx(idx); render(); }, 15000);
  }

  function render() {
    const p = PARTNERS[idx];
    wrap.innerHTML = "";

    const box = document.createElement("div");
    box.className = "ng-rec";
    box.style.background = p.bg;
    box.style.border = `1px solid ${p.border}`;

    // Top bar
    const top = `<div class="ng-rec-topbar">
      <div class="ng-rec-avatar">S</div>
      <span>Personal recommendation from our Germany guide team</span>
      <div class="ng-rec-verified">
        <span class="ng-rec-verified-dot"></span>
        Verified by team
      </div>
    </div>`;

    // Checklist
    const checks = p.checklist.map(c =>
      `<div class="ng-rec-check">
        <span class="ng-rec-checkmark" style="color:${p.accent}">✓</span>
        <span>${c}</span>
      </div>`
    ).join("");

    // Code pill
    const codePill = p.code ? `
      <div class="ng-rec-code-row">
        <span class="ng-rec-code-label">${p.codeLabel}</span>
        <div class="ng-rec-code-pill" id="ng-cpill-${p.id}"
          onclick="navigator.clipboard?.writeText('${p.code}').then(()=>{const el=document.getElementById('ng-cpill-${p.id}');el.innerHTML='✓ Copied!';setTimeout(()=>{el.innerHTML='📋 &nbsp;${p.code}'},1600)})">
          📋 &nbsp;${p.code}
        </div>
      </div>` : "";

    box.innerHTML = top + `
      <div class="ng-rec-body">
        <div class="ng-rec-cat">${p.category}</div>
        <div class="ng-rec-title">${p.title}</div>
        <div class="ng-rec-personal" style="border-color:${p.accent}40">"${p.personal}"</div>
        <div class="ng-rec-checks">${checks}</div>
        <div class="ng-rec-safe">
          <span class="ng-rec-safe-icon">🔒</span>
          <span>${p.safe}</span>
        </div>
        ${codePill}
        <div class="ng-rec-cta-row">
          <a class="ng-rec-cta" href="${p.url}" target="_blank" rel="noopener sponsored"
            style="background:${p.accent};color:${p.id==='advanzia'?'#fff':'#0B1D3A'};box-shadow:0 3px 16px ${p.accent}40">
            ${p.cta}
          </a>
        </div>
        <div class="ng-rec-footnote" style="margin-top:7px">${p.note}</div>
      </div>
      <div class="ng-rec-nav">
        <div style="display:flex;gap:6px;align-items:center">
          <button class="ng-rec-navbtn" id="ng-prev">‹</button>
          <button class="ng-rec-navbtn" onclick="document.getElementById('ng-rec-collapse').click()" style="font-size:.65rem;">↓ Collapse</button>
          <div class="ng-rec-dots" id="ng-dots"></div>
          <button class="ng-rec-navbtn" id="ng-next">›</button>
        </div>
        <div style="display:flex;gap:10px;align-items:center">
          <button class="ng-rec-navbtn" id="ng-rec-collapse">↓ Collapse</button>
          <button class="ng-rec-close" id="ng-hide">Hide</button>
          <button class="ng-rec-close" id="ng-gone">Don't show again</button>
        </div>
      </div>
    `;

    wrap.appendChild(box);

    // Dots
    const dotsEl = document.getElementById("ng-dots");
    PARTNERS.forEach((_, i) => {
      const d = document.createElement("button");
      d.className = "ng-rec-dot" + (i===idx?" on":"");
      d.onclick = () => { idx=i; saveIdx(i); render(); reset(); };
      dotsEl.appendChild(d);
    });

    // Nav buttons
    document.getElementById("ng-prev").onclick = () => { idx=(idx-1+PARTNERS.length)%PARTNERS.length; saveIdx(idx); render(); reset(); };
    document.getElementById("ng-next").onclick = () => { idx=(idx+1)%PARTNERS.length; saveIdx(idx); render(); reset(); };

    // Collapse back to pill
    document.getElementById("ng-rec-collapse").onclick = () => {
      expanded = false; clearInterval(timer); renderPill();
    };
    // Hide (this session)
    document.getElementById("ng-hide").onclick = () => { clearInterval(timer); wrap.remove(); };

    // Gone (permanent)
    document.getElementById("ng-gone").onclick = () => { clearInterval(timer); wrap.remove(); setGone(); };
  }

  function reset() {
    clearInterval(timer);
    timer = setInterval(() => { idx=(idx+1)%PARTNERS.length; saveIdx(idx); render(); }, 15000);
  }

  // Show after 5 seconds — collapsed pill first, expand on click
  setTimeout(build, 5000);

})();
