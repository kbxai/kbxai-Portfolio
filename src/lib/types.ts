export type Project = {
  title: string;
  category: 'ml' | 'fs';
  tags: string[];
  githubUrl: string;
  description: string[];
  metric?: string;
};

export type Track = {
  id: 'ml' | 'fs';
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
};

export type PortfolioData = {
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
  values: { title: string; description: string; }[];
  education: { degree: string; institution: string; year: string; grade: string; }[];
  projects: Project[];
};
