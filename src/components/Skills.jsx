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

const skillGroups = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", icon: javascriptIcon },
      { name: "GoLang", icon: golangIcon },
      { name: "PHP", icon: phpIcon },
      { name: "Java", icon: javaIcon },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: reactIcon },
      { name: "Tailwind CSS", icon: tailwindIcon },
    ],
  },
  {
    category: "Backend & DB",
    skills: [
      { name: "Node.js", icon: nodeIcon },
      { name: "PostgreSQL", icon: postgresIcon },
      { name: "MySQL", icon: mysqlIcon },
    ],
  },
  {
    category: "Tooling",
    skills: [
      { name: "Git", icon: gitIcon },
      { name: "Figma", icon: figmaIcon },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 md:px-16 lg:px-24 xl:px-40 py-24 overflow-hidden max-w-screen-xl mx-auto">

      <ScrollReveal direction="down" delay={0.05} width="100%">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[12px] font-medium uppercase tracking-[0.15em] text-[#999]">Skills</span>
          <div className="h-px flex-1 bg-[#e8e6e0]" />
        </div>
      </ScrollReveal>

      <ScrollReveal direction="down" delay={0.15} width="100%">
        <h2 className="text-[2.2rem] lg:text-[2.8rem] font-['Instrument_Serif'] font-normal text-[#0d0d0d] leading-tight mb-14">
          Tools I work with
        </h2>
      </ScrollReveal>

      <div className="space-y-10">
        {skillGroups.map((group, gi) => (
          <ScrollReveal key={group.category} direction="up" delay={0.1 + gi * 0.08} width="100%">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-0">
              {/* Category label */}
              <div className="sm:w-40 shrink-0 pt-4">
                <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#999]">
                  {group.category}
                </span>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 px-5 py-3.5 bg-[#f4f3ef] border border-[#e8e6e0] rounded-2xl
                      hover:-translate-y-1.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.10)] hover:border-[#d0cec8] hover:bg-[#eeecea]
                      transition-all duration-200 cursor-default"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-7 h-7"
                    />
                    <span className="text-[15px] font-medium text-[#4a4a44]">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {gi < skillGroups.length - 1 && (
              <div className="mt-10 h-px bg-[#eeece6]" />
            )}
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;