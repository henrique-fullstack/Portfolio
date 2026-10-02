"use client";

import { motion } from 'framer-motion';
import { fadeOnUp, pressableBehavior, staggerContainer } from '@/lib/animations'; 
import { scrollToSection } from '@/lib/utils';
import { site } from '@/config/site'; 

/**
 * Hero Section
 * 
 * Main point of entry for the portfolio, designed to immediately convey the developer's expertise and aesthetic sensibilities.
 * Uses an orchestration of animations (stagger) to reveal elements sequentially and gradient techniques with blur for visual depth (Glassmorphism background).
 */
export default function Hero() {
  const { 
    roleBadge, 
    heroHeadlinePrefix,
    heroHeadlineHighlight1,
    heroHeadlineMiddle,
    heroHeadlineHighlight2,
    subdescription, 
    primaryCTA, 
    primaryCTAUrl, 
    secundaryCTA, 
    secundaryCTAUrl 
  } = site.hero;

  // Function to extract the section ID from the URL (removes the '#' character)
  const getSectionId = (url: string) => url.replace('#', '');

  return (
    <section 
      id="hero" 
      className="relative flex min-h-screen flex-col justify-center px-6 py-12 md:px-24 bg-background text-foreground overflow-hidden"
    >
      {/* 
        Effect of Ambient Light in the background.
        `pointer-events-none` prevents the element from interfering with text selection or clicks.
        `absolute` positions the element relative to the nearest positioned ancestor (the section).
        `blur-[120px]` ensures smoothness without drastically impacting rendering performance.
      */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-primary/10 blur-[120px] pointer-events-none md:h-[500px] md:w-[500px]" />

      {/* Main container: Manages the staggered delay of animated children */}
      <motion.div 
        className="max-w-4xl space-y-6"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.p 
          variants={fadeOnUp}
          className="text-sm font-mono tracking-widest text-primary uppercase md:text-base"
        >
          {roleBadge}
        </motion.p>

        {/* 
          Headline montada a partir de campos separados (prefix / highlight1 / middle / highlight2)
          definidos em site.ts. Isso mantém o arquivo de dados 100% texto puro (sem JSX),
          o que facilita reaproveitar este Hero como template em outros projetos:
          basta trocar as strings, a formatação visual (cor, gradiente, quebra de linha) já está pronta aqui.
        */}
        <motion.h1 
          variants={fadeOnUp}
          className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl leading-none"
        >
          {heroHeadlinePrefix} <span className="text-muted-foreground">{heroHeadlineHighlight1}</span>,
          <br />
          {heroHeadlineMiddle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gradient-end">{heroHeadlineHighlight2}</span>.
        </motion.h1>

        <motion.p 
          variants={fadeOnUp}
          className="max-w-xl text-base text-muted-foreground md:text-lg font-light leading-relaxed"
        >
          {subdescription}
        </motion.p>

        {/* CTAs with native behavior interception for Smooth Scroll */}
        <motion.div 
          variants={fadeOnUp}
          className="flex flex-wrap gap-4 pt-4"
        >
          <motion.a 
            href={primaryCTAUrl} 
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary/10 to-gradient-end/10 hover:from-primary/20 hover:to-gradient-end/20 border border-primary/20 hover:border-primary/40 px-6 py-3 text-sm font-semibold text-primary hover:text-primary/90 shadow-lg shadow-primary/5 transition-all duration-300 backdrop-blur-sm" 
            onClick={(e) => { 
              e.preventDefault(); 
              scrollToSection(getSectionId(primaryCTAUrl)); 
            }} 
            {...pressableBehavior}
          >
            {primaryCTA}
            {/* Animated icon via CSS Transition based on the parent group's hover state (`group-hover`) */}
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
            href={secundaryCTAUrl} 
            className="inline-flex items-center justify-center rounded-xl border border-border bg-muted/30 hover:bg-muted/60 hover:border-foreground/20 px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 backdrop-blur-sm"
            onClick={(e) => { 
              e.preventDefault(); 
              scrollToSection(getSectionId(secundaryCTAUrl)); 
            }} 
            {...pressableBehavior}
          >
            {secundaryCTA}
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator: Intentional delay of 1.5s to avoid competing with the main Hero animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <div className="h-12 w-[1px] bg-gradient-to-b from-foreground to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}