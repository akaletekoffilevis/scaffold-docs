export default function Roadmap() {
  return (
    <div className="page-content">
      <h1>Roadmap</h1>
      <p>Découvrez ce qui est prévu pour les prochaines versions de Scaffolder.</p>

      <h2>Terminé <span className="done-badge">v2.3.0</span></h2>
      <ul>
        <li>Interface terminal (TUI) en plein écran : thème sombre, menu F1–F9, assistant IA intégré, catalogue auto de toutes les commandes</li>
        <li>Assistant IA contextuel : connaît le projet courant, les outils et les templates ; propose une commande que tu confirmes</li>
        <li>Interface web locale réécrite : tableau de bord, nouveau projet, stack, ajout de composants, templates, configuration, IA, statistiques</li>
        <li>Sécurité renforcée : suppression de <code>/api/run</code>, validation des noms, liste blanche des commandes, anti-CSRF</li>
        <li>Sérialisation JSON sans réflexion (AOT) pour <code>list</code>, <code>stats</code> et <code>doctor --json</code></li>
        <li>Refonte de l'assistant interactif dans <code>scaffold new</code> (filtre actif, étapes adaptées, config .NET uniquement)</li>
        <li>Les outils natifs créent eux-mêmes le dossier du projet</li>
        <li>Migration vers .NET 10 et publication AOT multi-plateforme</li>
      </ul>

      <h2>Terminé <span className="done-badge">v2.2.0</span></h2>
      <ul>
        <li>Migration vers .NET 10 (runtime, CI et publication)</li>
        <li>Assistant interactif amélioré : filtre de liste actif, étapes adaptées au parcours, récapitulatif complet</li>
        <li>Configuration auth / base de données / architecture proposée uniquement pour les web apps .NET</li>
        <li>Choix de l'assistant réellement appliqués à la génération</li>
        <li>Stack fullstack lancée directement depuis l'assistant</li>
        <li>Les outils natifs (<code>dotnet new</code>, <code>npm create</code>, <code>cargo new</code>, <code>flutter create</code>, <code>composer</code>, <code>rails new</code>, <code>mix new</code>) créent eux-mêmes le dossier du projet</li>
        <li>Composition <code>dotnet+react</code> : chaque sous-projet est créé dans son dossier</li>
        <li>Nouvelles commandes : <code>list</code>, <code>stats</code>, <code>ai</code></li>
        <li>Options globales <code>--yes</code>, <code>--no-color</code>, <code>--verbose</code>, <code>--quiet</code></li>
        <li>Sécurité : exécution des processus sans shell, configuration chiffrée, vérification SHA-256 des mises à jour</li>
      </ul>

      <h2>Prochaine version (v2.3.0)</h2>
      <ul>
        <li>Extension VS Code publiée sur le marketplace</li>
        <li>Support de GitLab CI et Jenkins dans <code>scaffold github actions</code></li>
        <li>Amélioration de l'auto-complétion avec suggestions contextuelles</li>
        <li>Mode collaboratif avec partage de templates entre équipes</li>
        <li>Interface graphique desktop avec Tauri</li>
        <li>Plus de fournisseurs IA : Mistral AI, DeepSeek, Llama 3 local</li>
        <li>Analyseur de code avec suggestions d'architecture</li>
        <li>Génération de documentation automatique pour les API</li>
        <li>Kubernetes support dans <code>scaffold deploy</code></li>
      </ul>

      <h2>Version v2.4.0</h2>
      <ul>
        <li>Support des templates CI/CD (GitHub Actions, GitLab CI, Jenkins) en une commande</li>
        <li>Marketplace de templates avec système de notation</li>
        <li>Gestion des secrets et variables d'environnement</li>
        <li>Mode offline avec cache local des templates</li>
        <li>Intégration avec les registres de conteneurs (Docker Hub, GHCR)</li>
      </ul>

      <h2>Version v3.0.0 (grande refonte)</h2>
      <ul>
        <li>Noyau modulaire avec architecture plugin-first</li>
        <li>Support des formats de template universels (Cookiecutter, Yeoman)</li>
        <li>Éditeur visuel de templates en ligne de commande</li>
        <li>Génération de projets avec interface graphique (Tauri)</li>
        <li>Support des monorepos avec détection automatique des relations</li>
        <li>Mode entreprise avec gestion des droits et audit</li>
      </ul>

      <h2>Idées à long terme</h2>
      <ul>
        <li>Assistant IA contextuel qui analyse votre code existant avant de suggérer un template</li>
        <li>Génération de documentation technique complète (Swagger, README, wiki)</li>
        <li>Détection et mise à jour automatique des templates obsolètes</li>
        <li>Plugins en plusieurs langages (pas seulement shell)</li>
        <li>Support des architectures microservices avec génération de code de communication</li>
      </ul>

      <h2>Terminé <span className="done-badge">v2.1.0</span></h2>
      <ul>
        <li>Assistant interactif type Vite pour <code>scaffold new</code> (4 étapes, validation, résumé, spinner)</li>
        <li>Message post-génération adapté au template (npm run dev, cargo run, flutter run…)</li>
        <li>Correction bugs : --fav, parsing JSON, stack wizard, fallback code 42</li>
        <li>40+ commandes couvrant tout le cycle de vie d'un projet</li>
        <li>Compilation AOT en binaire natif ~12 MB</li>
        <li>Auto-update intégré avec détection de plateforme</li>
        <li>Déploiement multi-cible (Vercel, Railway, Docker, GitHub Pages)</li>
        <li>IA intégrée (OpenAI, Claude, Gemini, Grok)</li>
        <li>Plugins shell extensibles avec structure plugin.json</li>
        <li>Registry de templates avec recherche et installation</li>
        <li>Workspace monorepo (npm, dotnet, cargo)</li>
        <li>7 plateformes supportées</li>
        <li>Auto-complétion shell (bash, zsh, fish, powershell)</li>
        <li>Site de documentation complet avec 18 pages</li>
        <li>Génération de marketplace statique</li>
        <li>Génération d'extensions VS Code</li>
        <li>Homebrew tap (communauté)</li>
      </ul>

      <p>Une suggestion ? Envoyez un email à <a href="mailto:koffilevis21@gmail.com">koffilevis21@gmail.com</a> ou ouvrez une <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI/issues" target="_blank" rel="noopener noreferrer">issue GitHub</a>.</p>
    </div>
  )
}
