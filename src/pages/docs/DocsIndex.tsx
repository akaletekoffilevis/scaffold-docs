import { Link } from 'react-router-dom'
import ContactForm from '../../components/ContactForm'

export default function DocsIndex() {
  const sections = [
    { to: '/docs/installation', title: 'Installation', desc: 'Installez Scaffolder sur Linux, macOS ou Windows via binaire, dotnet tool, Homebrew ou compilation', icon: '📥' },
    { to: '/docs/getting-started', title: 'Premiers pas', desc: 'Créez, lancez et déployez votre premier projet en 5 minutes avec des exemples concrets', icon: '🚀' },
    { to: '/docs/commands', title: 'Commandes', desc: 'Référence complète des 40+ commandes organisées en 9 catégories avec options, exemples et search', icon: '⚡' },
    { to: '/docs/templates', title: 'Templates', desc: 'Catalogue des 18 templates prêts à l\'emploi : webapi, blazor, vite, react, next, django, flutter, laravel et plus', icon: '📦' },
    { to: '/docs/deployment', title: 'Déploiement', desc: 'Déployez sur Vercel, Railway, Docker ou GitHub Pages en une commande. Détection automatique de la plateforme', icon: '🌍' },
    { to: '/docs/docker', title: 'Docker', desc: 'Génération de Dockerfile multi-stage AOT, .dockerignore et docker-compose.yml pour tout type de projet', icon: '🐳' },
    { to: '/docs/workspace', title: 'Workspace', desc: 'Monorepos avec npm workspaces, solutions .NET et Cargo workspace. Gérez plusieurs projets dans un seul dépôt', icon: '📂' },
    { to: '/docs/registry', title: 'Registry', desc: 'Découvrez, installez et partagez des templates communautaires. Créez vos propres templates avec template.json', icon: '📚' },
    { to: '/docs/ai', title: 'Intelligence Artificielle', desc: 'IA intégrée avec OpenAI, Claude, Gemini et Grok. Suggestion, explication, correction d\'erreurs et génération de templates', icon: '🧠' },
    { to: '/docs/plugins', title: 'Plugins', desc: 'Étendez Scaffolder avec des plugins shell personnalisés. Hooks, système de commandes et marketplace', icon: '🔌' },
    { to: '/docs/faq', title: 'FAQ', desc: 'Plus de 30 réponses aux questions les plus fréquentes sur l\'installation, l\'utilisation et le dépannage', icon: '❓' },
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
      <div className="step-card">
        <h2>1. Installation</h2>
        <p>Installez Scaffolder en une ligne : <Link to="/docs/installation">Voir les options</Link></p>
      </div>
      <div className="step-card">
        <h2>2. Premier projet</h2>
        <p>Générez votre première API REST avec <code>scaffold new --template=webapi --name=mon-api</code></p>
      </div>
      <div className="step-card">
        <h2>3. Explorez</h2>
        <p>Découvrez les <Link to="/docs/templates">18 templates</Link>, les <Link to="/docs/commands">40+ commandes</Link>, et l'<Link to="/docs/ai">IA intégrée</Link></p>
      </div>

      <h2>Par où commencer ?</h2>
      <table>
        <thead>
          <tr><th>Vous cherchez...</th><th>Par où commencer</th></tr>
        </thead>
        <tbody>
          <tr><td>Installer Scaffolder</td><td><Link to="/docs/installation">Guide d'installation</Link></td></tr>
          <tr><td>Créer un projet rapidement</td><td><Link to="/docs/getting-started">Premiers pas</Link></td></tr>
          <tr><td>Une commande spécifique</td><td><Link to="/docs/commands">Référence des commandes</Link></td></tr>
          <tr><td>Un template pour mon langage</td><td><Link to="/docs/templates">Catalogue des templates</Link></td></tr>
          <tr><td>Déployer mon projet</td><td><Link to="/docs/deployment">Guide de déploiement</Link></td></tr>
          <tr><td>Configurer Docker</td><td><Link to="/docs/docker">Documentation Docker</Link></td></tr>
          <tr><td>Une réponse rapide</td><td><Link to="/docs/faq">FAQ</Link></td></tr>
        </tbody>
      </table>

      <h2>Une question ?</h2>
      <p>Vous ne trouvez pas ce que vous cherchez ? Consultez la <Link to="/docs/faq">FAQ</Link> ou contactez-nous directement :</p>
      <ContactForm />
    </div>
  )
}
