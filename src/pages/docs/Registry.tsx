function copyText(text: string) {
  navigator.clipboard.writeText(text)
}

export default function Registry() {
  return (
    <div className="page-content">
      <h1>Registry de templates</h1>
      <p>Le registry de templates permet de découvrir, installer et partager des templates communautaires.</p>

      <h2>Rechercher des templates</h2>
      <div className="install-cmd">
        <code>scaffold registry search "blog"</code>
        <button className="btn-copy" onClick={() => copyText('scaffold registry search "blog"')}>Copier</button>
      </div>

      <h2>Installer un template</h2>
      <div className="install-cmd">
        <code>scaffold registry install blog-template</code>
        <button className="btn-copy" onClick={() => copyText('scaffold registry install blog-template')}>Copier</button>
      </div>

      <h2>Lister les templates installés</h2>
      <div className="install-cmd">
        <code>scaffold registry list</code>
        <button className="btn-copy" onClick={() => copyText('scaffold registry list')}>Copier</button>
      </div>

      <h2>Recherche rapide</h2>
      <div className="install-cmd">
        <code>scaffold search "react"</code>
        <button className="btn-copy" onClick={() => copyText('scaffold search "react"')}>Copier</button>
      </div>
      <div className="install-cmd">
        <code>scaffold search "api rest"</code>
        <button className="btn-copy" onClick={() => copyText('scaffold search "api rest"')}>Copier</button>
      </div>

      <h2>Créer son propre template</h2>
      <p>Vous pouvez transformer n'importe quel dossier en template réutilisable :</p>
      <div className="install-cmd">
        <code>scaffold template from-dir ./mon-projet --name=mon-template</code>
        <button className="btn-copy" onClick={() => copyText('scaffold template from-dir ./mon-projet --name=mon-template')}>Copier</button>
      </div>
      <p>Scaffolder détecte automatiquement :</p>
      <ul>
        <li>Le type de projet (.NET, Node.js, Rust, Go, Python, etc.)</li>
        <li>Les tags pertinents</li>
        <li>Les fichiers de configuration</li>
      </ul>

      <h2>Voir les détails d'un template</h2>
      <div className="install-cmd">
        <code>scaffold template info mon-template</code>
        <button className="btn-copy" onClick={() => copyText('scaffold template info mon-template')}>Copier</button>
      </div>
    </div>
  )
}
