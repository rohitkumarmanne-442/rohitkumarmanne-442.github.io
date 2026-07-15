/* =========================================================
   Rohit Kumar Manne — Portfolio + AI Agent
   ========================================================= */

/* ---------- 0. Resume data (single source of truth) ---------- */
const DATA = {
  name: "Rohit Kumar Manne",
  title: "Agentic AI Engineer",
  location: "Memphis, TN (Open to Relocate)",
  email: "rohitkumarmanne1@gmail.com",
  phone: "(937) 270-5164",
  linkedin: "https://linkedin.com/in/rohitkumarmanne",
  github: "https://github.com/rohitkumarmanne-442",
  githubUser: "rohitkumarmanne-442",

  roles: ["Agentic AI Engineer", "RAG & LLM Specialist", "MLOps Engineer", "GenAI Builder"],

  education: [
    { school: "University of Dayton", deg: "M.S. Computer Science", gpa: "3.3", when: "Aug 2023 – May 2025", where: "Dayton, OH" },
    { school: "Vel Tech University", deg: "B.Tech, Electronics & Communication Engineering", gpa: "8.1", when: "Jul 2017 – May 2021", where: "Chennai, TN" },
  ],

  skills: [
    { title: "Languages", items: ["Python (Expert)", "SQL", "Java", "JavaScript", "Bash/Shell"] },
    { title: "GenAI & Agentic AI", items: ["LangChain", "LangGraph", "LlamaIndex", "CrewAI", "AutoGen", "DSPy", "MCP", "Function Calling", "ReAct", "Multi-Agent Orchestration", "Advanced RAG", "GraphRAG", "Agentic RAG", "Prompt Engineering", "Guardrails", "RAGAS", "TruLens", "LangSmith"] },
    { title: "LLMs & Fine-Tuning", items: ["OpenAI GPT-4o", "Anthropic Claude (Opus/Sonnet)", "Llama 3", "Mistral", "Hugging Face Transformers", "LoRA", "QLoRA", "PEFT", "RLHF", "Synthetic Data"] },
    { title: "ML & Deep Learning", items: ["PyTorch", "TensorFlow", "Scikit-Learn", "XGBoost", "LightGBM", "Pandas", "NumPy", "spaCy", "Feature Engineering", "A/B Testing", "Model Monitoring", "Drift Detection"] },
    { title: "Cloud & MLOps", items: ["AWS (SageMaker, Bedrock, EKS, Lambda, S3)", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "MLflow", "Airflow", "Ray", "vLLM", "Ollama"] },
    { title: "Data & Serving", items: ["Pinecone", "ChromaDB", "FAISS", "Qdrant", "Neo4j", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Kafka", "FastAPI", "Flask", "Pydantic", "React Vite", "Streamlit"] },
  ],

  experience: [
    {
      role: "Agentic AI Engineer · QE", company: "Hilton Worldwide", where: "Memphis, TN", when: "Jul 2025 – May 2026",
      points: [
        "Architected 'Hilton QE Agent', a production multi-agent system on Amazon Bedrock (Claude Opus 4.6) using LangChain and CrewAI, with a React Vite/FastAPI interface — automating test-scenario generation across 12+ QE teams and cutting manual effort by 70%.",
        "Engineered an Agentic RAG pipeline with Pinecone (hybrid dense + sparse retrieval), Redis memory, and Splunk/Confluence tool integrations for autonomous root-cause diagnosis, cutting MTTR by 50%.",
        "Designed tool-use and function-calling workflows (Create/Modify/Cancel) plus multi-agent orchestration for employee onboarding via LangGraph-style planning — saving 20+ hours per hire and raising autonomous task success to 92%.",
        "Implemented LLM evaluation pipelines with RAGAS and TruLens, enforcing safety guardrails and cutting hallucinations from 14% to under 5% in production.",
      ],
    },
    {
      role: "Generative AI Engineer", company: "HealthKard", where: "Remote", when: "Jul 2024 – Jun 2025",
      points: [
        "Developed the 'Health Assistant' chatbot using LangChain with OpenAI GPT-4o and Anthropic Claude, applying multi-step reasoning to guide users from symptom analysis to doctor discovery across 5K+ providers.",
        "Built a production RAG architecture with ChromaDB embeddings, semantic chunking, and conversation memory, deployed via FastAPI on AWS with Docker.",
        "Fine-tuned LLMs with LoRA on synthetic data to translate complex insurance policies into plain language, with guardrails and RAGAS evaluation to monitor hallucinations and bias.",
      ],
    },
    {
      role: "AI & ML Engineer", company: "Capgemini", where: "Hyderabad, India · Hybrid", when: "Jul 2022 – Jul 2023",
      points: [
        "Owned end-to-end development of a real-time fraud-detection microservice for the AAA Auto Club Group — a Flask REST API in Docker now handling 10,000+ claims a day and cutting time-to-flag fraudulent payouts by 40%.",
        "Built an NLP pipeline with spaCy and Hugging Face Transformers to analyze unstructured customer feedback, automating issue categorization at 92% accuracy and helping support prioritize responses 30% more effectively.",
        "Built and maintained the full MLOps CI/CD pipeline (Jenkins, Docker, Kubernetes on AWS), automating everything from model validation to canary deployments — slashing manual deployment effort 80% and ensuring 99.9% uptime.",
        "Set up production model monitoring with Prometheus and Grafana, implementing Kullback-Leibler (KL) divergence for data-drift detection that auto-triggered retraining via AWS SageMaker.",
      ],
    },
    {
      role: "Junior Data Scientist", company: "Capgemini", where: "Hyderabad, India · Hybrid", when: "Jun 2021 – Jul 2022",
      points: [
        "Led development of a new insurance fraud model for AAA — an XGBoost model that significantly outperformed Logistic Regression and Random Forest baselines, hitting 88% accuracy and 0.94 AUC on suspicious claims.",
        "Drove the model's gains through deep feature engineering — mining customer and policy data to craft new interaction terms and apply one-hot encoding, boosting precision by 15%.",
        "Kicked off the project with thorough exploratory data analysis (EDA) using Pandas Profiling and Seaborn; the insights shaped the feature-selection strategy and guided the entire modeling process.",
        "Partnered with the MLOps team to define the model's API contract, aligning on inputs and outputs to ensure a smooth deployment.",
      ],
    },
    {
      role: "Data Analyst Intern", company: "Capgemini", where: "Remote", when: "Jan 2021 – May 2021",
      points: [
        "Designed and built a Patient Readmission Risk Dashboard from scratch in Tableau, giving clinicians a single source of truth to monitor at-risk patient groups from historical EHR data.",
        "Built a dynamic filter letting doctors segment patient data in real time by diagnosis (ICD-10 codes) or demographics to spot trends instantly.",
        "Automated tracking of critical KPIs (Average Length of Stay, 30-Day Readmission Rate), saving the clinical analytics team 15+ hours of manual work each week.",
        "Wrote Python scripts to clean and standardize 50,000+ patient records, improving the accuracy and reliability of the data feeding the dashboard.",
      ],
    },
  ],

  projects: [
    {
      featured: true,
      tag: "Flagship", status: "Live · Building in progress",
      title: "QDev Orchestration",
      tagline: "Agentic SDLC platform — drives stories Dev → QE → Test → Stage → Prod with human-in-the-loop gates.",
      desc: "An end-to-end SDLC orchestration platform that drives stories through Dev → QE → Test → Stage → Prod via 6 specialized Claude agents (Manager, Dev, QE, Code Review, E2E, Splunk→Bug) gated by 3 HITL checkpoints, with a state-machine bug-fix loop that retries failures using prior context. A hybrid model-routing layer (Claude Sonnet 4.6 by default, Opus 4.7 for code-gen & principal-engineer reviews) streams live state over WebSockets to a React/Vite/Tailwind + Monaco UI, wired to 8+ integrations with 30s health polling.",
      highlights: [
        ["🧠", "6 specialized Claude agents", "Manager, Dev, QE, Code Review, E2E & Splunk→Bug — hybrid Sonnet 4.6 / Opus 4.7 routing"],
        ["🚦", "3 HITL approval gates", "Human checkpoints across Dev → QE → Test → Stage → Prod"],
        ["🔁", "State-machine bug loop", "Retries failures using prior context until they pass"],
        ["🔌", "8+ live integrations", "Jira, GitHub, Jenkins, Splunk, Docker, Anthropic — WebSocket state, 30s health polling"],
      ],
      agents: [["Manager","Sonnet"],["Dev · Code-Gen","Opus"],["QE · Test Cases","Sonnet"],["Code Review","Opus"],["E2E Automation","Sonnet"],["Splunk → Bug","Sonnet"]],
      stack: ["TypeScript", "React Vite", "Tailwind", "FastAPI", "Python", "WebSockets", "Monaco", "Claude Opus/Sonnet", "Vercel", "Render"],
      live: "https://www.qdevorchestration-ai.com/",
      api: "https://qd-orchestration-api.onrender.com/docs",
      repo: "https://github.com/rohitkumarmanne-442/Quality-Dev-Orchestration-AI",
      when: "May 2026 – Present",
    },
    {
      tag: "Open Source · npm · GitHub Marketplace",
      title: "Foreman — Review Inbox for AI Agents",
      tagline: "Every AI-agent coding session becomes a risk-ranked, cryptographically-provable review card — 100% local.",
      desc: "A zero-dependency TypeScript/Node platform that turns every AI-agent session into a risk-ranked review card you work like email. A deterministic risk engine flags secrets, mass rewrites, destructive commands and unverified claims; an ed25519-signed, hash-chained MCP receipt proxy (stdio + HTTP/SSE) proves what tools each agent actually ran and catches tool-list 'rug pulls'. Ships a single-file interactive UI (force-directed 'Blast Radius' impact graph, Insights dashboard, Ctrl+K palette), a GitHub Action with SARIF export for CI enforcement, and a feedback loop that injects human review notes into the agent's next run. v1.0.0 — 36/36 tests, zero external LLM calls.",
      highlights: [
        ["🛡️", "Deterministic risk engine", "Secrets, mass rewrites, destructive commands & unverified claims — ranked by severity"],
        ["🔏", "Signed MCP receipts", "ed25519, hash-chained proof of every tool call — stdio + HTTP/SSE, rug-pull detection"],
        ["🕸️", "Blast Radius graph", "A live force-directed map of what AI is touching across your codebase"],
        ["✅", "CI gate + SARIF", "Blocks risky PRs; findings post as native GitHub code-scanning alerts"],
      ],
      stack: ["TypeScript", "Node.js", "MCP", "ed25519", "GitHub Actions", "SARIF"],
      live: "https://www.npmjs.com/package/foremanjs",
      repo: "https://github.com/rohitkumarmanne-442/Foreman",
      when: "Jul 2026 – Present",
    },
    {
      tag: "Agentic RAG · Live Demo", title: "Advanced Agentic RAG for SEC Filings",
      desc: "Production Agentic RAG over SEC 10-K/10-Q filings using LlamaIndex, Groq Llama-3.1-70B, and planner-executor agents with hybrid search (dense all-MiniLM-L6-v2 + sparse BM25 via RRF, k=60) — 95% context precision, <5% hallucination (RAGAS), and a 23% retrieval lift. Deployed as an interactive Streamlit app.",
      stack: ["Python", "LlamaIndex", "ChromaDB", "Groq", "BM25", "RAGAS", "Streamlit"], when: "Apr 2026 – May 2026",
      live: "https://advanced-rag-pipeline-app-rohit.streamlit.app",
    },
    {
      tag: "Generative · Vision", title: "Face-Generation-Diffusion",
      desc: "Custom diffusion model achieving 85% FID-score improvement, trained on 100,000+ images. Optimized pipeline for 70% faster inference via mixed-precision training and gradient checkpointing.",
      stack: ["PyTorch", "HuggingFace", "CUDA"], when: "Sep 2024 – Dec 2024",
      repo: "https://github.com/rohitkumarmanne-442/Face-Generation-Diffusion",
    },
  ],

  certs: ["Oracle Certified OCI Generative AI Professional (2025)", "OCI Data Science Professional (2025)"],
  achievements: [
    "Winner, Smart India Hackathon '20 — ML Crime Mapping",
    "Winner, CodeFest '21 — Disaster Management",
    "2nd Place, Bonjour India '17 — French Embassy Robotics Competition",
  ],
};

/* ---------- 1. Inject content ---------- */
function buildSkills() {
  document.getElementById("skillsGrid").innerHTML = DATA.skills.map((s, i) => `
    <div class="skill-row glass reveal">
      <div class="sr-head">
        <span class="sr-index">${String(i + 1).padStart(2, "0")}</span>
        <h3>${s.title}</h3>
        <span class="sr-count">${s.items.length} tools</span>
      </div>
      <div class="chips">${s.items.map(it => `<span class="chip">${it}</span>`).join("")}</div>
    </div>`).join("");
}
function buildTimeline() {
  document.getElementById("timeline").innerHTML = DATA.experience.map(e => `
    <div class="tl-item reveal">
      <div class="tl-card glass">
        <div class="tl-top"><span class="tl-role">${e.role}</span><span class="tl-date">${e.when}</span></div>
        <div class="tl-company">${e.company} · ${e.where}</div>
        <ul>${e.points.map(p => `<li>${p}</li>`).join("")}</ul>
      </div>
    </div>`).join("");
}
function buildProjects() {
  // Sticky-stacking cards (featured first) — scaled on scroll by fx.js
  const ordered = [DATA.projects.find(p => p.featured), ...DATA.projects.filter(p => !p.featured)].filter(Boolean);

  document.getElementById("projectsGrid").innerHTML = ordered.map((p, i) => `
    <div class="stack-item">
      <article class="stack-card">
        <div class="sc-top">
          <span class="sc-num">${String(i + 1).padStart(2, "0")}</span>
          <div class="sc-meta">
            <span class="sc-tag">${p.featured ? "★ " : ""}${p.tag}</span>
            <h3 class="sc-name">${p.title}</h3>
            <span class="sc-when">${p.when}${p.featured ? " · ⚙ Building in progress" : ""}</span>
          </div>
          <div class="sc-actions">
            ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener" class="ghost-btn">Live Project</a>` : ""}
            ${p.api ? `<a href="${p.api}" target="_blank" rel="noopener" class="ghost-btn">API Docs</a>` : ""}
            ${p.repo && !p.featured ? `<a href="${p.repo}" target="_blank" rel="noopener" class="ghost-btn">Code</a>` : ""}
            ${p.featured ? `<span class="sc-private" title="Source is a private repository">🔒 Private repo</span>` : ""}
          </div>
        </div>
        ${p.tagline ? `<p class="sc-tagline">${p.tagline}</p>` : ""}
        <p class="sc-desc">${p.desc}</p>
        ${p.highlights ? `
          <div class="sc-highlights">
            ${p.highlights.map(([ic, t, d]) => `
              <div class="sc-hl"><span class="sc-hl-ico">${ic}</span><div><strong>${t}</strong><span>${d}</span></div></div>`).join("")}
          </div>` : ""}
        ${p.agents ? `
          <div class="sc-agents">
            ${p.agents.map(([name, model]) => `
              <span class="sc-agent"><i class="sc-agent-dot"></i>${name} <em class="sc-agent-model ${model.toLowerCase()}">${model}</em></span>`).join("")}
          </div>
          <div class="sc-pipeline"><span>Dev</span><i>›</i><span>QE</span><i>›</i><span>Test</span><i>›</i><span>Stage</span><i>›</i><span>Prod</span></div>` : ""}
        <div class="sc-chips">${p.stack.map(s => `<span class="chip">${s}</span>`).join("")}</div>
      </article>
    </div>`).join("");
}
function buildLogoLoop() {
  // Real brand logos via simpleicons CDN (auto brand color). slug -> label.
  // Two scroll-driven marquee rows (translated on scroll by fx.js).
  const logos = [
    ["python", "Python"], ["pytorch", "PyTorch"], ["tensorflow", "TensorFlow"],
    ["langchain", "LangChain"], ["huggingface", "Hugging Face"], ["openai", "OpenAI"],
    ["amazonwebservices", "AWS"], ["docker", "Docker"], ["kubernetes", "Kubernetes"],
    ["fastapi", "FastAPI"], ["react", "React"], ["redis", "Redis"],
    ["mongodb", "MongoDB"], ["postgresql", "PostgreSQL"], ["elasticsearch", "Elastic"],
    ["neo4j", "Neo4j"], ["pandas", "Pandas"], ["numpy", "NumPy"],
    ["scikitlearn", "scikit-learn"], ["streamlit", "Streamlit"], ["terraform", "Terraform"],
    ["jenkins", "Jenkins"], ["ollama", "Ollama"], ["googlecolab", "Colab"],
  ];
  const tile = ([slug, label]) =>
    `<a class="mq-tile" href="#skills" title="${label}">
       <img src="https://cdn.simpleicons.org/${slug}" alt="${label}" loading="lazy"
            onerror="this.style.display='none'" />
       <span>${label}</span>
     </a>`;
  const half = Math.ceil(logos.length / 2);
  const row1 = logos.slice(0, half).map(tile).join("");
  const row2 = logos.slice(half).map(tile).join("");
  // tripled for seamless coverage while rows translate on scroll
  document.getElementById("marqueeRow1").innerHTML = row1 + row1 + row1;
  document.getElementById("marqueeRow2").innerHTML = row2 + row2 + row2;
}
function buildRecognition() {
  const cards = [
    { icon: "🎖️", kind: "Certification", h: "OCI Generative AI Professional", p: "Oracle Certified, 2025." },
    { icon: "📊", kind: "Certification", h: "OCI Data Science Professional", p: "Oracle Certified, 2025." },
    { icon: "🏆", kind: "Hackathon · Winner", h: "Smart India Hackathon '20", p: "ML-based Crime Mapping solution." },
    { icon: "🥇", kind: "Hackathon · Winner", h: "CodeFest '21", p: "Disaster Management platform." },
    { icon: "🥈", kind: "Award · 2nd Place", h: "Bonjour India '17", p: "French Embassy Robotics Competition." },
    { icon: "✦", kind: "Let's talk", h: "Ready for the next build", p: "Open to Agentic AI / GenAI / ML roles — say hi via the chat or contact section." },
  ];
  document.getElementById("horizonTrack").innerHTML = cards.map(c => `
    <div class="horizon-card glass">
      <span class="hc-icon">${c.icon}</span>
      <span class="hc-kind">${c.kind}</span>
      <h3>${c.h}</h3>
      <p>${c.p}</p>
    </div>`).join("");
}
buildSkills(); buildTimeline(); buildProjects(); buildLogoLoop(); buildRecognition();
document.getElementById("year").textContent = new Date().getFullYear();

/* Word-by-word reveal: wrap words in each section title */
document.querySelectorAll(".section-title, .horizon-head .section-title").forEach(title => {
  if (title.dataset.split) return;
  title.dataset.split = "1";
  const frag = document.createDocumentFragment();
  title.childNodes.forEach(node => {
    if (node.nodeType === 3) { // text node
      node.textContent.split(/(\s+)/).forEach(part => {
        if (part.trim() === "") { frag.appendChild(document.createTextNode(part)); }
        else { const s = document.createElement("span"); s.className = "word"; s.textContent = part; frag.appendChild(s); }
      });
    } else if (node.classList && node.classList.contains("gradient-text")) {
      const s = document.createElement("span"); s.className = "word gradient-text"; s.textContent = node.textContent; frag.appendChild(s);
    } else { frag.appendChild(node.cloneNode(true)); }
  });
  title.innerHTML = ""; title.appendChild(frag);
});
const wordIO = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    const words = en.target.querySelectorAll(".word");
    words.forEach((w, i) => setTimeout(() => w.classList.add("in"), i * 70));
    wordIO.unobserve(en.target);
  });
}, { threshold: 0.4 });
document.querySelectorAll(".section-title").forEach(t => wordIO.observe(t));

/* ---------- 2. Live GitHub repos ---------- */
// Curated descriptions so EVERY project shows a meaningful summary (used when
// the GitHub description is empty, or to improve a thin one). Keyed by repo name.
const REPO_DESCRIPTIONS = {
  "Advanced-RAG-Pipeline-for-Industry-Specific-Data": "Production-grade Retrieval-Augmented Generation pipeline for industry-specific corpora — semantic chunking, hybrid dense + sparse retrieval, and grounded, low-hallucination answers.",
  "ShopSmart-AI-Sprint": "An AI-powered smart shopping assistant built during a rapid sprint — LLM-driven product discovery, comparison, and recommendations.",
  "Quality-Dev-Orchestration-AI": "Agentic SDLC + SDET platform: a multi-agent pipeline (FastAPI + React) that orchestrates quality engineering with human-in-the-loop gates.",
  "Face-Generation-Diffusion": "PyTorch diffusion model for generating and blending facial features across demographics using the FairFace dataset — 85% FID improvement.",
  "healthkard-frontend": "React frontend for HealthKard — a healthcare subscription platform offering zero-fee doctor consultations across a trusted hospital network.",
  "healthkard-backend": "Backend services for HealthKard's healthcare subscription platform — APIs for consultations, subscriptions, and hospital network management.",
  "HOME360-A-Home-Services-Company": "Python/Django home-services booking platform with a React frontend — real-time scheduling, payments, and multi-role user management.",
};
function repoDescription(r) {
  return REPO_DESCRIPTIONS[r.name] || r.description ||
    `A ${r.language || "software"} project by Rohit — explore the code and docs on GitHub.`;
}
async function loadRepos() {
  const grid = document.getElementById("reposGrid");
  const langColors = { Python:"#3776AB", JavaScript:"#f1e05a", "Jupyter Notebook":"#DA5B0B", HTML:"#e34c26", TypeScript:"#3178c6", Java:"#b07219", CSS:"#563d7c", Dockerfile:"#2496ED" };
  try {
    const res = await fetch(`https://api.github.com/users/${DATA.githubUser}/repos?sort=updated&per_page=100`);
    if (!res.ok) throw new Error("GitHub API");
    let repos = await res.json();
    repos = repos
      .filter(r => !r.fork && r.name.toLowerCase() !== DATA.githubUser.toLowerCase()) // drop profile repo
      .sort((a,b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at))
      .slice(0, 6);
    if (!repos.length) { grid.innerHTML = `<div class="repo-error glass">No public repositories found yet. <a href="${DATA.github}" target="_blank" style="color:var(--c2)">Visit GitHub ↗</a></div>`; return; }
    grid.innerHTML = repos.map(r => `
      <a href="${r.html_url}" target="_blank" rel="noopener" class="repo-card glass reveal">
        <span class="repo-name">${r.name}</span>
        <span class="repo-desc">${repoDescription(r)}</span>
        <div class="repo-meta">
          ${r.language ? `<span class="repo-lang"><span class="lang-dot" style="background:${langColors[r.language]||'#7c5cff'}"></span>${r.language}</span>` : ""}
          <span>★ ${r.stargazers_count}</span>
          <span>⑂ ${r.forks_count}</span>
        </div>
      </a>`).join("");
    revealObserve();
  } catch (e) {
    // Fallback: render curated projects so the section is never empty
    const fallback = Object.entries(REPO_DESCRIPTIONS).filter(([n]) => n !== "Quality-Dev-Orchestration-AI").slice(0, 6);
    grid.innerHTML = fallback.map(([name, desc]) => `
      <a href="https://github.com/${DATA.githubUser}/${name}" target="_blank" rel="noopener" class="repo-card glass reveal">
        <span class="repo-name">${name}</span>
        <span class="repo-desc">${desc}</span>
        <div class="repo-meta"><span>↗ View on GitHub</span></div>
      </a>`).join("");
    revealObserve();
  }
}
loadRepos();

/* ---------- 3. Scroll effects ---------- */
const nav = document.getElementById("nav");
const progress = document.getElementById("scrollProgress");
const sections = [...document.querySelectorAll("section[id], header[id]")];
const navLinks = [...document.querySelectorAll(".nav-link")];
// only the sections that have a nav link — keeps the active item (and the
// sliding indicator) stable while scrolling past in-between sections
const navTargets = new Set(navLinks.map(l => l.getAttribute("href").slice(1)));
const spySections = sections.filter(s => navTargets.has(s.id));

let navTicking = false;
window.addEventListener("scroll", () => {
  if (navTicking) return;
  navTicking = true;
  requestAnimationFrame(() => {
    navTicking = false;
    const st = window.scrollY;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (st / h * 100) + "%";
    nav.classList.toggle("scrolled", st > 30);

    let current = "";
    spySections.forEach(s => { if (st >= s.offsetTop - 140) current = s.id; });
    navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + current));
  });
}, { passive: true });

