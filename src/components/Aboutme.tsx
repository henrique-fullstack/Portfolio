"use client";
import { motion } from 'framer-motion';

export default function About() {
  return (
    // 1. CONTAINER EXTERNO: Cópia idêntica da estrutura do seu Hero
    <section 
      id="about" 
      className="relative flex min-h-screen flex-col justify-center px-6 py-12 md:px-24 bg-zinc-950 text-zinc-50 overflow-hidden"
    >
      {/* Detalhe de luz reposicionado para diferenciar do Hero */}
      <div className="absolute top-1/2 right-1/4 -z-10 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none md:h-[500px] md:w-[500px]" />

      <div className="w-full max-w-7xl">
        
        {/* 2. TÍTULO: Ancorado à esquerda com as métricas e fontes exatas do Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl space-y-6"
        >
          <h2 className="text-sm font-mono tracking-widest text-sky-400 uppercase md:text-base">
            [ 01. Origin ]
          </h2>
          <h3 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl leading-none">
            Codando com <span className="text-zinc-500 italic">propósito.</span>
          </h3>
        </motion.div>

        {/* 3. GRID ASSIMÉTRICO: 12 colunas para afastar as divs do centro */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LADO ESQUERDO: Texto recuado usando lg:col-start-2 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-6 lg:col-start-2 space-y-6"
          >
            {/* Usando o mesmo max-w-xl e text-zinc-400 do parágrafo do Hero */}
            <p className="max-w-xl text-base text-zinc-400 md:text-lg font-light leading-relaxed">
              O nível que atingi hoje não é fruto de sorte, mas de uma busca incessante por 
              arquiteturas resilientes. Entendo que o código limpo é a base para escalar qualquer sistema internacional.
            </p>
            <p className="max-w-xl text-base text-zinc-400 md:text-lg font-light leading-relaxed">
              Especialista na tríade <span className="text-zinc-200 font-medium">Python, Next.js e TypeScript</span>, construo 
              projetos onde a fluidez visual do frontend se alinha perfeitamente à lógica bruta do backend.
            </p>
          </motion.div>

          {/* LADO DIREITO: Card ancorado nas colunas finais */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-4 lg:col-start-9 p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-md"
          >
            <h4 className="text-xs font-mono text-zinc-500 uppercase mb-6 italic tracking-widest">
              Core Stack
            </h4>
            <div className="flex flex-wrap gap-3">
              {['Python', 'Next.js', 'TypeScript', 'PostgreSQL', 'FastAPI'].map(tech => (
                <span key={tech} className="px-4 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-300">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}