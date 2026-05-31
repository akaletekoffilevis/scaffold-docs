import { Link } from 'react-router-dom'

export default function GettingStarted() {
  const steps = [
    {
      title: 'Étape 1 : Installer Scaffolder',
      desc: 'Téléchargez et installez le binaire pour votre système.',
      code: null,
      link: { to: '/docs/installation', label: 'Voir le guide d\'installation' }
    },
    {
      title: 'Étape 2 : Créer un projet',
      desc: 'Générez votre premier projet avec un template :',
      code: 'scaffold new --template=webapi --name=mon-api'
    },
    {
      title: 'Étape 3 : Menu interactif',
      desc: 'Sans arguments, Scaffolder affiche un menu interactif pour choisir un template :',
      code: 'scaffold new'
    },
    {
      title: 'Étape 4 : Lancer le projet',
      desc: 'Scaffolder détecte automatiquement le type de projet et lance la commande appropriée :',
      code: 'scaffold run'
    },
    {
      title: 'Étape 5 : Déployer',
      desc: 'Déployez votre projet sur Vercel, Railway, Docker ou GitHub Pages :',
      code: 'scaffold deploy'
    }
  ]

  return (
    <div className="page-content">
      <h1>Getting Started</h1>
      <p>Créez votre premier projet avec Scaffolder en 5 étapes.</p>

      {steps.map((step, i) => (
        <div key={i} className="step-card">
          <h2>{step.title}</h2>
          <p>{step.desc}</p>
          {step.code && (
            <div className="install-cmd">
              <code>{step.code}</code>
              <button className="btn-copy" onClick={() => navigator.clipboard.writeText(step.code!)}>Copier</button>
            </div>
          )}
          {step.link && <Link to={step.link.to}>{step.link.label}</Link>}
        </div>
      ))}

      <p>Prêt à explorer ? Consultez la <Link to="/docs/commands">référence complète des commandes</Link>.</p>
    </div>
  )
}
