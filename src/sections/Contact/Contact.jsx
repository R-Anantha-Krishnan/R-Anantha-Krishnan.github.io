import "./Contact.css";

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact">
        <h1>Contact Me</h1>
        <p>
          Feel free to reach out for collaboration, opportunities,
          or just a quick hello.
        </p>

        <ul className="contact-list">
          <li>
            Email:
            <a href="mailto:anantha.raghunath@gmail.com">
              anantha.raghunath@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://github.com/R-Anantha-Krishnan"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/r-anantha-krishnan-212974140/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
