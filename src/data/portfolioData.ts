export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  fields: ('swe' | 'aiml' | 'ds')[];
  featured: boolean;
  metrics?: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  kaggleUrl?: string;
  highlights: string[];
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
  telegram: 'https://t.me/Duke_absolute',
  telegramHandle: '@Duke_absolute',
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

export const PROJECTS: Project[] = [
  {
    id: 'prismr',
    title: 'PrismR — Model Readiness & Data Quality Validation Framework',
    tagline: 'Open-source R package introducing a Statistical Validation Layer to audit dataset readiness before ML deployment.',
    description: 'Architected and published an open-source R package implementing a Statistical Validation Layer to evaluate raw dataset quality, feature distributions, and data leakage prior to predictive modeling.',
    longDescription: 'PrismR introduces automated statistical validation pipelines for data quality assessment, anomaly detection, variance analysis, and data leakage detection (target leakage, identifier risks). Implements mathematical feature transformation recommendations (Box-Cox, Yeo-Johnson) based on skewness and kurtosis analysis.',
    fields: ['ds', 'aiml', 'swe'],
    featured: true,
    metrics: ['Published Open-Source Package', 'Automated Leakage Audit', 'CRAN S3 Standard'],
    techStack: ['R', 'S3 OOP', 'Statistical Analytics', 'Data Leakage Audit', 'Git', 'GitHub'],
    githubUrl: 'https://github.com/Arshit-dv/PrismR',
    highlights: [
      'Architected and published an open-source R package introducing a Statistical Validation Layer prior to predictive modeling.',
      'Engineered algorithms for automated data leakage detection (target leakage, identifier risks) and data quality scoring.',
      'Implemented mathematical feature transformation recommendations (Box-Cox, Yeo-Johnson) based on skewness and kurtosis.',
      'Architected modular S3-based statistical validation framework following package development standards.'
    ]
  },
  {
    id: 'sport-share',
    title: 'Sport-share — Real-Time Distributed Community Event Platform',
    tagline: 'Real-time distributed web platform for organizing, discovering, and joining sports events with WebSockets.',
    description: 'Engineered a real-time distributed platform using Node.js and React for organizing, discovering, and joining sports events with Socket.io WebSockets messaging.',
    longDescription: 'Sport-share features low-latency real-time messaging using Socket.io WebSockets, handling concurrent user activity and event state synchronization. Integrated Firebase token authentication and cloud-based media storage pipelines to optimize load times.',
    fields: ['swe'],
    featured: true,
    metrics: ['Real-Time Socket.io Sync', 'Firebase Token Auth', 'MongoDB Cloud Storage'],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io WebSockets', 'Firebase'],
    githubUrl: 'https://github.com/Arshit-dv/SportShare',
    liveUrl: 'https://sport-share.vercel.app',
    highlights: [
      'Engineered real-time distributed platform using Node.js and React for sports event discovery.',
      'Developed low-latency real-time messaging using Socket.io WebSockets for event synchronization.',
      'Integrated Firebase token authentication and cloud media storage pipelines to optimize load times.',
      'Designed scalable MongoDB schemas supporting efficient user and event state management.'
    ]
  },
  {
    id: 'hr-payroll',
    title: 'HR & Payroll Management System',
    tagline: 'End-to-end SDLC application automating recruitment, employee management, and payroll workflows.',
    description: 'SDLC automation application for recruitment, employee management, and payroll workflows with ACID-compliant MySQL database schemas and role-based REST APIs.',
    longDescription: 'Architected normalized MySQL database schemas ensuring relational data integrity and low-latency transactional operations across payroll workflows. Built secure RESTful APIs incorporating role-based access control (RBAC) and JWT security.',
    fields: ['swe'],
    featured: true,
    metrics: ['ACID Compliant MySQL', 'JWT + RBAC Security', 'MVC Architecture'],
    techStack: ['MySQL', 'Node.js', 'Express.js', 'React.js', 'REST APIs', 'JWT', 'Postman'],
    githubUrl: 'https://github.com/Arshit-dv/HR-Recruitment-and-managment',
    highlights: [
      'Drove end-to-end SDLC automating recruitment, employee management, and payroll workflows.',
      'Architected normalized MySQL database schemas ensuring ACID compliance and low-latency transactions.',
      'Built secure RESTful APIs incorporating role-based access control (RBAC) and JWT authentication.',
      'Implemented MVC architecture, reusable components, and API validation using Postman.'
    ]
  },
  {
    id: 'diabetes-prediction',
    title: 'Diabetes Risk Prediction using Machine Learning',
    tagline: 'End-to-end ML pipeline for predicting diabetes risk using supervised classification models.',
    description: 'Machine learning pipeline for predicting diabetes risk using supervised classification techniques, exploratory data analysis (EDA), and hyperparameter tuning.',
    longDescription: 'Performed exploratory data analysis, preprocessing, feature selection, and outlier normalization. Trained and evaluated Logistic Regression, Decision Tree, KNN, and Random Forest classifiers using cross-validation and confusion matrix metrics.',
    fields: ['aiml', 'ds'],
    featured: false,
    metrics: ['Multi-Classifier Evaluation', 'EDA & Feature Normalization', 'Real-Time Inference'],
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Kaggle'],
    kaggleUrl: 'https://kaggle.com/code/arshitchoudhary/diabetes-prediction-using-ml',
    highlights: [
      'Developed end-to-end ML pipeline for predicting diabetes risk using supervised classification.',
      'Executed EDA, preprocessing, feature selection, and outlier normalization.',
      'Trained & evaluated Logistic Regression, Decision Tree, KNN, and Random Forest classifiers.',
      'Implemented hyperparameter tuning and deployed interactive inference workflow.'
    ]
  },
  {
    id: 'codebrix',
    title: 'CodeBrix — Modular ML Workflow & Code Generation Engine',
    tagline: 'Visual execution engine translating node-based workflows into clean Python code for ML pipelines.',
    description: 'Open-source visual execution engine that translates node-based workflows into executable Python code for machine learning pipelines.',
    longDescription: 'Designed modular Python components for automated exploratory data analysis, feature engineering, hyperparameter tuning, and real-time notebook-style diagnostic visualization.',
    fields: ['aiml', 'swe', 'ds'],
    featured: false,
    metrics: ['Node-to-Code Generator', 'Local Pipeline Runner', 'Extensible Plugin API'],
    techStack: ['Python', 'ML Infrastructure', 'Code Generation Engine', 'Rapid Prototyping'],
    githubUrl: 'https://github.com/Mayank3613/CodeBrix',
    highlights: [
      'Contributed to open-source visual execution engine translating node workflows into clean Python code.',
      'Designed modular Python components for automated EDA, feature engineering, and hyperparameter tuning.',
      'Implemented local execution engine evaluating analytical pipelines in real time with interactive notebook diagnostics.',
      'Built extensible plugin architecture supporting custom user-defined ML blocks.'
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core languages used for problem solving, backend systems, and statistical modeling.',
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
    description: 'Backend web technologies, real-time messaging, and database management systems.',
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
    title: 'Tools & Core CS Fundamentals',
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

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'vit-edu',
    role: 'B.Tech., Computer Science & Engineering',
    company: 'Vellore Institute of Technology (VIT Chennai)',
    location: 'Chennai, India',
    period: '2024 – Present',
    type: 'Education',
    fields: ['swe', 'aiml', 'ds'],
    summary: 'Core focus on Algorithms, Competitive Coding, Data Science, System Design, and Web Architectures.',
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
