import React from 'react';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-6 h-16 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold tracking-tighter italic text-primary">
          HENRIQUE.DEV
        </h1>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:block"> 
            <ul className="flex space-x-6 text-sm font-medium text-muted-foreground">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </nav>
          
          <div className="border-l border-border pl-6 ml-2 hidden md:block">
            <ThemeToggle />
          </div>
          
          <div className="md:hidden">
             <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}