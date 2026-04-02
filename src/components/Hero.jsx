import profileImage from "../assets/IMG_20260310_113804_796.jpg.jpeg";
import locationIcon from "../Icon/Icon.svg";
import greenButton from "../Icon/green.png";
import githubIcon from "../Icon/github.svg";
import linkedinIcon from "../Icon/linkedin.svg";
import ScrollReveal from './ScrollReveal';

const Hero = () => {
  return (
    <div className="flex items-start justify-between bg-white px-48 py-24 gap-16 overflow-hidden">
      <div className="flex flex-col gap-2 flex-1">
        
        <ScrollReveal direction="left" delay={0.1} width="100%">
          <h1 className="text-6xl font-bold text-black">
            Hi, I&apos;m Averil 👋
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="left" delay={0.2} width="100%">
          <p className="text-lg text-gray-600 leading-relaxed pb-8 pr-12">
            I&apos;m a full stack developer (React.js &amp; GoLang) with a
            focus on creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 20+ projects, I still love it as if it was something new.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="left" delay={0.3} width="100%">
          <div className="flex flex-col gap-2 pb-8">
            <div className="flex items-center gap-2">
              <img src={locationIcon} alt="location" className="w-3 h-3" />
              <span className="text-gray-600">Malang, Indonesia</span>
            </div>

            <div className="flex items-center gap-2">
              <img src={greenButton} alt="status" className="w-3 h-3" />
              <span className="text-gray-600">Available for new projects</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" delay={0.4} width="100%">
          <div className="flex items-center gap-4">
            <a href="https://github.com/Saident" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform">
              <img src={githubIcon} alt="github" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/averilprimayuda/" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform">
              <img src={linkedinIcon} alt="linkedin" className="w-6 h-6" />
            </a>
          </div>
        </ScrollReveal>

      </div>

      <ScrollReveal direction="right" delay={0.2} className="flex items-center justify-between mr-32">
        <div className="relative w-80 h-84">
          <div className="absolute bottom-0 left-4 w-72 h-80 bg-gray-200"></div>
          <div className="absolute top-0 left-0 w-72 h-80 bg-gray-300">
            <img src={profileImage} alt="Averil" className="w-full h-full object-cover border-6 border-white" />
          </div>
        </div>
      </ScrollReveal>

    </div>
  );
};

export default Hero;