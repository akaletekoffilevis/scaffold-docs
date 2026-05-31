import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/docs', label: 'Documentation' },
  { to: '/docs/commands', label: 'Commandes' },
  { to: '/docs/templates', label: 'Templates' },
  { to: '/changelog', label: 'Changelog' },
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <button className="theme-toggle" onClick={toggle} title={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}>
              {theme === 'dark' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/></svg>
              )}
            </button>
            <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
              <span className={`hamburger-line${open ? ' open' : ''}`} />
              <span className={`hamburger-line${open ? ' open' : ''}`} />
              <span className={`hamburger-line${open ? ' open' : ''}`} />
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
      </div>
    </>
  )
}
