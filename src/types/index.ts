/**
 * This file contains the type definitions for the data structures used in the application.
 * It defines interfaces for Hero, AboutMe, Skill, Project, and ContactChannel.
 * These interfaces are used to ensure type safety and consistency across the application.
 */

export interface NavLink {
    label: string;
    href: string;
}

export interface HeaderSection {
    logo: string;
    navLinks: NavLink[];
}

export interface HeroSection{
    roleBadge: string;
    heroHeadlinePrefix: string;
    heroHeadlineHighlight1: string;
    heroHeadlineMiddle: string;
    heroHeadlineHighlight2: string;
    subdescription: string;
    primaryCTA: string;
    primaryCTAUrl: string;
    secundaryCTA: string;
    secundaryCTAUrl: string;
}

export interface AboutMeSection {
    sectionTag: string;
    titleSectionPrefix: string;
    titleSectionHighlight: string;
    paragraph1: string;
    paragraph2Prefix: string;
    paragraph2Suffix: string;
    coreStacksTitle: string;
}

export interface Skill {
    name: string;
    icon?: string;  
    isCore: boolean; 
    category: 'frontend' | 'backend' | 'tool' | 'database'; 
}

export interface SkillSection {
    sectionTag: string;
    titleSectionPrefix: string;
    titleSectionHighlight: string;
    skills: Skill[];
} 

export interface Project {
    titleProject: string;
    description: string;
    techStack: string[];
    stackIcons?: string[];
    liveText?: string;
    liveUrl?: string;
    githubText?: string;
    githubUrl?: string;
    figmaText?: string;
    figmaUrl?: string;
    isFeatured: boolean;
    status: 'COMPLETED' | 'IN PROGRESS' | 'PLANNED';
}

export interface ProjectSection {
    sectionTag: string;
    titleSection: string;
    projects: Project[];
}

export interface Contact {
    name: string;
    label: string; 
    url: string;
    icon: string; 
    isPrimary: boolean; 
}

export interface ContactChannelSection {
    sectionTag: string;
    titleSection: string;
    paragraph1: string;
    paragraph2: string;
    contactChannels: Contact[];
}

export interface LandingPageConfig {
    header: HeaderSection;
    hero: HeroSection;
    aboutMe: AboutMeSection;
    skills: SkillSection;
    projects: ProjectSection;
    contactChannels: ContactChannelSection;
}