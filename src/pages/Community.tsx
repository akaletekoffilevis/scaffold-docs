import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'

export default function Community() {
  return (
    <div className="page-content">
      <h1>Communauté</h1>
      <p>Rejoignez la communauté Scaffolder et contribuez au projet. Que vous soyez développeur, designer, ou passionné, votre participation est la bienvenue.</p>

      <h2>Où nous trouver</h2>
      <div className="grid">
        <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI" target="_blank" rel="noopener noreferrer" className="card" style={{ textDecoration: 'none' }}>
          <h3>Dépôt GitHub</h3>
          <p>Code source, releases, et documentation technique. Suivez le développement en direct, starrez le projet, et surveillez les releases.</p>
        </a>
        <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI/issues" target="_blank" rel="noopener noreferrer" className="card" style={{ textDecoration: 'none' }}>
          <h3>Issues</h3>
          <p>Signalez des bugs, proposez des fonctionnalités, suivez le développement. Consultez les issues existantes avant d'en créer une nouvelle.</p>
        </a>
        <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI/discussions" target="_blank" rel="noopener noreferrer" className="card" style={{ textDecoration: 'none' }}>
          <h3>Discussions GitHub</h3>
          <p>Posez des questions, partagez vos projets, échangez avec la communauté. L'endroit idéal pour débuter.</p>
        </a>
        <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="card" style={{ textDecoration: 'none' }}>
          <h3>Guide de contribution</h3>
          <p>Comment contribuer au projet : code, documentation, templates, plugins. Toute aide est précieuse.</p>
        </a>
      </div>

      <h2>Comment contribuer</h2>
      <p>Il y a de nombreuses façons de contribuer, même sans écrire de code :</p>
      <ul>
        <li><strong>Signaler des bugs</strong> : ouvrez une issue GitHub avec le maximum de contexte</li>
        <li><strong>Proposer des fonctionnalités</strong> : décrivez votre idée dans les discussions GitHub</li>
        <li><strong>Améliorer la documentation</strong> : corrigez des fautes, ajoutez des exemples, traduisez</li>
        <li><strong>Créer des templates</strong> : partagez vos templates de projet avec la communauté</li>
        <li><strong>Développer des plugins</strong> : créez des plugins shell pour étendre Scaffolder</li>
        <li><strong>Partager</strong> : parlez de Scaffolder autour de vous, sur les réseaux sociaux, dans votre équipe</li>
      </ul>

      <h2>Code de conduite</h2>
      <ul>
        <li>Soyez respectueux et inclusif dans vos échanges</li>
        <li>Cherchez dans les issues existantes avant d'en ouvrir une nouvelle</li>
        <li>Fournissez un maximum de contexte dans vos rapports de bug (version, OS, commande, logs)</li>
        <li>Partagez vos templates et plugins avec la communauté</li>
        <li>Les attaques personnelles, le harcèlement et les comportements toxiques ne sont pas tolérés</li>
      </ul>

      <h2>Reconnaissance</h2>
      <p>Les contributeurs sont reconnus de plusieurs façons :</p>
      <ul>
        <li>Mention dans le fichier CONTRIBUTORS.md du dépôt</li>
        <li>Crédit dans les notes de release</li>
        <li>Pour les contributions majeures, accès au dépôt en tant que maintainer</li>
      </ul>

      <h2>Contact</h2>
      <p>Pour toute question, suggestion ou rapport de bug, vous pouvez :</p>
      <ul>
        <li>Ouvrir une <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI/issues" target="_blank" rel="noopener noreferrer">issue GitHub</a></li>
        <li>Rejoindre les <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI/discussions" target="_blank" rel="noopener noreferrer">discussions GitHub</a></li>
        <li>Utiliser la commande <code>scaffold bug</code> dans le terminal</li>
        <li>M'écrire directement via le formulaire ci-dessous</li>
      </ul>

      <ContactForm />

      <p style={{ marginTop: 24 }}><Link to="/contributing">Envie de contribuer ? Consultez notre guide.</Link></p>
    </div>
  )
}
