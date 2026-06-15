const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "ur", label: "اردو", flag: "🇵🇰" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "fa", label: "فارسی", flag: "🇮🇷" },
  { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
  { code: "uk", label: "Українська", flag: "🇺🇦" },
];

const TRANSLATIONS = {
  en: {
    dir: "ltr",
    hero:       ["Navigate Germany with Confidence", "Germany explained step-by-step in your language — official links, emergency support, and state-by-state guidance."],
    nav_home:      "Home",
    nav_states:    "States",
    nav_guides:    "Guides",
    nav_languages: "Languages",
    nav_about:     "About",
    nav_resources: "Resources",
    emg_help:   "Emergency help",
    emg_112:    "Ambulance & Fire",
    emg_110:    "Police",
    emg_116:    "Doctor on Call",
    emg_crisis: "Crisis Line",
    stat_states:  "Bundesländer",
    stat_langs:   "Languages",
    stat_modules: "Life Modules",
    stat_links:   "Official Links",
    stat_emg:     "Emergency Ready",
    guides_kicker: "Life in Germany",
    guides_title:  "Explore Life Modules",
    guides_sub:    "Practical guides for living, working, studying, and settling in Germany.",
    states_kicker: "Local information",
    states_title:  "Explore by State",
    states_sub:    "Select your state to find local authorities, services, cities, and official resources.",
    browse_guides: "Browse all guides",
    open_state:    "Open state guide →",
    nav:        ["Guides","Languages","About","Resources"],
    stats:      ["Verified Links","Life Modules","Emergency 24/7","Languages"],
    search_ph:  "Search guides and states...",
    state_ph:   "Search state or city...",
    modules_h:  "Life Modules",
    states_h:   "Choose your Bundesland",
    open_guide: "Open Guide →",
    emergency:  "🚨 Emergency: 112 (ambulance · fire) · 110 (police) · 116 117 (out-of-hours doctor)",
    emg_btn:    "Emergency numbers →",
    save:       "Save",
    remove:     "Remove",
    saved_only: "Show saved",
    all_guides: "All guides",
    dir:        "ltr",
    modules: [
      {title:"Housing",         desc:"Find accommodation, rental contracts, deposits, and tenant rights."},
      {title:"Healthcare",      desc:"Health insurance, doctors, hospitals, and appointments."},
      {title:"Jobs & Visa",     desc:"Work opportunities, residence routes, Blue Card, and job search."},
      {title:"Legal Help",      desc:"Residence law, official letters, deadlines, rights, and support."},
      {title:"Language",        desc:"Learn German, practise daily phrases, and find language resources."},
      {title:"Cost of Living",  desc:"Compare rent, expenses, salaries, banking, and everyday costs."},
      {title:"Education",       desc:"Schools, childcare, integration courses, and learning pathways."},
      {title:"Banking & Taxes", desc:"Bank accounts, transfers, Schufa, tax ID, and finance basics."},
      {title:"Family & Children",desc:"Kindergeld, Kita, schools, parental support, and family rights."},
      {title:"Bureaucracy",     desc:"Anmeldung, Steuer-ID, health insurance, and official processes."},
      {title:"Integration",     desc:"Community, BAMF courses, support organisations, and volunteer work."},
      {title:"Emergency",       desc:"Emergency numbers, urgent deadlines, free legal help, and crisis support."},
    ],
  ,
    open_guide: "Open guide →",
    start_by_state: "Start by State →",
    emergency_help: "Emergency Help",
    search: "Search",
    learn_more: "Learn more",
    coming_soon: "Coming soon",
    official_source: "Official source",
    last_checked: "Last checked",
    back_modules: "Back to all modules",
    quick_checklist: "Quick checklist",
    related_guides: "Related guides",
    ask_ai: "Ask Germany AI",
    ai_preview: "AI Assistant Preview",
    ai_coming: "Full AI coming soon",
    journey_title: "Your Journey to Germany",
    journey_sub: "Step-by-step from visa to settled life.",
    footer_built: "Built for immigrants, by people who understand the journey.",
    footer_disclaimer: "General information only — always verify with official German authorities.",
    lang_status_title: "Translation status",
    lang_status_core: "Core interface: available",
    lang_status_guides: "Full guide pages: in progress",
    lang_status_official: "Official links: unchanged",
    guide_notice: "Full guide translation is in progress. Official sources may be in German or English.",
    module_housing: "Housing",
    module_healthcare: "Healthcare",
    module_jobs: "Jobs & Visa",
    module_legal: "Legal Help",
    module_language: "Language",
    module_costs: "Cost of Living",
    module_education: "Education",
    module_integration: "Integration",
    module_bureaucracy: "Bureaucracy",
    module_family: "Family & Children",
    module_emergency: "Emergency",
    module_banking: "Banking & Tax",},
  de: {
    dir: "ltr",
    nav_home: "Startseite",
    nav_states: "Bundesländer",
    nav_guides: "Ratgeber",
    nav_languages: "Sprachen",
    nav_about: "Über uns",
    nav_resources: "Ressourcen",
    emg_help: "Notfallhilfe",
    emg_112: "Rettungsdienst & Feuerwehr",
    emg_110: "Polizei",
    emg_116: "Ärztlicher Bereitschaftsdienst",
    emg_crisis: "Krisentelefon",
    stat_states: "Bundesländer",
    stat_langs: "Sprachen",
    stat_modules: "Lebensmodule",
    stat_links: "Offizielle Links",
    stat_emg: "Notfall bereit",
    guides_kicker: "Leben in Deutschland",
    guides_title: "Lebensmodule erkunden",
    guides_sub: "Praktische Ratgeber für Leben, Arbeit, Studium und Ansiedlung in Deutschland.",
    states_kicker: "Lokale Informationen",
    states_title: "Nach Bundesland erkunden",
    states_sub: "Wählen Sie Ihr Bundesland für lokale Behörden, Dienste und offizielle Ressourcen.",
    browse_guides: "Alle Ratgeber",
    open_state: "Landesratgeber öffnen →",
    hero:       ["Sicher durch Deutschland navigieren", "Deutschland Schritt für Schritt erklärt – offizielle Links, Notfallhilfe und bundeslandspezifische Orientierung."],
    nav:        ["Ratgeber","Sprachen","Über uns","Ressourcen"],
    stats:      ["Geprüfte Links","Lebensmodule","Notfall 24/7","Sprachen"],
    search_ph:  "Ratgeber und Bundesländer suchen...",
    state_ph:   "Bundesland oder Stadt suchen...",
    modules_h:  "Lebensmodule",
    states_h:   "Wählen Sie Ihr Bundesland",
    open_guide: "Ratgeber öffnen →",
    emergency:  "🚨 Notruf: 112 (Rettung · Feuerwehr) · 110 (Polizei) · 116 117 (ärztlicher Bereitschaftsdienst)",
    emg_btn:    "Notfallnummern →",
    save:       "Speichern",
    remove:     "Entfernen",
    saved_only: "Gespeicherte anzeigen",
    all_guides: "Alle Ratgeber",
    dir:        "ltr",
    modules: [
      {title:"Wohnen",              desc:"Wohnungssuche, Mietvertrag, Kaution und Mieterrechte."},
      {title:"Gesundheit",          desc:"Krankenversicherung, Ärzte, Krankenhäuser und Termine."},
      {title:"Arbeit & Visum",      desc:"Arbeitsmöglichkeiten, Aufenthaltstitel, Blue Card und Jobsuche."},
      {title:"Rechtshilfe",         desc:"Aufenthaltsrecht, Behördenbriefe, Fristen, Rechte und Unterstützung."},
      {title:"Sprache",             desc:"Deutsch lernen, Alltagsphrasen üben und Sprachressourcen finden."},
      {title:"Lebenshaltungskosten",desc:"Miete, Ausgaben, Gehälter, Banking und Alltagskosten vergleichen."},
      {title:"Bildung",             desc:"Schulen, Kita, Integrationskurse und Bildungswege."},
      {title:"Banking & Steuern",   desc:"Bankkonten, Überweisungen, Schufa, Steuer-ID und Finanzen."},
      {title:"Familie & Kinder",    desc:"Kindergeld, Kita, Schulen, Elterngeld und Familienrechte."},
      {title:"Bürokratie",          desc:"Anmeldung, Steuer-ID, Krankenversicherung und Behördengänge."},
      {title:"Integration",         desc:"Gemeinschaft, BAMF-Kurse, Hilfsorganisationen und Ehrenamt."},
      {title:"Notfall",             desc:"Notfallnummern, dringende Fristen, kostenlose Rechtsberatung."},
    ],
  ,
    open_guide: "Ratgeber öffnen →",
    start_by_state: "Nach Bundesland →",
    emergency_help: "Notfallhilfe",
    search: "Suchen",
    learn_more: "Mehr erfahren",
    coming_soon: "Demnächst",
    official_source: "Offizielle Quelle",
    last_checked: "Zuletzt geprüft",
    back_modules: "Alle Module",
    quick_checklist: "Schnellcheckliste",
    related_guides: "Verwandte Ratgeber",
    ask_ai: "Deutschland-KI fragen",
    ai_preview: "KI-Assistent Vorschau",
    ai_coming: "Vollständige KI bald",
    journey_title: "Ihr Weg nach Deutschland",
    journey_sub: "Schritt für Schritt vom Visum zum Einleben.",
    footer_built: "Für Einwanderer gebaut.",
    footer_disclaimer: "Nur allgemeine Informationen — immer bei deutschen Behörden überprüfen.",
    lang_status_title: "Übersetzungsstatus",
    lang_status_core: "Benutzeroberfläche: verfügbar",
    lang_status_guides: "Vollständige Ratgeber: in Bearbeitung",
    lang_status_official: "Offizielle Links: unverändert",
    guide_notice: "Vollständige Übersetzung in Bearbeitung.",
    module_housing: "Wohnen",
    module_healthcare: "Gesundheit",
    module_jobs: "Jobs & Visum",
    module_legal: "Rechtshilfe",
    module_language: "Sprache",
    module_costs: "Lebenshaltungskosten",
    module_education: "Bildung",
    module_integration: "Integration",
    module_bureaucracy: "Bürokratie",
    module_family: "Familie & Kinder",
    module_emergency: "Notfall",
    module_banking: "Banking & Steuern",},
  ar: {
    dir: "rtl",
    nav_home: "الرئيسية",
    nav_states: "الولايات",
    nav_guides: "الأدلة",
    nav_languages: "اللغات",
    nav_about: "عن الموقع",
    nav_resources: "الموارد",
    emg_help: "مساعدة طارئة",
    emg_112: "الإسعاف وإطفاء الحريق",
    emg_110: "الشرطة",
    emg_116: "طبيب خارج أوقات العمل",
    emg_crisis: "خط الأزمات",
    stat_states: "ولاية فيدرالية",
    stat_langs: "لغات",
    stat_modules: "أدلة الحياة",
    stat_links: "روابط رسمية",
    stat_emg: "استعداد طارئ",
    guides_kicker: "الحياة في ألمانيا",
    guides_title: "استكشف أدلة الحياة",
    guides_sub: "أدلة عملية للعيش والعمل والدراسة والاستقرار في ألمانيا.",
    states_kicker: "معلومات محلية",
    states_title: "استكشف حسب الولاية",
    states_sub: "اختر ولايتك للعثور على السلطات المحلية والخدمات والموارد الرسمية.",
    browse_guides: "تصفح جميع الأدلة",
    open_state: "فتح دليل الولاية →",
    hero:       ["تنقّل في ألمانيا بثقة", "دليل خطوة بخطوة بلغتك — روابط رسمية ودعم طارئ وإرشادات حسب الولاية."],
    nav:        ["الأدلة","اللغات","عن الموقع","الموارد"],
    stats:      ["روابط موثّقة","أدلة الحياة","طوارئ 24/7","لغات"],
    search_ph:  "ابحث في الأدلة والولايات...",
    state_ph:   "ابحث في الولاية أو المدينة...",
    modules_h:  "أدلة الحياة",
    states_h:   "اختر ولايتك الفيدرالية",
    open_guide: "فتح الدليل →",
    emergency:  "🚨 طوارئ: 112 (إسعاف · إطفاء) · 110 (شرطة) · 116 117 (طبيب خارج أوقات العمل)",
    emg_btn:    "أرقام الطوارئ →",
    save:       "حفظ",
    remove:     "إزالة",
    saved_only: "عرض المحفوظ",
    all_guides: "جميع الأدلة",
    dir:        "rtl",
    modules: [
      {title:"السكن",              desc:"إيجاد شقة، عقود الإيجار، الوديعة وحقوق المستأجر."},
      {title:"الرعاية الصحية",    desc:"التأمين الصحي، الأطباء، المستشفيات والمواعيد."},
      {title:"العمل والتأشيرة",   desc:"فرص العمل، إقامة العمل، البطاقة الزرقاء والبحث عن وظيفة."},
      {title:"المساعدة القانونية",desc:"قانون الإقامة، الرسائل الرسمية، المواعيد النهائية والحقوق."},
      {title:"اللغة",              desc:"تعلّم الألمانية، تدرّب على العبارات اليومية وابحث عن موارد لغوية."},
      {title:"تكلفة المعيشة",     desc:"مقارنة الإيجار والمصاريف والرواتب والمصارف والتكاليف اليومية."},
      {title:"التعليم",            desc:"المدارس، الحضانة، دورات الاندماج ومسارات التعلم."},
      {title:"البنوك والضرائب",   desc:"الحسابات البنكية، التحويلات، شوفا، رقم الضريبة والشؤون المالية."},
      {title:"العائلة والأطفال",  desc:"مخصصات الأطفال، الحضانة، المدارس وحقوق الأسرة."},
      {title:"البيروقراطية",      desc:"تسجيل العنوان، رقم الضريبة، التأمين الصحي والإجراءات الرسمية."},
      {title:"الاندماج",          desc:"المجتمع ودورات بامف ومنظمات الدعم والتطوع."},
      {title:"الطوارئ",           desc:"أرقام الطوارئ والمواعيد العاجلة والمساعدة القانونية المجانية."},
    ],
  ,
    open_guide: "فتح الدليل →",
    start_by_state: "ابدأ بالولاية →",
    emergency_help: "مساعدة طارئة",
    search: "بحث",
    learn_more: "اعرف المزيد",
    coming_soon: "قريباً",
    official_source: "مصدر رسمي",
    last_checked: "آخر فحص",
    back_modules: "جميع الأدلة",
    quick_checklist: "قائمة مراجعة",
    related_guides: "أدلة ذات صلة",
    ask_ai: "اسأل الذكاء الاصطناعي",
    ai_preview: "معاينة المساعد الذكي",
    ai_coming: "الذكاء الاصطناعي قريباً",
    journey_title: "رحلتك إلى ألمانيا",
    journey_sub: "خطوة بخطوة من التأشيرة إلى الاستقرار.",
    footer_built: "مبني للمهاجرين.",
    footer_disclaimer: "معلومات عامة فقط — تحقق دائماً مع السلطات الرسمية.",
    lang_status_title: "حالة الترجمة",
    lang_status_core: "الواجهة الأساسية: متاحة",
    lang_status_guides: "أدلة كاملة: قيد التطوير",
    lang_status_official: "الروابط الرسمية: دون تغيير",
    guide_notice: "الترجمة الكاملة قيد التطوير.",
    module_housing: "السكن",
    module_healthcare: "الرعاية الصحية",
    module_jobs: "الوظائف والتأشيرة",
    module_legal: "المساعدة القانونية",
    module_language: "اللغة",
    module_costs: "تكلفة المعيشة",
    module_education: "التعليم",
    module_integration: "الاندماج",
    module_bureaucracy: "البيروقراطية",
    module_family: "الأسرة والأطفال",
    module_emergency: "الطوارئ",
    module_banking: "البنوك والضرائب",},
  ur: {
    dir: "rtl",
    nav_home: "ہوم",
    nav_states: "ریاستیں",
    nav_guides: "رہنما",
    nav_languages: "زبانیں",
    nav_about: "ہمارے بارے میں",
    nav_resources: "وسائل",
    emg_help: "ہنگامی مدد",
    emg_112: "ایمبولینس اور آگ",
    emg_110: "پولیس",
    emg_116: "ڈیوٹی ڈاکٹر",
    emg_crisis: "بحران لائن",
    stat_states: "ریاستیں",
    stat_langs: "زبانیں",
    stat_modules: "رہنما",
    stat_links: "سرکاری لنکس",
    stat_emg: "ہنگامی تیاری",
    guides_kicker: "جرمنی میں زندگی",
    guides_title: "زندگی کے رہنما دریافت کریں",
    guides_sub: "جرمنی میں زندگی، کام، تعلیم اور آباد ہونے کے لیے عملی رہنما۔",
    states_kicker: "مقامی معلومات",
    states_title: "ریاست کے لحاظ سے دریافت کریں",
    states_sub: "مقامی حکام، خدمات اور سرکاری وسائل کے لیے اپنی ریاست منتخب کریں۔",
    browse_guides: "تمام رہنما دیکھیں",
    open_state: "ریاستی رہنما کھولیں →",
    hero:       ["اعتماد کے ساتھ جرمنی میں رہنمائی پائیں", "اپنی زبان میں جرمنی کی قدم بہ قدم وضاحت — سرکاری لنکس، ہنگامی مدد اور ریاستی رہنمائی۔"],
    nav:        ["رہنما","زبانیں","ہمارے بارے میں","وسائل"],
    stats:      ["تصدیق شدہ لنکس","زندگی کے رہنما","ہنگامی 24/7","زبانیں"],
    search_ph:  "رہنما اور ریاستیں تلاش کریں...",
    state_ph:   "ریاست یا شہر تلاش کریں...",
    modules_h:  "زندگی کے رہنما",
    states_h:   "اپنی ریاست منتخب کریں",
    open_guide: "رہنما کھولیں →",
    emergency:  "🚨 ہنگامی: 112 (ایمبولینس · آگ) · 110 (پولیس) · 116 117 (اوقات کے باہر ڈاکٹر)",
    emg_btn:    "ہنگامی نمبر →",
    save:       "محفوظ کریں",
    remove:     "ہٹائیں",
    saved_only: "محفوظ دکھائیں",
    all_guides: "تمام رہنما",
    dir:        "rtl",
    modules: [
      {title:"رہائش",                desc:"اپارٹمنٹ تلاش کریں، کرایہ معاہدہ، ڈپازٹ اور کرایہ دار کے حقوق۔"},
      {title:"صحت",                  desc:"ہیلتھ انشورنس، ڈاکٹر، ہسپتال اور ملاقاتیں۔"},
      {title:"نوکری اور ویزہ",       desc:"کام کے مواقع، اقامت، بلو کارڈ اور نوکری کی تلاش۔"},
      {title:"قانونی مدد",            desc:"اقامت کا قانون، سرکاری خطوط، ڈیڈلائنز اور حقوق۔"},
      {title:"زبان",                  desc:"جرمن سیکھیں، روزمرہ جملے اور زبان کے وسائل۔"},
      {title:"زندگی کا خرچ",         desc:"کرایہ، اخراجات، تنخواہیں، بینکنگ اور روزمرہ لاگت۔"},
      {title:"تعلیم",                 desc:"اسکول، بچوں کی نگہداشت، انضمام کورسز اور تعلیمی راستے۔"},
      {title:"بینکنگ اور ٹیکس",      desc:"بینک اکاؤنٹ، ٹرانسفر، شوفا، ٹیکس آئی ڈی اور مالیات۔"},
      {title:"خاندان اور بچے",       desc:"کنڈرگیلڈ، کٹا، اسکول، والدین کی مدد اور خاندانی حقوق۔"},
      {title:"بیوروکریسی",           desc:"انملڈونگ، ٹیکس آئی ڈی، ہیلتھ انشورنس اور سرکاری کام۔"},
      {title:"انضمام",               desc:"کمیونٹی، بامف کورسز، سپورٹ تنظیمیں اور رضاکارانہ خدمت۔"},
      {title:"ہنگامی",               desc:"ہنگامی نمبر، فوری ڈیڈلائنز اور مفت قانونی مدد۔"},
    ],
  ,
    open_guide: "رہنما کھولیں ←",
    start_by_state: "ریاست سے شروع ←",
    emergency_help: "ہنگامی مدد",
    search: "تلاش",
    learn_more: "مزید جانیں",
    coming_soon: "جلد آ رہا ہے",
    official_source: "سرکاری ماخذ",
    last_checked: "آخری جانچ",
    back_modules: "تمام ماڈیولز",
    quick_checklist: "فوری چیک لسٹ",
    related_guides: "متعلقہ رہنما",
    ask_ai: "جرمنی AI سے پوچھیں",
    ai_preview: "AI اسسٹنٹ پیش نظارہ",
    ai_coming: "مکمل AI جلد آئے گا",
    journey_title: "جرمنی کا آپ کا سفر",
    journey_sub: "ویزا سے آباد ہونے تک قدم بقدم۔",
    footer_built: "تارکین وطن کے لیے بنایا گیا۔",
    footer_disclaimer: "صرف عمومی معلومات — سرکاری حکام سے تصدیق کریں۔",
    lang_status_title: "ترجمے کی حیثیت",
    lang_status_core: "بنیادی انٹرفیس: دستیاب",
    lang_status_guides: "مکمل رہنما: جاری کام",
    lang_status_official: "سرکاری لنکس: غیر تبدیل",
    guide_notice: "مکمل ترجمہ جاری ہے۔",
    module_housing: "رہائش",
    module_healthcare: "صحت",
    module_jobs: "ملازمت اور ویزا",
    module_legal: "قانونی مدد",
    module_language: "زبان",
    module_costs: "اخراجات",
    module_education: "تعلیم",
    module_integration: "انضمام",
    module_bureaucracy: "سرکاری دفاتر",
    module_family: "خاندان",
    module_emergency: "ہنگامی صورت",
    module_banking: "بینکنگ",},
  tr: {
    dir: "ltr",
    nav_home: "Ana Sayfa",
    nav_states: "Eyaletler",
    nav_guides: "Rehberler",
    nav_languages: "Diller",
    nav_about: "Hakkında",
    nav_resources: "Kaynaklar",
    emg_help: "Acil yardım",
    emg_112: "Ambulans ve İtfaiye",
    emg_110: "Polis",
    emg_116: "Nöbetçi Doktor",
    emg_crisis: "Kriz Hattı",
    stat_states: "Eyalet",
    stat_langs: "Dil",
    stat_modules: "Yaşam Rehberi",
    stat_links: "Resmi Bağlantı",
    stat_emg: "Acil Hazır",
    guides_kicker: "Almanya'da Yaşam",
    guides_title: "Yaşam Rehberlerini Keşfet",
    guides_sub: "Almanya'da yaşamak, çalışmak, okumak ve yerleşmek için pratik rehberler.",
    states_kicker: "Yerel Bilgi",
    states_title: "Eyalete Göre Keşfet",
    states_sub: "Yerel yönetimler, hizmetler ve resmi kaynaklar için eyaletinizi seçin.",
    browse_guides: "Tüm rehberlere bak",
    open_state: "Eyalet rehberini aç →",
    hero:       ["Almanya'da güvenle yolunuzu bulun", "Almanya adım adım kendi dilinizde açıklandı — resmi bağlantılar, acil destek ve eyalete göre rehberlik."],
    nav:        ["Rehberler","Diller","Hakkında","Kaynaklar"],
    stats:      ["Doğrulanmış Bağlantı","Yaşam Rehberi","Acil 24/7","Dil"],
    search_ph:  "Rehber ve eyaletlerde ara...",
    state_ph:   "Eyalet veya şehir ara...",
    modules_h:  "Yaşam Rehberleri",
    states_h:   "Eyaletinizi seçin",
    open_guide: "Rehberi Aç →",
    emergency:  "🚨 Acil: 112 (ambulans · itfaiye) · 110 (polis) · 116 117 (mesai dışı doktor)",
    emg_btn:    "Acil numaralar →",
    save:       "Kaydet",
    remove:     "Kaldır",
    saved_only: "Kaydedilenleri göster",
    all_guides: "Tüm rehberler",
    dir:        "ltr",
    modules: [
      {title:"Konut",               desc:"Daire bul, kira sözleşmeleri, depozito ve kiracı hakları."},
      {title:"Sağlık",              desc:"Sağlık sigortası, doktorlar, hastaneler ve randevular."},
      {title:"İş ve Vize",          desc:"İş olanakları, oturma izni, Blue Card ve iş arama."},
      {title:"Hukuki Yardım",       desc:"Oturma hukuku, resmi mektuplar, son tarihler ve haklar."},
      {title:"Dil",                 desc:"Almanca öğren, günlük ifadeleri pratik yap."},
      {title:"Yaşam Maliyeti",      desc:"Kira, giderler, maaşlar, bankacılık ve günlük maliyetler."},
      {title:"Eğitim",              desc:"Okullar, çocuk bakımı, entegrasyon kursları."},
      {title:"Bankacılık ve Vergi", desc:"Banka hesapları, transferler, Schufa, vergi numarası."},
      {title:"Aile ve Çocuklar",   desc:"Kindergeld, Kita, okullar, ebeveyn desteği."},
      {title:"Bürokrasi",           desc:"Anmeldung, vergi numarası, sağlık sigortası ve resmi işlemler."},
      {title:"Entegrasyon",         desc:"Topluluk, BAMF kursları, destek kuruluşları."},
      {title:"Acil Durum",          desc:"Acil numaralar, kritik son tarihler, ücretsiz hukuki yardım."},
    ],
  ,
    open_guide: "Rehberi aç →",
    start_by_state: "Eyalete göre →",
    emergency_help: "Acil Yardım",
    search: "Ara",
    learn_more: "Daha fazla",
    coming_soon: "Yakında",
    official_source: "Resmi kaynak",
    last_checked: "Son kontrol",
    back_modules: "Tüm rehberler",
    quick_checklist: "Kontrol listesi",
    related_guides: "İlgili rehberler",
    ask_ai: "YZ'ye Sor",
    ai_preview: "YZ Asistan Önizlemesi",
    ai_coming: "Tam YZ yakında",
    journey_title: "Almanya'ya Yolculuğunuz",
    journey_sub: "Vizeden yerleşmeye adım adım.",
    footer_built: "Göçmenler için yapılmıştır.",
    footer_disclaimer: "Yalnızca genel bilgi — resmi makamlarla doğrulayın.",
    lang_status_title: "Çeviri durumu",
    lang_status_core: "Temel arayüz: mevcut",
    lang_status_guides: "Tam rehberler: devam ediyor",
    lang_status_official: "Resmi bağlantılar: değişmedi",
    guide_notice: "Tam çeviri devam etmektedir.",
    module_housing: "Konut",
    module_healthcare: "Sağlık",
    module_jobs: "İş ve Vize",
    module_legal: "Hukuki Yardım",
    module_language: "Dil",
    module_costs: "Yaşam Maliyeti",
    module_education: "Eğitim",
    module_integration: "Entegrasyon",
    module_bureaucracy: "Bürokrasi",
    module_family: "Aile",
    module_emergency: "Acil",
    module_banking: "Bankacılık",},
  ru: {
    dir: "ltr",
    nav_home: "Главная",
    nav_states: "Земли",
    nav_guides: "Руководства",
    nav_languages: "Языки",
    nav_about: "О нас",
    nav_resources: "Ресурсы",
    emg_help: "Экстренная помощь",
    emg_112: "Скорая и пожарные",
    emg_110: "Полиция",
    emg_116: "Дежурный врач",
    emg_crisis: "Телефон доверия",
    stat_states: "Земли",
    stat_langs: "Языки",
    stat_modules: "Разделы",
    stat_links: "Официальных ссылок",
    stat_emg: "Готовность 24/7",
    guides_kicker: "Жизнь в Германии",
    guides_title: "Жизненные руководства",
    guides_sub: "Практические руководства по жизни, работе, учёбе и обустройству в Германии.",
    states_kicker: "Местная информация",
    states_title: "По федеральным землям",
    states_sub: "Выберите землю для поиска местных органов власти и официальных ресурсов.",
    browse_guides: "Все руководства",
    open_state: "Открыть руководство по земле →",
    hero:       ["Уверенно ориентируйтесь в Германии", "Германия объясняется шаг за шагом на вашем языке — официальные ссылки, экстренная помощь и региональное руководство."],
    nav:        ["Руководства","Языки","О нас","Ресурсы"],
    stats:      ["Проверенных ссылок","Жизненных разделов","Экстренно 24/7","Языков"],
    search_ph:  "Поиск по руководствам и землям...",
    state_ph:   "Поиск по земле или городу...",
    modules_h:  "Жизненные руководства",
    states_h:   "Выберите федеральную землю",
    open_guide: "Открыть руководство →",
    emergency:  "🚨 Экстренно: 112 (скорая · пожар) · 110 (полиция) · 116 117 (врач вне часов)",
    emg_btn:    "Номера экстренных служб →",
    save:       "Сохранить",
    remove:     "Удалить",
    saved_only: "Показать сохранённые",
    all_guides: "Все руководства",
    dir:        "ltr",
    modules: [
      {title:"Жильё",               desc:"Поиск квартиры, договор аренды, депозит и права арендатора."},
      {title:"Здравоохранение",     desc:"Медицинское страхование, врачи, больницы и записи."},
      {title:"Работа и виза",       desc:"Вакансии, вид на жительство, Blue Card и поиск работы."},
      {title:"Юридическая помощь",  desc:"Закон о проживании, официальные письма, сроки и права."},
      {title:"Язык",                desc:"Учите немецкий, практикуйте фразы и находите ресурсы."},
      {title:"Стоимость жизни",     desc:"Аренда, расходы, зарплаты, банкинг и повседневные затраты."},
      {title:"Образование",         desc:"Школы, детские сады, курсы интеграции и пути обучения."},
      {title:"Банки и налоги",      desc:"Банковские счета, переводы, Schufa, ИНН и финансы."},
      {title:"Семья и дети",        desc:"Kindergeld, Kita, школы, поддержка родителей."},
      {title:"Бюрократия",          desc:"Anmeldung, ИНН, медицинское страхование и официальные процедуры."},
      {title:"Интеграция",          desc:"Сообщество, курсы BAMF, организации поддержки."},
      {title:"Экстренная помощь",   desc:"Номера экстренных служб, срочные сроки, бесплатная юрпомощь."},
    ],
  ,
    open_guide: "Открыть →",
    start_by_state: "По землям →",
    emergency_help: "Экстренная помощь",
    search: "Поиск",
    learn_more: "Узнать больше",
    coming_soon: "Скоро",
    official_source: "Официальный источник",
    last_checked: "Последняя проверка",
    back_modules: "Все руководства",
    quick_checklist: "Быстрый чеклист",
    related_guides: "Похожие руководства",
    ask_ai: "Спросить ИИ",
    ai_preview: "Предпросмотр ИИ",
    ai_coming: "Полный ИИ скоро",
    journey_title: "Ваш путь в Германию",
    journey_sub: "Шаг за шагом от визы до обустройства.",
    footer_built: "Создано для иммигрантов.",
    footer_disclaimer: "Только общая информация — проверяйте у официальных органов.",
    lang_status_title: "Статус перевода",
    lang_status_core: "Интерфейс: доступен",
    lang_status_guides: "Полные страницы: в процессе",
    lang_status_official: "Официальные ссылки: без изменений",
    guide_notice: "Полный перевод в процессе.",
    module_housing: "Жильё",
    module_healthcare: "Здравоохранение",
    module_jobs: "Работа и Виза",
    module_legal: "Юридическая помощь",
    module_language: "Язык",
    module_costs: "Стоимость жизни",
    module_education: "Образование",
    module_integration: "Интеграция",
    module_bureaucracy: "Бюрократия",
    module_family: "Семья",
    module_emergency: "Экстренная ситуация",
    module_banking: "Банки",},
  fr: {
    dir: "ltr",
    nav_home: "Accueil",
    nav_states: "Länder",
    nav_guides: "Guides",
    nav_languages: "Langues",
    nav_about: "À propos",
    nav_resources: "Ressources",
    emg_help: "Aide d'urgence",
    emg_112: "Ambulance et pompiers",
    emg_110: "Police",
    emg_116: "Médecin de garde",
    emg_crisis: "Ligne de crise",
    stat_states: "Länder",
    stat_langs: "Langues",
    stat_modules: "Modules de vie",
    stat_links: "Liens officiels",
    stat_emg: "Urgence prête",
    guides_kicker: "Vie en Allemagne",
    guides_title: "Explorer les modules de vie",
    guides_sub: "Guides pratiques pour vivre, travailler, étudier et s'installer en Allemagne.",
    states_kicker: "Information locale",
    states_title: "Explorer par Land",
    states_sub: "Sélectionnez votre Land pour trouver les autorités locales et ressources officielles.",
    browse_guides: "Tous les guides",
    open_state: "Ouvrir le guide du Land →",
    hero:       ["Naviguez en Allemagne en toute confiance", "L'Allemagne expliquée étape par étape dans votre langue — liens officiels, aide d'urgence et guide par Land."],
    nav:        ["Guides","Langues","À propos","Ressources"],
    stats:      ["Liens vérifiés","Modules de vie","Urgence 24h/7","Langues"],
    search_ph:  "Rechercher guides et Länder...",
    state_ph:   "Rechercher Land ou ville...",
    modules_h:  "Modules de vie",
    states_h:   "Choisissez votre Land",
    open_guide: "Ouvrir le guide →",
    emergency:  "🚨 Urgence : 112 (ambulance · pompiers) · 110 (police) · 116 117 (médecin de garde)",
    emg_btn:    "Numéros d'urgence →",
    save:       "Sauvegarder",
    remove:     "Retirer",
    saved_only: "Afficher les sauvegardés",
    all_guides: "Tous les guides",
    dir:        "ltr",
    modules: [
      {title:"Logement",             desc:"Trouver un appartement, contrat de location, caution et droits des locataires."},
      {title:"Santé",                desc:"Assurance maladie, médecins, hôpitaux et rendez-vous."},
      {title:"Emploi et Visa",       desc:"Offres d'emploi, titre de séjour, Blue Card et recherche d'emploi."},
      {title:"Aide juridique",       desc:"Droit de séjour, lettres officielles, délais et droits."},
      {title:"Langue",               desc:"Apprendre l'allemand, pratiquer les phrases du quotidien."},
      {title:"Coût de la vie",       desc:"Comparer loyers, dépenses, salaires et coûts quotidiens."},
      {title:"Éducation",            desc:"Écoles, crèches, cours d'intégration et parcours d'apprentissage."},
      {title:"Banque et impôts",     desc:"Comptes bancaires, virements, Schufa, numéro fiscal."},
      {title:"Famille et enfants",   desc:"Kindergeld, Kita, écoles, congé parental et droits familiaux."},
      {title:"Bureaucratie",         desc:"Anmeldung, numéro fiscal, assurance maladie et démarches."},
      {title:"Intégration",          desc:"Communauté, cours BAMF, organisations de soutien."},
      {title:"Urgence",              desc:"Numéros d'urgence, délais critiques, aide juridique gratuite."},
    ],
  ,
    open_guide: "Ouvrir le guide →",
    start_by_state: "Par Land →",
    emergency_help: "Aide d'urgence",
    search: "Rechercher",
    learn_more: "En savoir plus",
    coming_soon: "Bientôt",
    official_source: "Source officielle",
    last_checked: "Dernière vérification",
    back_modules: "Tous les guides",
    quick_checklist: "Liste de contrôle rapide",
    related_guides: "Guides connexes",
    ask_ai: "Demander à l'IA",
    ai_preview: "Aperçu de l'assistant IA",
    ai_coming: "IA complète bientôt",
    journey_title: "Votre voyage en Allemagne",
    journey_sub: "Pas à pas du visa à l'installation.",
    footer_built: "Construit pour les immigrants.",
    footer_disclaimer: "Informations générales — vérifiez avec les autorités officielles.",
    lang_status_title: "Statut de traduction",
    lang_status_core: "Interface principale: disponible",
    lang_status_guides: "Guides complets: en cours",
    lang_status_official: "Liens officiels: inchangés",
    guide_notice: "La traduction complète est en cours.",
    module_housing: "Logement",
    module_healthcare: "Santé",
    module_jobs: "Emploi et Visa",
    module_legal: "Aide juridique",
    module_language: "Langue",
    module_costs: "Coût de la vie",
    module_education: "Éducation",
    module_integration: "Intégration",
    module_bureaucracy: "Bureaucratie",
    module_family: "Famille",
    module_emergency: "Urgence",
    module_banking: "Banque",},
  fa: {
    dir: "rtl",
    nav_home: "خانه",
    nav_states: "ایالت‌ها",
    nav_guides: "راهنماها",
    nav_languages: "زبان‌ها",
    nav_about: "درباره ما",
    nav_resources: "منابع",
    emg_help: "کمک اضطراری",
    emg_112: "اورژانس و آتش‌نشانی",
    emg_110: "پلیس",
    emg_116: "پزشک کشیک",
    emg_crisis: "خط بحران",
    stat_states: "ایالت",
    stat_langs: "زبان",
    stat_modules: "ماژول زندگی",
    stat_links: "لینک رسمی",
    stat_emg: "آمادگی اضطراری",
    guides_kicker: "زندگی در آلمان",
    guides_title: "کشف ماژول‌های زندگی",
    guides_sub: "راهنماهای عملی برای زندگی، کار، تحصیل و سکونت در آلمان.",
    states_kicker: "اطلاعات محلی",
    states_title: "کشف بر اساس ایالت",
    states_sub: "برای یافتن مقامات محلی و منابع رسمی، ایالت خود را انتخاب کنید.",
    browse_guides: "همه راهنماها",
    open_state: "باز کردن راهنمای ایالت →",
    hero:       ["با اطمینان در آلمان مسیر خود را پیدا کنید", "آلمان گام‌به‌گام به زبان شما توضیح داده شده — لینک‌های رسمی، پشتیبانی اضطراری و راهنمای ایالتی."],
    nav:        ["راهنماها","زبان‌ها","درباره ما","منابع"],
    stats:      ["لینک تأییدشده","ماژول زندگی","اورژانس ۲۴/۷","زبان"],
    search_ph:  "جستجو در راهنماها و ایالت‌ها...",
    state_ph:   "جستجوی ایالت یا شهر...",
    modules_h:  "ماژول‌های زندگی",
    states_h:   "ایالت خود را انتخاب کنید",
    open_guide: "باز کردن راهنما →",
    emergency:  "🚨 اورژانس: ۱۱۲ (اورژانس · آتش‌نشانی) · ۱۱۰ (پلیس) · ۱۱۶ ۱۱۷ (پزشک خارج از ساعت کاری)",
    emg_btn:    "شماره‌های اورژانسی →",
    save:       "ذخیره",
    remove:     "حذف",
    saved_only: "نمایش ذخیره‌شده‌ها",
    all_guides: "همه راهنماها",
    dir:        "rtl",
    modules: [
      {title:"مسکن",               desc:"پیدا کردن آپارتمان، قرارداد اجاره، ودیعه و حقوق مستأجر."},
      {title:"بهداشت",             desc:"بیمه درمانی، پزشکان، بیمارستان‌ها و نوبت‌ها."},
      {title:"کار و ویزا",         desc:"فرصت‌های شغلی، اقامت، کارت آبی و جستجوی کار."},
      {title:"کمک حقوقی",          desc:"قانون اقامت، نامه‌های رسمی، مهلت‌ها و حقوق."},
      {title:"زبان",               desc:"یادگیری آلمانی، تمرین عبارات روزمره و منابع زبانی."},
      {title:"هزینه زندگی",        desc:"مقایسه اجاره، هزینه‌ها، حقوق و هزینه‌های روزانه."},
      {title:"آموزش",              desc:"مدارس، مهدکودک، دوره‌های ادغام و مسیرهای یادگیری."},
      {title:"بانکداری و مالیات",  desc:"حساب‌های بانکی، انتقال، شوفا، شناسه مالیاتی."},
      {title:"خانواده و کودکان",   desc:"کیندرگلد، کیتا، مدارس و حقوق خانوادگی."},
      {title:"بوروکراسی",          desc:"آنملدونگ، شناسه مالیاتی، بیمه درمانی و مراحل رسمی."},
      {title:"ادغام",              desc:"جامعه، دوره‌های بامف و سازمان‌های حمایتی."},
      {title:"اضطراری",            desc:"شماره‌های اضطراری، مهلت‌های فوری و کمک حقوقی رایگان."},
    ],
  ,
    open_guide: "باز کردن راهنما →",
    start_by_state: "شروع با ایالت →",
    emergency_help: "کمک اضطراری",
    search: "جستجو",
    learn_more: "بیشتر بدانید",
    coming_soon: "به زودی",
    official_source: "منبع رسمی",
    last_checked: "آخرین بررسی",
    back_modules: "همه راهنماها",
    quick_checklist: "چک‌لیست سریع",
    related_guides: "راهنماهای مرتبط",
    ask_ai: "از هوش مصنوعی بپرسید",
    ai_preview: "پیش‌نمایش دستیار",
    ai_coming: "هوش مصنوعی کامل به زودی",
    journey_title: "سفر شما به آلمان",
    journey_sub: "از ویزا تا اقامت، قدم به قدم.",
    footer_built: "ساخته شده برای مهاجران.",
    footer_disclaimer: "فقط اطلاعات عمومی — با مقامات رسمی تأیید کنید.",
    lang_status_title: "وضعیت ترجمه",
    lang_status_core: "رابط اصلی: در دسترس",
    lang_status_guides: "صفحات کامل: در حال انجام",
    lang_status_official: "لینک‌های رسمی: بدون تغییر",
    guide_notice: "ترجمه کامل در حال انجام است.",
    module_housing: "مسکن",
    module_healthcare: "مراقبت بهداشتی",
    module_jobs: "کار و ویزا",
    module_legal: "کمک حقوقی",
    module_language: "زبان",
    module_costs: "هزینه زندگی",
    module_education: "تحصیل",
    module_integration: "ادغام",
    module_bureaucracy: "بوروکراسی",
    module_family: "خانواده",
    module_emergency: "اورژانس",
    module_banking: "بانکداری",},
  it: {
    nav_home: "Home",
    nav_states: "Länder",
    nav_guides: "Guide",
    nav_languages: "Lingue",
    nav_about: "Chi siamo",
    nav_resources: "Risorse",
    emg_help: "Aiuto d'emergenza",
    emg_112: "Ambulanza e pompieri",
    emg_110: "Polizia",
    emg_116: "Medico di guardia",
    emg_crisis: "Linea di crisi",
    stat_states: "Länder",
    stat_langs: "Lingue",
    stat_modules: "Moduli di vita",
    stat_links: "Link ufficiali",
    stat_emg: "Emergenza pronta",
    guides_kicker: "Vita in Germania",
    guides_title: "Esplora i moduli di vita",
    guides_sub: "Guide pratiche per vivere, lavorare, studiare e stabilirsi in Germania.",
    states_kicker: "Informazioni locali",
    states_title: "Esplora per Land",
    states_sub: "Seleziona il tuo Land per trovare autorità locali e risorse ufficiali.",
    browse_guides: "Tutte le guide",
    open_state: "Apri guida del Land →",
    hero:       ["Orientati in Germania con sicurezza", "La Germania spiegata passo dopo passo nella tua lingua — link ufficiali, supporto d'emergenza e guida per Land."],
    nav:        ["Guide","Lingue","Chi siamo","Risorse"],
    stats:      ["Link verificati","Moduli di vita","Emergenza 24/7","Lingue"],
    search_ph:  "Cerca guide e Länder...",
    state_ph:   "Cerca Land o città...",
    modules_h:  "Moduli di vita",
    states_h:   "Scegli il tuo Land",
    open_guide: "Apri la guida →",
    emergency:  "🚨 Emergenza: 112 (ambulanza · pompieri) · 110 (polizia) · 116 117 (medico fuori orario)",
    emg_btn:    "Numeri d'emergenza →",
    save:       "Salva",
    remove:     "Rimuovi",
    saved_only: "Mostra salvati",
    all_guides: "Tutte le guide",
    dir:        "ltr",
    modules: [
      {title:"Alloggio",             desc:"Trovare casa, contratti d'affitto, caparra e diritti degli inquilini."},
      {title:"Salute",               desc:"Assicurazione sanitaria, medici, ospedali e appuntamenti."},
      {title:"Lavoro e Visto",       desc:"Opportunità di lavoro, permesso di soggiorno, Blue Card."},
      {title:"Aiuto legale",         desc:"Diritto di soggiorno, lettere ufficiali, scadenze e diritti."},
      {title:"Lingua",               desc:"Imparare il tedesco, praticare frasi quotidiane."},
      {title:"Costo della vita",     desc:"Confronta affitti, spese, stipendi e costi quotidiani."},
      {title:"Istruzione",           desc:"Scuole, asili nido, corsi d'integrazione e percorsi formativi."},
      {title:"Banca e tasse",        desc:"Conti bancari, bonifici, Schufa, codice fiscale."},
      {title:"Famiglia e bambini",   desc:"Kindergeld, Kita, scuole, congedo parentale e diritti familiari."},
      {title:"Burocrazia",           desc:"Anmeldung, codice fiscale, assicurazione sanitaria e pratiche."},
      {title:"Integrazione",         desc:"Comunità, corsi BAMF, organizzazioni di supporto."},
      {title:"Emergenza",            desc:"Numeri di emergenza, scadenze urgenti, assistenza legale gratuita."},
    ],
  },
  uk: {
    dir: "ltr",
    nav_home: "Головна",
    nav_states: "Землі",
    nav_guides: "Путівники",
    nav_languages: "Мови",
    nav_about: "Про нас",
    nav_resources: "Ресурси",
    emg_help: "Екстрена допомога",
    emg_112: "Швидка і пожежні",
    emg_110: "Поліція",
    emg_116: "Черговий лікар",
    emg_crisis: "Лінія підтримки",
    stat_states: "Землі",
    stat_langs: "Мови",
    stat_modules: "Розділи",
    stat_links: "Офіційних посилань",
    stat_emg: "Готовність 24/7",
    guides_kicker: "Життя в Німеччині",
    guides_title: "Путівники для життя",
    guides_sub: "Практичні путівники для проживання, роботи, навчання та облаштування в Німеччині.",
    states_kicker: "Місцева інформація",
    states_title: "За федеральними землями",
    states_sub: "Виберіть землю для пошуку місцевих органів влади та офіційних ресурсів.",
    browse_guides: "Усі путівники",
    open_state: "Відкрити путівник по землі →",
    hero:       ["Впевнено орієнтуйтеся в Німеччині", "Німеччина пояснюється крок за кроком вашою мовою — офіційні посилання, екстрена допомога та регіональний путівник."],
    nav:        ["Путівники","Мови","Про нас","Ресурси"],
    stats:      ["Перевірених посилань","Розділів для життя","Екстрено 24/7","Мов"],
    search_ph:  "Пошук по путівниках і землях...",
    state_ph:   "Пошук за землею або містом...",
    modules_h:  "Путівники для життя",
    states_h:   "Виберіть федеральну землю",
    open_guide: "Відкрити путівник →",
    emergency:  "🚨 Екстрено: 112 (швидка · пожежа) · 110 (поліція) · 116 117 (лікар поза часом)",
    emg_btn:    "Номери екстрених служб →",
    save:       "Зберегти",
    remove:     "Видалити",
    saved_only: "Показати збережені",
    all_guides: "Всі путівники",
    dir:        "ltr",
    modules: [
      {title:"Житло",               desc:"Знайти квартиру, договір оренди, застава та права орендаря."},
      {title:"Охорона здоров'я",    desc:"Медичне страхування, лікарі, лікарні та запис."},
      {title:"Робота та віза",      desc:"Вакансії, посвідка на проживання, Blue Card та пошук роботи."},
      {title:"Юридична допомога",   desc:"Закон про проживання, офіційні листи, терміни та права."},
      {title:"Мова",                desc:"Вивчайте німецьку, практикуйте фрази та знаходьте ресурси."},
      {title:"Вартість життя",      desc:"Порівняння оренди, витрат, зарплат та щоденних витрат."},
      {title:"Освіта",              desc:"Школи, дитячі садки, курси інтеграції та шляхи навчання."},
      {title:"Банки та податки",    desc:"Банківські рахунки, перекази, Schufa, ІПН та фінанси."},
      {title:"Сім'я та діти",       desc:"Kindergeld, Kita, школи, підтримка батьків та сімейні права."},
      {title:"Бюрократія",          desc:"Anmeldung, ІПН, медстрахування та офіційні процедури."},
      {title:"Інтеграція",          desc:"Спільнота, курси BAMF, організації підтримки."},
      {title:"Екстрена допомога",   desc:"Номери екстрених служб, термінові терміни, безкоштовна юрдопомога."},
    ],
  ,
    open_guide: "Відкрити →",
    start_by_state: "За землею →",
    emergency_help: "Екстрена допомога",
    search: "Пошук",
    learn_more: "Дізнатися більше",
    coming_soon: "Незабаром",
    official_source: "Офіційне джерело",
    last_checked: "Остання перевірка",
    back_modules: "Усі путівники",
    quick_checklist: "Швидкий чеклист",
    related_guides: "Пов'язані путівники",
    ask_ai: "Запитати ШІ",
    ai_preview: "Попередній перегляд ШІ",
    ai_coming: "Повний ШІ незабаром",
    journey_title: "Ваш шлях до Німеччини",
    journey_sub: "Крок за кроком від візи до облаштування.",
    footer_built: "Створено для іммігрантів.",
    footer_disclaimer: "Лише загальна інформація — перевіряйте з офіційними органами.",
    lang_status_title: "Статус перекладу",
    lang_status_core: "Інтерфейс: доступний",
    lang_status_guides: "Повні сторінки: в процесі",
    lang_status_official: "Офіційні посилання: без змін",
    guide_notice: "Повний переклад в процесі.",
    module_housing: "Житло",
    module_healthcare: "Охорона здоров'я",
    module_jobs: "Робота і Віза",
    module_legal: "Правова допомога",
    module_language: "Мова",
    module_costs: "Вартість життя",
    module_education: "Освіта",
    module_integration: "Інтеграція",
    module_bureaucracy: "Бюрократія",
    module_family: "Сім'я",
    module_emergency: "Надзвичайна ситуація",
    module_banking: "Банківська справа",},
};

