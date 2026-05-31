function copyText(text: string) {
  navigator.clipboard.writeText(text)
}

export default function AI() {
  return (
    <div className="page-content">
      <h1>Intelligence Artificielle</h1>
      <p>Scaffolder intègre des fonctionnalités IA pour vous assister dans vos projets.</p>

      <h2>Fournisseurs supportés</h2>
      <table>
        <thead>
          <tr><th>Provider</th><th>Modèle par défaut</th></tr>
        </thead>
        <tbody>
          <tr><td>OpenAI</td><td>gpt-4o-mini</td></tr>
          <tr><td>Claude (Anthropic)</td><td>claude-3-haiku</td></tr>
          <tr><td>Gemini (Google)</td><td>gemini-2.0-flash</td></tr>
          <tr><td>Grok (xAI)</td><td>grok-2</td></tr>
        </tbody>
      </table>

      <h2>Configuration</h2>
      <p>Avant d'utiliser l'IA, configurez votre clé API :</p>
      <div className="install-cmd">
        <code>scaffold config set apiKey sk-xxxxx</code>
        <button className="btn-copy" onClick={() => copyText('scaffold config set apiKey sk-xxxxx')}>Copier</button>
      </div>
      <div className="install-cmd">
        <code>scaffold config set provider grok</code>
        <button className="btn-copy" onClick={() => copyText('scaffold config set provider grok')}>Copier</button>
      </div>
      <div className="install-cmd">
        <code>scaffold config set model gpt-4o</code>
        <button className="btn-copy" onClick={() => copyText('scaffold config set model gpt-4o')}>Copier</button>
      </div>

      <h2>Commandes IA</h2>

      <h3>suggest</h3>
      <p>Suggère un template à partir de mots-clés en langage naturel.</p>
      <div className="install-cmd">
        <code>scaffold suggest "je veux un blog avec react et tailwind"</code>
        <button className="btn-copy" onClick={() => copyText('scaffold suggest "je veux un blog avec react et tailwind"')}>Copier</button>
      </div>

      <h3>explain</h3>
      <p>Explique un concept de développement avec des exemples concrets.</p>
      <div className="install-cmd">
        <code>scaffold explain "dependency injection"</code>
        <button className="btn-copy" onClick={() => copyText('scaffold explain "dependency injection"')}>Copier</button>
      </div>

      <h3>fix</h3>
      <p>Analyse un message d'erreur et propose une solution.</p>
      <div className="install-cmd">
        <code>scaffold fix "CS1061: 'DbContext' does not contain a definition for 'Users'"</code>
        <button className="btn-copy" onClick={() => copyText("scaffold fix \"CS1061: 'DbContext' does not contain a definition for 'Users'\"")}>Copier</button>
      </div>

      <h3>generate</h3>
      <p>Crée un template personnalisé via IA à partir d'une description.</p>
      <div className="install-cmd">
        <code>scaffold generate "api rest avec node et postgres" --name=node-api</code>
        <button className="btn-copy" onClick={() => copyText('scaffold generate "api rest avec node et postgres" --name=node-api')}>Copier</button>
      </div>

      <h2>Vérification de la configuration</h2>
      <div className="install-cmd">
        <code>scaffold config list</code>
        <button className="btn-copy" onClick={() => copyText('scaffold config list')}>Copier</button>
      </div>
      <p>Utilisez <code>scaffold doctor</code> pour vérifier que tout est correctement configuré.</p>
    </div>
  )
}
