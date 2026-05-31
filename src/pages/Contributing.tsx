import ContactForm from '../components/ContactForm'

function copyText(text: string) {
  navigator.clipboard.writeText(text)
}

export default function Contributing() {
  return (
    <div className="page-content">
      <h1>Contribuer</h1>
      <p>Scaffolder est un projet open source. Toute contribution est la bienvenue ! Que vous soyez développeur débutant ou expérimenté, il y a une place pour vous.</p>

      <h2>Prérequis</h2>
      <ul>
        <li>.NET 9 SDK installé</li>
        <li>Git</li>
        <li>Un éditeur de code (VS Code, Rider, Visual Studio)</li>
        <li>Un compte GitHub</li>
      </ul>

      <h2>Étapes</h2>

      <h3>1. Cloner le dépôt</h3>
      <div className="install-cmd">
        <code>git clone https://github.com/akaletekoffilevis/Scaffolder-CLI.git
cd Scaffolder-CLI</code>
        <button className="btn-copy" onClick={() => copyText('git clone https://github.com/akaletekoffilevis/Scaffolder-CLI.git\ncd Scaffolder-CLI')}>Copier</button>
      </div>

      <h3>2. Restaurer les dépendances</h3>
      <div className="install-cmd">
        <code>dotnet restore</code>
        <button className="btn-copy" onClick={() => copyText('dotnet restore')}>Copier</button>
      </div>

      <h3>3. Compiler le projet</h3>
      <div className="install-cmd">
        <code>dotnet build</code>
        <button className="btn-copy" onClick={() => copyText('dotnet build')}>Copier</button>
      </div>

      <h3>4. Lancer les tests</h3>
      <div className="install-cmd">
        <code>dotnet test</code>
        <button className="btn-copy" onClick={() => copyText('dotnet test')}>Copier</button>
      </div>

      <h2>Branching model</h2>
      <ul>
        <li><strong>main</strong> : branche de production. Les PR sont mergées ici après review.</li>
        <li><strong>feat/xxx</strong> : nouvelles fonctionnalités. Créez depuis <code>main</code>.</li>
        <li><strong>fix/xxx</strong> : correctifs de bugs. Créez depuis <code>main</code>.</li>
        <li><strong>docs/xxx</strong> : documentation uniquement.</li>
        <li><strong>refactor/xxx</strong> : refactoring sans changement fonctionnel.</li>
      </ul>
      <div className="install-cmd">
        <code>git checkout -b feat/mon-template main</code>
        <button className="btn-copy" onClick={() => copyText('git checkout -b feat/mon-template main')}>Copier</button>
      </div>

      <h2>Conventions pour les PR</h2>
      <ul>
        <li>Créez une branche depuis <code>main</code> avec un nom explicite (<code>feat/mon-template</code>, <code>fix/issue-42</code>)</li>
        <li>Écrivez des messages de commit clairs en anglais ou français</li>
        <li>Ajoutez ou mettez à jour les tests pour vos changements (tests unitaires + intégration)</li>
        <li>Vérifiez que tous les tests passent avant de soumettre la PR (<code>dotnet test</code>)</li>
        <li>Suivez le style de code existant (conventions .NET, nullable activé, implicit usings)</li>
        <li>Une PR = une fonctionnalité ou un correctif (pas de PR fourre-tout)</li>
        <li>Référencez les issues concernées dans la description (ex: "Fixes #42")</li>
        <li>Gardez les PR petites et ciblées pour faciliter la review</li>
      </ul>

      <h2>Processus de code review</h2>
      <ol>
        <li>Soumettez votre PR avec une description claire des changements</li>
        <li>Les mainteneurs reviewent le code dans un délai de 48h en général</li>
        <li>Des commentaires peuvent être laissés pour des améliorations</li>
        <li>Apportez les modifications demandées et poussez à nouveau</li>
        <li>Une fois approuvée, la PR est mergée dans <code>main</code></li>
      </ol>

      <h2>Tests</h2>
      <p>Le projet utilise xUnit pour les tests unitaires. Les tests sont dans le dossier <code>Scaffolder.Tests/</code> :</p>
      <div className="install-cmd">
        <code>dotnet test --verbosity=normal</code>
        <button className="btn-copy" onClick={() => copyText('dotnet test --verbosity=normal')}>Copier</button>
      </div>
      <p>Pour exécuter un test spécifique :</p>
      <div className="install-cmd">
        <code>dotnet test --filter "FullyQualifiedName~TestNewCommand"</code>
        <button className="btn-copy" onClick={() => copyText('dotnet test --filter "FullyQualifiedName~TestNewCommand"')}>Copier</button>
      </div>

      <h2>Types de contributions</h2>
      <ul>
        <li><strong>Code :</strong> Nouvelles commandes, améliorations, correctifs de bugs</li>
        <li><strong>Templates :</strong> Nouveaux templates de projet pour n'importe quel langage</li>
        <li><strong>Documentation :</strong> Amélioration du README, du site web, des messages d'aide</li>
        <li><strong>Plugins :</strong> Plugins shell pour la communauté</li>
        <li><strong>Tests :</strong> Ajout de tests unitaires et d'intégration</li>
        <li><strong>Traductions :</strong> Support multilingue pour l'interface et la documentation</li>
        <li><strong>IA :</strong> Amélioration des prompts et des modèles supportés</li>
      </ul>

      <h2>Signaler un bug</h2>
      <p>Vous pouvez aussi signaler un bug directement depuis la CLI :</p>
      <div className="install-cmd">
        <code>scaffold bug "description du bug"</code>
        <button className="btn-copy" onClick={() => copyText('scaffold bug "description du bug"')}>Copier</button>
      </div>

      <h2>Contact</h2>
      <p>Une question sur la contribution ? Écrivez-moi directement :</p>
      <ContactForm />
      <p>Ou ouvrez une <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI/discussions" target="_blank" rel="noopener noreferrer">discussion GitHub</a>.</p>

      <p>Merci de contribuer à Scaffolder !</p>
    </div>
  )
}
