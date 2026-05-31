function copyText(text: string) {
  navigator.clipboard.writeText(text)
}

function DeploySection({ title, prep, cmd, tips }: { title: string; prep: string[]; cmd: string; tips: string[] }) {
  return (
    <div className="deploy-section">
      <h2>{title}</h2>
      <h3>Prérequis</h3>
      <ul>
        {prep.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
      <h3>Commande de déploiement</h3>
      <div className="install-cmd">
        <code>{cmd}</code>
        <button className="btn-copy" onClick={() => copyText(cmd)}>Copier</button>
      </div>
      <h3>Conseils</h3>
      <ul>
        {tips.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
    </div>
  )
}

export default function Deployment() {
  return (
    <div className="page-content">
      <h1>Déploiement</h1>
      <p>Scaffolder peut déployer votre projet sur plusieurs plateformes avec une seule commande.</p>

      <DeploySection
        title="Vercel"
        prep={[
          'Un compte Vercel',
          'Projet frontend (Vite, Next.js, React, Vue)',
          'GitHub repository connecté (optionnel)'
        ]}
        cmd="scaffold deploy --target=vercel --prod"
        tips={[
          'Scaffolder détecte automatiquement Vercel si un fichier vercel.json existe',
          'Ajoutez --prod pour déployer en production',
          'Vercel détecte automatiquement le framework utilisé'
        ]}
      />

      <DeploySection
        title="Railway"
        prep={[
          'Un compte Railway',
          'Projet backend (API, web service)',
          'Railway CLI installé (optionnel)'
        ]}
        cmd="scaffold deploy --target=railway"
        tips={[
          'Railway supporte .NET, Node.js, Python, Go, Rust',
          'Scaffolder génère un railway.json si nécessaire',
          'Les variables d\'environnement sont configurables via le dashboard Railway'
        ]}
      />

      <DeploySection
        title="Docker"
        prep={[
          'Docker installé sur la machine',
          'Projet généré avec scaffold docker --type=...'
        ]}
        cmd="scaffold deploy --target=docker"
        tips={[
          'Construit l\'image Docker localement',
          'Utilise le Dockerfile généré par scaffold docker',
          'Tag et run le conteneur automatiquement'
        ]}
      />

      <DeploySection
        title="GitHub Pages"
        prep={[
          'Un dépôt GitHub',
          'Projet frontend (site statique)',
          'Git configuré'
        ]}
        cmd="scaffold deploy --target=github-pages"
        tips={[
          'Scaffolder pousse le build sur la branche gh-pages',
          'Configure automatiquement GitHub Pages dans les settings du dépôt',
          'Utilisez scaffold github actions pour ajouter une CI de déploiement automatique'
        ]}
      />
    </div>
  )
}
