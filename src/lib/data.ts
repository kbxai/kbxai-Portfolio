import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: "Kartik Bajaj",
    location: "Ambala, Haryana, India",
    email: "kartikbajaj.me@gmail.com",
    phone: "(+91) 98965-35933",
    github: "github.com/kbxai",
    linkedin: "linkedin.com/in/kbxai",
    tagline: "AI / Full-Stack Engineer",
    bio: "Data Science student at IIT Madras writing code for machine learning pipelines and full-stack backend systems. Built audio classifiers with ResNet-50 and engineered asynchronous appointment backends with FastAPI & Celery. Focused on high-fidelity APIs and functional AI integrations."
  },
  journey: [
    "Building ML classification models and API-driven web systems.",
    "Seeking opportunities to design scalable pipelines and asynchronous backends."
  ],
  tracks: [
    {
      id: 'ml',
      title: "Data Intelligence",
      subtitle: "ML & AI",
      description: "Training neural networks, processing audio spectrograms, and implementing text vectorization using PyTorch and Scikit-Learn. Focused on validation folds and model diagnostics.",
      skills: ["PyTorch", "HuggingFace", "NLP", "Scikit", "Transfer Learning", "Transformers"]
    },
    {
      id: 'fs',
      title: "Full Stack Systems",
      subtitle: "Web Engineering",
      description: "Developing async backend jobs, API routes, and task workers using FastAPI, Flask, Redis, and Celery. Focused on relational database schemas and clean API design.",
      skills: ["FastAPI", "Flask", "Celery", "Redis", "Vue.js 3", "REST APIs"]
    }
  ],
  values: [
    {
      title: "Integrated Pipelines",
      description: "Focus on connecting trained model checkpoints directly into web APIs and production task workers rather than leaving them in notebooks."
    },
    {
      title: "Rigorous Validation",
      description: "Emphasis on cross-validation strategy, error analysis, and robust pipeline metrics over raw leaderboard hacking."
    },
    {
      title: "Functional Architecture",
      description: "Focus on relational database integrity, structured async queues, JWT access controls, and cleanly documented REST routes."
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Data Science",
      institution: "Indian Institute of Technology Madras",
      year: "2024 – Present",
      grade: "CGPA: 8.23 / 10"
    },
    {
      degree: "Higher Secondary Certificate (Class XII)",
      institution: "S.A. Jain Senior Model School",
      year: "2023 – 2024",
      grade: "Grade: 9.0"
    }
  ],
  projects: [
    {
      title: "Messy Mashup Genre Classification",
      category: 'ml',
      tags: ["PyTorch", "ResNet-50", "HuggingFace", "Audio ML"],
      githubUrl: "https://github.com/kbxai/Messy-Mashup-Genre-Classification",
      description: [
        "Synthesized 10,000 noisy training mashups via ESC-50 noise injection and StratifiedGroupKFold to close distribution gap.",
        "Fine-tuned ResNet-50 (ImageNet) and Audio Spectrogram Transformer (AudioSet) on Log-Mel Spectrograms.",
        "Applied Test-Time Augmentation and a weighted ensemble for the final leaderboard score."
      ],
      metric: "Kaggle F1 = 0.954"
    },
    {
      title: "LLM Deployment AI Agent",
      category: 'fs',
      tags: ["FastAPI", "OpenAI / Gemini", "GitHub API"],
      githubUrl: "https://github.com/kbxai/LLM-Powered-Code-Deployment-Agent",
      description: [
        "Engineered a prompt-driven REST API service that converts natural language instructions into deployable HTML applications.",
        "Leveraged Pydantic schema validation to enforce JSON output.",
        "Orchestrated full deployment automation via chained third-party API calls with asyncio for non-blocking concurrent tasks."
      ],
      metric: "GenAI Ops"
    },
    {
      title: "MedSyncPro",
      category: 'fs',
      tags: ["Flask", "Vue.js 3", "Celery", "Redis"],
      githubUrl: "https://github.com/kbxai/MedSyncPro-Hospital-Management-System",
      description: [
        "Architected a production-grade RBAC web application (Admin/Doctor/Patient) with role-based JWT auth.",
        "Designed conflict-aware appointment booking with real-time slot validation.",
        "Engineered a Celery + Redis async job pipeline for daily reminders, monthly reports, and CSV exports."
      ],
      metric: "Full Stack HMS"
    },
    {
      title: "Comment Category Prediction",
      category: 'ml',
      tags: ["Scikit-Learn", "LightGBM", "TF-IDF", "Ensemble"],
      githubUrl: "https://github.com/kbxai/Comment-Category-Prediction-Challenge",
      description: [
        "Engineered 9 custom text and engagement features unified in a ColumnTransformer pipeline.",
        "Processed word/char n-grams on noisy, class-imbalanced real-world data.",
        "Achieved 0.8295 Macro F1 via Voting Classifier (Bagging LR + Calibrated SVC + Tuned SGD)."
      ],
      metric: "F1 = 0.8295"
    },
    {
      title: "SmartParkr",
      category: 'fs',
      tags: ["Python", "Flask", "SQLite", "Bootstrap"],
      githubUrl: "https://github.com/24F2007692/vehicle-parking-app-v1",
      description: [
        "Designed a normalised 3-entity relational schema with role-based REST APIs.",
        "Implemented slot availability tracking, booking conflict detection, and oversight dashboards.",
        "Guarded API routes with session-based authentication and server-side validation."
      ],
      metric: "Parking Backend"
    }
  ]
};

export const SKILLS_MATRIX = [
  {
    category: "AI / ML & LLMs",
    skills: ["PyTorch", "Scikit-Learn", "HuggingFace", "OpenAI API", "Ensemble Methods", "Transfer Learning"],
    theme: "ml"
  },
  {
    category: "Data & Backend",
    skills: ["FastAPI", "Flask", "Celery", "Redis", "SQLAlchemy", "REST APIs"],
    theme: "fs"
  },
  {
    category: "Programming & Databases",
    skills: ["Python", "JavaScript", "SQL", "PostgreSQL", "MySQL", "SQLite"],
    theme: "neutral"
  },
  {
    category: "Frontend & Tools",
    skills: ["Vue.js 3", "Pinia", "HTML5/CSS3", "Bootstrap", "Linux", "W&B"],
    theme: "neutral"
  }
];
