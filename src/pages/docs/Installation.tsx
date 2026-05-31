import { useState } from 'react'
import { Link } from 'react-router-dom'

const GH = 'https://github.com/akaletekoffilevis/Scaffolder-CLI/releases/download/v2.0.0'

const ridDownload: Record<string, { label: string; url: string; ext: string }> = {
  'linux-x64':      { label: 'Linux x64',      url: `${GH}/scaffold-linux-x64.tar.gz`,      ext: '.tar.gz' },
  'linux-musl-x64': { label: 'Linux musl-x64',  url: `${GH}/scaffold-linux-musl-x64.tar.gz`, ext: '.tar.gz' },
  'linux-arm64':    { label: 'Linux arm64',     url: `${GH}/scaffold-linux-arm64.tar.gz`,    ext: '.tar.gz' },
  'osx-x64':        { label: 'macOS Intel',     url: `${GH}/scaffold-osx-x64.tar.gz`,        ext: '.tar.gz' },
  'osx-arm64':      { label: 'macOS Apple Sili',url: `${GH}/scaffold-osx-arm64.tar.gz`,      ext: '.tar.gz' },
  'win-x64':        { label: 'Windows x64',     url: `${GH}/scaffold-win-x64.zip`,           ext: '.zip' },
  'win-x86':        { label: 'Windows x86',     url: `${GH}/scaffold-win-x86.tar.gz`,        ext: '.tar.gz' },
}

function copyText(text: string) {
  navigator.clipboard.writeText(text)
}

export default function Installation() {
  const [activeOs, setActiveOs] = useState<'linux' | 'macos' | 'windows'>('linux')

  const platforms = {
    linux: {
      rids: ['linux-x64', 'linux-musl-x64', 'linux-arm64'],
      cmd: `curl -L -o scaffold.tar.gz ${GH}/scaffold-linux-x64.tar.gz
tar -xzf scaffold.tar.gz
sudo mv scaffold /usr/local/bin/
scaffold version`
    },
    macos: {
      rids: ['osx-x64', 'osx-arm64'],
      cmd: `curl -L -o scaffold.tar.gz ${GH}/scaffold-osx-x64.tar.gz
tar -xzf scaffold.tar.gz
sudo mv scaffold /usr/local/bin/
scaffold version`
    },
    windows: {
      rids: ['win-x64', 'win-x86'],
      cmd: `# PowerShell (administrateur)
curl -L -o scaffold.zip ${GH}/scaffold-win-x64.zip
tar -xzf scaffold.zip
scaffold version`
    }
  }

  const current = platforms[activeOs]

  return (
    <div className="page-content">
      <h1>Installation</h1>
      <p>Scaffolder est distribue sous forme de binaire unique compile en AOT. Aucun runtime requis. Choisissez votre plateforme ci-dessous ou telechargez directement le binaire.</p>

      <div className="tabs">
        {(['linux', 'macos', 'windows'] as const).map(os => (
          <button key={os} className={`tab${activeOs === os ? ' active' : ''}`} onClick={() => setActiveOs(os)}>
            {os === 'linux' ? 'Linux' : os === 'macos' ? 'macOS' : 'Windows'}
          </button>
        ))}
      </div>

      <div className="tab-content active">
        <h2>Telechargement direct</h2>
        <p>Cliquez sur le binaire correspondant a votre systeme :</p>
        <div className="download-grid">
          {current.rids.map(rid => {
            const d = ridDownload[rid]
            if (!d) return null
            return (
              <a key={rid} href={d.url} className="download-card" download>
                <div className="download-icon">
                  {activeOs === 'linux' ? '🐧' : activeOs === 'macos' ? '🍎' : '🪟'}
                </div>
                <div className="download-info">
                  <strong>{d.label}</strong>
                  <span className="download-ext">{d.ext}</span>
                </div>
                <span className="btn-download">Telecharger</span>
              </a>
            )
          })}
        </div>

        <h2>Ou via la ligne de commande</h2>
        <div className="install-cmd">
          <code>{current.cmd}</code>
          <button className="btn-copy" onClick={() => copyText(current.cmd)}>Copier</button>
        </div>

        {activeOs === 'windows' && (
          <p><strong>Note :</strong> L'installateur ajoute automatiquement Scaffolder au PATH. Utilisez <code>scaffold --help</code> directement.</p>
        )}
        {activeOs !== 'windows' && (
          <p><strong>Note :</strong> Le binaire est installe dans <code>/usr/local/bin/</code> et accessible depuis n'importe quel dossier.</p>
        )}
      </div>

      <h2>Installation via Homebrew (macOS / Linux)</h2>
      <p>Si vous utilisez Homebrew, c'est encore plus simple :</p>
      <div className="install-cmd">
        <code>brew tap akaletekoffilevis/scaffolder
brew install scaffold</code>
        <button className="btn-copy" onClick={() => copyText('brew tap akaletekoffilevis/scaffolder\nbrew install scaffold')}>Copier</button>
      </div>

      <h2>Compilation depuis les sources</h2>
      <p>Vous pouvez aussi compiler Scaffolder vous-meme. Necessite .NET 9 SDK :</p>
      <div className="install-cmd">
        <code>git clone https://github.com/akaletekoffilevis/Scaffolder-CLI.git
cd Scaffolder-CLI/Scaffolder
dotnet restore
dotnet publish -c Release -r linux-x64 --self-contained
./bin/Release/net9.0/linux-x64/publish/scaffold version</code>
        <button className="btn-copy" onClick={() => copyText('git clone https://github.com/akaletekoffilevis/Scaffolder-CLI.git\ncd Scaffolder-CLI/Scaffolder\ndotnet restore\ndotnet publish -c Release -r linux-x64 --self-contained\n./bin/Release/net9.0/linux-x64/publish/scaffold version')}>Copier</button>
      </div>

      <h2>Verification</h2>
      <p>Une fois installe, verifiez que tout fonctionne :</p>
      <div className="install-cmd">
        <code>scaffold version</code>
        <button className="btn-copy" onClick={() => copyText('scaffold version')}>Copier</button>
      </div>
      <div className="install-cmd">
        <code>scaffold doctor</code>
        <button className="btn-copy" onClick={() => copyText('scaffold doctor')}>Copier</button>
      </div>
      <p><code>scaffold version</code> affiche la version installée. <code>scaffold doctor</code> verifie que tous les outils necessaires sont presents.</p>

      <h2>Mise a jour</h2>
      <p>Pour mettre a jour Scaffolder vers la derniere version :</p>
      <div className="install-cmd">
        <code>scaffold upgrade</code>
        <button className="btn-copy" onClick={() => copyText('scaffold upgrade')}>Copier</button>
      </div>
      <p>La commande detecte automatiquement votre plateforme et telecharge la bonne version.</p>

      <h2>Desinstallation</h2>
      <p>Pour supprimer Scaffolder :</p>
      <ul>
        <li><strong>Linux/macOS :</strong> <code>sudo rm /usr/local/bin/scaffold</code></li>
        <li><strong>Windows :</strong> Supprimez <code>scaffold.exe</code> du dossier ou vous l'avez extrait</li>
        <li><strong>Homebrew :</strong> <code>brew uninstall scaffold</code></li>
      </ul>

      <p><Link to="/docs/getting-started">Suivez le guide de demarrage rapide</Link> apres installation.</p>
    </div>
  )
}
