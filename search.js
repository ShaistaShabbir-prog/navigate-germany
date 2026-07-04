// navigate-germany — client-side search using MiniSearch
// Indexes all module content for instant full-text search

let searchIndex = null;

async function initSearch() {
  if (searchIndex) return;
  // Load community tips as initial index
  const tips = await fetch('/community-tips.json').then(r => r.json()).catch(() => []);

  // Build search data from page headings and tips
  const docs = [
    { id: 1, title: 'Visa & Residence', body: 'visa aufenthaltstitel blue card fiktionsbescheinigung niederlassungserlaubnis anmeldung', section: 'visa' },
    { id: 2, title: 'Housing & Registration', body: 'wohnung miete anmeldung einwohnermeldeamt flat apartment rent deposit kaution', section: 'housing' },
    { id: 3, title: 'Health Insurance', body: 'krankenversicherung TK AOK Barmer health insurance gesetzlich privat pflicht', section: 'health' },
    { id: 4, title: 'Banking & Finance', body: 'bank konto N26 DKB Sparkasse girokonto IBAN banking finance money', section: 'banking' },
    { id: 5, title: 'Job Search', body: 'job arbeitssuche linkedin xing stepstone indeed jobsuche bewerbung CV Lebenslauf', section: 'jobs' },
    { id: 6, title: 'German Language', body: 'deutsch lernen A1 A2 B1 B2 C1 Goethe Telc sprachkurs german course Integrationskurs', section: 'language' },
    { id: 7, title: 'Public Transport', body: 'öffentlicher nahverkehr BVG MVV HVV DB Bahn S-Bahn U-Bahn bus ticket deutschlandticket', section: 'transport' },
    { id: 8, title: 'Education & Universities', body: 'universität hochschule studium Studienkolleg uni apply TU LMU Humboldt', section: 'education' },
    ...tips.map((t, i) => ({ id: 100 + i, title: t.title || t.tip?.slice(0, 50), body: t.tip || t.content || '', section: 'tips' }))
  ];

  // Simple search without external library
  searchIndex = docs;
}

function searchContent(query) {
  if (!searchIndex || !query.trim()) return [];
  const q = query.toLowerCase();
  return searchIndex
    .filter(d => d.title.toLowerCase().includes(q) || d.body.toLowerCase().includes(q))
    .slice(0, 8)
    .map(d => ({ title: d.title, section: d.section, score: d.title.toLowerCase().includes(q) ? 2 : 1 }))
    .sort((a, b) => b.score - a.score);
}

function renderSearchBox() {
  const container = document.getElementById('search-container');
  if (!container) return;
  container.innerHTML = `
    <div style="position:relative;max-width:500px;margin:1rem auto">
      <input id="search-input" type="search" placeholder="🔍 Search: visa, housing, bank, job..."
        style="width:100%;padding:0.75rem 1rem;border-radius:25px;border:2px solid #30363d;
               background:#161b22;color:#e6edf3;font-size:0.95rem;outline:none;transition:border-color 0.2s"
        onfocus="this.style.borderColor='#7c3aed'" onblur="this.style.borderColor='#30363d'"
        oninput="doSearch(this.value)"/>
      <div id="search-results" style="position:absolute;width:100%;top:calc(100% + 0.5rem);
           background:#161b22;border:1px solid #30363d;border-radius:8px;display:none;z-index:100"></div>
    </div>`;
  initSearch();
}

function doSearch(q) {
  const results = searchContent(q);
  const el = document.getElementById('search-results');
  if (!q.trim() || !results.length) { el.style.display = 'none'; return; }
  el.style.display = 'block';
  el.innerHTML = results.map(r =>
    `<a href="#${r.section}" onclick="document.getElementById('search-results').style.display='none'"
       style="display:block;padding:0.6rem 1rem;color:#e6edf3;text-decoration:none;border-bottom:1px solid #30363d">
       <span style="color:#a78bfa">📌</span> ${r.title}</a>`
  ).join('');
}

document.addEventListener('DOMContentLoaded', renderSearchBox);
