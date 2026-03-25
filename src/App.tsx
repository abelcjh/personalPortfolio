import { projects } from "./data/projects";
import { awards } from "./data/awards";
import { leadership } from "./data/leadership";
import "./App.css";

function ExternalIcon() {
  return (
    <svg
      className="link-icon"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      className="link-icon"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

interface image {
  src: string;
  alt: string;
}

// define object props to be checked when input card data into card component
// important for strict type validation
export interface PortfolioCardProps {
  title: string;
  description: string;
  tags?: string[];
  imgs?: image[];
  liveUrl?: string;
  repoUrl?: string;
  liveButtonText?: string;
}

function PortfolioCard({
            title,
            description,
            tags,
            imgs,
            liveUrl,
            repoUrl,
            liveButtonText = "Visit site"
}: PortfolioCardProps) {
  return(
    <article className="card">

      <div className="card-top">
        <h2 className="card-title">{title}</h2>
        {tags && tags?.length > 0 && (
          <ul className="tags" aria-label="Tags">
            {tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
      </div>

      <p className="card-body">{description}</p>

      {imgs && (
      <ul className="card-images" aria-label="Images">
        {imgs.map((i) => (
          <li key={i.src}>
            <img className="image" src={i.src} alt={i.alt} />
          </li>
        ))}
      </ul>
      )}

      <div className="card-actions">
        {liveUrl && (
          <a className="btn btn-primary" href={liveUrl} target='_blank' rel="noopener noreferrer">
            <span>{liveButtonText}</span>
            <ExternalIcon />
          </a>
        )}
        {repoUrl && (
          <a className={`btn ${liveUrl? "btn-ghost" : "btn-primary"}`} href={repoUrl} target="_blank" rel="noopener noreferrer">
            <span>Source</span>
            <GitHubIcon />
            <ExternalIcon />
          </a>
        )}
      </div>
    </article>
  );
}

export default function App() {
  return (
    <div className="page">
      <div className="grain" aria-hidden />

      <header className="hero">
        <p className="hero-kicker">Abel Chin's Personal Portfolio</p>
        <img className="hero-photo" src="/AbelChinPhoto20260321.jpg" alt="Abel Chin's Photo, taken on Mar 21, 2026" />
        <p className="hero-lede">
          Hi! My name is Abel Chin, an independent AI engineer, and current college AI major.
          This is a list of things I have built — both hackathon and personal projects.
          Each card links to the source code on GitHub.
        </p>
      </header>

      <main className="page-content">

        {/* Projects section */}
        <section className="portfolio-section">
          <h2>Projects</h2>
          <div className="grid">
            {projects.map((p) => (
              <PortfolioCard
                title={p.title}
                description={p.description}
                tags={p.tags}
                imgs={p.imgs}
                liveUrl={p.liveUrl}
                repoUrl={p.repoUrl}
                liveButtonText={p.liveButtonText? p.liveButtonText : ""}
              />
            ))}
          </div>
        </section>
        
        {/* Awards section */}
        <section className="portfolio-section">
          <h2>Awards</h2>
          <div className="grid">
            {awards.map((a) => (
              <PortfolioCard
                title={a.title}
                description={a.description}
                tags={a.tags}
                imgs={a.imgs}
                liveUrl={a.liveUrl}
                liveButtonText= {a.liveButtonText? a.liveButtonText : "View Award"}
                />
            ))}
          </div>
        </section>

        {/* Leadership section */}
        <section className="portfolio-section">
          <h2>Leadership & Community</h2>
          <div className="grid">
            {leadership.map((l) => (
              <PortfolioCard
                title={l.title}
                description={l.description}
                tags={l.tags}
                imgs={l.imgs}
                liveUrl={l.liveUrl}
                liveButtonText={l.liveButtonText? l.liveButtonText : "Learn More"}
                />
            ))}
          </div>
        </section>

      </main>

      <footer className="footer"> 
        <p>
          Built with TypeScript, React, and Vite.
        </p>
      </footer>
    </div>
  );
}
