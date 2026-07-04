const LEGAL_PROCESSES = [
  {
    id: "anmeldung",
    name: "Anmeldung",
    deadline: "Usually within 2 weeks of moving",
    docs: ["Passport or ID", "Wohnungsgeberbestätigung", "Registration form"],
    steps: [
      ["Get landlord confirmation", "Ask for the Wohnungsgeberbestätigung.", "§19 BMG"],
      ["Book the Bürgeramt", "Use your city service portal and keep proof if no appointment is available.", "§17 BMG"],
      ["Attend the appointment", "Bring original documents and keep the Meldebescheinigung.", "§23 BMG"],
    ],
  },
  {
    id: "residence",
    name: "Residence Permit",
    deadline: "Apply before the current visa or permit expires",
    docs: ["Passport", "Biometric photo", "Registration", "Insurance", "Work or study proof"],
    steps: [
      ["Identify the permit", "Check the official immigration authority guidance for your route.", "AufenthG"],
      ["Apply before expiry", "Keep the submission confirmation and ask about a Fiktionsbescheinigung.", "§81 AufenthG"],
      ["Respond to requests", "Submit missing documents by the authority's stated deadline.", "§82 AufenthG"],
    ],
  },
  {
    id: "employment",
    name: "Employment Rights",
    deadline: "Dismissal claims often have a 3-week deadline",
    docs: ["Employment contract", "Payslips", "Dismissal letter", "Relevant messages"],
    steps: [
      ["Record the received date", "Keep the envelope and note when the dismissal reached you.", "§4 KSchG"],
      ["Get advice immediately", "Contact a lawyer, union, or the Arbeitsgericht legal application office.", "KSchG"],
      ["Preserve evidence", "Save contracts, schedules, messages, and witness details.", "General evidence"],
    ],
  },
  {
    id: "housing",
    name: "Housing Dispute",
    deadline: "Follow the deadline stated in the notice",
    docs: ["Lease", "Notice", "Payment proof", "Photos", "Messages"],
    steps: [
      ["Do not ignore the notice", "Read the reason, date, and requested action.", "BGB Mietrecht"],
      ["Contact a Mieterverein", "A tenant association can review the lease and notice.", "Tenant support"],
      ["Reply in writing", "Keep proof of delivery and do not sign an agreement you do not understand.", "Evidence"],
    ],
  },
];

const LEGAL_LAWS = [
  ["AufenthG", "Residence Act", "Residence permits, extensions, and obligations for non-EU nationals."],
  ["BMG", "Federal Registration Act", "Address registration and landlord confirmation."],
  ["KSchG", "Dismissal Protection Act", "Challenges to employment dismissal; deadlines can be very short."],
  ["BGB", "German Civil Code", "Contracts, tenancy, deposits, rent, and termination rules."],
  ["SGB", "Social Code", "Health insurance, unemployment, and social benefits."],
  ["AGG", "Equal Treatment Act", "Protection from specified forms of discrimination."],
  ["VwVfG", "Administrative Procedure Act", "Administrative procedures and file-access principles."],
];

const LEGAL_RIGHTS = [
  ["#3b82f6", "Legal advice support", "Beratungshilfe", "People with low income may qualify for subsidised legal advice. Ask the local Amtsgericht."],
  ["#7c3aed", "Access to personal data", "GDPR Art. 15", "You may request a copy of personal data held about you, subject to legal limits."],
  ["#22c55e", "Administrative file access", "§29 VwVfG", "Parties may have file-access rights in an administrative procedure, subject to exceptions."],
  ["#ef4444", "Challenge an official decision", "Notice instructions", "Read the Rechtsbehelfsbelehrung for the exact remedy, authority, form, and deadline."],
  ["#f59e0b", "Tenant support", "BGB / Mieterverein", "A tenant association can review rent increases, service charges, and termination notices."],
  ["#06b6d4", "Anti-discrimination support", "AGG", "Document events and contact the Federal Anti-Discrimination Agency or qualified counsel promptly."],
];