const UI_TEXT = {
  en: { state_count: "{count} states", capital: "Capital", major_cities: "Major cities", best_for: "Best for", best_value: "students, jobs and families", state_description: "Official guidance for housing, work, study, family life, and local services in {state}.", view_details: "Open state guide →", official_resources: "Official local resources", full_state_guide: "Open full state guide →", cities: "Cities", arrival_checklist: "Open arrival checklist →", close_state: "Close state details", no_states: "No state matches your search.", guide: "Guide", state: "State", saved: "Saved", more: "More" },
  de: { state_count: "{count} Bundesländer", capital: "Hauptstadt", major_cities: "Wichtige Städte", best_for: "Besonders geeignet für", best_value: "Studium, Arbeit und Familien", state_description: "Offizielle Hinweise zu Wohnen, Arbeit, Studium, Familie und lokalen Diensten in {state}.", view_details: "Landesratgeber öffnen →", official_resources: "Offizielle lokale Ressourcen", full_state_guide: "Vollständigen Landesratgeber öffnen →", cities: "Städte", arrival_checklist: "Ankunftscheckliste öffnen →", close_state: "Landesdetails schließen", no_states: "Kein Bundesland entspricht Ihrer Suche.", guide: "Ratgeber", state: "Bundesland", saved: "Gespeichert", more: "Mehr" },
  ar: { state_count: "{count} ولاية", capital: "العاصمة", major_cities: "المدن الرئيسية", best_for: "الأنسب لـ", best_value: "الطلاب والعمل والعائلات", state_description: "إرشادات رسمية حول السكن والعمل والدراسة والأسرة والخدمات المحلية في {state}.", view_details: "فتح دليل الولاية →", official_resources: "موارد محلية رسمية", full_state_guide: "فتح دليل الولاية الكامل →", cities: "المدن", arrival_checklist: "فتح قائمة الوصول →", close_state: "إغلاق تفاصيل الولاية", no_states: "لا توجد ولاية مطابقة لبحثك.", guide: "دليل", state: "ولاية", saved: "المحفوظ", more: "المزيد" },
  tr: { state_count: "{count} eyalet", capital: "Başkent", major_cities: "Büyük şehirler", best_for: "En uygun", best_value: "öğrenciler, işler ve aileler", state_description: "{state} için konut, iş, eğitim, aile ve yerel hizmetler hakkında resmi rehberlik.", view_details: "Eyalet rehberini aç →", official_resources: "Resmi yerel kaynaklar", full_state_guide: "Tam eyalet rehberini aç →", cities: "Şehirler", arrival_checklist: "Varış kontrol listesini aç →", close_state: "Eyalet ayrıntılarını kapat", no_states: "Aramanızla eşleşen eyalet yok.", guide: "Rehber", state: "Eyalet", saved: "Kaydedilenler", more: "Daha fazla" },
  ur: { state_count: "{count} ریاستیں", capital: "دارالحکومت", major_cities: "اہم شہر", best_for: "بہترین برائے", best_value: "طلبہ، ملازمتیں اور خاندان", state_description: "{state} میں رہائش، کام، تعلیم، خاندان اور مقامی خدمات کے لیے سرکاری رہنمائی۔", view_details: "ریاستی رہنما کھولیں ←", official_resources: "سرکاری مقامی وسائل", full_state_guide: "مکمل ریاستی رہنما کھولیں ←", cities: "شہر", arrival_checklist: "آمد کی چیک لسٹ کھولیں ←", close_state: "ریاست کی تفصیل بند کریں", no_states: "آپ کی تلاش سے کوئی ریاست نہیں ملی۔", guide: "رہنما", state: "ریاست", saved: "محفوظ", more: "مزید" },
  ru: { state_count: "{count} земель", capital: "Столица", major_cities: "Крупные города", best_for: "Лучше всего для", best_value: "студентов, работы и семей", state_description: "Официальная информация о жилье, работе, учёбе, семье и местных услугах в земле {state}.", view_details: "Открыть путеводитель →", official_resources: "Официальные местные ресурсы", full_state_guide: "Открыть полный путеводитель по земле →", cities: "Города", arrival_checklist: "Открыть список первых шагов →", close_state: "Закрыть сведения о земле", no_states: "По вашему запросу ничего не найдено.", guide: "Руководство", state: "Земля", saved: "Сохранённое", more: "Ещё" },
  fr: { state_count: "{count} Länder", capital: "Capitale", major_cities: "Villes principales", best_for: "Idéal pour", best_value: "les étudiants, l'emploi et les familles", state_description: "Informations officielles sur le logement, l'emploi, les études, la famille et les services locaux en {state}.", view_details: "Ouvrir le guide du Land →", official_resources: "Ressources locales officielles", full_state_guide: "Ouvrir le guide complet du Land →", cities: "Villes", arrival_checklist: "Ouvrir la liste d'arrivée →", close_state: "Fermer les détails du Land", no_states: "Aucun Land ne correspond à votre recherche.", guide: "Guide", state: "Land", saved: "Enregistrés", more: "Plus" },
  fa: { state_count: "{count} ایالت", capital: "مرکز", major_cities: "شهرهای مهم", best_for: "مناسب برای", best_value: "دانشجویان، کار و خانواده‌ها", state_description: "راهنمای رسمی مسکن، کار، تحصیل، خانواده و خدمات محلی در {state}.", view_details: "باز کردن راهنمای ایالت ←", official_resources: "منابع رسمی محلی", full_state_guide: "باز کردن راهنمای کامل ایالت ←", cities: "شهرها", arrival_checklist: "باز کردن چک‌لیست ورود ←", close_state: "بستن جزئیات ایالت", no_states: "هیچ ایالتی با جستجوی شما مطابقت ندارد.", guide: "راهنما", state: "ایالت", saved: "ذخیره‌شده", more: "بیشتر" },
  it: { state_count: "{count} Länder", capital: "Capitale", major_cities: "Città principali", best_for: "Ideale per", best_value: "studenti, lavoro e famiglie", state_description: "Informazioni ufficiali su casa, lavoro, studio, famiglia e servizi locali in {state}.", view_details: "Apri la guida del Land →", official_resources: "Risorse locali ufficiali", full_state_guide: "Apri la guida completa del Land →", cities: "Città", arrival_checklist: "Apri la lista di arrivo →", close_state: "Chiudi i dettagli del Land", no_states: "Nessun Land corrisponde alla ricerca.", guide: "Guida", state: "Land", saved: "Salvati", more: "Altro" },
  uk: { state_count: "{count} земель", capital: "Столиця", major_cities: "Великі міста", best_for: "Найкраще для", best_value: "студентів, роботи та сімей", state_description: "Офіційна інформація про житло, роботу, навчання, сім'ю та місцеві послуги в землі {state}.", view_details: "Відкрити путівник землею →", official_resources: "Офіційні місцеві ресурси", full_state_guide: "Відкрити повний путівник землею →", cities: "Міста", arrival_checklist: "Відкрити список перших кроків →", close_state: "Закрити відомості про землю", no_states: "За вашим запитом земель не знайдено.", guide: "Путівник", state: "Земля", saved: "Збережене", more: "Більше" },
};

