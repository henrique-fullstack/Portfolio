import { Project } from "../types/project";

export const projectsData: Project[] = [
    {
        title: "Portfolio Website",
        description: "A high-performance personal portfolio engineered with Next.js App Router and Tailwind CSS, featuring optimized asset loading, dynamic layouts, and smooth, responsive animations.",
        techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
        githubUrl: "https://github.com/henrique-fullstack/Portfolio.git",
        liveUrl: "https://portfolio-psi-ivory-68.vercel.app/",
        isFeatured: true
    },
    {
        title: "Psychologist Portfolio",
        description: "A premium, accessible landing page designed for healthcare professionals. Built with clean architecture in Next.js to ensure lightning-fast loading speeds, solid SEO, and a seamless user experience.",
        techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
        githubUrl: "https://github.com/henrique-fullstack/Portfolio-for-psychologist.git",
        liveUrl: "https://portfolio-for-psychologist.vercel.app/",
        isFeatured: false
    },
    {
        title: "Kaiser Finance Manager",
        description: "A lightweight financial management desktop system focused on data persistence and privacy. Features automated expense tracking, income categorization, and local relational storage.",
        techStack: ["Python", "SQLite"],
        githubUrl: "https://github.com/henrique-fullstack/Kaiser-finance-manager.git",
        isFeatured: true
    },
]