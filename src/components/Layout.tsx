import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import Sidebar from './Sidebar'

export default function Layout() {
  return (
    <div className="layout">
      <Nav />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export function DocsLayout() {
  return (
    <div className="layout">
      <Nav />
      <div className="docs-layout">
        <Sidebar />
        <main className="docs-content">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}