Object.entries(UI_TEXT).forEach(([code, text]) => Object.assign(TRANSLATIONS[code], text));

const PAGE_TEXT = {
  en: {
    hero_eyebrow: "Official sources. Clear next steps.", hero_start: "Start by State", hero_emergency: "Emergency Help", hero_trusted: "Trusted guidance", hero_trusted_sub: "Links to official German sources",
    journey_kicker: "Quick start", journey_title: "Start here — What do you need?", journey_sub: "Choose your situation and go directly to the most useful guide.", journey_new: "I am new in Germany", journey_new_sub: "First-week checklist", journey_visa: "I need visa / residence help", journey_visa_sub: "Permits and work routes", journey_housing: "I need housing help", journey_housing_sub: "Renting and tenant rights", journey_legal: "I need emergency / legal help", journey_legal_sub: "Rights, letters and deadlines", journey_language: "I want to learn German", journey_language_sub: "Daily phrases and practice",
    language_kicker: "Multilingual by design", language_title: "Guidance that feels easier to understand", language_sub: "Choose your preferred language for homepage guidance. Official links remain available for verification.", language_count: "10 supported languages", language_list: "English, German, Arabic, Turkish, Urdu, Russian, French, Persian, Italian, and Ukrainian.", language_guide: "Open German language guide",
    about_kicker: "Built for real life", about_title: "A calmer way to find your next step", about_sub: "Navigate Germany turns scattered public information into clear journeys while keeping official authorities one click away.", about_official: "Official-link focused", about_official_sub: "Public authorities and trusted services", about_explore: "Easy to explore", about_explore_sub: "By situation, guide, or Bundesland", about_mobile: "Mobile first", about_mobile_sub: "Designed to work like an app", about_free: "Free to use", about_free_sub: "No account or API key required",
    disclaimer_title: "Important:", disclaimer_text: "This platform provides general guidance and links to official sources. Always verify information with official German authorities.", footer_desc: "A multilingual guide with official links to help you live, work, study, and thrive in Germany.", footer_quick: "Quick Links", footer_popular: "Popular Guides", footer_jobs: "Residence & Jobs", footer_health: "Health Insurance", footer_home: "Finding a Home", footer_legal: "Legal Help", footer_language: "German Language", footer_emergency: "Emergency", footer_disclaimer_heading: "Disclaimer", footer_disclaimer: "Information is for general guidance only. Always check official sources.", footer_built: "Built with care by Shaista Shabbir",
  },
  de: {
    hero_eyebrow: "Offizielle Quellen. Klare nächste Schritte.", hero_start: "Nach Bundesland starten", hero_emergency: "Notfallhilfe", hero_trusted: "Verlässliche Orientierung", hero_trusted_sub: "Links zu offiziellen deutschen Quellen",
    journey_kicker: "Schnellstart", journey_title: "Hier starten — Was brauchen Sie?", journey_sub: "Wählen Sie Ihre Situation und öffnen Sie direkt den passenden Ratgeber.", journey_new: "Ich bin neu in Deutschland", journey_new_sub: "Checkliste für die erste Woche", journey_visa: "Ich brauche Visa- oder Aufenthaltshilfe", journey_visa_sub: "Erlaubnisse und Arbeitswege", journey_housing: "Ich brauche Hilfe beim Wohnen", journey_housing_sub: "Mieten und Mieterrechte", journey_legal: "Ich brauche Notfall- oder Rechtshilfe", journey_legal_sub: "Rechte, Briefe und Fristen", journey_language: "Ich möchte Deutsch lernen", journey_language_sub: "Alltagssätze und Übung",
    language_kicker: "Mehrsprachig gedacht", language_title: "Orientierung, die leichter verständlich ist", language_sub: "Wählen Sie Ihre Sprache. Offizielle Links bleiben zur Prüfung verfügbar.", language_count: "10 unterstützte Sprachen", language_list: "Englisch, Deutsch, Arabisch, Türkisch, Urdu, Russisch, Französisch, Persisch, Italienisch und Ukrainisch.", language_guide: "Deutschen Sprachratgeber öffnen",
    about_kicker: "Für den Alltag gebaut", about_title: "Ruhiger zum nächsten Schritt", about_sub: "Navigate Germany bündelt verstreute öffentliche Informationen in klaren Wegen.", about_official: "Offizielle Links im Fokus", about_official_sub: "Behörden und vertrauenswürdige Dienste", about_explore: "Einfach zu erkunden", about_explore_sub: "Nach Situation, Ratgeber oder Bundesland", about_mobile: "Mobil zuerst", about_mobile_sub: "Funktioniert wie eine App", about_free: "Kostenlos nutzbar", about_free_sub: "Kein Konto und kein API-Schlüssel nötig",
    disclaimer_title: "Wichtig:", disclaimer_text: "Diese Plattform bietet allgemeine Orientierung und offizielle Links. Prüfen Sie Angaben immer bei deutschen Behörden.", footer_desc: "Mehrsprachiger Ratgeber mit offiziellen Links für Leben, Arbeit und Studium in Deutschland.", footer_quick: "Schnelllinks", footer_popular: "Beliebte Ratgeber", footer_jobs: "Aufenthalt & Arbeit", footer_health: "Krankenversicherung", footer_home: "Wohnung finden", footer_legal: "Rechtshilfe", footer_language: "Deutsch lernen", footer_emergency: "Notfall", footer_disclaimer_heading: "Hinweis", footer_disclaimer: "Nur allgemeine Orientierung. Bitte offizielle Quellen prüfen.", footer_built: "Mit Sorgfalt erstellt von Shaista Shabbir",
  },
  ar: {
    hero_eyebrow: "مصادر رسمية. خطوات واضحة.", hero_start: "ابدأ حسب الولاية", hero_emergency: "مساعدة طارئة", hero_trusted: "إرشادات موثوقة", hero_trusted_sub: "روابط إلى مصادر ألمانية رسمية",
    journey_kicker: "بداية سريعة", journey_title: "ابدأ هنا — ماذا تحتاج؟", journey_sub: "اختر وضعك وانتقل مباشرة إلى الدليل الأنسب.", journey_new: "أنا جديد في ألمانيا", journey_new_sub: "قائمة الأسبوع الأول", journey_visa: "أحتاج مساعدة في التأشيرة أو الإقامة", journey_visa_sub: "التصاريح ومسارات العمل", journey_housing: "أحتاج مساعدة في السكن", journey_housing_sub: "الإيجار وحقوق المستأجر", journey_legal: "أحتاج مساعدة طارئة أو قانونية", journey_legal_sub: "الحقوق والرسائل والمواعيد", journey_language: "أريد تعلم الألمانية", journey_language_sub: "عبارات يومية وتمارين",
    language_kicker: "متعدد اللغات من الأساس", language_title: "إرشادات أسهل في الفهم", language_sub: "اختر لغتك المفضلة وتحقق دائماً من الروابط الرسمية.", language_count: "10 لغات مدعومة", language_list: "الإنجليزية والألمانية والعربية والتركية والأردية والروسية والفرنسية والفارسية والإيطالية والأوكرانية.", language_guide: "فتح دليل اللغة الألمانية",
    about_kicker: "مصمم للحياة اليومية", about_title: "طريقة أهدأ لمعرفة خطوتك التالية", about_sub: "يجمع Navigate Germany المعلومات العامة المتفرقة في مسارات واضحة.", about_official: "التركيز على الروابط الرسمية", about_official_sub: "السلطات العامة والخدمات الموثوقة", about_explore: "سهل الاستكشاف", about_explore_sub: "حسب الحالة أو الدليل أو الولاية", about_mobile: "مصمم للهاتف أولاً", about_mobile_sub: "تجربة تشبه التطبيق", about_free: "مجاني للاستخدام", about_free_sub: "لا يحتاج حساباً أو مفتاح API",
    disclaimer_title: "مهم:", disclaimer_text: "تقدم المنصة إرشادات عامة وروابط رسمية. تحقق دائماً من المعلومات لدى السلطات الألمانية.", footer_desc: "دليل متعدد اللغات بروابط رسمية للحياة والعمل والدراسة في ألمانيا.", footer_quick: "روابط سريعة", footer_popular: "أدلة شائعة", footer_jobs: "الإقامة والعمل", footer_health: "التأمين الصحي", footer_home: "العثور على سكن", footer_legal: "مساعدة قانونية", footer_language: "اللغة الألمانية", footer_emergency: "الطوارئ", footer_disclaimer_heading: "إخلاء مسؤولية", footer_disclaimer: "المعلومات للإرشاد العام فقط. تحقق من المصادر الرسمية.", footer_built: "من إعداد Shaista Shabbir بعناية",
  },
  tr: {
    hero_eyebrow: "Resmi kaynaklar. Net sonraki adımlar.", hero_start: "Eyalete göre başla", hero_emergency: "Acil Yardım", hero_trusted: "Güvenilir rehberlik", hero_trusted_sub: "Resmi Alman kaynaklarına bağlantılar",
    journey_kicker: "Hızlı başlangıç", journey_title: "Buradan başlayın — Neye ihtiyacınız var?", journey_sub: "Durumunuzu seçin ve en yararlı rehbere gidin.", journey_new: "Almanya'da yeniyim", journey_new_sub: "İlk hafta kontrol listesi", journey_visa: "Vize veya oturum yardımı gerekiyor", journey_visa_sub: "İzinler ve çalışma yolları", journey_housing: "Konut yardımı gerekiyor", journey_housing_sub: "Kiralama ve kiracı hakları", journey_legal: "Acil veya hukuki yardım gerekiyor", journey_legal_sub: "Haklar, mektuplar ve süreler", journey_language: "Almanca öğrenmek istiyorum", journey_language_sub: "Günlük ifadeler ve pratik",
    language_kicker: "Çok dilli tasarım", language_title: "Anlaması daha kolay rehberlik", language_sub: "Tercih ettiğiniz dili seçin; resmi bağlantılar doğrulama için kalır.", language_count: "10 desteklenen dil", language_list: "İngilizce, Almanca, Arapça, Türkçe, Urduca, Rusça, Fransızca, Farsça, İtalyanca ve Ukraynaca.", language_guide: "Almanca dil rehberini aç",
    about_kicker: "Gerçek yaşam için", about_title: "Sonraki adımı bulmanın daha sakin yolu", about_sub: "Navigate Germany dağınık kamu bilgilerini net yolculuklarda birleştirir.", about_official: "Resmi bağlantı odaklı", about_official_sub: "Kamu kurumları ve güvenilir hizmetler", about_explore: "Kolay keşif", about_explore_sub: "Duruma, rehbere veya eyalete göre", about_mobile: "Önce mobil", about_mobile_sub: "Uygulama gibi çalışır", about_free: "Ücretsiz kullanım", about_free_sub: "Hesap veya API anahtarı gerekmez",
    disclaimer_title: "Önemli:", disclaimer_text: "Bu platform genel rehberlik ve resmi bağlantılar sunar. Bilgileri Alman makamlarından doğrulayın.", footer_desc: "Almanya'da yaşam, çalışma ve eğitim için resmi bağlantılı çok dilli rehber.", footer_quick: "Hızlı Bağlantılar", footer_popular: "Popüler Rehberler", footer_jobs: "Oturum ve İş", footer_health: "Sağlık Sigortası", footer_home: "Ev Bulma", footer_legal: "Hukuki Yardım", footer_language: "Almanca", footer_emergency: "Acil Durum", footer_disclaimer_heading: "Sorumluluk Reddi", footer_disclaimer: "Bilgiler yalnızca genel rehberlik içindir. Resmi kaynakları kontrol edin.", footer_built: "Shaista Shabbir tarafından özenle hazırlandı",
  },
  ur: {
    hero_eyebrow: "سرکاری ذرائع۔ واضح اگلے اقدامات۔", hero_start: "ریاست سے شروع کریں", hero_emergency: "ہنگامی مدد", hero_trusted: "قابل اعتماد رہنمائی", hero_trusted_sub: "جرمن سرکاری ذرائع کے لنکس",
    journey_kicker: "فوری آغاز", journey_title: "یہاں سے شروع کریں — آپ کو کیا چاہیے؟", journey_sub: "اپنی صورتحال منتخب کریں اور مناسب رہنما پر جائیں۔", journey_new: "میں جرمنی میں نیا ہوں", journey_new_sub: "پہلے ہفتے کی چیک لسٹ", journey_visa: "مجھے ویزا یا رہائش میں مدد چاہیے", journey_visa_sub: "اجازت نامے اور کام کے راستے", journey_housing: "مجھے رہائش میں مدد چاہیے", journey_housing_sub: "کرایہ اور کرایہ دار کے حقوق", journey_legal: "مجھے ہنگامی یا قانونی مدد چاہیے", journey_legal_sub: "حقوق، خطوط اور آخری تاریخیں", journey_language: "میں جرمن سیکھنا چاہتا ہوں", journey_language_sub: "روزمرہ جملے اور مشق",
    language_kicker: "کثیر لسانی ڈیزائن", language_title: "آسانی سے سمجھ آنے والی رہنمائی", language_sub: "اپنی پسندیدہ زبان منتخب کریں اور سرکاری لنکس سے تصدیق کریں۔", language_count: "10 معاون زبانیں", language_list: "انگریزی، جرمن، عربی، ترکی، اردو، روسی، فرانسیسی، فارسی، اطالوی اور یوکرینی۔", language_guide: "جرمن زبان کا رہنما کھولیں",
    about_kicker: "حقیقی زندگی کے لیے", about_title: "اگلا قدم تلاش کرنے کا پرسکون طریقہ", about_sub: "Navigate Germany بکھری ہوئی سرکاری معلومات کو واضح راستوں میں جمع کرتا ہے۔", about_official: "سرکاری لنکس پر توجہ", about_official_sub: "سرکاری ادارے اور قابل اعتماد خدمات", about_explore: "آسان تلاش", about_explore_sub: "صورتحال، رہنما یا ریاست کے لحاظ سے", about_mobile: "موبائل فرسٹ", about_mobile_sub: "ایپ جیسا تجربہ", about_free: "مفت استعمال", about_free_sub: "اکاؤنٹ یا API کلید کی ضرورت نہیں",
    disclaimer_title: "اہم:", disclaimer_text: "یہ پلیٹ فارم عمومی رہنمائی اور سرکاری لنکس دیتا ہے۔ معلومات کی جرمن حکام سے ہمیشہ تصدیق کریں۔", footer_desc: "جرمنی میں رہنے، کام اور تعلیم کے لیے سرکاری لنکس والا کثیر لسانی رہنما۔", footer_quick: "فوری لنکس", footer_popular: "مشہور رہنما", footer_jobs: "رہائش اور ملازمت", footer_health: "ہیلتھ انشورنس", footer_home: "گھر تلاش کریں", footer_legal: "قانونی مدد", footer_language: "جرمن زبان", footer_emergency: "ہنگامی", footer_disclaimer_heading: "اعلان", footer_disclaimer: "معلومات صرف عمومی رہنمائی کے لیے ہیں۔ سرکاری ذرائع دیکھیں۔", footer_built: "Shaista Shabbir نے احتیاط سے بنایا",
  },
  ru: {
    hero_eyebrow: "Официальные источники. Понятные шаги.", hero_start: "Начать с земли", hero_emergency: "Экстренная помощь", hero_trusted: "Надёжная информация", hero_trusted_sub: "Ссылки на официальные источники Германии",
    journey_kicker: "Быстрый старт", journey_title: "Начните здесь — Что вам нужно?", journey_sub: "Выберите ситуацию и сразу откройте нужное руководство.", journey_new: "Я недавно в Германии", journey_new_sub: "План на первую неделю", journey_visa: "Нужна помощь с визой или ВНЖ", journey_visa_sub: "Разрешения и пути к работе", journey_housing: "Нужна помощь с жильём", journey_housing_sub: "Аренда и права жильцов", journey_legal: "Нужна экстренная или правовая помощь", journey_legal_sub: "Права, письма и сроки", journey_language: "Я хочу учить немецкий", journey_language_sub: "Повседневные фразы и практика",
    language_kicker: "Многоязычный подход", language_title: "Информация, которую легче понять", language_sub: "Выберите язык и проверяйте данные по официальным ссылкам.", language_count: "10 поддерживаемых языков", language_list: "Английский, немецкий, арабский, турецкий, урду, русский, французский, персидский, итальянский и украинский.", language_guide: "Открыть руководство по немецкому",
    about_kicker: "Для реальной жизни", about_title: "Спокойный путь к следующему шагу", about_sub: "Navigate Germany собирает разрозненную государственную информацию в понятные маршруты.", about_official: "Официальные ссылки", about_official_sub: "Государственные органы и надёжные службы", about_explore: "Легко найти", about_explore_sub: "По ситуации, теме или земле", about_mobile: "Сначала мобильный", about_mobile_sub: "Работает как приложение", about_free: "Бесплатно", about_free_sub: "Без аккаунта и ключа API",
    disclaimer_title: "Важно:", disclaimer_text: "Платформа даёт общую информацию и официальные ссылки. Всегда проверяйте данные у немецких властей.", footer_desc: "Многоязычный путеводитель с официальными ссылками для жизни, работы и учёбы в Германии.", footer_quick: "Быстрые ссылки", footer_popular: "Популярные руководства", footer_jobs: "ВНЖ и работа", footer_health: "Медстрахование", footer_home: "Поиск жилья", footer_legal: "Правовая помощь", footer_language: "Немецкий язык", footer_emergency: "Экстренная помощь", footer_disclaimer_heading: "Отказ от ответственности", footer_disclaimer: "Информация носит общий характер. Проверяйте официальные источники.", footer_built: "Создано с заботой: Shaista Shabbir",
  },
  fr: {
    hero_eyebrow: "Sources officielles. Étapes claires.", hero_start: "Commencer par Land", hero_emergency: "Aide d'urgence", hero_trusted: "Conseils fiables", hero_trusted_sub: "Liens vers les sources officielles allemandes",
    journey_kicker: "Démarrage rapide", journey_title: "Commencez ici — De quoi avez-vous besoin ?", journey_sub: "Choisissez votre situation et ouvrez directement le guide utile.", journey_new: "Je viens d'arriver en Allemagne", journey_new_sub: "Liste de la première semaine", journey_visa: "J'ai besoin d'aide pour le visa ou le séjour", journey_visa_sub: "Permis et voies d'emploi", journey_housing: "J'ai besoin d'aide au logement", journey_housing_sub: "Location et droits des locataires", journey_legal: "J'ai besoin d'aide urgente ou juridique", journey_legal_sub: "Droits, courriers et délais", journey_language: "Je veux apprendre l'allemand", journey_language_sub: "Phrases quotidiennes et pratique",
    language_kicker: "Multilingue par conception", language_title: "Des conseils plus faciles à comprendre", language_sub: "Choisissez votre langue et vérifiez les informations via les liens officiels.", language_count: "10 langues disponibles", language_list: "Anglais, allemand, arabe, turc, ourdou, russe, français, persan, italien et ukrainien.", language_guide: "Ouvrir le guide d'allemand",
    about_kicker: "Conçu pour la vraie vie", about_title: "Une façon plus sereine de trouver la prochaine étape", about_sub: "Navigate Germany rassemble les informations publiques dans des parcours clairs.", about_official: "Liens officiels", about_official_sub: "Autorités publiques et services fiables", about_explore: "Facile à explorer", about_explore_sub: "Par situation, guide ou Land", about_mobile: "Mobile d'abord", about_mobile_sub: "Pensé comme une application", about_free: "Utilisation gratuite", about_free_sub: "Sans compte ni clé API",
    disclaimer_title: "Important :", disclaimer_text: "Cette plateforme fournit des conseils généraux et des liens officiels. Vérifiez toujours auprès des autorités allemandes.", footer_desc: "Guide multilingue avec liens officiels pour vivre, travailler et étudier en Allemagne.", footer_quick: "Liens rapides", footer_popular: "Guides populaires", footer_jobs: "Séjour et emploi", footer_health: "Assurance maladie", footer_home: "Trouver un logement", footer_legal: "Aide juridique", footer_language: "Langue allemande", footer_emergency: "Urgence", footer_disclaimer_heading: "Avertissement", footer_disclaimer: "Informations générales uniquement. Vérifiez les sources officielles.", footer_built: "Créé avec soin par Shaista Shabbir",
  },

  hi: {
    dir: "ltr",
    hero: ["जर्मनी में आत्मविश्वास के साथ नेविगेट करें", "आपकी भाषा में जर्मनी को चरण-दर-चरण समझाया गया।"],
    nav_home: "होम", nav_states: "राज्य", nav_guides: "मार्गदर्शिकाएं",
    nav_languages: "भाषाएं", nav_about: "हमारे बारे में", nav_resources: "संसाधन",
    emg_help: "आपातकालीन सहायता", emg_112: "एम्बुलेंस और अग्निशमन", emg_110: "पुलिस",
    emg_116: "ड्यूटी डॉक्टर", emg_crisis: "संकट लाइन",
    stat_states: "राज्य", stat_langs: "भाषाएं", stat_modules: "मार्गदर्शिकाएं",
    stat_links: "आधिकारिक लिंक", stat_emg: "आपातकालीन तैयारी",
    guides_kicker: "जर्मनी में जीवन", guides_title: "जीवन मार्गदर्शिकाएं खोजें",
    guides_sub: "जर्मनी में रहने, काम करने, पढ़ने और बसने के लिए व्यावहारिक मार्गदर्शिकाएं।",
    states_kicker: "स्थानीय जानकारी", states_title: "राज्य के अनुसार खोजें",
    states_sub: "स्थानीय अधिकारियों और आधिकारिक संसाधनों के लिए अपना राज्य चुनें।",
    hero_eyebrow: "आधिकारिक स्रोत। स्पष्ट कदम।",
    open_guide: "मार्गदर्शिका खोलें →", start_by_state: "राज्य से शुरू करें →",
    emergency_help: "आपातकालीन सहायता", search: "खोजें",
    learn_more: "और जानें", coming_soon: "जल्द आ रहा है",
    official_source: "आधिकारिक स्रोत", last_checked: "अंतिम जांच",
    back_modules: "सभी मार्गदर्शिकाएं", quick_checklist: "त्वरित चेकलिस्ट",
    related_guides: "संबंधित मार्गदर्शिकाएं", browse_guides: "सभी मार्गदर्शिकाएं",
    resources: "संसाधन", save: "सहेजें", remove: "हटाएं",
    ask_ai: "जर्मनी AI से पूछें", ai_preview: "AI सहायक पूर्वावलोकन",
    ai_coming: "पूर्ण AI जल्द आएगा",
    journey_title: "जर्मनी की आपकी यात्रा", journey_sub: "वीजा से बसने तक कदम दर कदम।",
    footer_built: "प्रवासियों के लिए बनाया गया।",
    footer_disclaimer: "केवल सामान्य जानकारी — आधिकारिक अधिकारियों से सत्यापित करें।",
    lang_status_title: "अनुवाद स्थिति", lang_status_core: "मुख्य इंटरफेस: उपलब्ध",
    lang_status_guides: "पूर्ण मार्गदर्शिकाएं: प्रगति में", lang_status_official: "आधिकारिक लिंक: अपरिवर्तित",
    guide_notice: "पूर्ण अनुवाद प्रगति में है। आधिकारिक स्रोत जर्मन या अंग्रेजी में हो सकते हैं।",
    module_housing: "आवास", module_healthcare: "स्वास्थ्य सेवा",
    module_jobs: "नौकरी और वीजा", module_legal: "कानूनी सहायता",
    module_language: "भाषा", module_costs: "जीवन यापन लागत",
    module_education: "शिक्षा", module_integration: "एकीकरण",
    module_bureaucracy: "नौकरशाही", module_family: "परिवार और बच्चे",
    module_emergency: "आपातकाल", module_banking: "बैंकिंग और कर",
    dir: "ltr",
  },
  fa: {
    hero_eyebrow: "منابع رسمی. گام‌های روشن.", hero_start: "شروع بر اساس ایالت", hero_emergency: "کمک اضطراری", hero_trusted: "راهنمای قابل اعتماد", hero_trusted_sub: "پیوند به منابع رسمی آلمان",
    journey_kicker: "شروع سریع", journey_title: "از اینجا شروع کنید — چه چیزی نیاز دارید؟", journey_sub: "وضعیت خود را انتخاب کنید و مستقیماً به راهنمای مناسب بروید.", journey_new: "تازه به آلمان آمده‌ام", journey_new_sub: "فهرست هفته اول", journey_visa: "برای ویزا یا اقامت کمک می‌خواهم", journey_visa_sub: "مجوزها و مسیرهای کاری", journey_housing: "برای مسکن کمک می‌خواهم", journey_housing_sub: "اجاره و حقوق مستأجر", journey_legal: "کمک اضطراری یا حقوقی می‌خواهم", journey_legal_sub: "حقوق، نامه‌ها و مهلت‌ها", journey_language: "می‌خواهم آلمانی یاد بگیرم", journey_language_sub: "عبارت‌های روزانه و تمرین",
    language_kicker: "طراحی چندزبانه", language_title: "راهنمایی که فهم آن آسان‌تر است", language_sub: "زبان دلخواه را انتخاب کنید و اطلاعات را از پیوندهای رسمی بررسی کنید.", language_count: "۱۰ زبان پشتیبانی‌شده", language_list: "انگلیسی، آلمانی، عربی، ترکی، اردو، روسی، فرانسوی، فارسی، ایتالیایی و اوکراینی.", language_guide: "باز کردن راهنمای زبان آلمانی",
    about_kicker: "برای زندگی واقعی", about_title: "راهی آرام‌تر برای یافتن گام بعدی", about_sub: "Navigate Germany اطلاعات پراکنده عمومی را به مسیرهای روشن تبدیل می‌کند.", about_official: "تمرکز بر پیوندهای رسمی", about_official_sub: "نهادهای عمومی و خدمات معتبر", about_explore: "جست‌وجوی آسان", about_explore_sub: "بر اساس وضعیت، راهنما یا ایالت", about_mobile: "اول موبایل", about_mobile_sub: "طراحی‌شده مانند اپ", about_free: "استفاده رایگان", about_free_sub: "بدون حساب یا کلید API",
    disclaimer_title: "مهم:", disclaimer_text: "این پلتفرم راهنمای عمومی و پیوندهای رسمی ارائه می‌کند. اطلاعات را همیشه با مقامات آلمان بررسی کنید.", footer_desc: "راهنمای چندزبانه با پیوندهای رسمی برای زندگی، کار و تحصیل در آلمان.", footer_quick: "پیوندهای سریع", footer_popular: "راهنماهای محبوب", footer_jobs: "اقامت و کار", footer_health: "بیمه درمانی", footer_home: "یافتن خانه", footer_legal: "کمک حقوقی", footer_language: "زبان آلمانی", footer_emergency: "اضطراری", footer_disclaimer_heading: "سلب مسئولیت", footer_disclaimer: "اطلاعات فقط راهنمای عمومی است. منابع رسمی را بررسی کنید.", footer_built: "با دقت توسط Shaista Shabbir ساخته شده",
  },
  it: {
    hero_eyebrow: "Fonti ufficiali. Prossimi passi chiari.", hero_start: "Inizia dal Land", hero_emergency: "Aiuto d'emergenza", hero_trusted: "Guida affidabile", hero_trusted_sub: "Link a fonti ufficiali tedesche",
    journey_kicker: "Avvio rapido", journey_title: "Inizia qui — Di cosa hai bisogno?", journey_sub: "Scegli la tua situazione e apri subito la guida più utile.", journey_new: "Sono appena arrivato in Germania", journey_new_sub: "Lista della prima settimana", journey_visa: "Mi serve aiuto per visto o soggiorno", journey_visa_sub: "Permessi e percorsi di lavoro", journey_housing: "Mi serve aiuto per la casa", journey_housing_sub: "Affitto e diritti degli inquilini", journey_legal: "Mi serve aiuto urgente o legale", journey_legal_sub: "Diritti, lettere e scadenze", journey_language: "Voglio imparare il tedesco", journey_language_sub: "Frasi quotidiane e pratica",
    language_kicker: "Multilingue fin dal progetto", language_title: "Indicazioni più facili da capire", language_sub: "Scegli la lingua e verifica le informazioni tramite i link ufficiali.", language_count: "10 lingue supportate", language_list: "Inglese, tedesco, arabo, turco, urdu, russo, francese, persiano, italiano e ucraino.", language_guide: "Apri la guida di tedesco",
    about_kicker: "Pensato per la vita reale", about_title: "Un modo più tranquillo per trovare il prossimo passo", about_sub: "Navigate Germany organizza informazioni pubbliche sparse in percorsi chiari.", about_official: "Link ufficiali al centro", about_official_sub: "Autorità pubbliche e servizi affidabili", about_explore: "Facile da esplorare", about_explore_sub: "Per situazione, guida o Land", about_mobile: "Mobile first", about_mobile_sub: "Progettato come un'app", about_free: "Uso gratuito", about_free_sub: "Nessun account o chiave API",
    disclaimer_title: "Importante:", disclaimer_text: "La piattaforma offre indicazioni generali e link ufficiali. Verifica sempre con le autorità tedesche.", footer_desc: "Guida multilingue con link ufficiali per vivere, lavorare e studiare in Germania.", footer_quick: "Link rapidi", footer_popular: "Guide popolari", footer_jobs: "Soggiorno e lavoro", footer_health: "Assicurazione sanitaria", footer_home: "Trovare casa", footer_legal: "Aiuto legale", footer_language: "Lingua tedesca", footer_emergency: "Emergenza", footer_disclaimer_heading: "Avvertenza", footer_disclaimer: "Informazioni generali. Controlla sempre le fonti ufficiali.", footer_built: "Creato con cura da Shaista Shabbir",
  },
  uk: {
    hero_eyebrow: "Офіційні джерела. Чіткі наступні кроки.", hero_start: "Почати із землі", hero_emergency: "Екстрена допомога", hero_trusted: "Надійні поради", hero_trusted_sub: "Посилання на офіційні джерела Німеччини",
    journey_kicker: "Швидкий старт", journey_title: "Почніть тут — Що вам потрібно?", journey_sub: "Оберіть ситуацію та одразу відкрийте потрібний путівник.", journey_new: "Я щойно прибув до Німеччини", journey_new_sub: "Список на перший тиждень", journey_visa: "Потрібна допомога з візою або проживанням", journey_visa_sub: "Дозволи та шляхи до роботи", journey_housing: "Потрібна допомога з житлом", journey_housing_sub: "Оренда та права орендарів", journey_legal: "Потрібна екстрена або правова допомога", journey_legal_sub: "Права, листи та строки", journey_language: "Хочу вивчати німецьку", journey_language_sub: "Щоденні фрази та практика",
    language_kicker: "Багатомовний дизайн", language_title: "Поради, які легше зрозуміти", language_sub: "Оберіть мову та перевіряйте дані за офіційними посиланнями.", language_count: "10 підтримуваних мов", language_list: "Англійська, німецька, арабська, турецька, урду, російська, французька, перська, італійська та українська.", language_guide: "Відкрити путівник з німецької",
    about_kicker: "Для реального життя", about_title: "Спокійніший спосіб знайти наступний крок", about_sub: "Navigate Germany об'єднує розрізнену державну інформацію у зрозумілі маршрути.", about_official: "Офіційні посилання", about_official_sub: "Державні органи та надійні служби", about_explore: "Легко шукати", about_explore_sub: "За ситуацією, темою або землею", about_mobile: "Спочатку мобільний", about_mobile_sub: "Працює як застосунок", about_free: "Безкоштовно", about_free_sub: "Без облікового запису та API-ключа",
    disclaimer_title: "Важливо:", disclaimer_text: "Платформа надає загальні поради й офіційні посилання. Завжди перевіряйте дані в органах влади Німеччини.", footer_desc: "Багатомовний путівник з офіційними посиланнями для життя, роботи та навчання в Німеччині.", footer_quick: "Швидкі посилання", footer_popular: "Популярні путівники", footer_jobs: "Проживання та робота", footer_health: "Медичне страхування", footer_home: "Пошук житла", footer_legal: "Правова допомога", footer_language: "Німецька мова", footer_emergency: "Екстрена допомога", footer_disclaimer_heading: "Застереження", footer_disclaimer: "Інформація має загальний характер. Перевіряйте офіційні джерела.", footer_built: "Створено з турботою Shaista Shabbir",
  },
};

