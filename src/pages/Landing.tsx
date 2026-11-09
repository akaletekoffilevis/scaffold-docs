import { Link } from 'react-router-dom'
import { Terminal, Zap, Shield, Globe, Cpu, Layers, ArrowRight, Download, ExternalLink, Sparkles } from 'lucide-react'

const features = [
  { icon: Terminal, title: '48 commandes', desc: 'Tout le cycle de vie : new, build, test, deploy, docker, ci, ai…' },
  { icon: Layers, title: '15 écosystèmes', desc: '.NET, Node, Rust, Go, Python, Flutter, Laravel, Rails, et plus' },
  { icon: Zap, title: 'AOT natif', desc: 'Binaire unique ~17 MB, aucun runtime requis' },
  { icon: Shield, title: 'Sécurisé', desc: 'Config chiffrée AES-GCM, vérification SHA-256, anti-injection' },
  { icon: Cpu, title: 'IA intégrée', desc: 'OpenAI, Claude, Gemini, Grok, Mistral, DeepSeek' },
  { icon: Globe, title: 'Multi-plateforme', desc: 'Linux, macOS, Windows — 7 architectures' },
]

const stats = [
  { value: '48', label: 'commandes' },
  { value: '63', label: 'templates' },
  { value: '7', label: 'plateformes' },
  { value: '17 MB', label: 'binaire AOT' },
]

const downloads = [
  { label: 'Linux x64', file: 'scaffold-linux-x64.tar.gz' },
  { label: 'Linux musl', file: 'scaffold-linux-musl-x64.tar.gz' },
  { label: 'Linux ARM64', file: 'scaffold-linux-arm64.tar.gz' },
  { label: 'macOS Intel', file: 'scaffold-osx-x64.tar.gz' },
  { label: 'macOS Apple Silicon', file: 'scaffold-osx-arm64.tar.gz' },
  { label: 'Windows x64', file: 'scaffold-win-x64.tar.gz' },
  { label: 'Windows x86', file: 'scaffold-win-x86.tar.gz' },
]

const GH = 'https://github.com/akaletekoffilevis/Scaffolder-CLI/releases/latest/download'

export default function Landing() {
  return (
    <div className="page-content landing-page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={14} /> v2.4.0 &middot; .NET 10 &middot; AOT
          </div>
          <h1>
            Génère, build, déploie.<br />
            <span className="gradient-text">De la commande au projet.</span>
          </h1>
          <p className="hero-subtitle">
            Scaffolder est le CLI universel qui génère des projets prêts à coder dans
            15 écosystèmes. 48 commandes, interface terminal et web incluses.
          </p>
          <div className="hero-actions">
            <Link to="/docs/getting-started" className="btn btn-primary btn-lg">
              Commencer <ArrowRight size={16} />
            </Link>
            <Link to="/docs/installation" className="btn btn-secondary btn-lg">
              Installer
            </Link>
            <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">
              <ExternalLink size={16} /> GitHub
            </a>
          </div>
          <div className="hero-terminal">
            <div className="terminal-bar">
              <span className="dot r" /><span className="dot y" /><span className="dot g" />
              <span className="title">bash — scaffold tui</span>
            </div>
            <div className="terminal-body">
              <span className="line"><span className="prompt">$</span> scaffold new webapi --name=blog-api --db=postgresql --docker</span>
              <span className="line dim">[1/4] Nom du projet : blog-api</span>
              <span className="line dim">[2/4] Catégorie : Backend</span>
              <span className="line dim">[3/4] Langage : C# (.NET 10)</span>
              <span className="line dim">[4/4] Variante : Minimal API</span>
              <span className="line"><span className="green">✓</span> Projet généré en 2.3s</span>
              <span className="line dim">Pour lancer : cd blog-api &amp;&amp; dotnet run</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map(s => (
            <div className="stat-card" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="section-header">
          <h2>Tout ce dont vous avez besoin</h2>
          <p className="section-desc">Du premier projet au déploiement en production.</p>
        </div>
        <div className="features-grid">
          {features.map(f => {
            const Icon = f.icon
            return (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon"><Icon size={24} /></div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Install */}
      <section className="section section-alt">
        <div className="section-header">
          <h2>Installation en une commande</h2>
          <p className="section-desc">Binaire AOT natif, aucun runtime requis.</p>
        </div>
        <div className="install-box">
          <code>curl -fsSL https://github.com/akaletekoffilevis/Scaffolder-CLI/releases/latest/download/install.sh | bash</code>
        </div>
        <div className="install-alt">
          Ou via <Link to="/docs/installation">téléchargement direct</Link> &mdash; 7 plateformes
        </div>
      </section>

      {/* Download grid */}
      <section className="section">
        <div className="section-header">
          <h2>Télécharger</h2>
          <p className="section-desc">Choisissez votre plateforme.</p>
        </div>
        <div className="download-grid">
          {downloads.map(d => (
            <a key={d.file} href={`${GH}/${d.file}`} className="download-card" download>
              <Download size={16} />
              <span>{d.label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Quickstart */}
      <section className="section section-alt">
        <div className="section-header">
          <h2>Premier projet en 3 étapes</h2>
        </div>
        <div className="quickstart">
          <div className="qs-step">
            <div className="qs-num">1</div>
            <div>
              <strong>Installer</strong>
              <code>curl -fsSL .../install.sh | bash</code>
            </div>
          </div>
          <div className="qs-step">
            <div className="qs-num">2</div>
            <div>
              <strong>Créer</strong>
              <code>scaffold new webapi --name=mon-api</code>
            </div>
          </div>
          <div className="qs-step">
            <div className="qs-num">3</div>
            <div>
              <strong>Lancer</strong>
              <code>cd mon-api &amp;&amp; dotnet run</code>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Prêt à commencer ?</h2>
        <p>Rejoignez les développeurs qui utilisent Scaffolder pour accélérer leur productivité.</p>
        <div className="hero-actions">
          <Link to="/docs/getting-started" className="btn btn-primary btn-lg">
            Documentation <ArrowRight size={16} />
          </Link>
          <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">
            <ExternalLink size={16} /> GitHub
          </a>
        </div>
      </section>
    </div>
  )
}
