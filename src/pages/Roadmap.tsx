export default function Roadmap() {
  return (
    <div className="page-content">
      <h1>Roadmap</h1>

      <h2>En développement</h2>
      <ul>
        <li>Extension VS Code marketplace</li>
        <li>Homebrew tap officiel</li>
        <li>Templates communautaires dans le registry</li>
        <li>Support de plus de langages (Kotlin, Scala, Elixir)</li>
      </ul>

      <h2>Planifié</h2>
      <ul>
        <li>Interface graphique desktop (Tauri)</li>
        <li>Templates CI/CD (GitHub Actions, GitLab CI, Jenkins)</li>
        <li>Plus de fournisseurs IA (Mistral, DeepSeek, Llama local)</li>
        <li>Mode collaboratif avec partage de templates</li>
        <li>Analyseur de code et suggestions d'architecture</li>
      </ul>

      <h2>Terminé (v2.0.0)</h2>
      <ul>
        <li>40+ commandes couvrant tout le cycle de vie d'un projet</li>
        <li>Compilation AOT en binaire natif</li>
        <li>Auto-update intégré</li>
        <li>Déploiement multi-cible (Vercel, Railway, Docker, GitHub Pages)</li>
        <li>IA intégrée (OpenAI, Claude, Gemini, Grok)</li>
        <li>Plugins shell extensibles</li>
        <li>Registry de templates</li>
        <li>Workspace monorepo</li>
        <li>8 plateformes supportées</li>
        <li>Auto-complétion shell</li>
      </ul>
    </div>
  )
}
