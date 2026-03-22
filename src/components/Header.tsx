// src/components/Header.tsx
import React from 'react';

export default function Header() {
  return (
    <header className="bg-[#393E46] py-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tighter italic text-blue-400">
          KAISER.DEV
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}