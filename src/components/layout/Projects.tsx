'use client';

import { motion } from 'framer-motion';
import { site } from '@/config/site'; 
import * as SiIcons from 'react-icons/si';
import { FiGithub, FiExternalLink, FiFigma } from 'react-icons/fi'; 


export default function Projects() {
  
  const { sectionTag, titleSection, projects } = site.projects;
  const icons = SiIcons as Record<string, React.ComponentType<{ className?: string }>>;

  // Split the titleSection into prefix and highlight
  const cleanTitle = titleSection.replace(/\.$/, '');
  const lastSpaceIndex = cleanTitle.lastIndexOf(' ');
  const titlePrefix = lastSpaceIndex === -1 ? cleanTitle : cleanTitle.slice(0, lastSpaceIndex);
  const titleHighlight = lastSpaceIndex === -1 ? '' : cleanTitle.slice(lastSpaceIndex + 1);

  return (
    <section id="projects" className="relative flex min-h-screen flex-col justify-center px-6 py-12 md:px-24 bg-background text-foreground overflow-hidden">
      {/* Soft Background Light */}
      <div className="absolute bottom-1/3 left-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[120px] pointer-events-none md:h-[500px] md:w-[500px]" />

      <div className="w-full max-w-7xl ">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl space-y-6 mb-12"
        >
          <h2 className="text-sm font-mono tracking-widest text-primary uppercase md:text-base">{sectionTag}</h2>
          <h3 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            {titlePrefix} <span className="text-muted-foreground italic">{titleHighlight}.</span>
          </h3>
        </motion.div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.titleProject}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col justify-between p-6 rounded-xl border bg-muted/20 transition-all duration-300 group ${
                project.isFeatured ? 'border-border hover:border-primary/40' : 'border-border/50'
              }`}
            >
              <div>
                {/* Upper links */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
                  <div className="text-muted-foreground group-hover:text-primary transition-colors">
                    {/* A generic folder icon simulated with a div or Lucide */}
                    <span className="text-xs font-mono tracking-wider">[ {project.status} ]</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground">
                    {project.liveUrl && project.liveText && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex items-center gap-2 text-sm font-medium hover:text-foreground transition-colors"
                      >
                        <FiExternalLink className="w-4 h-4 shrink-0" /> 
                        <span>{project.liveText}</span>
                      </a>
                    )}

                    {project.githubUrl && project.githubText && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex items-center gap-2 text-sm font-medium hover:text-foreground transition-colors"
                      >
                        <FiGithub className="w-4 h-4 shrink-0" /> 
                        <span>{project.githubText}</span>
                      </a>
                    )}

                    {project.figmaUrl && project.figmaText && (
                      <a 
                        href={project.figmaUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex items-center gap-2 text-sm font-medium hover:text-foreground transition-colors"
                      >
                        <FiFigma className="w-4 h-4 shrink-0" /> 
                        <span>{project.figmaText}</span>
                      </a>
                    )}

                    </div>
                  </div>

                {/* Title and Description */}
                <h4 className="text-xl font-bold mb-3 text-foreground/90 group-hover:text-foreground">
                  {project.titleProject}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

             {/* Technologies Used in the Project */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
              {project.techStack.map((tech, techIndex) => {
                const IconComponent = project.stackIcons && project.stackIcons[techIndex] ? icons[project.stackIcons[techIndex]] : null;
                return (
                  <div key={tech} className="flex items-center gap-2 text-sm text-muted-foreground">
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                    <span>{tech}</span>
                  </div>
                );
              })}
            </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}