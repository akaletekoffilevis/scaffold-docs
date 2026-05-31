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
        <code>curl -L -o scaffold.zip https://github.com/akaletekoffilevis/Scaffolder-CLI/releases/download/v2.0.0/scaffold-win-x64.zip
tar -xzf scaffold.zip
scaffold version</code>
        <button className="btn-copy" onClick={() => copyText('curl -L -o scaffold.zip https://github.com/akaletekoffilevis/Scaffolder-CLI/releases/download/v2.0.0/scaffold-win-x64.zip\ntar -xzf scaffold.zip\nscaffold version')}>Copier</button>
      </div>

      <p>Plus d'options dans le <Link to="/docs/installation">guide d'installation complet</Link>.</p>

      <h2>Étape 2 : Créer un projet</h2>
      <p>Générez votre premier projet avec le template <code>webapi</code> (API REST .NET) :</p>
      <div className="install-cmd">
        <code>scaffold new --template=webapi --name=mon-api</code>
        <button className="btn-copy" onClick={() => copyText('scaffold new --template=webapi --name=mon-api')}>Copier</button>
      </div>
      <p>Cette commande crée un dossier <code>mon-api/</code> avec une API REST .NET complète : contrôleurs, Swagger, configuration, Dockerfile.</p>

      <h2>Étape 3 : Explorer le menu interactif</h2>
      <p>Sans arguments, Scaffolder affiche un menu interactif pour choisir un template parmi les 18 disponibles :</p>
      <div className="install-cmd">
        <code>scaffold new</code>
        <button className="btn-copy" onClick={() => copyText('scaffold new')}>Copier</button>
      </div>
      <p>Utilisez les flèches pour naviguer, Entrée pour sélectionner, et suivez les invites pour configurer votre projet.</p>

      <h2>Étape 4 : Lancer le projet</h2>
      <p>Scaffolder détecte automatiquement le type de projet et lance la commande appropriée :</p>
      <div className="install-cmd">
        <code>cd mon-api && scaffold run</code>
        <button className="btn-copy" onClick={() => copyText('cd mon-api && scaffold run')}>Copier</button>
      </div>
      <p>Pour .NET, ça lance <code>dotnet run</code>. Pour Node.js, <code>npm run dev</code>. Pour Rust, <code>cargo run</code>. Aucune configuration nécessaire.</p>

      <h2>Étape 5 : Déployer</h2>
      <p>Déployez votre projet sur Vercel, Railway, Docker ou GitHub Pages en une commande :</p>
      <div className="install-cmd">
        <code>scaffold deploy --target=vercel --prod</code>
        <button className="btn-copy" onClick={() => copyText('scaffold deploy --target=vercel --prod')}>Copier</button>
      </div>

      <h2>Prochaines étapes</h2>
      <ul>
        <li>Explorez les <strong>templates composés</strong> : <code>scaffold new webapi+react --name=app</code></li>
        <li>Créez un <strong>projet fullstack</strong> : <code>scaffold stack vite-dotnet --name=ecommerce</code></li>
        <li>Utilisez <strong>l'IA</strong> pour suggérer un template : <code>scaffold suggest "blog avec react et tailwind"</code></li>
        <li>Consultez la <Link to="/docs/commands">référence complète des commandes</Link></li>
        <li>Parcourez les <Link to="/docs/templates">templates disponibles</Link></li>
      </ul>

      <h2>Commande rapide : scaffold init</h2>
      <p>La commande <code>scaffold init</code> initialise un projet complet en une seule étape : Docker + CI + GitHub + Git + .env :</p>
      <div className="install-cmd">
        <code>scaffold init</code>
        <button className="btn-copy" onClick={() => copyText('scaffold init')}>Copier</button>
      </div>
    </div>
  )
}
