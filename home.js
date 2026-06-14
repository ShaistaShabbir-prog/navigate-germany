const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "ur", label: "اردو", flag: "🇵🇰" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "fa", label: "فارسی", flag: "🇮🇷" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "uk", label: "Українська", flag: "🇺🇦" },
];

const TRANSLATIONS = {
  en: {
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
  },
  de: {
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
  },
  ar: {
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
  },
  ur: {
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
  },
  tr: {
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
  },
  ru: {
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
  },
  fr: {
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
  },
  fa: {
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
  },
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
  },
};

const UI_TEXT = {
  en: { state_count: "{count} states", capital: "Capital", major_cities: "Major cities", best_for: "Best for", view_details: "View details →", official_resources: "Official local resources", full_state_guide: "Open full state guide →", cities: "Cities", arrival_checklist: "Open arrival checklist →", close_state: "Close state details", no_states: "No state matches your search.", guide: "Guide", state: "State", saved: "Saved", more: "More" },
  de: { state_count: "{count} Bundesländer", capital: "Hauptstadt", major_cities: "Wichtige Städte", best_for: "Besonders geeignet für", view_details: "Details ansehen →", official_resources: "Offizielle lokale Ressourcen", full_state_guide: "Vollständigen Landesratgeber öffnen →", cities: "Städte", arrival_checklist: "Ankunftscheckliste öffnen →", close_state: "Landesdetails schließen", no_states: "Kein Bundesland entspricht Ihrer Suche.", guide: "Ratgeber", state: "Bundesland", saved: "Gespeichert", more: "Mehr" },
  ar: { state_count: "{count} ولاية", capital: "العاصمة", major_cities: "المدن الرئيسية", best_for: "الأنسب لـ", view_details: "عرض التفاصيل →", official_resources: "موارد محلية رسمية", full_state_guide: "فتح دليل الولاية الكامل →", cities: "المدن", arrival_checklist: "فتح قائمة الوصول →", close_state: "إغلاق تفاصيل الولاية", no_states: "لا توجد ولاية مطابقة لبحثك.", guide: "دليل", state: "ولاية", saved: "المحفوظ", more: "المزيد" },
  tr: { state_count: "{count} eyalet", capital: "Başkent", major_cities: "Büyük şehirler", best_for: "En uygun", view_details: "Ayrıntıları gör →", official_resources: "Resmi yerel kaynaklar", full_state_guide: "Tam eyalet rehberini aç →", cities: "Şehirler", arrival_checklist: "Varış kontrol listesini aç →", close_state: "Eyalet ayrıntılarını kapat", no_states: "Aramanızla eşleşen eyalet yok.", guide: "Rehber", state: "Eyalet", saved: "Kaydedilenler", more: "Daha fazla" },
  ur: { state_count: "{count} ریاستیں", capital: "دارالحکومت", major_cities: "اہم شہر", best_for: "بہترین برائے", view_details: "تفصیل دیکھیں ←", official_resources: "سرکاری مقامی وسائل", full_state_guide: "مکمل ریاستی رہنما کھولیں ←", cities: "شہر", arrival_checklist: "آمد کی چیک لسٹ کھولیں ←", close_state: "ریاست کی تفصیل بند کریں", no_states: "آپ کی تلاش سے کوئی ریاست نہیں ملی۔", guide: "رہنما", state: "ریاست", saved: "محفوظ", more: "مزید" },
  ru: { state_count: "{count} земель", capital: "Столица", major_cities: "Крупные города", best_for: "Лучше всего для", view_details: "Подробнее →", official_resources: "Официальные местные ресурсы", full_state_guide: "Открыть полный путеводитель по земле →", cities: "Города", arrival_checklist: "Открыть список первых шагов →", close_state: "Закрыть сведения о земле", no_states: "По вашему запросу ничего не найдено.", guide: "Руководство", state: "Земля", saved: "Сохранённое", more: "Ещё" },
  fr: { state_count: "{count} Länder", capital: "Capitale", major_cities: "Villes principales", best_for: "Idéal pour", view_details: "Voir les détails →", official_resources: "Ressources locales officielles", full_state_guide: "Ouvrir le guide complet du Land →", cities: "Villes", arrival_checklist: "Ouvrir la liste d'arrivée →", close_state: "Fermer les détails du Land", no_states: "Aucun Land ne correspond à votre recherche.", guide: "Guide", state: "Land", saved: "Enregistrés", more: "Plus" },
  fa: { state_count: "{count} ایالت", capital: "مرکز", major_cities: "شهرهای مهم", best_for: "مناسب برای", view_details: "مشاهده جزئیات ←", official_resources: "منابع رسمی محلی", full_state_guide: "باز کردن راهنمای کامل ایالت ←", cities: "شهرها", arrival_checklist: "باز کردن چک‌لیست ورود ←", close_state: "بستن جزئیات ایالت", no_states: "هیچ ایالتی با جستجوی شما مطابقت ندارد.", guide: "راهنما", state: "ایالت", saved: "ذخیره‌شده", more: "بیشتر" },
  it: { state_count: "{count} Länder", capital: "Capitale", major_cities: "Città principali", best_for: "Ideale per", view_details: "Vedi dettagli →", official_resources: "Risorse locali ufficiali", full_state_guide: "Apri la guida completa del Land →", cities: "Città", arrival_checklist: "Apri la lista di arrivo →", close_state: "Chiudi i dettagli del Land", no_states: "Nessun Land corrisponde alla ricerca.", guide: "Guida", state: "Land", saved: "Salvati", more: "Altro" },
  uk: { state_count: "{count} земель", capital: "Столиця", major_cities: "Великі міста", best_for: "Найкраще для", view_details: "Переглянути деталі →", official_resources: "Офіційні місцеві ресурси", full_state_guide: "Відкрити повний путівник землею →", cities: "Міста", arrival_checklist: "Відкрити список перших кроків →", close_state: "Закрити відомості про землю", no_states: "За вашим запитом земель не знайдено.", guide: "Путівник", state: "Земля", saved: "Збережене", more: "Більше" },
};

