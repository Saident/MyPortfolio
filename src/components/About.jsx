import ScrollReveal from './ScrollReveal';
import { profile } from '../data/portfolio';

const About = () => (
  <section id="about" className="container section about-section">
    <ScrollReveal width="100%">
      <h2>Software with<br /><span className="muted">a practical purpose.</span></h2>
    </ScrollReveal>
    <div className="about-content">
      <ScrollReveal width="100%" className="about-copy">
        <p className="body-large">I'm Averil, a {profile.role.toLowerCase()} at <strong>{profile.employer}</strong>. I work across the stack, connecting backend logic, databases, and the interfaces people use.</p>
        <p>My background is in Information Technology at Universitas Brawijaya. Alongside my professional work, I built an independent Warehouse Management System with Laravel. I continue to develop my engineering skills through hands-on projects.</p>
        <p>Outside of development, I enjoy fishing, coffee, and movies.</p>
      </ScrollReveal>
      <ScrollReveal delay={0.1} width="100%">
        <aside className="experience-panel" aria-label="Current role">
          <span className="panel-label">Current role</span>
          <h3>{profile.role}</h3>
          <p className="employer">{profile.employer}</p>
          <div className="experience-detail"><span>Focus</span><p>Web applications &amp; full-stack development</p></div>
          <div className="experience-detail"><span>Education</span><p>Information Technology<br />Universitas Brawijaya</p></div>
        </aside>
      </ScrollReveal>
    </div>
  </section>
);

export default About;
