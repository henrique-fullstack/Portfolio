import { Skill } from '../types/skill';

export const skillsData: Skill[] = [
    // Frontend
    { name: 'HTML', icon: '/icons/html5.svg', level: 'advanced', isCore: false, category: 'frontend' },
    { name: 'CSS', icon: '/icons/css3.svg', level: 'advanced', isCore: false, category: 'frontend' },
    { name: 'JavaScript', icon: '/icons/javascript.svg', level: 'advanced', isCore: false, category: 'frontend' },
    { name: 'Tailwind CSS', icon: '/icons/tailwind.svg', level: 'advanced', isCore: true, category: 'frontend' },
    { name: 'TypeScript', icon: '/icons/typescript.svg', level: 'advanced', isCore: true, category: 'frontend' },
    { name: 'React', icon: '/icons/react.svg', level: 'advanced', isCore: false, category: 'frontend' },
    { name: 'Next.js', icon: '/icons/nextjs.svg', level: 'advanced', isCore: true, category: 'frontend' },

    // Backend
    { name: 'Python', icon: '/icons/python.svg', level: 'advanced', isCore: false, category: 'backend' },
    { name: 'FastAPI', icon: '/icons/fastapi.svg', level: 'advanced', isCore: false, category: 'backend' },
    { name: 'Node.js', icon: '/icons/nodejs.svg', level: 'advanced', isCore: false, category: 'backend' },
    { name: 'Nest.js', icon: '/icons/nestjs.svg', level: 'advanced', isCore: true, category: 'backend' },
    { name: 'Express', icon: '/icons/express.svg', level: 'advanced', isCore: false, category: 'backend' },

    // Database and Tools
    { name: 'SQLite', icon: '/icons/sqlite.svg', level: 'intermediate', isCore: false, category: 'database' },
    { name: 'PostgreSQL', icon: '/icons/postgresql.svg', level: 'intermediate', isCore: false, category: 'database' },
    { name: 'Docker', icon: '/icons/docker.svg', level: 'intermediate', isCore: false, category: 'tool' },
    { name: 'Git', icon: '/icons/git.svg', level: 'intermediate', isCore: false, category: 'tool' },
]