/* ---------- Unified scroll-driven effects (rAF, performant) ---------- */
const heroInner = document.querySelector(".hero-inner");
const horizon = document.getElementById("recognition");
const horizonTrack = document.getElementById("horizonTrack");
const horizonBar = document.getElementById("horizonBar");
const speedEls = [...document.querySelectorAll("[data-speed]")];

let lastScroll = window.scrollY, ticking = false;

function onScrollFrame() {
  const y = window.scrollY;
  lastScroll = y;

  /* 1. Hero parallax — content drifts up, fades & scales as you leave */
  if (heroInner) {
    const p = Math.min(1, y / window.innerHeight);
    heroInner.style.transform = `translateY(${y * 0.35}px) scale(${1 - p * 0.08})`;
    heroInner.style.opacity = String(1 - p * 1.1);
  }

  /* 2. Horizontal pinned scroll — translate the track as section passes */
  if (horizon && horizonTrack) {
    const rect = horizon.getBoundingClientRect();
    const total = horizon.offsetHeight - window.innerHeight;
    const progress = Math.min(1, Math.max(0, -rect.top / total));
    const maxX = horizonTrack.scrollWidth - window.innerWidth + 48;
    if (maxX > 0) horizonTrack.style.transform = `translateX(${-progress * maxX}px)`;
    if (horizonBar) horizonBar.style.width = (progress * 100) + "%";
  }

  /* 3. Generic parallax for data-speed elements */
  speedEls.forEach(el => {
    const speed = parseFloat(el.dataset.speed);
    const mid = el.getBoundingClientRect().top + window.scrollY + el.offsetHeight / 2;
    const offset = (window.scrollY + window.innerHeight / 2 - mid) * speed;
    el.style.transform = `translateY(${offset}px)`;
  });

  ticking = false;
}
window.addEventListener("scroll", () => {
  if (!ticking) { ticking = true; requestAnimationFrame(onScrollFrame); }
}, { passive: true });
onScrollFrame();

