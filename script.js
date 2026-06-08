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
      live: "https://qd-orchestrationai.vercel.app",
      api: "https://qd-orchestration-api.onrender.com/docs",
      repo: "https://github.com/rohitkumarmanne-442/Quality-Dev-Orchestration-AI",
      when: "May 2026 – Present",
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
  const featured = DATA.projects.find(p => p.featured);
  const rest = DATA.projects.filter(p => !p.featured);

  if (featured) {
    document.getElementById("featuredProject").innerHTML = `
      <article class="featured-project glass reveal">
        <span class="fp-border"></span>
        <div class="fp-main">
          <div class="fp-badges">
            <span class="fp-live"><span class="fp-live-dot"></span>LIVE</span>
            <span class="fp-building">⚙ Building in progress</span>
            <span class="fp-flag">★ Flagship project</span>
          </div>
          <h3 class="fp-title">${featured.title}</h3>
          <p class="fp-tagline">${featured.tagline}</p>
          <p class="fp-desc">${featured.desc}</p>
          <div class="fp-highlights">
            ${featured.highlights.map(([i, t, d]) => `
              <div class="fp-hl"><span class="fp-hl-ico">${i}</span><div><strong>${t}</strong><span>${d}</span></div></div>`).join("")}
          </div>
          <div class="project-stack">${featured.stack.map(s => `<span class="chip">${s}</span>`).join("")}</div>
          <div class="fp-actions">
            <a href="${featured.live}" target="_blank" rel="noopener" class="btn btn-primary">▶ Live Demo</a>
            <a href="${featured.api}" target="_blank" rel="noopener" class="btn btn-ghost">API Docs ↗</a>
            <span class="fp-private" title="Source is a private repository">🔒 Private repo · ${featured.when}</span>
          </div>
        </div>
        <aside class="fp-side">
          <span class="fp-side-label">Live agents</span>
          <div class="fp-agents">
            ${featured.agents.map(([name, model]) => `
              <div class="fp-agent"><span class="fp-agent-dot"></span><span class="fp-agent-name">${name}</span><em class="fp-agent-model ${model.toLowerCase()}">${model}</em></div>`).join("")}
          </div>
          <div class="fp-pipeline">
            <span>Dev</span><i>›</i><span>QE</span><i>›</i><span>Test</span><i>›</i><span>Stage</span><i>›</i><span>Prod</span>
          </div>
        </aside>
      </article>`;
  }

  document.getElementById("projectsGrid").innerHTML = rest.map(p => `
    <div class="project-card glass reveal" data-tilt>
      <span class="project-tag">${p.tag}</span>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="project-stack">${p.stack.map(s => `<span class="chip">${s}</span>`).join("")}</div>
      <div class="project-foot">
        <span class="project-when">${p.when}</span>
        <span class="project-links">
          ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener" class="project-link">▶ Live</a>` : ""}
          ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener" class="project-link">⌥ Code</a>` : ""}
        </span>
      </div>
    </div>`).join("");
}
function buildLogoLoop() {
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
  const item = ([slug, label]) =>
    `<a class="logoloop__item" href="#skills" title="${label}">
       <img src="https://cdn.simpleicons.org/${slug}" alt="${label}" loading="lazy"
            onerror="this.style.display='none'" />
       <span>${label}</span>
     </a>`;
  const row = logos.map(item).join("");
  document.getElementById("logoLoopTrack").innerHTML = row + row;
}
function buildRecognition() {
  const cards = [
    ...DATA.certs.map(c => ({ kind: "Certification", icon: "🏅", title: c, desc: "" })),
    ...DATA.achievements.map(a => ({ kind: "Achievement", icon: "🏆", title: a, desc: "" })),
  ];
  document.getElementById("horizonTrack").innerHTML = cards.map(c => `
    <div class="horizon-card glass">
      <span class="hc-icon">${c.icon}</span>
      <span class="hc-kind">${c.kind}</span>
      <h3>${c.title}</h3>
      ${c.desc ? `<p>${c.desc}</p>` : ""}
    </div>`).join("");
}

/* ---------- 2. Scroll-driven reveal (IntersectionObserver) ---------- */
function initReveal() {
  const io = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

/* ---------- 3. Misc UI ---------- */
function initMisc() {
  document.getElementById("year").textContent = new Date().getFullYear();

  // Scroll progress bar
  window.addEventListener("scroll", () => {
    const p = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    document.getElementById("scrollProgress").style.width = (p * 100) + "%";
  }, { passive: true });

  // Nav active + scrolled class
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id], header[id]");
  const navObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
      }
    });
  }, { threshold: 0.35 });
  sections.forEach(s => navObs.observe(s));
  window.addEventListener("scroll", () => {
    document.getElementById("nav").classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });

  // Burger menu
  const burger = document.getElementById("navBurger");
  const navList = document.querySelector(".nav-links");
  burger.addEventListener("click", () => navList.classList.toggle("open"));
  navList.addEventListener("click", e => { if (e.target.classList.contains("nav-link")) navList.classList.remove("open"); });

  // Cursor glow
  const cg = document.getElementById("cursorGlow");
  window.addEventListener("mousemove", e => {
    cg.style.left = e.clientX + "px";
    cg.style.top = e.clientY + "px";
    cg.style.opacity = "1";
  }, { passive: true });

  // Counter animation for hero stats
  const counters = document.querySelectorAll(".stat-num");
  const cObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.target;
      const dur = 1200;
      const step = target / (dur / 16);
      let cur = 0;
      const tick = () => { cur = Math.min(cur + step, target); el.textContent = Math.floor(cur); if (cur < target) requestAnimationFrame(tick); };
      tick();
      cObs.unobserve(el);
    });
  }, { threshold: 0.6 });
  counters.forEach(c => cObs.observe(c));

  // Tilt on project cards
  document.querySelectorAll("[data-tilt]").forEach(card => {
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 14;
      const y = ((e.clientY - r.top) / r.height - 0.5) * -14;
      card.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${y}deg) translateY(-6px)`;
      card.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100) + "%");
      card.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100) + "%");
    });
    card.addEventListener("mouseleave", () => { card.style.transform = ""; });
  });
}

