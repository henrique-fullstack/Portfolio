import { Skill } from '../types/skill';

export const skillsData: Skill[] = [
    // Frontend
    { name: 'HTML', icon: 'SiHtml5', isCore: false, category: 'frontend' },
    { name: 'CSS', icon: 'SiCss', isCore: false, category: 'frontend' },
    { name: 'JavaScript', icon: 'SiJavascript', isCore: false, category: 'frontend' },
    { name: 'TypeScript', icon: 'SiTypescript', isCore: true, category: 'frontend' },
    { name: 'Tailwind CSS', icon: 'SiTailwindcss', isCore: true, category: 'frontend' },
    { name: 'React', icon: 'SiReact', isCore: false, category: 'frontend' }, 
    { name: 'Next.js', icon: 'SiNextdotjs', isCore: true, category: 'frontend' },

    // Backend
    { name: 'Python', icon: 'SiPython', isCore: false, category: 'backend' },
    { name: 'FastAPI', icon: 'SiFastapi', isCore: false, category: 'backend' },
    { name: 'Node.js', icon: 'SiNodedotjs', isCore: false, category: 'backend' },
    { name: 'Express', icon: 'SiExpress', isCore: false, category: 'backend' },
    { name: 'Nest.js', icon: 'SiNestjs', isCore: false, category: 'backend' }, 

    // Database and Tools
    { name: 'SQLite', icon: 'SiSqlite', isCore: false, category: 'database' },
    { name: 'PostgreSQL', icon: 'SiPostgresql', isCore: false, category: 'database' },
    { name: 'Docker', icon: 'SiDocker', isCore: false, category: 'tool' },
    { name: 'Git', icon: 'SiGit', isCore: false, category: 'tool' },     
    { name: 'GitHub', icon: 'SiGithub', isCore: false, category: 'tool' }, 
]