const LEGAL_TEMPLATES = [
  {
    name: "Basic deadline-preserving objection",
    description: "A short placeholder response; check whether objection is legally available.",
    text: `[Your name]
[Address]
[Date]

[Authority]

Subject: Response to decision dated [DATE], reference [REFERENCE]

Dear Sir or Madam,

I am responding within the stated deadline and request confirmation of the correct legal remedy and any documents required. Where legally available, I object to the decision and will provide reasons after reviewing the file and obtaining advice.

Please confirm receipt in writing.

Yours faithfully,
[Name]`,
  },
  {
    name: "Request for file access",
    description: "Ask an authority how to inspect the file for your procedure.",
    text: `[Your name]
[Address]
[Date]

[Authority]

Subject: Request for access to my file, reference [REFERENCE]

Dear Sir or Madam,

I request access to the records concerning my procedure. Please tell me whether access will be provided electronically, by copies, or at an appointment, and inform me of any costs in advance.

Yours faithfully,
[Name]`,
  },
  {
    name: "Tenant notice clarification",
    description: "Request the legal and factual basis of a landlord notice.",
    text: `[Your name]
[Address]
[Date]

[Landlord / management]

Subject: Your notice dated [DATE]

Dear Sir or Madam,

Please provide the complete factual and legal basis for your notice, including the calculation and supporting documents. I reserve all rights and will obtain tenant-law advice.

Yours faithfully,
[Name]`,
  },
];

const LOCAL_TOPICS = [
  {
    keys: ["dismiss", "kündigung", "termination", "fired", "employment"],
    answer: "A dismissal challenge can have a strict three-week deadline from receipt. Keep the letter and envelope, contact a labour lawyer, union, or Arbeitsgericht immediately, and do not wait for negotiations to finish.",
  },
  {
    keys: ["rent", "landlord", "mieter", "kaution", "housing", "eviction"],
    answer: "Keep the lease and notice, do not sign or move out solely because of a demand, and ask a Mieterverein or tenancy lawyer to review it. Rent increases, deposits, and termination each have different legal requirements.",
  },
  {
    keys: ["visa", "permit", "aufenthalt", "immigration", "rejected", "expiry"],
    answer: "Read the decision's legal-remedy instructions and act before the stated deadline. For an expiring permit, keep proof that you applied before expiry and ask the Ausländerbehörde whether a Fiktionsbescheinigung applies.",
  },
  {
    keys: ["benefit", "bürgergeld", "jobcenter", "bescheid", "social"],
    answer: "Check the Rechtsbehelfsbelehrung at the end of the decision for the authority, form, and deadline. Preserve the full notice and seek Sozialberatung or qualified legal advice promptly.",
  },
  {
    keys: ["anmeldung", "register", "address", "bürgeramt"],
    answer: "You generally need your passport or ID, Wohnungsgeberbestätigung, and the local registration form. Use your city's official portal and retain evidence if timely appointments are unavailable.",
  },
  {
    keys: ["discrimination", "agg", "racism", "harassment"],
    answer: "Write down dates, words used, witnesses, and resulting harm, and preserve messages or documents. AGG claims can have short assertion deadlines, so contact the Federal Anti-Discrimination Agency or qualified counsel promptly.",
  },
];

let currentProcess = null;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[char]));
}

function showTab(name, button) {
  document.querySelectorAll(".tc").forEach(tab => tab.classList.remove("active"));
  document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
  document.getElementById("tc-" + name)?.classList.add("active");
  button?.classList.add("active");
  if (name === "guide") renderProcessButtons();
  if (name === "laws") renderLaws(document.getElementById("law-srch")?.value || "");
  if (name === "rights") renderRights();
  if (name === "templates") renderTemplates();
  if (name === "chat") renderQuickTopics();
}

function renderProcessButtons() {
  const container = document.getElementById("proc-btns");
  container.innerHTML = "";
  LEGAL_PROCESSES.forEach(process => {
    const button = document.createElement("button");
    button.textContent = process.name;
    button.style.cssText = `padding:7px 14px;border-radius:8px;border:1px solid var(--border);background:${currentProcess === process.id ? "rgba(255,204,2,.12)" : "var(--surface2)"};color:${currentProcess === process.id ? "var(--accent)" : "var(--muted)"};font-size:.78rem;font-weight:600;cursor:pointer`;
    button.addEventListener("click", () => selectProcess(process.id));
    container.appendChild(button);
  });
}

