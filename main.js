const TILE_WIDTH = 3900;
const TILE_HEIGHT = 2720;
const MIN_SCALE = 0.44;
const MAX_SCALE = 1.45;
const POSITION_STORAGE_KEY = "primacy.canvas.positions.v2";
const CTA_DELAY_MS = 850;
const CARDS_AFTER_CTA_MS = 1750;
const INTRO_FADE_MS = 1300;
const CARD_REVEAL_MS = 900;
const CARD_STAGGER_MAX_MS = 1500;

const projects = [
  {
    id: "christopher-ireland",
    title: "Christopher Ireland",
    type: "product",
    category: "Furniture",
    issue: "FT. 741",
    age: "2 days ago",
    views: "1,042 views",
    x: -620,
    y: -420,
    w: 920,
    h: 500,
    bg: "oklch(0.83 0.035 78)",
    fg: "oklch(0.18 0.014 250)",
    accent: "oklch(0.57 0.17 153)",
    accent2: "oklch(0.69 0.21 32)",
    tags: ["Agency", "Interior Design", "Clean", "Light", "Minimal"]
  },
  {
    id: "tomorrow-studio",
    title: "Tomorrow Studio",
    type: "minimal",
    category: "Studio",
    issue: "FT. 740",
    age: "3 days ago",
    views: "872 views",
    x: 760,
    y: -420,
    w: 880,
    h: 500,
    bg: "oklch(0.985 0.003 96)",
    fg: "oklch(0.24 0.012 260)",
    accent: "oklch(0.72 0.11 265)",
    accent2: "oklch(0.91 0.01 95)",
    tags: ["Portfolio", "Typography", "Quiet", "Editorial"]
  },
  {
    id: "postevand",
    title: "Postevand",
    type: "hero",
    category: "Publishing",
    issue: "FT. 739",
    age: "4 days ago",
    views: "1,818 views",
    x: 2140,
    y: -420,
    w: 900,
    h: 500,
    bg: "oklch(0.71 0.08 237)",
    fg: "oklch(0.985 0.004 95)",
    accent: "oklch(0.97 0.03 83)",
    accent2: "oklch(0.67 0.18 30)",
    tags: ["Media", "Photography", "Brand", "Motion"]
  },
  {
    id: "residences",
    title: "Residences",
    type: "minimal",
    category: "Architecture",
    issue: "FT. 738",
    age: "5 days ago",
    views: "946 views",
    x: -1040,
    y: 520,
    w: 470,
    h: 500,
    bg: "oklch(0.93 0.012 85)",
    fg: "oklch(0.16 0.009 250)",
    accent: "oklch(0.64 0.12 85)",
    accent2: "oklch(0.87 0.02 80)",
    tags: ["Architecture", "Small Type", "Warm", "CMS"]
  },
  {
    id: "wow-page",
    title: "Wow Page",
    type: "poster",
    category: "Launch",
    issue: "FT. 737",
    age: "6 days ago",
    views: "2,302 views",
    x: -250,
    y: 520,
    w: 920,
    h: 500,
    bg: "oklch(0.88 0.018 230)",
    fg: "oklch(0.31 0.08 151)",
    accent: "oklch(0.34 0.11 151)",
    accent2: "oklch(0.97 0.022 78)",
    tags: ["Playful", "Illustration", "Scrolling", "Agency"]
  },
  {
    id: "visitors",
    title: "Visitors",
    type: "saas",
    category: "Analytics",
    issue: "FT. 736",
    age: "1 week ago",
    views: "2,091 views",
    x: 760,
    y: 520,
    w: 880,
    h: 500,
    bg: "oklch(0.99 0.004 95)",
    fg: "oklch(0.14 0.006 260)",
    accent: "oklch(0.57 0.2 253)",
    accent2: "oklch(0.78 0.11 262)",
    sponsor: true,
    tags: ["SaaS", "Charts", "Product", "Clean"]
  },
  {
    id: "healthy-together",
    title: "Healthy Together",
    type: "dark",
    category: "Healthcare",
    issue: "FT. 735",
    age: "1 week ago",
    views: "1,544 views",
    x: 2140,
    y: 520,
    w: 900,
    h: 500,
    bg: "oklch(0.15 0.022 255)",
    fg: "oklch(0.94 0.01 270)",
    accent: "oklch(0.67 0.27 331)",
    accent2: "oklch(0.58 0.23 265)",
    tags: ["Government", "Gradient", "Dark", "Enterprise"]
  },
  {
    id: "loom",
    title: "Loom",
    type: "saas",
    category: "Collaboration",
    issue: "FT. 734",
    age: "1 week ago",
    views: "1,288 views",
    x: -250,
    y: 1360,
    w: 920,
    h: 500,
    bg: "oklch(0.89 0.05 281)",
    fg: "oklch(0.26 0.09 286)",
    accent: "oklch(0.48 0.19 276)",
    accent2: "oklch(0.94 0.02 105)",
    tags: ["SaaS", "Pastel", "Video", "Marketing"]
  },
  {
    id: "linear-release",
    title: "Linear Release",
    type: "dark",
    category: "Product",
    issue: "FT. 733",
    age: "8 days ago",
    views: "1,784 views",
    x: 760,
    y: 1360,
    w: 880,
    h: 500,
    bg: "oklch(0.1 0.02 270)",
    fg: "oklch(0.94 0.01 270)",
    accent: "oklch(0.55 0.12 279)",
    accent2: "oklch(0.22 0.07 276)",
    tags: ["Product", "Launch", "Dark", "3D"]
  },
  {
    id: "spring-summer",
    title: "Spring Summer",
    type: "poster",
    category: "Fashion",
    issue: "FT. 732",
    age: "9 days ago",
    views: "3,104 views",
    x: 2140,
    y: 1360,
    w: 900,
    h: 500,
    bg: "oklch(0.68 0.055 284)",
    fg: "oklch(0.96 0.17 107)",
    accent: "oklch(0.94 0.18 105)",
    accent2: "oklch(0.98 0.012 95)",
    tags: ["Fashion", "Type", "Bold", "Campaign"]
  },
  {
    id: "archival-lab",
    title: "Archival Lab",
    type: "lab",
    category: "Archive",
    issue: "FT. 731",
    age: "10 days ago",
    views: "704 views",
    x: -1110,
    y: 1320,
    w: 520,
    h: 500,
    bg: "oklch(0.71 0.16 286)",
    fg: "oklch(0.12 0.012 260)",
    accent: "oklch(0.05 0.01 260)",
    accent2: "oklch(0.83 0.19 315)",
    tags: ["Archive", "Experimental", "Type"]
  },
  {
    id: "opal-camera",
    title: "Opal Camera",
    type: "product",
    category: "Hardware",
    issue: "FT. 730",
    age: "11 days ago",
    views: "983 views",
    x: 3250,
    y: -30,
    w: 520,
    h: 500,
    bg: "oklch(0.94 0.009 260)",
    fg: "oklch(0.14 0.006 260)",
    accent: "oklch(0.08 0.012 260)",
    accent2: "oklch(0.79 0.14 235)",
    tags: ["Product", "Minimal", "Hardware", "Store"]
  },
  {
    id: "studio-xxxxi",
    title: "XXXXI",
    type: "gallery",
    category: "Interior",
    issue: "FT. 729",
    age: "12 days ago",
    views: "1,018 views",
    x: 420,
    y: 2160,
    w: 820,
    h: 1160,
    bg: "oklch(0.91 0.01 110)",
    fg: "oklch(0.2 0.01 260)",
    accent: "oklch(0.82 0.055 54)",
    accent2: "oklch(0.56 0.08 30)",
    tags: ["Agency", "Interior Design", "Clean", "Light", "Minimal"]
  },
  {
    id: "materialist",
    title: "Materialist",
    type: "type",
    category: "Editorial",
    issue: "FT. 728",
    age: "2 weeks ago",
    views: "2,741 views",
    x: 1660,
    y: 2230,
    w: 840,
    h: 520,
    bg: "oklch(0.96 0.007 95)",
    fg: "oklch(0.12 0.01 260)",
    accent: "oklch(0.22 0.02 260)",
    accent2: "oklch(0.78 0.05 85)",
    tags: ["Magazine", "Archive", "Art", "Longform"]
  },
  {
    id: "savoirfaire",
    title: "SavoirFaire",
    type: "gallery",
    category: "Hospitality",
    issue: "FT. 727",
    age: "2 weeks ago",
    views: "1,532 views",
    x: 2780,
    y: 2260,
    w: 780,
    h: 620,
    bg: "oklch(0.94 0.015 80)",
    fg: "oklch(0.18 0.01 260)",
    accent: "oklch(0.71 0.09 39)",
    accent2: "oklch(0.62 0.07 153)",
    tags: ["Restaurant", "Gallery", "Warm", "Hospitality"]
  },
  {
    id: "few",
    title: "Few",
    type: "minimal",
    category: "Studio",
    issue: "FT. 726",
    age: "2 weeks ago",
    views: "614 views",
    x: -890,
    y: 2220,
    w: 760,
    h: 520,
    bg: "oklch(0.985 0.004 95)",
    fg: "oklch(0.09 0.006 260)",
    accent: "oklch(0.42 0.13 31)",
    accent2: "oklch(0.87 0.02 80)",
    tags: ["Portfolio", "Minimal", "Studio", "CMS"]
  },
  {
    id: "kons",
    title: "Kons",
    type: "type",
    category: "Brand",
    issue: "FT. 725",
    age: "3 weeks ago",
    views: "806 views",
    x: 3200,
    y: 980,
    w: 760,
    h: 520,
    bg: "oklch(0.96 0.006 95)",
    fg: "oklch(0.12 0.01 260)",
    accent: "oklch(0.55 0.13 222)",
    accent2: "oklch(0.74 0.1 66)",
    tags: ["Brand", "Swiss", "Agency", "Type"]
  },
  {
    id: "desktop-fm",
    title: "Desktop.fm",
    type: "hero",
    category: "Music",
    issue: "FT. 724",
    age: "3 weeks ago",
    views: "957 views",
    x: -1220,
    y: -70,
    w: 520,
    h: 500,
    bg: "oklch(0.81 0.16 323)",
    fg: "oklch(0.73 0.19 280)",
    accent: "oklch(0.97 0.004 95)",
    accent2: "oklch(0.84 0.16 95)",
    tags: ["Music", "Playful", "Color", "Community"]
  }
];

