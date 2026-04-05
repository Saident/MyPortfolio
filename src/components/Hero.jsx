import profileImage from "../assets/IMG_20260310_113804_796.jpg.jpeg";
import locationIcon from "../Icon/Icon.svg";
import greenButton from "../Icon/green.png";
import githubIcon from "../Icon/github.svg";
import linkedinIcon from "../Icon/linkedin.svg";
import ScrollReveal from './ScrollReveal';

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between px-6 md:px-16 lg:px-48 py-16 lg:py-24 gap-12 lg:gap-16 max-w-screen-2xl mx-auto">
        
        <div className="flex flex-col gap-4 flex-1 items-center lg:items-start text-center lg:text-left">
          
          <ScrollReveal direction="left" delay={0.1} width="100%">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
              Hi, I&apos;m Averil 👋
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.2} width="100%">
            <p className="text-base md:text-lg text-gray-600 leading-relaxed pb-4 lg:pb-8 lg:pr-12">
              I&apos;m a full stack developer with a
              focus on creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 20+ projects, I still love it as if it was something new.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.3} width="100%">
            <div className="flex flex-col gap-2 pb-6 lg:pb-8 items-center lg:items-start">
              <div className="flex items-center gap-2">
                <img src={locationIcon} alt="location" className="w-3 md:w-4 h-3 md:h-4" />
                <span className="text-sm md:text-base text-gray-600">Malang, Indonesia</span>
              </div>

              <div className="flex items-center gap-2">
                <img src={greenButton} alt="status" className="w-3 md:w-4 h-3 md:h-4" />
                <span className="text-sm md:text-base text-gray-600">Available for new projects</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.4} width="100%">
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <a href="https://github.com/Saident" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform">
                <img src={githubIcon} alt="github" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
              </a>
              <a href="https://www.linkedin.com/in/averilprimayuda/" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform">
                <img src={linkedinIcon} alt="linkedin" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
              </a>
            </div>
          </ScrollReveal>

        </div>

        <ScrollReveal direction="right" delay={0.2} className="flex items-center justify-center lg:justify-end lg:mr-8 mt-8 lg:mt-0">
          <div className="relative w-64 h-72 md:w-72 md:h-76 lg:w-80 lg:h-84">
            <div className="absolute bottom-0 left-4 w-56 h-64 md:w-64 md:h-72 lg:w-72 lg:h-80 bg-gray-200"></div>
            <div className="absolute top-0 left-0 w-56 h-64 md:w-64 md:h-72 lg:w-72 lg:h-80 bg-gray-300">
              <img src={profileImage} alt="Averil" className="w-full h-full object-cover border-4 md:border-6 border-white" />
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default Hero;