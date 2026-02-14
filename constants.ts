
import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: "Kartik Bajaj",
    location: "Ambala, Haryana, India",
    email: "kartikbajaj.me@gmail.com",
    phone: "(+91) 98965-35933",
    github: "github.com/kbxai",
    linkedin: "linkedin.com/in/kbxai",
    tagline: "Data Scientist & Full Stack Engineer",
    bio: "Data Science undergraduate at IIT Madras with hands-on experience in machine learning, NLP, LLM-based tools, and full-stack web development. Strong foundation in Python, ML pipelines, and backend engineering."
  },
  journey: [
    "Building separate end-to-end projects in Data Science and Web Development.",
    "Seeking an AI / AI Full Stack / Backend Internship to work on real-world intelligent systems."
  ],
  tracks: [
    {
      id: 'ml',
      title: "Data Intelligence",
      subtitle: "ML & AI",
      description: "Building data-driven models using Scikit-Learn, XGBoost, and LLM tools with a focus on feature engineering and evaluation.",
      skills: ["Python", "Machine Learning", "NLP", "Scikit-Learn", "XGBoost", "LLM Tools"]
    },
    {
      id: 'fs',
      title: "Full Stack Systems",
      subtitle: "Web Engineering",
      description: "Developing deployable applications and REST APIs using FastAPI, Flask, and Django with robust database design.",
      skills: ["FastAPI", "Flask", "Django", "SQL", "JavaScript", "REST APIs"]
    }
  ],
  values: [
    {
      title: "End-to-End Execution",
      description: "Hands-on experience building separate end-to-end projects from conception to deployment."
    },
    {
      title: "Clean Architecture",
      description: "Focus on clean backend architecture, data integrity, and maintainable APIs."
    },
    {
      title: "Model Performance",
      description: "Rigorous tuning and validation achieving high metrics (R² > 0.85, ROC-AUC ~0.92)."
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Data Science",
      institution: "Indian Institute of Technology Madras",
      year: "2024 – 2027",
      grade: "CGPA: 8.11 / 10"
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
      title: "LLM Deployment AI Agent",
      category: 'fs',
      tags: ["FastAPI", "OpenAI / Gemini API", "GitHub Automation"],
      githubUrl: "https://github.com/kbxai/LLM-Powered-Code-Deployment-Agent",
      description: [
        "Built an AI service that converts natural language prompts into deployable HTML applications.",
        "Implemented REST APIs to generate structured outputs instead of raw text.",
        "Automated GitHub repository creation, commits, and deployments.",
        "Worked with asynchronous task handling and third-party API integrations."
      ],
      metric: "GenAI Ops"
    },
    {
      title: "SmartParkr: Vehicle Parking App",
      category: 'fs',
      tags: ["Python", "Flask/Django", "SQL", "JS"],
      githubUrl: "https://github.com/24F2007692/vehicle-parking-app-v1",
      description: [
        "Developed a full-stack parking management system with user authentication and role-based access.",
        "Implemented backend logic for parking slot availability, booking workflows, and validations.",
        "Designed a normalized relational database schema for users, slots, and bookings.",
        "Built admin-level dashboards for managing parking data and system records."
      ]
    },
    {
      title: "Bangalore House Price Prediction",
      category: 'ml',
      tags: ["Python", "Pandas", "Scikit-Learn"],
      githubUrl: "https://github.com/kbxai/Banglore-House-Price-Prediction-regression-project",
      description: [
        "Built an end-to-end ML pipeline including EDA, feature engineering, preprocessing, and regression modeling.",
        "Applied K-Fold Cross-Validation, achieving R² > 0.85 with Gradient Boosting.",
        "Tuned Random Forest, Ridge, and Gradient Boosting models for performance improvements."
      ],
      metric: "R² > 0.85"
    },
    {
      title: "Hotel Booking Cancellation Prediction",
      category: 'ml',
      tags: ["Python", "Pandas", "Scikit-Learn", "XGBoost"],
      githubUrl: "https://github.com/kbxai/Hotel-Booking-Cancellation-Prediction",
      description: [
        "Developed a classification pipeline to predict booking cancellations.",
        "Conducted detailed EDA, handled missing values, and applied SMOTE for class imbalance.",
        "Tuned XGBoost model achieving ROC-AUC ~0.92, supported by SHAP analysis."
      ],
      metric: "AUC ~0.92"
    },
    {
      title: "Movie Review Sentiment Analysis",
      category: 'ml',
      tags: ["Python", "Scikit-Learn", "NLTK"],
      githubUrl: "https://github.com/kbxai/Movie-Review-Sentiment-Prediction",
      description: [
        "Implemented a text classification pipeline using TF-IDF (unigram/bigram) features.",
        "Performed text preprocessing including lemmatization and stopword removal.",
        "Trained and tuned models, achieving F1-score ~0.88 with Logistic Regression."
      ],
      metric: "F1 ~0.88"
    }
  ]
};

export const SKILLS_MATRIX = [
  {
    category: "Programming",
    skills: ["Python", "JavaScript", "SQL", "Java"],
    theme: "neutral"
  },
  {
    category: "Machine Learning & AI",
    skills: ["Supervised Learning", "NLP", "Scikit-Learn", "XGBoost", "SHAP", "Feature Engineering"],
    theme: "ml"
  },
  {
    category: "Backend & Databases",
    skills: ["FastAPI", "Flask", "Django", "REST APIs", "PostgreSQL", "MySQL", "SQLite"],
    theme: "fs"
  },
  {
    category: "Frontend & Tools",
    skills: ["HTML/CSS", "Vue.js","JS", "Bootstrap", "Git/GitHub", "Linux", "OpenAI/Gemini API"],
    theme: "neutral"
  }
];
