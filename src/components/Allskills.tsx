'use client';

import { motion } from 'framer-motion';
import { skillsData } from './config/skills';
import { Skill } from './types/skill';
import * as SiIcons from 'react-icons/si'; // Importa os logos reais
import { fadeOnUp, staggerContainer } from '@/lib/animations';

const categoryOrder = ['frontend', 'backend', 'database', 'tool'];
const categoryLabels: Record<string, string> = {
  frontend: 'Frontend Development',
  backend: 'Backend Development',
  database: 'Database & Tools',
  tool: 'Database & Tools',
};

export default function Allskills() {
  const groupedSkills: Record<string, Skill[]> = {};
  const icons = SiIcons as Record<string, React.ComponentType<{ className?: string }>>;

  skillsData.forEach((skill) => {
    if (!groupedSkills[skill.category]) {
      groupedSkills[skill.category] = [];
    }
    groupedSkills[skill.category].push(skill);
  });

  return (
    <section
      id="skills"
      className="relative flex min-h-screen flex-col justify-center px-6 py-12 md:px-24 bg-zinc-950 text-zinc-50 overflow-hidden"
    >
      <div className="absolute top-1/3 right-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none md:h-[500px] md:w-[500px]" />

      <div className="w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl space-y-6 mb-12"
        >
          <h2 className="text-sm font-mono tracking-widest text-sky-400 uppercase md:text-base">
            [ 02. Skills ]
          </h2>
          <h3 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl leading-none">
            Technical <span className="text-zinc-500 italic">arsenal</span>.
          </h3>
        </motion.div>

        <div className="space-y-8">
          {categoryOrder.map((category) => {
            const categorySkills = groupedSkills[category] || [];
            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <h4 className="text-xs font-mono text-zinc-500 uppercase mb-4 tracking-widest">
                  {categoryLabels[category] || category}
                </h4>

                <motion.div
                  className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {categorySkills.map((skill) => {
                    // Maps the skill icon name to the actual icon component from react-icons
                    const IconComponent = skill.icon ? icons[skill.icon] : null;

                    return (
                      <motion.div
                        key={skill.name}
                        variants={fadeOnUp}
                        className={`flex flex-col items-center justify-center p-2 rounded-md border transition-all duration-200 ${
                          skill.isCore
                            ? 'border-sky-500/50 bg-sky-500/10 hover:bg-sky-500/20 hover:border-sky-400/80'
                            : 'border-zinc-800/80 bg-zinc-900/30 hover:border-zinc-700/80 hover:bg-zinc-900/50'
                        }`}
                      >
                        {IconComponent ? (
                          <IconComponent
                            className={`w-6 h-6 mb-1.5 flex-shrink-0 transition-colors ${
                              skill.isCore ? 'text-sky-400' : 'text-zinc-400'
                            }`}
                          />
                        ) : (
                          <div className="w-6 h-6 mb-1.5 bg-zinc-800 rounded animate-pulse" />
                        )}
                        <p className="text-center font-medium text-xs leading-tight line-clamp-2 text-zinc-200">
                          {skill.name}
                        </p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}