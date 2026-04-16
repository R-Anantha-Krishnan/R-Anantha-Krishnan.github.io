import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <header className="hero" role="banner">
      <div className="hero-content">
        <div className="hero-image-wrapper">
          <img
            src="/Anantha.png"
            alt="Anantha Krishnan"
            className="hero-image"
          />
        </div>
        <h1>
          Hi, I&apos;m <span className="hero-name">Anantha Krishnan</span> 👋
        </h1>

        <p className="hero-role">Software Engineer | Aspiring Data Scientist</p>

        <p className="hero-tagline">
          I build clean, scalable web applications and data-driven solutions.
        </p>

        <nav className="hero-actions" aria-label="Primary actions">
          <Link to="/projects" className="btn primary">
            View Projects
          </Link>
          <a
            href="https://anantha-gamified-resume.vercel.app/"
            className="btn secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gamified Resume
          </a>
          <Link to="/contact" className="btn secondary">
            Contact Me
          </Link>
        </nav>
      </div>
    </header>
  );
}
