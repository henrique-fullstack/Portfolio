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
        roleBadge: "[ FRONTEND ENGINEER | NEXT.JS, REACT & TYPESCRIPT ]",
        heroHeadlinePrefix: "Building high-performance interfaces and",
        heroHeadlineHighlight1: "sleek web apps",
        heroHeadlineMiddle: "with",
        heroHeadlineHighlight2: "modern frontend architecture",
        subdescription: "Frontend Engineer specializing in React, Next.js, and TypeScript. I craft responsive, accessible, and high-performance web applications with clean component architecture and seamless API integration, backed by a solid foundation in software engineering principles.",
        primaryCTA: "Projects",
        primaryCTAUrl: "#projects",
        secundaryCTA: "Contact",
        secundaryCTAUrl: "#contact"
    },
    aboutMe: {
        sectionTag: "[ 01. Core ]",
        titleSectionPrefix: "Coding with",
        titleSectionHighlight: "purpose",
        paragraph1: "My approach to frontend development is driven by a relentless pursuit of code quality and software engineering principles. I deep dive into clean code, component architecture, and type safety, understanding that a solid, well-structured foundation is non-negotiable for scaling modern web applications.",
        paragraph2Prefix: "Leveraging the synergy of",
        paragraph2Suffix: ", I build robust frontend applications where sleek component architecture perfectly aligns with efficient API integration. Focused on engineering scalable state management, clean component structures, and high-performance interfaces.",
        coreStacksTitle: "Core Stack"
    },
    skills: {
        sectionTag: "[ 02. SKILLS ]",
        titleSectionPrefix: "Technical",
        titleSectionHighlight: "arsenal",
        skills: [
            // Frontend (Core Focus)
            { name: 'TypeScript', icon: 'SiTypescript', isCore: true, category: 'frontend' },
            { name: 'Next.js', icon: 'SiNextdotjs', isCore: true, category: 'frontend' },
            { name: 'React', icon: 'SiReact', isCore: true, category: 'frontend' }, 
            { name: 'Tailwind CSS', icon: 'SiTailwindcss', isCore: true, category: 'frontend' },
            { name: 'Zod', icon: 'SiZod', isCore: false, category: 'frontend' },
            { name: 'JavaScript', icon: 'SiJavascript', isCore: false, category: 'frontend' },
            { name: 'HTML', icon: 'SiHtml5', isCore: false, category: 'frontend' },
            { name: 'CSS', icon: 'SiCss', isCore: false, category: 'frontend' },

            // Backend & Integration (Differential)
            { name: 'Nest.js', icon: 'SiNestjs', isCore: false, category: 'backend' }, 
            { name: 'Node.js', icon: 'SiNodedotjs', isCore: false, category: 'backend' },
            { name: 'Express', icon: 'SiExpress', isCore: false, category: 'backend' },
            { name: 'FastAPI', icon: 'SiFastapi', isCore: false, category: 'backend' },
            { name: 'Python', icon: 'SiPython', isCore: false, category: 'backend' },

            // Database
            { name: 'Supabase', icon: 'SiSupabase', isCore: false, category: 'database' },
            { name: 'PostgreSQL', icon: 'SiPostgresql', isCore: false, category: 'database' },
            { name: 'Prisma', icon: 'SiPrisma', isCore: false, category: 'database'},
            { name: 'SQLite', icon: 'SiSqlite', isCore: false, category: 'database' },

            // Tools & Workflow
            { name: 'Git', icon: 'SiGit', isCore: false, category: 'tool' },     
            { name: 'GitHub', icon: 'SiGithub', isCore: false, category: 'tool' },
            { name: 'Docker', icon: 'SiDocker', isCore: false, category: 'tool' },
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
                titleProject: "Kaiser Finance Web",
                description: "A responsive, type-safe financial web application built with Next.js App Router and Supabase. Features secure authentication, real-time data handling, and strict schema validation with Zod for tracking expenses and income.",
                techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Zod"],
                stackIcons: ["SiNextdotjs", "SiTypescript", "SiTailwindcss", "SiSupabase", "SiZod"],
                githubText: "View GitHub",
                githubUrl: "https://github.com/henrique-fullstack/kaiser-finance-web.git",
                isFeatured: true,
                status: 'IN PROGRESS'
            },
            {
                titleProject: "Kaiser Finance Manager",
                description: "A lightweight financial management desktop system focused on data persistence and privacy. Features automated expense tracking, income categorization, and local relational storage.",
                techStack: ["Python", "SQLite"],
                stackIcons: ["SiPython", "SiSqlite"],
                githubText: "View GitHub",
                githubUrl: "https://github.com/henrique-fullstack/Kaiser-finance-manager.git",
                isFeatured: false,
                status: 'COMPLETED'
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