/* Reveal on scroll */
let revealIO;
function revealObserve() {
  if (!revealIO) {
    revealIO = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); revealIO.unobserve(en.target); } });
    }, { threshold: 0.12 });
  }
  document.querySelectorAll(".reveal:not(.in)").forEach(el => revealIO.observe(el));
}
revealObserve();

/* Animated counters */
const statIO = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target, target = +el.dataset.target;
    let n = 0; const step = Math.max(1, target / 40);
    const t = setInterval(() => { n += step; if (n >= target) { n = target; clearInterval(t); } el.textContent = Math.floor(n); }, 28);
    statIO.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll(".stat-num").forEach(el => statIO.observe(el));

/* Cursor glow + parallax blobs */
const glow = document.getElementById("cursorGlow");
const blobs = document.querySelectorAll(".blob");
window.addEventListener("mousemove", (e) => {
  glow.style.opacity = "1";
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
  const cx = (e.clientX / window.innerWidth - 0.5), cy = (e.clientY / window.innerHeight - 0.5);
  blobs.forEach((b, i) => { const f = (i + 1) * 14; b.style.marginLeft = cx * f + "px"; b.style.marginTop = cy * f + "px"; });
});

/* Project card spotlight */
document.addEventListener("mousemove", (e) => {
  const card = e.target.closest(".project-card");
  if (!card) return;
  const r = card.getBoundingClientRect();
  card.style.setProperty("--mx", (e.clientX - r.left) + "px");
  card.style.setProperty("--my", (e.clientY - r.top) + "px");
});