/* ---------- 4. Rotating hero text ---------- */
function initRotatingText() {
  const el = document.getElementById("rotatingText");
  if (!el) return;
  const roles = DATA.roles;
  let idx = 0;
  function render(word) {
    el.innerHTML = word.split("").map(c => `<span class="rt-char">${c === " " ? "&nbsp;" : c}</span>`).join("");
    requestAnimationFrame(() => el.querySelectorAll(".rt-char").forEach((c, i) => setTimeout(() => c.classList.add("in"), i * 40)));
  }
  function next() {
    el.querySelectorAll(".rt-char").forEach((c, i) => setTimeout(() => c.classList.add("out"), i * 30));
    setTimeout(() => { idx = (idx + 1) % roles.length; render(roles[idx]); }, roles[idx].length * 30 + 400);
  }
  render(roles[0]);
  setInterval(next, 2800);
}

/* ---------- 5. Horizontal recognition scroll ---------- */
function initHorizon() {
  const section = document.getElementById("recognition");
  const track = document.getElementById("horizonTrack");
  const bar = document.getElementById("horizonBar");
  if (!section || !track) return;
  window.addEventListener("scroll", () => {
    const rect = section.getBoundingClientRect();
    const total = section.offsetHeight - window.innerHeight;
    const prog = Math.max(0, Math.min(1, -rect.top / total));
    const maxShift = track.scrollWidth - window.innerWidth;
    track.style.transform = `translateX(-${prog * maxShift}px)`;
    if (bar) bar.style.width = (prog * 100) + "%";
  }, { passive: true });
}