Object.entries(PAGE_TEXT).forEach(([code, text]) => Object.assign(TRANSLATIONS[code], text));

const MODULES = [
  { id: "housing", icon: "⌂", iconSrc: "./assets/icons/housing.png", title: "Housing", desc: "Find accommodation, understand rental contracts, deposits, and tenant rights.", topics: ["Renting", "Deposit", "Contracts", "Tenant rights"], resources: 12, url: "modules/housing.html", color: "#2563eb", bg: "#eff6ff", border: "#bfdbfe" },
  { id: "healthcare", icon: "✚", iconSrc: "./assets/icons/healthcare.png", title: "Healthcare", desc: "Health insurance, doctors, hospitals, appointments, and wellbeing.", topics: ["Insurance", "Doctors", "116117", "Appointments"], resources: 11, url: "modules/doctors.html", color: "#15803d", bg: "#f0fdf4", border: "#bbf7d0" },
  { id: "jobs", icon: "▣", iconSrc: "./assets/icons/jobs.png", title: "Jobs & Visa", desc: "Work opportunities, residence routes, Blue Card, and job search.", topics: ["Blue Card", "Recognition", "CV", "Chancenkarte"], resources: 14, url: "modules/jobs.html", color: "#c2410c", bg: "#fff7ed", border: "#fed7aa" },
  { id: "legal", icon: "⚖", iconSrc: "./assets/icons/legal.png", title: "Legal Help", desc: "Residence law, official letters, deadlines, rights, and support.", topics: ["Letters", "Deadlines", "Rights", "Templates"], resources: 10, url: "modules/legal.html", color: "#7e22ce", bg: "#faf5ff", border: "#e9d5ff" },
  { id: "language", icon: "•••", iconSrc: "./assets/icons/language.png", title: "Language", desc: "Learn German, practise daily phrases, and find language resources.", topics: ["Daily German", "Amt phrases", "Courses", "Practice"], resources: 13, url: "modules/language.html", color: "#0f766e", bg: "#f0fdfa", border: "#99f6e4" },
  { id: "costs", icon: "€", title: "Cost of Living", desc: "Compare rent, expenses, salaries, banking, and everyday costs.", topics: ["Rent", "Groceries", "Utilities", "Budget"], resources: 9, url: "modules/costs.html", color: "#a16207", bg: "#fffbeb", border: "#fde68a" },
  { id: "education", icon: "▤", title: "Education", desc: "Schools, childcare, universities, integration courses, and learning pathways.", topics: ["Kita", "School", "University", "Recognition"], resources: 12, url: "modules/education.html", color: "#4f46e5", bg: "#eef2ff", border: "#c7d2fe" },
  { id: "banking", icon: "▥", title: "Banking & Taxes", desc: "Bank accounts, transfers, Schufa, tax ID, and finance basics.", topics: ["Bank account", "SCHUFA", "Tax ID", "Transfers"], resources: 10, url: "modules/banking.html", color: "#0369a1", bg: "#ecfeff", border: "#a5f3fc" },
  { id: "family", icon: "♡", title: "Family & Child Support", desc: "Kindergeld, Kita, schools, parental support, and family life.", topics: ["Kindergeld", "Kita", "School", "Reunification"], resources: 12, url: "modules/family.html", color: "#be185d", bg: "#fdf2f8", border: "#fbcfe8" },
  { id: "transport", icon: "↔", title: "Transport", desc: "Public transport, Deutschlandticket, driving licences, cycling, and mobility.", topics: ["Deutschlandticket", "Trains", "Driving", "Cycling"], resources: 9, url: "modules/transport.html", color: "#334155", bg: "#f1f5f9", border: "#cbd5e1" },
  { id: "emergency", icon: "!", iconSrc: "./assets/icons/emergency.png", title: "Emergency", desc: "Emergency numbers, urgent medical help, crisis lines, and safety.", topics: ["112", "110", "116117", "Crisis help"], resources: 8, url: "modules/emergency.html", color: "#b91c1c", bg: "#fef2f2", border: "#fecaca" },
  { id: "documents", icon: "▧", title: "Documents", desc: "Anmeldung, residence papers, insurance, tax ID, and admin checklists.", topics: ["Anmeldung", "Residence", "Insurance", "Tax ID"], resources: 11, url: "modules/documents.html", color: "#047857", bg: "#ecfdf5", border: "#a7f3d0" },
];

