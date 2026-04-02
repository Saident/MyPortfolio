import React, { useState } from "react";
import resumePdf from "../assets/resume.pdf";

const navItems = ["About", "Projects", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between px-6 lg:px-20 py-4 bg-white border-b border-gray-200 z-50">
      
      {/* Logo Area */}
      <div className="text-3xl font-bold text-gray-900">
      </div>

      <nav className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <div key={item} className="flex items-center justify-center">
            <a href={`#${item.toLowerCase()}`} className="text-gray-600 no-underline hover:text-gray-900 transition-colors">
              {item}
            </a>
          </div>
        ))}

        <div className="flex items-center justify-center gap-4">
          <a 
            href={resumePdf} 
            download="CV - Averil Primayuda.pdf"
            className="px-4 py-1.5 bg-gray-900 text-white rounded-xl cursor-pointer hover:bg-gray-800 transition-colors inline-block no-underline"
          >
            <span className="text-gray-50">Download CV</span>
          </a>
        </div>
      </nav>

      <button 
        className="md:hidden text-gray-600 hover:text-black focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      <div 
        className={`absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl md:hidden flex flex-col items-center py-6 gap-6 transition-all duration-300 origin-top ${
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        {navItems.map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            onClick={() => setIsOpen(false)}
            className="text-xl font-medium text-gray-600 no-underline hover:text-gray-900 transition-colors"
          >
            {item}
          </a>
        ))}

        <a 
          href={resumePdf} 
          download="CV - Averil Primayuda.pdf"
          onClick={() => setIsOpen(false)}
          className="px-6 py-2.5 bg-gray-900 text-white rounded-xl cursor-pointer hover:bg-gray-800 transition-colors inline-block no-underline w-11/12 max-w-sm text-center"
        >
          <span className="text-gray-50 font-medium">Download CV</span>
        </a>
      </div>

    </header>
  );
};

export default Navbar;