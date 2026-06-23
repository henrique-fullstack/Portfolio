'use client';

import { skillsData } from './config/skills';
import * as SiIcons from 'react-icons/si';

export default function Skills() {
  const coreSkills = skillsData.filter(skill => skill.isCore);
  const icons = SiIcons as Record<string, React.ComponentType<{ className?: string }>>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full">
      {coreSkills.map((skill) => {
        // Pega o ícone real (ex: SiReact) de dentro do react-icons
        const IconComponent = skill.icon ? icons[skill.icon] : null;

        return (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center gap-2 px-4 py-3 bg-zinc-900/60 border border-zinc-800/80 rounded-lg text-zinc-300 hover:border-zinc-700/80 hover:text-zinc-50 transition-all duration-200"
          >
            {IconComponent ? (
              <IconComponent className="w-6 h-6 flex-shrink-0 text-sky-400" />
            ) : (
              <div className="w-6 h-6 bg-zinc-800 rounded animate-pulse" />
            )}
            <span className="text-xs font-medium text-center line-clamp-2">
              {skill.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}