/* ---------- 6. GitHub repos ---------- */
async function loadRepos() {
  const grid = document.getElementById("reposGrid");
  try {
    const res = await fetch(`https://api.github.com/users/${DATA.githubUser}/repos?sort=updated&per_page=6`);
    const repos = await res.json();
    if (!Array.isArray(repos)) throw new Error("bad response");
    grid.innerHTML = repos.filter(r => !r.fork).slice(0, 6).map(r => `
      <a class="repo-card glass reveal" href="${r.html_url}" target="_blank" rel="noopener">
        <span class="repo-name">${r.name}</span>
        <p class="repo-desc">${r.description || "No description provided."}</p>
        <div class="repo-meta">
          ${r.language ? `<span class="repo-lang">${r.language}</span>` : ""}
          <span>⭐ ${r.stargazers_count}</span>
          <span>🍴 ${r.forks_count}</span>
        </div>
      </a>`).join("");
    initReveal();
  } catch {
    grid.innerHTML = `<div class="repo-loading glass">Couldn't load repos — <a href="${DATA.github}" target="_blank" rel="noopener">view on GitHub ↗</a></div>`;
  }
}

/* ---------- 7. Contact form ---------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("cfStatus");
  if (!form || !status) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name    = form.querySelector("#cf-name").value.trim();
    const email   = form.querySelector("#cf-email").value.trim();
    const subject = form.querySelector("#cf-subject").value.trim();
    const message = form.querySelector("#cf-message").value.trim();

    // Basic client-side validation
    if (!name || !email || !message) {
      status.textContent = "Please fill in Name, Email, and Message.";
      status.className = "cf-status error";
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      status.textContent = "Please enter a valid email address.";
      status.className = "cf-status error";
      return;
    }

    // Compose mailto as the delivery mechanism (no backend required)
    const subjectLine = subject || `Message from ${name} via portfolio`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:${DATA.email}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    status.textContent = "Opening your mail client… ✓";
    status.className = "cf-status success";
    form.reset();
    setTimeout(() => { status.textContent = ""; status.className = "cf-status"; }, 5000);
  });
}

/* ---------- 8. Chat widget ---------- */
const chatFab      = document.getElementById("chatFab");
const chatWindow   = document.getElementById("chatWindow");
const chatClose    = document.getElementById("chatClose");
const chatClear    = document.getElementById("chatClear");
const chatBackdrop = document.getElementById("chatBackdrop");
const chatBody     = document.getElementById("chatBody");
const chatForm     = document.getElementById("chatForm");
const chatInput    = document.getElementById("chatInput");
const chatStatus   = document.getElementById("chatStatus");
const chatFoot     = document.getElementById("chatFoot");
const chatSugg     = document.getElementById("chatSuggestions");
const navChatBtn   = document.getElementById("navChatBtn");

let chatOpen = false;

function openChat() {
  chatOpen = true;
  chatWindow.classList.add("open");
  chatWindow.setAttribute("aria-hidden", "false");
  chatBackdrop.classList.add("open");
  chatFab.classList.add("hidden");
  setTimeout(() => chatInput.focus(), 300);
  if (chatBody.children.length === 0) {
    addMsg(`👋 Hi! I'm Rohit's AI assistant — trained on his résumé. Ask me about his <strong>experience</strong>, <strong>projects</strong>, <strong>skills</strong>, or how to reach him.`, "bot");
    renderSuggestions(["Tell me about Rohit", "What are his top skills?", "Show me his projects", "How to contact him?"]);
  }
}
function closeChat() {
  chatOpen = false;
  chatWindow.classList.remove("open");
  chatWindow.setAttribute("aria-hidden", "true");
  chatBackdrop.classList.remove("open");
  chatFab.classList.remove("hidden");
}

chatFab.addEventListener("click", openChat);
if (navChatBtn) navChatBtn.addEventListener("click", openChat);
chatClose.addEventListener("click", closeChat);
chatBackdrop.addEventListener("click", closeChat);
chatClear.addEventListener("click", () => { chatBody.innerHTML = ""; chatSugg.innerHTML = ""; openChat(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && chatOpen) closeChat(); });

