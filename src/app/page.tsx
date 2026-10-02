import Hero from '@/components/layout/Hero';
import Header from '@/components/layout/Header';
import Aboutme from '@/components/layout/Aboutme';
import Allskills from '@/components/layout/Allskills';
import Projects from '@/components/layout/Projects';
import Contact from '@/components/layout/Contact';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Aboutme />
      <Allskills />
      <Projects />
      <Contact />
    </main>
  );
}