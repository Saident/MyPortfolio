import profileImage from "../assets/1764214549495.jpg.jpeg";
import ScrollReveal from './ScrollReveal';

const quickBits = [
  { icon: "🎓", label: "IT Graduate, Universitas Brawijaya" },
  { icon: "🔧", label: "Full-stack developer" },
  { icon: "🧠", label: "Avid learner & problem solver" },
  { icon: "☕", label: "Movies & coffee enthusiast" },
];

const About = () => {
  return (
    <section id="about" className="px-6 md:px-16 lg:px-24 xl:px-40 py-24 overflow-hidden max-w-screen-xl mx-auto">

      <ScrollReveal direction="down" delay={0.05} width="100%">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[12px] font-medium uppercase tracking-[0.15em] text-[#999]">About me</span>
          <div className="h-px flex-1 bg-[#e8e6e0]" />
        </div>
      </ScrollReveal>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

        {/* Photo column */}
        <ScrollReveal direction="left" delay={0.15} className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:block">
          <div className="relative w-56 h-72 lg:w-64 lg:h-80">
            {/* Stacked paper effect */}
            <div className="absolute top-3 left-3 w-full h-full rounded-xl bg-[#ede9e2]" />
            <div className="absolute top-1.5 left-1.5 w-full h-full rounded-xl bg-[#f0ede6]" />
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-[#e8e6e0] shadow-[0_8px_24px_rgba(0,0,0,0.09)]">
              <img
                src={profileImage}
                alt="Averil Primayuda"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Text column */}
        <ScrollReveal direction="right" delay={0.25} width="100%" className="flex-1">
          <h2 className="text-[2.2rem] lg:text-[2.8rem] font-['Instrument_Serif'] font-normal text-[#0d0d0d] leading-tight mb-8">
            Curious about me?<br />
            <span className="italic text-[#8a8070]">Here you have it.</span>
          </h2>

          <div className="space-y-5 text-[#5a5a5a] text-[16px] leading-[1.75] max-w-xl">
            <p>
              I'm a full-stack engineer passionate about building clean, performant, and intuitive digital products. 
              As a recent Information Technology graduate from the University of Brawijaya, I love tackling challenges 
              end-to-end — from designing robust database architectures to crafting seamless front-end interfaces.
            </p>
            <p>
              My toolkit revolves around modern technologies like GoLang, React.js, Laravel, Node.js, and SQL databases.
              I'm always eager to learn, whether diving into personal projects, volunteering, or competing in hackathons.
            </p>
            <p>
              When away from the keyboard, I'm usually out fishing, brewing a great cup of coffee, or watching movies.
            </p>
          </div>

          {/* Quick bits */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {quickBits.map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-4 py-3 bg-[#f4f3ef] border border-[#e8e6e0] rounded-xl text-[14px] text-[#5a5a5a]"
              >
                <span className="text-base">{icon}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>

          {/* CTA line */}
          <p className="mt-8 text-[15px] text-[#0d0d0d] font-medium">
            I'm currently open to work.{" "}
            <a href="#contact" className="underline underline-offset-4 decoration-[#c8a882] hover:decoration-[#0d0d0d] transition-colors">
              Let's talk →
            </a>
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default About;