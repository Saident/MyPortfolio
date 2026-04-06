import React, { useState } from "react";
import githubIcon from "../Icon/github.svg";
import linkedinIcon from "../Icon/linkedin.svg";
import ScrollReveal from "./ScrollReveal";

const Contact = () => {
  const [copiedItem, setCopiedItem] = useState(null);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(text);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const contacts = [
    {
      label: "Email",
      value: "averilprimayuda@gmail.com",
      href: "mailto:averilprimayuda@gmail.com",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: "+62 8223008369",
      href: "tel:+628223008369",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
  ];

  const socials = [
    { label: "GitHub", href: "https://github.com/Saident", icon: githubIcon },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/averilprimayuda/", icon: linkedinIcon },
  ];

  return (
    <section id="contact" className="px-6 md:px-16 lg:px-24 xl:px-40 py-24 overflow-hidden max-w-screen-xl mx-auto">

      <ScrollReveal direction="down" delay={0.05} width="100%">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[12px] font-medium uppercase tracking-[0.15em] text-[#999]">Contact</span>
          <div className="h-px flex-1 bg-[#e8e6e0]" />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* Left: headline + body */}
        <ScrollReveal direction="left" delay={0.15} width="100%">
          <h2 className="text-[2.2rem] lg:text-[2.8rem] font-['Instrument_Serif'] font-normal text-[#0d0d0d] leading-tight mb-6">
            Let's build something<br />
            <span className="italic text-[#8a8070]">great together.</span>
          </h2>
          <p className="text-[#5a5a5a] text-[16px] leading-relaxed max-w-sm">
            Whether you're looking to hire a developer, have a project inquiry, or simply want to connect — my inbox is always open.
          </p>

          {/* Social links */}
          <div className="mt-10 flex items-center gap-3">
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#e8e6e0] bg-[#f4f3ef] rounded-xl text-[14px] text-[#4a4a44] font-medium hover:bg-[#0d0d0d] hover:text-white hover:border-[#0d0d0d] transition-all duration-200 no-underline group"
              >
                <img src={icon} alt={label} className="w-4 h-4 group-hover:brightness-0 group-hover:invert transition-all" />
                {label}
              </a>
            ))}
          </div>
        </ScrollReveal>

        {/* Right: contact details */}
        <ScrollReveal direction="right" delay={0.25} width="100%">
          <div className="space-y-4">
            {contacts.map(({ label, value, href, icon }) => (
              <div
                key={label}
                className="flex items-center justify-between gap-4 px-5 py-4 bg-[#f4f3ef] border border-[#e8e6e0] rounded-2xl hover:border-[#d0cec8] transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#0d0d0d] text-white rounded-lg shrink-0">
                    {icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-medium text-[#999] uppercase tracking-wider mb-0.5">{label}</div>
                    <a
                      href={href}
                      className="text-[15px] font-medium text-[#0d0d0d] hover:text-[#5a5a5a] transition-colors no-underline truncate block"
                    >
                      {value}
                    </a>
                  </div>
                </div>

                {/* Copy button */}
                <div className="relative shrink-0">
                  <button
                    onClick={() => handleCopy(value)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#e8e6e0] transition-colors cursor-pointer text-[#999] hover:text-[#0d0d0d]"
                    title="Copy"
                  >
                    {copiedItem === value ? (
                      <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>

                  {/* Tooltip */}
                  <div className={`absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#0d0d0d] text-white text-[11px] rounded-lg whitespace-nowrap pointer-events-none transition-all duration-200 ${copiedItem === value ? "opacity-100 -translate-y-0" : "opacity-0 translate-y-1"}`}>
                    Copied!
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0d0d0d] rotate-45" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <p className="mt-8 text-[13px] text-[#bbb] leading-relaxed">
            I typically respond within 24 hours. Looking forward to hearing from you.
          </p>
        </ScrollReveal>
      </div>

      {/* Page footer */}
      <ScrollReveal direction="up" delay={0.3} width="100%">
        <div className="mt-24 pt-8 border-t border-[#e8e6e0] flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-[#bbb]">
          <span>© {new Date().getFullYear()} Averil Primayuda. Built with React & Tailwind CSS.</span>
          <a href="#" className="hover:text-[#5a5a5a] transition-colors no-underline">Back to top ↑</a>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Contact;