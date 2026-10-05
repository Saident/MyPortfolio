import ScrollReveal from "./ScrollReveal";
import { projects } from '../data/portfolio';

const Projects = () => (
  <section id="projects" className="container section projects-section">
    <ScrollReveal width="100%"><p className="eyebrow">Selected projects</p><h2>Built with intention.</h2></ScrollReveal>
    <div className="project-grid">
      {projects.map((project, index) => (
        <ScrollReveal key={project.title} delay={index * 0.05} width="100%" className={project.featured ? 'featured-project' : ''}>
          <article className={`project ${project.featured ? 'project-featured' : ''}`}>
            {project.image && <div className="project-image"><img src={project.image} alt={project.imageAlt} loading="lazy" width="1200" height="750" /></div>}
            <div className="project-content">
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              {project.contribution && <p className="project-contribution">{project.contribution}</p>}
              {project.tags && <ul className="project-tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>}
              {project.link && <a className="text-link" href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>View on GitHub <span aria-hidden="true">↗</span></a>}
            </div>
            {project.featured && <div className="featured-aside"><span>Featured project</span><p>Built with<br />Laravel<span className="accent">.</span></p><a className="text-link" href={`mailto:averilprimayuda@gmail.com?subject=${encodeURIComponent('Warehouse Management System inquiry')}`}>Ask about this project <span aria-hidden="true">↗</span></a></div>}
          </article>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default Projects;
