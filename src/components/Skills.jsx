import javaIcon from "../Icon/java.svg";
import javascriptIcon from "../Icon/javascript.svg";
import phpIcon from "../Icon/php.svg";
import golangIcon from "../Icon/golang.svg";
import reactIcon from "../Icon/react.svg";
import nodeIcon from "../Icon/nodejs.svg";
import postgresIcon from "../Icon/postgresql.svg";
import mysqlIcon from "../Icon/mysql.svg";
import tailwindIcon from "../Icon/tailwind.svg";
import gitIcon from "../Icon/git.svg";
import figmaIcon from "../Icon/figma.svg";
import ScrollReveal from "./ScrollReveal";

const Skills = () => {
  const skills = [
    { name: "Java", icon: javaIcon },
    { name: "Javascript", icon: javascriptIcon },
    { name: "PHP", icon: phpIcon },
    { name: "GoLang", icon: golangIcon },
    { name: "React.js", icon: reactIcon },
    { name: "Node.js", icon: nodeIcon },
    { name: "PostgreSQL", icon: postgresIcon },
    { name: "MySQL", icon: mysqlIcon },
    { name: "Tailwindcss", icon: tailwindIcon },
    { name: "Git", icon: gitIcon },
    { name: "Figma", icon: figmaIcon },
  ];

  return (
    // 1. RESPONSIVE PADDING: px-8 on mobile, px-48 on desktop
    <div className="bg-white px-8 lg:px-48 py-16 pt-8 overflow-hidden max-w-screen-2xl mx-auto">
      
      <ScrollReveal direction="down" delay={0.1} width="100%">
        <div className="flex justify-center mb-8">
          <span className="bg-gradient-to-r from-gray-100 to-gray-300 border border-gray-200 text-gray-900 px-6 py-2.5 rounded-full text-sm font-semibold shadow-md">
            Skills
          </span>
        </div>
      </ScrollReveal>

      {/* 2. RESPONSIVE TEXT: text-3xl on mobile, text-4xl on desktop */}
      <ScrollReveal direction="down" delay={0.2} width="100%">
        <h2 className="text-3xl lg:text-4xl font-bold text-black pb-8 text-center">
          The skills, tools and technologies I am good at:
        </h2>
      </ScrollReveal>

      <div className="flex justify-center items-center">
        {/* 3. RESPONSIVE GAP: gap-6 on mobile so more icons fit per row, gap-12 on desktop */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-12 max-w-4xl">
          {skills.map((skill, index) => (
            <ScrollReveal 
              key={skill.name} 
              direction="up" 
              delay={0.3 + (index * 0.1)} 
            >
              <div className="flex flex-col items-center w-20 lg:w-24 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-lg flex items-center justify-center">
                  {/* Icon size scales down slightly on mobile */}
                  <img src={skill.icon} alt={skill.name} className="w-10 h-10 lg:w-12 lg:h-12" />
                </div>
                <span className="text-gray-700 font-medium text-center text-sm lg:text-base mt-2">
                  {skill.name}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;