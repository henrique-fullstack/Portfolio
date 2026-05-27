import { Project } from '../types/project';

const project: Project[] = [
  {
    id: 'finance-manager',
    title: 'Finance Manager Pro',
    description: 'System for managing personal finances, including income, expenses, and financial reports.',
    technologies: ['Python', 'SQLite'],
    whereSee: 'GitHub',
    imageUrl: '/skills/python.svg',
    projectUrl: 'https://github.com/henrique-fullstack/Kaiser-finance-manager.git',
    featured: true,
  },

  {
    id: 'portfolio-psicologo',
    title: 'Portfolio Psychologist',
    description: 'Site for portfolio of the psychologist',
    whereSee: 'site',
    technologies: ['Next.js', 'Tailwind', 'TypeScript'],
    imageUrl: '/projects/DrCarlosAlberto.png',
    projectUrl: 'https://portfolio-for-psychologist.vercel.app/',
    featured: true,
  },

];

export default project;