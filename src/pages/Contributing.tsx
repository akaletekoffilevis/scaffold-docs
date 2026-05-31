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

      <h2>Conventions pour les PR</h2>
      <ul>
        <li>Créez une branche depuis <code>main</code> avec un nom explicite (<code>feat/mon-template</code>, <code>fix/issue-42</code>)</li>
        <li>Écrivez des messages de commit clairs en anglais ou français</li>
        <li>Ajoutez ou mettez à jour les tests pour vos changements</li>
        <li>Vérifiez que tous les tests passent avant de soumettre la PR</li>
        <li>Suivez le style de code existant</li>
        <li>Une PR = une fonctionnalité ou un correctif</li>
        <li>Référencez les issues concernées dans la description</li>
      </ul>

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

      <h2>Contact</h2>
      <p>Une question sur la contribution ? Envoyez un email à <a href="mailto:koffilevis21@gmail.com">koffilevis21@gmail.com</a> ou ouvrez une <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI/discussions" target="_blank" rel="noopener noreferrer">discussion GitHub</a>.</p>

      <p>Merci de contribuer à Scaffolder !</p>
    </div>
  )
}