const projectDetails = {
  "christopher-ireland": {
    year: "2025",
    url: "https://christopherireland.com",
    description: "A product storytelling site for a contemporary furniture brand.",
    stat: "31% increase in product page engagement.",
    stat2: "18% reduction in bounce rate.",
    tags: ["Furniture", "Ecommerce", "Brand Platform", "Product Storytelling"]
  },
  "tomorrow-studio": {
    year: "2025",
    url: "https://tomorrowstudio.co",
    description: "A studio portfolio built around restrained typographic storytelling.",
    stat: "24% lift in qualified inquiry starts.",
    stat2: "33% longer average session.",
    tags: ["Creative Studio", "Portfolio", "Brand Identity", "Editorial Web"]
  },
  postevand: {
    year: "2025",
    url: "https://postevand.com",
    description: "A publishing brand site centered on bold visual identity and media.",
    stat: "42% organic traffic increase.",
    stat2: "29% increase in newsletter signups.",
    tags: ["Publishing", "Brand System", "Content Platform", "Campaign"]
  },
  residences: {
    year: "2025",
    description: "An architecture microsite for residential work and booking discovery.",
    stat: "29% increase in booking intent.",
    stat2: "21% more contact form starts.",
    tags: ["Architecture", "Real Estate", "Microsite", "Lead Generation"]
  },
  "wow-page": {
    title: "Primacy Index",
    year: "2025",
    description: "A launch campaign site for a playful digital product reveal.",
    stat: "36% more return visits after launch.",
    stat2: "44% increase in share rate.",
    tags: ["Technology", "Campaign", "Launch", "Digital Product"]
  },
  visitors: {
    year: "2025",
    url: "https://visitors.so",
    description: "A SaaS marketing page for revenue-focused analytics positioning.",
    stat: "42% increase in demo-qualified traffic.",
    stat2: "38% improvement in trial conversion.",
    tags: ["SaaS", "Analytics", "Product Marketing", "Demand Generation"]
  },
  "healthy-together": {
    year: "2025",
    description: "A public-sector platform site for health and human services.",
    stat: "18% improvement in task completion.",
    stat2: "31% increase in return visits.",
    tags: ["Healthcare", "Government", "Enterprise", "Service Design"]
  },
  loom: {
    year: "2025",
    url: "https://loom.com",
    description: "A collaboration product page for async video communication.",
    stat: "27% lift in trial-start conversion.",
    stat2: "22% increase in feature page depth.",
    tags: ["SaaS", "Collaboration", "Product Launch", "B2B Marketing"]
  },
  "linear-release": {
    year: "2025",
    url: "https://linear.app",
    description: "A release campaign site for a software product launch.",
    stat: "34% increase in feature exploration.",
    stat2: "41% increase in changelog subscribers.",
    tags: ["Software", "Product Launch", "Developer Tools", "Brand Campaign"]
  },
  "spring-summer": {
    year: "2025",
    description: "A fashion campaign page built around seasonal collection storytelling.",
    stat: "22% increase in collection click-through.",
    stat2: "17% increase in average order value.",
    tags: ["Fashion", "Campaign", "Ecommerce", "Art Direction"]
  },
  "archival-lab": {
    year: "2025",
    description: "An experimental archive interface for cultural and creative material.",
    stat: "39% longer average browsing sessions.",
    stat2: "27% increase in return visits.",
    tags: ["Arts & Culture", "Archive", "Interactive", "Editorial"]
  },
  "opal-camera": {
    year: "2025",
    url: "https://opalcamera.com",
    description: "A hardware product page for a premium camera launch.",
    stat: "28% increase in preorder intent.",
    stat2: "32% more time on product page.",
    tags: ["Consumer Tech", "Hardware", "Ecommerce", "Product Launch"]
  },
  "studio-xxxxi": {
    year: "2025",
    description: "An interior studio portfolio for spatial design and hospitality work.",
    stat: "33% increase in project inquiries.",
    stat2: "28% more portfolio case views.",
    tags: ["Interior Design", "Hospitality", "Portfolio", "Brand Platform"]
  },
  materialist: {
    year: "2025",
    description: "An editorial platform for contemporary art and design criticism.",
    stat: "41% increase in article depth scrolls.",
    stat2: "35% increase in subscription starts.",
    tags: ["Arts & Culture", "Editorial", "Publishing", "Content Platform"]
  },
  savoirfaire: {
    year: "2025",
    description: "A hospitality site for a restaurant and experience-led brand.",
    stat: "26% increase in reservation starts.",
    stat2: "19% increase in average booking value.",
    tags: ["Hospitality", "Restaurant", "Brand Site", "Experience Design"]
  },
  few: {
    year: "2025",
    description: "A lean studio portfolio for selected creative and digital work.",
    stat: "21% lift in contact-page visits.",
    stat2: "29% increase in case study reads.",
    tags: ["Creative Studio", "Portfolio", "Brand Identity", "Web Design"]
  },
  kons: {
    year: "2025",
    description: "A brand studio site for identity systems and digital campaigns.",
    stat: "30% increase in case study completion.",
    stat2: "25% more RFP submissions.",
    tags: ["Brand Studio", "Identity", "Campaign", "Digital Design"]
  },
  "desktop-fm": {
    year: "2025",
    description: "A community site for music discovery and digital culture.",
    stat: "38% increase in repeat listening sessions.",
    stat2: "44% increase in new registrations.",
    tags: ["Music", "Community", "Culture", "Digital Platform"]
  }
};

