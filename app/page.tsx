// src/app/page.tsx
import Header from '../src/components/Header'; // O '@' aponta direto para a pasta src

export default function Home() {
  return (
    <>
      <Header /> {/* Aqui está o seu "Lego" encaixado */}
      
      <main className="container mx-auto px-6 py-8">
        {/* O restante das suas seções (Home, About, etc) continuam aqui */}
        <section id="home" className="h-[80vh] flex items-center justify-center">
            <h1 className="text-5xl font-bold">Build. Scale. Conquer.</h1>
        </section>
      </main>
    </>
  );
}