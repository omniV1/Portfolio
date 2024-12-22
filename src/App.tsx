import Hero from './components/hero'
import ProjectsSection from './components/ProjectSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <div className="bg-slate-900">
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  )
}

export default App