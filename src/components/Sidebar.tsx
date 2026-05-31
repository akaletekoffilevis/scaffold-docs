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

export default function Sidebar({ onClose }: { onClose?: () => void }) {
  const loc = useLocation()

  const handleClick = () => {
    if (onClose) onClose()
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h4>Navigation</h4>
        <button className="sidebar-close" onClick={onClose} aria-label="Fermer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>
      {sections.map(s => (
        <div className="sidebar-group" key={s.label}>
          <h4 className="sidebar-label">{s.label}</h4>
          <ul>
            {s.links.map(l => (
              <li key={l.to}>
                <Link to={l.to} className={loc.pathname === l.to ? 'active' : ''} onClick={handleClick}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  )
}
