import Header from '../src/components/Header';
import SkillsList from '../src/components/SkillsList';
import ProjectList from '../src/components/ProjectList';
import ContactList from '../src/components/ContactList';

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-background text-foreground container mx-auto px-6 py-12 flex flex-col gap-24">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-[80vh] w-full flex flex-col items-center justify-center text-center pt-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 text-center">
            Welcome to My <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Hi, I am Carlos Henrique, a passionate full-stack developer based on the "Blue Rose" concept. Explore my projects and feel free to connect!
          </p>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="flex flex-col items-center justify-center text-center scroll-mt-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-center">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-center leading-relaxed">
            I am a full-stack developer with a passion for creating beautiful and functional web applications. With experience in React, Next.js, Python, and more, I strive to build projects that not only look great but also provide an excellent user experience.
          </p>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="w-full scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center">
            My <span className="text-primary">Skills</span>
          </h2>
          <SkillsList />
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="w-full scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center">
            My <span className="text-primary">Projects</span>
          </h2>
          <ProjectList />
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="w-full scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center">
            Contact <span className="text-primary">Me</span>
          </h2>
          <ContactList />
        </section>
      </main>

      <footer className="bg-card text-foreground py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <p className="text-center font-medium text-muted-foreground hover:text-primary transition-colors cursor-default">
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved for Henrique.
          </p>
        </div>
      </footer>
    </>
  );
}