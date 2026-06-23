"use client";
import { motion } from 'framer-motion';
import CoreStacks from './StackCore';

export default function About() {
  return (
    <section 
      id="aboutme" 
      className="relative flex min-h-screen flex-col justify-center px-6 py-12 md:px-24 bg-zinc-950 text-zinc-50 overflow-hidden"
    >
      {/* Detalhe de luz */}
      <div className="absolute top-1/2 right-1/4 -z-10 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none md:h-[500px] md:w-[500px]" />

      <div className="w-full max-w-7xl">
        
        {/* TÍTULO */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl space-y-6"
        >
          <h2 className="text-sm font-mono tracking-widest text-sky-400 uppercase md:text-base">
            [ 01. Core ]
          </h2>
          <h3 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl leading-none">
            Coding with <span className="text-zinc-500 italic">purpose.</span>
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
        <p className="max-w-2xl text-lg text-zinc-400 md:text-xl font-light leading-relaxed">
          The level I have reached today is not a matter of luck, but the result of a relentless pursuit of 
          resilient architectures. I understand that clean code is the foundation for scaling any international system.
        </p>
        <p className="max-w-2xl text-lg text-zinc-400 md:text-xl font-light leading-relaxed">
          Specializing in the triad of <span className="text-zinc-200 font-semibold">Nest.js, Next.js, and TypeScript</span>, I build 
          projects where frontend visual fluidity perfectly aligns with raw backend logic.
        </p>

        <div className="pt-4 max-w-md">
          <h4 className="text-xs font-mono text-zinc-500 uppercase mb-4 italic tracking-widest">
            Core Stack
          </h4>
          <CoreStacks />
        </div>
      </motion.div>

      </div>
      </div>
    </section>
  );
}