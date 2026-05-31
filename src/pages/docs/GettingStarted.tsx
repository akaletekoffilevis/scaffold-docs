import { Link } from 'react-router-dom'

function copyText(text: string) {
  navigator.clipboard.writeText(text)
}

export default function GettingStarted() {
  return (
    <div className="page-content">
      <h1>Premiers pas avec Scaffolder</h1>
      <p>Créez votre premier projet en 5 étapes. Scaffolder s'occupe de tout : génération, build, exécution et déploiement.</p>

      <h2>Étape 1 : Installer Scaffolder</h2>
      <p>Si ce n'est pas déjà fait, installez Scaffolder sur votre système. Choisissez votre plateforme :</p>

      <h3>Linux / macOS</h3>
      <div className="install-cmd">
        <code>curl -L -o scaffold.tar.gz https://github.com/akaletekoffilevis/Scaffolder-CLI/releases/download/v2.0.0/scaffold-linux-x64.tar.gz
tar -xzf scaffold.tar.gz
sudo mv scaffold /usr/local/bin/
scaffold version</code>
        <button className="btn-copy" onClick={() => copyText('curl -L -o scaffold.tar.gz https://github.com/akaletekoffilevis/Scaffolder-CLI/releases/download/v2.0.0/scaffold-linux-x64.tar.gz\ntar -xzf scaffold.tar.gz\nsudo mv scaffold /usr/local/bin/\nscaffold version')}>Copier</button>
      </div>

      <h3>Windows (PowerShell)</h3>
      <div className="install-cmd">
        <code>curl -L -o scaffold.tar.gz https://github.com/akaletekoffilevis/Scaffolder-CLI/releases/download/v2.0.0/scaffold-win-x64.tar.gz
tar -xzf scaffold.tar.gz
scaffold version</code>
        <button className="btn-copy" onClick={() => copyText('curl -L -o scaffold.tar.gz https://github.com/akaletekoffilevis/Scaffolder-CLI/releases/download/v2.0.0/scaffold-win-x64.tar.gz\ntar -xzf scaffold.tar.gz\nscaffold version')}>Copier</button>
      </div>

      <p>Plus d'options dans le <Link to="/docs/installation">guide d'installation complet</Link>.</p>

      <h2>Étape 2 : Créer un projet</h2>
      <p>Générez votre premier projet avec le template <code>webapi</code> (API REST .NET) :</p>
      <div className="install-cmd">
        <code>scaffold new --template=webapi --name=mon-api</code>
        <button className="btn-copy" onClick={() => copyText('scaffold new --template=webapi --name=mon-api')}>Copier</button>
      </div>
      <p>Cette commande crée un dossier <code>mon-api/</code> avec une API REST .NET complète :</p>
      <pre>{`mon-api/
  Controllers/       # Contrôleurs API REST
  Models/            # Entités et modèles
  Data/              # DbContext et migrations EF
  appsettings.json   # Configuration
  Program.cs         # Point d'entrée
  Dockerfile         # Build multi-stage
  .gitignore`}</pre>

      <h2>Étape 3 : Explorer le menu interactif</h2>
      <p>Sans arguments, Scaffolder affiche un menu interactif pour choisir un template parmi les 18 disponibles :</p>
      <div className="install-cmd">
        <code>scaffold new</code>
        <button className="btn-copy" onClick={() => copyText('scaffold new')}>Copier</button>
      </div>
      <p>Utilisez les flèches pour naviguer, Entrée pour sélectionner, et suivez les invites pour configurer votre projet. Vous pouvez choisir le template, le nom, et même combiner plusieurs templates.</p>

      <h3>Mode silencieux pour CI</h3>
      <div className="install-cmd">
        <code>scaffold new --template=webapi --name=mon-api --silent --no-git</code>
        <button className="btn-copy" onClick={() => copyText('scaffold new --template=webapi --name=mon-api --silent --no-git')}>Copier</button>
      </div>

      <h2>Étape 4 : Lancer le projet</h2>
      <p>Scaffolder détecte automatiquement le type de projet et lance la commande appropriée :</p>
      <div className="install-cmd">
        <code>cd mon-api && scaffold run</code>
        <button className="btn-copy" onClick={() => copyText('cd mon-api && scaffold run')}>Copier</button>
      </div>
      <table>
        <thead>
          <tr><th>Type de projet</th><th>Commande exécutée</th></tr>
        </thead>
        <tbody>
          <tr><td>.NET (webapi, blazor, console)</td><td><code>dotnet run</code></td></tr>
          <tr><td>Node.js (vite, react, next, vue, nuxt, express, nest)</td><td><code>npm run dev</code></td></tr>
          <tr><td>Rust (actix, rocket)</td><td><code>cargo run</code></td></tr>
          <tr><td>Go</td><td><code>go run .</code></td></tr>
          <tr><td>Python (fastapi, django)</td><td><code>uvicorn main:app</code> / <code>python manage.py runserver</code></td></tr>
          <tr><td>Flutter</td><td><code>flutter run</code></td></tr>
          <tr><td>Laravel</td><td><code>php artisan serve</code></td></tr>
          <tr><td>Rails</td><td><code>rails server</code></td></tr>
        </tbody>
      </table>

      <h2>Étape 5 : Déployer</h2>
      <p>Déployez votre projet sur Vercel, Railway, Docker ou GitHub Pages en une commande :</p>
      <div className="install-cmd">
        <code>scaffold deploy --target=vercel --prod</code>
        <button className="btn-copy" onClick={() => copyText('scaffold deploy --target=vercel --prod')}>Copier</button>
      </div>
      <p>Sans argument, <code>scaffold deploy</code> détecte automatiquement la plateforme cible selon les fichiers de configuration présents.</p>

      <h2>Prochaines étapes</h2>
      <ul>
        <li>Explorez les <strong>templates composés</strong> : <code>scaffold new webapi+react --name=app</code></li>
        <li>Créez un <strong>projet fullstack</strong> : <code>scaffold stack vite-dotnet --name=ecommerce</code></li>
        <li>Utilisez <strong>l'IA</strong> pour suggérer un template : <code>scaffold suggest "blog avec react et tailwind"</code></li>
        <li>Initialisez un <strong>projet complet</strong> : <code>scaffold init</code> (Docker + CI + GitHub + .env)</li>
        <li>Consultez la <Link to="/docs/commands">référence complète des commandes</Link></li>
        <li>Parcourez les <Link to="/docs/templates">templates disponibles</Link></li>
      </ul>

      <h2>Commande rapide : scaffold init</h2>
      <p>La commande <code>scaffold init</code> initialise un projet complet en une seule étape :</p>
      <div className="install-cmd">
        <code>scaffold init</code>
        <button className="btn-copy" onClick={() => copyText('scaffold init')}>Copier</button>
      </div>
      <p>Cette commande exécute séquentiellement :</p>
      <ol>
        <li><strong>Docker</strong> : génère Dockerfile et .dockerignore</li>
        <li><strong>GitHub Actions</strong> : crée un workflow CI</li>
        <li><strong>Dépôt GitHub</strong> : initialise et pousse le projet</li>
        <li><strong>.env</strong> : génère les variables d'environnement</li>
        <li><strong>.gitignore</strong> : adapté au type de projet</li>
      </ol>

      <h2>Structure d'un projet généré</h2>
      <p>Tous les projets Scaffolder suivent une structure cohérente :</p>
      <ul>
        <li><strong>Fichiers source</strong> : selon le template (Controllers, Models, pages, composants)</li>
        <li><strong>Configuration</strong> : appsettings.json, .env, tsconfig, webpack.config</li>
        <li><strong>Docker</strong> : Dockerfile multi-stage optimisé</li>
        <li><strong>CI/CD</strong> : .github/workflows/ prêt à l'emploi</li>
        <li><strong>Qualité</strong> : .editorconfig, .gitignore, lint config</li>
      </ul>
    </div>
  )
}
