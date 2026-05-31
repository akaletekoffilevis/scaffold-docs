import { useState } from 'react'
import { commands } from '../../data/commands'

function copyText(text: string) {
  navigator.clipboard.writeText(text)
}

export default function Commands() {
  const [query, setQuery] = useState('')

  const display = !query.trim() ? commands : commands
    .map(cat => ({
      ...cat,
      commands: cat.commands.filter(c =>
        c.search.toLowerCase().includes(query.toLowerCase()) ||
        c.syntax.toLowerCase().includes(query.toLowerCase()) ||
        c.description.toLowerCase().includes(query.toLowerCase()) ||
        c.badge.toLowerCase().includes(query.toLowerCase())
      )
    }))
    .filter(cat => cat.commands.length > 0)

  return (
    <div className="page-content">
      <h1>Référence des commandes</h1>
      <p>Les 40+ commandes de Scaffolder sont organisées en 9 catégories. Utilisez la recherche pour trouver rapidement une commande.</p>

      <div className="search-box">
        <input
          type="text"
          placeholder="Rechercher une commande, une option, un mot-clé..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      {display.map((cat, i) => (
        <div key={i}>
          <h2>{cat.category}</h2>
          {cat.commands.map((cmd, j) => (
            <CommandAccordion key={j} cmd={cmd} />
          ))}
        </div>
      ))}

      <h2>Conseils d'utilisation</h2>
      <ul>
        <li>Utilisez <code>scaffold --help</code> pour voir l'aide générale</li>
        <li>Ajoutez <code>--help</code> à n'importe quelle commande pour ses options spécifiques : <code>scaffold new --help</code></li>
        <li>Utilisez <code>scaffold doctor</code> pour vérifier votre environnement</li>
        <li>Activez l'auto-complétion shell : <code>scaffold completion bash</code></li>
      </ul>
    </div>
  )
}

function CommandAccordion({ cmd }: { cmd: typeof commands[number]['commands'][number] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`cmd-accordion${open ? ' open' : ''}`}>
      <div className="cmd-header" onClick={() => setOpen(!open)}>
        <code>{cmd.syntax}</code>
        <span className="cmd-badge">{cmd.badge}</span>
        <span className="cmd-arrow">{open ? '▲' : '▼'}</span>
      </div>
      {open && (
        <div className="cmd-body">
          <p>{cmd.description}</p>
          {cmd.options.length > 0 && (
            <>
              <h4>Options</h4>
              <table>
                <thead>
                  <tr><th>Flag</th><th>Description</th></tr>
                </thead>
                <tbody>
                  {cmd.options.map((opt, k) => (
                    <tr key={k}><td><code>{opt.flag}</code></td><td>{opt.desc}</td></tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
          {cmd.examples.length > 0 && (
            <>
              <h4>Exemples</h4>
              {cmd.examples.map((ex, k) => (
                <div className="install-cmd" key={k}>
                  <code>{ex}</code>
                  <button className="btn-copy" onClick={() => copyText(ex)}>Copier</button>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  )
}