/* RotatingText — staggered character rotation (vanilla, React Bits style) */
const rotatingEl = document.getElementById("rotatingText");
(function rotatingText() {
  const phrases = ["Agentic AI", "RAG Pipelines", "Autonomous Agents", "GenAI Apps", "ML Systems"];
  let idx = 0;
  const STAGGER = 28, ENTER = 500, HOLD = 1700;

  function render(text) {
    rotatingEl.innerHTML = "";
    const chars = [...text];
    chars.forEach((ch, i) => {
      const s = document.createElement("span");
      s.className = "rt-char";
      s.textContent = ch === " " ? " " : ch;
      rotatingEl.appendChild(s);
      // stagger IN from last char (staggerFrom: "last")
      setTimeout(() => s.classList.add("in"), (chars.length - 1 - i) * STAGGER);
    });
    return chars.length;
  }
  function cycle() {
    const text = phrases[idx];
    const n = render(text);
    const total = n * STAGGER + ENTER;
    setTimeout(() => {
      // stagger OUT
      [...rotatingEl.children].forEach((s, i) => setTimeout(() => { s.classList.remove("in"); s.classList.add("out"); }, i * STAGGER));
      setTimeout(() => { idx = (idx + 1) % phrases.length; cycle(); }, n * STAGGER + 400);
    }, total + HOLD);
  }
  cycle();
})();

