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
scaffold --help`
    },
    macos: {
      rids: ['osx-x64 (Intel)', 'osx-arm64 (Apple Silicon)'],
      cmd: `curl -L -o scaffold.tar.gz https://github.com/akaletekoffilevis/Scaffolder-CLI/releases/download/v2.0.0/scaffold-osx-x64.tar.gz
tar -xzf scaffold.tar.gz
sudo mv scaffold /usr/local/bin/
scaffold --help`
    },
    windows: {
      rids: ['win-x64', 'win-x86', 'win-arm64'],
      cmd: `# PowerShell (exécuter en tant qu'administrateur)
curl -L -o scaffold.zip https://github.com/akaletekoffilevis/Scaffolder-CLI/releases/download/v2.0.0/scaffold-win-x64.zip
tar -xzf scaffold.zip
scaffold --help`
    }
  }

  const current = platforms[activeOs]

  return (
    <div className="page-content">
      <h1>Installation</h1>

      <div className="tabs">
        {(['linux', 'macos', 'windows'] as const).map(os => (
          <button key={os} className={`tab${activeOs === os ? ' active' : ''}`} onClick={() => setActiveOs(os)}>
            {os === 'linux' ? 'Linux' : os === 'macos' ? 'macOS' : 'Windows'}
          </button>
        ))}
      </div>

      <div className="tab-content active">
        <p>Téléchargez et installez le binaire pour votre plateforme :</p>
        <div className="install-cmd">
          <code>{current.cmd}</code>
          <button className="btn-copy" onClick={() => copyText(current.cmd)}>Copier</button>
        </div>
        {activeOs === 'windows' && (
          <p><strong>Note :</strong> L'installateur ajoute automatiquement Scaffolder au PATH. Utilisez <code>scaffold --help</code> directement (pas <code>./scaffold --help</code>).</p>
        )}
        <div className="platform-grid">
          {current.rids.map(rid => (
            <span key={rid} className="platform-btn">{rid}</span>
          ))}
        </div>
      </div>

      <h2>Homebrew (macOS / Linux)</h2>
      <div className="install-cmd">
        <code>brew tap akaletekoffilevis/scaffolder
brew install scaffold</code>
        <button className="btn-copy" onClick={() => copyText('brew tap akaletekoffilevis/scaffolder\nbrew install scaffold')}>Copier</button>
      </div>

      <h2>Vérification</h2>
      <div className="install-cmd">
        <code>scaffold --version</code>
        <button className="btn-copy" onClick={() => copyText('scaffold --version')}>Copier</button>
      </div>
      <p>Vous devriez voir la version installée. Ensuite, suivez le <Link to="/docs/getting-started">guide de démarrage rapide</Link>.</p>
    </div>
  )
}
