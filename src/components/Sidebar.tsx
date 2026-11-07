import { Link, useLocation } from 'react-router-dom'
import {
  BookOpen, Download, Rocket, LayoutGrid, Terminal, Container, FolderTree,
  Package, Brain, Plug, HelpCircle, Sparkles
} from 'lucide-react'

const sections = [
  { label: 'Prise en main', icon: Rocket, links: [
    { to: '/docs', label: 'Introduction', icon: BookOpen },
    { to: '/docs/installation', label: 'Installation', icon: Download },
    { to: '/docs/getting-started', label: 'Démarrage rapide', icon: Rocket },
  ]},
  { label: 'Commandes', icon: Terminal, links: [
    { to: '/docs/commands', label: 'Référence complète', icon: Terminal },
  ]},
  { label: 'Guides', icon: LayoutGrid, links: [
    { to: '/docs/templates', label: 'Templates', icon: LayoutGrid },
    { to: '/docs/deployment', label: 'Déploiement', icon: Rocket },
    { to: '/docs/docker', label: 'Docker', icon: Container },
    { to: '/docs/workspace', label: 'Workspace', icon: FolderTree },
    { to: '/docs/registry', label: 'Registry', icon: Package },
  ]},
  { label: 'Écosystème', icon: Sparkles, links: [
    { to: '/docs/ai', label: 'Intelligence Artificielle', icon: Brain },
    { to: '/docs/plugins', label: 'Plugins', icon: Plug },
  ]},
  { label: 'Aide', icon: HelpCircle, links: [
    { to: '/docs/faq', label: 'FAQ', icon: HelpCircle },
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
      {sections.map(s => {
        const SectionIcon = s.icon
        return (
          <div className="sidebar-group" key={s.label}>
            <h4 className="sidebar-label">
              <SectionIcon size={14} className="sidebar-group-icon" />
              {s.label}
            </h4>
            <ul>
              {s.links.map(l => {
                const Icon = l.icon
                return (
                  <li key={l.to}>
                    <Link to={l.to} className={loc.pathname === l.to ? 'active' : ''} onClick={handleClick}>
                      <Icon size={15} className="sidebar-link-icon" />
                      {l.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </aside>
  )
}
