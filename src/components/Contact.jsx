import React, { useState } from "react";
import githubIcon from "../Icon/github.svg";
import linkedinIcon from "../Icon/linkedin.svg";
import mailIcon from "../Icon/mail.png";
import telephoneIcon from "../Icon/telephone.png";
import copyIcon from "../Icon/copy.png";
import ScrollReveal from "./ScrollReveal";

const Contact = () => {
  const [copiedItem, setCopiedItem] = useState(null);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(text);
    
    setTimeout(() => {
      setCopiedItem(null);
    }, 2000);
  };

  return (
    <div id="contact" className="bg-white px-48 py-16">
      <ScrollReveal direction="down" delay={0.1} width="100%">
        <div className="flex justify-center mb-8">
          <span className="bg-gradient-to-r from-gray-100 to-gray-300 border border-gray-200 text-gray-900 px-6 py-2.5 rounded-full text-sm font-semibold shadow-md">
            Get in touch
          </span>
        </div>
      </ScrollReveal>

      {/* Main Message */}
      <ScrollReveal direction="down" delay={0.1} width="100%">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-lg text-gray-600 leading-relaxed">
            Looking ahead, my inbox is always open. Whether you're looking to hire
            a developer, have a project inquiry, or simply want to network, I'd
            love to hear from you.
          </p>
        </div>  
      </ScrollReveal>

      <div className="max-w-2xl mx-auto text-center space-y-6 mb-8">
        <div className="flex items-center justify-center gap-4">
          <img src={mailIcon} alt="mail" className="w-6 h-6" />

          <a
            href="mailto:averilprimayuda@gmail.com"
            className="text-2xl font-bold text-black hover:text-gray-600 transition-colors hover:text-black hover:-translate-y-1 transition-transform"
          >
            averilprimayuda@gmail.com
          </a>

          <div className="relative flex items-center">
            <button
              onClick={() => handleCopy("averilprimayuda@gmail.com")}
              className="text-gray-700 hover:text-black active:scale-75 duration-150 hover:-translate-y-1 transition-transform"
              title="Copy email"
            >
              <img src={copyIcon} alt="copy" className="w-6 h-6" />
            </button>
            
            <div 
              className={`absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded-md shadow-lg pointer-events-none transition-all duration-300 ${
                copiedItem === "averilprimayuda@gmail.com" 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-2"
              }`}
            >
              Copied!
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center justify-center gap-4">
          <img src={telephoneIcon} alt="telephone" className="w-6 h-6" />

          <a
            href="tel:+62822300800369"
            className="text-2xl font-bold text-black hover:text-gray-600 transition-colors hover:text-black hover:-translate-y-1 transition-transform"
          >
            +62 8223008369
          </a>

          <div className="relative flex items-center">
            <button
              onClick={() => handleCopy("+62 8223008369")}
              className="text-gray-700 hover:text-black active:scale-75 duration-150 hover:-translate-y-1 transition-transform"
              title="Copy phone number"
            >
              <img src={copyIcon} alt="copy" className="w-6 h-6" />
            </button>

            <div 
              className={`absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded-md shadow-lg pointer-events-none transition-all duration-300 ${
                copiedItem === "+62 8223008369" 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-2"
              }`}
            >
              Copied!
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-600 pb-8">
          You may also find me on these platforms!
        </p>

        <div className="flex items-center justify-center gap-6">
          <a href="https://github.com/Saident" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black hover:-translate-y-1 transition-transform">
            <img src={githubIcon} alt="github" className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/averilprimayuda/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black hover:-translate-y-1 transition-transform">
            <img src={linkedinIcon} alt="linkedin" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;