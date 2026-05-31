function copyText(text: string) {
  navigator.clipboard.writeText(text)
}

export default function Workspace() {
  return (
    <div className="page-content">
      <h1>Workspace (Monorepo)</h1>
      <p>Scaffolder permet de créer et gérer des workspaces multi-projets (monorepo) pour organiser vos projets.</p>

      <h2>Initialiser un workspace</h2>
      <div className="install-cmd">
        <code>scaffold workspace init monorepo --projects=frontend+vite,backend+webapi</code>
        <button className="btn-copy" onClick={() => copyText('scaffold workspace init monorepo --projects=frontend+vite,backend+webapi')}>Copier</button>
      </div>
      <p>Cette commande crée un dossier <code>monorepo</code> contenant :</p>
      <ul>
        <li>Un sous-dossier <code>frontend</code> généré avec le template <strong>vite</strong></li>
        <li>Un sous-dossier <code>backend</code> généré avec le template <strong>webapi</strong></li>
        <li>Un fichier de configuration workspace adapté</li>
      </ul>

      <h2>Ajouter un sous-projet</h2>
      <div className="install-cmd">
        <code>cd monorepo && scaffold workspace add mobile flutter</code>
        <button className="btn-copy" onClick={() => copyText('cd monorepo && scaffold workspace add mobile flutter')}>Copier</button>
      </div>

      <h2>Lister les sous-projets</h2>
      <div className="install-cmd">
        <code>scaffold workspace list</code>
        <button className="btn-copy" onClick={() => copyText('scaffold workspace list')}>Copier</button>
      </div>

      <h2>Gestionnaires supportés</h2>
      <table>
        <thead>
          <tr><th>Gestionnaire</th><th>Flag</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td>npm workspaces</td><td><code>--manager=npm</code></td><td>Workspace Node.js avec package.json racine et workspaces configurés</td></tr>
          <tr><td>dotnet sln</td><td><code>--manager=dotnet</code></td><td>Solution .NET avec plusieurs projets liés</td></tr>
          <tr><td>Cargo workspace</td><td><code>--manager=cargo</code></td><td>Workspace Rust avec Cargo.toml racine</td></tr>
        </tbody>
      </table>

      <h2>Exemple complet</h2>
      <div className="install-cmd">
        <code>scaffold workspace init fullstack-app --projects=frontend+vite,backend+webapi,admin+react --manager=npm</code>
        <button className="btn-copy" onClick={() => copyText('scaffold workspace init fullstack-app --projects=frontend+vite,backend+webapi,admin+react --manager=npm')}>Copier</button>
      </div>
    </div>
  )
}
