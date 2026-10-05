import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { profile } from '../data/portfolio';

const Contact = () => {
  const [feedback, setFeedback] = useState("");
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  const handleCopy = async () => {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(profile.email);
      setFeedback("Email copied.");
    } catch {
      setFeedback("Couldn't copy. Please select the email or use the email link.");
    }
    timer.current = setTimeout(() => setFeedback(""), 4000);
  };

  return (
    <>
      <section id="contact" className="container section contact-section">
        <ScrollReveal width="100%">
          <h2>Let's connect<span className="accent">.</span></h2>
          <p className="section-intro">Have a question about my work or a project to discuss? Send me a message.</p>
          <div className="email-row">
            <a href={`mailto:${profile.email}`} className="email-link">{profile.email}<span aria-hidden="true">↗</span></a>
            <button type="button" className="copy-button" onClick={handleCopy}>Copy email</button>
          </div>
          <p className="copy-feedback" role="status">{feedback}</p>
          <div className="contact-links">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href={`tel:${profile.phoneLink}`}>{profile.phone}</a>
          </div>
        </ScrollReveal>
      </section>
      <footer className="container site-footer"><span>© {new Date().getFullYear()} {profile.name}</span><a href="#home">Back to top ↑</a></footer>
    </>
  );
};

export default Contact;
