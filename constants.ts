import { ResumeData } from './types';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone
} from 'lucide-react';

export const RESUME_DATA: ResumeData = {
  name: "Kartik Bajaj",
  title: "Data Science Student & AI Enthusiast",
  summary: "Data Science student at IIT Madras passionate about building ML pipelines and web applications. Experienced with Python, Scikit-Learn, Flask, and FastAPI through hands-on projects. Looking for an AI/ML or Software Engineering internship to learn, grow, and contribute to real-world products.",
  contact: {
    location: "Ambala, Haryana",
    phone: "+91-9896535933",
    email: "kartikbajaj.me@gmail.com",
    github: "github.com/kbxai",
    linkedin: "www.linkedin.com/in/kartik-bajaj-3ababa372/",
    resume: "https://drive.google.com/file/d/11MgA3soN2ipM8aXSapRQiKjGMg204Tj6/view?usp=sharing"
  },
  education: [
    {
      degree: "Bachelor of Science in Data Science",
      institution: "Indian Institute of Technology Madras",
      duration: "2024 – 2027",
      grade: "CGPA: 8.11/10"
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "S.A. Jain Sr. Model School",
      duration: "2023 – 2024",
      grade: "Grade: 9"
    }
  ],
  skills: [
    {
      category: "Programming",
      skills: ["Python", "SQL", "JavaScript", "Java"]
    },
    {
      category: "Machine Learning & AI",
      skills: ["Scikit-Learn", "XGBoost", "LightGBM", "CatBoost", "Random Forests", "LLMs", "OpenAI API", "Gemini API"]
    },
    {
      category: "Backend",
      skills: ["Flask", "FastAPI", "REST APIs", "Async Task Processing"]
    },
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "Jinja2"]
    },
    {
      category: "Data & Tools",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "SQLite", "PostgreSQL", "Git", "Linux"]
    }
  ],
  projects: [
    {
      title: "Bangalore House Price Prediction",
      type: "ML System",
      tech: ["Python", "EDA", "Gradient Boosting"],
      description: [
        "Built end-to-end ML pipeline with EDA, preprocessing, feature engineering, and model training on 10k-row dataset.",
        "Trained 10+ models using K-Fold Cross-Validation and achieved R² = 0.8587 with tuned Gradient Boosting."
      ]
    },
    {
      title: "Hotel Booking Cancellation Prediction",
      type: "Classification",
      tech: ["XGBoost", "LightGBM", "CatBoost"],
      description: [
        "Engineered date and stay metrics, built ColumnTransformer pipeline for preprocessing.",
        "Trained 8+ models and improved ROC-AUC from 0.94 to 0.946."
      ]
    },
    {
      title: "TDS-AI - LLM Deployment Agent",
      type: "AI Engineering",
      tech: ["FastAPI", "Gemini API", "GPT-4"],
      description: [
        "Built FastAPI service converting natural language descriptions into deployable HTML apps using GPT-4/Gemini.",
        "Automated GitHub repo creation, commits, async tasks, and deployment to GitHub Pages."
      ]
    },
    {
      title: "Vehicle Parking System",
      type: "Full-Stack Web App",
      tech: ["Flask", "SQL", "Auth"],
      description: [
        "Developed Flask app with authentication, role-based access, real-time spot tracking, and admin dashboards.",
        "Designed normalized database schema with scalable architecture for parking lot management."
      ]
    }
  ],
  achievements: [
    { id: 1, text: "Active Kaggle contributor with multiple ML competition submissions" },
    { id: 2, text: "Built and deployed AI automation systems on HuggingFace platform" },
    { id: 3, text: "Completed end-to-end ML and web development projects independently beyond coursework" }
  ]
};

export const SOCIAL_LINKS = [
  { icon: Github, href: `https://${RESUME_DATA.contact.github}`, label: "GitHub" },
  { icon: Linkedin, href: `https://${RESUME_DATA.contact.linkedin}`, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${RESUME_DATA.contact.email}`, label: "Email" },
  { icon: Phone, href: `tel:${RESUME_DATA.contact.phone}`, label: "Phone" },
];

export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#education" },
  { label: "Contact", href: "#contact" },
];