const JOURNEYS = [
  { title: "Student roadmap", desc: "University, visa, housing, insurance and first-semester steps.", url: "journeys/student.html" },
  { title: "Skilled worker roadmap", desc: "Job offer, qualification recognition, residence and arrival steps.", url: "journeys/skilled-worker.html" },
  { title: "Family roadmap", desc: "Family reunification, childcare, schools and everyday support.", url: "journeys/family.html" },
  { title: "Researcher / PhD roadmap", desc: "Hosting agreements, residence, university onboarding and family needs.", url: "journeys/researcher.html" },
  { title: "Entrepreneur roadmap", desc: "Business planning, registration, residence and tax basics.", url: "journeys/entrepreneur.html" },
  { title: "Refugee / asylum support", desc: "Registration, accommodation, healthcare and independent advice.", url: "journeys/refugee.html" },
];

const HOME_SECTIONS = [
  { title: "Emergency help", desc: "Emergency telephone numbers and urgent support.", url: "#emergency" },
  { title: "Life guides", desc: "Housing, health, jobs, legal help, language and documents.", url: "#guides" },
  { title: "Federal states", desc: "All 16 Bundesländer and their official portals.", url: "#states" },
  { title: "Languages", desc: "Translation availability and German learning guide.", url: "#languages" },
  { title: "Official resources", desc: "Trusted federal and nationally recognised services.", url: "#resources" },
];

