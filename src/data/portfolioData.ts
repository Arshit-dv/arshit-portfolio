// ══════════════════════════════════════════════════════════════════════════════
// THE DEVELOPER'S CHRONICLE — Data Layer
// All existing hyperlinks preserved. No URL was modified, removed, or invented.
// ══════════════════════════════════════════════════════════════════════════════

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  fields: ('swe' | 'aiml' | 'ds')[];
  featured: boolean;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  kaggleUrl?: string;
  highlights: string[];
  chapter: 'main' | 'archive';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Familiar';
    fields: ('swe' | 'aiml' | 'ds')[];
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Education' | 'Project' | 'Achievement';
  fields: ('swe' | 'aiml' | 'ds')[];
  summary: string;
  achievements: string[];
  techStack: string[];
}

// ──────────────────────────────────────────────────────────────────────────────
// PERSONAL INFO — All original URLs preserved exactly
// ──────────────────────────────────────────────────────────────────────────────

export const PERSONAL_INFO = {
  name: 'Arshit Choudhary',
  roleTitles: [
    'Software Engineer',
    'Data Scientist',
    'Machine Learning Engineer'
  ],
  university: 'Vellore Institute of Technology (VIT Chennai)',
  degree: 'B.Tech., Computer Science and Engineering',
  gpa: '9.11 / 10.0',
  location: 'New Delhi, India',
  email: 'arshitchoudhary3010@gmail.com',
  kaggle: 'https://www.kaggle.com/arshitchoudhary',
  github: 'https://github.com/Arshit-dv',
  linkedin: 'https://linkedin.com/in/arshit-choudhary/',
  codechef: 'https://codechef.com/users/arshit_dv',
  leetcode: 'https://leetcode.com/u/Arshit_dv/',
  codeforces: 'https://codeforces.com/profile/Arshit_dv',
  resumeUrl: 'https://github.com/Arshit-dv',
  aboutMe: "A Computer Science undergraduate building scalable software, intelligent systems, and data-driven applications. My work spans Software Engineering, Data Science, and AI/Machine Learning, with a focus on solving real-world problems through practical and well-engineered solutions. Alongside projects, I contribute to open source while continuously strengthening my foundations in Data Structures & Algorithms through regular problem solving.",
  achievements: [
    { title: 'CGPA 9.11 / 10.0', desc: 'B.Tech Computer Science & Engineering @ VIT Chennai' },
    { title: 'Global Rank 1096', desc: 'Out of 28,000+ global participants in CodeChef START249D' },
    { title: 'Open-Source R Author', desc: 'Published PrismR statistical validation framework on GitHub' }
  ]
};

