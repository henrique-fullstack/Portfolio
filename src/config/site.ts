import { LandingPageConfig } from "@/types/index";

/** 
 * This file contains the site configuration for the website.
 * 
 * The site configuration is used to define the website's title, description, 
 * and other metadata that is used to generate the website's React components.
 */

export const site: LandingPageConfig = {
    header: {
        logo: "HENRIQUE.DEV",
        navLinks: [
            { label: "Home", href: "#hero"},
            { label: "About", href: "#aboutme"},
            { label: "Skills", href: "#skills"},
            { label: "Projects", href: "#projects"},
            { label: "Contact", href: "#contact"}
        ]
    },
    hero: {
        roleBadge: "[ FULLSTACK ENGINEER | NEST.JS, NEXT.JS & TYPESCRIPT ]",
        heroHeadlinePrefix: "Building scalable systems and",
        heroHeadlineHighlight1: "clean APIs",
        heroHeadlineMiddle: "with",
        heroHeadlineHighlight2: "modern fullstack architecture",
        subdescription: "I bridge the gap between robust backend architecture and modern frontend engineering. Focused on building high-performance APIs, scalable database schemas, and interactive web applications using Nest.js, Next.js, and TypeScript.",
        primaryCTA: "Projects",
        primaryCTAUrl: "#projects",
        secundaryCTA: "Contact",
        secundaryCTAUrl: "#contact"
    },
    aboutMe: {
        sectionTag: "[ 01. Core ]",
        titleSectionPrefix: "Coding with",
        titleSectionHighlight: "purpose",
        paragraph1: "My approach to software development is driven by a relentless pursuit of code quality and software engineering principles. I deep dive into clean code, modular architecture, and domain-driven design, understanding that a solid, well-structured foundation is non-negotiable for scaling modern applications.",
        paragraph2Prefix: "Leveraging the synergy of",
        paragraph2Suffix: ", I build robust fullstack applications where backend efficiency perfectly aligns with sleek component architecture. Focused on engineering scalable RESTful APIs, clean database structures, and high-performance interfaces.",
        coreStacksTitle: "Core Stack"
    },
    skills: {
        sectionTag: "[ 02. SKILLS ]",
        titleSectionPrefix: "Technical",
        titleSectionHighlight: "arsenal",
        skills: [
            // Backend
            { name: 'Python', icon: 'SiPython', isCore: false, category: 'backend' },
            { name: 'FastAPI', icon: 'SiFastapi', isCore: false, category: 'backend' },
            { name: 'Node.js', icon: 'SiNodedotjs', isCore: false, category: 'backend' },
            { name: 'Express', icon: 'SiExpress', isCore: false, category: 'backend' },
            { name: 'Nest.js', icon: 'SiNestjs', isCore: true, category: 'backend' }, 

            // Frontend
            { name: 'HTML', icon: 'SiHtml5', isCore: false, category: 'frontend' },
            { name: 'CSS', icon: 'SiCss', isCore: false, category: 'frontend' },
            { name: 'JavaScript', icon: 'SiJavascript', isCore: false, category: 'frontend' },
            { name: 'TypeScript', icon: 'SiTypescript', isCore: true, category: 'frontend' },
            { name: 'Tailwind CSS', icon: 'SiTailwindcss', isCore: true, category: 'frontend' },
            { name: 'React', icon: 'SiReact', isCore: false, category: 'frontend' }, 
            { name: 'Next.js', icon: 'SiNextdotjs', isCore: true, category: 'frontend' },

            // Database
            { name: 'SQLite', icon: 'SiSqlite', isCore: false, category: 'database' },
            { name: 'PostgreSQL', icon: 'SiPostgresql', isCore: true, category: 'database' },
            { name: 'Prisma', icon: 'SiPrisma', isCore: false, category: 'database'},

            // Tools
            { name: 'Docker', icon: 'SiDocker', isCore: false, category: 'tool' },
            { name: 'Git', icon: 'SiGit', isCore: false, category: 'tool' },     
            { name: 'GitHub', icon: 'SiGithub', isCore: false, category: 'tool' },
            { name: 'Linux (Ubuntu)', icon: 'FaLinux', isCore: false, category: 'tool'} 
        ]
    },
    projects: {
        sectionTag: "[ 03. WORKS ]",
        titleSection: "Featured projects.",
        projects: [
            {
                titleProject: "Portfolio Website",
                description: "A high-performance personal portfolio engineered with Next.js App Router and Tailwind CSS, featuring optimized asset loading, dynamic layouts, and smooth, responsive animations.",
                techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
                stackIcons: ["SiNextdotjs", "SiTailwindcss", "SiTypescript"],
                liveText: "View Portfolio",
                liveUrl: "https://portfolio-psi-ivory-68.vercel.app/",
                githubText: "View GitHub",
                githubUrl: "https://github.com/henrique-fullstack/Portfolio.git",
                isFeatured: true,
                status: 'COMPLETED'
            },
            {
                titleProject: "Psychologist Landing Page",
                description: "A premium, accessible landing page designed for healthcare professionals. Built with clean architecture in Next.js to ensure lightning-fast loading speeds, solid SEO, and a seamless user experience.",
                techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
                stackIcons: ["SiNextdotjs", "SiTailwindcss", "SiTypescript"],
                liveText: "View Live Demo",
                liveUrl: "https://portfolio-for-psychologist.vercel.app/",
                githubText: "View GitHub",
                githubUrl: "https://github.com/henrique-fullstack/Portfolio-for-psychologist.git",
                isFeatured: false,
                status: 'COMPLETED'
            },
            {
                titleProject: "Kaiser Finance Manager",
                description: "A lightweight financial management desktop system focused on data persistence and privacy. Features automated expense tracking, income categorization, and local relational storage.",
                techStack: ["Python", "SQLite"],
                stackIcons: ["SiPython", "SiSqlite"],
                githubText: "View GitHub",
                githubUrl: "https://github.com/henrique-fullstack/Kaiser-finance-manager.git",
                isFeatured: true,
                status: 'COMPLETED'
            },
            {
                titleProject: "Kaiser Finance API",
                description: "A modular RESTful API for financial management, engineered with Nest.js and PostgreSQL. Designed with clean architecture, Docker containerization, Prisma ORM, and environment isolation for high scalability.",
                techStack: ["Nest.js", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
                stackIcons: ["SiNestjs", "SiTypescript", "SiPostgresql", "SiPrisma", "SiDocker"],
                githubText: "View GitHub",
                githubUrl: "https://github.com/henrique-fullstack/kaiser-finance-api.git",
                isFeatured: true,
                status: 'IN PROGRESS'
            }
        ]
    },
    contactChannels: {
        sectionTag: "[ 04. CONNECTION ]",
        titleSection: "Direct channels.",
        paragraph1: "Here are the best channels to connect with me. Whether you prefer a quick message, email, or professional networks, I am always open to meaningful conversations and new collaborations.",
        paragraph2: "Feel free to reach out through any of the links below. I look forward to building something incredible together!",
        contactChannels: [
            {
                name: 'LinkedIn',
                label: 'linkedin.com/in/henrique-dev-fullstack', 
                url: 'https://linkedin.com/in/henrique-dev-fullstack/',
                icon: 'FiLinkedin',
                isPrimary: true,
            },
            {
                name: 'GitHub',
                label: 'github.com/henrique-fullstack', 
                url: 'https://github.com/henrique-fullstack',
                icon: 'FiGithub',
                isPrimary: true,
            },
            {
                name: 'E-mail',
                label: 'henrique.dev.fullstack@gmail.com',
                url: 'https://mail.google.com/mail/?view=cm&fs=1&to=henrique.dev.fullstack@gmail.com',
                icon: 'FiMail',
                isPrimary: false,
            },
            {
                name: 'WhatsApp',
                label: '+55 (87) 98115-3260', 
                url: 'https://wa.me/5587981153260',
                icon: 'FiMessageSquare',
                isPrimary: false,
            }
        ]
    }
}