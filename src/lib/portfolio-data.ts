export const profile = {
  name: "Snekha Baskar",
  role: "AI/ML Engineer",
  tagline:
    "I build intelligent, agentic systems that bridge the gap between complex LLMs and real-world business needs.",
  resumeUrl:
    "https://drive.google.com/file/d/12jknqANJi6ym10rfI_mtE38ldij9-hHM/view",
  github: "https://github.com/SnekhaB",
  linkedin: "https://www.linkedin.com/in/snekhabaskar/",
};

export const aboutParagraphs = [
  "I am an AI/ML Engineer with hands-on production experience designing, building, and optimising end-to-end RAG pipelines, Generative AI, LLM integration, and Multi-Agent Systems. I build scalable, production-grade AI applications with a strong focus on performance, faithfulness, and reliability.",
  "I translate real-world business requirements into AI solutions using modern GenAI frameworks and NLP techniques, working across the full stack — from intelligent data ingestion and vector retrieval to scalable RESTful APIs backed by ChromaDB, Qdrant, and Redis.",
  "With a background in Bioinformatics & Data Science, I bring a unique analytical perspective to AI engineering, combining deep ML/NLP fundamentals with practical production AI experience.",
];

export const stack = [
  { stage: "Data", detail: "Crawl4AI · Docling ingestion" },
  { stage: "Retrieval", detail: "Qdrant · ChromaDB · BM25 hybrid" },
  { stage: "LLM", detail: "LlamaIndex · LangChain · RAGAS" },
  { stage: "Agents", detail: "LangGraph · MCP routing" },
  { stage: "APIs", detail: "Flask REST · FastMCP servers" },
  { stage: "Production", detail: "Redis caching · LangFuse" },
];

export const experience = {
  role: "AI/ML Engineer",
  company: "Neorains Technologies Private Limited",
  period: "Jul 2025 — Present",
  bullets: [
    "Designed and implemented end-to-end RAG pipelines using LlamaIndex, LangChain and Qdrant for hybrid retrieval (BM25 + Vector Search) — resulting in 50% improvement in embedding & retrieval accuracy and 60% improvement in LLM response quality.",
    "Implemented RAGAS for model evaluation, faithfulness, and continuous improvement.",
    "Architected Multi-Agent Systems using LangGraph with intelligent task routing and MCP integration; enabled connection to multiple LLMs via API keys.",
    "Reduced retrieval latency by 30% by migrating the retrieval layer from LangChain to LlamaIndex and integrating Redis caching.",
    "Developed scalable RESTful APIs (Flask) and MCP server integrated with Shopify, supporting 200+ daily active users.",
  ],
  tech: [
    "LangGraph",
    "LlamaIndex",
    "LangChain",
    "Qdrant",
    "RAGAS",
    "FastMCP",
    "Python",
    "Flask",
    "Redis",
  ],
  metrics: [
    { value: "50%", label: "Retrieval accuracy" },
    { value: "60%", label: "LLM response quality" },
    { value: "30%", label: "Lower latency" },
    { value: "200+", label: "Daily active users" },
  ],
  features: [
    {
      title: "Shopify MCP Server",
      description:
        "Developed a high-performance MCP server for Shopify, enabling real-time order tracking, customer data retrieval, and automated inventory updates. Integrated with multi-agent workflows for intelligent e-commerce management.",
      tech: ["Python", "FastMCP", "Shopify API"],
    },
    {
      title: "Advanced RAG Pipeline with Re-ranking",
      description:
        "Built a robust Retrieval-Augmented Generation pipeline utilizing Docling for structured parsing and a cross-encoder re-ranking step to boost response precision by 60%.",
      tech: ["LlamaIndex", "Docling", "Cross-Encoders"],
    },
    {
      title: "Web Crawling & Data Ingestion Pipeline",
      description:
        "Engineered a scalable pipeline using Crawl4AI to transform unstructured web content into clean, structured markdown for LLM processing.",
      tech: ["Crawl4AI", "Markdown", "Asyncio"],
    },
  ],
};

