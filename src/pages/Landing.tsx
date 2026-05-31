import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="page-content">
      <header>
        <div className="hero">
          <img src="/logo.svg" alt="Scaffolder Logo" className="hero-logo" />
          <h1>Scaffolder</h1>
          <p className="subtitle">CLI universel pour générer des projets dans tous les langages</p>
          <div className="hero-actions">
            <Link to="/docs/getting-started" className="btn btn-primary">Commencer</Link>
            <Link to="/docs" className="btn btn-secondary">Documentation</Link>
            <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
          </div>
          <div className="hero-download">
            <Link to="/docs/installation" className="btn-download-hero">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              Voir les options d'installation
            </Link>
          </div>
        </div>
      </header>

      <section>
        <h2>Pourquoi Scaffolder ?</h2>
        <div className="grid">
          <div className="card">
            <div className="card-icon">⚡</div>
            <h3>40 commandes</h3>
            <p>Init, build, test, docker, github, lint, format, registry, migration, batch, et plus.</p>
          </div>
          <div className="card">
            <div className="card-icon">🌐</div>
            <h3>Multi-langage</h3>
            <p>.NET, Node.js, Rust, Go, Python, Flutter, Laravel, Symfony, Rails, et 20+ autres.</p>
          </div>
          <div className="card">
            <div className="card-icon">🔒</div>
            <h3>Fullstack</h3>
            <p>Génère un projet complet frontend + backend + base de données en une commande.</p>
          </div>
          <div className="card">
            <div className="card-icon">🧠</div>
            <h3>IA intégrée</h3>
            <p>Suggestions, explications et correction d'erreurs via OpenAI, Claude, Gemini ou Grok.</p>
          </div>
          <div className="card">
            <div className="card-icon">🛠</div>
            <h3>AOT natif</h3>
            <p>Compilé en binaire natif. Pas de runtime nécessaire. Démarrage instantané.</p>
          </div>
          <div className="card">
            <div className="card-icon">📄</div>
            <h3>Extensible</h3>
            <p>Plugins, templates custom, registry communautaire, workspace VS Code.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>En chiffres</h2>
        <div className="stats-bar">
          <div className="stat"><strong>40+</strong> commandes</div>
          <div className="stat"><strong>12 MB</strong> AOT</div>
          <div className="stat"><strong>7</strong> plateformes</div>
          <div className="stat"><strong>18</strong> templates</div>
          <div className="stat"><strong>Open Source</strong></div>
        </div>
      </section>

      <section>
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

      <section>
        <h2>Démo rapide</h2>
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

      <footer>
        <p>Scaffolder — CLI de génération de projets — <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI" target="_blank" rel="noopener noreferrer">GitHub</a> — <a href="https://scaffolder-cli.vercel.app" target="_blank" rel="noopener noreferrer">Documentation</a></p>
      </footer>
    </div>
  )
}
