"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { fadeOnDown, pressableBehavior } from '@/lib/animations';
import { scrollToSection } from '@/lib/utils';
import { site } from '@/config/site'; 
import ThemeToggle from './ThemeToggle';
import { Button } from '@/components/ui/button'; 
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const MotionButton = motion(Button);

export default function Header() {
  const [open, setOpen] = useState(false);
  const { logo, navLinks } = site.header;

  // Function to extract the section ID from the URL (removes the '#' character)
  const getSectionId = (url: string) => url.replace('#', '');

  // Extract the logo name and domain from the logo string
  const dotIndex = logo.lastIndexOf('.');
  const logoName = dotIndex === -1 ? logo : logo.slice(0, dotIndex);
  const logoDomain = dotIndex === -1 ? '' : logo.slice(dotIndex);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false); // Close the mobile navigation menu
    scrollToSection(getSectionId(href)); // Scroll for the section
  };

  return (
    <motion.header
      variants={fadeOnDown}
      initial="initial"
      animate="animate"
      className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between px-6 md:px-24 bg-background/70 backdrop-blur-md border-b border-border text-foreground"
    >
      {/* Logo / Name */}
      <div className="flex items-center gap-2">
        <a href="#" className="font-mono text-sm tracking-widest uppercase hover:text-primary transition-colors duration-300">
          {logoName}<span className="text-primary">{logoDomain}</span>
        </a>
      </div>

      <div className="flex items-center gap-4 md:gap-8">
        {/* Minimalist Navigation (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium font-mono text-muted-foreground">
          {navLinks.map(link => (
            <motion.a
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition-colors duration-300"
              onClick={(e) => { e.preventDefault(); scrollToSection(getSectionId(link.href)); }}
              {...pressableBehavior}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <ThemeToggle />

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <MotionButton
              whileTap={pressableBehavior.whileTap}
              whileHover={pressableBehavior.whileHover}
              type="button"
              variant="outline"
              size="icon"
              aria-label="Open navigation menu"
              className="md:hidden"
            >
              <Menu className="w-4 h-4" />
            </MotionButton>
          </SheetTrigger>

          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="font-mono text-sm tracking-widest uppercase text-left">
                {logoName}<span className="text-primary">{logoDomain}</span>
              </SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col gap-6 px-4 pt-4 text-base font-medium font-mono text-muted-foreground">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-foreground transition-colors duration-300"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}