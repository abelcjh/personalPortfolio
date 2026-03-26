import { projects } from "../data/projects";
import { awards } from "../data/awards";
import { leadership } from "../data/leadership";
import { ExternalIcon, GitHubIcon } from "../components";

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
  return (
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
          <a
            className="btn btn-primary"
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{liveButtonText}</span>
            <ExternalIcon />
          </a>
        )}
        {repoUrl && (
          <a
            className={`btn ${liveUrl ? "btn-ghost" : "btn-primary"}`}
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Source</span>
            <GitHubIcon />
            <ExternalIcon />
          </a>
        )}
      </div>
    </article>
  );
}

export default function PortfolioPage() {
  return (
    <>
      <header className="hero">
        <p className="hero-kicker">Abel Chin&apos;s Personal Portfolio</p>
        <p className="hero-lede">
          This is a curated list of things I have built - both hackathon and personal
          projects. Will keep updating the list, and designing this site, along the
          way.
        </p>
      </header>

      <main className="page-content">

        {/* Projects section */}
        <section className="portfolio-section">
          <h2>Projects</h2>
          <div className="grid">
            {projects.map((p) => (
              <PortfolioCard
                key={p.title}
                title={p.title}
                description={p.description}
                tags={p.tags}
                imgs={p.imgs}
                liveUrl={p.liveUrl}
                repoUrl={p.repoUrl}
                liveButtonText={p.liveButtonText ? p.liveButtonText : ""}
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
                key={a.title}
                title={a.title}
                description={a.description}
                tags={a.tags}
                imgs={a.imgs}
                liveUrl={a.liveUrl}
                liveButtonText={a.liveButtonText ? a.liveButtonText : "View Award"}
              />
            ))}
          </div>
        </section>

        {/* Leadership section */}
        <section className="portfolio-section">
          <h2>Leadership &amp; Community</h2>
          <div className="grid">
            {leadership.map((l) => (
              <PortfolioCard
                key={l.title}
                title={l.title}
                description={l.description}
                tags={l.tags}
                imgs={l.imgs}
                liveUrl={l.liveUrl}
                liveButtonText={l.liveButtonText ? l.liveButtonText : "Learn More"}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Built with TypeScript, React, and Vite.</p>
      </footer>
    </>
  );
}
