function copyText(text: string) {
  navigator.clipboard.writeText(text)
}

export default function Plugins() {
  return (
    <div className="page-content">
      <h1>Plugins</h1>
      <p>Les plugins permettent d'étendre Scaffolder avec des fonctionnalités personnalisées. Ce sont des scripts shell exécutables qui peuvent faire presque tout ce qu'un script shell peut faire.</p>

      <h2>Gestion des plugins</h2>

      <h3>Lister les plugins installés</h3>
      <div className="install-cmd">
        <code>scaffold plugin list</code>
        <button className="btn-copy" onClick={() => copyText('scaffold plugin list')}>Copier</button>
      </div>

      <h3>Ajouter un plugin depuis une URL Git</h3>
      <div className="install-cmd">
        <code>scaffold plugin add https://github.com/user/mon-plugin</code>
        <button className="btn-copy" onClick={() => copyText('scaffold plugin add https://github.com/user/mon-plugin')}>Copier</button>
      </div>
      <p>Vous pouvez aussi spécifier une version avec un tag :</p>
      <div className="install-cmd">
        <code>scaffold plugin add https://github.com/user/mon-plugin@v1.0.0</code>
        <button className="btn-copy" onClick={() => copyText('scaffold plugin add https://github.com/user/mon-plugin@v1.0.0')}>Copier</button>
      </div>

      <h3>Supprimer un plugin</h3>
      <div className="install-cmd">
        <code>scaffold plugin remove mon-plugin</code>
        <button className="btn-copy" onClick={() => copyText('scaffold plugin remove mon-plugin')}>Copier</button>
      </div>

      <h3>Voir les détails d'un plugin</h3>
      <div className="install-cmd">
        <code>scaffold plugin info mon-plugin</code>
        <button className="btn-copy" onClick={() => copyText('scaffold plugin info mon-plugin')}>Copier</button>
      </div>

      <h3>Chercher des plugins</h3>
      <div className="install-cmd">
        <code>scaffold plugin search eslint</code>
        <button className="btn-copy" onClick={() => copyText('scaffold plugin search eslint')}>Copier</button>
      </div>

      <h2>Créer un plugin</h2>
      <p>Utilisez la commande <code>scaffold plugin create</code> pour générer un squelette de plugin :</p>
      <div className="install-cmd">
        <code>scaffold plugin create mon-plugin</code>
        <button className="btn-copy" onClick={() => copyText('scaffold plugin create mon-plugin')}>Copier</button>
      </div>

      <p>Un plugin se compose de deux fichiers obligatoires :</p>

      <h3>plugin.json</h3>
      <p>Métadonnées du plugin. C'est le fichier de configuration qui décrit le plugin :</p>
      <pre>{`{
  "name": "mon-plugin",
  "version": "1.0.0",
  "description": "Description de mon plugin",
  "commands": ["ma-commande"],
  "entry": "main.sh",
  "author": "votre-nom",
  "license": "MIT",
  "minScaffolderVersion": "2.0.0"
}`}</pre>
      <table>
        <thead>
          <tr><th>Champ</th><th>Description</th><th>Obligatoire</th></tr>
        </thead>
        <tbody>
          <tr><td><code>name</code></td><td>Nom unique du plugin</td><td>Oui</td></tr>
          <tr><td><code>version</code></td><td>Version sémantique (semver)</td><td>Oui</td></tr>
          <tr><td><code>commands</code></td><td>Noms des commandes exposées</td><td>Oui</td></tr>
          <tr><td><code>entry</code></td><td>Script exécutable principal</td><td>Oui</td></tr>
          <tr><td><code>description</code></td><td>Description courte</td><td>Recommandé</td></tr>
          <tr><td><code>author</code></td><td>Créateur du plugin</td><td>Non</td></tr>
          <tr><td><code>license</code></td><td>Licence du plugin</td><td>Non</td></tr>
          <tr><td><code>minScaffolderVersion</code></td><td>Version minimale de Scaffolder requise</td><td>Non</td></tr>
        </tbody>
      </table>

      <h3>main.sh</h3>
      <p>Script exécutable principal. Ce script est appelé avec les arguments passés par l'utilisateur :</p>
      <pre>{`#!/bin/bash
# Plugin Scaffolder - mon-plugin
# Arguments passes par l'utilisateur : $@

NAME="\${1:-mon-plugin}"
echo "Execution de mon-plugin"
echo "Nom : $NAME"
echo "Arguments recus: $@"
echo "Repertoire du projet : \$(pwd)"`}</pre>

      <p>Rendez le script exécutable et push sur Git :</p>
      <div className="install-cmd">
        <code>chmod +x main.sh && git init && git add . && git commit -m "Initial commit" && git remote add origin https://github.com/user/mon-plugin.git && git push -u origin main</code>
        <button className="btn-copy" onClick={() => copyText('chmod +x main.sh && git init && git add . && git commit -m "Initial commit" && git remote add origin https://github.com/user/mon-plugin.git && git push -u origin main')}>Copier</button>
      </div>

      <h2>Hooks de cycle de vie</h2>
      <p>Les plugins peuvent définir des hooks pour réagir aux événements de Scaffolder. Ajoutez un dossier <code>hooks/</code> avec les scripts :</p>
      <pre>{`mon-plugin/
  plugin.json
  main.sh
  hooks/
    pre-generate.sh     # Execute avant scaffold new
    post-generate.sh    # Execute apres scaffold new
    pre-build.sh        # Execute avant scaffold build
    post-build.sh       # Execute apres scaffold build`}</pre>
      <p>Exemple de hook <code>post-generate.sh</code> :</p>
      <pre>{`#!/bin/bash
# Execute apres la generation d'un projet
echo "Projet genere : $1"
echo "Ajout de configuration personnalisee..."
echo "CUSTOM_VAR=valeur" >> .env
echo "Configuration supplementaire ajoutee."`}</pre>

      <h2>Tester un plugin localement</h2>
      <p>Avant de publier, testez votre plugin en l'installant depuis un chemin local :</p>
      <div className="install-cmd">
        <code>scaffold plugin add ./mon-plugin</code>
        <button className="btn-copy" onClick={() => copyText('scaffold plugin add ./mon-plugin')}>Copier</button>
      </div>

      <h2>Bonnes pratiques</h2>
      <ul>
        <li>Utilisez des noms de plugins explicites et uniques (sans espaces)</li>
        <li>Versionnez votre plugin avec des tags Git</li>
        <li>Testez votre plugin sur plusieurs shells (bash, zsh, fish)</li>
        <li>Documentez les commandes et arguments attendus dans le README</li>
        <li>Utilisez <code>scaffold plugin info</code> pour vérifier que l'installation est correcte</li>
        <li>Gérez les erreurs dans vos scripts (codes de sortie, messages d'erreur)</li>
        <li>Respectez le principe de moindre surprise : soyez cohérent avec le comportement des commandes natives</li>
      </ul>

      <h2>Structure d'un dépôt de plugin</h2>
      <pre>{`mon-plugin/
  plugin.json           # Metadonnees du plugin (obligatoire)
  main.sh               # Script principal (obligatoire)
  hooks/                # Hooks optionnels
    pre-generate.sh
    post-generate.sh
  README.md             # Documentation
  LICENSE               # Licence`}</pre>
    </div>
  )
}
