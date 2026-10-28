import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import ScrollReveal from './ScrollReveal'
import WmsPreview from './wms/WmsPreview'
import { projects, profile } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="container section projects-section">
      <div className="section-heading"><h2>Selected work<span className="accent">.</span></h2><p>A closer look at what I build.</p></div>
      {projects.map(project => (
        <article className="project" key={project.title}>
          <ScrollReveal width="100%">
            <div className="project-heading"><h3>{project.title}</h3><span className="project-category">{project.category}</span></div>

          </ScrollReveal>
          <div className="project-case-intro"><p>{project.description}</p><a className="button button-primary" href={project.caseStudyPath}>View Case Study <ArrowTopRightIcon aria-hidden="true" /></a></div>
          <ul className="project-highlights">{project.highlights.map(item => <li key={item}>{item}</li>)}</ul>
          <WmsPreview />
          <div className="project-details">
            <div><h4>Discuss the project</h4><a className="text-link" href={`mailto:${profile.email}?subject=${encodeURIComponent(project.title + ' inquiry')}`}>Ask about this project <ArrowTopRightIcon aria-hidden="true" /></a>{project.link && <a className="text-link" href={project.link} target="_blank" rel="noopener noreferrer">View repository <ArrowTopRightIcon aria-hidden="true" /></a>}</div>
            <div><h4>My contribution</h4><p>{project.contribution}</p></div>
            <div><h4>Built with</h4><ul className="project-tags">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div>
          </div>
        </article>
      ))}
    </section>
  )
}
