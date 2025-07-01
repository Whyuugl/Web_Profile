export interface Skill {
  name: string;
  image: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface Section {
  title: string;
  content: string[];
} 