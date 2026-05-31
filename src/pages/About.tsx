export default function About() {
  return (
    <div className="page-content">
      <h1>À propos</h1>

      <section>
        <h2>Vision</h2>
        <p>Scaffolder est un CLI universel multi-langage conçu pour générer, gérer et déployer des projets de développement dans tous les langages et frameworks. L'objectif est de fournir une expérience unifiée pour initialiser un projet, quel que soit l'écosystème choisi.</p>
        <p>Avec plus de 40 commandes couvrant tout le cycle de vie d'un projet — de la génération au déploiement en passant par le build, les tests, Docker, GitHub, l'IA, et les plugins — Scaffolder se veut le couteau suisse du développeur.</p>
      </section>

      <section>
        <h2>Histoire</h2>
        <p>Le projet a débuté en mai 2025 avec une simple commande <code>scaffold new hello</code>. L'objectif initial était de créer un outil capable de générer des projets de démarrage rapide dans différents langages, sans avoir à mémoriser la syntaxe spécifique de chaque framework.</p>
        <p>Au fil des versions, Scaffolder a évolué pour devenir un outil complet couvrant tout le cycle de vie du développement logiciel : génération, build, test, déploiement, Docker, CI/CD, intelligence artificielle, et plugins personnalisés.</p>
      </section>

      <section>
        <h2>Auteur</h2>
        <p>Développé par <strong>Koffi Lévis</strong>.</p>
        <p>Contact : <a href="mailto:koffilevis21@gmail.com">koffilevis21@gmail.com</a></p>
        <p>Projet open source disponible sur <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
        <p>Documentation : <a href="https://scaffold-docs.vercel.app" target="_blank" rel="noopener noreferrer">scaffold-docs.vercel.app</a></p>
      </section>

      <section>
        <h2>Technologies</h2>
        <table>
          <tbody>
            <tr><td>Runtime</td><td>.NET 9</td></tr>
            <tr><td>CLI Framework</td><td>System.CommandLine 2.0.8</td></tr>
            <tr><td>Compilation</td><td>AOT (Ahead-of-Time) — binaire natif, pas de runtime requis</td></tr>
            <tr><td>Taille</td><td>~12 MB</td></tr>
            <tr><td>Plateformes</td><td>Linux (x64, musl-x64, arm64), macOS (Intel, Apple Silicon), Windows (x64, x86)</td></tr>
            <tr><td>IA intégrée</td><td>OpenAI, Claude, Gemini, Grok</td></tr>
            <tr><td>Site de documentation</td><td>React + Vite + TypeScript</td></tr>
            <tr><td>Licence</td><td>MIT</td></tr>
            <tr><td>Version actuelle</td><td>v2.0.0</td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Pourquoi "Scaffolder" ?</h2>
        <p>Le terme "scaffold" (échafaudage en anglais) fait référence à la structure temporaire utilisée pour construire un bâtiment. De la même manière, Scaffolder fournit la structure initiale de votre projet — l'échafaudage — sur laquelle vous construisez votre application.</p>
      </section>
    </div>
  )
}
