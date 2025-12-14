export interface ContactInfo {
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  resume: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  grade: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  title: string;
  type: string;
  description: string[];
  tech: string[];
}

export interface Achievement {
  id: number;
  text: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
  education: Education[];
  skills: SkillCategory[];
  projects: Project[];
  achievements: Achievement[];
}