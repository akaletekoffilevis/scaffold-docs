function copyText(text: string) {
  navigator.clipboard.writeText(text)
}

export default function AI() {
  return (
    <div className="page-content">
      <h1>Intelligence Artificielle</h1>
      <p>Scaffolder intègre des fonctionnalités IA pour vous assister dans vos projets : suggestion de templates, explication de concepts, correction d'erreurs et génération de templates personnalisés.</p>

      <h2>Fournisseurs supportés</h2>
      <table>
        <thead>
          <tr><th>Provider</th><th>Modèle par défaut</th><th>Clé API</th><th>Avantage</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>OpenAI</strong></td><td>gpt-4o-mini</td><td><code>sk-...</code></td><td>Polyvalent, rapide, excellent pour le code</td></tr>
          <tr><td><strong>Claude (Anthropic)</strong></td><td>claude-3-haiku</td><td><code>sk-ant-...</code></td><td>Très bon en explications détaillées</td></tr>
          <tr><td><strong>Gemini (Google)</strong></td><td>gemini-2.0-flash</td><td><code>AIza...</code></td><td>Gratuit, grande fenêtre de contexte</td></tr>
          <tr><td><strong>Grok (xAI)</strong></td><td>grok-2</td><td><code>xai-...</code></td><td>Récent, bon en débogage</td></tr>
        </tbody>
      </table>

      <h2>Configuration</h2>
      <p>Avant d'utiliser l'IA, configurez votre clé API et votre fournisseur :</p>
      <div className="install-cmd">
        <code>scaffold config set provider grok</code>
        <button className="btn-copy" onClick={() => copyText('scaffold config set provider grok')}>Copier</button>
      </div>
      <div className="install-cmd">
        <code>scaffold config set apiKey sk-xxxxx</code>
        <button className="btn-copy" onClick={() => copyText('scaffold config set apiKey sk-xxxxx')}>Copier</button>
      </div>
      <div className="install-cmd">
        <code>scaffold config set model gpt-4o</code>
        <button className="btn-copy" onClick={() => copyText('scaffold config set model gpt-4o')}>Copier</button>
      </div>
      <p>Pour vérifier votre configuration :</p>
      <div className="install-cmd">
        <code>scaffold config list</code>
        <button className="btn-copy" onClick={() => copyText('scaffold config list')}>Copier</button>
      </div>

      <h2>Commandes IA</h2>

      <h3>suggest</h3>
      <p>Suggère un template à partir de mots-clés en langage naturel. Utile quand vous ne savez pas quel template choisir :</p>
      <div className="install-cmd">
        <code>scaffold suggest "je veux un blog avec react et tailwind"</code>
        <button className="btn-copy" onClick={() => copyText('scaffold suggest "je veux un blog avec react et tailwind"')}>Copier</button>
      </div>
      <div className="install-cmd">
        <code>scaffold suggest "api rest en python avec postgresql"</code>
        <button className="btn-copy" onClick={() => copyText('scaffold suggest "api rest en python avec postgresql"')}>Copier</button>
      </div>
      <div className="install-cmd">
        <code>scaffold suggest "application mobile ios android"</code>
        <button className="btn-copy" onClick={() => copyText('scaffold suggest "application mobile ios android"')}>Copier</button>
      </div>

      <h3>explain</h3>
      <p>Explique un concept de développement avec des exemples concrets :</p>
      <div className="install-cmd">
        <code>scaffold explain "dependency injection"</code>
        <button className="btn-copy" onClick={() => copyText('scaffold explain "dependency injection"')}>Copier</button>
      </div>
      <div className="install-cmd">
        <code>scaffold explain "middleware dans asp.net"</code>
        <button className="btn-copy" onClick={() => copyText('scaffold explain "middleware dans asp.net"')}>Copier</button>
      </div>
      <div className="install-cmd">
        <code>scaffold explain "jwt authentication"</code>
        <button className="btn-copy" onClick={() => copyText('scaffold explain "jwt authentication"')}>Copier</button>
      </div>

      <h3>fix</h3>
      <p>Analyse un message d'erreur et propose une solution étape par étape :</p>
      <div className="install-cmd">
        <code>scaffold fix "CS1061: 'DbContext' does not contain a definition for 'Users'"</code>
        <button className="btn-copy" onClick={() => copyText("scaffold fix \"CS1061: 'DbContext' does not contain a definition for 'Users'\"")}>Copier</button>
      </div>
      <div className="install-cmd">
        <code>scaffold fix "Module not found: Can't resolve 'react-router-dom'"</code>
        <button className="btn-copy" onClick={() => copyText("scaffold fix \"Module not found: Can't resolve 'react-router-dom'\"")}>Copier</button>
      </div>
      <div className="install-cmd">
        <code>scaffold fix "error[E0425]: cannot find value 'self' in this scope"</code>
        <button className="btn-copy" onClick={() => copyText("scaffold fix \"error[E0425]: cannot find value 'self' in this scope\"")}>Copier</button>
      </div>

      <h3>generate</h3>
      <p>Crée un template personnalisé via IA à partir d'une description en langage naturel :</p>
      <div className="install-cmd">
        <code>scaffold generate "api rest avec node et postgres" --name=node-api</code>
        <button className="btn-copy" onClick={() => copyText('scaffold generate "api rest avec node et postgres" --name=node-api')}>Copier</button>
      </div>
      <div className="install-cmd">
        <code>scaffold generate "blog avec react tailwind et cms"</code>
        <button className="btn-copy" onClick={() => copyText('scaffold generate "blog avec react tailwind et cms"')}>Copier</button>
      </div>

      <h2>Gestion des erreurs API</h2>
      <p>Lorsque l'IA ne répond pas correctement, Scaffolder affiche des messages d'erreur explicites :</p>
      <table>
        <thead>
          <tr><th>Erreur</th><th>Cause possible</th><th>Solution</th></tr>
        </thead>
        <tbody>
          <tr><td><code>API key not configured</code></td><td>Clé API manquante</td><td>Exécutez <code>scaffold config set apiKey &lt;votre_cle&gt;</code></td></tr>
          <tr><td><code>Rate limit exceeded</code></td><td>Quota API dépassé</td><td>Attendez quelques minutes ou changez de fournisseur</td></tr>
          <tr><td><code>Provider unavailable</code></td><td>Service temporairement indisponible</td><td>Essayez un autre fournisseur avec <code>scaffold config set provider</code></td></tr>
          <tr><td><code>Model not found</code></td><td>Modèle inexistant ou déprécié</td><td>Vérifiez le modèle avec <code>scaffold config get model</code></td></tr>
        </tbody>
      </table>

      <h2>Conseils pour les prompts</h2>
      <ul>
        <li><strong>Soyez précis</strong> : <code>"blog avec react et tailwind"</code> est mieux que <code>"blog"</code></li>
        <li><strong>Mentionnez le langage</strong> : <code>"api en python"</code> plutôt que <code>"api"</code></li>
        <li><strong>Ajoutez des contraintes</strong> : <code>"api rest avec postgres et authentification jwt"</code></li>
        <li><strong>Pour les corrections</strong> : copiez-collez le message d'erreur exact, pas une paraphrase</li>
        <li><strong>Pour les explications</strong> : demandez des exemples concrets <code>"explain solid principles avec exemples c#"</code></li>
      </ul>

      <h2>Limites et quotas</h2>
      <table>
        <thead>
          <tr><th>Provider</th><th>Modèle gratuit</th><th>Limites</th></tr>
        </thead>
        <tbody>
          <tr><td>OpenAI</td><td>Non (payant)</td><td>~500 req/min (selon plan)</td></tr>
          <tr><td>Gemini</td><td>Oui (quota généreux)</td><td>60 req/min, 1500 req/jour</td></tr>
          <tr><td>Grok</td><td>Non (payant)</td><td>~100 req/min</td></tr>
          <tr><td>Claude</td><td>Non (payant)</td><td>~50 req/min</td></tr>
        </tbody>
      </table>

      <h2>Diagnostic</h2>
      <p>Utilisez <code>scaffold doctor</code> pour vérifier que tout est correctement configuré :</p>
      <div className="install-cmd">
        <code>scaffold doctor</code>
        <button className="btn-copy" onClick={() => copyText('scaffold doctor')}>Copier</button>
      </div>

      <h2>Conseils généraux</h2>
      <ul>
        <li>Les modèles <strong>gpt-4o-mini</strong> et <strong>claude-3-haiku</strong> sont les plus rapides et économiques</li>
        <li>Pour des explications détaillées, préférez Claude</li>
        <li>Gemini est gratuit avec un quota généreux, idéal pour les tests</li>
        <li>Stockez votre clé API en toute sécurité avec <code>scaffold config set apiKey &lt;votre_cle&gt;</code> (elle est chiffrée dans le fichier de config)</li>
        <li>Exportez votre configuration pour la sauvegarder : <code>scaffold config export ~/scaffold-config.json</code></li>
      </ul>
    </div>
  )
}
