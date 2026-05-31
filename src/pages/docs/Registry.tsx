function copyText(text: string) {
  navigator.clipboard.writeText(text)
}

export default function Registry() {
  return (
    <div className="page-content">
      <h1>Registry de templates</h1>
      <p>Le registry de templates permet de découvrir, installer et partager des templates communautaires. C'est l'équivalent de npm ou NuGet, mais pour les templates de projets.</p>

      <h2>Rechercher des templates</h2>
      <p>Cherchez des templates par mot-clé dans le registry :</p>
      <div className="install-cmd">
        <code>scaffold registry search "blog"</code>
        <button className="btn-copy" onClick={() => copyText('scaffold registry search "blog"')}>Copier</button>
      </div>
      <div className="install-cmd">
        <code>scaffold registry search "api rest python"</code>
        <button className="btn-copy" onClick={() => copyText('scaffold registry search "api rest python"')}>Copier</button>
      </div>

      <h2>Recherche rapide (search)</h2>
      <p>La commande <code>scaffold search</code> cherche plus largement dans tous les templates disponibles :</p>
      <div className="install-cmd">
        <code>scaffold search "react"</code>
        <button className="btn-copy" onClick={() => copyText('scaffold search "react"')}>Copier</button>
      </div>
      <div className="install-cmd">
        <code>scaffold search "api rest"</code>
        <button className="btn-copy" onClick={() => copyText('scaffold search "api rest"')}>Copier</button>
      </div>
      <div className="install-cmd">
        <code>scaffold search "mobile"</code>
        <button className="btn-copy" onClick={() => copyText('scaffold search "mobile"')}>Copier</button>
      </div>

      <h2>Installer un template</h2>
      <p>Une fois trouvé, installez-le localement :</p>
      <div className="install-cmd">
        <code>scaffold registry install blog-template</code>
        <button className="btn-copy" onClick={() => copyText('scaffold registry install blog-template')}>Copier</button>
      </div>

      <h2>Lister les templates installés</h2>
      <div className="install-cmd">
        <code>scaffold registry list</code>
        <button className="btn-copy" onClick={() => copyText('scaffold registry list')}>Copier</button>
      </div>

      <h2>Créer son propre template</h2>
      <p>Transformez n'importe quel dossier existant en template réutilisable :</p>
      <div className="install-cmd">
        <code>scaffold template from-dir ./mon-projet --name=mon-template</code>
        <button className="btn-copy" onClick={() => copyText('scaffold template from-dir ./mon-projet --name=mon-template')}>Copier</button>
      </div>
      <p>Scaffolder détecte automatiquement :</p>
      <ul>
        <li>Le type de projet (.NET, Node.js, Rust, Go, Python, etc.)</li>
        <li>Les tags pertinents selon les dépendances et fichiers présents</li>
        <li>Les fichiers de configuration (csproj, package.json, Cargo.toml, go.mod, pubspec.yaml)</li>
        <li>La structure de dossiers et fichiers à inclure</li>
      </ul>

      <h2>Voir les détails d'un template</h2>
      <div className="install-cmd">
        <code>scaffold template info mon-template</code>
        <button className="btn-copy" onClick={() => copyText('scaffold template info mon-template')}>Copier</button>
      </div>

      <h2>Format du fichier template.json</h2>
      <p>Un template de registry est défini par un fichier <code>template.json</code> à la racine :</p>
      <pre>{`{
  "name": "blog-template",
  "version": "1.0.0",
  "description": "Template de blog avec React et Tailwind",
  "tags": ["blog", "react", "tailwind", "frontend"],
  "language": "TypeScript",
  "framework": "React",
  "author": "votre-nom",
  "license": "MIT",
  "dependencies": {
    "node": ">=18",
    "npm": ">=9"
  },
  "variables": [
    {
      "name": "project_name",
      "description": "Nom du projet",
      "default": "mon-blog"
    },
    {
      "name": "use_typescript",
      "description": "Utiliser TypeScript",
      "default": "true",
      "type": "boolean"
    }
  ]
}`}</pre>

      <h2>Partager un template</h2>
      <p>Pour partager votre template avec la communauté :</p>
      <ol>
        <li>Créez un dépôt GitHub avec votre template</li>
        <li>Ajoutez un fichier <code>template.json</code> à la racine (voir format ci-dessus)</li>
        <li>Organisez les fichiers selon la structure standard</li>
        <li>Poussez sur GitHub</li>
        <li>Partagez l'URL du dépôt sur les <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI/discussions" target="_blank" rel="noopener noreferrer">discussions GitHub</a></li>
      </ol>

      <h3>Versionner son template</h3>
      <p>Utilisez les tags Git pour versionner votre template :</p>
      <div className="install-cmd">
        <code>git tag v1.0.0 && git push origin v1.0.0</code>
        <button className="btn-copy" onClick={() => copyText('git tag v1.0.0 && git push origin v1.0.0')}>Copier</button>
      </div>
      <p>Les utilisateurs peuvent installer une version spécifique :</p>
      <div className="install-cmd">
        <code>scaffold plugin add https://github.com/user/mon-template@v1.0.0</code>
        <button className="btn-copy" onClick={() => copyText('scaffold plugin add https://github.com/user/mon-template@v1.0.0')}>Copier</button>
      </div>

      <h2>Structure d'un dépôt de template</h2>
      <pre>{`mon-template/
  template.json         # Métadonnées du template
  template/             # Dossier contenant les fichiers du template
    .gitignore
    README.md
    src/
    tests/
  README.md             # Documentation du template`}</pre>

      <h2>Bonnes pratiques</h2>
      <ul>
        <li>Utilisez des noms de templates explicites et uniques</li>
        <li>Ajoutez des tags pertinents pour le référencement</li>
        <li>Versionnez votre template avec des tags Git</li>
        <li>Documentez les variables obligatoires et optionnelles</li>
        <li>Testez votre template avec <code>scaffold new --template=mon-template</code> avant de partager</li>
        <li>Incluez un README.md expliquant comment utiliser le template</li>
      </ul>
    </div>
  )
}