function selectProcess(id) {
  const process = LEGAL_PROCESSES.find(item => item.id === id);
  if (!process) return;
  currentProcess = id;
  document.getElementById("proc-title").textContent = process.name;
  document.getElementById("proc-dead").textContent = "Deadline: " + process.deadline;
  document.getElementById("proc-steps").innerHTML = process.steps.map((step, index) =>
    `<div class="step"><div class="sn">${index + 1}</div><div><div class="st">${escapeHtml(step[0])}</div><div class="sd">${escapeHtml(step[1])}</div><span class="sl">${escapeHtml(step[2])}</span></div></div>`
  ).join("");
  document.getElementById("proc-docs").innerHTML = process.docs.map(document =>
    `<div style="padding:5px 0;border-bottom:1px solid var(--border);font-size:.82rem">Document: ${escapeHtml(document)}</div>`
  ).join("");
  renderProcessButtons();
}

function detectLetter(text) {
  const normalized = text.toLowerCase();
  const rules = [
    { keys: ["kündigung", "dismissal", "arbeitsverhältnis"], urgency: "high", deadline: "Employment dismissal claims can have a 3-week deadline.", law: "§4 KSchG", action: "Contact a labour lawyer, union, or Arbeitsgericht immediately." },
    { keys: ["widerspruch", "rechtsbehelfsbelehrung", "bescheid"], urgency: "high", deadline: "Use the exact deadline in the Rechtsbehelfsbelehrung; one month is common but not universal.", law: "Decision-specific remedy", action: "Read the final section and preserve proof of submission." },
    { keys: ["ausreise", "abschiebung", "aufenthalt", "visa", "permit"], urgency: "high", deadline: "Immigration notices can have short, case-specific deadlines.", law: "AufenthG / notice instructions", action: "Contact an immigration lawyer or counselling centre promptly." },
    { keys: ["mieterhöhung", "kündigung miet", "räumung", "landlord", "rent"], urgency: "medium", deadline: "Check the date and response period stated in the notice.", law: "BGB tenancy law", action: "Ask a Mieterverein or tenancy lawyer to review the notice." },
    { keys: ["zahlungserinnerung", "mahnung", "invoice", "rechnung"], urgency: "medium", deadline: "Check the payment or objection date printed in the letter.", law: "Contract / debt rules", action: "Verify the sender and amount before paying or disputing in writing." },
  ];
  const match = rules.find(rule => rule.keys.some(key => normalized.includes(key)));
  return match || {
    urgency: "low",
    deadline: "No reliable deadline detected. Read the full letter and any Rechtsbehelfsbelehrung.",
    law: "Not identified",
    action: "Confirm the sender, reference number, requested action, and deadline with the issuing organisation.",
  };
}

function doAnalyse() {
  const text = document.getElementById("ltxt").value.trim();
  if (text.length < 30) {
    alert("Please paste enough letter text to analyse.");
    return;
  }
  const result = detectLetter(text);
  const reference = text.match(/(?:aktenzeichen|geschäftszeichen|reference|az\.?)\s*:?\s*([^\n]+)/i);
  const date = text.match(/\b(?:0?[1-9]|[12]\d|3[01])[./-](?:0?[1-9]|1[0-2])[./-](?:20)?\d{2}\b/);
  const box = document.getElementById("lres");
  box.style.display = "block";
  box.innerHTML = `
    <div style="font-weight:700;margin-bottom:10px">Local letter check</div>
    <span class="ub ${result.urgency === "high" ? "uh" : result.urgency === "medium" ? "um" : "ul"}">${result.urgency.toUpperCase()} ATTENTION</span>
    <div style="font-size:.85rem;margin:10px 0">This browser-only check found keywords related to <strong>${escapeHtml(result.law)}</strong>. It is not a legal interpretation.</div>
    ${date ? `<div class="ib">Date found: ${escapeHtml(date[0])}</div>` : ""}
    ${reference ? `<div class="ib">Reference found: ${escapeHtml(reference[1].trim())}</div>` : ""}
    <div class="wb">${escapeHtml(result.deadline)}</div>
    <div class="sb">${escapeHtml(result.action)}</div>
    <div style="font-size:.75rem;color:var(--muted);margin-top:10px">Verify every deadline with the original letter, authority, or a licensed lawyer.</div>`;
}

