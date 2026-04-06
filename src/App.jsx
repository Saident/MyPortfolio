import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <div className="w-full bg-white min-h-screen relative">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        
        <hr className="border-t border-black opacity-10" />
        <About />

        <hr className="border-t border-black opacity-10" />
        <Skills />

        <hr className="border-t border-black opacity-10" />
        <Projects />

        <hr className="border-t border-black opacity-10" />
        <Contact />
      </div>
    </div>
  )
}

export default App