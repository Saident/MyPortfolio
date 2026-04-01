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
    <div className="bg-white px-48 py-16 pt-8">
      {/* Skills Header Badge */}
      <div className="flex justify-center mb-8">
        <span className="bg-gradient-to-r from-gray-100 to-gray-300 border border-gray-200 text-gray-900 px-6 py-2.5 rounded-full text-sm font-semibold shadow-md">
          Skills
        </span>
      </div>

      {/* Section Title */}
      <h2 className="text-4xl font-bold text-black pb-8 text-center">
        The skills, tools and technologies I am good at:
      </h2>

      {/* Skills Container - Changed to Flex Wrap */}
      <div className="flex justify-center items-center">
        {/* Changed this line from grid to flex */}
        <div className="flex flex-wrap justify-center gap-12 max-w-4xl">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center w-24">
              {/* Skill Icon */}
              <div className="w-20 h-20 rounded-lg flex items-center justify-center">
                <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
              </div>
              {/* Skill Name */}
              <span className="text-gray-700 font-medium text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;