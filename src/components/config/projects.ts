import { Project } from "../types/project";

export const projectsData: Project[] = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio website built with Next.js and Tailwind CSS to showcase my projects and skills.",
        techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
        githubUrl: "https://github.com/henrique-fullstack/Portfolio.git",
        liveUrl: "https://portfolio-psi-ivory-68.vercel.app/",
        isFeatured: true
    },

    {
        title: "Portfolio for psychologist",
        description: "A portfolio website for a psychologist, built with Next.js and Tailwind CSS. (This project is a demonstration of my skills in web development and design.)",
        techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
        githubUrl: "https://github.com/henrique-fullstack/Portfolio-for-psychologist.git",
        liveUrl: "https://portfolio-for-psychologist.vercel.app/",
        isFeatured: true
    },

    {
        title: "Kaiser Finance Manager",
        description: "A financial management application that helps users track their expenses and income.",
        techStack: ["Python", "SQLite"],
        githubUrl: "https://github.com/henrique-fullstack/Kaiser-finance-manager.git",
        isFeatured: true
    },

    
]