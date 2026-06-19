# Navigate Germany — v1.0 Launch Checklist

## SEO ✅
- [x] `sitemap.xml` — 18 URLs indexed with priorities
- [x] `robots.txt` — correct directives, sitemap referenced
- [x] Open Graph tags on homepage (og:title, og:description, og:url)
- [x] Twitter Card meta tags
- [x] Canonical URLs on all module pages
- [x] Page titles unique and descriptive (format: "Topic | Navigate Germany")
- [x] Meta descriptions on all module pages
- [ ] og:image — 1200×630 share image (PENDING — design needed)
- [ ] Schema.org WebSite structured data (PENDING)

## Performance
- [x] Service Worker pre-caches all 12 module pages
- [x] Emergency numbers cached — available offline
- [x] PWA manifest — installable as home screen app
- [ ] CSS minification (currently unminified — GitHub Pages limitation)
- [ ] Image lazy loading audit
- [ ] Core Web Vitals audit (target: LCP < 2.5s, CLS < 0.1)

## Accessibility
- [x] Emergency numbers have `dir="ltr"` for RTL language safety
- [x] Skip-to-main link (via internal-shell.js guard)
- [x] Language switcher keyboard accessible
- [ ] Alt text audit on all images
- [ ] Color contrast audit (WCAG AA)
- [ ] Screen reader test on homepage and legal module

## RTL & i18n
- [x] 10 languages: EN DE UR AR FA TR UK RU HI FR
- [x] RTL CSS: 101 rules for Arabic, Urdu, Farsi
- [x] Emergency numbers protected with `dir="ltr"` in RTL
- [x] Module label translations: UR AR FA TR
- [x] Translation status documented in `docs/TRANSLATION_STATUS.md`

## Content
- [x] 12 life module pages — all complete
- [x] 4 journey roadmap pages (student, skilled worker, family, refugee)
- [x] Salary calculator (2026 tax rates)
- [x] 16 Bundesländer state pages (varying completeness)
- [x] Community tips (12 verified tips)
- [ ] Full German translations of module pages (🔄 in progress)
- [ ] Urdu/Arabic module page content (❌ community contribution needed)

## Legal (German law requirements)
- [ ] Impressum — REQUIRED by §5 TMG. Must list: full name, address, email, phone.
- [ ] Datenschutzerklärung — REQUIRED by GDPR. Must cover: analytics (if any), contact form (if any), cookies (if any).
- [ ] Cookie consent — only needed if analytics added. Currently: no tracking ✅

## Technical
- [x] GitHub Pages deployment — automatic on main push
- [x] HTTPS enforced by GitHub Pages
- [x] PWA service worker registered
- [x] Internal-shell.js guard prevents injection on module pages
- [x] No console errors on homepage (verified)
- [x] Module pages use shared CSS (modules-shared.css)

## Launch blockers 🔴
1. ❌ **Impressum missing** — legally required for German websites
2. ❌ **Datenschutzerklärung missing** — legally required (GDPR)
3. ❌ **og:image missing** — important for social sharing

## Nice-to-have before launch 🟡
- [ ] Google Analytics (optional — adds GDPR requirements)
- [ ] Contact email on Impressum page
- [ ] 404 custom error page

---
*Last updated: June 2026*
