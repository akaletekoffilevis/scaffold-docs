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
        <h2>Auteur</h2>
        <p>Développé par <strong>akaletekoffilevis</strong>.</p>
        <p>Projet open source disponible sur <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
      </section>

      <section>
        <h2>Technologies</h2>
        <table>
          <tbody>
            <tr><td>Runtime</td><td>.NET 9</td></tr>
            <tr><td>CLI Framework</td><td>System.CommandLine</td></tr>
            <tr><td>Compilation</td><td>AOT (Ahead-of-Time) — binaire natif, pas de runtime requis</td></tr>
            <tr><td>Taille</td><td>~12 MB</td></tr>
            <tr><td>Plateformes</td><td>Linux (x64, musl-x64, arm64), macOS (Intel, Apple Silicon), Windows (x64, x86, arm64)</td></tr>
            <tr><td>Licence</td><td>MIT</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}