// Each state currently uses a named scenic gradient placeholder. Replace the
// background value with a local image URL when licensed state photography is added.
const STATES = [
  state("BW", "Baden-Württemberg", "Stuttgart", "Black Forest & Stuttgart", "Industry, universities, registration services, and international communities.", "linear-gradient(145deg,#174d45,#5b926e 48%,#d09a4a)", [
    link("Official state portal", "https://www.baden-wuerttemberg.de"),
    link("Service-BW", "https://www.service-bw.de"),
    link("Stuttgart city portal", "https://www.stuttgart.de"),
  ]),
  state("BY", "Bavaria", "Munich", "Alps & Neuschwanstein", "Visa, work, housing, and family services across Bavaria's major cities.", "linear-gradient(145deg,#315f91,#84b9d3 47%,#506f36)", [
    link("Official state portal", "https://www.bayern.de"),
    link("BayernPortal", "https://www.bayernportal.de"),
    link("Munich city portal", "https://www.muenchen.de"),
  ]),
  state("BE", "Berlin", "Berlin", "TV Tower & city life", "Appointments, immigration, Anmeldung, housing, and multilingual support.", "linear-gradient(145deg,#d77748,#b4474c 48%,#35455f)", [
    link("Official Berlin portal", "https://www.berlin.de"),
    link("Service Berlin", "https://service.berlin.de"),
    link("Immigration portal", "https://www.berlin.de/einwanderung/"),
  ]),
  state("BB", "Brandenburg", "Potsdam", "Lakes & palaces", "Local authorities, commuter towns, employment, and arrival services.", "linear-gradient(145deg,#4f8ca6,#668b54 48%,#b9854e)", [
    link("Official state portal", "https://www.brandenburg.de"),
    link("Potsdam city portal", "https://www.potsdam.de"),
    link("Employment Agency", "https://www.arbeitsagentur.de/"),
  ]),
  state("HB", "Bremen", "Bremen", "Historic market & river", "Compact city-state resources for registration, work, study, and family life.", "linear-gradient(145deg,#547a98,#a1664c 52%,#354353)", [
    link("Official Bremen portal", "https://www.bremen.de"),
    link("Service Portal Bremen", "https://www.service.bremen.de"),
    link("Bremerhaven portal", "https://www.bremerhaven.de"),
  ]),
  state("HH", "Hamburg", "Hamburg", "Harbor & Elbphilharmonie", "Migration office, city services, jobs, housing, and welcome resources.", "linear-gradient(145deg,#3e708d,#78a8b6 45%,#995741)", [
    link("Official Hamburg portal", "https://www.hamburg.de"),
    link("Hamburg service portal", "https://www.hamburg.de/service/"),
    link("Welcome to Hamburg", "https://www.hamburg.com/welcome/"),
  ]),
  state("HE", "Hessen", "Wiesbaden / Frankfurt", "Frankfurt skyline", "Finance-sector jobs, integration services, universities, and local portals.", "linear-gradient(145deg,#477da7,#344f68 48%,#b98a45)", [
    link("Official state portal", "https://www.hessen.de"),
    link("Hessen service portal", "https://verwaltungsportal.hessen.de/"),
    link("Frankfurt city portal", "https://www.frankfurt.de"),
  ]),
  state("MV", "Mecklenburg-Vorpommern", "Schwerin / Rostock", "Baltic coast & lakes", "Regional services, coastal cities, study options, and employment support.", "linear-gradient(145deg,#2685a5,#65afb2 52%,#b5a650)", [
    link("Official state portal", "https://www.regierung-mv.de"),
    link("Service Portal MV", "https://www.service.mvnet.de"),
    link("Rostock city portal", "https://www.rostock.de"),
  ]),
  state("NI", "Lower Saxony", "Hannover", "Heathland & Hannover", "City portals, skilled work, family services, and registration information.", "linear-gradient(145deg,#456d91,#6f8e54 48%,#b77c4e)", [
    link("Official state portal", "https://www.niedersachsen.de"),
    link("Service Niedersachsen", "https://service.niedersachsen.de/"),
    link("Hannover portal", "https://www.hannover.de"),
  ]),
  state("NW", "North Rhine-Westphalia", "Düsseldorf / Cologne", "Cologne & Rhine cities", "Germany's largest urban region with extensive work and city services.", "linear-gradient(145deg,#3f6079,#354958 45%,#9f6742)", [
    link("Official NRW portal", "https://www.land.nrw/"),
    link("NRW service portal", "https://www.service.nrw.de"),
    link("Cologne city portal", "https://www.stadt-koeln.de"),
  ]),
  state("RP", "Rhineland-Palatinate", "Mainz", "Rhine valley & vineyards", "Residence services, family support, universities, and regional authorities.", "linear-gradient(145deg,#426d88,#607d3b 50%,#b28040)", [
    link("Official state portal", "https://www.rlp.de"),
    link("Service Portal RLP", "https://www.service.rlp.de"),
    link("Mainz city portal", "https://www.mainz.de"),
  ]),
  state("SL", "Saarland", "Saarbrücken", "Forests & Saar loop", "Cross-border life, citizen services, jobs, and compact local support.", "linear-gradient(145deg,#316d65,#5e824e 52%,#a97942)", [
    link("Official Saarland portal", "https://www.saarland.de"),
    link("Saarland citizen service", "https://www.saarland.de/DE/portale/buergerservice/"),
    link("Saarbrücken portal", "https://www.saarbruecken.de"),
  ]),
  state("SN", "Saxony", "Dresden / Leipzig", "Dresden & Leipzig", "Study, technology jobs, registration, housing, and integration resources.", "linear-gradient(145deg,#466f99,#8296a5 45%,#9f6746)", [
    link("Official Saxony portal", "https://www.sachsen.de"),
    link("Dresden city portal", "https://www.dresden.de"),
    link("Leipzig city portal", "https://www.leipzig.de"),
  ]),
  state("ST", "Saxony-Anhalt", "Magdeburg / Halle", "Cathedrals & countryside", "Affordable cities, university life, employment, and administration portals.", "linear-gradient(145deg,#5b7185,#858747 50%,#aa6849)", [
    link("Official state portal", "https://www.sachsen-anhalt.de"),
    link("Service Portal ST", "https://serviceportal.sachsen-anhalt.de/"),
    link("Magdeburg portal", "https://www.magdeburg.de"),
  ]),
  state("SH", "Schleswig-Holstein", "Kiel / Lübeck", "North Sea & Baltic coast", "Coastal city services, family support, work, and residence information.", "linear-gradient(145deg,#167797,#57a8b6 50%,#b0a04e)", [
    link("Official state portal", "https://www.schleswig-holstein.de"),
    link("SH service portal", "https://serviceportal.schleswig-holstein.de/"),
    link("Kiel city portal", "https://www.kiel.de"),
  ]),
  state("TH", "Thuringia", "Erfurt / Jena", "Forest & historic towns", "Research, skilled jobs, city services, and newcomer information.", "linear-gradient(145deg,#2d674e,#628a57 52%,#9d6745)", [
    link("Official Thuringia portal", "https://www.thueringen.de"),
    link("Citizen services", "https://www.thueringen.de/buerger/buergerdienste/"),
    link("Erfurt city portal", "https://www.erfurt.de"),
  ]),
];

