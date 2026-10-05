import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";
import resumePdf from "../assets/resume 2.pdf";

const navItems = ["About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.wordmark, .desktop-nav, .menu-toggle', {
        opacity: 0, y: -8, duration: 0.45, ease: 'power3.out', clearProps: 'transform,opacity',
      });
    }, headerRef);
    return () => media.revert();
  }, []);

  useLayoutEffect(() => {
    if (!isOpen) return;
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from(menuRef.current.children, {
        opacity: 0, y: -8, duration: 0.25, stagger: 0.035,
        ease: 'power3.out', clearProps: 'transform,opacity',
      });
    });
    return () => media.revert();
  }, [isOpen]);

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
    <header className="site-header" ref={headerRef}>
      <div className="container nav-bar">
        <a href="#home" className="wordmark" aria-label="Averil, home">Averil.</a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
          <a className="resume-link" href={resumePdf} download="CV - Averil Primayuda.pdf">Résumé <span aria-hidden="true">↗</span></a>
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
        <nav id="mobile-navigation" className="mobile-nav container" aria-label="Mobile navigation" ref={menuRef}>
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>{item}</a>)}
          <a href={resumePdf} download="CV - Averil Primayuda.pdf" onClick={() => setIsOpen(false)}>Download résumé ↗</a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
