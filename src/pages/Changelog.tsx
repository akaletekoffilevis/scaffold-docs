export default function Changelog() {
  return (
    <div className="page-content">
      <h1>Changelog</h1>

      <article>
        <h2>v2.5.0</h2>
        <p><em>9 novembre 2026</em></p>
        <p>TUI amélioré (bordures arrondies, icônes), documentation complète, open source.</p>
        <ul>
          <li>Bordures arrondies et icônes dans le TUI pour un look plus moderne</li>
          <li>Documentation open source complète (README, LICENSE, CONTRIBUTING, SECURITY)</li>
          <li>Site de documentation refondu (design, SEO, i18n FR/EN)</li>
          <li>Tous les liens de téléchargement pointent vers la dernière version</li>
        </ul>
      </article>

      <article>
        <h2>v2.4.0</h2>
        <p><em>9 novembre 2026</em></p>
        <p>Installation auto des outils, page Commandes web, thème TUI, plus de fournisseurs IA, Kubernetes deploy.</p>
        <ul>
          <li>Installation automatique des outils manquants (dotnet, node, cargo, go, python, flutter, composer, git, docker, gh) selon l'OS</li>
          <li>Page web « Commandes » générée automatiquement depuis le catalogue CLI</li>
          <li>Thème clair/sombre dans le TUI, page de configuration enrichie</li>
          <li>Nouveaux fournisseurs IA : Mistral AI, DeepSeek</li>
          <li>Support Kubernetes dans <code>scaffold deploy</code> (manifests Deployment/Service/Ingress)</li>
          <li>Page web « Projet » dans le TUI (run, build, test, clean, info, lint, format)</li>
          <li>RootFactory et CliCatalog partagés entre CLI, TUI et web</li>
        </ul>
      </article>

      <article>
        <h2>v2.3.0</h2>
        <p><em>7 novembre 2026</em></p>
        <p>Interface terminal (TUI) complète, assistant IA contextuel, interface web réécrite, sécurité renforcée.</p>
        <ul>
          <li>Interface terminal plein écran (Terminal.Gui) : thème sombre, menu F1–F9, assistant IA intégré, catalogue auto de toutes les commandes</li>
          <li>Assistant IA contextuel : connaît le projet courant, les outils et les templates ; propose une commande que tu confirmes</li>
          <li>Interface web locale réécrite : tableau de bord, nouveau projet, stack, ajout de composants, templates, configuration, IA, statistiques</li>
          <li>Sécurité renforcée : suppression de <code>/api/run</code>, validation des noms, liste blanche des commandes, anti-CSRF</li>
          <li>Sérialisation JSON sans réflexion (AOT) pour <code>list</code>, <code>stats</code> et <code>doctor --json</code></li>
        </ul>
      </article>

      <article>
        <h2>v2.2.0</h2>
        <p><em>6 novembre 2026</em></p>
        <p>Migration .NET 10, assistant interactif revu, nouvelles commandes et durcissement du cœur.</p>
        <ul>
          <li>Migration vers .NET 10 (runtime, workflows CI, scripts de publication)</li>
          <li>Assistant interactif : filtre de liste actif (<em>tapez pour filtrer</em>), étapes adaptées au parcours, récapitulatif complet</li>
          <li>Configuration auth / base de données / architecture proposée uniquement pour <code>webapi</code> et <code>blazor</code></li>
          <li>Correction : les choix faits dans l'assistant sont maintenant appliqués à la génération</li>
          <li>Correction : « Stack fullstack » lance l'assistant stack au lieu d'afficher une commande à copier</li>
          <li>Correction : la composition <code>dotnet+react</code> et la stack créent les dossiers avant de lancer les outils natifs</li>
          <li>Correction : le spinner ne se superpose plus à la sortie des outils natifs</li>
          <li>Les outils natifs créent eux-mêmes le dossier du projet (<code>dotnet new</code>, <code>npm create</code>, <code>cargo new</code>, <code>flutter create</code>, <code>composer create-project</code>, <code>rails new</code>, <code>mix new</code>)</li>
          <li>Stack : le backend <code>express</code> est retiré (non pris en charge)</li>
          <li>Nouvelles commandes : <code>scaffold list</code>, <code>scaffold stats</code>, <code>scaffold ai</code></li>
          <li>Options globales : <code>--yes</code>, <code>--no-color</code>, <code>--verbose</code>, <code>--quiet</code></li>
          <li>Sécurité : processus sans injection shell, timeout et arrêt de l'arbre de processus, configuration chiffrée (AES-GCM), vérification SHA-256 des mises à jour</li>
        </ul>
      </article>

      <article>
        <h2>v2.1.0</h2>
        <p><em>13 juin 2026</em></p>
        <p>Assistant interactif nouvelle génération, correction de bugs, message post-génération adapté.</p>
        <ul>
          <li>Assistant interactif type Vite pour <code>scaffold new</code> : étapes [1/4] à [4/4], validation du nom, résumé + confirmation, spinner de génération</li>
          <li>Message post-génération adapté au template : <code>npm run dev</code>, <code>cargo run</code>, <code>go run .</code>, <code>flutter run</code>, etc.</li>
          <li>Correction <code>--fav</code> : devient un vrai flag booléen (était ignoré)</li>
          <li>Parsing JSON robuste : <code>ConfigCommand</code> et <code>ConfigService</code> utilisent <code>JsonSerializer</code> au lieu de <code>Split(':')</code></li>
          <li>Assistant stack : déclenchement quand un seul argument est manquant (pas seulement <code>--name</code>)</li>
          <li>Fallback Hello World : retourne code 42 (warning) au lieu de 0</li>
          <li>URL logo corrigée : <code>anomalyco/scaffolder</code> → <code>akaletekoffilevis/Scaffolder-CLI</code></li>
          <li>Plus de <code>Environment.Exit()</code> — annulation propre par retour de valeur</li>
          <li>Alias <code>-v</code> pour <code>--version</code> (root command)</li>
          <li><code>--version</code> aligné sur le format <code>-v</code> : affiche <code>Scaffolder vX.Y.Z+commit</code></li>
          <li><code>StepHeader</code> corrigé : les crochets <code>[1/4]</code> ne sont plus interprétés comme du markup Spectre.Console</li>
          <li><code>GetFavTemplate</code> AOT-safe : utilise <code>JsonContext</code> source-generation — 0 warning IL</li>
          <li><code>UpdateService</code> : permission check corrigé (temp file au lieu d'ouvrir le binaire en cours d'exécution)</li>
          <li>40+ commandes testées sans crash (intégration validée)</li>
        </ul>
      </article>

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
          <li>Interface web locale (<code>scaffold ui</code>)</li>
          <li>Mode batch pour CI (<code>scaffold batch</code>)</li>
          <li>Mode watch pour développement</li>
          <li>Auto-complétion shell (bash, zsh, fish, powershell)</li>
          <li>Compilation AOT en binaire natif ~12 MB</li>
          <li>7 plateformes supportées (linux-x64, linux-musl-x64, linux-arm64, osx-x64, osx-arm64, win-x64, win-x86)</li>
          <li>CI GitHub Actions avec build automatique sur tag v*</li>
          <li>Site de documentation complet avec 18 pages</li>
          <li>Homebrew tap (communauté)</li>
          <li>.NET 10 avec System.CommandLine 2.0.8, zéro warning</li>
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
          <li>Compilation AOT avec .NET 10</li>
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
