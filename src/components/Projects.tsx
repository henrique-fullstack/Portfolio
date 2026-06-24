'use client';

import { motion } from 'framer-motion';
import { projectsData } from './config/projects';
import * as SiIcons from 'react-icons/si';
import { FiGithub, FiExternalLink } from 'react-icons/fi'; 

export default function Projects() {
  const icons = SiIcons as Record<string, React.ComponentType<{ className?: string }>>;

  return (
    <section id="projects" className="relative flex min-h-screen flex-col justify-center px-6 py-12 md:px-24 bg-zinc-950 text-zinc-50 overflow-hidden">
      {/* Soft Background Light */}
      <div className="absolute bottom-1/3 left-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-sky-500/5 blur-[120px] pointer-events-none md:h-[500px] md:w-[500px]" />

      <div className="w-full max-w-7xl ">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl space-y-6 mb-12"
        >
          <h2 className="text-sm font-mono tracking-widest text-sky-400 uppercase md:text-base">[ 03. Works ]</h2>
          <h3 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Featured <span className="text-zinc-500 italic">projects</span>.
          </h3>
        </motion.div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col justify-between p-6 rounded-xl border bg-zinc-900/20 transition-all duration-300 group ${
                project.isFeatured ? 'border-zinc-800 hover:border-sky-500/40' : 'border-zinc-900'
              }`}
            >
              <div>
                {/* Upper links */}
                <div className="flex justify-between items-center mb-6">
                  <div className="text-zinc-500 group-hover:text-sky-400 transition-colors">
                    {/* A generic folder icon simulated with a div or Lucide */}
                    <span className="text-xs font-mono tracking-wider">[ Production ]</span>
                  </div>
                  <div className="flex gap-4 text-zinc-400">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="hover:text-zinc-50 transition-colors">
                        <FiGithub className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="hover:text-zinc-50 transition-colors">
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title and Description */}
                <h4 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-zinc-50">
                  {project.title}
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

             {/* Technologies Used in the Project */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-900">
                {project.techStack.map((tech) => {
                    // Dictionary to map tech names to their corresponding react-icons component names
                    const iconMapping: Record<string, string> = {
                    "Next.js": "SiNextdotjs",
                    "Tailwind CSS": "SiTailwindcss",
                    "TypeScript": "SiTypescript",
                    "Python": "SiPython",
                    "SQLite": "SiSqlite"
                    };

                    const techIconKey = iconMapping[tech];
                    const Icon = icons[techIconKey];

                    return (
                    <span key={tech} className="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-900/60 border border-zinc-800 text-zinc-400 rounded-md text-xs font-medium">
                        {Icon && <Icon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-sky-400 transition-colors" />}
                        {tech}
                    </span>
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