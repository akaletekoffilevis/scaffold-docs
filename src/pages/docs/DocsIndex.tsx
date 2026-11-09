import { Link } from 'react-router-dom'
import ContactForm from '../../components/ContactForm'
import { Download, Rocket, Zap, Package, Globe, Container, FolderTree, BookOpen, Brain, Plug, HelpCircle } from 'lucide-react'

export default function DocsIndex() {
  const sections = [
    { to: '/docs/installation', title: 'Installation', desc: 'Binaire AOT, install.sh, 7 plateformes', icon: Download },
    { to: '/docs/getting-started', title: 'Premiers pas', desc: 'Créez et lancez votre premier projet en 5 minutes', icon: Rocket },
    { to: '/docs/commands', title: 'Commandes', desc: 'Référence complète des 48 commandes', icon: Zap },
    { to: '/docs/templates', title: 'Templates', desc: 'Catalogue des templates par langage et framework', icon: Package },
    { to: '/docs/deployment', title: 'Déploiement', desc: 'Vercel, Railway, Docker, GitHub Pages, Kubernetes', icon: Globe },
    { to: '/docs/docker', title: 'Docker', desc: 'Dockerfile multi-stage AOT et docker-compose', icon: Container },
    { to: '/docs/workspace', title: 'Workspace', desc: 'Monorepos npm, .NET, Cargo', icon: FolderTree },
    { to: '/docs/registry', title: 'Registry', desc: 'Templates communautaires et personnels', icon: BookOpen },
    { to: '/docs/ai', title: 'Intelligence Artificielle', desc: 'OpenAI, Claude, Gemini, Grok, Mistral, DeepSeek', icon: Brain },
    { to: '/docs/plugins', title: 'Plugins', desc: 'Étendez Scaffolder avec des plugins shell', icon: Plug },
    { to: '/docs/faq', title: 'FAQ', desc: 'Réponses aux questions fréquentes', icon: HelpCircle },
  ]

  return (
    <div className="page-content">
      <h1>Documentation</h1>
      <p className="lead">
        Bienvenue dans la documentation de <strong>Scaffolder</strong>, le CLI universel
        de génération de projets. Que vous débutiez ou cherchiez une référence précise,
        vous trouverez tout ici.
      </p>

      <div className="docs-grid">
        {sections.map((s, i) => {
          const Icon = s.icon
          return (
            <Link to={s.to} key={i} className="docs-card">
              <div className="docs-card-icon"><Icon size={20} /></div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </Link>
          )
        })}
      </div>

      <h2>Par où commencer ?</h2>
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

      <h2>Une question ?</h2>
      <p>Consultez la <Link to="/docs/faq">FAQ</Link> ou contactez-nous :</p>
      <ContactForm />
    </div>
  )
}
