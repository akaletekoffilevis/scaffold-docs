function copyText(text: string) {
  navigator.clipboard.writeText(text)
}

export default function Deployment() {
  return (
    <div className="page-content">
      <h1>Déploiement</h1>
      <p>Scaffolder peut déployer votre projet sur plusieurs plateformes avec une seule commande. La détection automatique identifie la plateforme selon les fichiers présents dans votre projet.</p>

      <h2>Déploiement automatique</h2>
      <p>Sans argument, <code>scaffold deploy</code> détecte automatiquement la plateforme cible selon les fichiers présents :</p>
      <table>
        <thead>
          <tr><th>Fichier détecté</th><th>Plateforme</th></tr>
        </thead>
        <tbody>
          <tr><td><code>vercel.json</code></td><td>Vercel</td></tr>
          <tr><td><code>railway.json</code></td><td>Railway</td></tr>
          <tr><td><code>Dockerfile</code></td><td>Docker</td></tr>
          <tr><td><code>index.html</code> ou dossier <code>dist/</code></td><td>GitHub Pages</td></tr>
        </tbody>
      </table>
      <div className="install-cmd">
        <code>scaffold deploy</code>
        <button className="btn-copy" onClick={() => copyText('scaffold deploy')}>Copier</button>
      </div>

      <h2>Vercel</h2>
      <p>Idéal pour les applications frontend (Next.js, Vite, React, Vue) et les API serverless.</p>
      <h3>Prérequis</h3>
      <ul>
        <li>Un compte Vercel (gratuit)</li>
        <li>Projet frontend généré avec Scaffolder (vite, next, react, vue, nuxt)</li>
        <li><code>vercel.json</code> généré automatiquement ou manuellement</li>
        <li>Vercel CLI installé (optionnel, Scaffolder peut s'authentifier via token)</li>
      </ul>
      <h3>Commande</h3>
      <div className="install-cmd">
        <code>scaffold deploy --target=vercel --prod</code>
        <button className="btn-copy" onClick={() => copyText('scaffold deploy --target=vercel --prod')}>Copier</button>
      </div>
      <h3>Options</h3>
      <ul>
        <li><code>--prod</code> : Déploiement en production (sans, c'est un déploiement preview avec URL temporaire)</li>
        <li><code>--token</code> : Token Vercel pour CI (alternative à l'authentification interactive)</li>
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
      <h3>Variables d'environnement</h3>
      <p>Scaffolder peut injecter automatiquement les variables d'environnement nécessaires :</p>
      <div className="install-cmd">
        <code>scaffold config set RAILWAY_TOKEN votre-token</code>
        <button className="btn-copy" onClick={() => copyText('scaffold config set RAILWAY_TOKEN votre-token')}>Copier</button>
      </div>

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
      <h3>Étapes automatiques</h3>
      <ol>
        <li>Construit l'image Docker localement avec le Dockerfile du projet</li>
        <li>Tag l'image avec le nom du projet et la date</li>
        <li>Lance le conteneur en mode détaché</li>
        <li>Mappe les ports automatiquement selon le type de projet</li>
      </ol>
      <h3>Avec docker-compose</h3>
      <p>Si un <code>docker-compose.yml</code> est présent (généré par <code>scaffold docker --type=full</code>), <code>scaffold deploy --target=docker</code> utilise <code>docker compose up -d</code>.</p>

      <h2>GitHub Pages</h2>
      <p>Pour les sites statiques et documentations.</p>
      <h3>Prérequis</h3>
      <ul>
        <li>Un dépôt GitHub</li>
        <li>Projet frontend (site statique) : vite, react, vue, next (export statique)</li>
        <li>Git configuré</li>
      </ul>
      <h3>Commande</h3>
      <div className="install-cmd">
        <code>scaffold deploy --target=github-pages</code>
        <button className="btn-copy" onClick={() => copyText('scaffold deploy --target=github-pages')}>Copier</button>
      </div>
      <h3>Fonctionnement</h3>
      <ul>
        <li>Scaffolder exécute le build du projet (<code>npm run build</code>, etc.)</li>
        <li>Pousse le dossier de build sur la branche <code>gh-pages</code></li>
        <li>Configure automatiquement GitHub Pages dans les settings du dépôt</li>
        <li>Utilisez <code>scaffold github actions</code> pour ajouter une CI de déploiement automatique</li>
      </ul>

      <h2>CI/CD intégré</h2>
      <p>Générez un pipeline CI/CD complet avec une seule commande :</p>
      <div className="install-cmd">
        <code>scaffold github actions --language=dotnet</code>
        <button className="btn-copy" onClick={() => copyText('scaffold github actions --language=dotnet')}>Copier</button>
      </div>
      <p>Le workflow généré inclut :</p>
      <ul>
        <li>Installation des dépendances</li>
        <li>Build et tests</li>
        <li>Déploiement automatique sur la plateforme détectée</li>
      </ul>

      <h2>Gestion des domaines</h2>
      <p>Pour Vercel et Railway, Scaffolder peut configurer des domaines personnalisés :</p>
      <div className="install-cmd">
        <code>scaffold config set domain mon-site.com</code>
        <button className="btn-copy" onClick={() => copyText('scaffold config set domain mon-site.com')}>Copier</button>
      </div>
      <div className="install-cmd">
        <code>scaffold deploy --domain=mon-site.com</code>
        <button className="btn-copy" onClick={() => copyText('scaffold deploy --domain=mon-site.com')}>Copier</button>
      </div>

      <h2>Variables d'environnement</h2>
      <p>Gérez les variables d'environnement de vos déploiements :</p>
      <div className="install-cmd">
        <code>scaffold env</code>
        <button className="btn-copy" onClick={() => copyText('scaffold env')}>Copier</button>
      </div>
      <p>Cette commande génère un fichier <code>.env</code> et <code>.env.example</code> adaptés au type de projet détecté.</p>

      <h2>Bonnes pratiques</h2>
      <ul>
        <li>Utilisez <code>scaffold init</code> pour configurer Docker, CI et GitHub en une fois</li>
        <li>Testez d'abord en local avec <code>--target=docker</code></li>
        <li>Pour Vercel, utilisez <code>--prod</code> seulement après avoir validé la preview</li>
        <li>Gardez vos tokens et clés API dans le config de Scaffolder, pas dans le code</li>
        <li>Utilisez <code>scaffold doctor</code> avant de déployer pour vérifier l'environnement</li>
      </ul>
    </div>
  )
}
