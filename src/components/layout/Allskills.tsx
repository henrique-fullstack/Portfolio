'use client';

import { motion } from 'framer-motion';
import { site } from '@/config/site'; 
import { Skill } from '@/types/index';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import { fadeOnUp, staggerContainer } from '@/lib/animations';

const icons = { ...SiIcons, ...FaIcons } as Record<string, React.ComponentType<{ className?: string }>>;

const categoryOrder = ['backend', 'frontend', 'database', 'tool'];
const categoryLabels: Record<string, string> = {
  backend: 'Backend Development',
  frontend: 'Frontend & Integration',
  database: 'Databases & Storage',
  tool: 'Development Tools & Environment',
};

export default function Allskills() {
  const { sectionTag, titleSectionPrefix, titleSectionHighlight, skills } = site.skills;

  // Group all skills by their category
  const groupedSkills: Record<string, Skill[]> = {};
  skills.forEach((skill) => {
    if (!groupedSkills[skill.category]) {
      groupedSkills[skill.category] = [];
    }
    groupedSkills[skill.category].push(skill);
  });

  return (
    <section
      id="skills"
      className="relative flex min-h-screen flex-col justify-center px-6 py-12 md:px-24 bg-background text-foreground overflow-hidden"
    >
      <div className="absolute top-1/3 right-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-end/5 blur-[120px] pointer-events-none md:h-[500px] md:w-[500px]" />

      <div className="w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl space-y-6 mb-12"
        >
          <h2 className="text-sm font-mono tracking-widest text-primary uppercase md:text-base">
            {sectionTag}
          </h2>
          <h3 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl leading-none">
            {titleSectionPrefix} <span className="text-muted-foreground italic">{titleSectionHighlight}.</span>
          </h3>
        </motion.div>

        {/* Categories loop with uniform row-style cards */}
        <div className="space-y-10">
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
                <h4 className="text-xs font-mono text-muted-foreground uppercase mb-4 tracking-widest">
                  {categoryLabels[category] || category}
                </h4>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {categorySkills.map((skill) => {
                    const IconComponent = skill.icon ? icons[skill.icon] : null;

                    return (
                      <motion.div
                        key={skill.name}
                        variants={fadeOnUp}
                        className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-200 shadow-sm ${
                          skill.isCore
                            ? 'border-primary/50 bg-primary/10 hover:bg-primary/15 hover:border-primary/80'
                            : 'border-border bg-muted/30 hover:border-foreground/20 hover:bg-muted/50'
                        }`}
                      >
                        {IconComponent ? (
                          <IconComponent
                            className={`w-7 h-7 flex-shrink-0 ${
                              skill.isCore ? 'text-primary' : 'text-muted-foreground'
                            }`}
                          />
                        ) : (
                          <div className="w-7 h-7 bg-muted rounded animate-pulse" />
                        )}
                        <p className="font-semibold text-sm text-foreground">
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