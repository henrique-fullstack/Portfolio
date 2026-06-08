import Hero from '@/components/Hero';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      {/* Outras seções como Projects, Contact, etc. podem ser adicionadas aqui */}
    </main>
  );
}