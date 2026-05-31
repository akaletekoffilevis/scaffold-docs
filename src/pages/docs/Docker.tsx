function copyText(text: string) {
  navigator.clipboard.writeText(text)
}

export default function Docker() {
  return (
    <div className="page-content">
      <h1>Docker</h1>
      <p>Scaffolder peut générer des fichiers Docker prêts à l'emploi pour vos projets.</p>

      <h2>Génération de Dockerfile</h2>
      <p>La commande <code>scaffold docker</code> crée un Dockerfile, un .dockerignore et un docker-compose.yml adaptés à votre projet.</p>

      <div className="install-cmd">
        <code>scaffold docker --type=api</code>
        <button className="btn-copy" onClick={() => copyText('scaffold docker --type=api')}>Copier</button>
      </div>

      <h3>Types disponibles</h3>
      <table>
        <thead>
          <tr><th>Type</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td><code>api</code></td><td>Projet .NET API avec Dockerfile optimisé pour AOT</td></tr>
          <tr><td><code>web</code></td><td>Projet frontend Node.js/nginx</td></tr>
          <tr><td><code>full</code></td><td>Les deux combinés avec docker-compose</td></tr>
        </tbody>
      </table>

      <h2>docker-compose</h2>
      <p>Avec le type <code>full</code>, Scaffolder génère un fichier docker-compose.yml incluant :</p>
      <ul>
        <li>Service API avec build multi-stage</li>
        <li>Service web avec nginx</li>
        <li>Base de données PostgreSQL</li>
        <li>Réseau partagé</li>
        <li>Volumes persistants</li>
      </ul>

      <h2>Multi-stage build</h2>
      <p>Les Dockerfiles générés utilisent des builds multi-stage pour minimiser la taille des images :</p>
      <ul>
        <li><strong>Stage 1 - Build :</strong> Compilation avec le SDK .NET</li>
        <li><strong>Stage 2 - Publish :</strong> Publication AOT</li>
        <li><strong>Stage 3 - Runtime :</strong> Image finale basée sur distroless (moins de 10 MB)</li>
      </ul>

      <h2>Exemple complet</h2>
      <div className="install-cmd">
        <code>scaffold new --template=webapi --name=mon-api
cd mon-api
scaffold docker --type=api
docker compose up -d</code>
        <button className="btn-copy" onClick={() => copyText('scaffold new --template=webapi --name=mon-api\ncd mon-api\nscaffold docker --type=api\ndocker compose up -d')}>Copier</button>
      </div>
    </div>
  )
}
