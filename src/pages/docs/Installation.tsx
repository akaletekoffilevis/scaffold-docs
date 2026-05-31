import { useState } from 'react'
import { Link } from 'react-router-dom'

function copyText(text: string) {
  navigator.clipboard.writeText(text)
}

export default function Installation() {
  const [activeOs, setActiveOs] = useState<'linux' | 'macos' | 'windows'>('linux')

  const platforms = {
    linux: {
      rids: ['linux-x64', 'linux-musl-x64', 'linux-arm64'],
      cmd: `curl -L -o scaffold.tar.gz https://github.com/akaletekoffilevis/Scaffolder-CLI/releases/download/v2.0.0/scaffold-linux-x64.tar.gz
tar -xzf scaffold.tar.gz
sudo mv scaffold /usr/local/bin/
scaffold version`
    },
    macos: {
      rids: ['osx-x64 (Intel)', 'osx-arm64 (Apple Silicon)'],
      cmd: `curl -L -o scaffold.tar.gz https://github.com/akaletekoffilevis/Scaffolder-CLI/releases/download/v2.0.0/scaffold-osx-x64.tar.gz
tar -xzf scaffold.tar.gz
sudo mv scaffold /usr/local/bin/
scaffold version`
    },
    windows: {
      rids: ['win-x64', 'win-x86'],
      cmd: `# PowerShell (exécuter en tant qu'administrateur)
curl -L -o scaffold.zip https://github.com/akaletekoffilevis/Scaffolder-CLI/releases/download/v2.0.0/scaffold-win-x64.zip
tar -xzf scaffold.zip
scaffold version`
    }
  }

  const current = platforms[activeOs]

  return (
    <div className="page-content">
      <h1>Installation</h1>
      <p>Scaffolder est distribué sous forme de binaire unique compilé en AOT. Aucun runtime requis. Choisissez votre plateforme.</p>

      <div className="tabs">
        {(['linux', 'macos', 'windows'] as const).map(os => (
          <button key={os} className={`tab${activeOs === os ? ' active' : ''}`} onClick={() => setActiveOs(os)}>
            {os === 'linux' ? 'Linux' : os === 'macos' ? 'macOS' : 'Windows'}
          </button>
        ))}
      </div>

      <div className="tab-content active">
        <h2>Binaire pré-compilé</h2>
        <p>Téléchargez l'archive pour votre architecture :</p>
        <div className="install-cmd">
          <code>{current.cmd}</code>
          <button className="btn-copy" onClick={() => copyText(current.cmd)}>Copier</button>
        </div>

        {activeOs === 'windows' && (
          <p><strong>Note :</strong> L'installateur ajoute automatiquement Scaffolder au PATH. Utilisez <code>scaffold --help</code> directement.</p>
        )}
        {activeOs !== 'windows' && (
          <p><strong>Note :</strong> Le binaire est installé dans <code>/usr/local/bin/</code> et accessible depuis n'importe quel dossier.</p>
        )}

        <h3>Variantes disponibles</h3>
        <div className="platform-grid">
          {current.rids.map(rid => (
            <span key={rid} className="platform-btn">{rid}</span>
          ))}
        </div>
      </div>

      <h2>Installation via Homebrew (macOS / Linux)</h2>
      <p>Si vous utilisez Homebrew, c'est encore plus simple :</p>
      <div className="install-cmd">
        <code>brew tap akaletekoffilevis/scaffolder
brew install scaffold</code>
        <button className="btn-copy" onClick={() => copyText('brew tap akaletekoffilevis/scaffolder\nbrew install scaffold')}>Copier</button>
      </div>

      <h2>Compilation depuis les sources</h2>
      <p>Vous pouvez aussi compiler Scaffolder vous-même. Nécessite .NET 9 SDK :</p>
      <div className="install-cmd">
        <code>git clone https://github.com/akaletekoffilevis/Scaffolder-CLI.git
cd Scaffolder-CLI/Scaffolder
dotnet restore
dotnet publish -c Release -r linux-x64 --self-contained
./bin/Release/net9.0/linux-x64/publish/scaffold version</code>
        <button className="btn-copy" onClick={() => copyText('git clone https://github.com/akaletekoffilevis/Scaffolder-CLI.git\ncd Scaffolder-CLI/Scaffolder\ndotnet restore\ndotnet publish -c Release -r linux-x64 --self-contained\n./bin/Release/net9.0/linux-x64/publish/scaffold version')}>Copier</button>
      </div>

      <h2>Vérification</h2>
      <p>Une fois installé, vérifiez que tout fonctionne :</p>
      <div className="install-cmd">
        <code>scaffold version</code>
        <button className="btn-copy" onClick={() => copyText('scaffold version')}>Copier</button>
      </div>
      <div className="install-cmd">
        <code>scaffold doctor</code>
        <button className="btn-copy" onClick={() => copyText('scaffold doctor')}>Copier</button>
      </div>
      <p><code>scaffold version</code> affiche la version installée. <code>scaffold doctor</code> vérifie que tous les outils nécessaires sont présents.</p>

      <h2>Mise à jour</h2>
      <p>Pour mettre à jour Scaffolder vers la dernière version :</p>
      <div className="install-cmd">
        <code>scaffold upgrade</code>
        <button className="btn-copy" onClick={() => copyText('scaffold upgrade')}>Copier</button>
      </div>
      <p>La commande détecte automatiquement votre plateforme et télécharge la bonne version.</p>

      <h2>Désinstallation</h2>
      <p>Pour supprimer Scaffolder :</p>
      <ul>
        <li><strong>Linux/macOS :</strong> <code>sudo rm /usr/local/bin/scaffold</code></li>
        <li><strong>Windows :</strong> Supprimez <code>scaffold.exe</code> du dossier où vous l'avez extrait</li>
        <li><strong>Homebrew :</strong> <code>brew uninstall scaffold</code></li>
      </ul>

      <p><Link to="/docs/getting-started">Suivez le guide de démarrage rapide</Link> après installation.</p>
    </div>
  )
}