const projectFilterTags = new Map(
  projects.map((project) => [
    project.id,
    new Set([project.category, ...project.tags, ...(projectDetails[project.id]?.tags || [])])
  ])
);

const filterTags = [
  "Agency",
  "Architecture",
  "Arts & Culture",
  "Brand Identity",
  "Campaign",
  "Ecommerce",
  "Fashion",
  "Healthcare",
  "Hospitality",
  "Interior Design",
  "Music",
  "Portfolio",
  "Product Launch",
  "SaaS",
  "Technology"
].filter((tag) => Array.from(projectFilterTags.values()).some((tags) => tags.has(tag)));

const world = document.querySelector("#world");
const viewport = document.querySelector("#viewport");
const drawer = document.querySelector("#drawer");
const detail = document.querySelector("#detail");
const intro = document.querySelector("#intro");
const infoButton = document.querySelector("[data-panel='info']");
const wordmark = document.querySelector(".wordmark");
const filterControl = document.querySelector("#filterControl");
const filterToggle = document.querySelector("#filterToggle");
const filterPanel = document.querySelector("#filterPanel");
const backControl = document.querySelector("#backControl");
const backToggle = document.querySelector(".back-toggle");

function initialScale() {
  return MIN_SCALE;
}

function initialCamera() {
  return {
    x: window.innerWidth < 720 ? 56 : 120,
    y: window.innerHeight < 720 ? 80 : 96,
    scale: initialScale()
  };
}

