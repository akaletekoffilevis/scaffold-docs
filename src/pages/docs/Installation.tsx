import { useState } from 'react'
import { Link } from 'react-router-dom'

const GH = 'https://github.com/akaletekoffilevis/Scaffolder-CLI/releases/download/v2.0.0'

const ridDownload: Record<string, { label: string; url: string; ext: string }> = {
  'linux-x64':      { label: 'Linux x64',      url: `${GH}/scaffold-linux-x64.tar.gz`,      ext: '.tar.gz' },
  'linux-musl-x64': { label: 'Linux musl-x64',  url: `${GH}/scaffold-linux-musl-x64.tar.gz`, ext: '.tar.gz' },
  'linux-arm64':    { label: 'Linux arm64',     url: `${GH}/scaffold-linux-arm64.tar.gz`,    ext: '.tar.gz' },
  'osx-x64':        { label: 'macOS Intel',     url: `${GH}/scaffold-osx-x64.tar.gz`,        ext: '.tar.gz' },
  'osx-arm64':      { label: 'macOS Apple Sili',url: `${GH}/scaffold-osx-arm64.tar.gz`,      ext: '.tar.gz' },
  'win-x64':        { label: 'Windows x64',     url: `${GH}/scaffold-win-x64.tar.gz`,        ext: '.tar.gz' },
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
      cmd: `curl -L -o scaffold.tar.gz ${GH}/scaffold-win-x64.tar.gz
tar -xzf scaffold.tar.gz
scaffold version`
    }
  }

  const current = platforms[activeOs]

  return (
    <div className="page-content">
      <h1>Installation</h1>
      <p>Scaffolder est distribué sous forme de binaire unique compilé en AOT. Aucun runtime requis. Choisissez votre plateforme ci-dessous ou téléchargez directement le binaire.</p>

      <div className="tabs">
        {(['linux', 'macos', 'windows'] as const).map(os => (
          <button key={os} className={`tab${activeOs === os ? ' active' : ''}`} onClick={() => setActiveOs(os)}>
            {os === 'linux' ? 'Linux' : os === 'macos' ? 'macOS' : 'Windows'}
          </button>
        ))}
      </div>

      <div className="tab-content active">
        <h2>Téléchargement direct</h2>
        <p>Cliquez sur le binaire correspondant à votre système :</p>
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
                <span className="btn-download">Télécharger</span>
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
          <p><strong>Note :</strong> Ajoutez le dossier d'extraction à votre PATH ou déplacez <code>scaffold.exe</code> dans un dossier déjà dans le PATH.</p>
        )}
        {activeOs !== 'windows' && (
          <p><strong>Note :</strong> Le binaire est installé dans <code>/usr/local/bin/</code> et accessible depuis n'importe quel dossier.</p>
        )}

        <h3>Ajout au PATH (alternative)</h3>
        <p>Si vous préférez ne pas utiliser <code>sudo</code>, vous pouvez placer le binaire dans un dossier personnel :</p>
        <div className="install-cmd">
          <code>{`mkdir -p ~/.local/bin
mv scaffold ~/.local/bin/
echo 'export PATH="\$HOME/.local/bin:\$PATH"' >> ~/.bashrc
source ~/.bashrc`}</code>
          <button className="btn-copy" onClick={() => copyText('mkdir -p ~/.local/bin\nmv scaffold ~/.local/bin/\necho \'export PATH="$HOME/.local/bin:$PATH"\' >> ~/.bashrc\nsource ~/.bashrc')}>Copier</button>
        </div>
      </div>

      <h2>Via Homebrew (macOS / Linux)</h2>
      <p>Si vous utilisez Homebrew, installez Scaffolder en une ligne :</p>
      <div className="install-cmd">
        <code>brew tap akaletekoffilevis/scaffolder
brew install scaffold</code>
        <button className="btn-copy" onClick={() => copyText('brew tap akaletekoffilevis/scaffolder\nbrew install scaffold')}>Copier</button>
      </div>
      <p>Pour mettre à jour via Homebrew :</p>
      <div className="install-cmd">
        <code>brew upgrade scaffold</code>
        <button className="btn-copy" onClick={() => copyText('brew upgrade scaffold')}>Copier</button>
      </div>

      <h2>Via dotnet tool (recommandé pour les développeurs .NET)</h2>
      <p>Si vous avez le SDK .NET 9 installé, vous pouvez installer Scaffolder comme outil global :</p>
      <div className="install-cmd">
        <code>dotnet tool install -g Scaffolder</code>
        <button className="btn-copy" onClick={() => copyText('dotnet tool install -g Scaffolder')}>Copier</button>
      </div>
      <p>Pour mettre à jour :</p>
      <div className="install-cmd">
        <code>dotnet tool update -g Scaffolder</code>
        <button className="btn-copy" onClick={() => copyText('dotnet tool update -g Scaffolder')}>Copier</button>
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
      <p><code>scaffold version</code> affiche la version installée. <code>scaffold doctor</code> vérifie que tous les outils nécessaires sont présents (dotnet, node, cargo, git, docker, etc.).</p>

      <h2>Plateformes supportées</h2>
      <table>
        <thead>
          <tr><th>Plateforme</th><th>RID</th><th>Binaire</th></tr>
        </thead>
        <tbody>
          <tr><td>Linux x64 (glibc)</td><td>linux-x64</td><td>scaffold-linux-x64.tar.gz</td></tr>
          <tr><td>Linux x64 (musl/alpine)</td><td>linux-musl-x64</td><td>scaffold-linux-musl-x64.tar.gz</td></tr>
          <tr><td>Linux arm64 (Raspberry Pi, ARM)</td><td>linux-arm64</td><td>scaffold-linux-arm64.tar.gz</td></tr>
          <tr><td>macOS Intel</td><td>osx-x64</td><td>scaffold-osx-x64.tar.gz</td></tr>
          <tr><td>macOS Apple Silicon (M1-M4)</td><td>osx-arm64</td><td>scaffold-osx-arm64.tar.gz</td></tr>
          <tr><td>Windows x64</td><td>win-x64</td><td>scaffold-win-x64.tar.gz</td></tr>
          <tr><td>Windows x86</td><td>win-x86</td><td>scaffold-win-x86.tar.gz</td></tr>
        </tbody>
      </table>

      <h2>Mise à jour</h2>
      <p>Pour mettre à jour Scaffolder vers la dernière version :</p>
      <div className="install-cmd">
        <code>scaffold upgrade</code>
        <button className="btn-copy" onClick={() => copyText('scaffold upgrade')}>Copier</button>
      </div>
      <p>La commande détecte automatiquement votre plateforme et télécharge la bonne version. Elle gère aussi les permissions sudo si nécessaire.</p>

      <h2>Désinstallation</h2>
      <p>Pour supprimer Scaffolder :</p>
      <ul>
        <li><strong>Linux/macOS :</strong> <code>sudo rm /usr/local/bin/scaffold</code> ou supprimez-le de <code>~/.local/bin/</code></li>
        <li><strong>Windows :</strong> Supprimez <code>scaffold.exe</code> du dossier où vous l'avez extrait</li>
        <li><strong>Homebrew :</strong> <code>brew uninstall scaffold</code></li>
        <li><strong>dotnet tool :</strong> <code>dotnet tool uninstall -g Scaffolder</code></li>
      </ul>

      <p><Link to="/docs/getting-started">Suivez le guide de démarrage rapide</Link> après installation.</p>
    </div>
  )
}
