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

      <p>Un plugin se compose de deux fichiers :</p>

      <h3>plugin.json</h3>
      <p>Métadonnées du plugin :</p>
      <pre>{`{
  "name": "mon-plugin",
  "version": "1.0.0",
  "description": "Description de mon plugin",
  "commands": ["ma-commande"],
  "entry": "main.sh"
}`}</pre>

      <h3>main.sh</h3>
      <p>Script exécutable principal :</p>
      <pre>{`#!/bin/bash
# Plugin Scaffolder - mon-plugin
echo "Execution de mon-plugin"
echo "Arguments recus: $@"`}</pre>

      <p>Rendez le script exécutable (<code>chmod +x main.sh</code>) et push sur Git. Le plugin est prêt à être distribué.</p>

      <h2>Bonnes pratiques</h2>
      <ul>
        <li>Utilisez des noms de plugins explicites et uniques</li>
        <li>Versionnez votre plugin (le champ <code>version</code> dans plugin.json)</li>
        <li>Testez votre plugin sur plusieurs shells (bash, zsh)</li>
        <li>Documentez les commandes et arguments attendus</li>
        <li>Utilisez <code>scaffold plugin info</code> pour vérifier que l'installation est correcte</li>
      </ul>

      <h2>Structure d'un dépôt de plugin</h2>
      <pre>{`mon-plugin/
  plugin.json
  main.sh
  README.md`}</pre>
    </div>
  )
}
