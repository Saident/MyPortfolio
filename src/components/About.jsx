import profileImage from "../assets/1764214549495.jpg.jpeg";
import ScrollReveal from './ScrollReveal';

const About = () => {
  return (
    <div id="about" className="bg-white px-48 py-16 pt-8 overflow-hidden">
            <ScrollReveal direction="left" delay={0.1} width="100%">
        <div className="flex justify-center mb-8">
          <span className="bg-gradient-to-r from-gray-100 to-gray-300 border border-gray-200 text-gray-900 px-6 py-2.5 rounded-full text-sm font-semibold shadow-md">
            About me
          </span>
        </div>
      </ScrollReveal>

      <div className="flex gap-16">
        <ScrollReveal direction="left" delay={0.2} className="flex-shrink-0 pr-12">
          <div className="relative w-72 h-96">
            <div className="absolute bottom-0 -left-4 w-64 h-92 bg-gray-200"></div>
            <div className="absolute top-0 left-0 w-64 h-92 bg-gray-300">
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover border-6 border-white" />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.4} width="100%" className="flex-1">
          <div className="text-4xl font-bold text-black">
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

            <p className="pt-4">
              Finally, some quick bits about me.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
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

            <p className="pt-4">
              One last thing, I'm available for work, so feel free to reach out and say hello!
            </p>
          </div>
        </ScrollReveal>
        
      </div>
    </div>
  );
};

export default About;