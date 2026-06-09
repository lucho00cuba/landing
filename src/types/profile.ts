export interface SocialLink {
  icon: string;
  link: string;
  label: string;
}

export interface Contact {
  icon: string;
  title: string;
  value: string;
  link?: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  category: string;
  image: string;
  link?: string;
}

export interface Portfolio {
  categories: string[];
  projects: Project[];
}

export interface TimelineDatePoint {
  year: number;
  month?: number;
}

export interface TimelineDateRange {
  from: TimelineDatePoint;
  to: TimelineDatePoint | 'present';
}

interface EducationItem {
  title: string;
  date: TimelineDateRange;
  description: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  date: TimelineDateRange;
  description: string;
}

interface SkillGroup {
  category: string;
  items: string[];
}

interface Testimonial {
  name: string;
  avatar: string;
  text: string;
  date: string;
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Profile {
  name: string;
  avatar: string;
  job: string;
  socials: SocialLink[];
  contacts: Contact[];
  services: Service[];
  bio: string[];
  portfolio: Portfolio;
  education: EducationItem[];
  experience: ExperienceItem[];
  skills: SkillGroup[];
  testimonials: Testimonial[];
  certifications: Certification[];
}
