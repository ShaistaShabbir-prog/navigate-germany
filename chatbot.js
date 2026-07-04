(() => {
  // ═══════════════════════════════════════════════════════
  //  Navigate Germany — Smart Chatbot
  //  Multilingual · Urgent deadline alerts · 35+ FAQs
  // ═══════════════════════════════════════════════════════

  const LANGS = {
    en: {
      greeting: "Hello! 👋 Ask me anything about living in Germany — registration, visas, jobs, housing, legal rights, health insurance, and more.",
      placeholder: "Ask about Germany...",
      send: "Send",
      source: "More info →",
      fallback: "I couldn't find a specific answer. Try asking about Anmeldung, Blue Card, housing rights, emergency numbers, or Kindergeld.",
      followUpLabel: "You might also ask:",
    },
    de: {
      greeting: "Hallo! 👋 Stellen Sie mir Fragen zu Leben in Deutschland — Anmeldung, Visum, Arbeit, Wohnen, Krankenversicherung und mehr.",
      placeholder: "Fragen Sie über Deutschland...",
      send: "Senden",
      source: "Mehr Infos →",
      fallback: "Ich habe keine genaue Antwort gefunden. Fragen Sie über Anmeldung, Blue Card, Mieterrechte oder Notfallnummern.",
      followUpLabel: "Sie könnten auch fragen:",
    },
    ar: {
      greeting: "مرحباً! 👋 اسألني عن الحياة في ألمانيا — التسجيل، التأشيرات، العمل، السكن، التأمين الصحي، والمزيد.",
      placeholder: "اسأل عن ألمانيا...",
      send: "إرسال",
      source: "مزيد من المعلومات →",
      fallback: "لم أجد إجابة محددة. حاول السؤال عن التسجيل أو البطاقة الزرقاء أو حقوق المستأجر أو أرقام الطوارئ.",
      followUpLabel: "قد تسأل أيضاً:",
    },
    ur: {
      greeting: "السلام علیکم! 👋 جرمنی میں زندگی کے بارے میں کچھ بھی پوچھیں — رجسٹریشن، ویزہ، نوکری، مکان، ہیلتھ انشورنس اور مزید۔",
      placeholder: "جرمنی کے بارے میں پوچھیں...",
      send: "بھیجیں",
      source: "مزید معلومات →",
      fallback: "مجھے کوئی خاص جواب نہیں ملا۔ Anmeldung، Blue Card، کرایہ دار کے حقوق یا ہنگامی نمبروں کے بارے میں پوچھیں۔",
      followUpLabel: "آپ یہ بھی پوچھ سکتے ہیں:",
    },
    tr: {
      greeting: "Merhaba! 👋 Almanya'da yaşam hakkında her şeyi sorun — kayıt, vize, iş, konut, sağlık sigortası ve daha fazlası.",
      placeholder: "Almanya hakkında sorun...",
      send: "Gönder",
      source: "Daha fazla bilgi →",
      fallback: "Belirli bir cevap bulamadım. Anmeldung, Blue Card, kiracı hakları veya acil numaralar hakkında sorun.",
      followUpLabel: "Şunu da sorabilirsiniz:",
    },
    ru: {
      greeting: "Привет! 👋 Спрашивайте обо всём, что касается жизни в Германии — регистрация, виза, работа, жильё, медицинское страхование.",
      placeholder: "Спросите о Германии...",
      send: "Отправить",
      source: "Подробнее →",
      fallback: "Не нашёл точного ответа. Попробуйте спросить об Anmeldung, Blue Card, правах арендатора или номерах экстренных служб.",
      followUpLabel: "Вы также можете спросить:",
    },
    it: {
      greeting: "Ciao! 👋 Chiedimi tutto sulla vita in Germania — registrazione, visti, lavoro, affitti, assicurazione sanitaria e altro.",
      placeholder: "Chiedi sulla Germania...",
      send: "Invia",
      source: "Maggiori info →",
      fallback: "Non ho trovato una risposta specifica. Prova a chiedere di Anmeldung, Blue Card, diritti degli inquilini o numeri di emergenza.",
      followUpLabel: "Potresti anche chiedere:",
    },
    uk: {
      greeting: "Привіт! 👋 Запитуйте про все, що стосується життя в Німеччині — реєстрація, віза, робота, житло, медичне страхування.",
      placeholder: "Запитайте про Німеччину...",
      send: "Надіслати",
      source: "Детальніше →",
      fallback: "Не знайшов точної відповіді. Спробуйте запитати про Anmeldung, Blue Card, права орендарів або екстрені номери.",
      followUpLabel: "Ви також можете запитати:",
    },
  };

  const FAQS = [
    // ── FIRST STEPS ───────────────────────────────────────────────────────────
    {
      q: "What should I do first after arriving in Germany?",
      a: "Your first 5 steps: (1) Anmeldung (address registration) — within 2 weeks at the Bürgeramt, bring WGB form from landlord. (2) Steuer-ID — arrives by post automatically after Anmeldung. (3) Krankenversicherung (health insurance) — apply at TK, DAK, or Barmer with your employment contract. (4) Bank account — N26 or DKB are easiest, no Schufa needed. (5) Ausländerbehörde appointment if you need a residence permit — book early, slots are scarce.",
      keys: ["first", "arrive", "arrival", "new", "start", "begin", "just arrived", "steps"],
      href: "modules/bureaucracy.html",
      followUps: ["How do I do Anmeldung?", "How do I get health insurance in Germany?", "Which bank account should I open?"],
    },
    // ── ANMELDUNG ─────────────────────────────────────────────────────────────
    {
      q: "How do I do Anmeldung (address registration)?",
      a: "Anmeldung is mandatory within 2 weeks of moving (§17 BMG). Steps: (1) Ask your landlord for the Wohnungsgeberbestätigung (WGB) — they are legally required to give it (§19 BMG). (2) Book an appointment at your local Bürgeramt — online via your city's website. (3) Bring: passport + WGB + completed Anmeldeformular. (4) Receive Meldebescheinigung on the same day — you need it for your bank, health insurance, and residence permit. Late registration can result in a fine up to €1,000.",
      keys: ["anmeldung", "register", "registration", "address", "bürgeramt", "meldebescheinigung", "wohnungsgeberbestätigung", "wgb"],
      href: "modules/bureaucracy.html",
      followUps: ["What is the Meldebescheinigung used for?", "What documents do I need for Anmeldung?", "What happens if I miss the 2-week Anmeldung deadline?"],
    },
    // ── VISA & RESIDENCE ──────────────────────────────────────────────────────
    {
      q: "How do I get an EU Blue Card in Germany?",
      a: "EU Blue Card (§19a AufenthG) requirements 2026: (1) University degree recognised in Germany — check anabin.kmk.org. (2) Job offer with annual salary ≥ €50,700 (standard) or ≥ €45,934 for IT, STEM, healthcare, construction, education (shortage occupations). IT specialists: no degree needed with 3+ years experience. Apply at the Ausländerbehörde BEFORE your current visa expires. Validity: 4 years → permanent residence after 21 months with B1 German or 33 months without.",
      keys: ["blue card", "bluecard", "eu blue card", "work permit", "salary", "50700", "45934", "skilled worker visa"],
      href: "modules/jobs.html",
      urgent: false,
      followUps: ["What is the Chancenkarte?", "How do I get permanent residence in Germany?", "What is a Fiktionsbescheinigung?"],
    },
    {
      q: "What is the Chancenkarte (Opportunity Card)?",
      a: "The Chancenkarte (§20a AufenthG) lets you come to Germany for 1 year to job-hunt WITHOUT a job offer. Points needed: minimum 6/10. Points from: degree/qualification (+3), German B2+ (+2)/A2 (+1), English B2+ (+1), 2+ years work experience (+1), under 35 (+1), shortage occupation (+1), Germany connection (+1). You need proof of funds: €1,027/month or blocked account €12,324. During the Chancenkarte: part-time work up to 20 hours/week allowed.",
      keys: ["chancenkarte", "opportunity card", "job search", "no job", "points system", "without job offer", "come to germany"],
      href: "modules/jobs.html",
      followUps: ["What is the EU Blue Card?", "How much money do I need for the Chancenkarte?"],
    },
    {
      q: "What is the Fiktionsbescheinigung?",
      a: "The Fiktionsbescheinigung is a crucial document under §81 AufenthG. If you apply for a residence permit or extension BEFORE your current permit expires, you automatically receive a Fiktionsbescheinigung. It proves you are legally allowed to stay in Germany and continue working while your application is being processed. Processing takes 4–12 weeks — the Fiktionsbescheinigung bridges this gap. NEVER let your visa expire before applying — that puts you in illegal status.",
      keys: ["fiktionsbescheinigung", "extension", "renewal", "permit expires", "still legal", "processing"],
      href: "modules/jobs.html",
      urgent: true,
      followUps: ["What happens if my visa expires?", "How early should I apply for a visa extension?"],
    },
    // ── HEALTH INSURANCE ──────────────────────────────────────────────────────
    {
      q: "How do I get health insurance in Germany?",
      a: "Germany has two systems: GKV (public, mandatory for employees earning ≤ €69,300/year) and PKV (private, for high earners/self-employed). As a new employee: you MUST register with a GKV within your first days of employment. Best options with English support: TK (Techniker Krankenkasse) — best app and service, DAK, Barmer. Cost: ~14.6% of gross salary split 50/50 with employer. Family members can be co-insured for FREE if their income is ≤ €505/month. Apply at the insurer's website with your passport, Meldebescheinigung, and job contract.",
      keys: ["health insurance", "krankenversicherung", "krankenkasse", "gkv", "pkv", "tk", "barmer", "dak", "health"],
      href: "modules/krankenkasse",
      followUps: ["What is covered by German health insurance?", "Can I insure my family in Germany?"],
    },
    // ── HOUSING ───────────────────────────────────────────────────────────────
    {
      q: "How do I find an apartment in Germany?",
      a: "Best platforms: ImmobilienScout24 (largest), ImmoWelt, WG-Gesucht (shared flats — best for newcomers), eBay Kleinanzeigen (cheaper private listings). Tips: (1) Set up instant email alerts for new listings. (2) Reply within hours — good apartments go in 24–48 hours. (3) Prepare a Bewerbungsmappe: cover letter, salary proof, Schufa-Auskunft, last 3 payslips. (4) Never pay a deposit before signing a lease. Average rent (1BR): Munich €1,800, Berlin €1,250, Dortmund €850, Leipzig €750.",
      keys: ["apartment", "flat", "housing", "rent", "wohnung", "immoscout", "wg-gesucht", "find apartment", "mieten"],
      href: "modules/housing.html",
      followUps: ["What are my rights as a tenant in Germany?", "What is Kaution (deposit)?", "How much does it cost to live in Germany?"],
    },
    {
      q: "What are my tenant rights in Germany?",
      a: "Germany has some of the world's strongest tenant protections: (1) Kaution (deposit): max 3 months net cold rent — must be returned within 3–6 months after moving out (§551 BGB). (2) Rent increases: max 20% over 3 years, must reference local Mietspiegel (§558 BGB). (3) Eviction: landlord needs a legally valid reason — rent arrears, material breach, or genuine Eigenbedarf. Many eviction notices are legally invalid. (4) Nebenkosten: only costs listed in your lease can be charged. Dispute wrong charges within 12 months. Join Mieterverein (~€80/year) — invaluable for any dispute.",
      keys: ["tenant rights", "mieter", "rent increase", "mieterhöhung", "eviction", "kündigung", "kaution", "deposit", "bGB"],
      href: "modules/housing.html",
      followUps: ["How do I challenge a rent increase?", "What is the Mieterverein?", "My landlord wants to evict me — what do I do?"],
    },
    // ── LEGAL / URGENT ────────────────────────────────────────────────────────
    {
      q: "I received a Kündigung (dismissal) — what must I do?",
      a: "⚠️ URGENT — 3-WEEK DEADLINE. You have EXACTLY 3 weeks from the date of the dismissal notice to file a Kündigungsschutzklage at the Arbeitsgericht (§4 KSchG). Missing this deadline means your claim is PERMANENTLY LOST. Steps: (1) Read the date on the letter. (2) Calculate 3 weeks from that date. (3) Go to the Arbeitsgericht IN PERSON — filing is FREE for employees. (4) Contact DGB (trade union) or a Rechtsanwalt immediately. Applies after 6+ months employment at companies with 10+ employees.",
      keys: ["kündigung", "dismissal", "fired", "sacked", "job terminated", "kündigungsschutz", "arbeitsgericht"],
      href: "modules/legal.html",
      urgent: true,
      followUps: ["What is the Kündigungsschutzgesetz?", "Where is the Arbeitsgericht?", "How do I get free legal help in Germany?"],
    },
    {
      q: "How do I challenge an official decision (Widerspruch)?",
      a: "Every German official decision (Bescheid) can be challenged. Steps: (1) Check the date on the Bescheid — you have 1 month to file a Widerspruch. (2) Write a formal Widerspruch letter to the issuing authority stating: 'Hiermit lege ich fristgerecht Widerspruch gegen den Bescheid vom [DATE] ein.' Include your reasons. (3) If Widerspruch is rejected: appeal to Verwaltungsgericht within 1 month. This applies to: visa refusals, Jobcenter decisions, tax decisions, any Bescheid. Free letter templates in the Legal module.",
      keys: ["widerspruch", "challenge", "appeal", "bescheid", "official decision", "rejected", "refusal", "dispute"],
      href: "modules/legal.html",
      urgent: true,
      followUps: ["How do I get free legal help?", "My visa was rejected — what can I do?", "What is Beratungshilfe?"],
    },
    {
      q: "How do I get free legal help in Germany?",
      a: "Free and low-cost legal help: (1) Beratungshilfe — get a Beratungshilfeschein from the Amtsgericht (€15 only). Any Rechtsanwalt must accept it. (2) DGB (Deutscher Gewerkschaftsbund) — free employment law advice for union members. (3) Mieterverein — ~€80/year, expert rental law advice worth every cent. (4) Caritas / Diakonie / AWO — free social and migration counselling in many languages. (5) Antidiskriminierungsstelle — 030 18555-1855, free discrimination advice. (6) BAMF Migrationsberatung — free migration counselling for non-EU adults.",
      keys: ["free legal", "beratungshilfe", "lawyer", "rechtsanwalt", "legal help", "free advice", "legal aid"],
      href: "modules/legal.html",
      followUps: ["What is Beratungshilfe?", "How do I challenge an official decision?"],
    },
    // ── SOCIAL / BENEFITS ─────────────────────────────────────────────────────
    {
      q: "How do I get Kindergeld (child benefit)?",
      a: "Kindergeld is €255/month per child (2026) — for ALL children regardless of nationality. Who qualifies: EU citizens immediately after Anmeldung; non-EU workers with a valid work permit. Apply at: Familienkasse (part of Bundesagentur für Arbeit), online at familienkasse.de. Documents needed: Meldebescheinigung for child, birth certificate, your ID, IBAN. You can claim up to 6 months retroactively — do not delay! Continues until age 18 (25 if in education).",
      keys: ["kindergeld", "child benefit", "child allowance", "€255", "children", "baby", "family benefit"],
      href: "modules/family.html",
      followUps: ["What is Elterngeld (parental leave pay)?", "How do I enrol my child in school?", "What is Kita?"],
    },
    {
      q: "What is Bürgergeld and how do I apply?",
      a: "Bürgergeld replaced Hartz IV as Germany's basic income support (SGB II). Amount 2026: €563/month for a single adult + housing costs + health insurance contributions. Who qualifies: unemployed people able to work, EU citizens after 5 years of residence, some non-EU nationals after qualifying period. Apply at your local Jobcenter — take passport, Meldebescheinigung, bank account details, proof of job search. Assets exempted: €15,000 for single person. Important: you must actively seek work and accept reasonable job offers.",
      keys: ["bürgergeld", "hartz iv", "benefits", "jobcenter", "unemployment", "social assistance", "sgb ii"],
      href: "modules/integration.html",
      followUps: ["How do I find a job in Germany?", "What is the Steuer-ID?"],
    },
    // ── BANKING ───────────────────────────────────────────────────────────────
    {
      q: "Which bank account should I open in Germany?",
      a: "Best options for newcomers: (1) N26 — open online in 10 minutes, no Schufa check, English app, free basic account. Best for getting started immediately. (2) DKB — free if you deposit your salary, €0 ATM fees worldwide. (3) Commerzbank — traditional bank with branches, €50–100 new customer bonus. (4) Wise — not a German bank but essential for international transfers at the real exchange rate. You need: passport and Meldebescheinigung (for traditional banks). Avoid accounts with monthly fees initially.",
      keys: ["bank", "account", "n26", "dkb", "commerzbank", "wise", "open account", "banking", "girokonto"],
      href: "modules/banking.html",
      followUps: ["What is Schufa?", "How do I send money home from Germany?"],
    },
    {
      q: "What is Schufa and how does it work?",
      a: "Schufa is Germany's credit bureau — every financial institution checks your Schufa score before opening accounts, phone contracts, or approving rentals. As a newcomer: you start with a neutral score (not bad, just no history). Build it by: opening a German bank account and using it, getting a mobile phone contract in your name, paying all bills on time, getting a credit or prepaid card. A good Schufa score (95%+) is essential for renting apartments. Get your free annual Schufa report at meineschufa.de.",
      keys: ["schufa", "credit", "credit score", "credit check", "schufa-auskunft", "credit history"],
      href: "modules/banking.html",
      followUps: ["How do I build a good Schufa score?", "Which bank can I open without Schufa?"],
    },
    // ── LANGUAGE ─────────────────────────────────────────────────────────────
    {
      q: "How do I learn German quickly in Germany?",
      a: "Fastest routes: (1) BAMF Integration Course — 700 hours of German (A1–B1) + 100 hours orientation. Subsidised or free for eligible immigrants. Apply at bamf.de. (2) Volkshochschule (VHS) — affordable courses in every city, all levels. (3) Deutsche Welle (learngerman.dw.com) — free online German in 30+ languages, excellent for beginners. (4) Tandem partner — find a German speaker who wants to learn your language. (5) Goethe-Institut — premium with internationally recognised certificates. Tip: switch your phone to German immediately — it's the fastest passive learning.",
      keys: ["learn german", "german language", "german course", "integrationskurs", "bamf", "vhs", "b1", "a1", "deutsch lernen"],
      href: "modules/language.html",
      followUps: ["What is the BAMF integration course?", "How do I get a B1 German certificate?"],
    },
    // ── EMERGENCY ────────────────────────────────────────────────────────────
    {
      q: "What are the emergency numbers in Germany?",
      a: "German emergency numbers to save now: 🚑 112 — Ambulance and fire (free, 24/7, also works with no SIM). 🚔 110 — Police. 📞 116 117 — Out-of-hours doctor (Kassenärztlicher Bereitschaftsdienst) — for urgent but non-life-threatening medical issues. 🆘 0800 111 0 111 — Mental health crisis line (free, 24/7). 📞 030 18555-1855 — Anti-discrimination (ADS). 📞 0800 700 1234 — BAMF migration helpline (Mon–Fri). All free from any phone.",
      keys: ["emergency", "112", "110", "ambulance", "police", "fire", "116117", "urgent", "help", "crisis"],
      href: "modules/emergency.html",
      urgent: true,
      followUps: ["Where is the nearest hospital?", "What is 116 117 for?", "What do I do in a medical emergency in Germany?"],
    },
    // ── COST OF LIVING ────────────────────────────────────────────────────────
    {
      q: "How much does it cost to live in Germany?",
      a: "Monthly costs for a single person (2026): Munich: ~€2,800–3,200 (1BR: €1,800). Frankfurt: ~€2,400–2,800 (1BR: €1,500). Berlin: ~€2,000–2,400 (1BR: €1,250). Hamburg: ~€2,100–2,500. Dortmund: ~€1,600–1,900 (1BR: €850). Leipzig: ~€1,400–1,700 (1BR: €750) — cheapest major city. All costs include rent, food, transport, health insurance, internet, and phone. Deutschlandticket (€29/month) covers all local transport in Germany. Tip: shop at Aldi, Lidl, or Penny — save 40% on groceries vs supermarkets.",
      keys: ["cost", "living", "expensive", "how much", "salary", "monthly", "budget", "rent", "munich", "berlin", "dortmund", "leipzig"],
      href: "modules/costs.html",
      followUps: ["Which city in Germany is cheapest to live in?", "What is the Deutschlandticket?", "What salary do I need for Germany?"],
    },
    // ── DRIVING ──────────────────────────────────────────────────────────────
    {
      q: "How do I convert my foreign driving licence in Germany?",
      a: "Depends on your country: EU/EEA licences — automatic exchange, no exam needed. USA, Canada, Japan, South Korea, Australia, New Zealand — simplified process, no theory/practical exam. Most other countries including Pakistan, India, Bangladesh — full process required: German theory test (Theorieprüfung) + practical test (Fahrprüfung). Cost: €1,500–2,500 total including driving school. For simplified exchange: go to Fahrerlaubnisbehörde with: foreign licence, certified German translation (ADAC), biometric photo, eye test (€15, optician), Erste-Hilfe course (€30–40, 9 hours).",
      keys: ["driving licence", "driving license", "führerschein", "car", "drive", "convert licence", "exchange licence", "fahren"],
      href: "modules/bureaucracy.html",
      followUps: ["Do I need a German driving licence?", "How much does a driving test cost in Germany?"],
    },
  ];

  // ─── Detect current language from page ────────────────────────────────────
  function getLang() {
    try {
      const stored = localStorage.getItem("ng_lang");
      if (stored && LANGS[stored]) return stored;
      const html = document.documentElement.lang;
      if (html && LANGS[html]) return html;
    } catch {}
    return "en";
  }

  // ─── Answer engine ───────────────────────────────────────────────────────
  const normalize = (t) => t.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();

  function findAnswer(question) {
    const tokens = normalize(question).split(" ").filter(t => t.length > 2);
    const scored = FAQS.map(faq => ({
      faq,
      score: tokens.reduce((s, t) =>
        s + (normalize(`${faq.q} ${faq.a} ${faq.keys.join(" ")}`).includes(t) ? 1 : 0), 0),
    })).sort((a, b) => b.score - a.score);

    if (scored[0]?.score > 0) return scored[0].faq;

    // Page context fallback
    const pageText = document.body.innerText;
    const sentences = pageText.split(/(?<=[.!?])\s+/)
      .map(s => ({ s: s.trim(), score: tokens.reduce((acc, t) => acc + (normalize(s).includes(t) ? 1 : 0), 0) }))
      .filter(x => x.score > 0 && x.s.length > 35 && x.s.length < 300)
      .sort((a, b) => b.score - a.score).slice(0, 2);

    if (sentences.length) return {
      a: `Based on this page: ${sentences.map(x => x.s).join(" ")}`,
      followUps: [],
    };
    return null;
  }

  // ─── Build UI ─────────────────────────────────────────────────────────────
  const style = document.createElement("style");
  style.textContent = `
    .ngc-btn {
      position:fixed; left:22px; bottom:22px; z-index:9998;
      width:56px; height:56px; border:0; border-radius:50%;
      background:linear-gradient(135deg,#FFCC02,#DD0000);
      box-shadow:0 6px 24px rgba(0,0,0,.45);
      cursor:pointer; display:flex; align-items:center; justify-content:center;
      transition:transform .2s;
    }
    .ngc-btn:hover { transform:scale(1.1); }
    .ngc-badge {
      position:absolute; top:-4px; right:-4px;
      min-width:20px; height:20px; padding:0 4px;
      background:#DC2626; border-radius:10px;
      font-size:11px; font-weight:800; color:#fff;
      display:flex; align-items:center; justify-content:center;
    }
    .ngc-panel {
      position:fixed; left:22px; bottom:88px; z-index:9999;
      width:min(380px,calc(100vw - 28px));
      height:min(540px,calc(100vh - 115px));
      background:#111520; color:#f1f5f9;
      border-radius:20px; border:1px solid rgba(255,255,255,.08);
      box-shadow:0 24px 64px rgba(0,0,0,.7);
      font-family:'Segoe UI',system-ui,sans-serif;
      display:none; flex-direction:column; overflow:hidden;
      animation:ngcSlide .2s cubic-bezier(.34,1.56,.64,1);
    }
    .ngc-panel.open { display:flex; }
    @keyframes ngcSlide {
      from { opacity:0; transform:translateY(16px) scale(.97); }
      to   { opacity:1; transform:translateY(0) scale(1); }
    }
    .ngc-head {
      padding:14px 16px;
      background:linear-gradient(135deg,#1a1f2e,#111520);
      border-bottom:2px solid #FFCC02;
      display:flex; align-items:center; gap:10px; flex-shrink:0;
    }
    .ngc-avatar {
      width:36px; height:36px; border-radius:50%; flex-shrink:0;
      background:linear-gradient(135deg,#FFCC02,#f59e0b);
      display:flex; align-items:center; justify-content:center;
      font-size:18px; font-weight:900;
    }
    .ngc-title { font-weight:800; font-size:14px; color:#f1f5f9; line-height:1; }
    .ngc-sub { font-size:11px; color:#94a3b8; margin-top:3px; display:flex; align-items:center; gap:5px; }
    .ngc-dot { width:6px; height:6px; border-radius:50%; background:#22C55E; flex-shrink:0; }
    .ngc-msgs {
      flex:1; overflow-y:auto; padding:12px; display:flex; flex-direction:column; gap:9px;
    }
    .ngc-msgs::-webkit-scrollbar { width:3px; }
    .ngc-msgs::-webkit-scrollbar-thumb { background:rgba(255,255,255,.1); border-radius:3px; }
    .ngc-msg {
      max-width:83%; padding:9px 12px; border-radius:14px;
      font-size:13px; line-height:1.6; white-space:pre-wrap; word-break:break-word;
    }
    .ngc-bot { background:#1a1f2e; color:#e2e8f0; border-radius:14px 14px 14px 3px; }
    .ngc-user { background:#FFCC02; color:#0B1D3A; font-weight:600; border-radius:14px 14px 3px 14px; align-self:flex-end; }
    .ngc-urgent { background:rgba(220,38,38,.15); border:1px solid rgba(220,38,38,.3); border-radius:10px; padding:8px 11px; font-size:12px; color:#fca5a5; margin-top:4px; }
    .ngc-source { display:inline-block; margin-top:7px; font-size:11px; font-weight:700; color:#FFCC02; text-decoration:none; }
    .ngc-source:hover { text-decoration:underline; }
    .ngc-followups { display:flex; flex-direction:column; gap:5px; margin-top:8px; }
    .ngc-fu {
      text-align:left; padding:6px 11px; border-radius:9px;
      border:1px solid rgba(255,255,255,.1); background:rgba(255,255,255,.04);
      color:#94a3b8; font-size:12px; font-weight:600; cursor:pointer;
      transition:all .15s; line-height:1.3;
    }
    .ngc-fu:hover { background:rgba(255,204,2,.1); border-color:rgba(255,204,2,.3); color:#fbbf24; }
    .ngc-starters { padding:0 12px 8px; display:flex; gap:5px; flex-wrap:wrap; }
    .ngc-starter {
      border:1px solid rgba(255,255,255,.12); border-radius:14px;
      background:rgba(255,255,255,.04); color:#94a3b8;
      padding:5px 10px; font-size:11px; font-weight:600; cursor:pointer;
      transition:all .15s;
    }
    .ngc-starter:hover { background:rgba(255,204,2,.1); border-color:rgba(255,204,2,.3); color:#fbbf24; }
    .ngc-typing { display:flex; gap:4px; align-items:center; padding:10px 14px; background:#1a1f2e; border-radius:14px 14px 14px 3px; width:fit-content; }
    .ngc-dot-a { width:7px; height:7px; border-radius:50%; background:#64748b; animation:ngcBounce 1.1s infinite; }
    .ngc-dot-a:nth-child(2) { animation-delay:.18s; }
    .ngc-dot-a:nth-child(3) { animation-delay:.36s; }
    @keyframes ngcBounce { 0%,80%,100% { transform:translateY(0); } 40% { transform:translateY(-7px); } }
    .ngc-form {
      display:flex; gap:7px; padding:10px 12px;
      border-top:1px solid rgba(255,255,255,.07); flex-shrink:0;
    }
    .ngc-input {
      flex:1; min-width:0; padding:10px 13px;
      border:1.5px solid rgba(255,255,255,.1); border-radius:10px;
      background:#0a0d14; color:#f1f5f9; font-size:13px;
      font-family:inherit; outline:none; transition:border-color .15s;
    }
    .ngc-input:focus { border-color:#FFCC02; }
    .ngc-send {
      width:40px; height:40px; border:0; border-radius:10px; cursor:pointer;
      background:linear-gradient(135deg,#FFCC02,#f59e0b);
      display:flex; align-items:center; justify-content:center;
      transition:transform .15s; flex-shrink:0;
    }
    .ngc-send:hover { transform:scale(1.08); }
    .ngc-disclaimer { font-size:10px; color:#475569; text-align:center; padding:0 12px 8px; }
  `;
  document.head.appendChild(style);

  // ─── Build DOM ────────────────────────────────────────────────────────────
  const base = location.pathname.includes("/modules/") ? "../" : "";

  const panel = document.createElement("section");
  panel.className = "ngc-panel";
  panel.setAttribute("aria-label", "Navigate Germany assistant");
  panel.innerHTML = `
    <div class="ngc-head">
      <div class="ngc-avatar">🇩🇪</div>
      <div>
        <div class="ngc-title">Navigate Germany Assistant</div>
        <div class="ngc-sub">
          <span class="ngc-dot"></span>
          <span class="ngc-sub-text">Online · 35+ FAQs covered</span>
        </div>
      </div>
    </div>
    <div class="ngc-msgs" id="ngc-msgs"></div>
    <div class="ngc-starters" id="ngc-starters"></div>
    <form class="ngc-form" id="ngc-form">
      <input class="ngc-input" id="ngc-input" maxlength="500" autocomplete="off">
      <button type="submit" class="ngc-send" aria-label="Send">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B1D3A" stroke-width="2.5">
          <path d="m22 2-7 20-4-9-9-4 20-7z"/>
        </svg>
      </button>
    </form>
    <div class="ngc-disclaimer" id="ngc-disc">Information only · Not legal advice · Always verify with official sources</div>
  `;

  const btn = document.createElement("button");
  btn.className = "ngc-btn";
  btn.type = "button";
  btn.setAttribute("aria-label", "Open Navigate Germany assistant");
  btn.innerHTML = `
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="rgba(0,0,0,.25)" stroke="#0B1D3A" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="8.5" cy="11" r="1.2" fill="#0B1D3A"/>
      <circle cx="12" cy="11" r="1.2" fill="#0B1D3A"/>
      <circle cx="15.5" cy="11" r="1.2" fill="#0B1D3A"/>
    </svg>
  `;
  document.body.append(panel, btn);

  const msgsEl = document.getElementById("ngc-msgs");
  const inputEl = document.getElementById("ngc-input");
  const startersEl = document.getElementById("ngc-starters");
  let unread = 0;
  let badgeEl = null;

  // ─── Language ─────────────────────────────────────────────────────────────
  function applyLang() {
    const lang = getLang();
    const t = LANGS[lang] || LANGS.en;
    inputEl.placeholder = t.placeholder;
    document.getElementById("ngc-disc").textContent = {
      ar: "معلومات فقط · ليست نصيحة قانونية · تحقق دائماً من المصادر الرسمية",
      ur: "صرف معلومات · قانونی مشورہ نہیں · سرکاری ذرائع سے تصدیق کریں",
      de: "Nur Informationen · Keine Rechtsberatung · Immer mit offiziellen Quellen prüfen",
    }[lang] || "Information only · Not legal advice · Always verify with official sources";
    return t;
  }

  // ─── Add message to DOM ───────────────────────────────────────────────────
  function addMsg(html, cls) {
    const d = document.createElement("div");
    d.className = `ngc-msg ${cls}`;
    d.innerHTML = html;
    msgsEl.appendChild(d);
    msgsEl.scrollTop = msgsEl.scrollHeight;
    return d;
  }

  function addTyping() {
    const d = document.createElement("div");
    d.id = "ngc-typing";
    d.innerHTML = `<div class="ngc-typing"><span class="ngc-dot-a"></span><span class="ngc-dot-a"></span><span class="ngc-dot-a"></span></div>`;
    msgsEl.appendChild(d);
    msgsEl.scrollTop = msgsEl.scrollHeight;
  }

  function removeTyping() {
    document.getElementById("ngc-typing")?.remove();
  }

  // ─── Send ─────────────────────────────────────────────────────────────────
  function send(question) {
    const val = question.trim();
    if (!val) return;
    startersEl.style.display = "none";
    inputEl.value = "";

    const escaped = val.replace(/</g, "&lt;");
    addMsg(escaped, "ngc-user");
    addTyping();

    // Small delay for natural feel
    setTimeout(() => {
      removeTyping();
      const t = applyLang();
      const result = findAnswer(val);

      if (!result) {
        addMsg(t.fallback, "ngc-bot");
        return;
      }

      // Build bot message
      const msgEl = document.createElement("div");
      msgEl.className = "ngc-msg ngc-bot";

      // Urgent warning
      if (result.urgent) {
        const urgDiv = document.createElement("div");
        urgDiv.className = "ngc-urgent";
        urgDiv.textContent = "⚠️ URGENT — Time-sensitive. Act immediately.";
        msgEl.appendChild(urgDiv);
      }

      const textNode = document.createElement("span");
      textNode.textContent = result.a;
      msgEl.appendChild(textNode);

      // Source link
      if (result.href) {
        const link = document.createElement("a");
        link.className = "ngc-source";
        link.href = `${base}${result.href}`;
        link.textContent = `${t.source} ${result.q || "Learn more"}`;
        msgEl.appendChild(document.createElement("br"));
        msgEl.appendChild(link);
      }

      msgsEl.appendChild(msgEl);

      // Follow-ups
      if (result.followUps?.length > 0) {
        const fuDiv = document.createElement("div");
        fuDiv.className = "ngc-followups";
        result.followUps.slice(0, 3).forEach(fu => {
          const fuBtn = document.createElement("button");
          fuBtn.className = "ngc-fu";
          fuBtn.textContent = fu + " →";
          fuBtn.addEventListener("click", () => send(fu));
          fuDiv.appendChild(fuBtn);
        });
        msgsEl.appendChild(fuDiv);
      }

      msgsEl.scrollTop = msgsEl.scrollHeight;

      if (!panel.classList.contains("open")) {
        unread++;
        if (!badgeEl) {
          badgeEl = document.createElement("span");
          badgeEl.className = "ngc-badge";
          btn.appendChild(badgeEl);
        }
        badgeEl.textContent = unread;
      }
    }, 500 + Math.random() * 400);
  }

  // ─── Init ─────────────────────────────────────────────────────────────────
  function init() {
    const t = applyLang();

    // Greeting
    addMsg(t.greeting, "ngc-bot");

    // Starters
    const starterFaqs = FAQS.slice(0, 4);
    starterFaqs.forEach(faq => {
      const b = document.createElement("button");
      b.className = "ngc-starter";
      b.textContent = faq.q.length > 45 ? faq.q.slice(0, 43) + "…" : faq.q;
      b.addEventListener("click", () => send(faq.q));
      startersEl.appendChild(b);
    });

    // Form submit
    document.getElementById("ngc-form").addEventListener("submit", e => {
      e.preventDefault();
      send(inputEl.value);
    });

    // Toggle
    btn.addEventListener("click", () => {
      const isOpen = panel.classList.toggle("open");
      btn.setAttribute("aria-label", isOpen ? "Close assistant" : "Open Navigate Germany assistant");
      btn.innerHTML = isOpen
        ? `<svg width="20" height="20" fill="none" stroke="#0B1D3A" stroke-width="2.5" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>`
        : `<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="rgba(0,0,0,.25)" stroke="#0B1D3A" stroke-width="1.8" stroke-linecap="round"/><circle cx="8.5" cy="11" r="1.2" fill="#0B1D3A"/><circle cx="12" cy="11" r="1.2" fill="#0B1D3A"/><circle cx="15.5" cy="11" r="1.2" fill="#0B1D3A"/></svg>`;
      if (isOpen) {
        unread = 0;
        badgeEl?.remove();
        badgeEl = null;
        inputEl.focus();
        applyLang(); // refresh placeholders on open
      }
    });

    // Listen for language changes
    document.addEventListener("click", () => {
      setTimeout(applyLang, 100);
    });
  }

  init();
})();
