export default function Roadmap() {
  return (
    <div className="page-content">
      <h1>Roadmap</h1>
      <p>Découvrez ce qui est prévu pour les prochaines versions de Scaffolder.</p>

      <h2>Prochaine version (v2.1.0)</h2>
      <ul>
        <li>Extension VS Code publiée sur le marketplace</li>
        <li>Homebrew tap officiel avec formulaire automatisé</li>
        <li>Nouveaux templates : Kotlin, Scala, Elixir, Crystal</li>
        <li>Support de GitLab CI et Jenkins dans <code>scaffold github actions</code></li>
        <li>Amélioration de l'auto-complétion avec suggestions contextuelles</li>
      </ul>

      <h2>Version v2.2.0</h2>
      <ul>
        <li>Interface graphique desktop avec Tauri</li>
        <li>Plus de fournisseurs IA : Mistral AI, DeepSeek, Llama 3 local</li>
        <li>Mode collaboratif avec partage de templates entre équipes</li>
        <li>Analyseur de code avec suggestions d'architecture</li>
        <li>Génération de documentation automatique pour les API</li>
      </ul>

      <h2>Version v2.3.0</h2>
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

      <h2>Terminé (v2.0.0)</h2>
      <ul>
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
      </ul>

      <p>Une suggestion ? Envoyez un email à <a href="mailto:koffilevis21@gmail.com">koffilevis21@gmail.com</a> ou ouvrez une <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI/issues" target="_blank" rel="noopener noreferrer">issue GitHub</a>.</p>
    </div>
  )
}
