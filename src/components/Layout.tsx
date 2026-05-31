import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import Sidebar from './Sidebar'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <div className="layout">
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

  return (
    <div className="layout">
      <Nav />
      <div className="docs-layout">
        <button className="sidebar-toggle" onClick={() => setSidebarOpen(true)} aria-label="Ouvrir la navigation">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          <span>Navigation</span>
        </button>

        {sidebarOpen && <div className="mobile-overlay" onClick={() => setSidebarOpen(false)} />}
        <div className={`sidebar-wrapper${sidebarOpen ? ' open' : ''}`}>
          <Sidebar onClose={() => setSidebarOpen(false)} />
        </div>

        <main className="docs-content">
          <Outlet />
        </main>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
