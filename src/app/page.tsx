import Hero from '@/components/Hero';
import Header from '@/components/Header';
import Aboutme from '@/components/Aboutme';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Aboutme />
      {/* Outras seções como Projects, Contact, etc. podem ser adicionadas aqui */}
    </main>
  );
}