/* Mobile menu */
const burger = document.getElementById("navBurger");
const links = document.querySelector(".nav-links");
burger.addEventListener("click", () => links.classList.toggle("open"));
navLinks.forEach(l => l.addEventListener("click", () => links.classList.remove("open")));

/* =========================================================
   4. AI AGENT  — answers strictly from resume data
   ========================================================= */
const chatFab = document.getElementById("chatFab");
const chatWindow = document.getElementById("chatWindow");
const chatClose = document.getElementById("chatClose");
const chatBody = document.getElementById("chatBody");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatSuggest = document.getElementById("chatSuggestions");
const navChatBtn = document.getElementById("navChatBtn");
const chatClear = document.getElementById("chatClear");
const chatStatus = document.getElementById("chatStatus");
const chatFoot = document.getElementById("chatFoot");

const chatBackdrop = document.getElementById("chatBackdrop");
let chatOpened = false;
function openChat() {
  chatWindow.classList.add("open");
  chatBackdrop.classList.add("open");
  chatFab.classList.add("hidden");
  chatWindow.setAttribute("aria-hidden", "false");
  if (!chatOpened) { chatOpened = true; greet(); }
  setTimeout(() => chatInput.focus(), 320);
}
function closeChat() {
  chatWindow.classList.remove("open");
  chatBackdrop.classList.remove("open");
  chatFab.classList.remove("hidden");
  chatWindow.setAttribute("aria-hidden", "true");
}
chatFab.addEventListener("click", openChat);
navChatBtn.addEventListener("click", openChat);
chatClose.addEventListener("click", closeChat);
chatBackdrop.addEventListener("click", closeChat);
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && chatWindow.classList.contains("open")) closeChat(); });
chatClear.addEventListener("click", () => {
  chatBody.innerHTML = "";
  if (typeof chatHistory !== "undefined") chatHistory.length = 0;
  greet();
});

function addMsg(html, who) {
  const m = document.createElement("div");
  m.className = "msg " + who;
  m.innerHTML = html;
  chatBody.appendChild(m);
  chatBody.scrollTop = chatBody.scrollHeight;
}
function showTyping() {
  const t = document.createElement("div");
  t.className = "typing"; t.id = "typingDots";
  t.innerHTML = "<span></span><span></span><span></span>";
  chatBody.appendChild(t);
  chatBody.scrollTop = chatBody.scrollHeight;
}
function hideTyping() { const t = document.getElementById("typingDots"); if (t) t.remove(); }

function botReply(html) {
  showTyping();
  setTimeout(() => { hideTyping(); addMsg(html, "bot"); }, 500 + Math.random() * 400);
}

/* ----- Clickable contact logos (mail / LinkedIn / GitHub / call) ----- */
const ICONS = {
  mail: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
};
function contactBarHTML() {
  return `<div class="chat-contact">
    <a class="cc-btn" href="mailto:${DATA.email}" title="Email Rohit">${ICONS.mail}<span>Email</span></a>
    <a class="cc-btn" href="${DATA.linkedin}" target="_blank" rel="noopener" title="LinkedIn">${ICONS.linkedin}<span>LinkedIn</span></a>
    <a class="cc-btn" href="${DATA.github}" target="_blank" rel="noopener" title="GitHub">${ICONS.github}<span>GitHub</span></a>
    <a class="cc-btn" href="tel:+19372705164" title="Call Rohit">${ICONS.phone}<span>Call</span></a>
  </div>`;
}
function isContactIntent(text) {
  return /contact|email|e-mail|reach|hire|hiring|connect|linked\s?in|git\s?hub|phone|call|number|get in touch|résumé|resume|\bcv\b|recruit/i.test(text);
}

