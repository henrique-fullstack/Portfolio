import { LandingPageConfig } from "@/types/index";

/** 
 * This file contains the site configuration for the website.
 * 
 * Updated to position as a Backend Engineer (Nest.js / TypeScript) with strong Frontend fluency.
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
        roleBadge: "[ BACKEND ENGINEER | NEST.JS, TYPESCRIPT & CLEAN ARCHITECTURE ]",
        heroHeadlinePrefix: "Building robust backend systems and",
        heroHeadlineHighlight1: "scalable APIs",
        heroHeadlineMiddle: "with",
        heroHeadlineHighlight2: "Nest.js & modern architecture",
        subdescription: "Backend Engineer specializing in Nest.js, TypeScript, and enterprise system design. I craft secure RESTful APIs, modular architectures, and robust data layers, backed by a strong foundation in modern frontend development (React, Next.js, Tailwind) for complete end-to-end delivery.",
        primaryCTA: "Projects",
        primaryCTAUrl: "#projects",
        secundaryCTA: "Contact",
        secundaryCTAUrl: "#contact"
    },
    aboutMe: {
        sectionTag: "[ 01. Core ]",
        titleSectionPrefix: "Engineering with",
        titleSectionHighlight: "precision",
        paragraph1: "My approach to software development is anchored in software engineering fundamentals, clean architecture, and robust backend logic. I specialize in building scalable APIs and reliable server-side applications using Nest.js and TypeScript, focusing on dependency injection, type safety, and modularity.",
        paragraph2Prefix: "Bridging the gap between powerful server logic and intuitive user experiences, and leveraging my solid foundation in ",
        paragraph2Suffix: " alongside modern frontend tools like Next.js and Tailwind CSS, I deliver cohesive solutions where high-performance APIs seamlessly align with clean user interfaces.",
        coreStacksTitle: "Core Stack"
    },
    skills: {
        sectionTag: "[ 02. SKILLS ]",
        titleSectionPrefix: "Technical",
        titleSectionHighlight: "arsenal",
        skills: [
            // Backend & Core (Primary Focus)
            { name: 'Nest.js', icon: 'SiNestjs', isCore: true, category: 'backend' },
            { name: 'Express.js', icon: 'SiExpress', isCore: false, category: 'backend' },
            { name: 'TypeScript', icon: 'SiTypescript', isCore: true, category: 'backend' },
            
            // Frontend & Integration (Differential)
            { name: 'Next.js', icon: 'SiNextdotjs', isCore: false, category: 'frontend' }, 
            { name: 'Tailwind CSS', icon: 'SiTailwindcss', isCore: false, category: 'frontend' },
            { name: 'Zod', icon: 'SiZod', isCore: false, category: 'frontend' },
            
            // Database & Tools
            { name: 'Supabase', icon: 'SiSupabase', isCore: false, category: 'database' },
            { name: 'PostgreSQL', icon: 'SiPostgresql', isCore: true, category: 'database' },
            { name: 'SQLite', icon: 'SiSqlite', isCore: false, category: 'database' },
            { name: 'Docker', icon: 'SiDocker', isCore: true, category: 'tool' },
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
                description: "A high-performance personal portfolio engineered with Next.js App Router and Tailwind CSS, featuring optimized asset loading and responsive architecture.",
                techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
                stackIcons: ["SiNextdotjs", "SiTailwindcss", "SiTypescript"],
                liveText: "View Portfolio",
                liveUrl: "https://portfolio-psi-ivory-68.vercel.app/",
                githubText: "View GitHub",
                githubUrl: "https://github.com/henrique-fullstack/Portfolio.git",
                isFeatured: false,
                status: 'COMPLETED'
            },
            {
                titleProject: "Psychologist Landing Page",
                description: "A premium, accessible landing page designed for healthcare professionals with clean architecture and lightning-fast loading speeds.",
                techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
                stackIcons: ["SiNextdotjs", "SiTailwindcss", "SiTypescript"],
                liveText: "View Live Demo",
                liveUrl: "https://portfolio-for-psychologist.vercel.app/",
                githubText: "View GitHub",
                githubUrl: "https://github.com/henrique-fullstack/Portfolio-for-psychologist.git",
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