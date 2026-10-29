import { useEffect, useRef, useState } from "react";
import { HamburgerMenuIcon, Cross2Icon, ArrowTopRightIcon } from "@radix-ui/react-icons";
import resumePdf from "../assets/resume 2.pdf";
import { startupState } from '../startup';

const navItems = ["Projects", "About", "Skills", "Contact"];

const Navbar = ({ homePrefix = "" }) => {
  const [isOpen, setIsOpen] = useState(startupState.menuOpen);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 768px)');
    const closeOnDesktop = () => { if (desktop.matches) setIsOpen(false); };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  return (
    <header className="site-header">
      <div className="container nav-bar">
        <a href={`${homePrefix}#home`} className="wordmark" aria-label="Averil, home">Averil.</a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => <a key={item} href={`${homePrefix}#${item.toLowerCase()}`}>{item}</a>)}
          <a className="resume-link" href={resumePdf} download="CV - Averil Primayuda.pdf">Résumé <ArrowTopRightIcon aria-hidden="true" /></a>
        </nav>
        <button type="button" className="menu-toggle" ref={toggleRef} onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-controls="mobile-navigation">
          <span className="menu-toggle-label">{isOpen ? "Close" : "Menu"}</span>
          <span className="menu-toggle-icon" aria-hidden="true">
            <HamburgerMenuIcon className="menu-icon-open" />
            <Cross2Icon className="menu-icon-close" />
          </span>
        </button>
      </div>
      {isOpen && (
        <nav id="mobile-navigation" className="mobile-nav container" aria-label="Mobile navigation">
          {navItems.map((item) => <a key={item} href={`${homePrefix}#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>{item}</a>)}
          <a href={resumePdf} download="CV - Averil Primayuda.pdf" onClick={() => setIsOpen(false)}>Download résumé <ArrowTopRightIcon aria-hidden="true" /></a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