const STATE_META = {
  BW: { cities: "Stuttgart · Karlsruhe · Freiburg", bestFor: "Students & skilled jobs", image: "baden-wuerttemberg.jpg", alt: "Baden-Württemberg city and riverside scenery" },
  BY: { cities: "Munich · Nuremberg · Augsburg", bestFor: "Jobs & families", image: "bavaria.jpg", alt: "Neuschwanstein Castle and the Bavarian Alps" },
  BE: { cities: "Berlin", bestFor: "International newcomers", image: "berlin.jpg", alt: "Berlin skyline with the TV Tower" },
  BB: { cities: "Potsdam · Cottbus · Frankfurt (Oder)", bestFor: "Families & commuters", image: "brandenburg.jpg", alt: "Brandenburg Gate at sunset" },
  HB: { cities: "Bremen · Bremerhaven", bestFor: "Students & logistics jobs", image: "bremen.jpg", alt: "Historic market square in Bremen" },
  HH: { cities: "Hamburg", bestFor: "Global careers", image: "hamburg.jpg", alt: "Hamburg harbor and Elbphilharmonie" },
  HE: { cities: "Wiesbaden · Frankfurt · Darmstadt", bestFor: "Finance & skilled jobs", image: "hessen.jpg", alt: "Frankfurt skyline in Hessen" },
  MV: { cities: "Schwerin · Rostock · Greifswald", bestFor: "Affordable coastal living", image: "mecklenburg-vorpommern.jpg", alt: "Baltic coast in Mecklenburg-Vorpommern" },
  NI: { cities: "Hannover · Braunschweig · Göttingen", bestFor: "Families & industry", image: "lower-saxony.jpg", alt: "Historic architecture in Lower Saxony" },
  NW: { cities: "Düsseldorf · Cologne · Dortmund", bestFor: "Jobs & diverse cities", image: "north-rhine-westphalia.jpg", alt: "Cologne Cathedral and Rhine bridge in North Rhine-Westphalia" },
  RP: { cities: "Mainz · Koblenz · Trier", bestFor: "Families & students", image: "rhineland-palatinate.jpg", alt: "Rhine valley in Rhineland-Palatinate" },
  SL: { cities: "Saarbrücken · Homburg · Saarlouis", bestFor: "Cross-border workers", image: "saarland.jpg", alt: "Saarbrücken riverside in Saarland" },
  SN: { cities: "Dresden · Leipzig · Chemnitz", bestFor: "Students & technology", image: "saxony.jpg", alt: "Historic Dresden cityscape in Saxony" },
  ST: { cities: "Magdeburg · Halle · Dessau", bestFor: "Affordable student life", image: "saxony-anhalt.jpg", alt: "Magdeburg cathedral and river in Saxony-Anhalt" },
  SH: { cities: "Kiel · Lübeck · Flensburg", bestFor: "Families & coastal life", image: "schleswig-holstein.jpg", alt: "Harbor town in Schleswig-Holstein" },
  TH: { cities: "Erfurt · Jena · Weimar", bestFor: "Research & affordable cities", image: "thuringia.jpg", alt: "Historic Erfurt cityscape in Thuringia" },
};

function state(id, name, capital, visual, description, background, links) {
  return { id, name, capital, visual, description, background, links };
}

function link(label, url) {
  return { label, url };
}

const guidesGrid = document.querySelector("#guides-grid");
const statesGrid = document.querySelector("#states-grid");
const stateDetail = document.querySelector("#state-detail");
const languageSelect = document.querySelector("#language-select");
const languagePills = document.querySelector("#language-pills");
const savedGuides = new Set(JSON.parse(localStorage.getItem("ng_saved_guides") || "[]"));
let showingSavedOnly = false;

function currentTranslation() {
  return window._ng_t || TRANSLATIONS.en;
}

function localizedModules(t = currentTranslation()) {
  return MODULES.map((module, index) => {
    // Legacy locale files only match the first nine module identities.
    // Avoid assigning unrelated translations to newer module cards.
    const translated = index < 9 ? t.modules?.[index] : null;

    return {
      ...module,
      title: translated?.title || module.title,
      desc: translated?.desc || module.desc,
      linkLabel: t.open_guide,
    };
  });
}

function renderModules(items = MODULES) {
  const t = currentTranslation();
  guidesGrid.innerHTML = items.map((item) => `
    <article class="module-card reveal" data-icon="${item.icon}" style="--module-color:${item.color};--module-bg:${item.bg};--module-border:${item.border}">
      <button class="save-guide ${savedGuides.has(item.id) ? "saved" : ""}" type="button" data-save="${item.id}" aria-label="${savedGuides.has(item.id) ? t.remove : t.save} ${item.title}">♡</button>
      <span class="module-icon">${item.iconSrc ? `<img src="${item.iconSrc}" alt="" width="30" height="30">` : `<span aria-hidden="true">${item.icon}</span>`}</span>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <div class="module-topics" aria-label="${item.title} topics">${item.topics.map((topic) => `<span>${topic}</span>`).join("")}</div>
      <div class="module-footer">
        <span class="module-resource-count">${item.resources} resources</span>
        <a class="module-link" href="${item.url}">${(item.linkLabel || t.open_guide).replace(/\s*[←→]\s*$/, "")}</a>
      </div>
    </article>
  `).join("");
  requestAnimationFrame(observeReveals);
  // Fallback: ensure items become visible even if observer misses them
  setTimeout(() => {
    document.querySelectorAll(".reveal:not(.is-visible)").forEach(el => el.classList.add("is-visible"));
  }, 800);
}

