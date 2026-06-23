import Hero from '@/components/Hero';
import Header from '@/components/Header';
import Aboutme from '@/components/Aboutme';
import Allskills from '@/components/Allskills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

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