import { useState, useEffect, useCallback } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import Sidebar from './Sidebar'
import ScrollToTop from './ScrollToTop'

function ScrollProgress() {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setWidth(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <div className="scroll-progress" style={{ width: `${width}%` }} />
}

function useEscape(handler: () => void) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handler() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [handler])
}

export default function Layout() {
  return (
    <div className="layout">
      <ScrollProgress />
      <Nav />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export function DocsLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const loc = useLocation()

  const closeSidebar = useCallback(() => setSidebarOpen(false), [])
  useEscape(closeSidebar)

  const segments = loc.pathname.split('/').filter(Boolean)
  const breadcrumbs: { label: string; to: string }[] = []
  let acc = ''
  for (const seg of segments) {
    acc += '/' + seg
    const label = seg === 'docs' ? 'Documentation' : seg.charAt(0).toUpperCase() + seg.slice(1)
    breadcrumbs.push({ label, to: acc })
  }

  return (
    <div className="layout">
      <ScrollProgress />
      <Nav />
      <div className="docs-layout">
        <button className="sidebar-toggle" onClick={() => setSidebarOpen(true)} aria-label="Ouvrir la navigation">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          <span>Navigation</span>
        </button>

        {sidebarOpen && <div className="mobile-overlay" onClick={closeSidebar} />}
        <div className={`sidebar-wrapper${sidebarOpen ? ' open' : ''}`}>
          <Sidebar onClose={closeSidebar} />
        </div>

        <main className="docs-content">
          <nav className="breadcrumbs">
            <Link to="/">Accueil</Link>
            {breadcrumbs.map((b, i) => (
              <span key={b.to} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <span className="sep">/</span>
                {i === breadcrumbs.length - 1
                  ? <span>{b.label}</span>
                  : <Link to={b.to}>{b.label}</Link>}
              </span>
            ))}
          </nav>
          <Outlet />
        </main>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
