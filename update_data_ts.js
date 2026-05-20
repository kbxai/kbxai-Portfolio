const fs = require('fs');

const dataTsContent = `import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: "Kartik Bajaj",
    location: "Ambala, Haryana, India",
    email: "kartikbajaj.me@gmail.com",
    phone: "(+91) 98965-35933",
    github: "github.com/kbxai",
    linkedin: "linkedin.com/in/kbxai",
    tagline: "AI / Full-Stack Engineer",
    bio: "Data Science undergraduate at IIT Madras building end-to-end AI/ML systems and production full-stack applications. Achieved Kaggle Macro F1 of 0.954 via deep learning. Experienced in LLM API integration, prompt engineering, and Python backend development (Flask, FastAPI, Celery)."
  },
  journey: [
    "Building end-to-end AI/ML systems and production full-stack applications.",
    "Seeking an AI Full Stack / Backend Engineering Internship to ship intelligent, API-driven products."
  ],
  tracks: [
    {
      id: 'ml',
      title: "Data Intelligence",
      subtitle: "ML & AI",
      description: "Building data-driven models using PyTorch, HuggingFace, Scikit-Learn, and LLM tools with a focus on deep learning, NLP, and feature engineering.",
      skills: ["PyTorch", "HuggingFace", "NLP", "Scikit", "Transfer Learning", "Transformers"]
    },
    {
      id: 'fs',
      title: "Full Stack Systems",
      subtitle: "Web Engineering",
      description: "Developing robust backends and async task pipelines using FastAPI, Flask, Celery, and Vue.js with clean database architectures.",
      skills: ["FastAPI", "Flask", "Celery", "Redis", "Vue.js 3", "REST APIs"]
    }
  ],
  values: [
    {
      title: "End-to-End Execution",
      description: "Hands-on experience building complex projects from ML training to full-stack deployment."
    },
    {
      title: "Performant AI",
      description: "Rigorous model tuning and deep learning (Kaggle Macro F1 0.954) combined with scalable async architectures."
    },
    {
      title: "Clean Architecture",
      description: "Focus on clean backend systems, relational data integrity, JWT auth, and maintainable APIs."
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
`;

fs.writeFileSync('src/lib/data.ts', dataTsContent);
console.log('Successfully updated src/lib/data.ts');