function renderStates(items = STATES) {
  const t = currentTranslation();
  const language = document.documentElement.lang || "en";
  document.querySelector("#state-result-count").textContent = t.state_count.replace("{count}", items.length);
  statesGrid.innerHTML = items.length ? items.map((item) => {
    const meta = STATE_META[item.id];
    const statePage = `states/${item.id.toLowerCase()}.html`;
    const description = language === "en"
      ? item.description
      : t.state_description.replace("{state}", item.name);
    const bestFor = language === "en" ? meta.bestFor : t.best_value;
    return `
    <a class="state-card reveal" href="${statePage}" data-state="${item.id}" style="--state-bg:${item.background}" aria-label="${t.view_details.replace(/[←→]/g, "").trim()}: ${item.name}">
      <span class="state-card-content">
        <span class="state-media"><img src="./assets/images/states/heroes/${meta.image}" alt="${meta.alt}" width="1452" height="672" loading="lazy" decoding="async" onerror="this.style.display='none'"><small>${language === "en" ? item.visual : item.name}</small></span>
        <strong>${item.name}</strong>
        <span class="state-capital"><b>${t.capital}</b> ${item.capital}</span>
        <span class="state-city"><b>${t.major_cities}</b> ${meta.cities}</span>
        <span class="state-description">${description}</span>
        <span class="state-best">${t.best_for} ${bestFor}</span>
        <span class="state-cta">${t.view_details}</span>
      </span>
    </a>
  `;}).join("") : `<div class="no-results">${t.no_states}</div>`;
  requestAnimationFrame(observeReveals);
}

function openState(id) {
  const selected = STATES.find((item) => item.id === id);
  if (!selected) return;
  const meta = STATE_META[id] || {};
  document.querySelectorAll(".state-card").forEach((card) => card.classList.toggle("active", card.dataset.state === id));
  stateDetail.hidden = false;

  const t = currentTranslation();
  const statePage = `states/${id.toLowerCase()}.html`;

  stateDetail.innerHTML = `
    <div class="state-detail-head">
      <div>
        <span class="kicker">${t.official_resources}</span>
        <h3>${selected.name}</h3>
        <p style="margin-bottom:6px">${t.capital}: ${selected.capital} · ${selected.description}</p>
        ${meta.cities ? `<p style="font-size:.75rem;color:#64748b;margin-bottom:0">📍 ${t.cities}: ${meta.cities}</p>` : ""}
      </div>
      <button class="state-detail-close" type="button" aria-label="${t.close_state}">×</button>
    </div>
    <div style="padding:12px 0 6px">
      <a href="${statePage}" style="display:inline-flex;align-items:center;gap:6px;padding:9px 16px;background:#0B1D3A;color:#FFCC02;border-radius:10px;text-decoration:none;font-weight:800;font-size:.82rem;margin-bottom:12px">
        📖 ${t.full_state_guide}
      </a>
    </div>
    <div class="state-links">
      ${selected.links.map((item) => `<a href="${item.url}" target="_blank" rel="noopener noreferrer">↗ ${item.label}</a>`).join("")}
      <a href="modules/bureaucracy.html">${t.arrival_checklist}</a>
    </div>
  `;
  stateDetail.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

let languageRequest = 0;
async function setLanguage(code) {
  const requestId = ++languageRequest;
  const selected = LANGUAGES.find((item) => item.code === code) || LANGUAGES[0];
  const [englishExternal, external] = await Promise.all([
    window.NavigateGermanyI18n?.load("en") || {},
    window.NavigateGermanyI18n?.load(selected.code) || {}
  ]);
  if (requestId !== languageRequest) return;
  const t = { ...TRANSLATIONS.en, ...englishExternal, ...(TRANSLATIONS[selected.code] || {}), ...external };
  window._ng_t = t;

  // ── Direction, language, font ──────────────────────────────
  const isRTL = ["ar","ur","fa"].includes(selected.code);
  document.documentElement.dir  = isRTL ? "rtl" : "ltr";
  document.documentElement.lang = selected.code;

  // Load Noto Naskh Arabic font for RTL languages
  if (isRTL && !document.getElementById("ng-rtl-font")) {
    const link = document.createElement("link");
    link.id   = "ng-rtl-font";
    link.rel  = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;700;800&display=swap";
    document.head.appendChild(link);
  }

  // ── RTL notice banner ────────────────────────────────────────
  // Show a polite notice for RTL users about translation status
  let rtlBanner = document.getElementById("ng-rtl-notice");
  if (isRTL) {
    if (!rtlBanner) {
      rtlBanner = document.createElement("div");
      rtlBanner.id = "ng-rtl-notice";
      rtlBanner.className = "rtl-notice";
      const statsEl = document.querySelector(".stats-card");
      if (statsEl) statsEl.before(rtlBanner);
      else document.querySelector(".hero-section")?.after(rtlBanner);
    }
    // Set notice text from translation
    rtlBanner.textContent = t.guide_notice || "Core interface translated. Full guide translations are in progress.";
  } else if (rtlBanner) {
    rtlBanner.remove();
  }

  // ── Emergency numbers — always LTR ──────────────────────────
  document.querySelectorAll(
    ".emergency-inner b, .emergency-inner strong, [class*='emg-num']"
  ).forEach(el => {
    el.setAttribute("dir","ltr");
    el.style.unicodeBidi = "isolate";
    el.style.display     = "inline-block";
  });

  // ── Module link arrows: flip text for RTL ──────────────────
  document.querySelectorAll(".module-link").forEach(el => {
    const txt = el.textContent || "";
    if (isRTL) {
      el.textContent = txt.replace(/\s*→\s*$/, " ←");
    } else {
      el.textContent = txt.replace(/\s*←\s*$/, " →");
    }
  });

  // ── Reset inline styles from previous language ──────────────
  // (CSS handles alignment via html[dir="rtl"]; we only need to undo
  //  any old inline style overrides applied by previous code)
  document.querySelectorAll("[style]").forEach(el => {
    const rem = ["textAlign","justifyContent","direction","flexDirection"];
    rem.forEach(p => {
      if (el.style[p]) el.style.removeProperty(
        p.replace(/([A-Z])/g, "-$1").toLowerCase()
      );
    });
  });

  // ── Hero ───────────────────────────────────────────────────
  const [titleStart, titleEmphasis = ""] = splitTitle(t.hero[0]);
  const heroTitle = document.querySelector("#hero-title");
  const heroSub   = document.querySelector("#hero-subtitle");
  if (heroTitle) heroTitle.innerHTML = titleEmphasis ? `${titleStart}<br><em>${titleEmphasis}</em>` : titleStart;
  if (heroSub)   heroSub.textContent = t.hero[1];

  // ── ALL data-i18n elements ────────────────────────────────
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (!t[key]) return;
    // Update text content
    el.textContent = t[key];
    // Update placeholder if input/textarea
    if (el.placeholder !== undefined && t[key + "_placeholder"]) {
      el.placeholder = t[key + "_placeholder"];
    }
    // Update aria-label if button
    if (el.tagName === "BUTTON" && el.getAttribute("aria-label")) {
      el.setAttribute("aria-label", t[key]);
    }
  });
  // Update assistant launcher aria-label
  const launcher = document.querySelector(".ng-assistant-launcher");
  if (launcher && t.ask_ai) launcher.setAttribute("aria-label", t.ask_ai);

  // ── Search placeholder ─────────────────────────────────────
  const siteSearch  = document.querySelector("#site-search");
  const stateSearch = document.querySelector("#state-search");
  if (siteSearch)  siteSearch.placeholder = t.search_ph;
  if (stateSearch) stateSearch.placeholder = t.state_ph;

  // ── Emergency banner ──────────────────────────────────────
  const emgBanner = document.querySelector(".emergency-banner p, .emg-text, [data-i18n='emergency']");
  if (emgBanner && t.emergency) emgBanner.textContent = t.emergency;

  const emgBtn = document.querySelector(".emg-btn, [data-i18n='emg_btn']");
  if (emgBtn && t.emg_btn) emgBtn.textContent = t.emg_btn;

  // ── Module cards — re-render with translated titles/descs ──
  if (t.modules && MODULES.length === t.modules.length) {
    renderModules(localizedModules(t));
  }

  const stateQuery = document.querySelector("#state-search")?.value.toLowerCase().trim() || "";
  renderStates(STATES.filter((item) => {
    const meta = STATE_META[item.id];
    return `${item.name} ${item.capital} ${meta.cities} ${meta.bestFor} ${item.description} ${item.visual}`.toLowerCase().includes(stateQuery);
  }));

  // ── Persist + update selectors ────────────────────────────
  languageSelect.value = selected.code;
  localStorage.setItem("ng_lang", selected.code);
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === selected.code);
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === selected.code));
  });
}

function splitTitle(title) {
  const words = title.split(" ");
  const splitAt = Math.max(1, Math.ceil(words.length / 2));
  return [words.slice(0, splitAt).join(" "), words.slice(splitAt).join(" ")];
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function toggleSavedGuides() {
  if (!savedGuides.size) {
    showToast("Save a guide with the heart button to find it here.");
    return;
  }
  showingSavedOnly = !showingSavedOnly;
  const modules = localizedModules();
  renderModules(showingSavedOnly ? modules.filter((item) => savedGuides.has(item.id)) : modules);
  document.querySelector("#saved-button").classList.toggle("active", showingSavedOnly);
  document.querySelector("#guides").scrollIntoView({ behavior: "smooth" });
  showToast(showingSavedOnly
    ? `${savedGuides.size} saved guide${savedGuides.size === 1 ? "" : "s"} shown.`
    : "All guides shown.");
}

function openMoreResources() {
  document.querySelector("#resources").scrollIntoView({ behavior: "smooth" });
}

function searchAll(query) {
  const normalized = query.trim().toLowerCase();
  if (normalized.length < 2) return [];
  const guideMatches = MODULES.filter((item) => `${item.title} ${item.desc}`.toLowerCase().includes(normalized))
    .slice(0, 4)
    .map((item) => ({ title: item.title, type: "Guide", url: item.url }));
  const stateMatches = STATES.filter((item) => {
    const meta = STATE_META[item.id];
    return `${item.name} ${item.capital} ${meta.cities} ${meta.bestFor} ${item.visual} ${item.description}`.toLowerCase().includes(normalized);
  })
    .slice(0, 3)
    .map((item) => ({ title: item.name, type: "State", state: item.id }));
  const journeyMatches = JOURNEYS.filter((item) => `${item.title} ${item.desc}`.toLowerCase().includes(normalized))
    .slice(0, 3)
    .map((item) => ({ title: item.title, type: "Journey", url: item.url }));
  const sectionMatches = HOME_SECTIONS.filter((item) => `${item.title} ${item.desc}`.toLowerCase().includes(normalized))
    .slice(0, 2)
    .map((item) => ({ title: item.title, type: "Homepage", url: item.url }));
  return [...sectionMatches, ...journeyMatches, ...guideMatches, ...stateMatches].slice(0, 7);
}

let revealObserver;
function observeReveals() {
  const elements = document.querySelectorAll(".reveal:not(.reveal-ready)");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("reveal-ready", "is-visible"));
    return;
  }
  revealObserver ||= new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, { rootMargin: "200px 0px 0px", threshold: 0 });
  elements.forEach((element) => {
    element.classList.add("reveal-ready");
    revealObserver.observe(element);
  });
}

function init() {
  languagePills.innerHTML = LANGUAGES.map((item) => `<button type="button" data-lang="${item.code}">${item.flag} ${item.label}</button>`).join("");
  const params = new URLSearchParams(window.location.search);
  const initialStateQuery = params.get("city") || params.get("state") || "";
  const stateSearch = document.querySelector("#state-search");
  if (stateSearch && initialStateQuery) stateSearch.value = initialStateQuery;
  setLanguage(localStorage.getItem("ng_lang") || "en");
  document.querySelector("#current-year").textContent = new Date().getFullYear();
  observeReveals();
  stabilizeHashPosition();
}

function restoreHashPosition() {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (!target) return;
  const stickyOffset = document.querySelector(".site-header")?.offsetHeight || 0;
  const top = target.getBoundingClientRect().top + window.scrollY - stickyOffset;
  const root = document.documentElement;
  const previousBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  window.scrollTo(0, Math.max(0, top));
  window.requestAnimationFrame(() => {
    root.style.scrollBehavior = previousBehavior;
  });
}

function stabilizeHashPosition() {
  restoreHashPosition();
  [0, 80, 240].forEach((delay) => window.setTimeout(restoreHashPosition, delay));
}

document.querySelector(".menu-toggle").addEventListener("click", (event) => {
  const button = event.currentTarget;
  const isOpen = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!isOpen));
  document.querySelector("#primary-nav").classList.toggle("open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
  document.querySelector("#primary-nav").classList.remove("open");
  document.body.classList.remove("menu-open");
});

document.addEventListener("click", (event) => {
  if (event.target.closest(".menu-toggle, #primary-nav")) return;
  document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
  document.querySelector("#primary-nav").classList.remove("open");
  document.body.classList.remove("menu-open");
});

document.querySelectorAll("#primary-nav a").forEach((linkItem) => linkItem.addEventListener("click", () => {
  document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
  document.querySelector("#primary-nav").classList.remove("open");
  document.body.classList.remove("menu-open");
}));

languageSelect.addEventListener("change", (event) => setLanguage(event.target.value));
languagePills.addEventListener("click", (event) => {
  const button = event.target.closest("[data-lang]");
  if (button) setLanguage(button.dataset.lang);
});

guidesGrid.addEventListener("click", (event) => {
  const saveButton = event.target.closest("[data-save]");
  if (!saveButton) return;
  const id = saveButton.dataset.save;
  savedGuides.has(id) ? savedGuides.delete(id) : savedGuides.add(id);
  localStorage.setItem("ng_saved_guides", JSON.stringify([...savedGuides]));
  const modules = localizedModules();
  renderModules(showingSavedOnly ? modules.filter((item) => savedGuides.has(item.id)) : modules);
  showToast(savedGuides.has(id) ? "Guide saved on this device." : "Guide removed from saved items.");
});

stateDetail.addEventListener("click", (event) => {
  if (!event.target.closest(".state-detail-close")) return;
  stateDetail.hidden = true;
  document.querySelectorAll(".state-card").forEach((card) => card.classList.remove("active"));
});

document.querySelector("#state-search").addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase().trim();
  renderStates(STATES.filter((item) => {
    const meta = STATE_META[item.id];
    return `${item.name} ${item.capital} ${meta.cities} ${meta.bestFor} ${item.description} ${item.visual}`.toLowerCase().includes(query);
  }));
  stateDetail.hidden = true;
});

window.addEventListener("hashchange", stabilizeHashPosition);
window.addEventListener("load", restoreHashPosition, { once: true });

const siteSearch = document.querySelector("#site-search");
const searchResults = document.querySelector("#search-results");
siteSearch.addEventListener("input", () => {
  const t = currentTranslation();
  const results = searchAll(siteSearch.value);
  searchResults.innerHTML = results.map((item) => item.state
    ? `<a class="search-result" href="states/${item.state.toLowerCase()}.html"><span>${item.title}</span><small>${t.state}</small></a>`
    : `<a class="search-result" href="${item.url}"><span>${item.title}</span><small>${item.type || t.guide}</small></a>`
  ).join("");
});
siteSearch.closest("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const first = searchAll(siteSearch.value)[0];
  if (!first) return showToast("Try searching for housing, visa, legal help, or a state.");
  if (first.state) {
    window.location.href = `states/${first.state.toLowerCase()}.html`;
  } else {
    window.location.href = first.url;
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".hero-copy")) searchResults.innerHTML = "";
});

init();
