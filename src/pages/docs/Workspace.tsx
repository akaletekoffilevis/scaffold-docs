function copyText(text: string) {
  navigator.clipboard.writeText(text)
}

export default function Workspace() {
  return (
    <div className="page-content">
      <h1>Workspace (Monorepo)</h1>
      <p>Scaffolder permet de créer et gérer des workspaces multi-projets (monorepo) pour organiser vos projets. Idéal pour les architectures fullstack, microservices ou les suites d'applications.</p>

      <h2>Pourquoi un monorepo ?</h2>
      <ul>
        <li>Partage de code et de configuration entre projets</li>
        <li>Déploiement coordonné (tout est versionné ensemble)</li>
        <li>CI/CD unifiée pour tous les sous-projets</li>
        <li>Dépendances centralisées et versions cohérentes</li>
        <li>Réutilisation de composants entre équipes</li>
        <li>Une seule commande pour build/lint/test tous les sous-projets</li>
      </ul>

      <h2>Initialiser un workspace</h2>
      <p>Créez un workspace avec plusieurs sous-projets en une commande :</p>
      <div className="install-cmd">
        <code>scaffold workspace init monorepo --projects=frontend+vite,backend+webapi</code>
        <button className="btn-copy" onClick={() => copyText('scaffold workspace init monorepo --projects=frontend+vite,backend+webapi')}>Copier</button>
      </div>
      <p>Cette commande crée un dossier <code>monorepo/</code> contenant :</p>
      <ul>
        <li><code>frontend/</code> — généré avec le template <strong>vite</strong> (React + TypeScript)</li>
        <li><code>backend/</code> — généré avec le template <strong>webapi</strong> (.NET 9 API REST)</li>
        <li>Configuration workspace adaptée au gestionnaire choisi</li>
        <li>Fichier de scripts partagés</li>
      </ul>

      <h3>Spécifier le gestionnaire de workspace</h3>
      <div className="install-cmd">
        <code>scaffold workspace init monorepo --projects=frontend+vite,backend+webapi --manager=npm</code>
        <button className="btn-copy" onClick={() => copyText('scaffold workspace init monorepo --projects=frontend+vite,backend+webapi --manager=npm')}>Copier</button>
      </div>

      <h2>Ajouter un sous-projet</h2>
      <p>Ajoutez un nouveau sous-projet à un workspace existant :</p>
      <div className="install-cmd">
        <code>cd monorepo && scaffold workspace add mobile flutter</code>
        <button className="btn-copy" onClick={() => copyText('cd monorepo && scaffold workspace add mobile flutter')}>Copier</button>
      </div>
      <p>Cette commande ajoute un dossier <code>mobile/</code> avec le template Flutter, et met à jour la configuration workspace.</p>

      <h2>Lister les sous-projets</h2>
      <div className="install-cmd">
        <code>scaffold workspace list</code>
        <button className="btn-copy" onClick={() => copyText('scaffold workspace list')}>Copier</button>
      </div>

      <h2>Gestionnaires supportés</h2>
      <table>
        <thead>
          <tr><th>Gestionnaire</th><th>Flag</th><th>Structure générée</th><th>Commande globale</th></tr>
        </thead>
        <tbody>
          <tr><td>npm workspaces</td><td><code>--manager=npm</code></td><td>package.json racine avec <code>workspaces</code>, chaque sous-projet a son propre package.json</td><td><code>npm run build</code> (lance le build partout)</td></tr>
          <tr><td>dotnet sln</td><td><code>--manager=dotnet</code></td><td>Solution .SLN racine, chaque sous-projet est un .csproj lié</td><td><code>dotnet build</code> (compile tout le workspace)</td></tr>
          <tr><td>Cargo workspace</td><td><code>--manager=cargo</code></td><td>Cargo.toml racine avec <code>[workspace]</code>, chaque sous-projet a son propre Cargo.toml</td><td><code>cargo build</code> (compile tout le workspace)</td></tr>
        </tbody>
      </table>

      <h2>Gestion des dépendances entre projets</h2>
      <p>Dans un workspace npm, vous pouvez référencer un sous-projet comme dépendance d'un autre :</p>
      <div className="install-cmd">
        <code>cd monorepo/backend && npm install ../frontend</code>
        <button className="btn-copy" onClick={() => copyText('cd monorepo/backend && npm install ../frontend')}>Copier</button>
      </div>
      <p>Pour les solutions .NET, les références de projet sont automatiquement détectées :</p>
      <div className="install-cmd">
        <code>dotnet add backend/backend.csproj reference frontend/frontend.csproj</code>
        <button className="btn-copy" onClick={() => copyText('dotnet add backend/backend.csproj reference frontend/frontend.csproj')}>Copier</button>
      </div>

      <h2>Structure d'un workspace npm</h2>
      <pre>{`monorepo/
  frontend/              # React + Vite + TypeScript
    package.json
    vite.config.ts
    src/
  backend/               # .NET 9 WebAPI
    backend.csproj
    Program.cs
    Controllers/
  mobile/                # Flutter
    pubspec.yaml
    lib/
  scripts/               # Scripts partagés
    build-all.sh
    test-all.sh
  package.json           # npm workspaces racine
  tsconfig.base.json     # Configuration TypeScript partagée
  .editorconfig          # Règles d'édition partagées`}</pre>

      <h2>Scénario complet : application fullstack</h2>
      <p>Créez un workspace complet avec frontend, backend et application mobile :</p>
      <div className="install-cmd">
        <code>scaffold workspace init fullstack-app --projects=frontend+vite,backend+webapi,mobile+flutter --manager=npm</code>
        <button className="btn-copy" onClick={() => copyText('scaffold workspace init fullstack-app --projects=frontend+vite,backend+webapi,mobile+flutter --manager=npm')}>Copier</button>
      </div>

      <h2>Bonnes pratiques</h2>
      <ul>
        <li>Choisissez <strong>npm</strong> pour des projets JavaScript/TypeScript hétérogènes</li>
        <li>Choisissez <strong>dotnet</strong> pour des projets .NET uniquement (meilleure intégration)</li>
        <li>Choisissez <strong>cargo</strong> pour des projets Rust uniquement</li>
        <li>Gardez une racine commune pour les scripts et la configuration partagée</li>
        <li>Utilisez <code>scaffold build</code> à la racine pour build tous les sous-projets</li>
        <li>Versionnez l'ensemble du workspace avec un seul tag Git</li>
      </ul>
    </div>
  )
}
