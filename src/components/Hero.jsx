import profileImage from "../assets/photo2-compressed.png";
import githubIcon from "../Icon/github.svg";
import linkedinIcon from "../Icon/linkedin.svg";
import ScrollReveal from './ScrollReveal';

const Hero = () => {
  return (
    <section className="overflow-hidden relative">
      {/* Subtle warm grid background */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#0d0d0d 1px, transparent 1px), linear-gradient(90deg, #0d0d0d 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between px-6 md:px-16 lg:px-24 xl:px-40 py-20 lg:py-28 gap-12 lg:gap-20 max-w-screen-xl mx-auto">

        {/* Text content */}
        <div className="flex flex-col gap-6 flex-1 items-center lg:items-start text-center lg:text-left">

          {/* Status pill */}
          <ScrollReveal direction="left" delay={0.05} width="100%">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f4f3ef] border border-[#e8e6e0] rounded-full text-[13px] text-[#5a5a5a]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new projects
            </div>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal direction="left" delay={0.15} width="100%">
            <h1 className="text-[2.8rem] md:text-[3.6rem] lg:text-[4.2rem] font-['Instrument_Serif'] font-normal text-[#0d0d0d] leading-[1.05] tracking-[-0.03em]">
              Hi, I'm Averil —<br />
              <span className="italic text-[#8a8070]">full-stack</span> developer.
            </h1>
          </ScrollReveal>

          {/* Sub-copy */}
          <ScrollReveal direction="left" delay={0.25} width="100%">
            <p className="text-[#5a5a5a] text-base md:text-lg leading-relaxed max-w-md lg:max-w-none lg:pr-16">
              I build fast, accessible, and visually refined web applications end-to-end —
              from database architecture to polished UI. Fuelled by curiosity and strong coffee.
            </p>
          </ScrollReveal>

          {/* Location + links row */}
          <ScrollReveal direction="left" delay={0.35} width="100%">
            <div className="flex flex-col sm:flex-row items-center lg:items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-1.5 text-[14px] text-[#999]">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Malang, Indonesia
              </div>

              <div className="hidden sm:block w-px h-4 bg-[#e8e6e0]" />

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Saident"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#e8e6e0] bg-[#fafaf8] hover:bg-[#f0efe9] hover:border-[#d0cec8] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <img src={githubIcon} alt="github" className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/averilprimayuda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#e8e6e0] bg-[#fafaf8] hover:bg-[#f0efe9] hover:border-[#d0cec8] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <img src={linkedinIcon} alt="linkedin" className="w-4 h-4" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA buttons */}
          <ScrollReveal direction="left" delay={0.45} width="100%">
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href="#contact"
                className="px-6 py-3 bg-[#0d0d0d] text-[#fafaf8] text-[15px] font-medium rounded-xl hover:bg-[#2a2a2a] transition-colors no-underline"
              >
                Get in touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-[#e8e6e0] text-[#0d0d0d] text-[15px] font-medium rounded-xl hover:bg-[#f0efe9] transition-colors no-underline"
              >
                View projects
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Photo */}
        <ScrollReveal direction="right" delay={0.2} className="flex-shrink-0 flex items-start justify-center lg:justify-end mt-4 lg:mt-8">
          <div className="relative">
            {/* Decorative offset square */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#e8e6e0] rounded-2xl" />
            <div className="absolute -bottom-8 -right-8 w-full h-full border border-[#eceae4] rounded-2xl opacity-50" />

            <div className="relative w-60 h-72 md:w-68 md:h-80 lg:w-72 lg:h-88 rounded-2xl overflow-hidden border border-[#e8e6e0] shadow-[0_8px_32px_rgba(0,0,0,0.10)]">
              <img
                src={profileImage}
                alt="Averil Primayuda"
                className="w-full h-full object-cover"
              />
              {/* Subtle warm overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* Bottom separator with label */}
      <div className="px-6 md:px-16 lg:px-24 xl:px-40 max-w-screen-xl mx-auto pb-4">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-[#e8e6e0]" />
          <span className="text-[12px] text-[#bbb] uppercase tracking-widest font-medium">scroll to explore</span>
          <div className="h-px flex-1 bg-[#e8e6e0]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;