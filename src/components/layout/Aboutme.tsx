"use client";
import { motion } from 'framer-motion';
import { site } from '@/config/site';

/**
 * About Section
 * 
 * Provides a detailed overview of the developer's approach to software development, emphasizing code quality, modularity, and the core technologies used.
 * Utilizes subtle animations to enhance readability and engagement without overwhelming the user.
 */

export default function About() {
  const {
    sectionTag,
    titleSectionPrefix,
    titleSectionHighlight,
    paragraph1,
    paragraph2Prefix,
    paragraph2Suffix,
    coreStacksTitle
  } = site.aboutMe;

  // Extracts the core stacks from the skills section of the site configuration, filtering for those marked as core.
  const coreStacks = site.skills.skills.filter(skill => skill.isCore).map(skill => skill.name);

 // Shapes the coreStacks array into a human-readable string for display in the paragraph.
  const coreStacksText = coreStacks.length > 1
    ? `${coreStacks.slice(0, -1).join(', ')} and ${coreStacks[coreStacks.length - 1]}`
    : coreStacks[0];

  return (
    <section 
      id="aboutme" 
      className="relative flex min-h-screen flex-col justify-center px-6 py-12 md:px-24 bg-background text-foreground overflow-hidden"
    >
      {/* Background Light: Creates a subtle ambient light effect in the background */}
      <div className="absolute top-1/2 right-1/4 -z-10 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-gradient-end/5 blur-[120px] pointer-events-none md:h-[500px] md:w-[500px]" />

      <div className="w-full max-w-7xl">
        
        {/* About Title: animation happens on view (viewport) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl space-y-6"
        >
          <h2 className="text-sm font-mono tracking-widest text-primary uppercase md:text-base">
            {sectionTag}
          </h2>
          <h3 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl leading-none">
            {titleSectionPrefix} <span className="text-muted-foreground italic">{titleSectionHighlight}.</span>
          </h3>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
  
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="lg:col-span-8 lg:col-start-1 space-y-8"
      >
        <p className="max-w-2xl text-lg text-muted-foreground md:text-xl font-light leading-relaxed">
          {paragraph1}
        </p>
        <p className="max-w-2xl text-lg text-muted-foreground md:text-xl font-light leading-relaxed">
          {paragraph2Prefix} <span className="text-foreground font-semibold">{coreStacksText}</span>{paragraph2Suffix}
        </p>
        
        {/* 
          Core Stacks: Displays the core technologies used by the developer in a visually distinct manner.
          The list is derived from site.skills to ensure consistency across the site.
        */}
        <div className="pt-4 max-w-md">
          <h4 className="text-xs font-mono text-muted-foreground uppercase mb-4 italic tracking-widest">
            {coreStacksTitle}
          </h4>
          <div className="grid grid-cols-2 gap-3 w-full">
            {coreStacks.map(stack => (
              <div
                key={stack}
                className="flex items-center justify-center px-4 py-3 bg-muted/60 border border-border rounded-xl text-xs font-medium tracking-wide text-muted-foreground hover:border-foreground/20 hover:text-foreground transition-colors duration-200"
              >
                {stack}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      </div>
      </div>
    </section>
  );
}