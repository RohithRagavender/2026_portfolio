export const profile = {
  name: "Rohith Ragavender C",
  role: "Data Engineer | AI/ML Engineer",
  location: "Coimbatore, India",
  email: "rohithragavender@gmail.com",
  phone: "+91 6379851657",
  github: "https://github.com/RohithRagavender",
  linkedin: "https://www.linkedin.com/in/rohith0410",
  resume: "/Rohith_Ragavender_Resume.pdf",
  summary:
    "I build production data ingestion, indexing and retrieval pipelines with Python, FastAPI, SQL databases and vector stores. Multi-tenant isolation, Celery/Redis background processing and token-cost tracking for enterprise clients in healthcare, legal, IT and education.",
};

export const stats = [
  { value: "1+ yrs", label: "shipping AI in production" },
  { value: "100+", label: "LLM providers via LiteLLM" },
  { value: "<500ms", label: "voice pipeline latency" },
];

export const experience = [
  {
    company: "Techno Tackle Software Solutions",
    role: "AI/ML Engineer",
    when: "Feb 2026 – Present",
    points: [
      "Engineered enterprise RAG systems for internal knowledge retrieval and document intelligence.",
      "Architected retrieval pipelines with semantic search and metadata filtering on ChromaDB and Pinecone.",
      "Built scalable FastAPI backends and document ingestion pipelines for enterprise clients.",
      "Applied chunking strategies and source-grounded generation to control hallucinations.",
      "Delivered AI proofs of concept and production solutions; mentored the team on AI/ML.",
      "Developed anti-spoofing facial recognition pipelines for access control.",
    ],
  },
];

export const projects = [
  {
    title: "TechnoTalk",
    sub: "Multi-tenant enterprise RAG SaaS",
    role: "Lead Architect & Full Stack",
    desc: "Hybrid tenant isolation with organization-scoped MySQL tables and per-org ChromaDB collections. PDF → PyMuPDF → chunk → embed → index, with similarity-threshold gating, per-org token and cost tracking, and LiteLLM for 100+ providers.",
    stack: ["FastAPI", "MySQL 8", "ChromaDB", "LiteLLM", "LangChain", "Celery", "Redis", "MinIO", "Docker"],
    featured: true,
  },
  {
    title: "TT Voice",
    sub: "AI voice banking assistant",
    role: "Full Stack AI",
    desc: "Full-duplex audio streaming over WebSockets with voice activity detection; sub-500ms multilingual STT/TTS via Groq and Sarvam AI.",
    stack: ["React", "FastAPI", "WebSockets", "Asyncio", "Groq", "Sarvam AI"],
  },
  {
    title: "Cresio AI",
    sub: "Career coach & skill-gap analyzer",
    role: "Full Stack AI",
    desc: "Central User Skill Graph drives gap analysis, roadmaps and assessments. 6-agent gateway with primary and fallback LLM and transparent failover.",
    stack: ["React", "TypeScript", "FastAPI", "ChromaDB", "Groq"],
  },
  {
    title: "MedBot",
    sub: "Clinical knowledge assistant, Ganga Hospital",
    role: "Full Stack AI",
    desc: "RAG with top-3 retrieval, a 0.30 similarity gate and source-cited answers, plus a document API for upload, extraction, indexing and admin.",
    stack: ["Python", "FastAPI", "ChromaDB", "LangChain"],
  },
  {
    title: "LeadSense",
    sub: "AI lead qualification platform",
    role: "Full Stack AI",
    desc: "Dual LLM failover (Groq with Ollama fallback), BANT lead scoring, and a sales dashboard with CSV/TXT export and role-based admin.",
    stack: ["React", "FastAPI", "MySQL", "Groq", "Ollama"],
  },
];

export const skills = [
  ["Languages", ["Python", "SQL", "JavaScript", "TypeScript"]],
  ["Data Processing", ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "PyMuPDF", "EDA"]],
  ["Databases", ["MySQL", "PostgreSQL", "SQLite", "ChromaDB", "Pinecone", "SQLAlchemy", "Alembic"]],
  ["Pipelines / Queues", ["Ingestion", "Chunking & Embedding", "Celery", "Redis", "MinIO", "WebSockets", "Asyncio"]],
  ["Backend / APIs", ["FastAPI", "REST", "Nginx", "Postman"]],
  ["Cloud / DevOps", ["AWS", "Docker", "Git", "CI/CD", "Vercel", "Render"]],
  ["AI / LLM", ["RAG", "LangChain", "LiteLLM", "Sentence Transformers", "Groq", "Ollama", "Claude API", "OpenAI API", "MCP"]],
  ["Methodologies", ["Agile", "Scrum", "System Design", "Team Management"]],
];

export const education = [
  { name: "M.Kumarasamy College of Engineering, Karur", detail: "MCA, Computer Science", when: "2023 – 2025" },
  { name: "Manonmaniam Sundaranar University", detail: "B.Sc Computer Science", when: "Nov 2020 – Apr 2023" },
];

export const certs = [
  "Anthropic: Claude with the Anthropic API",
  "Anthropic: Model Context Protocol (MCP)",
  "Anthropic: Claude Code in Action",
  "HackerRank: SQL",
  "HackerRank: Data Science",
];
