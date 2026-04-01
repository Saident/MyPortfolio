import dashboardImage from "../assets/dashboard.png";
import womenCenterImage from "../assets/women center.jpeg";

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
      // Added link here
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
      // Added link here
      link: "https://github.com/Kelompok-4-Capstone-Alterra/go_women_center",
    },
  ];

  return (
    <div id="projects" className="bg-white px-48 py-16">
      {/* Work Header Badge */}
      <div className="flex justify-center mb-8">
        <span className="bg-gradient-to-r from-gray-100 to-gray-300 border border-gray-200 text-gray-900 px-6 py-2.5 rounded-full text-sm font-semibold shadow-md">
          Projects
        </span>
      </div>

      {/* Section Title */}
      <h2 className="text-4xl font-bold text-black pb-8 text-center">
        Some of the projects I have built:
      </h2>

      {/* Projects Container */}
      <div className="space-y-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex gap-12 items-center"
          >
            {/* Project Image - Left */}
            {project.imagePosition === "left" && (
              <div className="flex-1">
                <div className="w-full h-98 rounded-lg overflow-hidden shadow-md bg-gray-50 flex items-center justify-center">
                  <img 
                    src={dashboardImage} 
                    alt={project.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {/* Project Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-black mb-4">
                {project.title}
              </h3>

              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* External Link Icon - Updated href and added target="_blank" */}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-gray-700 hover:text-black transition-colors"
              >
                <svg
                  className="w-6 h-6"
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

            {/* Project Image - Right */}
            {project.imagePosition === "right" && (
              <div className="flex-1">
                <div className="w-full h-98 rounded-lg overflow-hidden shadow-lg bg-gray-50 flex items-center justify-center">
                  <img 
                    src={womenCenterImage} 
                    alt={project.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;