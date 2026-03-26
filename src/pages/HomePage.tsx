import { Link } from "react-router-dom";
import { ExternalIcon, GitHubIcon } from "../components";

export default function HomePage() {
  return (
    <>
      <header className="hero">
        <p className="hero-kicker">Self intro and background</p>
        <img
          className="hero-photo"
          src="/AbelChinPhoto20260321.jpg"
          alt="Abel Chin's Photo, taken on Mar 21, 2026"
        />
        <p className="hero-lede">
          Hi! I&apos;m Abel. Indie AI engineer. Ex-ASEAN scholar and ex-NUS CS. Only
          started coding in 2022. Dropped out of NUS, got involved in some cult and
          disappeared from 2023 to mid-2025. Only resumed my learning and started
          joining hackathons after that. Applying to resume my studies in Singapore
          this July 2026.
        </p>
      </header>

      <main className="home-cta">
        <Link to="/portfolio" className="btn btn-primary">
          View portfolio
        </Link>
        <a
            className="btn btn-primary"
            href="https://linkedin.com/in/abelchinjh" 
            target="_blank"
            rel="noopener noreferrer"
        >
            <span>Visit LinkedIn profile</span>
            <ExternalIcon />
        </a>
        <a
            className="btn btn-primary"
            href="https://github.com/abelcjh"
            target="_blank"
            rel="noopener noreferrer"
        >
            <span>Visit GitHub profile</span>
            <GitHubIcon />
        </a>
      </main>

      <footer className="footer">
        <p>Built with TypeScript, React, and Vite.</p>
      </footer>
    </>
  );
}