export const skillGroups = [
  {
    title: "RAG Architecture & LLM Integration",
    items: [
      "Langchain",
      "LangGraph",
      "LlamaIndex",
      "LangFuse",
      "RAGAS",
      "ChromaDb",
      "Qdrant",
      "FastMCP",
    ],
  },
  {
    title: "Programming & Core Libraries",
    items: [
      "Python",
      "Flask",
      "REST APIs",
      "Pandas",
      "Numpy",
      "Scikit-learn",
      "NLTK",
      "Spacy",
    ],
  },
  {
    title: "Deep Learning",
    items: ["RNN", "CNN", "LSTM", "Transformer Architecture"],
  },
];

export const skillNotes = [
  {
    title: "NLP Techniques",
    body: "Tokenization, Stemming, Lemmatization, POS tagging, Stopword removal, Vectorize words using TF-IDF or Word2Vec.",
  },
  {
    title: "Machine Learning",
    body: "Supervised: Linear Regression, Logistic Regression, KNN, Decision Tree, Random Forest and XGBoost. Unsupervised: K-means Clustering and PCA for dimensionality reduction.",
  },
];

export const projects = [
  {
    title: "NLP-Based Query Intent Classifier",
    kicker: "Classical NLP · Deployed",
    description:
      "An SVM-based intent classifier that distinguishes genuine user queries from casual conversation, served through a Flask web application for real-time prediction.",
    bullets: [
      "Built an SVM-based Intent Classifier to distinguish genuine user queries from casual conversation.",
      "Developed a complete NLP preprocessing pipeline using NLTK (tokenization, lemmatization, POS tagging, stopword removal, and punctuation cleaning).",
      "Trained SVM model with TF-IDF Vectoriser and deployed a Flask web application for real-time prediction using Pickle.",
    ],
    tech: [
      "ML Algorithms",
      "NLTK",
      "Scikit-learn (SVM)",
      "TF-IDF",
      "Flask",
      "Pickle",
    ],
    link: null as string | null,
  },
  {
    title: "FocusFlow — Daily Productivity Coach & Task Prioritizer",
    kicker: "AWS PartyRock · Generative AI",
    description:
      "Built during the AWS AI & ML Scholars program (Udacity × AWS). A GenAI-powered productivity app that takes tasks, available hours, and energy level as inputs and generates a personalised prioritised task plan, a time-blocked daily schedule, and a motivational wellness tip.",
    bullets: [
      "Accepts multi-line task input, available hours, and current energy level (High / Medium / Low) as user inputs.",
      "Generates a Prioritised Task List with time estimates and AI reasoning for each task.",
      "Produces a Time-Blocked Daily Schedule aligned to the user's energy and focus capacity.",
      "Delivers a personalised Wellness & Motivation Tip as a bonus output.",
    ],
    tech: [
      "AWS PartyRock",
      "Generative AI",
      "Prompt Engineering",
      "Amazon Bedrock",
    ],
    link: "https://partyrock.aws/u/snekha/-S30r5K6S/FocusFlow-Daily-Productivity-Coach",
  },
];

export const education = {
  school: "Sathyabama (Deemed) University",
  degree: "BSc Bioinformatics and Data Science",
  period: "Sep 2020 - May 2023",
  detail: "CGPA : 8.25",
};

export const certifications = [
  {
    name: "AWS AI Practitioner Challenge",
    issuer: "Udacity",
    period: "Apr 2026 – Jun 2026",
    url: "https://www.udacity.com/certificate/e/c809a01c-3e6d-11f1-a1b6-b3ecef5d3550",
  },
  {
    name: "Advanced Web and UI/UX Design",
    issuer: "Magic Bus India Foundation",
    period: "Dec 2024 – Apr 2025",
    url: "https://drive.google.com/file/d/1yMf3iKKMGontWXGqPiMfuqQzCHqBqlry/view?usp=sharing",
  },
  {
    name: "Full Stack - Python",
    issuer: "Quality Thought",
    period: "Apr 2024 – May 2024",
    url: "https://drive.google.com/file/d/1f77no9txpwv9MNmvBeXwci0V381IPXH7/view?usp=sharing",
  },
  {
    name: "Data Science",
    issuer: "GUVI Geek Network",
    period: "May 2023 – Oct 2023",
    url: "https://drive.google.com/file/d/19CfL6uSUNNap9-QukP8fgoI_tf5ph9tD/view?usp=sharing",
  },
];
