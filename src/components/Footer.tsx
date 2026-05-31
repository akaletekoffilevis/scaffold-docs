import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h4>Scaffolder</h4>
          <p>CLI universel pour generer des projets dans tous les langages.</p>
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
            <li><a href="https://github.com/akaletekoffilevis/Scaffolder-CLI" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://github.com/akaletekoffilevis/Scaffolder-CLI/issues" target="_blank" rel="noopener noreferrer">Issues</a></li>
            <li><Link to="/changelog">Changelog</Link></li>
            <li><Link to="/roadmap">Roadmap</Link></li>
          </ul>
        </div>
        <div>
          <h4>Communauté</h4>
          <ul>
            <li><Link to="/community">Communauté</Link></li>
            <li><Link to="/contributing">Contribuer</Link></li>
            <li><Link to="/about">A propos</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Construit avec .NET 9 et System.CommandLine. Site propulse par React + Vite.</p>
      </div>
    </footer>
  )
}
