import { Link } from 'react-router-dom'
import ContactForm from '../../components/ContactForm'

export default function DocsIndex() {
  const sections = [
    { to: '/docs/installation', title: 'Installation', desc: 'Installez Scaffolder sur Linux, macOS ou Windows via binaire, Homebrew ou compilation', icon: '📥' },
    { to: '/docs/getting-started', title: 'Premiers pas', desc: 'Créez, lancez et déployez votre premier projet en 5 minutes', icon: '🚀' },
    { to: '/docs/commands', title: 'Commandes', desc: 'Référence complète des 40+ commandes avec options et exemples', icon: '⚡' },
    { to: '/docs/templates', title: 'Templates', desc: '18 templates prêts à l\'emploi : webapi, vite, react, next, django, flutter et plus', icon: '📦' },
    { to: '/docs/deployment', title: 'Déploiement', desc: 'Déployez sur Vercel, Railway, Docker, GitHub Pages en une commande', icon: '🌍' },
    { to: '/docs/docker', title: 'Docker', desc: 'Génération de Dockerfile multi-stage et docker-compose pour tout projet', icon: '🐳' },
    { to: '/docs/workspace', title: 'Workspace', desc: 'Monorepos avec npm workspaces, solutions .NET et Cargo workspace', icon: '📂' },
    { to: '/docs/registry', title: 'Registry', desc: 'Découvrez, installez et partagez des templates communautaires', icon: '📚' },
    { to: '/docs/ai', title: 'Intelligence Artificielle', desc: 'IA intégrée avec OpenAI, Claude, Gemini et Grok pour suggérer, expliquer et corriger', icon: '🧠' },
    { to: '/docs/plugins', title: 'Plugins', desc: 'Étendez Scaffolder avec des plugins shell personnalisés', icon: '🔌' },
    { to: '/docs/faq', title: 'FAQ', desc: 'Réponses aux questions les plus fréquentes', icon: '❓' },
  ]

  return (
    <div className="page-content">
      <h1>Documentation Scaffolder</h1>
      <p className="lead">
        Bienvenue dans la documentation complète de <strong>Scaffolder</strong>, le CLI universel de génération de projets.
        Que vous débutiez ou cherchiez une référence précise, vous trouverez tout ici.
      </p>

      <div className="grid">
        {sections.map((s, i) => (
          <Link to={s.to} key={i} className="card" style={{ textDecoration: 'none' }}>
            <div className="card-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </Link>
        ))}
      </div>

      <h2>Vous débutez ?</h2>
      <p>
        Commencez par <Link to="/docs/installation">installer Scaffolder</Link>, puis suivez le{' '}
        <Link to="/docs/getting-started">guide de démarrage rapide</Link>.
        Pour une vue d'ensemble, consultez la <Link to="/docs/commands">liste des commandes</Link>.
      </p>

      <h2>Une question ?</h2>
      <p>Vous ne trouvez pas ce que vous cherchez ? Consultez la <Link to="/docs/faq">FAQ</Link> ou contactez-nous directement :</p>
      <ContactForm />
    </div>
  )
}
