import { Link } from 'react-router-dom'
import { Download, ExternalLink, Heart } from 'lucide-react'

const downloads = [
  { label: 'Linux x64', file: 'scaffold-linux-x64.tar.gz' },
  { label: 'Linux musl', file: 'scaffold-linux-musl-x64.tar.gz' },
  { label: 'Linux ARM64', file: 'scaffold-linux-arm64.tar.gz' },
  { label: 'macOS x64', file: 'scaffold-osx-x64.tar.gz' },
  { label: 'macOS ARM64', file: 'scaffold-osx-arm64.tar.gz' },
  { label: 'Windows x64', file: 'scaffold-win-x64.tar.gz' },
  { label: 'Windows x86', file: 'scaffold-win-x86.tar.gz' },
]

const GH_RELEASE = 'https://github.com/akaletekoffilevis/Scaffolder-CLI/releases/latest/download'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h4>Scaffolder</h4>
          <p>CLI universel pour g&eacute;n&eacute;rer des projets dans tous les langages.</p>
          <div className="footer-downloads">
            <h5>T&eacute;l&eacute;charger (derni&egrave;re version)</h5>
            <div className="footer-download-list">
              {downloads.map(d => (
                <a key={d.file} href={`${GH_RELEASE}/${d.file}`} className="footer-download-link">
                  <Download size={12} /> {d.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h4>Documentation</h4>
          <ul>
            <li><Link to="/docs">Introduction</Link></li>
            <li><Link to="/docs/installation">Installation</Link></li>
            <li><Link to="/docs/commands">Commandes</Link></li>
            <li><Link to="/docs/templates">Templates</Link></li>
          </ul>
        </div>
        <div>
          <h4>Liens</h4>
          <ul>
            <li><a href="https://github.com/akaletekoffilevis/Scaffolder-CLI" target="_blank" rel="noopener noreferrer"><ExternalLink size={14} /> GitHub</a></li>
            <li><a href="https://github.com/akaletekoffilevis/Scaffolder-CLI/issues" target="_blank" rel="noopener noreferrer">Issues</a></li>
            <li><Link to="/changelog">Changelog</Link></li>
            <li><Link to="/roadmap">Roadmap</Link></li>
          </ul>
        </div>
        <div>
          <h4>Communaut&eacute;</h4>
          <ul>
            <li><Link to="/community">Communaut&eacute;</Link></li>
            <li><Link to="/contributing">Contribuer</Link></li>
            <li><Link to="/about">A propos</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Construit avec .NET 10 et System.CommandLine. Site propuls&eacute; par React + Vite. <Heart size={12} className="heart" /></p>
      </div>
    </footer>
  )
}
