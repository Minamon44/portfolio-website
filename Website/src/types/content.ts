export interface HeroData {
  name: string;
  title: string;
  intro: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface Project {
  id: string;
  title: string;
  problem: string;
  data: string;
  method: string;
  findings: string;
  impact: string;
  github: string;
  visualization?: string;
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  tools: string[];
  domains: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  achievements: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface Contact {
  email: string;
  linkedin: string;
  github: string;
  resume?: string;
}

export interface PortfolioContent {
  hero: HeroData;
  projects: Project[];
  skills: Skills;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  contact: Contact;
}