// ──────────────────────────────────────────────────────────────────────────────
// PROJECTS — All original URLs preserved; descriptions based on actual repos
// ──────────────────────────────────────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    id: 'prismr',
    title: 'PrismR',
    tagline: 'Pre-Modeling Statistical Audit Framework',
    description: 'An open-source R statistical validation package published on CRAN and R-universe. Introduces an empirical Model Readiness audit layer verifying data quality, leakage pathways, and mathematical transformation requirements prior to predictive modeling.',
    longDescription: 'PrismR formalizes a Pre-Modeling Statistical Validation Layer between raw preprocessing and ML training. Built in strict compliance with CRAN S3 OOP standards, it inspects tabular data across four stages: automated data quality scoring, multi-tier data leakage detection (target leakage and synthetic ID anomalies), distribution normality checks recommending Box-Cox/Yeo-Johnson transformations, and covariate feature stability.',
    fields: ['ds', 'aiml', 'swe'],
    featured: true,
    techStack: ['R', 'CRAN Package', 'S3 OOP', 'Statistical Auditing', 'Data Leakage Detection', 'Git'],
    githubUrl: 'https://github.com/Arshit-dv/PrismR',
    liveUrl: 'https://cran.rstudio.com/web/packages/PrismR',
    highlights: [
      'Published open-source R statistical package on CRAN and R-universe with 100% test coverage.',
      'Engineered multi-tier automated data leakage algorithms detecting target leakage, identifier risks, and spurious correlations.',
      'Implemented automated distribution transformations recommending Box-Cox and Yeo-Johnson algorithms from skewness/kurtosis metrics.',
      'Architected modular S3 OOP statistical audit pipelines with robust exception handling and comprehensive package tests.'
    ],
    chapter: 'main'
  },
  {
    id: 'codebrix',
    title: 'CodeBrix',
    tagline: 'ML Workflow and Code Generation Engine',
    description: 'An open-source visual programming platform and compiler for Machine Learning. Assemble directed acyclic graphs (DAGs) on an infinite React Flow canvas to build ML pipelines, stream real-time notebook outputs, and generate clean, standalone, zero-lock-in Python scripts.',
    longDescription: 'CodeBrix bridges visual flowchart modeling and production-grade Python data science. Operates as an interactive visual compiler: data scientists assemble type-checked DAG nodes for data ingestion, feature engineering, and model training. Compiles graphs deterministically into PEP-8 compliant scikit-learn Python scripts, executed in isolated subprocesses with real-time JSON protocol streaming, interactive metric cards, and confusion matrix visualizations.',
    fields: ['aiml', 'swe', 'ds'],
    featured: true,
    techStack: ['TypeScript', 'React 19', 'Python 3.10+', 'Tauri 2.0', 'React Flow', 'Scikit-learn', 'Zustand'],
    githubUrl: 'https://github.com/Arshit-dv/CodeBrix',
    highlights: [
      'Engineered interactive DAG workflow compiler translating visual nodes into clean, PEP-8 compliant Python scripts.',
      'Implemented bidirectional real-time JSON protocol streaming for isolated subprocess Python execution.',
      'Designed draggable notebook panel displaying streaming console logs, paginated datasets, and interactive metric cards.',
      'Built cross-platform desktop application using Tauri 2.0, React 19, and Zustand state stores with zero lock-in .cbx persistence.'
    ],
    chapter: 'main'
  },
  {
    id: 'hireflow',
    title: 'HireFlow',
    tagline: 'Recruitment and Employee Lifecycle Platform',
    description: 'A cloud-native, enterprise-grade Human Resource Management and Recruitment platform automating the entire "Hire-to-Retire" lifecycle. Features public candidate CV ingestion to AWS S3, structured interview scorecards, single-click atomic employee conversion, and dynamic payroll slip generation.',
    longDescription: 'HireFlow resolves fragmented talent pipelines by unifying candidate intake, interview evaluation, employee record management, and payroll accounting into an auditable cloud platform. Features secure AWS S3 document ingestion via IAM instance profiles, a 20-table normalized MySQL relational architecture, automated candidate-to-employee conversion via atomic SQL transactions, and automated single-click AWS EC2 production deployment behind Nginx.',
    fields: ['swe'],
    featured: true,
    techStack: ['React 18', 'Node.js', 'Express.js', 'MySQL 8.0', 'AWS EC2', 'AWS S3', 'Nginx', 'IAM'],
    githubUrl: 'https://github.com/Arshit-dv/HireFlow',
    highlights: [
      'Architected normalized 20-table MySQL relational database ensuring relational integrity across candidate-to-employee conversions.',
      'Integrated secure AWS S3 document ingestion utilizing IAM Instance Profiles for zero-credential cloud file storage.',
      'Implemented structured candidate evaluation funnels with interviewer scorecards and automated offer generation.',
      'Built dynamic payscale computation engine calculating base pay, HRA, DA, and real-time departmental payroll expenditure.'
    ],
    chapter: 'main'
  },
  {
    id: 'sportshare',
    title: 'SportShare',
    tagline: 'Real-Time Communication Project',
    description: 'A high-performance community athletic coordination platform featuring real-time messaging powered by Socket.io WebSockets, atomic Firebase Authentication to MongoDB ID-Sync middleware, event scheduling, and Cloudinary media gallery pipelines.',
    longDescription: 'SportShare facilitates local sports community organization through real-time communication and tournament coordination. Integrates low-latency bidirectional WebSockets via Socket.io for instant messaging and unread notification tracking. Implements an Atomic ID-Sync middleware synchronizing Firebase Auth tokens with MongoDB user documents, dynamic event creation with participant rosters, and Cloudinary image pipelines for match captures.',
    fields: ['swe'],
    featured: true,
    techStack: ['React.js', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB', 'Firebase Auth', 'Cloudinary'],
    githubUrl: 'https://github.com/Arshit-dv/SportShare',
    liveUrl: 'https://sport-share.vercel.app',
    highlights: [
      'Developed low-latency real-time chat and unread message counter synchronization with Socket.io WebSockets.',
      'Architected Atomic ID-Sync middleware linking Firebase authentication credentials directly to persistent MongoDB user records.',
      'Built dynamic event management allowing users to create, discover, and join local sporting tournaments with live RSVP state.',
      'Integrated Cloudinary cloud storage pipelines for event photo albums and community media galleries.'
    ],
    chapter: 'main'
  },
  {
    id: 'hr-recruitment-management',
    title: 'HR Recruitment and Management',
    tagline: 'Recruitment Funnel & Enterprise Payroll System',
    description: 'A full-stack Human Resource management platform digitizing the complete talent journey from applicant screening to automated payroll. Features a visual recruitment funnel, payscale grade matrices, department vacancy analytics, and employee grievance portals.',
    longDescription: 'Engineered an end-to-end HR management platform bridging the gap between manual job applications and enterprise HR suites. Features candidate qualification workflows across Screening, Interview, and Offer stages. Employs a normalized MySQL relational schema enforcing strict data integrity for salary bills, trainee-mentor assignments, and employee complaint tracking with role-based JWT authentication.',
    fields: ['swe'],
    featured: false,
    techStack: ['React.js', 'Node.js', 'Express.js', 'MySQL 8.0', 'JWT Auth', 'REST APIs', 'Postman'],
    githubUrl: 'https://github.com/Arshit-dv/HR-Recruitment-and-managment',
    highlights: [
      'Engineered multi-stage recruitment pipeline tracking candidates through screening, interviews, offers, and trainee conversion.',
      'Architected normalized MySQL relational schema with foreign key constraints ensuring zero data loss during payroll computations.',
      'Designed dynamic payroll generation system calculating monthly salaries based on configured payscale grades and performance.',
      'Built department organization hierarchy visualizer with live vacancy counts and employee grievance management portal.'
    ],
    chapter: 'main'
  },
  {
    id: 'meera',
    title: 'Meera',
    tagline: 'Local-First AI Agent',
    description: 'An autonomous, local-first artificial intelligence agent and edge inference runtime engineered with a strict zero-third-party-web-dependency architecture (pure Python standard library). Features OpenAI API drop-in compatibility, llama-server quantized GGUF execution, deterministic token budgeting, and persistent SQLite WAL memory.',
    longDescription: 'Meera is a production-grade on-device AI agent and edge inference runtime engineered for resource-constrained and compliance-critical environments (HIPAA, GDPR). Built with zero third-party web frameworks using pure Python standard library networking. Features native llama-server quantized GGUF model execution on NVIDIA CUDA/CPU, Win32 Kernel RAM sentries, deterministic token allocation (1024 max), guardrailed tool execution, and local-first SQLite WAL storage.',
    fields: ['aiml', 'swe'],
    featured: false,
    techStack: ['Python 3.12 (Stdlib)', 'Local LLM Inference', 'llama.cpp / GGUF', 'CUDA 12', 'SQLite WAL', 'OpenAI Spec API'],
    githubUrl: 'https://github.com/Arshit-dv/Meera',
    highlights: [
      'Architected local-first AI runtime with zero third-party web dependencies, implemented entirely with Python standard library.',
      'Engineered drop-in OpenAI API compatible HTTP server supporting token-by-token SSE streaming (/v1/chat/completions).',
      'Integrated local llama-server subprocess supervisor with Win32 Kernel RAM sentry (GlobalMemoryStatusEx) and 300s idle auto-reaper.',
      'Implemented guardrailed tool execution engine with human approval tokens and persistent SQLite WAL memory store.'
    ],
    chapter: 'main'
  },
  {
    id: 'nexdesk',
    title: 'NexDesk',
    tagline: 'Personal Digital Workspace & Cloud Productivity Hub',
    description: 'A personal productivity workspace for college students and developers, built with Python + Flask + HTML/CSS and backed by Amazon RDS MySQL and Amazon S3. Features task and recurring task tracking, subtasks, categorical notes, secure document storage with AWS KMS, and a real-time AWS CloudWatch diagnostics dashboard.',
    longDescription: 'NexDesk provides a centralized personal workspace designed for student and developer productivity. Features comprehensive task management with urgency/priority filters, recurring task auto-advancement, and subtask tracking. Integrates Amazon S3 for cloud document storage with type validation and 10MB limits, encrypted via AWS KMS customer-managed keys. Deploys via AWS CloudFormation with live RDS MySQL, CloudWatch metrics, and EC2 metadata health checks.',
    fields: ['swe'],
    featured: false,
    techStack: ['Python 3.12', 'Flask', 'Amazon RDS MySQL', 'Amazon S3', 'AWS KMS', 'CloudWatch', 'CloudFormation'],
    githubUrl: 'https://github.com/Arshit-dv/NexDesk',
    highlights: [
      'Built dual-mode personal workspace in Python/Flask with Amazon RDS MySQL and Amazon S3 document storage.',
      'Implemented recurring task engine with automated due-date advancement, completion histories, and subtask toggles.',
      'Engineered cloud document ingestion pipeline with file validation, AWS KMS encryption, and optional task attachments.',
      'Developed live AWS Status Dashboard displaying real-time connectivity diagnostics for RDS, S3, CloudWatch, and EC2.'
    ],
    chapter: 'main'
  },
  {
    id: 'kairo',
    title: 'Kairo',
    tagline: 'Career Intelligence Engine & ATS Diagnostics Platform',
    description: 'A full-stack career intelligence system and public dashboard featuring a FastAPI backend and modern UI. Integrates a Career Knowledge Graph Visualizer, automated Job Description (JD) Matcher & Project Ranker, Tailored Resume Studio, Kaggle profile synchronization, and granular ATS diagnostic breakdowns.',
    longDescription: 'Kairo empowers job seekers and engineers with automated career positioning. Combines a FastAPI REST API backend with an interactive frontend featuring a Career Knowledge Graph Visualizer, JD Matcher analyzing keyword alignment against job postings, Project Ranker, and a Tailored Resume Studio with automated ATS diagnostic scoring and growth velocity upskilling roadmaps.',
    fields: ['swe', 'aiml'],
    featured: false,
    techStack: ['Python', 'FastAPI', 'JavaScript', 'Knowledge Graphs', 'ATS Diagnostics', 'REST APIs'],
    githubUrl: 'https://github.com/Arshit-dv/Kairo',
    highlights: [
      'Engineered FastAPI backend providing career knowledge graph generation, profile sync, and resume analysis endpoints.',
      'Built interactive Career Knowledge Graph Visualizer mapping engineering competencies, repositories, and skill clusters.',
      'Implemented automated JD Matcher and Project Ranker computing alignment scores against incoming job requisitions.',
      'Designed Tailored Resume Studio with granular ATS diagnostic breakdowns and growth velocity upskilling roadmaps.'
    ],
    chapter: 'main'
  },
  {
    id: 'federis',
    title: 'Federis',
    tagline: 'Privacy-Preserving Federated Learning Platform',
    description: 'A multi-organization federated learning platform engineered to train shared global AI models across independent organizations without raw data ever leaving local infrastructure. Features Flower-based FL orchestration, PyTorch model training, Secure Aggregation, and Differential Privacy.',
    longDescription: 'Federis enables privacy-preserving collaborative AI model training across organizational boundaries. Eliminates central data pooling by dispatching shared models to participating clients for local training on private data, aggregating only model weights via Flower and PyTorch. Enforces cryptographic and statistical privacy through Secure Aggregation and Differential Privacy with full auditability, FastAPI services, and Docker containerization.',
    fields: ['aiml', 'swe'],
    featured: false,
    techStack: ['Python', 'PyTorch', 'Flower (FL)', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/Arshit-dv/Federis',
    highlights: [
      'Architected federated learning framework using Flower and PyTorch for distributed model training across independent nodes.',
      'Implemented Secure Aggregation and Differential Privacy mechanisms ensuring zero raw data leakage during weight synchronization.',
      'Engineered modular multi-team architecture decoupling AI Core training, Platform API, and Security layers via shared contracts.',
      'Containerized platform deployment with Docker, FastAPI backend services, and PostgreSQL/Redis persistence layers.'
    ],
    chapter: 'main'
  },
  {
    id: 'diabetes-prediction',
    title: 'Diabetes Risk Prediction using ML',
    tagline: 'Supervised Clinical Classification & Diagnostic ML Study',
    description: 'An end-to-end healthcare machine learning study investigating diagnostic classification on clinical patient records. Features statistical exploratory data analysis, interquartile range (IQR) outlier normalization, and cross-validated evaluation of multiple classification algorithms.',
    longDescription: 'This data science study investigates diagnostic classification on clinical patient records. Features extensive exploratory data analysis (EDA), interquartile range (IQR) outlier normalization, correlation heatmaps, and feature importance analysis. Evaluated Logistic Regression, Decision Tree, K-Nearest Neighbors, and Random Forest ensemble classifiers using stratified K-Fold cross-validation, confusion matrices, and ROC-AUC curves.',
    fields: ['aiml', 'ds'],
    featured: false,
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Kaggle'],
    kaggleUrl: 'https://kaggle.com/code/arshitchoudhary/diabetes-prediction-using-ml',
    highlights: [
      'Developed and published end-to-end diagnostic ML pipeline evaluating clinical risk classification.',
      'Executed statistical EDA, distribution normality assessments, and IQR-based outlier normalization.',
      'Trained and evaluated Logistic Regression, Decision Tree, KNN, and Random Forest classifiers.',
      'Diagnosed predictive performance using Stratified K-Fold cross-validation, Confusion Matrices, and ROC-AUC curves.'
    ],
    chapter: 'main'
  }
];

// ──────────────────────────────────────────────────────────────────────────────
// SKILLS — Only skills confirmed by existing portfolio and repositories
// ──────────────────────────────────────────────────────────────────────────────

export const SKILLS: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core languages for problem solving, backend systems, and statistical modeling.',
    skills: [
      { name: 'Python', level: 'Advanced', fields: ['swe', 'aiml', 'ds'] },
      { name: 'SQL (MySQL, PL/SQL)', level: 'Advanced', fields: ['swe', 'ds'] },
      { name: 'C++', level: 'Advanced', fields: ['swe'] },
      { name: 'Java', level: 'Proficient', fields: ['swe'] },
      { name: 'JavaScript', level: 'Advanced', fields: ['swe'] },
      { name: 'R', level: 'Proficient', fields: ['ds', 'aiml'] }
    ]
  },
  {
    title: 'Data Science & AI / ML',
    description: 'Libraries, machine learning tools, and LLM frameworks.',
    skills: [
      { name: 'Pandas & NumPy', level: 'Advanced', fields: ['ds', 'aiml'] },
      { name: 'Scikit-learn', level: 'Advanced', fields: ['aiml', 'ds'] },
      { name: 'LLMs & RAG Architectures', level: 'Proficient', fields: ['aiml'] },
      { name: 'LangChain', level: 'Proficient', fields: ['aiml'] },
      { name: 'Prompt Engineering', level: 'Proficient', fields: ['aiml'] },
      { name: 'PySpark', level: 'Familiar', fields: ['ds'] },
      { name: 'Matplotlib & Visualization', level: 'Advanced', fields: ['ds'] }
    ]
  },
  {
    title: 'Frameworks & Databases',
    description: 'Backend web technologies, real-time messaging, and database management.',
    skills: [
      { name: 'React.js', level: 'Advanced', fields: ['swe'] },
      { name: 'Node.js & Express.js', level: 'Advanced', fields: ['swe'] },
      { name: 'MongoDB', level: 'Advanced', fields: ['swe'] },
      { name: 'MySQL', level: 'Advanced', fields: ['swe', 'ds'] },
      { name: 'WebSockets (Socket.io)', level: 'Proficient', fields: ['swe'] },
      { name: 'REST APIs & JWT Auth', level: 'Advanced', fields: ['swe'] },
      { name: 'Firebase', level: 'Proficient', fields: ['swe'] }
    ]
  },
  {
    title: 'Tools & Fundamentals',
    description: 'Version control, environments, and core computer science concepts.',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', fields: ['swe', 'aiml', 'ds'] },
      { name: 'Docker', level: 'Proficient', fields: ['swe', 'aiml'] },
      { name: 'Postman', level: 'Advanced', fields: ['swe'] },
      { name: 'Jupyter Notebook & VS Code', level: 'Advanced', fields: ['ds', 'aiml'] },
      { name: 'Data Structures & Algorithms', level: 'Advanced', fields: ['swe'] },
      { name: 'OOP, DBMS, OS, Networks', level: 'Advanced', fields: ['swe'] }
    ]
  }
];

