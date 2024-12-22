import Hero from './components/hero'
import ProjectsSection from './components/ProjectSection'


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
    </div>
  )
}

export default App