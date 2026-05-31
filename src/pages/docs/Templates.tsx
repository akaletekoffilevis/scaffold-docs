import { useState } from 'react'
import { Link } from 'react-router-dom'

interface Template {
  name: string
  description: string
  category: string
  tags: string[]
  lang: string
  cmd: string
}

const templates: Template[] = [
  { name: 'webapi', description: 'API REST .NET 9 avec contrôleurs, Swagger, Entity Framework, Serilog', category: '.NET', tags: ['api', 'rest', 'c#', 'swagger', 'ef'], lang: 'C#', cmd: 'scaffold new --template=webapi --name=mon-api' },
  { name: 'blazor', description: 'Application Blazor WebAssembly interactive avec composants MudBlazor', category: '.NET', tags: ['wasm', 'c#', 'interactive', 'webassembly'], lang: 'C#', cmd: 'scaffold new --template=blazor --name=mon-blazor' },
  { name: 'console', description: 'Application console .NET avec System.CommandLine, DI et logging', category: '.NET', tags: ['cli', 'c#', 'console'], lang: 'C#', cmd: 'scaffold new --template=console --name=mon-cli' },
  { name: 'vite', description: 'Application frontend Vite + React 19 + TypeScript 5 + Tailwind CSS', category: 'JavaScript', tags: ['frontend', 'react', 'ts', 'tailwind'], lang: 'TypeScript', cmd: 'scaffold new --template=vite --name=frontend' },
  { name: 'react', description: 'Application React avec React Router, Axios, configuration ESLint/Prettier', category: 'JavaScript', tags: ['frontend', 'react', 'spa'], lang: 'JavaScript', cmd: 'scaffold new --template=react --name=mon-app' },
  { name: 'next', description: 'Application Next.js 15 avec App Router, Server Components, Tailwind', category: 'JavaScript', tags: ['frontend', 'ssr', 'react', 'app-router'], lang: 'TypeScript', cmd: 'scaffold new --template=next --name=mon-site' },
  { name: 'vue', description: 'Application Vue 3 avec Composition API, Pinia, Vue Router', category: 'JavaScript', tags: ['frontend', 'vue', 'spa'], lang: 'JavaScript', cmd: 'scaffold new --template=vue --name=mon-app' },
  { name: 'nuxt', description: 'Application Nuxt 3 universelle avec auto-import, modules, SEO', category: 'JavaScript', tags: ['frontend', 'vue', 'ssr'], lang: 'JavaScript', cmd: 'scaffold new --template=nuxt --name=mon-site' },
  { name: 'express', description: 'API REST Node.js avec Express, TypeScript, Prisma, JWT', category: 'JavaScript', tags: ['api', 'node', 'express', 'prisma'], lang: 'TypeScript', cmd: 'scaffold new --template=express --name=mon-api' },
  { name: 'nest', description: 'API Node.js modulaire avec NestJS, TypeScript, Swagger, TypeORM', category: 'JavaScript', tags: ['api', 'node', 'nestjs', 'typeorm'], lang: 'TypeScript', cmd: 'scaffold new --template=nest --name=mon-api' },
  { name: 'fastapi', description: 'API REST Python avec FastAPI, Pydantic, SQLAlchemy, Uvicorn', category: 'Python', tags: ['api', 'python', 'pydantic', 'sqlalchemy'], lang: 'Python', cmd: 'scaffold new --template=fastapi --name=mon-api' },
  { name: 'django', description: 'Application web Python avec Django, DRF, PostgreSQL, Celery', category: 'Python', tags: ['web', 'python', 'orm', 'drf'], lang: 'Python', cmd: 'scaffold new --template=django --name=mon-site' },
  { name: 'actix', description: 'API HTTP hautes performances en Rust avec Actix-web, Diesel, JWT', category: 'Rust', tags: ['api', 'rust', 'async', 'diesel'], lang: 'Rust', cmd: 'scaffold new --template=actix --name=mon-api' },
  { name: 'rocket', description: 'API web ergonomique en Rust avec Rocket, SQLx, migrations', category: 'Rust', tags: ['api', 'rust', 'web', 'sqlx'], lang: 'Rust', cmd: 'scaffold new --template=rocket --name=mon-api' },
  { name: 'go-api', description: 'API REST en Go avec chi router, sqlx, tests, makefile', category: 'Go', tags: ['api', 'go', 'rest', 'chi'], lang: 'Go', cmd: 'scaffold new --template=go-api --name=mon-api' },
  { name: 'flutter', description: 'Application mobile Flutter avec Dart, Provider, HTTP, thème Material', category: 'Mobile', tags: ['mobile', 'dart', 'cross-platform', 'material'], lang: 'Dart', cmd: 'scaffold new --template=flutter --name=mon-app' },
  { name: 'laravel', description: 'Application web PHP avec Laravel, Eloquent, Blade, Breeze', category: 'PHP', tags: ['web', 'php', 'mvc', 'eloquent'], lang: 'PHP', cmd: 'scaffold new --template=laravel --name=mon-site' },
  { name: 'rails', description: 'Application web Ruby avec Rails 8, Hotwire, Stimulus, PostgreSQL', category: 'Ruby', tags: ['web', 'ruby', 'mvc', 'hotwire'], lang: 'Ruby', cmd: 'scaffold new --template=rails --name=mon-site' },
  { name: 'hello', description: 'Projet minimal "Hello World" dans le langage de votre choix (python, js, ts, c#, rust, go, ruby, php, dart, swift, kotlin, java, zig)', category: 'Universel', tags: ['hello', 'minimal', 'demo'], lang: 'Multi', cmd: 'scaffold new hello --language=rust --name=hello-rust' },
]

