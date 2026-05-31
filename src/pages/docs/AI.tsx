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

      <h2>Diagnostic</h2>
      <p>Utilisez <code>scaffold doctor</code> pour vérifier que tout est correctement configuré :</p>
      <div className="install-cmd">
        <code>scaffold doctor</code>
        <button className="btn-copy" onClick={() => copyText('scaffold doctor')}>Copier</button>
      </div>

      <h2>Conseils</h2>
      <ul>
        <li>Les modèles <strong>gpt-4o-mini</strong> et <strong>claude-3-haiku</strong> sont les plus rapides et économiques</li>
        <li>Pour des explications détaillées, préférez Claude</li>
        <li>Gemini est gratuit avec un quota généreux</li>
        <li>Stockez votre clé API en toute sécurité avec <code>scaffold config set apiKey &lt;votre_cle&gt;</code></li>
      </ul>
    </div>
  )
}
