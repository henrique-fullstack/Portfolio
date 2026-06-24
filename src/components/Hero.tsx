"use client";
import { motion } from 'framer-motion';
import { fadeOnUp, pressableBehavior, staggerContainer } from '@/lib/animations'; 
import { scrollToSection } from '@/lib/utils';

export default function Hero() {
  return (
  <section id="hero" className="relative flex min-h-screen flex-col justify-center px-6 py-12 md:px-24 bg-zinc-950 text-zinc-50 overflow-hidden">
      {/* Detail of background light */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-sky-500/10 blur-[120px] pointer-events-none md:h-[500px] md:w-[500px]" />

      {/* Use stagger container */}
      <motion.div 
        className="max-w-4xl space-y-6"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Subtittle / Tag */}
        <motion.p 
          variants={fadeOnUp}
          className="text-sm font-mono tracking-widest text-sky-400 uppercase md:text-base"
        >
          [ Full-Stack Developer & Software Architect ]
        </motion.p>

        {/* Main Title */}
        <motion.h1 
          variants={fadeOnUp}
          className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl leading-none"
        >
          Coding order into the <span className="text-zinc-400">backend</span>,
          <br />
          building <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">freedom</span> in the world.
        </motion.h1>

        {/* Brief Description */}
        <motion.p 
          variants={fadeOnUp}
          className="max-w-xl text-base text-zinc-400 md:text-lg font-light leading-relaxed"
        >
          I build robust, logical, and scalable architectures. Specialist in 
          transforming complex problems into clean, efficient systems using 
          Nest.js, Next.js, and TypeScript.
        </motion.p>

        {/* Call to Action (Buttons) */}
          <motion.div 
            variants={fadeOnUp}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.a 
              href="#projects" 
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500/10 to-indigo-500/10 hover:from-sky-500/20 hover:to-indigo-500/20 border border-sky-500/20 hover:border-sky-400/40 px-6 py-3 text-sm font-semibold text-sky-400 hover:text-sky-300 shadow-lg shadow-sky-500/5 transition-all duration-300 backdrop-blur-sm" 
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} 
              {...pressableBehavior}
            >
              Projects
              <svg 
                className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </motion.a>
            
            <motion.a 
              href="#contact" 
              className="inline-flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors duration-300 backdrop-blur-sm"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} 
              {...pressableBehavior}
            >
              Get in Touch
            </motion.a>
          </motion.div>
      </motion.div>

      {/* Minimalist Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <div className="h-12 w-[1px] bg-gradient-to-b from-zinc-50 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}