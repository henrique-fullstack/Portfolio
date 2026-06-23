'use client';

import { motion } from 'framer-motion';
import { contactsData } from './config/contacts';
import * as FiIcons from 'react-icons/fi';
import * as SiIcons from 'react-icons/si';

export default function Contacts() {
  // Unifica os pacotes de ícones para busca dinâmica segura
  const icons = {
    ...FiIcons,
    ...SiIcons,
  } as Record<string, React.ComponentType<{ className?: string }>>;

  return (
    <section id="contact" className="relative flex min-h-[70vh] flex-col justify-center px-6 py-12 md:px-24 bg-zinc-950 text-zinc-50 overflow-hidden">
      {/* Luz de fundo suave */}
      <div className="absolute top-1/3 left-1/4 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/5 blur-[120px] pointer-events-none md:h-[500px] md:w-[500px]" />

      <div className="w-full max-w-7xl">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl space-y-6 mb-12"
        >
          <h2 className="text-sm font-mono tracking-widest text-sky-400 uppercase md:text-base">[ 04. Connection ]</h2>
          <h3 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Direct <span className="text-zinc-500 italic">channels</span>.
          </h3>
          <p className="text-zinc-400 text-base md:text-lg max-w-xl font-light leading-relaxed">
            Escolha o canal de sua preferência. Estou disponível para propostas, conexões e projetos de código ponta a ponta.
          </p>
        </motion.div>

        {/* Grid de Redes Sociais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactsData.map((channel, index) => {
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
                    ? 'border-zinc-800 bg-zinc-900/10 hover:border-sky-500/40 hover:bg-zinc-900/30'
                    : 'border-zinc-900/50 bg-zinc-950 hover:border-zinc-800 hover:bg-zinc-900/10'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-6">
                  <div className={`p-3 rounded-lg border transition-colors ${
                    channel.isPrimary 
                      ? 'border-zinc-800 bg-zinc-900/40 text-sky-400 group-hover:border-sky-500/30' 
                      : 'border-zinc-900 bg-zinc-900/10 text-zinc-400 group-hover:text-zinc-200'
                  }`}>
                    {IconComponent ? <IconComponent className="w-5 h-5" /> : <div className="w-5 h-5 bg-zinc-800 animate-pulse rounded" />}
                  </div>
                  
                  {/* Seta discreta font-mono indicando link externo */}
                  <span className="text-xs font-mono text-zinc-600 group-hover:text-sky-400 transition-colors">
                    🡪
                  </span>
                </div>

                <div>
                  <h4 className="text-xs font-mono tracking-wider uppercase text-zinc-500 mb-1">
                    {channel.name}
                  </h4>
                  <p className="text-sm font-medium text-zinc-300 group-hover:text-zinc-50 transition-colors truncate">
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