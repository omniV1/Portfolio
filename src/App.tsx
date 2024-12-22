import Hero from './components/hero'
import ProjectsSection from './components/ProjectSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <div className="bg-slate-900">
      <section id="home" className="relative w-full">
        <Hero />
      </section>

      <section id="projects" className="relative w-full snap-start">
        <ProjectsSection />
      </section>

      <section id="contact" className="relative w-full snap-start">
        <ContactSection />
      </section>
    </div>
  );
}

export default App