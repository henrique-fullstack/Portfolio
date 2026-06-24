import { Skill } from '../types/skill';

export const skillsData: Skill[] = [
    // Frontend
    { name: 'HTML', icon: 'SiHtml5', level: 'advanced', isCore: false, category: 'frontend' },
    { name: 'CSS', icon: 'SiCss', level: 'advanced', isCore: false, category: 'frontend' },
    { name: 'JavaScript', icon: 'SiJavascript', level: 'advanced', isCore: false, category: 'frontend' },
    { name: 'Tailwind CSS', icon: 'SiTailwindcss', level: 'advanced', isCore: true, category: 'frontend' },
    { name: 'TypeScript', icon: 'SiTypescript', level: 'advanced', isCore: true, category: 'frontend' },
    { name: 'React', icon: 'SiReact', level: 'intermediate', isCore: false, category: 'frontend' }, 
    { name: 'Next.js', icon: 'SiNextdotjs', level: 'advanced', isCore: true, category: 'frontend' },

    // Backend
    { name: 'Python', icon: 'SiPython', level: 'advanced', isCore: false, category: 'backend' },
    { name: 'FastAPI', icon: 'SiFastapi', level: 'intermediate', isCore: false, category: 'backend' },
    { name: 'Node.js', icon: 'SiNodedotjs', level: 'intermediate', isCore: false, category: 'backend' },
    { name: 'Express', icon: 'SiExpress', level: 'intermediate', isCore: false, category: 'backend' },
    { name: 'Nest.js', icon: 'SiNestjs', level: 'advanced', isCore: true, category: 'backend' }, 

    // Database and Tools
    { name: 'SQLite', icon: 'SiSqlite', level: 'intermediate', isCore: false, category: 'database' },
    { name: 'PostgreSQL', icon: 'SiPostgresql', level: 'intermediate', isCore: false, category: 'database' },
    { name: 'Docker', icon: 'SiDocker', level: 'intermediate', isCore: false, category: 'tool' },
    { name: 'Git', icon: 'SiGit', level: 'advanced', isCore: false, category: 'tool' },     
    { name: 'GitHub', icon: 'SiGithub', level: 'advanced', isCore: false, category: 'tool' }, 
]