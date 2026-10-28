import { useEffect } from 'react'
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowTopRightIcon } from '@radix-ui/react-icons'
import ScrollReveal from '../components/ScrollReveal'
import WmsPreview from '../components/wms/WmsPreview'
import { profile } from '../data/portfolio'

function TransferExample({ requested, received }) {
  const remaining = requested - received
  return (
    <figure className="case-transfer-example">
      <div className="case-example-heading">
        <h3>A partial receipt.</h3>
        <span className="case-status">Partial</span>
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
        <h1>{project.title}<span className="accent">.</span></h1>
        <p className="case-deck">Stock moves. The record follows.</p>
        <p className="case-lead">{study.lead}</p>
        <a className="text-link case-start-link" href="#workflow">Follow a warehouse transfer <ArrowDownIcon aria-hidden="true" /></a>
        <dl className="case-metadata">
          <div><dt>Focus</dt><dd>Warehouse operations</dd></div>
          <div><dt>My contribution</dt><dd>{project.contribution}</dd></div>
          <div><dt>Built with</dt><dd>{project.tags.join(' · ')}</dd></div>
        </dl>
      </header>

      <nav className="case-index" aria-label="Case study sections">
        <a href="#overview">The idea</a>
        <a href="#workflow">A transfer, explained</a>
        <a href="#interface">The dashboard</a>
        <a href="#capabilities">More workflows</a>
        <a href="#engineering">Engineering</a>
      </nav>

      <section id="overview" className="case-section">
        <div className="case-overview">
          <ScrollReveal width="100%"><h2>A stock balance<br />has a backstory.</h2></ScrollReveal>
          <div className="case-prose"><p className="case-intro">{study.introduction}</p><p>{study.context}</p></div>
        </div>
        <dl className="case-record-model">
          {study.records.map((record, index) => (
            <div key={record.title}>
              <dt>{record.title}{index < study.records.length - 1 && <ArrowRightIcon aria-hidden="true" />}</dt>
              <dd className="case-record-statement">{record.statement}</dd>
              <dd className="case-record-detail">{record.detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="workflow" className="case-section">
        <ScrollReveal width="100%"><h2>When a delivery<br />arrives in parts.</h2></ScrollReveal>
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
          <ScrollReveal width="100%"><h2>The daily overview.</h2></ScrollReveal>
          <p>Revenue and rankings show business activity. Receivables show outstanding balances. Stock summaries show what is physically held.</p>
        </div>
        <WmsPreview />
      </section>

      <section id="capabilities" className="case-section">
        <ScrollReveal width="100%"><h2>Beyond the transfer.</h2></ScrollReveal>
        <p className="section-intro case-section-intro">The same application supports the other moments that need a clear inventory record.</p>
        <div className="case-capabilities">
          {study.capabilities.map(capability => (
            <article className="case-capability" key={capability.title}>
              <h3>{capability.title}</h3>
              <p>{capability.body}</p>
              <p className="case-detail">{capability.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="engineering" className="case-section">
        <ScrollReveal width="100%"><h2>Behind the stock number.</h2></ScrollReveal>
        <p className="section-intro case-section-intro">Three implementation details connect the workflow to its records.</p>
        <div className="case-engineering">
          {study.engineering.map(item => (
            <article key={item.title}>
              <div><h3>{item.title}</h3><p className="case-mechanism">{item.mechanism}</p></div>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-takeaway" aria-labelledby="case-delivered-title">
        <h2 id="case-delivered-title">A stock number,<br /><span className="accent">with its history attached.</span></h2>
        <p>{study.delivered}</p>
      </section>

      <footer className="case-closing">
        <div><h2>Let’s talk about the work.</h2><a className="button button-primary" href="/#contact">Contact Me <ArrowTopRightIcon aria-hidden="true" /></a></div>
        <div className="case-footer-bottom"><a className="text-link" href="/#projects"><ArrowLeftIcon aria-hidden="true" />Back to Selected Work</a><p>© {new Date().getFullYear()} {profile.name}</p></div>
      </footer>
    </article>
  )
}