Object.entries(UI_TEXT).forEach(([code, text]) => Object.assign(TRANSLATIONS[code], text));

const MODULES = [
  { id: "housing", icon: "⌂", iconSrc: "./assets/icons/housing.png", title: "Housing", desc: "Find accommodation, understand rental contracts, deposits, and tenant rights.", url: "modules/housing.html", color: "#2563eb", bg: "#eff6ff", border: "#bfdbfe" },
  { id: "healthcare", icon: "✚", iconSrc: "./assets/icons/healthcare.png", title: "Healthcare", desc: "Health insurance, doctors, hospitals, appointments, and wellbeing.", url: "modules/doctors.html", color: "#dc2626", bg: "#fef2f2", border: "#fecaca" },
  { id: "jobs", icon: "▣", iconSrc: "./assets/icons/jobs.png", title: "Jobs & Visa", desc: "Work opportunities, residence routes, Blue Card, and job search.", url: "modules/jobs.html", color: "#b45309", bg: "#fff7ed", border: "#fed7aa" },
  { id: "legal", icon: "⚖", iconSrc: "./assets/icons/legal.png", title: "Legal Help", desc: "Residence law, official letters, deadlines, rights, and support.", url: "modules/legal.html", color: "#dc2626", bg: "#fff1f2", border: "#fecdd3" },
  { id: "language", icon: "•••", iconSrc: "./assets/icons/language.png", title: "Language", desc: "Learn German, practise daily phrases, and find language resources.", url: "modules/language.html", color: "#0f766e", bg: "#f0fdfa", border: "#99f6e4" },
  { id: "costs", icon: "€", title: "Cost of Living", desc: "Compare rent, expenses, salaries, banking, and everyday costs.", url: "modules/costs.html", color: "#d97706", bg: "#fffbeb", border: "#fde68a" },
  { id: "education", icon: "▤", title: "Education", desc: "Schools, childcare, integration courses, and learning pathways.", url: "modules/integration.html", color: "#7c3aed", bg: "#f5f3ff", border: "#ddd6fe" },
  { id: "banking", icon: "▥", title: "Banking & Taxes", desc: "Bank accounts, transfers, Schufa, tax ID, and finance basics.", url: "modules/banking.html", color: "#0369a1", bg: "#f0f9ff", border: "#bae6fd" },
  { id: "family", icon: "♡", title: "Family & Child Support", desc: "Kindergeld, Kita, schools, parental support, and family life.", url: "modules/family.html", color: "#be185d", bg: "#fdf2f8", border: "#fbcfe8" },
  { id: "transport", icon: "↔", title: "Transport", desc: "Driving licence and practical mobility steps for daily life.", url: "modules/bureaucracy.html", color: "#4f46e5", bg: "#eef2ff", border: "#c7d2fe" },
  { id: "emergency", icon: "!", iconSrc: "./assets/icons/emergency.png", title: "Emergency", desc: "Emergency numbers, urgent medical help, crisis lines, and safety.", url: "modules/emergency.html", color: "#b91c1c", bg: "#fef2f2", border: "#fecaca" },
  { id: "documents", icon: "▧", title: "Documents", desc: "Anmeldung, insurance, tax ID, bank account, and admin checklists.", url: "modules/bureaucracy.html", color: "#15803d", bg: "#f0fdf4", border: "#bbf7d0" },
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
  return MODULES.map((module, index) => ({
    ...module,
    title: t.modules?.[index]?.title || module.title,
    desc: t.modules?.[index]?.desc || module.desc,
    linkLabel: t.open_guide,
  }));
}

