import profileImage from '../assets/profile2.jpeg';
import ScrollReveal from './ScrollReveal';
import { profile } from '../data/portfolio';

const About = () => (
  <section id="about" className="container section about-section">
    <ScrollReveal width="100%"><h2>About me</h2></ScrollReveal>
    <div className="about-content">
      <figure className="about-portrait"><div className="portrait-window"><img data-scroll-follow src={profileImage} alt="Averil Primayuda" width="960" height="1280" loading="lazy" /></div></figure>
      <div className="about-copy">
        <p>I'm Averil, a {profile.role.toLowerCase()} at <strong>{profile.employer}</strong>. I work across the stack, connecting backend logic, databases, and the interfaces people use.</p>
        <p>My background is in Information Technology at Universitas Brawijaya. Alongside my professional work, I take on side projects and freelance work, building web applications and exploring new ideas.</p>
        <p>Outside of development, I enjoy fishing, coffee, and movies.</p>
      </div>
    </div>
  </section>
);

export default About;