const SUGGESTIONS = [
  "Who are you?", "Where do you work now?", "Tell me about your RAG experience",
  "What's your tech stack?", "Show me your projects", "What about Hilton?",
  "Education?", "Certifications?", "How do I contact you?", "Agentic AI experience?",
];
function renderSuggestions() {
  chatSuggest.innerHTML = SUGGESTIONS.map(s => `<button class="suggestion">${s}</button>`).join("");
  chatSuggest.querySelectorAll(".suggestion").forEach(b =>
    b.addEventListener("click", () => { handleQuery(b.textContent); }));
}
renderSuggestions();

function greet() {
  botReply(`Hi! I'm <strong>Rohit's AI agent</strong> 👋 — I know his résumé inside out. Ask me anything about his experience, skills, projects, or how to reach him. Try a suggestion below 👇`);
}

/* ----- Intent knowledge base (scored keyword retrieval) ----- */
const KB = [
  { keys: ["who are you","about you","yourself","introduce","bio","summary","who is rohit","tell me about rohit","background"],
    answer: () => `Rohit Kumar Manne is an <strong>Agentic AI Engineer</strong> based in Memphis, TN (open to relocate). He holds an M.S. in Computer Science from the University of Dayton and specializes in building autonomous AI systems — multi-agent orchestration, production RAG pipelines (&lt;5% hallucination), and scalable ML. He's shipped AI at <strong>Hilton</strong>, <strong>HealthKard</strong>, and production ML at <strong>Capgemini</strong>.` },

  { keys: ["current","now","present","latest job","where do you work","hilton","qe agent","recent role"],
    answer: () => `Currently an <strong>Agentic AI Engineer at Hilton Worldwide</strong> (Jul 2025 – May 2026), Memphis TN. Highlights:<br>• Architected the <strong>'Hilton QE Agent'</strong> on Amazon Bedrock (Claude Opus) + LangChain/CrewAI with a React/FastAPI UI — cut manual test-scenario effort by <strong>70%</strong>.<br>• Built an autonomous <strong>Agentic RAG</strong> pipeline (Pinecone + Redis, Splunk & Confluence integration) cutting MTTR by <strong>50%</strong>.<br>• Designed tool-use / API orchestration (Create, Modify, Cancel) and multi-agent onboarding saving <strong>20+ hrs/hire</strong>.` },

  { keys: ["healthkard","health assistant","generative ai engineer","chatbot","health"],
    answer: () => `At <strong>HealthKard</strong> (Generative AI Engineer, Jul 2024 – Jun 2025, Remote) he built a <strong>'Health Assistant' chatbot</strong> with LangChain + OpenAI/Claude guiding users from symptom analysis to doctor discovery, a production <strong>RAG architecture on ChromaDB</strong>, and applied prompt engineering + synthetic-data fine-tuning to reduce hallucinations.` },

  { keys: ["capgemini","fraud","insurance","xgboost","mlops","ml engineer","first job","earlier","data scientist","intern","analyst"],
    answer: () => `At <strong>Capgemini</strong> (Hyderabad, Jan 2021 – Jul 2023) Rohit grew across three roles:<br>• <strong>AI & ML Engineer</strong> — real-time fraud-detection microservice for AAA Auto Club (Flask/Docker, 10k+ claims/day, −40% flag time), spaCy/Transformers NLP at 92% accuracy, full MLOps CI/CD (−80% deploy effort, 99.9% uptime), Prometheus/Grafana + KL-divergence drift detection.<br>• <strong>Junior Data Scientist</strong> — XGBoost fraud model beating LR/RF baselines at <strong>88% accuracy, 0.94 AUC</strong>; deep feature engineering (+15% precision).<br>• <strong>Data Analyst Intern</strong> — Tableau Patient Readmission Risk dashboard on EHR data, saving 15+ hrs/week.` },

  { keys: ["rag","retrieval","retrieval augmented","graphrag","vector","embedding","hybrid search"],
    answer: () => `RAG is core to Rohit's work:<br>• <strong>Hilton</strong> — autonomous Agentic RAG with Pinecone + Redis, cut MTTR 50%.<br>• <strong>HealthKard</strong> — production RAG on ChromaDB with memory management.<br>• <strong>SEC Filings project</strong> — LlamaIndex + Groq, semantic chunking, hybrid search (dense + BM25), &lt;5% hallucination.<br>He also works with GraphRAG, Pinecone, ChromaDB, FAISS, Qdrant, and Neo4j.` },

  { keys: ["agent","agentic","multi-agent","autogen","crewai","orchestration","tool use","tool-use","planning","reasoning"],
    answer: () => `Agentic AI is his specialty: multi-agent orchestration with <strong>LangChain, CrewAI, AutoGen, DSPy</strong>; tool-use & API orchestration (Create/Modify/Cancel workflows); and planning/reasoning that breaks complex goals into sub-tasks. At Hilton he built the autonomous 'QE Agent' and multi-agent onboarding flows saving 20+ hrs/hire.` },

  { keys: ["skill","tech stack","technologies","stack","tools","languages","what do you know","expertise"],
    answer: () => `Rohit's toolkit:<br><strong>Languages:</strong> Python (Expert), SQL, Java, JavaScript, Bash.<br><strong>GenAI & Agentic AI:</strong> LangChain, LangGraph, LlamaIndex, CrewAI, AutoGen, DSPy, MCP, ReAct, Advanced/Graph/Agentic RAG, RAGAS, TruLens, LangSmith.<br><strong>LLMs & Fine-Tuning:</strong> GPT-4o, Claude (Opus/Sonnet), Llama 3, Mistral, LoRA, QLoRA, PEFT, RLHF.<br><strong>ML/DL:</strong> PyTorch, TensorFlow, Scikit-Learn, XGBoost, LightGBM, spaCy, drift detection.<br><strong>Cloud/MLOps:</strong> AWS (SageMaker, Bedrock, EKS, Lambda, S3), Docker, K8s, Terraform, Jenkins, GitHub Actions, MLflow, Airflow, Ray, vLLM, Ollama.<br><strong>Data & Serving:</strong> Pinecone, ChromaDB, FAISS, Qdrant, Neo4j, PostgreSQL, MongoDB, Redis, Elasticsearch, Kafka, FastAPI.` },

  { keys: ["python","programming language","coding"],
    answer: () => `Python is Rohit's <strong>expert language</strong>. He also works in SQL, Java, JavaScript and Bash/Shell.` },

  { keys: ["aws","cloud","sagemaker","bedrock","lambda","eks","docker","kubernetes","terraform","deploy","serving","vllm","ollama"],
    answer: () => `Cloud & MLOps: <strong>AWS</strong> (SageMaker, Bedrock, EKS, Lambda, S3), Docker, Kubernetes, Terraform, MLflow, Jenkins, plus LLM serving with <strong>vLLM</strong> and <strong>Ollama</strong>, and eval with Ragas & TruLens. He's run full CI/CD with 99.9% uptime.` },

  { keys: ["qd","qdev","orchestration","quality dev","sdlc","sdet","flagship","live project","building","in progress","current project","latest project","recent project","newest project","working on","new project","vercel","hitl","multi agent platform"],
    answer: () => `🎛️ <strong>QDev Orchestration</strong> is Rohit's flagship — a <strong>live, actively-building</strong> agentic SDLC platform. Stories flow Dev → QE → Test → Stage → Prod via <strong>6 specialized Claude agents</strong> (Manager, Dev, QE, Code Review, E2E, Splunk→Bug) behind <strong>3 Human-in-the-Loop gates</strong>, with a state-machine bug-fix loop. A hybrid routing layer uses <strong>Claude Sonnet 4.6</strong> by default and <strong>Opus 4.7</strong> for code-gen/reviews, streaming live state over WebSockets to a React/Vite/Tailwind + Monaco UI with 8+ integrations. Deployed on Vercel + Render. <a href="https://qd-orchestrationai.vercel.app" target="_blank">▶ Live demo</a>` },

  { keys: ["project","projects","portfolio","built","work samples","sec","diffusion","face"],
    answer: () => `Rohit's projects:<br>⭐ <strong>QDev Orchestration</strong> (live & in progress) — agentic SDLC platform with 6 Claude agents, 3 HITL gates & a realtime WebSocket pipeline. <a href="https://qd-orchestrationai.vercel.app" target="_blank">Live ↗</a><br>1️⃣ <strong>Advanced Agentic RAG for SEC Filings</strong> — LlamaIndex + Groq Llama-3.1-70B, hybrid search (BM25+dense, RRF), 95% context precision, &lt;5% hallucination. <a href="https://advanced-rag-pipeline-app-rohit.streamlit.app" target="_blank">Live ↗</a><br>2️⃣ <strong>Face-Generation-Diffusion</strong> — custom PyTorch diffusion model, 85% FID improvement on 100k+ images.<br>See the <a href="#projects">Projects</a> section.` },

  { keys: ["education","degree","university","dayton","masters","study","gpa","school","vel tech","college"],
    answer: () => `🎓 <strong>M.S. Computer Science</strong>, University of Dayton (Aug 2023 – May 2025, GPA 3.3).<br>🎓 <strong>B.Tech, Electronics & Communication Engineering</strong>, Vel Tech University, Chennai (2017–2021, GPA 8.1).` },

  { keys: ["certification","certificate","oci","oracle","certified"],
    answer: () => `Certifications: <strong>Oracle Certified OCI Generative AI Professional (2025)</strong> and <strong>OCI Data Science Professional (2025)</strong>.` },

  { keys: ["achievement","award","hackathon","won","winner","smart india","codefest","robotics"],
    answer: () => `🏆 Winner, <strong>Smart India Hackathon '20</strong> (ML Crime Mapping)<br>🏆 Winner, <strong>CodeFest '21</strong> (Disaster Management)<br>🥈 2nd Place, <strong>Bonjour India '17</strong> (French Embassy Robotics Competition).` },

  { keys: ["contact","email","reach","hire","phone","call","get in touch","connect","linkedin","github"],
    answer: () => `You can reach Rohit directly using the buttons below 👇${contactBarHTML()}` },

  { keys: ["location","where based","relocate","memphis","move","remote"],
    answer: () => `Rohit is based in <strong>Memphis, TN</strong> and is <strong>open to relocation</strong>. He's also worked fully remote (HealthKard).` },

  { keys: ["experience","years","how long","career","journey","history"],
    answer: () => `Rohit has <strong>~5 years</strong> across AI/ML — from production ML at Capgemini (2021–2023), to GenAI at HealthKard (2024–2025), to Agentic AI at Hilton (2025–2026). See the <a href="#experience">Experience</a> timeline.` },

  { keys: ["fine-tune","fine tune","lora","training","fine-tuning"],
    answer: () => `Rohit fine-tunes LLMs with <strong>LoRA</strong>, uses synthetic-data instruction tuning (HealthKard), and trained a custom <strong>diffusion model</strong> on 100k+ images with mixed-precision training and gradient checkpointing.` },

  { keys: ["hallucination","evaluation","eval","ragas","trulens","accuracy","reliable"],
    answer: () => `Reliability matters to him: he hit a <strong>&lt;5% hallucination rate</strong> on the SEC RAG project, uses <strong>Ragas & TruLens</strong> for evaluation, and applied rigorous testing + synthetic-data tuning at HealthKard to reduce hallucinations.` },
];

