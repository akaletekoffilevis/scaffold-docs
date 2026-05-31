function copyText(text: string) {
  navigator.clipboard.writeText(text)
}

export default function Deployment() {
  return (
    <div className="page-content">
      <h1>Déploiement</h1>
      <p>Scaffolder peut déployer votre projet sur plusieurs plateformes avec une seule commande. La détection automatique identifie la plateforme selon les fichiers présents dans votre projet.</p>

      <h2>Vercel</h2>
      <p>Idéal pour les applications frontend (Next.js, Vite, React, Vue) et les API serverless.</p>
      <h3>Prérequis</h3>
      <ul>
        <li>Un compte Vercel (gratuit)</li>
        <li>Projet frontend généré avec Scaffolder (vite, next, react, vue, nuxt)</li>
        <li><code>vercel.json</code> généré automatiquement ou manuellement</li>
      </ul>
      <h3>Commande</h3>
      <div className="install-cmd">
        <code>scaffold deploy --target=vercel --prod</code>
        <button className="btn-copy" onClick={() => copyText('scaffold deploy --target=vercel --prod')}>Copier</button>
      </div>
      <h3>Options</h3>
      <ul>
        <li><code>--prod</code> : Déploiement en production (sans, c'est un déploiement preview)</li>
        <li>Scaffolder détecte automatiquement Vercel si <code>vercel.json</code> existe</li>
      </ul>

      <h2>Railway</h2>
      <p>Parfait pour les APIs et backends. Supporte .NET, Node.js, Python, Go, Rust.</p>
      <h3>Prérequis</h3>
      <ul>
        <li>Un compte Railway (gratuit)</li>
        <li>Projet backend généré avec Scaffolder</li>
        <li>Railway CLI installé (optionnel)</li>
      </ul>
      <h3>Commande</h3>
      <div className="install-cmd">
        <code>scaffold deploy --target=railway</code>
        <button className="btn-copy" onClick={() => copyText('scaffold deploy --target=railway')}>Copier</button>
      </div>
      <h3>Configuration</h3>
      <p>Scaffolder génère un fichier <code>railway.json</code> si nécessaire. Les variables d'environnement sont configurables via le dashboard Railway ou via <code>scaffold config</code>.</p>

      <h2>Docker</h2>
      <p>Déploiement local avec Docker. Utilise le Dockerfile généré par <code>scaffold docker</code>.</p>
      <h3>Prérequis</h3>
      <ul>
        <li>Docker installé sur la machine</li>
        <li>Dockerfile généré avec <code>scaffold docker --type=...</code></li>
      </ul>
      <h3>Commande</h3>
      <div className="install-cmd">
        <code>scaffold deploy --target=docker</code>
        <button className="btn-copy" onClick={() => copyText('scaffold deploy --target=docker')}>Copier</button>
      </div>
      <h3>Étapes</h3>
      <ol>
        <li>Construit l'image Docker localement</li>
        <li>Utilise le Dockerfile généré par <code>scaffold docker</code></li>
        <li>Tag et run le conteneur automatiquement</li>
      </ol>

      <h2>GitHub Pages</h2>
      <p>Pour les sites statiques et documentations.</p>
      <h3>Prérequis</h3>
      <ul>
        <li>Un dépôt GitHub</li>
        <li>Projet frontend (site statique)</li>
        <li>Git configuré</li>
      </ul>
      <h3>Commande</h3>
      <div className="install-cmd">
        <code>scaffold deploy --target=github-pages</code>
        <button className="btn-copy" onClick={() => copyText('scaffold deploy --target=github-pages')}>Copier</button>
      </div>
      <h3>Fonctionnement</h3>
      <ul>
        <li>Scaffolder pousse le build sur la branche <code>gh-pages</code></li>
        <li>Configure automatiquement GitHub Pages dans les settings du dépôt</li>
        <li>Utilisez <code>scaffold github actions</code> pour ajouter une CI de déploiement automatique</li>
      </ul>

      <h2>Déploiement automatique</h2>
      <p>Sans argument, <code>scaffold deploy</code> détecte automatiquement la plateforme cible selon les fichiers présents :</p>
      <div className="install-cmd">
        <code>scaffold deploy</code>
        <button className="btn-copy" onClick={() => copyText('scaffold deploy')}>Copier</button>
      </div>
    </div>
  )
}
