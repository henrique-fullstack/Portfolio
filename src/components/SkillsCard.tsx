// src/components/SkillsCard.tsx
import Image from "next/image";
import Skill from "../types/skill";

export default function SkillsCard({ skill }: { skill: Skill }) {
  return (
    // bg-card: Usa a cor de container que definimos (claro ou escuro)
    // border: Adiciona uma borda sutil
    // dark:border-border/50: No escuro, a borda fica mais transparente
    <div className="bg-card rounded-2xl border border-border/50 shadow-sm p-6 flex flex-col items-center gap-2 hover:border-primary/50 transition-all duration-300 hover:shadow-md group">
      {skill.imageUrl && (
        <Image
          src={skill.imageUrl || '/placeholder-skill.svg'}
          alt={skill.name}
          width={48}
          height={48}
          // group-hover: Uma animação sutil no ícone quando passa o mouse no card
          className="object-contain mb-2 group-hover:scale-110 transition-transform"
        />
      )}
      <div className="text-center">
        {/* text-foreground: Garante a cor de texto correta para o tema */}
        <h3 className="text-foreground font-bold text-base">{skill.name}</h3>
        
        {/* text-primary: A cor da "Rosa Azul" destacando a habilidade */}
        <p className="text-primary text-xs font-medium uppercase tracking-wider">
          {skill.ability}
        </p>
      </div>
    </div>
  );
}