function addMsg(html, role) {
  const d = document.createElement("div");
  d.className = `msg ${role}`;
  d.innerHTML = html;
  chatBody.appendChild(d);
  chatBody.scrollTop = chatBody.scrollHeight;
}
function showTyping() {
  const d = document.createElement("div");
  d.className = "typing"; d.id = "typingIndicator";
  d.innerHTML = "<span></span><span></span><span></span>";
  chatBody.appendChild(d);
  chatBody.scrollTop = chatBody.scrollHeight;
}
function hideTyping() { const t = document.getElementById("typingIndicator"); if (t) t.remove(); }
function renderSuggestions(arr) {
  chatSugg.innerHTML = arr.map(s => `<button class="suggestion" type="button">${s}</button>`).join("");
  chatSugg.querySelectorAll(".suggestion").forEach(btn => btn.addEventListener("click", () => { chatSugg.innerHTML = ""; handleQuery(btn.textContent); }));
}
function contactBarHTML() {
  return `<div class="chat-contact">
    <a class="cc-btn" href="mailto:${DATA.email}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>Email</a>
    <a class="cc-btn" href="${DATA.linkedin}" target="_blank" rel="noopener"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>LinkedIn</a>
    <a class="cc-btn" href="${DATA.github}" target="_blank" rel="noopener"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>GitHub</a>
    <a class="cc-btn" href="tel:${DATA.phone.replace(/[^+\d]/g,"")}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.1 6.1l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>Call</a>
  </div>`;
}
function isContactIntent(q) {
  const w = q.toLowerCase();
  return ["contact","email","reach","hire","phone","call","get in touch","connect","linkedin","github"].some(k => w.includes(k));
}

/* ---- Local KB ---- */
const KB = [
  { keys: ["hilton","qe agent","quality engineering","bedrock","claude"],
    answer: () => `At <strong>Hilton Worldwide</strong> (Jul 2025–May 2026), Rohit built the 'Hilton QE Agent' — a production multi-agent system on Amazon Bedrock (Claude Opus 4.6) using LangChain & CrewAI. It automated test-scenario generation across 12+ QE teams, cutting manual effort by 70%, and an Agentic RAG pipeline with Pinecone cut MTTR by 50%.` },
  { keys: ["healthkard","health","chatbot","health assistant"],
    answer: () => `At <strong>HealthKard</strong> (Jul 2024–Jun 2025), Rohit built the 'Health Assistant' chatbot (LangChain + GPT-4o + Claude) guiding users through symptom → doctor discovery across 5K+ providers, backed by ChromaDB RAG and LoRA fine-tuning on insurance policy data.` },
  { keys: ["capgemini","fraud","aaa","xgboost","mlops","sagemaker"],
    answer: () => `At <strong>Capgemini</strong> (2021–2023), Rohit went from intern to ML Engineer. Highlights: XGBoost fraud model (88% acc, 0.94 AUC), Flask fraud-detection microservice handling 10K+ daily claims, NLP pipeline at 92% accuracy, and a full CI/CD MLOps pipeline delivering 99.9% uptime.` },
  { keys: ["rag","retrieval","vector","embedding","chromadb","pinecone","llamaindex","langchain","semantic"],
    answer: () => `RAG is a core specialty — Rohit built <strong>Agentic RAG</strong> at Hilton (Pinecone hybrid dense+sparse, Redis memory) and the <strong>Advanced Agentic RAG for SEC Filings</strong> project — LlamaIndex + Groq, semantic chunking, hybrid search (dense + BM25), &lt;5% hallucination.<br>He also works with GraphRAG, Pinecone, ChromaDB, FAISS, Qdrant, and Neo4j.` },
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
  const STOP = new Set(["rohit","manne","about","what","whats","tell","your","yours","does","done","have","with","this","that","please","know","like","would","there","their","then","they","want","give"]);
  let best = null, bestScore = 0;
  for (const entry of KB) {
    let score = 0;
    for (const k of entry.keys) {
      if (q.includes(k)) score += k.split(" ").length * 2;
      else { for (const w of k.split(" ")) if (w.length > 3 && !STOP.has(w) && q.includes(w)) score += 1; }
    }
    if (score > bestScore) { bestScore = score; best = entry; }
  }
  if (best && bestScore >= 2) return best.answer();
  return null;
}

