(function () {
  "use strict";

  var page = location.pathname.split("/").pop().replace(".html", "") || "module";
  var body = document.body;
  var isLight = Boolean(document.querySelector(".topbar, .hero"));

  var moduleMeta = {
    legal: {
      tags: ["Local keyword preview", "Rights and deadlines", "Letter templates"],
      sources: ["BAMF", "Local authority"],
      note: "Not legal advice"
    },
    jobs: {
      tags: ["Blue Card checker", "Chancenkarte points", "Recognition checklist"],
      sources: ["Make it in Germany", "Bundesagentur fuer Arbeit"],
      note: "Visa rules must be verified"
    },
    housing: {
      tags: ["Tenant rights", "Rental checklist", "Official help"],
      sources: ["Verbraucherzentrale", "Local authority"],
      note: "Local rules may vary"
    },
    doctors: {
      tags: ["Care pathways", "Doctor search", "Urgent help"],
      sources: ["116117", "Bundesgesundheitsministerium"],
      note: "Call 112 in emergencies"
    },
    banking: {
      tags: ["Account checklist", "Tax basics", "Consumer protection"],
      sources: ["Verbraucherzentrale", "Bundeszentralamt fuer Steuern"],
      note: "Compare fees before applying"
    },
    documents: {
      tags: ["Arrival checklist", "Appointment prep", "Document safety"],
      sources: ["BAMF", "Local authority"],
      note: "Bring originals and copies"
    },
    emergency: {
      tags: ["112 and 110", "Urgent care", "Crisis support"],
      sources: ["112", "116117"],
      note: "Use emergency services when needed"
    },
    language: {
      tags: ["Daily phrases", "Pronunciation", "Situation practice"],
      sources: ["BAMF", "VHS"],
      note: "Practical language support"
    },
    education: {
      tags: ["Kita and school", "University", "Recognition"],
      sources: ["KMK", "Local authority"],
      note: "Education rules vary by state"
    },
    transport: {
      tags: ["Public transport", "Deutschlandticket", "Driving"],
      sources: ["Deutsche Bahn", "Local transport authority"],
      note: "Check current operator terms"
    },
    family: {
      tags: ["Kindergeld", "Kita and school", "Family reunification"],
      sources: ["Familienportal", "BAMF"],
      note: "Eligibility depends on your situation"
    },
    costs: {
      tags: ["Monthly budget", "City comparison", "Cost planning"],
      sources: ["Destatis", "Verbraucherzentrale"],
      note: "Estimates vary by household"
    }
  };

  var meta = moduleMeta[page] || {
    tags: ["Practical steps", "Official links", "Mobile friendly"],
    sources: ["Official source"],
    note: "Verify details with the responsible authority"
  };

  body.classList.add("module-product", isLight ? "module-light" : "module-dark");
  body.dataset.module = page;

  var hero = document.querySelector(".ph, .hero > div");
  if (hero && !hero.querySelector(".module-feature-tags")) {
    var tags = document.createElement("div");
    tags.className = "module-feature-tags";
    tags.setAttribute("aria-label", "Module features");
    tags.innerHTML = meta.tags.map(function (tag) {
      return '<span class="module-feature-tag">' + tag + "</span>";
    }).join("");
    hero.appendChild(tags);

    var sources = document.createElement("div");
    sources.className = "module-source-row";
    sources.setAttribute("aria-label", "Trust and source information");
    sources.innerHTML = meta.sources.map(function (source) {
      return '<span class="module-source-badge">Verified source: ' + source + "</span>";
    }).join("") +
      '<span class="module-status-badge">Last checked: June 2026</span>' +
      '<span class="module-status-badge">' + meta.note + "</span>";
    hero.appendChild(sources);
  }

  var tabList = document.querySelector(".tabs");
  if (!tabList && page === "jobs") {
    tabList = document.querySelector(".ph + div");
  }

  if (tabList) {
    tabList.classList.add("module-action-tabs");
    tabList.setAttribute("role", "tablist");
    var activeTab = tabList.querySelector(".active");
    tabList.querySelectorAll("button").forEach(function (button, index) {
      button.setAttribute("role", "tab");
      button.setAttribute("aria-selected", activeTab ? (button === activeTab ? "true" : "false") : (index === 0 ? "true" : "false"));
      button.addEventListener("click", function () {
        tabList.querySelectorAll("button").forEach(function (item) {
          item.setAttribute("aria-selected", item === button ? "true" : "false");
        });
      });
    });
  }

  var content = document.querySelector(".con, .shell");
  if (content) {
    content.classList.add("module-product-content");
  }

  document.querySelectorAll(".wb").forEach(function (alert) {
    alert.classList.add("module-alert", "module-alert--urgent");
  });

  document.querySelectorAll(".ib").forEach(function (alert) {
    alert.classList.add("module-alert", "module-alert--info");
  });

  document.querySelectorAll(".notice").forEach(function (alert) {
    alert.classList.add("module-alert", alert.classList.contains("warning") ? "module-alert--urgent" : "module-alert--info");
  });

  document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
    var rel = (link.getAttribute("rel") || "").split(/\s+/);
    if (rel.indexOf("noopener") === -1) rel.push("noopener");
    link.setAttribute("rel", rel.filter(Boolean).join(" "));
  });
}());
