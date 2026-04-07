import javascriptIcon from "../Icon/javascript.svg";
import phpIcon from "../Icon/php.svg";
import golangIcon from "../Icon/golang.svg";
import javaIcon from "../Icon/java.svg";
import reactIcon from "../Icon/react.svg";
import mysqlIcon from "../Icon/mysql.svg";
import postgresIcon from "../Icon/postgresql.svg";
import gitIcon from "../Icon/git.svg";
import ScrollReveal from "./ScrollReveal";
import laravel from "../Icon/laravel.svg";
import aws from "../Icon/aws.svg";
import postman from "../Icon/postman.svg";

const BladeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
    <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#FF2D20"/>
    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#FF2D20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.55"/>
  </svg>
);

const AIIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="#4a4a44" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    <circle cx="12" cy="12" r="3" fill="#4a4a44" stroke="none" opacity="0.15"/>
    <circle cx="12" cy="12" r="1.5" fill="#4a4a44" stroke="none"/>
  </svg>
);

const skillGroups = [
  {
    category: "Programming Languages",
    skills: [
      { name: "PHP",        render: "img",  src: phpIcon },
      { name: "GoLang",     render: "img",  src: golangIcon },
      { name: "Java",       render: "img",  src: javaIcon },
      { name: "JavaScript", render: "img",  src: javascriptIcon },
      { name: "Blade",      render: "svg",  Icon: BladeIcon },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "Laravel",  render: "ext", src: laravel },
      { name: "Gin",      render: "ext", src: golangIcon },
      { name: "React.js", render: "img", src: reactIcon },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL",      render: "img", src: mysqlIcon },
      { name: "PostgreSQL", render: "img", src: postgresIcon },
    ],
  },
  {
    category: "Other Tools",
    skills: [
      { name: "Git",      render: "img", src: gitIcon },
      { name: "AWS",      render: "ext", src: aws },
      { name: "Postman",  render: "ext", src: postman },
      { name: "AI Tools", render: "svg", Icon: AIIcon },
    ],
  },
];

const SkillPill = ({ skill }) => {
  const icon =
    skill.render === "svg" ? (
      <skill.Icon />
    ) : (
      <img
        src={skill.src}
        alt={skill.name}
        className="w-7 h-7 object-contain"
        onError={(e) => (e.currentTarget.style.display = "none")}
      />
    );

  return (
    <div
      className="flex items-center gap-3 px-5 py-3.5 bg-[#f4f3ef] border border-[#e8e6e0] rounded-2xl
        hover:-translate-y-1.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.10)] hover:border-[#d0cec8] hover:bg-[#eeecea]
        transition-all duration-200 cursor-default select-none"
    >
      {icon}
      <span className="text-[15px] font-medium text-[#4a4a44]">{skill.name}</span>
    </div>
  );
};

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

              {/* Category label — wider to fit longer names */}
              <div className="sm:w-56 shrink-0 pt-4">
                <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#999] leading-relaxed">
                  {group.category}
                </span>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <SkillPill key={skill.name} skill={skill} />
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