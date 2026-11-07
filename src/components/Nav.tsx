import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { ExternalLink, Sun, Moon, Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/docs', label: 'Documentation' },
  { to: '/docs/commands', label: 'Commandes' },
  { to: '/docs/templates', label: 'Templates' },
  { to: '/changelog', label: 'Changelog' },
  { to: '/roadmap', label: 'Roadmap' },
]

export default function Nav() {
  const { theme, toggle } = useTheme()
  const loc = useLocation()
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <>
      <nav className="top-nav">
        <div className="nav-inner">
          <Link to="/" className="nav-logo" onClick={close}>
            <img src="/logo-minimal.svg" alt="" width="28" height="28" />
            <span>Scaffolder</span>
          </Link>

          <ul className="nav-links">
            {navLinks.map(l => (
              <li key={l.to}>
                <Link to={l.to} className={loc.pathname === l.to ? 'active' : ''}>{l.label}</Link>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI" target="_blank" rel="noopener noreferrer" className="nav-icon" title="GitHub">
              <ExternalLink size={20} />
            </a>
            <button className="theme-toggle" onClick={toggle} title={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}>
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {open && <div className="mobile-overlay" onClick={close} />}
      <div className={`mobile-nav${open ? ' open' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map(l => (
            <li key={l.to}>
              <Link to={l.to} className={loc.pathname === l.to ? 'active' : ''} onClick={close}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <span className="close-hint">Clique sur l'overlay ou appuie sur Échap pour fermer</span>
      </div>
    </>
  )
}