const GREETINGS = ["hi","hello","hey","yo","sup","hola","greetings","good morning","good evening"];
const THANKS = ["thanks","thank you","thx","appreciate","cool","awesome","nice","great"];

function normalize(s) { return s.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim(); }

function findAnswer(query) {
  const q = normalize(query);
  if (!q) return null;
  if (GREETINGS.some(g => q === g || q.startsWith(g + " "))) return `Hey there! 👋 Ask me about Rohit's experience, skills, projects or how to reach him.`;
  if (THANKS.some(t => q.includes(t))) return `You're welcome! 😊 Anything else you'd like to know about Rohit?`;

  // Common words that shouldn't drive topic matching
  const STOP = new Set(["rohit","manne","about","what","whats","tell","your","yours","does","done","have","with","this","that","please","know","like","would","there","their","then","they","want","give"]);
  let best = null, bestScore = 0;
  for (const entry of KB) {
    let score = 0;
    for (const k of entry.keys) {
      if (q.includes(k)) score += k.split(" ").length * 2; // multi-word phrase = stronger
      else { for (const w of k.split(" ")) if (w.length > 3 && !STOP.has(w) && q.includes(w)) score += 1; }
    }
    if (score > bestScore) { bestScore = score; best = entry; }
  }
  if (best && bestScore >= 2) return best.answer();
  return null;
}

/* ----- Groq LLM integration (with résumé system prompt) ----- */
// Public Cloudflare Worker endpoint that proxies Groq (the API KEY lives inside
// the Worker as a secret, never here). Safe to commit — this URL is not a secret.
// Paste your deployed Worker URL here to turn on the live thinking-agent.
const DEFAULT_PROXY_URL = "https://rohit-agent.rohitkumarmanne442.workers.dev";

const CFG = window.AGENT_CONFIG || {};
const PROXY_URL = (CFG.groqProxyUrl || DEFAULT_PROXY_URL || "").trim();
const AGENT_MODE = PROXY_URL ? "proxy" : (CFG.groqApiKey ? "direct" : "local");

