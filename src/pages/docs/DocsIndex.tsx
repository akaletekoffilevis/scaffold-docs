import { Link } from 'react-router-dom'

export default function DocsIndex() {
  const sections = [
    { to: '/docs/installation', title: 'Installation', desc: 'Installez Scaffolder sur Linux, macOS ou Windows' },
    { to: '/docs/getting-started', title: 'Getting Started', desc: 'Créez votre premier projet en 5 étapes' },
    { to: '/docs/commands', title: 'Commandes', desc: 'Référence complète des 40+ commandes' },
    { to: '/docs/templates', title: 'Templates', desc: 'Catalogue des templates disponibles' },
    { to: '/docs/deployment', title: 'Deployment', desc: 'Déployez sur Vercel, Railway, Docker, GitHub Pages' },
    { to: '/docs/docker', title: 'Docker', desc: 'Génération de Dockerfile et docker-compose' },
    { to: '/docs/ai', title: 'IA', desc: 'Utilisation de l\'intelligence artificielle intégrée' },
    { to: '/docs/plugins', title: 'Plugins', desc: 'Étendez Scaffolder avec des plugins' },
    { to: '/docs/faq', title: 'FAQ', desc: 'Questions fréquentes' },
  ]

  return (
    <div className="page-content">
      <h1>Documentation</h1>
      <p>Bienvenue dans la documentation de Scaffolder. Sélectionnez une section ci-dessous.</p>
      <div className="grid">
        {sections.map((s, i) => (
          <Link to={s.to} key={i} className="card" style={{ textDecoration: 'none' }}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
