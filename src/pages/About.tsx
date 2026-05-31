import ContactForm from '../components/ContactForm'

export default function About() {
  return (
    <div className="page-content">
      <h1>A propos</h1>

      <section>
        <h2>Vision</h2>
        <p>Scaffolder est un CLI universel multi-langage concu pour generer, gerer et deployer des projets de developpement dans tous les langages et frameworks. L'objectif est de fournir une experience unifiee pour initialiser un projet, quel que soit l'ecosysteme choisi.</p>
        <p>Avec plus de 40 commandes couvrant tout le cycle de vie d'un projet - de la generation au deploiement en passant par le build, les tests, Docker, GitHub, l'IA, et les plugins - Scaffolder se veut le couteau suisse du developpeur.</p>
      </section>

      <section>
        <h2>Histoire</h2>
        <p>Le projet a debute en mai 2025 avec une simple commande <code>scaffold new hello</code>. L'objectif initial etait de creer un outil capable de generer des projets de demarrage rapide dans differents langages, sans avoir a memoriser la syntaxe specifique de chaque framework.</p>
        <p>Au fil des versions, Scaffolder a evolue pour devenir un outil complet couvrant tout le cycle de vie du developpement logiciel : generation, build, test, deploiement, Docker, CI/CD, intelligence artificielle, et plugins personnalises.</p>
        <p>Aujourd'hui, Scaffolder est utilise par des developpeurs du monde entier pour accelérer leur productivite et standardiser la creation de projets.</p>
      </section>

      <section>
        <h2>Auteur</h2>
        <p>Developpe par <strong>Koffi Levis</strong>.</p>
        <p>Contact : <a href="mailto:koffilevis21@gmail.com">koffilevis21@gmail.com</a></p>
        <p>Projet open source disponible sur <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
        <p>Documentation : <a href="https://scaffolder-cli.vercel.app" target="_blank" rel="noopener noreferrer">scaffolder-cli.vercel.app</a></p>
      </section>

      <section>
        <h2>Technologies</h2>
        <table>
          <tbody>
            <tr><td>Runtime</td><td>.NET 9</td></tr>
            <tr><td>CLI Framework</td><td>System.CommandLine 2.0.8</td></tr>
            <tr><td>Compilation</td><td>AOT (Ahead-of-Time) - binaire natif, pas de runtime requis</td></tr>
            <tr><td>Taille</td><td>~12 MB</td></tr>
            <tr><td>Plateformes</td><td>Linux (x64, musl-x64, arm64), macOS (Intel, Apple Silicon), Windows (x64, x86)</td></tr>
            <tr><td>IA integree</td><td>OpenAI, Claude, Gemini, Grok</td></tr>
            <tr><td>Site de documentation</td><td>React + Vite + TypeScript + react-router-dom</td></tr>
            <tr><td>Licence</td><td>MIT</td></tr>
            <tr><td>Version actuelle</td><td>v2.0.0</td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Pourquoi "Scaffolder" ?</h2>
        <p>Le terme "scaffold" (echafaudage en anglais) fait reference a la structure temporaire utilisee pour construire un batiment. De la meme maniere, Scaffolder fournit la structure initiale de votre projet - l'echafaudage - sur laquelle vous construisez votre application.</p>
      </section>

      <section>
        <h2>Me contacter</h2>
        <p>Une question, une suggestion, une collaboration ? Ecrivez-moi directement :</p>
        <ContactForm />
      </section>
    </div>
  )
}
