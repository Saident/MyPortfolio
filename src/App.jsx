import { useLayoutEffect } from 'react'
import ProjectCaseStudy from './pages/ProjectCaseStudy'
import { projects } from './data/portfolio'
import ScrollTrail from './components/ScrollTrail'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { startupState } from './startup'

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const project = projects.find(item => item.caseStudyPath === path)
  useLayoutEffect(() => {
    // Initial fragments can resolve before this client-rendered page exists.
    const target = window.location.hash.slice(1)
    if (target) document.getElementById(target)?.scrollIntoView({ block: 'start' })
    const focused = startupState.focusControl ? document.querySelector(startupState.focusControl)
      : startupState.focusHref ? [...document.querySelectorAll('a[href]')].find(link => link.getAttribute('href') === startupState.focusHref && link.getClientRects().length) : null
    focused?.focus({ preventScroll: true })
  }, [])
  return (
    <>
      <ScrollTrail variant={project ? 'rail' : 'thread'} />
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
