import ScrollReveal from "./ScrollReveal";

const skillGroups = [
  { title: "Backend", description: "Application logic, APIs, and server-side development.", skills: ["PHP", "Laravel", "Blade", "Go", "Gin", "Java"] },
  { title: "Frontend", description: "Responsive interfaces for the browser.", skills: ["JavaScript", "React", "Tailwind CSS"] },
  { title: "Data & workflow", description: "Databases and the tools that support development.", skills: ["PostgreSQL", "MySQL", "Git", "Docker", "AWS", "Postman", "AI tools"] },
];

const Skills = () => (
  <section id="skills" className="container section skills-section">
    <ScrollReveal width="100%"><h2>Across the stack.</h2><p className="section-intro">The languages, frameworks, and tools in my toolkit.</p></ScrollReveal>
    <div className="skill-grid">
      {skillGroups.map((group, index) => (
        <ScrollReveal key={group.title} delay={index * 0.06} width="100%">
          <div className="skill-group">
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <ul className="skill-list">{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default Skills;
