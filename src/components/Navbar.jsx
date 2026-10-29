import { useEffect, useRef, useState } from "react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import resumePdf from "../assets/resume 2.pdf";
import { startupState } from '../startup';

const navItems = ["Projects", "About", "Skills", "Contact"];

const Navbar = ({ homePrefix = "" }) => {
  const [isOpen, setIsOpen] = useState(() => startupState.menuOpen && matchMedia('(max-width: 767px)').matches);
  const headerRef = useRef(null);
  const panelRef = useRef(null);
  const toggleRef = useRef(null);

  const closeMenu = () => {
    if (panelRef.current?.contains(document.activeElement)) toggleRef.current?.focus({ preventScroll: true });
    setIsOpen(false);
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        toggleRef.current?.focus({ preventScroll: true });
      }
    };
    const onPointerDown = (event) => {
      if (isOpen && !headerRef.current?.contains(event.target)) {
        if (panelRef.current?.contains(document.activeElement)) toggleRef.current?.focus({ preventScroll: true });
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 768px)');
    const closeOnDesktop = () => {
      if (!desktop.matches) return;
      if (panelRef.current?.contains(document.activeElement) || document.activeElement === toggleRef.current) {
        headerRef.current?.querySelector('.desktop-nav a')?.focus({ preventScroll: true });
      }
      setIsOpen(false);
    };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    const measure = () => header.style.setProperty('--nav-height', `${header.getBoundingClientRect().height}px`);
    measure();
    if (typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(measure);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header" ref={headerRef} onBlur={(event) => {
      if (isOpen && event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) setIsOpen(false);
    }}>
      <div className="container nav-bar">
        <a href={`${homePrefix}#home`} className="wordmark" aria-label="Averil, home" onClick={closeMenu}>Averil.</a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => <a key={item} href={`${homePrefix}#${item.toLowerCase()}`}>{item}</a>)}
          <a className="resume-link" href={resumePdf} download="CV - Averil Primayuda.pdf">Résumé <ArrowTopRightIcon aria-hidden="true" /></a>
        </nav>
        <button type="button" className="menu-toggle" ref={toggleRef} onClick={() => setIsOpen((open) => !open)} aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} aria-controls="mobile-navigation">
          <span className="menu-toggle-label" aria-hidden="true">
            <span className="menu-label-open">{'Menu'.split('').map((letter, index) => <span className="menu-label-character" key={index}>{letter}</span>)}</span>
            <span className="menu-label-close">{'Close'.split('').map((letter, index) => <span className="menu-label-character" key={index}>{letter}</span>)}</span>
          </span>
          <svg className="menu-toggle-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path className="menu-line-top" d="M3 5h14" />
            <path className="menu-line-middle" d="M3 10h14" />
            <path className="menu-line-bottom" d="M3 15h14" />
          </svg>
        </button>
      </div>
      <div className="mobile-menu" ref={panelRef} data-open={isOpen} inert={!isOpen} aria-hidden={!isOpen}>
        <div className="mobile-menu-inner">
          <nav id="mobile-navigation" className="mobile-nav container" aria-label="Mobile navigation">
            {navItems.map((item) => <a key={item} href={`${homePrefix}#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
            <a href={resumePdf} download="CV - Averil Primayuda.pdf" onClick={closeMenu}>Download résumé <ArrowTopRightIcon aria-hidden="true" /></a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