// ──────────────────────────────────────────────────────────────────────────────
// EXPERIENCES — Preserved exactly from original
// ──────────────────────────────────────────────────────────────────────────────

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'vit-edu',
    role: 'B.Tech., Computer Science & Engineering',
    company: 'Vellore Institute of Technology (VIT Chennai)',
    location: 'Chennai, India',
    period: '2024 – Present',
    type: 'Education',
    fields: ['swe', 'aiml', 'ds'],
    summary: 'Core focus on Software Engineering, Data Science, AI/Machine Learning, and Data Structures & Algorithms.',
    achievements: [
      'Maintained a top-tier CGPA of 9.11/10.0 across CS coursework.',
      'Global Rank 1096 out of 28,000+ global coders in CodeChef START249D.',
      'Active developer building open-source statistical R packages and full-stack platforms.'
    ],
    techStack: ['C++', 'Python', 'Java', 'SQL', 'Data Structures', 'DBMS', 'OS', 'Networks']
  },
  {
    id: 'school-edu',
    role: 'Class XII (C.B.S.E.)',
    company: 'Govt. Boys Sr. Sec. School',
    location: 'Delhi, India',
    period: 'Completed 2023',
    type: 'Education',
    fields: ['swe'],
    summary: 'Senior Secondary Education with focus on Computer Science, Mathematics, Physics and Chemistry.',
    achievements: [
      'Graduated Class 12 with strong academic record in Mathematics and Science.'
    ],
    techStack: ['Mathematics', 'Computer Science']
  }
];

