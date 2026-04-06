import dashboardImage from "../assets/dashboard.png";
import womenCenterImage from "../assets/women center.jpeg";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    id: 1,
    year: "2024",
    category: "Thesis · Full-stack",
    title: "Integrated Social Media App",
    description:
      "Built a full-stack web application for social media management as a thesis project. Designed the database schema, implemented authentication flows, and crafted a responsive admin dashboard using Laravel and Blade.",
    tags: ["PHP", "Laravel", "Blade", "JavaScript", "MySQL", "Tailwind CSS", "Figma"],
    image: dashboardImage,
    imageAlt: "Social Media App Dashboard",
    link: "https://github.com/Saident/integrated-social-media",
  },
  {
    id: 2,
    year: "2023",
    category: "Bootcamp · Backend",
    title: "Women Center",
    description:
      "Built the Go backend for a women's wellness platform as the capstone project for Alterra Academy. Collaborated with frontend and mobile teams, implementing RESTful APIs and containerized the service with Docker.",
    tags: ["Golang", "Docker", "Postman", "MySQL", "Git"],
    image: womenCenterImage,
    imageAlt: "Women Center Admin Panel",
    link: "https://github.com/Kelompok-4-Capstone-Alterra/go_women_center",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-16 lg:px-24 xl:px-40 py-24 overflow-hidden max-w-screen-xl mx-auto">

      <ScrollReveal direction="down" delay={0.05} width="100%">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[12px] font-medium uppercase tracking-[0.15em] text-[#999]">Projects</span>
          <div className="h-px flex-1 bg-[#e8e6e0]" />
        </div>
      </ScrollReveal>

      <ScrollReveal direction="down" delay={0.15} width="100%">
        <h2 className="text-[2.2rem] lg:text-[2.8rem] font-['Instrument_Serif'] font-normal text-[#0d0d0d] leading-tight mb-14">
          Things I've built
        </h2>
      </ScrollReveal>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <ScrollReveal key={project.id} direction="up" delay={0.1 + i * 0.12} width="100%">
            <article className="group grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#e8e6e0] rounded-2xl overflow-hidden hover:border-[#d0cec8] hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-all duration-300">

              {/* Image */}
              <div className={`relative overflow-hidden bg-[#f0ede6] h-60 lg:h-auto ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {/* Content */}
              <div className={`flex flex-col justify-between p-8 lg:p-10 bg-[#fafaf8] ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                <div>
                  {/* Meta row */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[12px] font-medium text-[#999] uppercase tracking-widest">{project.year}</span>
                    <span className="w-1 h-1 rounded-full bg-[#d0cec8]" />
                    <span className="text-[12px] font-medium text-[#999] uppercase tracking-widest">{project.category}</span>
                  </div>

                  <h3 className="text-[1.6rem] lg:text-[2rem] font-['Instrument_Serif'] font-normal text-[#0d0d0d] leading-tight mb-4">
                    {project.title}
                  </h3>

                  <p className="text-[#5a5a5a] text-[15px] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#eeece6] border border-[#e8e6e0] text-[#4a4a44] text-[12px] font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link */}
                <div className="mt-8">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[14px] font-medium text-[#0d0d0d] hover:gap-3 transition-all duration-200 no-underline group/link"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                    <svg className="w-3.5 h-3.5 -rotate-45 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;