import Header from '../src/components/Header';
import ProjectList from '../src/components/ProjectList';

export default function Home() {
  return (
    <>
    <Header />
    <main className="container mx-auto px-6 py-12">
      <section id="home" className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p className="text-gray-400 text-lg">
          Hi, I'm Carlos Henrique, a passionate full-stack developer. Explore my projects and feel free to connect!
        </p>
      </section>

      <section id="projects" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <ProjectList />
      </section>

      <section id="contact">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-400 text-lg">
          Feel free to reach out via email at <a href="mailto:carlos.henrique@example.com" className="text-blue-500 hover:underline">
            carlos.henrique@example.com
          </a>
        </p>
      </section>
    </main>
  </>
  );
}