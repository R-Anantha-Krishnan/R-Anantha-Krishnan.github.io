import { Link } from "react-router-dom";
import "./Projects.css";

export default function Projects() {
  return (
    <main className="projects-page">
      <section className="projects-hero">
        <div className="projects-header">
          <h1>Projects</h1>
          <p>Selected work showcasing my web application and data engineering skills.</p>
        </div>
      </section>

      <section className="project-card">
        <div className="project-card-content">
          <h2>Abhyasa Loop</h2>
          <p>
            A clean, scalable web application deployed on Vercel. It demonstrates responsive UI and modern web practices.
          </p>
          <ul>
            <li>
              <strong>Hosted link:</strong>{" "}
              <a href="https://abhyasa-loop.vercel.app/" target="_blank" rel="noreferrer">
                https://abhyasa-loop.vercel.app/
              </a>
            </li>
            <li>
              <strong>GitHub link:</strong>{" "}
              <a href="https://github.com/R-Anantha-Krishnan/AbhyasaLoop" target="_blank" rel="noreferrer">
                https://github.com/R-Anantha-Krishnan/AbhyasaLoop
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="projects-actions">
        <Link to="/" className="btn secondary">
          Back Home
        </Link>
      </div>
    </main>
  );
}
