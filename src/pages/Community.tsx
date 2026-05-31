import { Link } from 'react-router-dom'

export default function Community() {
  return (
    <div className="page-content">
      <h1>Communauté</h1>
      <p>Rejoignez la communauté Scaffolder et contribuez au projet. Que vous soyez développeur, designer, ou passionné, votre participation est la bienvenue.</p>

      <h2>Où nous trouver</h2>
      <div className="grid">
        <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI" target="_blank" rel="noopener noreferrer" className="card" style={{ textDecoration: 'none' }}>
          <h3>Dépôt GitHub</h3>
          <p>Code source, releases, et documentation technique. Suivez le développement en direct.</p>
        </a>
        <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI/issues" target="_blank" rel="noopener noreferrer" className="card" style={{ textDecoration: 'none' }}>
          <h3>Issues</h3>
          <p>Signalez des bugs, proposez des fonctionnalités, suivez le développement.</p>
        </a>
        <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI/discussions" target="_blank" rel="noopener noreferrer" className="card" style={{ textDecoration: 'none' }}>
          <h3>Discussions GitHub</h3>
          <p>Posez des questions, partagez vos projets, échangez avec la communauté.</p>
        </a>
        <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="card" style={{ textDecoration: 'none' }}>
          <h3>Guide de contribution</h3>
          <p>Comment contribuer au projet : code, documentation, templates, plugins.</p>
        </a>
      </div>

      <h2>Contact</h2>
      <p>Pour toute question, suggestion ou rapport de bug, vous pouvez :</p>
      <ul>
        <li>Ouvrir une <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI/issues" target="_blank" rel="noopener noreferrer">issue GitHub</a></li>
        <li>Rejoindre les <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI/discussions" target="_blank" rel="noopener noreferrer">discussions GitHub</a></li>
        <li>Envoyer un email à <a href="mailto:koffilevis21@gmail.com">koffilevis21@gmail.com</a></li>
        <li>Utiliser la commande <code>scaffold bug</code> dans le terminal</li>
      </ul>

      <h2>Bonnes pratiques communautaires</h2>
      <ul>
        <li>Soyez respectueux et inclusif dans vos échanges</li>
        <li>Cherchez dans les issues existantes avant d'en ouvrir une nouvelle</li>
        <li>Fournissez un maximum de contexte dans vos rapports de bug</li>
        <li>Partagez vos templates et plugins avec la communauté</li>
      </ul>

      <p><Link to="/contributing">Envie de contribuer ? Consultez notre guide.</Link></p>
    </div>
  )
}
