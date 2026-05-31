export default function Changelog() {
  return (
    <div className="page-content">
      <h1>Changelog</h1>

      <article>
        <h2>v2.0.0</h2>
        <p><em>31 mai 2026</em></p>
        <p>Refonte complète avec 40+ commandes, AOT natif, IA intégrée, site de documentation.</p>
        <ul>
          <li>Génération de projets avec 18 templates (webapi, blazor, vite, react, next, vue, nuxt, express, nest, fastapi, django, actix, rocket, flutter, laravel, rails, go-api, console)</li>
          <li>Commande <code>stack</code> pour projets fullstack (frontend + backend + BDD)</li>
          <li>Génération de templates via IA avec <code>scaffold generate</code></li>
          <li>Reverse scaffolding : <code>scaffold template from-dir</code></li>
          <li>Workspace monorepo multi-gestionnaire (npm, dotnet, cargo)</li>
          <li>Déploiement multi-cible : Vercel, Railway, Docker, GitHub Pages</li>
          <li>Génération Dockerfile et docker-compose multi-stage</li>
          <li>Configuration GitHub (dépôt, actions CI, gitignore)</li>
          <li>Commandes IA : suggest, explain, fix</li>
          <li>Plugins shell extensibles</li>
          <li>Registry de templates (search, install, list)</li>
          <li>Auto-update avec détection RID</li>
          <li>Mise à jour des dépendances (npm, NuGet, Cargo, Go, pip)</li>
          <li>Génération de marketplace statique (<code>scaffold store</code>)</li>
          <li>Génération d'extensions VS Code</li>
          <li>Génération de licences (MIT, Apache, GPL, etc.)</li>
          <li>Interface web locale (<code>scaffold ui</code>)</li>
          <li>Mode batch pour CI (<code>scaffold batch</code>)</li>
          <li>Mode watch pour développement</li>
          <li>Auto-complétion shell (bash, zsh, fish, powershell)</li>
          <li>Compilation AOT en binaire natif ~12 MB</li>
          <li>7 plateformes supportées (linux-x64, linux-musl-x64, linux-arm64, osx-x64, osx-arm64, win-x64, win-x86)</li>
          <li>CI GitHub Actions avec build automatique sur tag v*</li>
          <li>Site de documentation complet avec 18 pages</li>
          <li>Homebrew tap officiel</li>
          <li>.NET 9 avec System.CommandLine 2.0.8, zéro warning</li>
        </ul>
      </article>

      <article>
        <h2>v1.5.0</h2>
        <p><em>15 avril 2026</em></p>
        <ul>
          <li>Ajout du registry de templates communautaire</li>
          <li>Commande <code>scaffold generate</code> avec IA</li>
          <li>Support de l'auto-complétion shell (bash, zsh, fish, powershell)</li>
          <li>Génération de marketplace statique HTML</li>
          <li>Comparaison de templates côte à côte</li>
          <li>Migration entre templates</li>
        </ul>
      </article>

      <article>
        <h2>v1.4.0</h2>
        <p><em>10 mars 2026</em></p>
        <ul>
          <li>Commande <code>scaffold workspace</code> pour monorepo</li>
          <li>Support de npm workspaces, solutions .NET, Cargo workspaces</li>
          <li>Mode watch pour développement</li>
          <li>Mode batch pour CI</li>
          <li>Commande <code>scaffold doctor</code> pour diagnostiquer l'environnement</li>
        </ul>
      </article>

      <article>
        <h2>v1.3.0</h2>
        <p><em>20 janvier 2026</em></p>
        <ul>
          <li>Commande <code>scaffold deploy</code> multi-cible (Vercel, Railway, Docker, GitHub Pages)</li>
          <li>Génération Dockerfile et docker-compose</li>
          <li>Commande <code>scaffold docker</code> avec builds multi-stage</li>
          <li>Configuration GitHub : <code>scaffold github init</code>, <code>scaffold github actions</code></li>
          <li>Génération d'environnement (.env, .env.example)</li>
        </ul>
      </article>

      <article>
        <h2>v1.2.0</h2>
        <p><em>1 décembre 2025</em></p>
        <ul>
          <li>Nouveaux templates : actix, rocket, flutter, laravel, rails, go-api</li>
          <li>Commande <code>scaffold stack</code> pour projets fullstack</li>
          <li>Génération de licences (10 types)</li>
          <li>Auto-update intégré</li>
          <li>Génération VS Code extension</li>
        </ul>
      </article>

      <article>
        <h2>v1.1.0</h2>
        <p><em>15 octobre 2025</em></p>
        <ul>
          <li>Support des templates composés (webapi+react)</li>
          <li>Menu interactif pour <code>scaffold new</code> sans arguments</li>
          <li>Templates : vue, nuxt, express, nest</li>
          <li>Commande <code>scaffold info</code></li>
          <li>Commande <code>scaffold update-deps</code></li>
        </ul>
      </article>

      <article>
        <h2>v1.0.0</h2>
        <p><em>1 septembre 2025</em></p>
        <ul>
          <li>Première version stable</li>
          <li>10 commandes essentielles : new, build, test, run, clean, lint, format, config, upgrade, bug</li>
          <li>Templates : webapi, blazor, vite, react, next, fastapi, django, console, hello</li>
          <li>Compilation AOT avec .NET 9</li>
          <li>4 plateformes : linux-x64, osx-x64, win-x64</li>
          <li>Site de documentation basique</li>
        </ul>
      </article>

      <article>
        <h2>v0.9.0</h2>
        <p><em>1 août 2025</em></p>
        <ul>
          <li>Bêta publique</li>
          <li>Commandes de base fonctionnelles</li>
          <li>Templates hello pour 10 langages</li>
          <li>Auto-complétion de base</li>
        </ul>
      </article>

      <article>
        <h2>v0.5.0</h2>
        <p><em>15 juin 2025</em></p>
        <ul>
          <li>Première version alpha publique</li>
          <li>Commande <code>scaffold new</code> avec 3 templates</li>
          <li>Architecture de base avec System.CommandLine</li>
        </ul>
      </article>

      <article>
        <h2>v0.1.0</h2>
        <p><em>1 mai 2025</em></p>
        <ul>
          <li>Première ébauche du projet</li>
          <li>Structure de projet .NET avec System.CommandLine</li>
          <li>Commande <code>scaffold new hello</code></li>
        </ul>
      </article>
    </div>
  )
}
