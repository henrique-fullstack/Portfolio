import skills from '../data/skills';
import SkillsCard from './SkillsCard';

export default function SkillsList() {
    return (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {skills.map((skill) => (
                <SkillsCard key={skill.id} skill={skill} />
            ))}
        </section>
    );
}