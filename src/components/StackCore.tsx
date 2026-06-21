import { skillsData } from './config/skills';

export default function CoreStacks() {
  // Filtra apenas as que você marcou como principais (isCore: true)
  const coreSkills = skillsData.filter(skill => skill.isCore);

  return (
    // grid-cols-2 cria duas colunas perfeitas. gap-3 dá o espaçamento ideal.
    <div className="grid grid-cols-2 gap-3 w-full">
      {coreSkills.map(skill => (
        <div 
          key={skill.name} 
          className="flex items-center justify-center px-4 py-3 bg-zinc-900/60 border border-zinc-800/80 rounded-xl text-xs font-medium tracking-wide text-zinc-300 hover:border-zinc-700/80 transition-colors duration-200"
        >
          {skill.name}
        </div>
      ))}
    </div>
  );
}