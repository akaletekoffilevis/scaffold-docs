export default function Community() {
  return (
    <div className="page-content">
      <h1>Communauté</h1>
      <p>Rejoignez la communauté Scaffolder et contribuez au projet.</p>

      <div className="grid">
        <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI" target="_blank" rel="noopener noreferrer" className="card" style={{ textDecoration: 'none' }}>
          <h3>Dépôt GitHub</h3>
          <p>Code source, releases, et documentation technique.</p>
        </a>
        <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI/issues" target="_blank" rel="noopener noreferrer" className="card" style={{ textDecoration: 'none' }}>
          <h3>Issues</h3>
          <p>Signalez des bugs, proposez des fonctionnalités, suivez le développement.</p>
        </a>
        <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI/discussions" target="_blank" rel="noopener noreferrer" className="card" style={{ textDecoration: 'none' }}>
          <h3>Discussions</h3>
          <p>Posez des questions, partagez vos projets, échangez avec la communauté.</p>
        </a>
        <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="card" style={{ textDecoration: 'none' }}>
          <h3>Guide de contribution</h3>
          <p>Comment contribuer au projet : code, documentation, templates, plugins.</p>
        </a>
      </div>
    </div>
  )
}
