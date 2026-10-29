import ScrollReveal from "./ScrollReveal";

const skillGroups = [
  { title: "Backend", skills: ["PHP", "Laravel", "Go", "Gin", "Java"] },
  { title: "Frontend", skills: ["JavaScript", "React", "Blade", "Tailwind CSS"] },
  { title: "Data & workflow", skills: ["PostgreSQL", "MySQL", "Git", "Docker", "WSL", "AWS", "Postman", "AI tools"] },
];

const Skills = () => (
  <section id="skills" className="container section skills-section">
    <ScrollReveal width="100%"><h2>Across the stack</h2></ScrollReveal>
    <div className="skill-grid">
      {skillGroups.map(group => (
        <div className="skill-group" key={group.title}>
          <h3>{group.title}</h3>
          <ul className="skill-list">{group.skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
