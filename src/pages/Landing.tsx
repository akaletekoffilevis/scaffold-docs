import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="page-content landing-page">
      <header>
        <div className="hero">
        <div className="hero-badge">
          <span className="dot" /> v2.3.0 &middot; .NET 10 &middot; AOT
        </div>
        <img src="/logo.svg" alt="Scaffolder Logo" className="hero-logo" />
        <h1>Scaffolder</h1>
        <p className="hero-subtitle">
          G&eacute;n&egrave;re, build, d&eacute;ploie &mdash; de la commande au projet
          pr&ecirc;t &agrave; coder. 48 commandes, 15 &eacute;cosyst&egrave;mes,
          interface terminal et web incluses.
        </p>
        <div className="hero-actions">
            <Link to="/docs/getting-started" className="btn btn-primary">
              Commencer
            </Link>
            <Link to="/docs/installation" className="btn btn-secondary">
              Installer
            </Link>
            <a
              href="https://github.com/akaletekoffilevis/Scaffolder-CLI"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              GitHub
            </a>
          </div>
        <div className="hero-terminal">
          <div className="bar">
            <span className="dot r" /><span className="dot y" /><span className="dot g" />
            <span className="title">bash &mdash; scaffold tui</span>
          </div>
          <div className="body">
            <span className="line"><span className="prompt">$</span> scaffold new webapi --name=blog-api --db=postgresql --docker</span>
            <span className="line dim">[1/4] Nom du projet : blog-api</span>
            <span className="line dim">[2/4] Cat&eacute;gorie : Backend</span>
            <span className="line dim">[3/4] Langage : C# (.NET 10)</span>
            <span className="line dim">[4/4] Variante : Minimal API</span>
            <span className="line"><span className="green">&check;</span> Projet g&eacute;n&eacute;r&eacute; en 2.3s</span>
            <span className="line dim">Pour lancer : cd blog-api &amp;&amp; dotnet run</span>
          </div>
        </div>
        </div>
      </header>

      <div className="terminal-preview">
        <div className="terminal-bar">
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="terminal-title">bash — scaffold new</span>
        </div>
        <div className="terminal-body">
          <span className="prompt">$</span> scaffold new webapi --name=blog-api
          <br />
          <span className="dim">[1/4] Nom du projet :</span> blog-api
          <br />
          <span className="dim">[2/4] Cat&eacute;gorie :</span> Backend
          <br />
          <span className="dim">[3/4] Langage :</span> C# (.NET 10)
          <br />
          <span className="dim">[4/4] Variante :</span> Minimal API
          <br />
          <span className="green">✓</span> Projet g&eacute;n&eacute;r&eacute; en 2.3s
          <br />
          <span className="dim">Pour lancer :</span> cd blog-api &amp;&amp; dotnet run
        </div>
      </div>

      <section className="section">
        <h2>G&eacute;n&eacute;rer, builder, d&eacute;ployer</h2>
        <p className="section-desc">
          Scaffolder couvre tout le cycle de vie d&rsquo;un projet, du
          <code>scaffold new</code> au <code>scaffold deploy</code>.
        </p>
        <div className="features-list">
          <div className="feature-row">
            <span className="feature-cmd">scaffold tui</span>
            <span className="feature-desc">
              Interface terminal plein &eacute;cran (th&egrave;me sombre, F1&ndash;F9,
              assistant IA int&eacute;gr&eacute;)
            </span>
          </div>
          <div className="feature-row">
            <span className="feature-cmd">scaffold new</span>
            <span className="feature-desc">
              G&eacute;n&egrave;re un projet pr&ecirc;t &agrave; coder dans 18+
              langages et frameworks
            </span>
          </div>
          <div className="feature-row">
            <span className="feature-cmd">scaffold build</span>
            <span className="feature-desc">
              Compile le projet avec les outils du langage (dotnet, cargo, npm,
              go, flutter&hellip;)
            </span>
          </div>
          <div className="feature-row">
            <span className="feature-cmd">scaffold test</span>
            <span className="feature-desc">
              Lance les tests unitaires du projet
            </span>
          </div>
          <div className="feature-row">
            <span className="feature-cmd">scaffold docker</span>
            <span className="feature-desc">
              G&eacute;n&egrave;re un Dockerfile et un docker-compose
              multi-stage
            </span>
          </div>
          <div className="feature-row">
            <span className="feature-cmd">scaffold deploy</span>
            <span className="feature-desc">
              D&eacute;ploie vers Vercel, Railway, Docker, GitHub Pages
            </span>
          </div>
          <div className="feature-row">
            <span className="feature-cmd">scaffold stack</span>
            <span className="feature-desc">
              G&eacute;n&egrave;re un projet fullstack front + back + base de
              donn&eacute;es
            </span>
          </div>
        </div>
      </section>

      <div className="quote-bar">
        <p>
          <span className="quote-mark">&ldquo;</span>40+ commandes &mdash; un
          seul outil<span className="quote-mark">&rdquo;</span>
        </p>
      </div>

      <section className="section section-compact">
        <h2>Installation</h2>
        <div className="one-liner">
          <div className="install-box">
            <code>
              curl -fsSL https://scaffolder.dev/install.sh | sh
            </code>
          </div>
          <p className="install-alt">
            Ou via <Link to="/docs/installation">dotnet tool, Homebrew,
            winget</Link> &mdash; binaire AOT natif ~12 MB, 7 plateformes
          </p>
        </div>
      </section>

      <section className="section section-compact">
        <h2>Premier projet</h2>
        <div className="quickstart-steps">
          <div className="qs-step">
            <span className="qs-num">1</span>
            <div>
              <strong>Installer</strong>
              <span className="qs-cmd">curl -fsSL https://scaffolder.dev/install.sh | sh</span>
            </div>
          </div>
          <div className="qs-step">
            <span className="qs-num">2</span>
            <div>
              <strong>Cr&eacute;er un projet</strong>
              <span className="qs-cmd">scaffold new webapi --name=mon-api</span>
            </div>
          </div>
          <div className="qs-step">
            <span className="qs-num">3</span>
            <div>
              <strong>Lancer</strong>
              <span className="qs-cmd">cd mon-api &amp;&amp; dotnet run</span>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-bar">
        <div className="stat">
          <strong>40+</strong> commandes
        </div>
        <div className="stat">
          <strong>18</strong> templates
        </div>
        <div className="stat">
          <strong>7</strong> plateformes
        </div>
        <div className="stat">
          <strong>12 MB</strong> AOT
        </div>
      </div>

      <section className="section section-compact">
        <h2>Langages support&eacute;s</h2>
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

      <footer className="site-footer">
        <div className="footer-grid">
          <div>
            <h4>Documentation</h4>
            <ul>
              <li><Link to="/docs/getting-started">Prise en main</Link></li>
              <li><Link to="/docs/installation">Installation</Link></li>
              <li><Link to="/docs">R&eacute;f&eacute;rence</Link></li>
            </ul>
          </div>
          <div>
            <h4>Projet</h4>
            <ul>
              <li><a href="https://github.com/akaletekoffilevis/Scaffolder-CLI" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://github.com/akaletekoffilevis/Scaffolder-CLI/issues" target="_blank" rel="noopener noreferrer">Signaler un bug</a></li>
              <li><Link to="/changelog">Changelog</Link></li>
            </ul>
          </div>
          <div>
            <h4>Liens</h4>
            <ul>
              <li><Link to="/about">&Agrave; propos</Link></li>
              <li><Link to="/roadmap">Roadmap</Link></li>
              <li><Link to="/community">Communaut&eacute;</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Scaffolder &mdash; CLI de g&eacute;n&eacute;ration de projets &mdash; MIT License</p>
        </div>
      </footer>
    </div>
  )
}
