import profileImage from "../assets/1764214549495.jpg.jpeg";
import ScrollReveal from './ScrollReveal';

const About = () => {
  return (
    // 1. RESPONSIVE PADDING: px-8 on mobile, px-48 on desktop
    <div id="about" className="bg-white px-8 lg:px-48 py-16 pt-8 overflow-hidden max-w-screen-2xl mx-auto">
      
      {/* Badge -> Slides Down since it's in the middle */}
      <ScrollReveal direction="down" delay={0.1} width="100%">
        <div className="flex justify-center mb-8">
          <span className="bg-gradient-to-r from-gray-100 to-gray-300 border border-gray-200 text-gray-900 px-6 py-2.5 rounded-full text-sm font-semibold shadow-md">
            About me
          </span>
        </div>
      </ScrollReveal>

      {/* 2. RESPONSIVE LAYOUT: Stacks vertically (flex-col) on mobile, side-by-side (flex-row) on desktop */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
        
        {/* Left - Image: Removed pr-12 on mobile so it centers nicely */}
        <ScrollReveal direction="left" delay={0.2} className="flex-shrink-0 lg:pr-12 mt-4 lg:mt-0">
          {/* Scaled down the image slightly for mobile screens */}
          <div className="relative w-64 h-80 lg:w-72 lg:h-96">
            <div className="absolute bottom-0 -left-4 w-56 h-76 lg:w-64 lg:h-92 bg-gray-200"></div>
            <div className="absolute top-0 left-0 w-56 h-76 lg:w-64 lg:h-92 bg-gray-300">
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover border-4 lg:border-6 border-white" />
            </div>
          </div>
        </ScrollReveal>

        {/* Right - Text Content: Centers text on mobile, left-aligns on desktop */}
        <ScrollReveal direction="right" delay={0.4} width="100%" className="flex-1 text-center lg:text-left">
          
          {/* Responsive Font Size */}
          <div className="text-3xl lg:text-4xl font-bold text-black">
            Curious about me? Here you have it:
          </div>

          <div className="text-gray-600 text-base leading-relaxed">
            <p className="pt-6">
              I'm a full-stack software engineer passionate about building clean, performant, and intuitive digital products. 
              As a recent Information Technology graduate from the University of Brawijaya, I love tackling challenges end-to-end—from designing robust database architectures to crafting seamless front-end interfaces.
            </p>

            <p className="pt-4">
              My toolkit revolves around modern technologies like GoLang, React.js, Laravel, Node.js, SQL databases, and AI-driven development tools like Claude. 
              I'm always eager to learn, whether I'm diving into personal projects, volunteering, or competing in hackathons.
            </p>

            <p className="pt-4">
              When I step away from the keyboard, I'm usually out fishing, brewing a great cup of coffee, or watching movies. 
              Let's connect on LinkedIn, or check out my code on GitHub!
            </p>

            <p className="pt-4 pb-4">
              Finally, some quick bits about me.
            </p>
            
            {/* Quick Facts Grid: Forces text left so bullet points line up neatly, centers the block on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-xs mx-auto lg:mx-0">
              <div className="flex items-start gap-2">
                <span className="text-gray-900 font-semibold">•</span>
                <span>Degree in IT</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-900 font-semibold">•</span>
                <span>Avid learner</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-900 font-semibold">•</span>
                <span>Problem solver</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-900 font-semibold">•</span>
                <span>Full-stack developer</span>
              </div>
            </div>

            <p className="pt-6 lg:pt-4">
              One last thing, I'm available for work, so feel free to reach out and say hello!
            </p>
          </div>
        </ScrollReveal>
        
      </div>
    </div>
  );
};

export default About;