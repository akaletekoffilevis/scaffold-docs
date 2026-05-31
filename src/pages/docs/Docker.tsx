function copyText(text: string) {
  navigator.clipboard.writeText(text)
}

export default function Docker() {
  return (
    <div className="page-content">
      <h1>Docker</h1>
      <p>Scaffolder peut générer des fichiers Docker prêts à l'emploi pour vos projets : Dockerfile optimisé, .dockerignore et docker-compose.yml.</p>

      <h2>Types de génération</h2>
      <p>La commande <code>scaffold docker</code> crée des fichiers adaptés au type de projet :</p>
      <table>
        <thead>
          <tr><th>Type</th><th>Description</th><th>Contenu</th></tr>
        </thead>
        <tbody>
          <tr><td><code>api</code></td><td>Projet .NET API</td><td>Dockerfile multi-stage avec AOT, .dockerignore</td></tr>
          <tr><td><code>web</code></td><td>Projet frontend Node.js</td><td>Dockerfile nginx multi-stage pour build + serveur statique</td></tr>
          <tr><td><code>full</code></td><td>API + Frontend combinés</td><td>Dockerfiles + docker-compose.yml + PostgreSQL + réseau</td></tr>
        </tbody>
      </table>

      <h2>Utilisation</h2>
      <div className="install-cmd">
        <code>scaffold docker --type=api</code>
        <button className="btn-copy" onClick={() => copyText('scaffold docker --type=api')}>Copier</button>
      </div>

      <h2>Architecture multi-stage</h2>
      <p>Les Dockerfiles générés utilisent un build multi-stage pour minimiser la taille des images :</p>
      <h3>Stage 1 - Build</h3>
      <p>Compilation avec le SDK .NET 9 complet. Tous les outils de build sont disponibles.</p>
      <h3>Stage 2 - Publish</h3>
      <p>Publication AOT avec <code>dotnet publish</code>. Le binaire natif est produit.</p>
      <h3>Stage 3 - Runtime</h3>
      <p>Image finale basée sur <code>distroless</code> (moins de 10 MB). Aucun SDK, seulement le binaire.</p>

      <h2>docker-compose (type full)</h2>
      <p>Avec le type <code>full</code>, Scaffolder génère un fichier <code>docker-compose.yml</code> incluant :</p>
      <ul>
        <li><strong>Service API</strong> : build multi-stage avec .NET 9 AOT</li>
        <li><strong>Service web</strong> : nginx servant les fichiers statiques du frontend</li>
        <li><strong>Base de données</strong> : PostgreSQL avec volume persistant</li>
        <li><strong>Réseau</strong> : réseau partagé entre les services</li>
        <li><strong>Volumes</strong> : volumes persistants pour la BDD</li>
      </ul>

      <h2>Exemple complet</h2>
      <p>Génération d'un projet API REST avec Docker :</p>
      <div className="install-cmd">
        <code>scaffold new --template=webapi --name=mon-api
cd mon-api
scaffold docker --type=api
docker compose up -d</code>
        <button className="btn-copy" onClick={() => copyText('scaffold new --template=webapi --name=mon-api\ncd mon-api\nscaffold docker --type=api\ndocker compose up -d')}>Copier</button>
      </div>

      <h2>Fichiers générés</h2>
      <table>
        <thead>
          <tr><th>Fichier</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td><code>Dockerfile</code></td><td>Build multi-stage optimisé pour le type de projet</td></tr>
          <tr><td><code>.dockerignore</code></td><td>Exclut bin/, obj/, node_modules/, .git/</td></tr>
          <tr><td><code>docker-compose.yml</code></td><td>Orchestration complète (type full uniquement)</td></tr>
        </tbody>
      </table>
    </div>
  )
}