function localLegalAnswer(question) {
  const normalized = question.toLowerCase();
  return LOCAL_TOPICS.find(topic => topic.keys.some(key => normalized.includes(key)))?.answer ||
    "I could not match that question to the local legal guide. Try asking about dismissal, rent, residence permits, official decisions, Anmeldung, benefits, or discrimination. For personal cases, use a qualified lawyer or counselling service.";
}

function doChat() {
  const input = document.getElementById("cin");
  const question = input.value.trim();
  if (!question) return;
  input.value = "";
  addMessage("user", question);
  addMessage("ai", localLegalAnswer(question) + "\n\nInformation only, not legal advice. Verify current law and deadlines.");
}

function qa(question) {
  document.getElementById("cin").value = question;
  const chatTab = document.querySelectorAll(".tab")[2];
  showTab("chat", chatTab);
  doChat();
}

function addMessage(role, text) {
  const message = document.createElement("div");
  message.className = "m " + role;
  const bubble = document.createElement("div");
  bubble.className = "mb";
  bubble.textContent = text;
  message.appendChild(bubble);
  document.getElementById("chat-msgs").appendChild(message);
  message.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function renderQuickTopics() {
  const topics = ["Dismissal deadline", "Rent increase", "Residence permit expiry", "Official decision", "Anmeldung", "Discrimination"];
  const container = document.getElementById("quick-topics");
  container.innerHTML = "";
  topics.forEach(topic => {
    const button = document.createElement("button");
    button.textContent = "Search: " + topic;
    button.style.cssText = "display:block;width:100%;text-align:left;padding:7px 10px;margin-bottom:4px;border:1px solid var(--border);border-radius:8px;font-size:.8rem;cursor:pointer;background:var(--surface2);color:var(--text)";
    button.addEventListener("click", () => qa("Explain " + topic));
    container.appendChild(button);
  });
}

function renderLaws(filter = "") {
  const normalized = filter.toLowerCase();
  document.getElementById("laws-list").innerHTML = LEGAL_LAWS
    .filter(law => !normalized || law.join(" ").toLowerCase().includes(normalized))
    .map(law => `<div class="card"><div style="font-weight:700;color:#a78bfa">${escapeHtml(law[1])}</div><span class="sl">${escapeHtml(law[0])}</span><p style="font-size:.82rem;color:var(--muted);margin-top:8px">${escapeHtml(law[2])}</p></div>`)
    .join("") || '<div class="card">No matching law found.</div>';
}

function filterLaws(value) {
  renderLaws(value);
}

function renderRights() {
  document.getElementById("rights-list").innerHTML = LEGAL_RIGHTS.map(right =>
    `<div class="lc" style="border-left-color:${right[0]};background:${right[0]}11"><h3 style="color:${right[0]}">${escapeHtml(right[1])} <span class="sl">${escapeHtml(right[2])}</span></h3><p>${escapeHtml(right[3])}</p></div>`
  ).join("");
}

function renderTemplates() {
  const grid = document.getElementById("tpl-grid");
  grid.innerHTML = "";
  LEGAL_TEMPLATES.forEach((template, index) => {
    const card = document.createElement("button");
    card.className = "tplc";
    card.style.textAlign = "left";
    card.innerHTML = `<div class="tpln">${escapeHtml(template.name)}</div><div class="tpld">${escapeHtml(template.description)}</div>`;
    card.addEventListener("click", () => showTemplate(index));
    grid.appendChild(card);
  });
}

function showTemplate(index) {
  const template = LEGAL_TEMPLATES[index];
  const preview = document.getElementById("tpl-preview");
  preview.innerHTML = '<div class="card"><h2></h2><textarea id="tval" style="height:300px;font-family:Georgia,serif;line-height:1.9"></textarea><button id="copy-template" class="btn bg" style="margin-top:10px">Copy template</button></div>';
  preview.querySelector("h2").textContent = template.name;
  document.getElementById("tval").value = template.text;
  document.getElementById("copy-template").addEventListener("click", async event => {
    await navigator.clipboard.writeText(document.getElementById("tval").value);
    event.currentTarget.textContent = "Copied";
  });
}

document.getElementById("cin")?.addEventListener("keydown", event => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    doChat();
  }
});

renderProcessButtons();
selectProcess("anmeldung");
if (location.hash === "#letter") {
  const letterTab = document.querySelectorAll(".tab")[1];
  showTab("letter", letterTab);
}
