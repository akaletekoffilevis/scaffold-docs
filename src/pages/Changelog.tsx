export default function Changelog() {
  return (
    <div className="page-content">
      <h1>Changelog</h1>

      <article>
        <h2>v2.0.0</h2>
        <p><em>Initial release</em></p>
        <p>40+ commandes, AOT natif, IA intégrée, multi-plateforme.</p>
        <ul>
          <li>Génération de projets avec templates (webapi, blazor, vite, react, next, vue, nuxt, express, nest, fastapi, django, actix, rocket, flutter, laravel, rails, go-api, console)</li>
          <li>Commande <code>stack</code> pour projets fullstack (frontend + backend + BDD)</li>
          <li>Génération de templates via IA avec <code>scaffold generate</code></li>
          <li>Reverse scaffolding : <code>scaffold template from-dir</code></li>
          <li>Workspace monorepo multi-gestionnaire (npm, dotnet, cargo)</li>
          <li>Déploiement multi-cible (Vercel, Railway, Docker, GitHub Pages)</li>
          <li>Génération Dockerfile et docker-compose</li>
          <li>Configuration GitHub (dépôt, actions CI, gitignore)</li>
          <li>Commandes IA : suggest, explain, fix</li>
          <li>Plugins shell extensibles</li>
          <li>Registry de templates (search, install, list)</li>
          <li>Compilation AOT en binaire natif (12 MB)</li>
          <li>8 plateformes supportées (linux-x64, linux-musl-x64, linux-arm64, osx-x64, osx-arm64, win-x64, win-x86, win-arm64)</li>
          <li>Auto-update intégré</li>
          <li>Auto-complétion shell (bash, zsh, fish, powershell)</li>
          <li>Génération de licences (MIT, Apache, GPL, etc.)</li>
          <li>Interface web locale : <code>scaffold ui</code></li>
          <li>Mode batch pour CI : <code>scaffold batch scaffold-batch.yml</code></li>
          <li>Mode watch pour développement : <code>scaffold watch webapi --name=mon-api --watch-dir=./src</code></li>
          <li>Audit de sécurité des templates</li>
          <li>VS Code extension generator</li>
          <li>Comparaison de templates</li>
          <li>Migration entre templates</li>
          <li>Génération de marketplace statique</li>
        </ul>
      </article>
    </div>
  )
}