function renderModules(items = MODULES) {
  const t = currentTranslation();
  guidesGrid.innerHTML = items.map((item) => `
    <article class="module-card reveal" style="--module-color:${item.color};--module-bg:${item.bg};--module-border:${item.border};--module-icon-bg:${item.bg}">
      <button class="save-guide ${savedGuides.has(item.id) ? "saved" : ""}" type="button" data-save="${item.id}" aria-label="${savedGuides.has(item.id) ? t.remove : t.save} ${item.title}">♡</button>
      <span class="module-icon">${item.iconSrc ? `<img src="${item.iconSrc}" alt="" width="52" height="52">` : `<span aria-hidden="true">${item.icon}</span>`}</span>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <a class="module-link" href="${item.url}">${item.linkLabel || t.open_guide}</a>
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
  document.querySelector("#state-result-count").textContent = t.state_count.replace("{count}", items.length);
  statesGrid.innerHTML = items.length ? items.map((item) => {
    const meta = STATE_META[item.id];
    return `
    <button class="state-card reveal" type="button" data-state="${item.id}" style="--state-bg:${item.background}" aria-label="${t.view_details.replace(/[←→]/g, "").trim()}: ${item.name}">
      <span class="state-card-content">
        <span class="state-media"><img src="./assets/images/states/${meta.image}" alt="${meta.alt}" loading="lazy" onerror="this.style.display='none'"><small>${item.visual}</small></span>
        <strong>${item.name}</strong>
        <span class="state-capital"><b>${t.capital}</b> ${item.capital}</span>
        <span class="state-city"><b>${t.major_cities}</b> ${meta.cities}</span>
        <span class="state-description">${item.description}</span>
        <span class="state-best">${t.best_for} ${meta.bestFor}</span>
        <span class="state-cta">${t.view_details}</span>
      </span>
    </button>
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

function setLanguage(code) {
  const selected = LANGUAGES.find((item) => item.code === code) || LANGUAGES[0];
  const t = TRANSLATIONS[selected.code] || TRANSLATIONS.en;
  window._ng_t = t;

  // ── Direction ──────────────────────────────────────────────
  document.documentElement.dir = t.dir || "ltr";
  document.documentElement.lang = selected.code;

  // ── Hero ───────────────────────────────────────────────────
  const [titleStart, titleEmphasis = ""] = splitTitle(t.hero[0]);
  const heroTitle = document.querySelector("#hero-title");
  const heroSub   = document.querySelector("#hero-subtitle");
  if (heroTitle) heroTitle.innerHTML = `${titleStart} <em>${titleEmphasis}</em>`;
  if (heroSub)   heroSub.textContent = t.hero[1];

  // ── ALL data-i18n elements ────────────────────────────────
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });

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

  const activeStateId = document.querySelector(".state-card.active")?.dataset.state;
  const stateQuery = document.querySelector("#state-search")?.value.toLowerCase().trim() || "";
  renderStates(STATES.filter((item) => {
    const meta = STATE_META[item.id];
    return `${item.name} ${item.capital} ${meta.cities} ${meta.bestFor} ${item.description} ${item.visual}`.toLowerCase().includes(stateQuery);
  }));
  if (activeStateId) openState(activeStateId);

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
  return [...guideMatches, ...stateMatches];
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
  setLanguage(localStorage.getItem("ng_lang") || "en");
  document.querySelector("#current-year").textContent = new Date().getFullYear();
  observeReveals();
  restoreHashPosition();
}

function restoreHashPosition() {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (!target) return;
  window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
    target.scrollIntoView({ block: "start" });
  }));
}

document.querySelector(".menu-toggle").addEventListener("click", (event) => {
  const button = event.currentTarget;
  const isOpen = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!isOpen));
  document.querySelector("#primary-nav").classList.toggle("open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
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

statesGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-state]");
  if (card) openState(card.dataset.state);
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

window.addEventListener("hashchange", restoreHashPosition);
window.addEventListener("load", restoreHashPosition);
document.fonts?.ready.then(restoreHashPosition);

const siteSearch = document.querySelector("#site-search");
const searchResults = document.querySelector("#search-results");
siteSearch.addEventListener("input", () => {
  const t = currentTranslation();
  const results = searchAll(siteSearch.value);
  searchResults.innerHTML = results.map((item) => item.state
    ? `<button class="search-result" type="button" data-search-state="${item.state}"><span>${item.title}</span><small>${t.state}</small></button>`
    : `<a class="search-result" href="${item.url}"><span>${item.title}</span><small>${t.guide}</small></a>`
  ).join("");
});
siteSearch.closest("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const first = searchAll(siteSearch.value)[0];
  if (!first) return showToast("Try searching for housing, visa, legal help, or a state.");
  if (first.state) {
    document.querySelector("#states").scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => openState(first.state), 350);
  } else {
    window.location.href = first.url;
  }
});
searchResults.addEventListener("click", (event) => {
  const stateButton = event.target.closest("[data-search-state]");
  if (!stateButton) return;
  searchResults.innerHTML = "";
  document.querySelector("#states").scrollIntoView({ behavior: "smooth" });
  window.setTimeout(() => openState(stateButton.dataset.searchState), 350);
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".hero-copy")) searchResults.innerHTML = "";
});

init();
