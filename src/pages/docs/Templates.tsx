import { useState } from 'react'
import { Link } from 'react-router-dom'

interface Template {
  name: string
  description: string
  category: string
  tags: string[]
}

const templates: Template[] = [
  { name: 'webapi', description: 'API REST .NET avec contrôleurs et Swagger', category: '.NET', tags: ['api', 'rest', 'c#', 'swagger'] },
  { name: 'blazor', description: 'Application Blazor WebAssembly interactive', category: '.NET', tags: ['wasm', 'c#', 'interactive'] },
  { name: 'vite', description: 'Projet frontend avec Vite + React + TypeScript', category: 'JavaScript', tags: ['frontend', 'react', 'ts'] },
  { name: 'react', description: 'Application React avec configuration complète', category: 'JavaScript', tags: ['frontend', 'react', 'spa'] },
  { name: 'next', description: 'Application Next.js avec SSR et App Router', category: 'JavaScript', tags: ['frontend', 'ssr', 'react'] },
  { name: 'vue', description: 'Application Vue 3 avec Vite', category: 'JavaScript', tags: ['frontend', 'vue', 'spa'] },
  { name: 'nuxt', description: 'Application Nuxt 3 universelle', category: 'JavaScript', tags: ['frontend', 'vue', 'ssr'] },
  { name: 'express', description: 'API REST Node.js avec Express et TypeScript', category: 'JavaScript', tags: ['api', 'node', 'express'] },
  { name: 'nest', description: 'API Node.js avec NestJS et TypeScript', category: 'JavaScript', tags: ['api', 'node', 'nestjs'] },
  { name: 'fastapi', description: 'API REST Python avec FastAPI', category: 'Python', tags: ['api', 'python', 'pydantic'] },
  { name: 'django', description: 'Application web Python avec Django', category: 'Python', tags: ['web', 'python', 'orm'] },
  { name: 'actix', description: 'API HTTP en Rust avec Actix-web', category: 'Rust', tags: ['api', 'rust', 'async'] },
  { name: 'rocket', description: 'API web en Rust avec Rocket', category: 'Rust', tags: ['api', 'rust', 'web'] },
  { name: 'flutter', description: 'Application mobile Flutter avec Dart', category: 'Mobile', tags: ['mobile', 'dart', 'cross-platform'] },
  { name: 'laravel', description: 'Application web PHP avec Laravel', category: 'PHP', tags: ['web', 'php', 'mvc'] },
  { name: 'rails', description: 'Application web Ruby avec Rails', category: 'Ruby', tags: ['web', 'ruby', 'mvc'] },
  { name: 'go-api', description: 'API REST en Go avec chi router', category: 'Go', tags: ['api', 'go', 'rest'] },
  { name: 'console', description: 'Application console .NET avec System.CommandLine', category: '.NET', tags: ['cli', 'c#', 'console'] },
]

export default function Templates() {
  const [query, setQuery] = useState('')

  const filtered = templates.filter(t =>
    t.name.toLowerCase().includes(query.toLowerCase()) ||
    t.description.toLowerCase().includes(query.toLowerCase()) ||
    t.category.toLowerCase().includes(query.toLowerCase()) ||
    t.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  )

  return (
    <div className="page-content">
      <h1>Catalogue des templates</h1>
      <p>Explorez les templates disponibles. Utilisez <code>scaffold new --template=&lt;nom&gt;</code> pour créer un projet.</p>

      <div className="search-box">
        <input
          type="text"
          placeholder="Rechercher un template..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      <div className="template-grid">
        {filtered.map((t, i) => (
          <div key={i} className="template-card">
            <h3>{t.name}</h3>
            <p>{t.description}</p>
            <span className="cmd-badge">{t.category}</span>
            <div className="template-tags">
              {t.tags.map((tag, j) => (
                <span key={j} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p>Vous ne trouvez pas ce qu'il vous faut ? Consultez le <Link to="/docs/registry">registry de templates</Link> ou créez le vôtre avec <code>scaffold template from-dir</code>.</p>
    </div>
  )
}
