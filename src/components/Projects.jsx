import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import ScrollReveal from './ScrollReveal'
import ProjectPreview from './ProjectPreview'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="container section projects-section">
      <ScrollReveal width="100%"><h2>Selected work</h2></ScrollReveal>
      {projects.map(project => (
        <article className="project" key={project.title}>
          <div className="project-intro">
            <div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-metadata">{project.contribution}<span aria-hidden="true"> · </span>{project.tags.slice(0, 3).join(' · ')}</p>
            </div>
            <a className="button button-primary" href={project.caseStudyPath}>View Case Study <ArrowTopRightIcon aria-hidden="true" /></a>
          </div>
          <ProjectPreview expandOnDesktop />
          {project.link && <a className="text-link" href={project.link} target="_blank" rel="noopener noreferrer">View source <ArrowTopRightIcon aria-hidden="true" /></a>}
        </article>
      ))}
    </section>
  )
}
