'use client';

import { motion } from 'framer-motion';
import { site } from '@/config/site'; 
import * as FiIcons from 'react-icons/fi';
import * as SiIcons from 'react-icons/si';

export default function Contacts() {
  // Destructuring the contact section data from the site configuration for easier access
  const { sectionTag, titleSection, paragraph1, paragraph2, contactChannels: channels } = site.contactChannels;

  // Unifies the icons from both react-icons libraries into a single object for easier access
  const icons = {
    ...FiIcons,
    ...SiIcons,
  } as Record<string, React.ComponentType<{ className?: string }>>;

  // Split the titleSection into prefix and highlight
  const cleanTitle = titleSection.replace(/\.$/, '');
  const lastSpaceIndex = cleanTitle.lastIndexOf(' ');
  const titlePrefix = lastSpaceIndex === -1 ? cleanTitle : cleanTitle.slice(0, lastSpaceIndex);
  const titleHighlight = lastSpaceIndex === -1 ? '' : cleanTitle.slice(lastSpaceIndex + 1);

  return (
    <section id="contact" className="relative flex min-h-[70vh] flex-col justify-center px-6 py-12 md:px-24 bg-background text-foreground overflow-hidden">
      {/* Soft Background Light */}
      <div className="absolute top-1/3 left-1/4 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px] pointer-events-none md:h-[500px] md:w-[500px]" />

      <div className="w-full max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl space-y-6 mb-12"
        >
          <h2 className="text-sm font-mono tracking-widest text-primary uppercase md:text-base">{sectionTag}</h2>
          <h3 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            {titlePrefix} <span className="text-muted-foreground italic">{titleHighlight}.</span>
          </h3>
         <p className="text-muted-foreground text-base md:text-lg max-w-xl font-light leading-relaxed">
            {paragraph1}
         </p>
         <p className="text-muted-foreground text-base md:text-lg max-w-xl font-light leading-relaxed">
            {paragraph2}
         </p>
        </motion.div>

        {/* Grid of Contact Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {channels.map((channel, index) => {
            const IconComponent = icons[channel.icon];

            return (
              <motion.a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col justify-between p-6 rounded-xl border transition-all duration-300 group ${
                  channel.isPrimary
                    ? 'border-border bg-muted/10 hover:border-primary/40 hover:bg-muted/30'
                    : 'border-border/50 bg-background hover:border-border hover:bg-muted/10'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-6">
                  <div className={`p-3 rounded-lg border transition-colors ${
                    channel.isPrimary 
                      ? 'border-border bg-muted/40 text-primary group-hover:border-primary/30' 
                      : 'border-border bg-muted/10 text-muted-foreground group-hover:text-foreground'
                  }`}>
                    {IconComponent ? <IconComponent className="w-5 h-5" /> : <div className="w-5 h-5 bg-muted animate-pulse rounded" />}
                  </div>
                  
                  {/* Seta discreta font-mono indicando link externo */}
                  <span className="text-xs font-mono text-muted-foreground/70 group-hover:text-primary transition-colors">
                    🡪
                  </span>
                </div>

                <div>
                  <h4 className="text-xs font-mono tracking-wider uppercase text-muted-foreground mb-1">
                    {channel.name}
                  </h4>
                  <p className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors truncate">
                    {channel.label}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
    
  );
}