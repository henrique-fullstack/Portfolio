interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  projectUrl: string;
  featured: boolean;
}

export type { Project };