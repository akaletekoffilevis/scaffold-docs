function copyText(text: string) {
  navigator.clipboard.writeText(text)
}

export default function Plugins() {
  return (
    <div className="page-content">
      <h1>Plugins</h1>
      <p>Les plugins permettent d'étendre Scaffolder avec des fonctionnalités personnalisées. Ce sont des scripts shell exécutables.</p>

      <h2>Gestion des plugins</h2>

      <h3>Lister les plugins installés</h3>
      <div className="install-cmd">
        <code>scaffold plugin list</code>
        <button className="btn-copy" onClick={() => copyText('scaffold plugin list')}>Copier</button>
      </div>

      <h3>Ajouter un plugin</h3>
      <div className="install-cmd">
        <code>scaffold plugin add https://github.com/user/mon-plugin</code>
        <button className="btn-copy" onClick={() => copyText('scaffold plugin add https://github.com/user/mon-plugin')}>Copier</button>
      </div>

      <h3>Supprimer un plugin</h3>
      <div className="install-cmd">
        <code>scaffold plugin remove mon-plugin</code>
        <button className="btn-copy" onClick={() => copyText('scaffold plugin remove mon-plugin')}>Copier</button>
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

      <h3>Structure d'un plugin</h3>
      <p>Un plugin se compose de deux fichiers :</p>

      <h4>plugin.json</h4>
      <pre>{`{
  "name": "mon-plugin",
  "version": "1.0.0",
  "description": "Description de mon plugin",
  "commands": ["ma-commande"],
  "entry": "main.sh"
}`}</pre>

      <h4>main.sh</h4>
      <pre>{`#!/bin/bash
# Plugin Scaffolder - mon-plugin
echo "Exécution de mon-plugin"
echo "Arguments reçus: $@"`}</pre>

      <p>Rendez le script exécutable et le plugin est prêt à être distribué via Git.</p>
    </div>
  )
}
