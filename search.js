// Navigate Germany — full-text search
// Ctrl+K / Cmd+K to open, Escape to close
(function(){
  const INDEX = [
    {title:"Housing & Renting",url:"modules/housing.html",keywords:"miete wohnung rent apartment deposit kaution landlord mieter"},
    {title:"Healthcare & Doctors",url:"modules/doctors.html",keywords:"krankenkasse arzt doctor health insurance gkv pkv tk aok"},
    {title:"Jobs & Visa",url:"modules/jobs.html",keywords:"job arbeit work visa blue card chancenkarte aufenthaltstitel"},
    {title:"Legal Help",url:"modules/legal.html",keywords:"recht legal letter brief deadline frist rechte ausländerbehörde"},
    {title:"German Language",url:"modules/language.html",keywords:"deutsch german language lernen kurs vhs integrationskurs"},
    {title:"Cost of Living",url:"modules/costs.html",keywords:"kosten leben miete food groceries budget salary gehalt"},
    {title:"Education",url:"modules/education.html",keywords:"schule kita university hochschule kinder bildung studium"},
    {title:"Banking & Tax",url:"modules/banking.html",keywords:"bank konto account steuer tax schufa finanzamt"},
    {title:"Family & Children",url:"modules/family.html",keywords:"familie kinder kindergeld kita family reunification nachzug"},
    {title:"Transport",url:"modules/transport.html",keywords:"bahn bus deutschlandticket fahrkarte auto führerschein driving"},
    {title:"Emergency",url:"modules/emergency.html",keywords:"notfall 110 112 polizei ambulance feuerwehr crisis hilfe"},
    {title:"Documents",url:"modules/documents.html",keywords:"anmeldung dokumente ausweis pass registration passport"},
    {title:"Integration",url:"modules/integration.html",keywords:"integration kurs vhs sprachkurs einbürgerung citizenship"},
    {title:"Salary Calculator",url:"modules/salary-calculator.html",keywords:"gehalt netto brutto steuer tax class rechner"},
    {title:"Student Journey",url:"journeys/student.html",keywords:"student uni university visum visa studium bachelor master"},
    {title:"Skilled Worker Journey",url:"journeys/skilled-worker.html",keywords:"fachkraft skilled worker blue card eu visum visa job"},
    {title:"Family Journey",url:"journeys/family.html",keywords:"family nachzug reunification kinder partner spouse"},
    {title:"Entrepreneur Journey",url:"journeys/entrepreneur.html",keywords:"unternehmer entrepreneur freiberufler gewerbe business"},
    {title:"Researcher Journey",url:"journeys/researcher.html",keywords:"forscher researcher phd doktor stipendium daad dfg"},
    {title:"Refugee Journey",url:"journeys/refugee.html",keywords:"flüchtling asyl refugee asylum bamf duldung aufenthalt"},
  ];

  // Build search modal
  const overlay = document.createElement("div");
  overlay.id = "ng-search-overlay";
  overlay.style.cssText = "display:none;position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:9999;backdrop-filter:blur(6px)";
  
  const modal = document.createElement("div");
  modal.style.cssText = "position:absolute;top:12%;left:50%;transform:translateX(-50%);width:min(560px,92vw);background:#0f1320;border:1px solid rgba(255,255,255,.12);border-radius:18px;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.6)";
  
  const inputWrap = document.createElement("div");
  inputWrap.style.cssText = "display:flex;align-items:center;gap:10px;padding:16px 18px;border-bottom:1px solid rgba(255,255,255,.08)";
  inputWrap.innerHTML = '<span style="font-size:1.1rem;color:#7c8fa8">🔍</span>';
  
  const inp = document.createElement("input");
  inp.type = "text";
  inp.placeholder = "Search modules, guides, topics…";
  inp.style.cssText = "flex:1;background:none;border:none;outline:none;color:#f1f5f9;font-size:1rem;font-family:inherit";
  inputWrap.appendChild(inp);
  
  const esc = document.createElement("kbd");
  esc.textContent = "Esc";
  esc.style.cssText = "font-size:.7rem;padding:2px 7px;border:1px solid rgba(255,255,255,.15);border-radius:5px;color:#7c8fa8;cursor:pointer";
  esc.onclick = close;
  inputWrap.appendChild(esc);
  
  const results = document.createElement("div");
  results.style.cssText = "max-height:340px;overflow-y:auto;padding:8px";
  
  modal.appendChild(inputWrap);
  modal.appendChild(results);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  function search(q) {
    results.innerHTML = "";
    if (!q.trim()) return;
    const words = q.toLowerCase().split(/\s+/);
    const hits = INDEX.filter(item => {
      const haystack = (item.title + " " + item.keywords).toLowerCase();
      return words.every(w => haystack.includes(w));
    }).slice(0, 8);
    
    if (!hits.length) {
      results.innerHTML = '<p style="color:#7c8fa8;text-align:center;padding:20px;font-size:.875rem">No results for "' + q + '"</p>';
      return;
    }
    
    hits.forEach((item, i) => {
      const a = document.createElement("a");
      a.href = item.url;
      a.style.cssText = "display:flex;align-items:center;gap:12px;padding:11px 12px;border-radius:10px;text-decoration:none;transition:background .1s" + (i===0?";background:rgba(255,255,255,.07)":"");
      a.innerHTML = `<span style="font-size:1.1rem">📄</span>
        <div><div style="color:#f1f5f9;font-size:.9rem;font-weight:600">${item.title}</div>
        <div style="color:#7c8fa8;font-size:.75rem">${item.url}</div></div>`;
      a.onmouseenter = () => a.style.background = "rgba(255,255,255,.07)";
      a.onmouseleave = () => { if (i!==0) a.style.background=""; };
      results.appendChild(a);
    });
  }

  function open() { overlay.style.display="block"; inp.value=""; inp.focus(); results.innerHTML=""; }
  function close() { overlay.style.display="none"; }

  inp.addEventListener("input", e => search(e.target.value));
  inp.addEventListener("keydown", e => { if(e.key==="Escape") close(); });
  overlay.addEventListener("click", e => { if(e.target===overlay) close(); });

  document.addEventListener("keydown", e => {
    if ((e.ctrlKey||e.metaKey) && e.key==="k") { e.preventDefault(); open(); }
    if (e.key==="Escape") close();
  });

  // Add search button to page if nav exists
  document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    if (nav && !document.getElementById("ng-search-btn")) {
      const btn = document.createElement("button");
      btn.id = "ng-search-btn";
      btn.innerHTML = "🔍 <span style='font-size:.75rem;opacity:.6'>Ctrl+K</span>";
      btn.style.cssText = "background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);color:#f1f5f9;padding:6px 12px;border-radius:8px;cursor:pointer;font-size:.8rem;font-family:inherit;display:flex;align-items:center;gap:6px";
      btn.onclick = open;
      nav.appendChild(btn);
    }
  });

  window.NGSearch = {open, close};
})();
