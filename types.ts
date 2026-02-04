export type ThemeMode = 'data-science' | 'full-stack';

export interface Project {
  title: string;
  tags: string[];
  description: string[];
  link?: string;
  githubUrl?: string;
  metric?: string;
  category: 'ml' | 'fs'; // To distinguish visually
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  grade: string;
}

export interface Value {
  title: string;
  description: string;
}

export interface Track {
  id: 'ml' | 'fs';
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    location: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    tagline: string;
    bio: string;
  };
  journey: string[];
  tracks: Track[];
  values: Value[];
  education: Education[];
  projects: Project[];
}