export default function Templates() {
  const [query, setQuery] = useState('')
  const [filterCat, setFilterCat] = useState('')

  const categories = [...new Set(templates.map(t => t.category))]

  const filtered = templates.filter(t =>
    (t.name.toLowerCase().includes(query.toLowerCase()) ||
     t.description.toLowerCase().includes(query.toLowerCase()) ||
     t.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))) &&
    (!filterCat || t.category === filterCat)
  )

  return (
    <div className="page-content">
      <h1>Catalogue des templates</h1>
      <p>18 templates prêts à l'emploi. Utilisez <code>scaffold new --template=&lt;nom&gt;</code> pour créer un projet, ou <code>scaffold new</code> pour le menu interactif.</p>

      <div className="search-box">
        <input
          type="text"
          placeholder="Rechercher un template par nom, langage, mot-clé..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      <div className="filter-bar" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
        <button className={`tab${!filterCat ? ' active' : ''}`} onClick={() => setFilterCat('')}>Tous</button>
        {categories.map(c => (
          <button key={c} className={`tab${filterCat === c ? ' active' : ''}`} onClick={() => setFilterCat(c)}>{c}</button>
        ))}
      </div>

      <div className="template-grid">
        {filtered.map((t, i) => (
          <div key={i} className="template-card">
            <h3>{t.name}</h3>
            <p>{t.description}</p>
            <div style={{ display: 'flex', gap: 6, marginBottom: 8, flexWrap: 'wrap' }}>
              <span className="cmd-badge">{t.category}</span>
              <span className="cmd-badge">{t.lang}</span>
            </div>
            <div className="template-tags">
              {t.tags.map((tag, j) => (
                <span key={j} className="tag">{tag}</span>
              ))}
            </div>
            <div className="install-cmd" style={{ marginTop: 12 }}>
              <code style={{ fontSize: '.78rem' }}>{t.cmd}</code>
              <button className="btn-copy" onClick={() => navigator.clipboard.writeText(t.cmd)}>Copier</button>
            </div>
          </div>
        ))}
      </div>

      <h2>Composition de templates</h2>
      <p>Vous pouvez combiner plusieurs templates avec le signe <code>+</code> :</p>
      <div className="install-cmd">
        <code>scaffold new webapi+react --name=full-app</code>
        <button className="btn-copy" onClick={() => navigator.clipboard.writeText('scaffold new webapi+react --name=full-app')}>Copier</button>
      </div>
      <p>Scaffolder génère alors une architecture complète avec un backend API et un frontend React.</p>

      <h2>Templates personnalisés</h2>
      <p>Vous ne trouvez pas ce qu'il vous faut ? Vous pouvez :</p>
      <ul>
        <li>Créer un template depuis un dossier existant : <code>scaffold template from-dir ./mon-projet --name=mon-template</code></li>
        <li>Générer un template via <Link to="/docs/ai">IA</Link> : <code>scaffold generate "api rest avec node et postgres" --name=node-api</code></li>
        <li>Chercher dans le <Link to="/docs/registry">registry communautaire</Link></li>
      </ul>
    </div>
  )
}
