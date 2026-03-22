// app/page.tsx
import Header from '../src/components/Header';
import SkillsList from '../src/components/SkillsList';
import ProjectCard from '../src/components/ProjectCard';

export default function Home() {
  return (
    <>
      <Header />
      {/* bg-background e text-foreground garantem o switch de cor */}
      <main className="min-h-screen bg-background text-foreground container mx-auto px-6 py-12 space-y-20">
        
        <section id="home" className="h-screen w-full flex flex-col items-center justify-center text-center pt-10">
          {/* text-primary na Rosa Azul */}
          <h1 className="text-8xl font-extrabold tracking-tighter mb-4 text-center">
            Welcome to My <span className="text-primary">Portfolio</span>
          
          </h1>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
            Hi, I am Carlos Henrique, a passionate full-stack developer based on the "Blue Rose" concept. Explore my projects and feel free to connect!
          </p>
        </section>

        <section id="about" className="flex flex-col items-start justify-center text-center pt-10">
          <h2 className="text-6xl font-bold tracking-tight mb-8 text-center">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto text-center">
            I am a full-stack developer with a passion for creating beautiful and functional web applications. With experience in React, Next.js, Python, and more, I strive to build projects that not only look great but also provide an excellent user experience.
          </p>
        </section>
        <section id= "skills" className="w-full">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
            My <span className="text-primary">Skills</span>
          </h2>
          <SkillsList />
        </section>

       
      </main>
    </>
  );
}