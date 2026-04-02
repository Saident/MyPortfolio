import dashboardImage from "../assets/dashboard.png";
import womenCenterImage from "../assets/women center.jpeg";
import ScrollReveal from "./ScrollReveal";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Integrated Social Media App",
      description:
        "Built a full-stack web application for social media management as a thesis project. Designed the database schema and managed connections using MySQL.",
      tags: ["PHP", "Laravel", "Blade", "Javascript", "MySQL", "Tailwindcss", "Figma", "Git"],
      imagePosition: "left",
      imageAlt: "Social Media App Dashboard",
      link: "https://github.com/Saident/integrated-social-media",
    },
    {
      id: 2,
      title: "Women Center",
      description:
        "Built a web backend application as the final project for the Alterra Academy training. Collaborated with frontend and mobile teams to create a fully functional application.",
      tags: ["Golang", "Docker", "Postman", "MySQL", "Git"],
      imagePosition: "right",
      imageAlt: "Women Center Admin Panel",
      link: "https://github.com/Kelompok-4-Capstone-Alterra/go_women_center",
    },
  ];

  return (
    // 1. RESPONSIVE PADDING & OVERFLOW
    <div id="projects" className="bg-white px-8 lg:px-48 py-16 overflow-hidden max-w-screen-2xl mx-auto">
      
      {/* Badge -> Slides Down */}
      <ScrollReveal direction="down" delay={0.1} width="100%">
        <div className="flex justify-center mb-8">
          <span className="bg-gradient-to-r from-gray-100 to-gray-300 border border-gray-200 text-gray-900 px-6 py-2.5 rounded-full text-sm font-semibold shadow-md">
            Projects
          </span>
        </div>
      </ScrollReveal>

      {/* Section Title -> Responsive text size */}
      <ScrollReveal direction="down" delay={0.3} width="100%">
        <h2 className="text-3xl lg:text-4xl font-bold text-black pb-8 text-center">
          Some of the projects I have built:
        </h2>
      </ScrollReveal>

      <div className="space-y-16 lg:space-y-24">
        {projects.map((project) => (
          // 2. DYNAMIC MOBILE STACKING: 
          // If the image is on the right, we use 'flex-col-reverse' on mobile so the image still appears ABOVE the text.
          <div 
            key={project.id} 
            className={`flex gap-8 lg:gap-12 items-center ${
              project.imagePosition === "right" ? "flex-col-reverse lg:flex-row" : "flex-col lg:flex-row"
            }`}
          >
            
            {/* Project Image - Left */}
            {project.imagePosition === "left" && (
              <ScrollReveal direction="left" delay={0.2} width="100%" className="flex-1 w-full">
                {/* 3. RESPONSIVE IMAGE HEIGHT: h-64 on mobile, h-96 on desktop */}
                <div className="w-full h-64 lg:h-96 rounded-xl overflow-hidden shadow-md bg-gray-50 flex items-center justify-center">
                  <img 
                    src={dashboardImage} 
                    alt={project.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
            )}

            {/* Project Content */}
            <ScrollReveal 
              direction={project.imagePosition === "left" ? "right" : "left"} 
              delay={0.4} 
              width="100%" 
              className="flex-1 w-full"
            >
              {/* 4. RESPONSIVE ALIGNMENT: Centered on mobile, left-aligned on desktop */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Tags: Center flex on mobile, start flex on desktop */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-gray-700 hover:text-black hover:-translate-y-1 transition-all duration-300"
                >
                  <svg
                    className="w-6 h-6 lg:w-7 lg:h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </ScrollReveal>

            {/* Project Image - Right */}
            {project.imagePosition === "right" && (
              <ScrollReveal direction="right" delay={0.2} width="100%" className="flex-1 w-full">
                {/* 3. RESPONSIVE IMAGE HEIGHT */}
                <div className="w-full h-64 lg:h-96 rounded-xl overflow-hidden shadow-lg bg-gray-50 flex items-center justify-center">
                  <img 
                    src={womenCenterImage} 
                    alt={project.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
            )}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;