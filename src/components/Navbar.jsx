import React, { useState, useEffect } from "react";
import resumePdf from "../assets/resume 2.pdf";

const navItems = ["About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#fafaf8]/90 backdrop-blur-md shadow-[0_1px_0_0_#e8e6e0]"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 lg:px-20 py-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <a
          href="#"
          className="font-['Instrument_Serif'] text-2xl text-[#0d0d0d] tracking-tight hover:opacity-70 transition-opacity no-underline"
        >
          Averil.
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 text-[15px] text-[#5a5a5a] hover:text-[#0d0d0d] rounded-lg hover:bg-[#f0efe9] transition-all duration-200 no-underline"
            >
              {item}
            </a>
          ))}

          <div className="w-px h-5 bg-[#e8e6e0] mx-3" />

          <a
            href={resumePdf}
            download="CV - Averil Primayuda.pdf"
            className="px-5 py-2 bg-[#0d0d0d] text-[#fafaf8] text-[15px] font-medium rounded-xl hover:bg-[#2a2a2a] transition-colors no-underline inline-flex items-center gap-2 group"
          >
            <span>Resume</span>
            <svg className="w-3.5 h-3.5 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-[#f0efe9] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-[#0d0d0d] transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#0d0d0d] transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#0d0d0d] transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-1 border-t border-[#e8e6e0]">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-[#5a5a5a] hover:text-[#0d0d0d] hover:bg-[#f0efe9] rounded-lg transition-all no-underline font-medium"
            >
              {item}
            </a>
          ))}
          <div className="h-px bg-[#e8e6e0] my-2" />
          <a
            href={resumePdf}
            download="CV - Averil Primayuda.pdf"
            onClick={() => setIsOpen(false)}
            className="px-4 py-3 bg-[#0d0d0d] text-[#fafaf8] font-medium rounded-xl text-center no-underline hover:bg-[#2a2a2a] transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;