/* ----- Groq LLM integration ----- */
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
  return `RÉSUMÉ OF ${DATA.name} (${DATA.title}), ${DATA.location}\nEmail: ${DATA.email} | Phone: ${DATA.phone} | LinkedIn: ${DATA.linkedin} | GitHub: ${DATA.github}\n\nEDUCATION:\n${edu}\n\nSKILLS:\n${skills}\n\nWORK EXPERIENCE:\n${exp}\n\nPROJECTS:\n${proj}\n\nCERTIFICATIONS: ${DATA.certs.join("; ")}\nACHIEVEMENTS: ${DATA.achievements.join("; ")}`;
}

const SYSTEM_PROMPT = `You are Rohit Kumar Manne's personal AI assistant on his portfolio website. You chat with visitors (often recruiters) about Rohit.\n\nPERSONALITY: Warm, friendly, fun, professionally confident. Use emojis naturally. Third person only.\n\nGROUNDING: Use ONLY facts in the RÉSUMÉ block. Never invent employers, titles, dates, numbers, tools, certs, or projects.\n\nCONTACT: Only mention contact details when explicitly asked.\n\nFORMAT: Plain text. **bold** and "- " bullets ok. No HTML.\n\n=== RÉSUMÉ ===\n${buildResumeContext()}\n=== END RÉSUMÉ ===`;

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

function formatReply(s) {
  s = s.replace(/<a\s+[^>]*href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gi, "[$2]($1)");
  s = s.replace(/<\/?(?:strong|b)>/gi, "**");
  s = s.replace(/<br\s*\/?>/gi, "\n");
  s = s.replace(/<\/?[a-z][^>]*>/gi, "");
  s = s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/(^|[^*])\*(?!\s)([^*]+?)\*/g, "$1<em>$2</em>");
  s = s.replace(/`([^`]+?)`/g, "<code>$1</code>");
  s = s.replace(/\[(.+?)\]\((https?:[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  s = s.replace(/(\s)(https?:\/\/[^\s<]+)/g, '$1<a href="$2" target="_blank" rel="noopener">$2</a>');
  s = s.replace(/([\w.+-]+@[\w-]+\.[\w.-]+)/g, '<a href="mailto:$1">$1</a>');
  s = s.replace(/^\s*[\-\*•]\s+(.+)$/gm, "• $1");
  s = s.replace(/\n/g, "<br>");
  return s;
}

async function handleQuery(text) {
  addMsg(text, "user");
  showTyping();
  if (AGENT_MODE !== "local") {
    try {
      const reply = await askGroq(text);
      hideTyping();
      chatHistory.push({ role: "user", content: text }, { role: "assistant", content: reply });
      let html = formatReply(reply);
      if (isContactIntent(text)) html += contactBarHTML();
      addMsg(html, "bot");
      return;
    } catch (_) { /* fall through */ }
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

(function applyAgentMode() {
  if (AGENT_MODE === "local") return;
  if (chatStatus) chatStatus.textContent = "Powered by Groq LLM";
  if (chatFoot) {
    chatFoot.innerHTML = `⚡ Live AI · Groq <strong>${CFG.model || "llama-3.3-70b"}</strong>${AGENT_MODE === "proxy" ? " (secure)" : ""}`;
    chatFoot.classList.add("live");
  }
})();

/* ---------- Init ---------- */
buildSkills();
buildTimeline();
buildProjects();
buildLogoLoop();
buildRecognition();
initReveal();
initMisc();
initRotatingText();
initHorizon();
initContactForm();
loadRepos();
