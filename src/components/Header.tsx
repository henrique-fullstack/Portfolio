"use client";
import { motion } from 'framer-motion';
import { fadeOnDown, pressableBehavior } from '@/lib/animations';
import { scrollToSection } from '@/lib/utils';

export default function Header() {
  

  return (
    <motion.header
      variants={fadeOnDown}
      initial="initial"
      animate="animate"
      className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between px-6 md:px-24 bg-zinc-950/70 backdrop-blur-md border-b border-zinc-900 text-zinc-50"
    >
      {/* Logo / Name */}
      <div className="flex items-center gap-2">
        <a href="#" className="font-mono text-sm tracking-widest uppercase hover:text-sky-400 transition-colors duration-300">
          Henrique<span className="text-sky-400">.dev</span>
        </a>
      </div>

      {/* Minimalist Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium font-mono text-zinc-400">
        <motion.a href="#hero" 
        className="hover:text-zinc-50 transition-colors duration-300" 
       onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
        {...pressableBehavior}
        >Home</motion.a>
        
        <motion.a href="#aboutme" 
        className="hover:text-zinc-50 transition-colors duration-300" 
        onClick={(e) => { e.preventDefault(); scrollToSection('aboutme'); }}
        {...pressableBehavior}
        >About</motion.a>
        
        <motion.a href="#skills" 
        className="hover:text-zinc-50 transition-colors duration-300" 
        onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
        {...pressableBehavior}
          >Skills</motion.a>
        
        <motion.a href="#projects" 
        className="hover:text-zinc-50 transition-colors duration-300" 
        onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} 
        {...pressableBehavior}>
          Projects
        </motion.a>
        
        <motion.a href="#contact" 
        className="hover:text-zinc-50 transition-colors duration-300" 
        onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} 
        {...pressableBehavior}>
          Contact
        </motion.a>
      </nav>

    </motion.header>
  );
}