interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  whereSee: 'GitHub' | 'site';
  imageUrl?: string;
  projectUrl: string;
  featured: boolean;
}

export type { Project };