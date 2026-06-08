"use client";
import { motion } from 'framer-motion';
import { fadeOnDown } from '@/lib/animations'; // Importando a variante que criamos

export default function Header() {
  return (
    <motion.header
      variants={fadeOnDown}
      initial="initial"
      animate="animate"
      className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between px-6 md:px-24 bg-zinc-950/70 backdrop-blur-md border-b border-zinc-900 text-zinc-50"
    >
      {/* Logo / Nome */}
      <div className="flex items-center gap-2">
        <a href="#" className="font-mono text-sm tracking-widest uppercase hover:text-sky-400 transition-colors duration-300">
          Henrique<span className="text-sky-400">.dev</span>
        </a>
      </div>

      {/* Navegação Minimalista */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium font-mono text-zinc-400">
        <a href="#hero" className="hover:text-zinc-50 transition-colors duration-300">Home</a>
        <a href="#about" className="hover:text-zinc-50 transition-colors duration-300">About</a>
        <a href="#projects" className="hover:text-zinc-50 transition-colors duration-300">Projects</a>
        <a href="#contact" className="hover:text-zinc-50 transition-colors duration-300">Contact</a>
      </nav>

      {/* Botão de Ação / CTA Direito */}
      <div>
        <a 
          href="#contact" 
          className="rounded-md border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-xs font-mono tracking-wider text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-900 hover:text-zinc-50 hover:border-sky-500/50"
        >
          Resume
        </a>
      </div>
    </motion.header>
  );
}