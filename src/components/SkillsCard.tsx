import Image from "next/image";
import Skill from "../types/skill";

export default function SkillsCard({ skill }: { skill: Skill }) {
  return (
    <div className="bg-card rounded-2xl border border-border/50 shadow-sm p-6 flex flex-col items-center gap-2 hover:border-primary/50 transition-all duration-300 hover:shadow-md group">
      {skill.imageUrl && (
        <Image
          src={skill.imageUrl || '/placeholder-skill.svg'}
          alt={skill.name}
          width={48}
          height={48}
          className="object-contain mb-2 group-hover:scale-110 transition-transform"
        />
      )}
      <div className="text-center">
        <h3 className="text-foreground font-bold text-base">{skill.name}</h3>
        
        <p className="text-primary text-xs font-medium uppercase tracking-wider">
          {skill.ability}
        </p>
      </div>
    </div>
  );
}