import { Routes, Route } from 'react-router-dom'
import Layout, { DocsLayout } from './components/Layout'
import Landing from './pages/Landing'
import DocsIndex from './pages/docs/DocsIndex'
import Installation from './pages/docs/Installation'
import GettingStarted from './pages/docs/GettingStarted'
import Commands from './pages/docs/Commands'
import Templates from './pages/docs/Templates'
import Deployment from './pages/docs/Deployment'
import Docker from './pages/docs/Docker'
import Workspace from './pages/docs/Workspace'
import Registry from './pages/docs/Registry'
import AI from './pages/docs/AI'
import Plugins from './pages/docs/Plugins'
import FAQ from './pages/docs/FAQ'
import Changelog from './pages/Changelog'
import Roadmap from './pages/Roadmap'
import Community from './pages/Community'
import Contributing from './pages/Contributing'
import About from './pages/About'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contributing" element={<Contributing />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route element={<DocsLayout />}>
        <Route path="/docs" element={<DocsIndex />} />
        <Route path="/docs/installation" element={<Installation />} />
        <Route path="/docs/getting-started" element={<GettingStarted />} />
        <Route path="/docs/commands" element={<Commands />} />
        <Route path="/docs/templates" element={<Templates />} />
        <Route path="/docs/deployment" element={<Deployment />} />
        <Route path="/docs/docker" element={<Docker />} />
        <Route path="/docs/workspace" element={<Workspace />} />
        <Route path="/docs/registry" element={<Registry />} />
        <Route path="/docs/ai" element={<AI />} />
        <Route path="/docs/plugins" element={<Plugins />} />
        <Route path="/docs/faq" element={<FAQ />} />
      </Route>
    </Routes>
  )
}
