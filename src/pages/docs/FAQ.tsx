import { Link } from 'react-router-dom'

function copyText(text: string) {
  navigator.clipboard.writeText(text)
}

const faqs = [
  {
    q: 'Comment mettre à jour Scaffolder ?',
    a: 'Utilisez la commande intégrée :',
    cmd: 'scaffold upgrade'
  },
  {
    q: 'Comment créer un template personnalisé ?',
    a: 'Utilisez la commande from-dir pour transformer un dossier existant en template :',
    cmd: 'scaffold template from-dir ./mon-projet --name=mon-template',
    link: { to: '/docs/registry', label: 'En savoir plus sur le registry' }
  },
  {
    q: 'Comment installer un plugin ?',
    a: 'Ajoutez un plugin depuis une URL Git :',
    cmd: 'scaffold plugin add https://github.com/user/mon-plugin',
    link: { to: '/docs/plugins', label: 'Documentation des plugins' }
  },
  {
    q: 'Comment utiliser l\'IA ?',
    a: 'Configurez d\'abord votre clé API et le fournisseur, puis utilisez les commandes suggest, explain, fix ou generate.',
    cmd: 'scaffold config set apiKey sk-xxxxx && scaffold config set provider grok',
    link: { to: '/docs/ai', label: 'Documentation IA' }
  },
  {
    q: 'Comment déployer un projet ?',
    a: 'Scaffolder peut déployer sur Vercel, Railway, Docker ou GitHub Pages :',
    cmd: 'scaffold deploy --target=vercel --prod',
    link: { to: '/docs/deployment', label: 'Guide de déploiement' }
  },
  {
    q: 'Les templates composés, ça fonctionne comment ?',
    a: 'Vous pouvez combiner plusieurs templates avec le signe + pour créer un projet fullstack :',
    cmd: 'scaffold new webapi+react --name=app'
  },
  {
    q: 'Comment utiliser un template du registry ?',
    a: 'Recherchez et installez depuis le registry communautaire :',
    cmd: 'scaffold registry search blog && scaffold registry install blog-template',
    link: { to: '/docs/registry', label: 'Documentation du registry' }
  },
  {
    q: 'Comment configurer un template favori ?',
    a: 'Définissez un template par défaut pour la commande scaffold new --fav :',
    cmd: 'scaffold config set fav webapi'
  },
  {
    q: 'Comment générer un projet complet (frontend + backend + BDD) ?',
    a: 'Utilisez la commande stack pour générer une architecture complète :',
    cmd: 'scaffold stack vite-dotnet --name=ecommerce'
  },
]

export default function FAQ() {
  return (
    <div className="page-content">
      <h1>FAQ</h1>
      <p>Questions fréquentes sur Scaffolder.</p>

      {faqs.map((item, i) => (
        <div key={i} className="faq-item">
          <h2>{item.q}</h2>
          <p>{item.a}</p>
          <div className="install-cmd">
            <code>{item.cmd}</code>
            <button className="btn-copy" onClick={() => copyText(item.cmd)}>Copier</button>
          </div>
          {item.link && <Link to={item.link.to}>{item.link.label}</Link>}
        </div>
      ))}

      <p>Une question ? Ouvrez une <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI/discussions" target="_blank" rel="noopener noreferrer">discussion GitHub</a>.</p>
    </div>
  )
}
