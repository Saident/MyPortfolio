import { useEffect } from 'react'
import { ArrowLeftIcon, ArrowTopRightIcon, ChevronDownIcon } from '@radix-ui/react-icons'
import ScrollReveal from '../components/ScrollReveal'
import ProjectPreview from '../components/ProjectPreview'
import { profile } from '../data/portfolio'

function TransferExample({ requested, received }) {
  const remaining = requested - received
  return (
    <figure className="case-transfer-example">
      <div className="case-example-heading">
        <h3>A partial receipt.</h3>
      </div>
      <p className="case-example-quantity"><strong>{received}</strong> of {requested} units received</p>
      <div className="case-unit-strip" aria-hidden="true">
        {Array.from({ length: requested }, (_, index) => <span className={index < received ? 'is-received' : ''} key={index} />)}
      </div>
      <div className="case-unit-labels"><span>{received} received</span><span>{remaining} still expected</span></div>
      <dl className="case-stock-changes">
        <div><dt>Origin warehouse</dt><dd>−{received} <span>units</span></dd></div>
        <div><dt>Destination warehouse</dt><dd>+{received} <span>units</span></dd></div>
      </dl>
      <p className="case-example-note">Both stock movements are written when the receipt is recorded. The remaining {remaining} units stay outstanding.</p>
      <figcaption>Illustrative transfer · fictional quantities</figcaption>
    </figure>
  )
}

export default function ProjectCaseStudy({ project }) {
  const study = project.caseStudy
  useEffect(() => {
    const previousTitle = document.title
    const description = document.querySelector('meta[name="description"]')
    const previousDescription = description?.content
    document.title = `${project.title} | ${profile.name}`
    if (description) description.content = project.description
    return () => {
      document.title = previousTitle
      if (description) description.content = previousDescription
    }
  }, [project])

  return (
    <article className="case-study container">
      <header className="case-hero">
        <a className="text-link" href="/#projects"><ArrowLeftIcon aria-hidden="true" />Selected work</a>
        <h1>{project.title}</h1>
        <p className="case-lead">{study.lead}</p>
        <dl className="case-metadata">
          <div><dt>My contribution</dt><dd>{project.contribution}</dd></div>
          <div><dt>Built with</dt><dd>{project.tags.join(' · ')}</dd></div>
        </dl>
      </header>

      <nav className="case-index" aria-label="Case study sections">
        <a href="#overview">Overview</a>
        <a href="#workflow">Workflow</a>
        <a href="#interface">Dashboard</a>
        <a href="#capabilities">Capabilities</a>
        <a href="#engineering">Engineering</a>
      </nav>

      <section id="overview" className="case-section">
        <div className="case-overview">
          <ScrollReveal width="100%"><h2>From document to stock</h2></ScrollReveal>
          <div className="case-prose"><p className="case-intro">{study.introduction}</p><p>{study.context}</p></div>
        </div>
        <dl className="case-record-model">
          {study.records.map(record => (
            <div key={record.title}>
              <dt>{record.title}</dt>
              <dd className="case-record-statement">{record.statement}</dd>
              <dd className="case-record-detail">{record.detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="workflow" className="case-section">
        <ScrollReveal width="100%"><h2>When a delivery arrives in parts</h2></ScrollReveal>
        <p className="section-intro case-section-intro">Imagine a transfer of {study.transferExample.requested} units between two warehouses. Only {study.transferExample.received} arrive in the first receipt. Here’s how that operation moves through the system.</p>
        <div className="case-workflow-layout">
          <TransferExample {...study.transferExample} />
          <ol className="case-workflow">
            {study.workflow.map((step, index) => (
              <li key={step.title}>
                <span className="case-step-number" aria-hidden="true">0{index + 1}</span>
                <div><h3>{step.title}</h3><p>{step.body}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="interface" className="case-section">
        <div className="case-section-heading">
          <ScrollReveal width="100%"><h2>The dashboard</h2></ScrollReveal>
          <p>Revenue and rankings show business activity. Receivables show outstanding balances. Stock summaries show what is physically held.</p>
        </div>
        <ProjectPreview />
      </section>

      <section id="capabilities" className="case-section">
        <ScrollReveal width="100%"><h2>Related workflows</h2></ScrollReveal>
        <p className="section-intro case-section-intro">The same application supports the other moments that need a clear inventory record.</p>
        <div className="case-capabilities">
          {study.capabilities.map(capability => (
            <article className="case-capability" key={capability.title}>
              <h3>{capability.title}</h3>
              <p>{capability.body} {capability.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="engineering" className="case-section">
        <ScrollReveal width="100%"><h2>Engineering decisions</h2></ScrollReveal>
        <p className="section-intro case-section-intro">Three implementation details connect the workflow to its records.</p>
        <div className="case-engineering">
          {study.engineering.map(item => (
            <details className="engineering-disclosure" key={item.title}>
              <summary><span><strong>{item.title}</strong><span className="case-mechanism">{item.mechanism}</span></span><ChevronDownIcon aria-hidden="true" /></summary>
              <p>{item.body}</p>
            </details>
          ))}
        </div>
        <p className="case-result">{study.delivered}</p>
      </section>

      <footer className="case-closing">
        <div><h2>Discuss this project</h2><a className="button button-primary" href="/#contact">Contact Me <ArrowTopRightIcon aria-hidden="true" /></a></div>
        <div className="case-footer-bottom"><a className="text-link" href="/#projects"><ArrowLeftIcon aria-hidden="true" />Back to Selected Work</a><p>© {new Date().getFullYear()} {profile.name}</p></div>
      </footer>
    </article>
  )
}
