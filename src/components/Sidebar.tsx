import { Link, useLocation } from 'react-router-dom'

const sections = [
  { label: 'Prise en main', links: [
    { to: '/docs', label: 'Introduction' },
    { to: '/docs/installation', label: 'Installation' },
    { to: '/docs/getting-started', label: 'Demarrage rapide' },
  ]},
  { label: 'Commandes', links: [
    { to: '/docs/commands', label: 'Reference complete' },
  ]},
  { label: 'Guides', links: [
    { to: '/docs/templates', label: 'Templates' },
    { to: '/docs/deployment', label: 'Deploiement' },
    { to: '/docs/docker', label: 'Docker' },
    { to: '/docs/workspace', label: 'Workspace' },
    { to: '/docs/registry', label: 'Registry' },
  ]},
  { label: 'Ecosysteme', links: [
    { to: '/docs/ai', label: 'Intelligence Artificielle' },
    { to: '/docs/plugins', label: 'Plugins' },
  ]},
  { label: 'Aide', links: [
    { to: '/docs/faq', label: 'FAQ' },
  ]},
]

export default function Sidebar() {
  const loc = useLocation()

  return (
    <aside className="sidebar">
      {sections.map(s => (
        <div className="sidebar-group" key={s.label}>
          <h4 className="sidebar-label">{s.label}</h4>
          <ul>
            {s.links.map(l => (
              <li key={l.to}>
                <Link to={l.to} className={loc.pathname === l.to ? 'active' : ''}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  )
}
