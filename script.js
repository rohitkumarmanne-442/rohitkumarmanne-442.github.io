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
    { icon: "🐍", title: "Languages", items: ["Python (Expert)", "SQL", "Java", "JavaScript", "Bash/Shell"] },
    { icon: "🧠", title: "AI/ML & GenAI", items: ["Advanced RAG", "GraphRAG", "Prompt Engineering", "Fine-Tuning (LoRA)", "Function Calling", "Hugging Face", "PyTorch", "TensorFlow", "Scikit-Learn", "XGBoost"] },
    { icon: "🤖", title: "Frameworks & Agentic AI", items: ["LangChain", "LlamaIndex", "AutoGen", "CrewAI", "DSPy", "FastAPI", "React Vite", "Spring Boot"] },
    { icon: "☁️", title: "Cloud, MLOps & Serving", items: ["AWS (SageMaker, Bedrock, EKS, Lambda, S3)", "Docker", "Kubernetes", "Terraform", "MLflow", "Jenkins", "vLLM", "Ollama", "Ragas", "TruLens"] },
    { icon: "🗄️", title: "Databases & Vector Stores", items: ["Pinecone", "ChromaDB", "FAISS", "Qdrant", "Neo4j", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"] },
  ],

  experience: [
    {
      role: "Agentic AI Engineer", company: "Hilton Worldwide", where: "Memphis, TN", when: "Jul 2025 – May 2026",
      points: [
        "Architected the Agentic AI 'Hilton QE Agent' using Amazon Bedrock (Claude Opus) and LangChain/CrewAI concepts, with a responsive React/FastAPI system to automate Test Scenario generation — cutting manual effort by 70%.",
        "Engineered an autonomous Agentic RAG pipeline using Pinecone for vector storage and Redis for memory, integrating Splunk and Confluence to diagnose errors and cut Mean Time to Resolution (MTTR) by 50%.",
        "Designed complex tool-use and API orchestration workflows (Create, Modify, Cancel) letting agents query external databases via Postman, raising autonomous task success rates for QA.",
        "Streamlined multi-agent orchestration for employee onboarding with advanced prompt engineering and planning/reasoning, saving 20+ hours per hire.",
      ],
    },
    {
      role: "Generative AI Engineer", company: "HealthKard", where: "Remote", when: "Jul 2024 – Jun 2025",
      points: [
        "Developed a 'Health Assistant' chatbot POC using LangChain and leading LLMs (OpenAI, Claude) to guide users from symptom analysis to doctor discovery via multi-step reasoning.",
        "Built and deployed a production-grade RAG architecture using ChromaDB for vector embeddings, delivering accurate, context-aware answers with robust memory management.",
        "Applied advanced prompt engineering and instruction design, fine-tuning with synthetic data and rigorous evaluation to reduce hallucinations.",
      ],
    },
    {
      role: "AI/ML Engineer", company: "Capgemini", where: "Hyderabad, India", when: "Jun 2021 – Jul 2023",
      points: [
        "Designed, built and deployed scalable production ML for insurance fraud detection with XGBoost & Python, scoring 10,000+ daily claims at 88% accuracy.",
        "Architected end-to-end data pipelines and real-time inference microservices with Flask, Docker, and AWS (Lambda, S3), reducing fraud identification time by 40%.",
        "Built an NLP pipeline with spaCy and Transformers to analyze customer feedback, improving response prioritization by 30%.",
        "Established a full MLOps CI/CD pipeline with Jenkins, Kubernetes (Amazon EKS) and Terraform — cutting manual deployment effort by 80% with 99.9% uptime.",
      ],
    },
  ],

  projects: [
    {
      tag: "RAG · Live Demo", title: "Advanced RAG for SEC Filings",
      desc: "Production-grade RAG for financial data retrieval using LlamaIndex + Groq, with semantic chunking, hybrid search (dense + sparse BM25), and a <5% hallucination rate. Interactive Streamlit app with live pipeline visualization & latency metrics.",
      stack: ["Python", "LlamaIndex", "ChromaDB", "Groq", "Streamlit"], when: "Apr 2025 – Present",
    },
    {
      tag: "Generative · Vision", title: "Face-Generation-Diffusion",
      desc: "Custom diffusion model achieving 85% FID-score improvement, trained on 100,000+ images. Optimized pipeline for 70% faster inference via mixed-precision training and gradient checkpointing.",
      stack: ["PyTorch", "HuggingFace", "CUDA"], when: "Sep 2024 – Dec 2024",
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
  document.getElementById("skillsGrid").innerHTML = DATA.skills.map(s => `
    <div class="skill-card glass reveal">
      <div class="skill-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <div class="chips">${s.items.map(i => `<span class="chip">${i}</span>`).join("")}</div>
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
  document.getElementById("projectsGrid").innerHTML = DATA.projects.map(p => `
    <div class="project-card glass reveal" data-tilt>
      <span class="project-tag">${p.tag}</span>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="project-stack">${p.stack.map(s => `<span class="chip">${s}</span>`).join("")}</div>
      <span class="project-link">${p.when}</span>
    </div>`).join("");
}
function buildLogoLoop() {
  // Real brand logos via simpleicons CDN (auto brand color). slug -> label
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
  document.getElementById("logoLoopTrack").innerHTML = row + row; // duplicated for seamless loop
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
        <span class="repo-name">📦 ${r.name}</span>
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
        <span class="repo-name">📦 ${name}</span>
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

window.addEventListener("scroll", () => {
  const st = window.scrollY;
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (st / h * 100) + "%";
  nav.classList.toggle("scrolled", st > 30);

  let current = "";
  sections.forEach(s => { if (st >= s.offsetTop - 140) current = s.id; });
  navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + current));
});

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

let chatOpened = false;
function openChat() {
  chatWindow.classList.add("open");
  chatFab.classList.add("hidden");
  chatWindow.setAttribute("aria-hidden", "false");
  if (!chatOpened) { chatOpened = true; greet(); }
  setTimeout(() => chatInput.focus(), 300);
}
function closeChat() {
  chatWindow.classList.remove("open");
  chatFab.classList.remove("hidden");
  chatWindow.setAttribute("aria-hidden", "true");
}
chatFab.addEventListener("click", openChat);
navChatBtn.addEventListener("click", openChat);
chatClose.addEventListener("click", closeChat);
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

  { keys: ["capgemini","fraud","insurance","xgboost","mlops","ml engineer","first job","earlier"],
    answer: () => `At <strong>Capgemini</strong> (AI/ML Engineer, Jun 2021 – Jul 2023, Hyderabad) he built production ML for <strong>insurance fraud detection</strong> with XGBoost — 10,000+ daily claims at <strong>88% accuracy</strong>, real-time inference on Flask/Docker/AWS (−40% detection time), an spaCy/Transformers NLP feedback pipeline (+30% prioritization), and a full <strong>MLOps CI/CD</strong> pipeline (Jenkins, Kubernetes/EKS, Terraform) — −80% deploy effort, 99.9% uptime.` },

  { keys: ["rag","retrieval","retrieval augmented","graphrag","vector","embedding","hybrid search"],
    answer: () => `RAG is core to Rohit's work:<br>• <strong>Hilton</strong> — autonomous Agentic RAG with Pinecone + Redis, cut MTTR 50%.<br>• <strong>HealthKard</strong> — production RAG on ChromaDB with memory management.<br>• <strong>SEC Filings project</strong> — LlamaIndex + Groq, semantic chunking, hybrid search (dense + BM25), &lt;5% hallucination.<br>He also works with GraphRAG, Pinecone, ChromaDB, FAISS, Qdrant, and Neo4j.` },

  { keys: ["agent","agentic","multi-agent","autogen","crewai","orchestration","tool use","tool-use","planning","reasoning"],
    answer: () => `Agentic AI is his specialty: multi-agent orchestration with <strong>LangChain, CrewAI, AutoGen, DSPy</strong>; tool-use & API orchestration (Create/Modify/Cancel workflows); and planning/reasoning that breaks complex goals into sub-tasks. At Hilton he built the autonomous 'QE Agent' and multi-agent onboarding flows saving 20+ hrs/hire.` },

  { keys: ["skill","tech stack","technologies","stack","tools","languages","what do you know","expertise"],
    answer: () => `Rohit's toolkit:<br><strong>Languages:</strong> Python (Expert), SQL, Java, JavaScript, Bash.<br><strong>AI/ML & GenAI:</strong> Advanced RAG, GraphRAG, LoRA fine-tuning, Function Calling, PyTorch, TensorFlow, XGBoost, Hugging Face.<br><strong>Agentic frameworks:</strong> LangChain, LlamaIndex, AutoGen, CrewAI, DSPy, FastAPI.<br><strong>Cloud/MLOps:</strong> AWS (SageMaker, Bedrock, EKS, Lambda, S3), Docker, K8s, Terraform, MLflow, vLLM, Ollama, Ragas, TruLens.<br><strong>Vector/DBs:</strong> Pinecone, ChromaDB, FAISS, Qdrant, Neo4j, PostgreSQL, MongoDB, Redis, Elasticsearch.` },

  { keys: ["python","programming language","coding"],
    answer: () => `Python is Rohit's <strong>expert language</strong>. He also works in SQL, Java, JavaScript and Bash/Shell.` },

  { keys: ["aws","cloud","sagemaker","bedrock","lambda","eks","docker","kubernetes","terraform","deploy","serving","vllm","ollama"],
    answer: () => `Cloud & MLOps: <strong>AWS</strong> (SageMaker, Bedrock, EKS, Lambda, S3), Docker, Kubernetes, Terraform, MLflow, Jenkins, plus LLM serving with <strong>vLLM</strong> and <strong>Ollama</strong>, and eval with Ragas & TruLens. He's run full CI/CD with 99.9% uptime.` },

  { keys: ["project","projects","portfolio","built","work samples","sec","diffusion","face"],
    answer: () => `Selected projects:<br>1️⃣ <strong>Advanced RAG for SEC Filings</strong> — LlamaIndex + Groq, semantic chunking, hybrid search (dense+BM25), &lt;5% hallucination, live Streamlit app.<br>2️⃣ <strong>Face-Generation-Diffusion</strong> — custom PyTorch diffusion model, 85% FID improvement on 100k+ images, 70% faster inference via mixed-precision + gradient checkpointing.<br>See the <a href="#projects">Projects</a> and <a href="#repos">GitHub</a> sections too.` },

  { keys: ["education","degree","university","dayton","masters","study","gpa","school","vel tech","college"],
    answer: () => `🎓 <strong>M.S. Computer Science</strong>, University of Dayton (Aug 2023 – May 2025, GPA 3.3).<br>🎓 <strong>B.Tech, Electronics & Communication Engineering</strong>, Vel Tech University, Chennai (2017–2021, GPA 8.1).` },

  { keys: ["certification","certificate","oci","oracle","certified"],
    answer: () => `Certifications: <strong>Oracle Certified OCI Generative AI Professional (2025)</strong> and <strong>OCI Data Science Professional (2025)</strong>.` },

  { keys: ["achievement","award","hackathon","won","winner","smart india","codefest","robotics"],
    answer: () => `🏆 Winner, <strong>Smart India Hackathon '20</strong> (ML Crime Mapping)<br>🏆 Winner, <strong>CodeFest '21</strong> (Disaster Management)<br>🥈 2nd Place, <strong>Bonjour India '17</strong> (French Embassy Robotics Competition).` },

  { keys: ["contact","email","reach","hire","phone","call","get in touch","connect","linkedin","github"],
    answer: () => `Let's connect!<br>✉ <a href="mailto:${DATA.email}">${DATA.email}</a><br>📞 ${DATA.phone}<br>in <a href="${DATA.linkedin}" target="_blank">LinkedIn</a><br>⌥ <a href="${DATA.github}" target="_blank">GitHub</a>` },

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

  let best = null, bestScore = 0;
  for (const entry of KB) {
    let score = 0;
    for (const k of entry.keys) {
      if (q.includes(k)) score += k.split(" ").length * 2; // multi-word phrase = stronger
      else { const kw = k.split(" "); for (const w of kw) if (w.length > 3 && q.includes(w)) score += 1; }
    }
    if (score > bestScore) { bestScore = score; best = entry; }
  }
  if (best && bestScore >= 2) return best.answer();
  return null;
}

/* ----- Groq LLM integration (with résumé system prompt) ----- */
const CFG = window.AGENT_CONFIG || {};
const AGENT_MODE = CFG.groqProxyUrl ? "proxy" : (CFG.groqApiKey ? "direct" : "local");

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

const SYSTEM_PROMPT = `You are Rohit Kumar Manne's personal AI portfolio assistant, embedded on his website. You answer questions from recruiters and visitors about Rohit, using ONLY the résumé facts below.

Rules:
- Speak about Rohit in a warm, confident, professional first-person-of-the-assistant voice (e.g. "Rohit built…", "He specializes in…").
- Be concise: 2–5 sentences or a short bulleted list. Use simple HTML (<strong>, <br>, <a>, • ) — NOT markdown.
- Only use facts from the résumé. If something isn't covered, say so briefly and point them to ${DATA.email}. Never invent employers, dates, or numbers.
- For contact requests, share email ${DATA.email}, phone ${DATA.phone}, and his LinkedIn/GitHub links.

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
    const r = await fetch(CFG.groqProxyUrl, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages, model: CFG.model }),
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

// Lightweight, safe markdown -> HTML for LLM replies (models often emit markdown)
function formatReply(s) {
  s = s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/(^|[^*])\*(?!\s)([^*]+?)\*/g, "$1<em>$2</em>");
  s = s.replace(/`([^`]+?)`/g, "<code>$1</code>");
  s = s.replace(/\[(.+?)\]\((https?:[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  s = s.replace(/(^|\s)(https?:\/\/[^\s<]+)/g, '$1<a href="$2" target="_blank" rel="noopener">$2</a>');
  s = s.replace(/([\w.+-]+@[\w-]+\.[\w.-]+)/g, '<a href="mailto:$1">$1</a>');
  s = s.replace(/^[\-•]\s?(.+)$/gm, "• $1");
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
      addMsg(formatReply(reply), "bot");
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