function buildResumeContext() {
  const exp = DATA.experience.map(e =>
    `- ${e.role}, ${e.company} (${e.where}, ${e.when}):\n  ${e.points.join("\n  ")}`).join("\n");
  const proj = DATA.projects.map(p => `- ${p.title} [${p.stack.join(", ")}] (${p.when}): ${p.desc}`).join("\n");
  const edu = DATA.education.map(e => `- ${e.deg}, ${e.school} (${e.when}, GPA ${e.gpa})`).join("\n");
  const skills = DATA.skills.map(s => `- ${s.title}: ${s.items.join(", ")}`).join("\n");
  return `RÉSUMÉ OF ${DATA.name} (${DATA.title}), ${DATA.location}
Email: ${DATA.email} | Phone: ${DATA.phone} | LinkedIn: ${DATA.linkedin} | GitHub: ${DATA.github}

EDUCATION:
${edu}

SKILLS:
${skills}

WORK EXPERIENCE:
${exp}

PROJECTS:
${proj}

CERTIFICATIONS: ${DATA.certs.join("; ")}
ACHIEVEMENTS: ${DATA.achievements.join("; ")}`;
}

const SYSTEM_PROMPT = `You are Rohit Kumar Manne's personal AI assistant on his portfolio website — basically his charming, quick-witted hype-person (with receipts). You chat with visitors, who are often recruiters, about Rohit.

PERSONALITY:
- Warm, friendly and genuinely fun to talk to. Make people enjoy the conversation. 😊
- Use emojis naturally to add warmth and emphasis — a few per reply, not one per word. 🚀✨
- A little playful, witty sarcasm is encouraged — keep it light, charming and ALWAYS professional. Tease the topic, never the visitor, and never at Rohit's expense.
- Be confident and a bit proud of Rohit's work — he's earned the bragging rights.

HOW TO RESPOND:
- Actually read what the user asked and answer THAT, specifically.
- Elaborate. Give rich, substantive replies — usually 3–6 sentences, or a tidy bulleted list where each point carries a little context. Add the "so what / why it matters", not just a bare fact. Don't be a one-line robot. 🤖
- For greetings or small talk, be warm and inviting (a sentence or two is fine here) and nudge them toward what they might want to explore — no unprompted bio-dump.
- Use the conversation so far for follow-up questions.

GROUNDING — non-negotiable:
- Use ONLY facts in the RÉSUMÉ block below. You may phrase, frame, connect and elaborate freely, but NEVER invent or guess employers, titles, dates, numbers, tools, certifications or projects. If something genuinely isn't there, own it with a friendly line — e.g. "Ha, nice try 😄 — that's not on his résumé, so I won't make it up. Ask Rohit directly!" Never fabricate.

CONTACT:
- Only when the user asks how to contact, reach, hire or connect with Rohit, warmly point them to the buttons: "You can reach Rohit using the buttons below 👇". Otherwise, don't bring up contact.

FORMAT:
- Third person ("Rohit built…", "He's the kind of engineer who…").
- PLAIN TEXT ONLY — no HTML tags, no code blocks, no markdown tables. **bold** and "- " bullets are fine, emojis welcome.

=== RÉSUMÉ ===
${buildResumeContext()}
=== END RÉSUMÉ ===`;

const chatHistory = [];

async function askGroq(userText) {
  const messages = [
    { role: "system", content: SYSTEM_PROMPT },
    ...chatHistory.slice(-6),
    { role: "user", content: userText },
  ];
  let data;
  if (AGENT_MODE === "proxy") {
    const r = await fetch(PROXY_URL, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages, model: CFG.model || "llama-3.3-70b-versatile" }),
    });
    data = await r.json();
  } else {
    const r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${CFG.groqApiKey}` },
      body: JSON.stringify({ model: CFG.model || "llama-3.3-70b-versatile", messages, temperature: 0.4, max_tokens: 600 }),
    });
    data = await r.json();
  }
  const text = data?.choices?.[0]?.message?.content;
  if (!text) throw new Error("No content from Groq");
  return text.trim();
}

// Safe text -> HTML for LLM replies. Down-converts any stray HTML to markdown
// first (so tags never show as raw code), then escapes, then renders markdown.
function formatReply(s) {
  // 1) If the model emitted HTML, turn the safe bits into markdown, strip the rest
  s = s.replace(/<a\s+[^>]*href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gi, "[$2]($1)");
  s = s.replace(/<\/?(?:strong|b)>/gi, "**");
  s = s.replace(/<br\s*\/?>/gi, "\n");
  s = s.replace(/<\/?[a-z][^>]*>/gi, ""); // strip any remaining tags
  // 2) Escape, then render a safe subset of markdown
  s = s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/(^|[^*])\*(?!\s)([^*]+?)\*/g, "$1<em>$2</em>");
  s = s.replace(/`([^`]+?)`/g, "<code>$1</code>");
  s = s.replace(/\[(.+?)\]\((https?:[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  s = s.replace(/(^|\s)(https?:\/\/[^\s<]+)/g, '$1<a href="$2" target="_blank" rel="noopener">$2</a>');
  s = s.replace(/([\w.+-]+@[\w-]+\.[\w.-]+)/g, '<a href="mailto:$1">$1</a>');
  s = s.replace(/^\s*[\-\*•]\s+(.+)$/gm, "• $1");
  s = s.replace(/\n/g, "<br>");
  return s;
}

async function handleQuery(text) {
  addMsg(text, "user");
  showTyping();

  // Try the live LLM first (if configured); always fall back to the local KB.
  if (AGENT_MODE !== "local") {
    try {
      const reply = await askGroq(text);
      hideTyping();
      chatHistory.push({ role: "user", content: text }, { role: "assistant", content: reply });
      let html = formatReply(reply);
      if (isContactIntent(text)) html += contactBarHTML();
      addMsg(html, "bot");
      return;
    } catch (err) {
      // fall through to local KB
    }
  }

  await new Promise(r => setTimeout(r, 350 + Math.random() * 300));
  hideTyping();
  const ans = findAnswer(text);
  if (ans) addMsg(ans, "bot");
  else addMsg(`I'm focused on Rohit's professional background. Try asking about his <strong>experience</strong>, <strong>RAG / agentic work</strong>, <strong>skills</strong>, <strong>projects</strong>, <strong>education</strong>, or <strong>contact info</strong>. Or reach him at <a href="mailto:${DATA.email}">${DATA.email}</a>.`, "bot");
}

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = chatInput.value.trim();
  if (!text) return;
  chatInput.value = "";
  handleQuery(text);
});

/* Reflect the active agent mode in the chat UI */
(function applyAgentMode() {
  if (AGENT_MODE === "local") return; // built-in agent (default text is correct)
  if (chatStatus) chatStatus.textContent = "Powered by Groq LLM";
  if (chatFoot) {
    chatFoot.innerHTML = `⚡ Live AI · Groq <strong>${CFG.model || "llama-3.3-70b"}</strong>${AGENT_MODE === "proxy" ? " (secure)" : ""}`;
    chatFoot.classList.add("live");
  }
})();
