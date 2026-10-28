import ProjectCaseStudy from './pages/ProjectCaseStudy'
import { projects } from './data/portfolio'
import ScrollTrail from './components/ScrollTrail'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const project = projects.find(item => item.caseStudyPath === path)
  return (
    <>
      <ScrollTrail />
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar homePrefix={project ? '/' : ''} />
      <main id="main" tabIndex={-1}>
        {project ? <ProjectCaseStudy project={project} /> : <>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
        </>}
      </main>
    </>
  )
}

export default App
