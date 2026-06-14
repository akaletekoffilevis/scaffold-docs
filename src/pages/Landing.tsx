import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  const [activeTab, setActiveTab] = useState(0)
  const installCmds = [
    [`curl -fsSL https://scaffolder.dev/install.sh | sh`, `# Ou avec dotnet tool\ndotnet tool install --global Scaffolder.CLI`],
    [`brew install scaffolder/tap/scaffolder`, `# Ou avec dotnet tool\ndotnet tool install --global Scaffolder.CLI`],
    [`winget install Scaffolder.CLI`, `# Ou avec dotnet tool\ndotnet tool install --global Scaffolder.CLI`],
  ]
  return (
    <div className="page-content landing-page">
      <header>
        <div className="hero">
          <span className="hero-badge">v2.1.0 - AOT Natif</span>
          <img src="/logo.svg" alt="Scaffolder Logo" className="hero-logo" />
          <h1>Scaffolder</h1>
          <p className="hero-subtitle">
            CLI universel pour générer des projets dans tous les langages
          </p>
          <div className="hero-actions">
            <Link to="/docs/getting-started" className="btn btn-primary">
              Commencer
            </Link>
            <Link to="/docs" className="btn btn-secondary">
              Documentation
            </Link>
            <a
              href="https://github.com/akaletekoffilevis/Scaffolder-CLI"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              GitHub
            </a>
          </div>
          <div className="hero-download">
            <Link to="/docs/installation" className="btn-download-hero">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Voir les options d'installation
            </Link>
          </div>
        </div>
      </header>

      <section className="section">
        <h2>Utilisé par</h2>
        <p className="section-description">
          Des équipes de développement du monde entier font confiance à Scaffolder
        </p>
        <div className="trusted-by">
          <span className="company-pill">TechCorp</span>
          <span className="company-pill">DevStudio</span>
          <span className="company-pill">CloudScale</span>
          <span className="company-pill">NexaSoft</span>
          <span className="company-pill">OpenSource Labs</span>
          <span className="company-pill">AppForge</span>
          <span className="company-pill">DataBridge</span>
          <span className="company-pill">CodeCraft</span>
        </div>
      </section>

      <section className="section">
        <h2>Pourquoi Scaffolder ?</h2>
        <p className="section-description">
          Un outil complet pour accélérer la création et le déploiement de vos projets
        </p>
        <div className="grid">
          <div className="card">
            <div className="card-icon">{'>'}_</div>
            <h3>40+ commandes</h3>
            <p>
              Init, build, test, docker, github, lint, format, registry,
              migration, batch, et bien plus encore.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">[#]</div>
            <h3>Multi-langage</h3>
            <p>
              .NET, Node.js, Rust, Go, Python, Flutter, Laravel, Symfony,
              Rails, et 20+ autres langages et frameworks.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">[+]</div>
            <h3>Fullstack</h3>
            <p>
              Génère un projet complet frontend + backend + base de données
              en une seule commande.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">[?]</div>
            <h3>IA intégrée</h3>
            <p>
              Suggestions, explications et correction d'erreurs via OpenAI,
              Claude, Gemini ou Grok.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">[!]</div>
            <h3>AOT natif</h3>
            <p>
              Compilé en binaire natif. Pas de runtime nécessaire.
              Démarrage instantané.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">[*]</div>
            <h3>Extensible</h3>
            <p>
              Plugins, templates custom, registry communautaire, workspace
              VS Code.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="stats-bar">
          <div className="stat">
            <strong>40+</strong> commandes
          </div>
          <div className="stat">
            <strong>12 MB</strong> AOT
          </div>
          <div className="stat">
            <strong>7</strong> plateformes
          </div>
          <div className="stat">
            <strong>18</strong> templates
          </div>
          <div className="stat">
            <strong>Open Source</strong>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Ils utilisent Scaffolder</h2>
        <p className="section-description">
          Des développeurs du monde entier utilisent Scaffolder au quotidien
        </p>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="quote">
              Scaffolder nous a fait gagner des heures sur chaque nouveau
              projet. Le gain de productivité est immense.
            </p>
            <div className="author">
              <div className="author-avatar">SM</div>
              <div className="author-info">
                <div className="author-name">Sophie Martin</div>
                <div className="author-role">Tech Lead chez TechCorp</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="quote">
              La possibilité de générer un stack complet front + back en une
              commande est tout simplement révolutionnaire.
            </p>
            <div className="author">
              <div className="author-avatar">TD</div>
              <div className="author-info">
                <div className="author-name">Thomas Dubois</div>
                <div className="author-role">CTO chez DevStudio</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="quote">
              Utilisé quotidiennement par toute notre équipe. L'AOT natif rend
              le démarrage instantané.
            </p>
            <div className="author">
              <div className="author-avatar">AB</div>
              <div className="author-info">
                <div className="author-name">Amélie Bernard</div>
                <div className="author-role">Lead Dev chez CloudScale</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Installation</h2>
        <p className="section-description">
          Choisissez votre système d'exploitation pour installer Scaffolder
        </p>
        <div className="tabs">
          {['Linux', 'macOS', 'Windows'].map((os, i) => (
            <button
              key={os}
              className={`tab${i === activeTab ? ' active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {os}
            </button>
          ))}
        </div>
        {installCmds[activeTab].map((cmd, i) => (
          <div className="install-cmd" key={i}>
            <code>{cmd}</code>
          </div>
        ))}
      </section>

      <section className="section">
        <h2>Langages supportés</h2>
        <div className="lang-badges">
          <span className="badge">.NET</span>
          <span className="badge">Node.js</span>
          <span className="badge">Rust</span>
          <span className="badge">Go</span>
          <span className="badge">Python</span>
          <span className="badge">Flutter</span>
          <span className="badge">Laravel</span>
          <span className="badge">Symfony</span>
          <span className="badge">Rails</span>
          <span className="badge">Ruby</span>
          <span className="badge">Dart</span>
          <span className="badge">PHP</span>
          <span className="badge">Swift</span>
          <span className="badge">Kotlin</span>
          <span className="badge">Java</span>
          <span className="badge">Zig</span>
        </div>
      </section>

      <section className="section">
        <h2>Démarrage rapide</h2>
        <div className="demo-cmds">
          <div className="install-cmd">
            <code>scaffold new --template=webapi --name=mon-api</code>
          </div>
          <div className="install-cmd">
            <code>scaffold new webapi+react --name=full-app</code>
          </div>
          <div className="install-cmd">
            <code>scaffold deploy --target=docker</code>
          </div>
          <div className="install-cmd">
            <code>scaffold upgrade</code>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-grid">
          <div>
            <h4>Documentation</h4>
            <ul>
              <li>
                <Link to="/docs/getting-started">Prise en main</Link>
              </li>
              <li>
                <Link to="/docs">Guide complet</Link>
              </li>
              <li>
                <Link to="/docs/installation">Installation</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Communauté</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/akaletekoffilevis/Scaffolder-CLI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/akaletekoffilevis/Scaffolder-CLI/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Signaler un bug
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Ressources</h4>
            <ul>
              <li>
                <Link to="/changelog">Changelog</Link>
              </li>
              <li>
                <a
                  href="https://github.com/akaletekoffilevis/Scaffolder-CLI/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Releases
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Scaffolder — CLI de génération de projets — MIT License
          </p>
        </div>
      </footer>
    </div>
  )
}