const startCamera = initialCamera();
const introPosition = {
  x: (window.innerWidth / 2 - startCamera.x) / startCamera.scale,
  y: (window.innerHeight / 2 - startCamera.y) / startCamera.scale
};

const state = {
  x: startCamera.x,
  y: startCamera.y,
  scale: startCamera.scale,
  dragging: false,
  cardDrag: null,
  cardMoved: false,
  dragStartX: 0,
  dragStartY: 0,
  startX: 0,
  startY: 0,
  moved: false,
  drawer: null,
  filterTag: null,
  suppressClick: false,
  suppressClickTimer: null
};

let frameRequested = false;
let cardsRequested = false;
let introComplete = false;
let introTimer = null;
let ctaTimer = null;
let shouldAnimateCardRender = false;

function isProjectHash(hash = window.location.hash || "#/") {
  return /^#\/project\/[^/]+/.test(hash);
}

function revealCards(immediate = false) {
  if (introComplete) return;
  introComplete = true;
  if (introTimer) window.clearTimeout(introTimer);
  if (ctaTimer) window.clearTimeout(ctaTimer);

  shouldAnimateCardRender = !immediate;
  document.body.classList.toggle("cards-revealing", shouldAnimateCardRender);
  renderVisibleCards();
  shouldAnimateCardRender = false;

  if (immediate) {
    document.body.classList.add("cta-visible");
    document.body.classList.add("intro-skipped");
    document.body.classList.remove("intro-active");
    return;
  }

  world.getBoundingClientRect();
  document.body.classList.remove("intro-active");
  window.setTimeout(() => {
    document.body.classList.add("intro-done");
  }, INTRO_FADE_MS);
  window.setTimeout(() => {
    document.body.classList.remove("cards-revealing");
    world.querySelectorAll(".is-revealing").forEach((card) => card.classList.remove("is-revealing"));
  }, CARD_STAGGER_MAX_MS + CARD_REVEAL_MS + 250);
}

function revealCta() {
  document.body.classList.add("cta-visible");
  scheduleIntroReveal();
}

function scheduleCtaReveal() {
  if (document.body.classList.contains("cta-visible") || ctaTimer) return;
  ctaTimer = window.setTimeout(revealCta, CTA_DELAY_MS);
}

function scheduleIntroReveal() {
  if (introComplete || introTimer) return;
  introTimer = window.setTimeout(() => revealCards(), CARDS_AFTER_CTA_MS);
}

function loadSavedProjectPositions() {
  try {
    const saved = JSON.parse(localStorage.getItem(POSITION_STORAGE_KEY) || "{}");
    projects.forEach((project) => {
      const position = saved[project.id];
      if (Number.isFinite(position?.x) && Number.isFinite(position?.y)) {
        project.x = position.x;
        project.y = position.y;
      }
    });
  } catch {
    localStorage.removeItem(POSITION_STORAGE_KEY);
  }
}