// ──────────────────────────────────────────────────────────────────────────────
// LINK INVENTORY — Complete reference of every preserved URL
// ──────────────────────────────────────────────────────────────────────────────
// GitHub Profile:    https://github.com/Arshit-dv
// LinkedIn:          https://linkedin.com/in/arshit-choudhary/
// CodeChef:          https://codechef.com/users/arshit_dv
// LeetCode:          https://leetcode.com/u/Arshit_dv/
// Codeforces:        https://codeforces.com/profile/Arshit_dv
// Kaggle Profile:    https://www.kaggle.com/arshitchoudhary
// Email:             arshitchoudhary3010@gmail.com
// Resume:            https://github.com/Arshit-dv
// PrismR GitHub:     https://github.com/Arshit-dv/PrismR
// SportShare GitHub: https://github.com/Arshit-dv/SportShare
// SportShare Live:   https://sport-share.vercel.app
// HR System GitHub:  https://github.com/Arshit-dv/HR-Recruitment-and-managment
// CodeBrix GitHub:   https://github.com/Arshit-dv/CodeBrix
// HireFlow GitHub:   https://github.com/Arshit-dv/HireFlow
// NexDesk GitHub:    https://github.com/Arshit-dv/NexDesk
// Kairo GitHub:      https://github.com/Arshit-dv/Kairo
// Meera GitHub:      https://github.com/Arshit-dv/Meera
// Diabetes Kaggle:   https://kaggle.com/code/arshitchoudhary/diabetes-prediction-using-ml
// OpenGraph URL:     https://github.com/Arshit-dv
