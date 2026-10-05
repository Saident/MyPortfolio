import { useEffect, useState } from "react";
import resumePdf from "../assets/resume 2.pdf";

const navItems = ["About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="site-header">
      <div className="container nav-bar">
        <a href="#home" className="wordmark" aria-label="Averil, home">Averil.</a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
          <a className="resume-link" href={resumePdf} download="CV - Averil Primayuda.pdf">Résumé <span aria-hidden="true">↗</span></a>
        </nav>
        <button type="button" className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="mobile-navigation">
          {isOpen ? "Close" : "Menu"} <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
        </button>
      </div>
      {isOpen && (
        <nav id="mobile-navigation" className="mobile-nav container" aria-label="Mobile navigation">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>{item}</a>)}
          <a href={resumePdf} download="CV - Averil Primayuda.pdf" onClick={() => setIsOpen(false)}>Download résumé ↗</a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