function saveProjectPositions() {
  const positions = Object.fromEntries(
    projects.map((project) => [project.id, { x: Math.round(project.x), y: Math.round(project.y) }])
  );
  localStorage.setItem(POSITION_STORAGE_KEY, JSON.stringify(positions));
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function cameraIcon() {
  return `
    <span class="screen-badge" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h6A2.5 2.5 0 0 1 15 7.5v1.1l3.7-2.2A.85.85 0 0 1 20 7.1v9.8a.85.85 0 0 1-1.3.7L15 15.4v1.1a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 4 16.5v-9Z" />
      </svg>
    </span>`;
}

function externalLinkIcon() {
  return `
    <svg class="external-link-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 4h6v6" />
      <path d="M20 4 10 14" />
      <path d="M11 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5" />
    </svg>`;
}

function sponsorPill(project) {
  return project.sponsor ? `<span class="sponsor-pill">Sponsor</span>` : "";
}

function screenStyle(project) {
  return [
    `--bg:${project.bg}`,
    `--fg:${project.fg}`,
    `--accent:${project.accent}`,
    `--accent-2:${project.accent2}`
  ].join(";");
}

function renderScreen(project, options = {}) {
  const title = escapeHtml(project.title);
  const category = escapeHtml(project.category);
  const badge = options.badge === false ? "" : cameraIcon();
  const sponsor = sponsorPill(project);
  const style = screenStyle(project);

  if (project.type === "hero") {
    return `
      <div class="screen screen-hero" style="${style}">
        <div class="mini-nav"><span>${title}</span><span class="mini-links"><span>Shop</span><span>Select</span><span>Archive</span></span></div>
        ${badge}
        <div>
          <h3>${title}</h3>
          <p>${category} systems with a homepage that refuses to sit still.</p>
        </div>
        <span class="orbit" aria-hidden="true"></span>
        <span class="ribbon" aria-hidden="true"></span>
      </div>`;
  }

  if (project.type === "minimal") {
    return `
      <div class="screen screen-minimal" style="${style}">
        ${badge}
        <div class="thin-menu">
          <span>${category}</span>
          <span>Studio Index</span>
          <span>Contact</span>
        </div>
        <div class="poem">
          calls for adaptation<br />
          open an opportunity<br />
          confronts injustice<br />
          a fresh start<br />
          <strong>${title}</strong><br />
          makes the difference<br />
          history is written<br />
          the story continues
        </div>
      </div>`;
  }

  if (project.type === "gallery") {
    return `
      <div class="screen screen-gallery" style="${style}">
        <div class="mini-nav"><span>${title}</span><span>+</span></div>
        ${badge}
        <span class="wire" aria-hidden="true"></span>
        <span class="photo-tile photo-a" aria-hidden="true"></span>
        <span class="photo-tile photo-b" aria-hidden="true"></span>
        <span class="photo-tile photo-c" aria-hidden="true"></span>
        <span class="photo-tile photo-d" aria-hidden="true"></span>
        <span class="photo-tile photo-e" aria-hidden="true"></span>
        <span class="photo-tile photo-f" aria-hidden="true"></span>
        <span class="wire" aria-hidden="true"></span>
        <span class="wire" aria-hidden="true"></span>
      </div>`;
  }

  if (project.type === "saas") {
    return `
      <div class="screen screen-saas" style="${style}">
        ${sponsor}
        ${badge}
        <div class="browser-line"></div>
        <div class="hero-copy">
          <h3>${project.sponsor ? "Revenue-first web analytics" : title}</h3>
          <p>${project.sponsor ? "visitors.now" : "Get Loom for Free"}</p>
        </div>
        <div class="chart" aria-hidden="true"></div>
      </div>`;
  }

  if (project.type === "poster") {
    return `
      <div class="screen screen-poster" style="${style}">
        ${badge}
        <span class="little">${category}</span>
        <h3>${title === "Wow Page" ? "We introduce to you a wow page" : title}</h3>
      </div>`;
  }

  if (project.type === "dark") {
    return `
      <div class="screen screen-dark" style="${style}">
        ${badge}
        <span class="planet" aria-hidden="true"></span>
        <div>
          <h3>${title === "Healthy Together" ? "Creating the future of health and human services." : "Built for scale"}</h3>
          <p>${title} turns a dense product story into one calm, cinematic frame.</p>
        </div>
      </div>`;
  }

  if (project.type === "product") {
    return `
      <div class="screen screen-product" style="${style}">
        ${badge}
        <div class="mini-nav"><span>${title}</span><span>Info</span></div>
        <span class="object" aria-hidden="true"></span>
        <h3>${title}</h3>
      </div>`;
  }

  if (project.type === "lab") {
    return `
      <div class="screen screen-lab" style="${style}">
        ${badge}
        <span class="ticker">No. ${escapeHtml(project.issue.replace("FT. ", ""))} / ${category}</span>
        <span class="specimen" aria-hidden="true"></span>
        <h3>${title}</h3>
      </div>`;
  }

  return `
    <div class="screen screen-type" style="${style}">
      ${badge}
      <h3>${title}</h3>
      <p>${category} for bold brands, obsessive studios, and strange little launches.</p>
      <span class="dots" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span></span>
    </div>`;
}

function applyTransform() {
  world.style.transform = `translate3d(${state.x}px, ${state.y}px, 0) scale(${state.scale})`;
  if (intro) {
    const x = state.x + introPosition.x * state.scale;
    const y = state.y + introPosition.y * state.scale;
    intro.style.setProperty("--intro-x", `${x}px`);
    intro.style.setProperty("--intro-y", `${y}px`);
  }
}

function requestFrame() {
  if (frameRequested) return;
  frameRequested = true;
  requestAnimationFrame(() => {
    frameRequested = false;
    applyTransform();
  });
}

function requestCards() {
  if (!introComplete) return;
  if (cardsRequested) return;
  cardsRequested = true;
  requestAnimationFrame(() => {
    cardsRequested = false;
    renderVisibleCards();
  });
}

function getWorldBounds() {
  const pad = 760 / state.scale;
  return {
    left: -state.x / state.scale - pad,
    top: -state.y / state.scale - pad,
    right: (window.innerWidth - state.x) / state.scale + pad,
    bottom: (window.innerHeight - state.y) / state.scale + pad
  };
}

function getIntroExclusionBounds() {
  if (!intro || document.body.classList.contains("detail-open")) return null;

  const rect = intro.getBoundingClientRect();
  const paddingX = 42;
  const paddingY = 30;

  return {
    left: (rect.left - paddingX - state.x) / state.scale,
    top: (rect.top - paddingY - state.y) / state.scale,
    right: (rect.right + paddingX - state.x) / state.scale,
    bottom: (rect.bottom + paddingY - state.y) / state.scale
  };
}

function intersects(a, b) {
  return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
}

function projectMatchesFilter(project) {
  return !state.filterTag || projectFilterTags.get(project.id)?.has(state.filterTag);
}

function renderVisibleCards() {
  const bounds = getWorldBounds();
  const introBounds = getIntroExclusionBounds();
  const viewportCenterX = (window.innerWidth / 2 - state.x) / state.scale;
  const viewportCenterY = (window.innerHeight / 2 - state.y) / state.scale;
  const minTileX = Math.floor(bounds.left / TILE_WIDTH) - 1;
  const maxTileX = Math.floor(bounds.right / TILE_WIDTH) + 1;
  const minTileY = Math.floor(bounds.top / TILE_HEIGHT) - 1;
  const maxTileY = Math.floor(bounds.bottom / TILE_HEIGHT) + 1;
  const fragment = document.createDocumentFragment();

  for (let ty = minTileY; ty <= maxTileY; ty += 1) {
    for (let tx = minTileX; tx <= maxTileX; tx += 1) {
      const stagger = (Math.abs(ty) % 2) * 360;
      for (const project of projects) {
        if (!projectMatchesFilter(project)) continue;

        const x = project.x + tx * TILE_WIDTH + stagger;
        const y = project.y + ty * TILE_HEIGHT;
        const visible =
          x + project.w > bounds.left &&
          x < bounds.right &&
          y + project.h > bounds.top &&
          y < bounds.bottom;

        if (!visible) continue;
        if (
          introBounds &&
          intersects(
            { left: x, top: y, right: x + project.w, bottom: y + project.h },
            introBounds
          )
        ) {
          continue;
        }

        const card = document.createElement("a");
        card.className = shouldAnimateCardRender ? "project-card is-revealing" : "project-card";
        card.href = `#/project/${project.id}`;
        card.dataset.projectId = project.id;
        card.setAttribute("aria-label", `${project.title} detail page`);
        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
        card.style.setProperty("--w", `${project.w}px`);
        card.style.setProperty("--h", `${project.h}px`);
        if (shouldAnimateCardRender) {
          const distance = Math.hypot(x + project.w / 2 - viewportCenterX, y + project.h / 2 - viewportCenterY);
          const projectOffset = (projects.indexOf(project) % 7) * 38;
          const delay = Math.min(CARD_STAGGER_MAX_MS, Math.round(distance * 0.28 + projectOffset));
          card.style.setProperty("--card-delay", `${delay}ms`);
        }
        card.innerHTML = `<div class="screen-frame">${renderScreen(project, { badge: false })}</div>`;
        fragment.append(card);
      }
    }
  }

  world.replaceChildren(fragment);
}

function setFilterOpen(isOpen) {
  if (!filterControl || !filterToggle) return;
  filterControl.classList.toggle("is-open", isOpen);
  filterToggle.setAttribute("aria-expanded", String(isOpen));
}

function renderFilterPanel() {
  if (!filterPanel) return;

  const options = ["All", ...filterTags];
  filterPanel.innerHTML = options
    .map((tag) => {
      const selected = tag === "All" ? !state.filterTag : state.filterTag === tag;
      return `
        <button
          class="filter-option${selected ? " is-selected" : ""}"
          type="button"
          role="option"
          aria-selected="${selected}"
          data-filter-tag="${escapeHtml(tag)}"
        >${escapeHtml(tag)}</button>`;
    })
    .join("");
}

function setFilterTag(tag) {
  state.filterTag = tag === "All" ? null : tag;
  renderFilterPanel();
  requestCards();
}

function suppressNextWorldClick() {
  state.suppressClick = true;
  if (state.suppressClickTimer) window.clearTimeout(state.suppressClickTimer);

  state.suppressClickTimer = window.setTimeout(() => {
    state.suppressClick = false;
    state.cardMoved = false;
    state.moved = false;
    state.suppressClickTimer = null;
  }, 180);
}

function clearSuppressedWorldClick() {
  if (state.suppressClickTimer) window.clearTimeout(state.suppressClickTimer);
  state.suppressClick = false;
  state.cardMoved = false;
  state.moved = false;
  state.suppressClickTimer = null;
}

function zoomAt(nextScale, originX = window.innerWidth / 2, originY = window.innerHeight / 2) {
  const clampedScale = clamp(nextScale, MIN_SCALE, MAX_SCALE);
  const worldX = (originX - state.x) / state.scale;
  const worldY = (originY - state.y) / state.scale;
  state.scale = clampedScale;
  state.x = originX - worldX * state.scale;
  state.y = originY - worldY * state.scale;
  requestFrame();
  requestCards();
}

function closeDrawer() {
  state.drawer = null;
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
}

function openDrawer(kind) {
  state.drawer = kind;
  drawer.innerHTML = renderInfoDrawer();
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");

  const close = drawer.querySelector("[data-close]");
  close?.addEventListener("click", closeDrawer);
}

function renderInfoDrawer() {
  return `
    <div class="drawer-inner">
      <div class="drawer-head">
        <h2>Index</h2>
        <button class="icon-button" type="button" data-close aria-label="Close index">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6.4 5 5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5Z" /></svg>
        </button>
      </div>
      <div class="info-copy">
        <p>Pri&middot;ma&middot;cy / (noun): The state of being first. In the digital world, being first in time means being first in mind. We design digital experiences engineered around this singular law of psychology, ensuring your brand captures the initial, unforgettable interaction that dictates user preference forever.</p>
      </div>
    </div>`;
}

function renderDetail(project) {
  // capture canvas position so we can restore it on return
  try {
    sessionStorage.setItem("primacy.canvas.camera.v1", JSON.stringify({
      x: state.x, y: state.y, scale: state.scale
    }));
  } catch {}

  const detailData = projectDetails[project.id] || {
    year: "2025",
    description: `A digital experience for the ${project.category.toLowerCase()} category.`,
    stat: "32% increase in qualified engagement.",
    tags: [project.category, "Brand Site", "Digital Experience", "Agency Work"]
  };
  const detailTitle = detailData.title || project.title;
  document.title = detailTitle === "Primacy Index" ? "Primacy Index" : `${detailTitle} - Primacy Index`;
  function parseStat(str) {
    const m = str.replace(/\.$/, "").match(/^(\d+%)\s+(.+)$/);
    return { num: m?.[1] ?? "", label: m?.[2] ?? str };
  }
  const s1 = parseStat(detailData.stat);
  const s2 = detailData.stat2 ? parseStat(detailData.stat2) : null;

  const related = projects
    .filter((item) => item.id !== project.id)
    .slice(0, 12)
    .map(
      (item) => `
        <a class="related-card" href="#/project/${item.id}" aria-label="${escapeHtml(item.title)} detail page">
          ${renderScreen(item, { badge: false })}
        </a>`
    )
    .join("");

  const visitButton = detailData.url
    ? `<a class="visit-button" href="${escapeHtml(detailData.url)}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${escapeHtml(detailTitle)} website">Visit ${externalLinkIcon()}</a>`
    : "";

  const statBlockHtml = (s) => `
    <div class="detail-stat-block">
      ${s.num ? `<span class="stat-num">${escapeHtml(s.num)}</span>` : ""}
      <span class="stat-label">${escapeHtml(s.label)}</span>
    </div>`;

  detail.innerHTML = `
    <div class="detail-header">
      <div class="detail-meta-row">
        <span>${escapeHtml(detailData.year)}</span>
      </div>
      <div class="detail-title-row">
        <h1>${escapeHtml(detailTitle)}</h1>
        ${visitButton}
      </div>
    </div>
    <div class="detail-preview-wrap">
      <div class="detail-preview">${renderScreen(project, { badge: false })}</div>
    </div>
    <div class="detail-content">
      <div class="detail-desc-col">
        <p class="detail-description">${escapeHtml(detailData.description)}</p>
        <div class="detail-tags">
          ${detailData.tags.map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`).join("")}
        </div>
      </div>
      <div class="detail-stat-col">
        <div class="detail-stats-grid">
          ${statBlockHtml(s1)}
          ${s2 ? statBlockHtml(s2) : ""}
        </div>
      </div>
    </div>
    <div class="related">${related}</div>`;

  detail.classList.add("is-open");
  detail.setAttribute("aria-hidden", "false");
  document.body.classList.add("detail-open");
  backControl?.classList.add("is-open");
  detail.scrollTop = 0;
}

function hideDetail() {
  document.title = "Primacy Index";
  detail.classList.remove("is-open");
  detail.setAttribute("aria-hidden", "true");
  detail.innerHTML = "";
  document.body.classList.remove("detail-open");
  backControl?.classList.remove("is-open");

  // restore canvas camera (handles direct-URL loads where in-memory state is initial)
  try {
    const saved = JSON.parse(sessionStorage.getItem("primacy.canvas.camera.v1") || "null");
    if (saved && Number.isFinite(saved.x)) {
      state.x = saved.x;
      state.y = saved.y;
      state.scale = clamp(saved.scale, MIN_SCALE, MAX_SCALE);
    }
  } catch {}

  requestFrame();
  requestCards();
}

function resetToIntro() {
  if (detail.classList.contains("is-open")) hideDetail();
  closeDrawer();
  setFilterOpen(false);

  // cancel any in-flight intro timers
  if (introTimer) { window.clearTimeout(introTimer); introTimer = null; }
  if (ctaTimer) { window.clearTimeout(ctaTimer); ctaTimer = null; }

  // restore initial camera
  const cam = initialCamera();
  state.x = cam.x;
  state.y = cam.y;
  state.scale = cam.scale;
  state.filterTag = null;

  // wipe canvas and reset intro state
  world.replaceChildren();
  introComplete = false;

  document.body.classList.remove("intro-done", "intro-skipped", "cta-visible", "cards-revealing");
  document.body.classList.add("intro-active");

  // push back to root without triggering hashchange
  history.replaceState(null, "", "#/");

  renderFilterPanel();
  applyTransform();
  scheduleCtaReveal();
}

function handleRoute() {
  const hash = window.location.hash || "#/";
  const match = hash.match(/^#\/project\/([^/]+)/);

  if (match) {
    const project = projects.find((item) => item.id === match[1]);
    if (project) {
      revealCards(true);
      closeDrawer();
      renderDetail(project);
      return;
    }
  }

  hideDetail();
}

viewport.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();
    if (event.ctrlKey || event.metaKey) {
      const zoom = event.deltaY > 0 ? 0.92 : 1.08;
      zoomAt(state.scale * zoom, event.clientX, event.clientY);
      return;
    }

    state.x -= event.deltaX;
    state.y -= event.deltaY;
    requestFrame();
    requestCards();
  },
  { passive: false }
);

viewport.addEventListener("pointerdown", (event) => {
  if (state.cardDrag) return;
  if (event.button !== 0) return;
  state.dragging = true;
  state.moved = false;
  state.dragStartX = event.clientX;
  state.dragStartY = event.clientY;
  state.startX = state.x;
  state.startY = state.y;
  viewport.classList.add("is-dragging");
  viewport.setPointerCapture(event.pointerId);
});

viewport.addEventListener("pointermove", (event) => {
  if (!state.dragging) return;
  const dx = event.clientX - state.dragStartX;
  const dy = event.clientY - state.dragStartY;
  if (Math.abs(dx) + Math.abs(dy) > 5) state.moved = true;
  state.x = state.startX + dx;
  state.y = state.startY + dy;
  requestFrame();
  requestCards();
});

viewport.addEventListener("pointerup", (event) => {
  const draggedCanvas = state.moved;
  state.dragging = false;
  viewport.classList.remove("is-dragging");
  if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
  if (draggedCanvas) suppressNextWorldClick();
});

world.addEventListener("pointerdown", (event) => {
  const card = event.target.closest(".project-card");
  if (!card || event.button !== 0 || detail.classList.contains("is-open")) return;

  const project = projects.find((item) => item.id === card.dataset.projectId);
  if (!project) return;

  event.preventDefault();
  event.stopPropagation();
  closeDrawer();

  state.cardMoved = false;
  state.cardDrag = {
    card,
    project,
    pointerId: event.pointerId,
    startClientX: event.clientX,
    startClientY: event.clientY,
    startProjectX: project.x,
    startProjectY: project.y,
    startCardX: parseFloat(card.style.getPropertyValue("--x")) || 0,
    startCardY: parseFloat(card.style.getPropertyValue("--y")) || 0
  };

  card.classList.add("is-moving");
  viewport.classList.add("is-moving-card");
  card.setPointerCapture(event.pointerId);
});

world.addEventListener("pointermove", (event) => {
  const drag = state.cardDrag;
  if (!drag || event.pointerId !== drag.pointerId) return;

  const dx = event.clientX - drag.startClientX;
  const dy = event.clientY - drag.startClientY;
  const dxWorld = dx / state.scale;
  const dyWorld = dy / state.scale;

  if (Math.abs(dx) + Math.abs(dy) > 5) state.cardMoved = true;

  drag.project.x = drag.startProjectX + dxWorld;
  drag.project.y = drag.startProjectY + dyWorld;
  drag.card.style.setProperty("--x", `${drag.startCardX + dxWorld}px`);
  drag.card.style.setProperty("--y", `${drag.startCardY + dyWorld}px`);
});

world.addEventListener("pointerup", (event) => {
  const drag = state.cardDrag;
  if (!drag || event.pointerId !== drag.pointerId) return;

  if (drag.card.hasPointerCapture(event.pointerId)) {
    drag.card.releasePointerCapture(event.pointerId);
  }

  drag.card.classList.remove("is-moving");
  viewport.classList.remove("is-moving-card");
  state.cardDrag = null;

  if (state.cardMoved) {
    suppressNextWorldClick();
    saveProjectPositions();
    requestCards();
  }
});

world.addEventListener("pointercancel", (event) => {
  const drag = state.cardDrag;
  if (!drag || event.pointerId !== drag.pointerId) return;

  drag.project.x = drag.startProjectX;
  drag.project.y = drag.startProjectY;
  drag.card.style.setProperty("--x", `${drag.startCardX}px`);
  drag.card.style.setProperty("--y", `${drag.startCardY}px`);
  drag.card.classList.remove("is-moving");
  viewport.classList.remove("is-moving-card");
  state.cardDrag = null;
  state.cardMoved = false;
});

world.addEventListener(
  "click",
  (event) => {
    if (state.suppressClick) {
      event.preventDefault();
      event.stopPropagation();
      clearSuppressedWorldClick();
    }
  },
  true
);

window.addEventListener("keydown", (event) => {
  if (detail.classList.contains("is-open")) {
    if (event.key === "Escape") window.location.hash = "#/";
    return;
  }

  const step = event.shiftKey ? 180 : 80;
  if (event.key === "ArrowUp") state.y += step;
  else if (event.key === "ArrowDown") state.y -= step;
  else if (event.key === "ArrowLeft") state.x += step;
  else if (event.key === "ArrowRight") state.x -= step;
  else if (event.key === "+" || event.key === "=") zoomAt(state.scale * 1.08);
  else if (event.key === "-" || event.key === "_") zoomAt(state.scale * 0.92);
  else if (event.key === "Escape") {
    closeDrawer();
    setFilterOpen(false);
  }
  else return;

  requestFrame();
  requestCards();
});

backToggle?.addEventListener("click", () => {
  window.location.hash = "#/";
});

wordmark?.addEventListener("click", (event) => {
  event.preventDefault();
  resetToIntro();
});

infoButton?.addEventListener("click", () => {
  if (state.drawer === "info") closeDrawer();
  else openDrawer("info");
});

filterToggle?.addEventListener("click", () => {
  setFilterOpen(!filterControl?.classList.contains("is-open"));
});

filterPanel?.addEventListener("click", (event) => {
  const option = event.target.closest("[data-filter-tag]");
  if (!option) return;
  setFilterTag(option.dataset.filterTag || "All");
});

document.addEventListener("pointerdown", (event) => {
  if (!filterControl?.classList.contains("is-open")) return;
  if (filterControl.contains(event.target)) return;
  setFilterOpen(false);
});

window.addEventListener("resize", () => {
  requestFrame();
  requestCards();
});

window.addEventListener("hashchange", handleRoute);

renderFilterPanel();
loadSavedProjectPositions();
applyTransform();
handleRoute();
if (isProjectHash()) revealCards(true);
else {
  scheduleCtaReveal();
}
