import { useState } from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../../components/ContactForm'

function copyText(text: string) {
  navigator.clipboard.writeText(text)
}

const faqs = [
  {
    q: 'Comment mettre à jour Scaffolder ?',
    a: 'Utilisez la commande intégrée qui détecte automatiquement votre plateforme et télécharge la bonne version :',
    cmd: 'scaffold upgrade'
  },
  {
    q: 'Comment installer une version spécifique ?',
    a: 'Téléchargez directement l\'archive depuis les releases GitHub :',
    cmd: 'curl -L -o scaffold.tar.gz https://github.com/akaletekoffilevis/Scaffolder-CLI/releases/download/v2.0.0/scaffold-linux-x64.tar.gz'
  },
  {
    q: 'Comment créer un template personnalisé ?',
    a: 'Transformez un dossier existant en template réutilisable. Scaffolder détecte automatiquement le type de projet :',
    cmd: 'scaffold template from-dir ./mon-projet --name=mon-template',
    link: { to: '/docs/registry', label: 'En savoir plus sur le registry' }
  },
  {
    q: 'Comment installer un plugin ?',
    a: 'Ajoutez un plugin depuis une URL Git. Le plugin doit contenir un plugin.json et un script exécutable :',
    cmd: 'scaffold plugin add https://github.com/user/mon-plugin',
    link: { to: '/docs/plugins', label: 'Documentation des plugins' }
  },
  {
    q: 'Comment créer mon propre plugin ?',
    a: 'Générez un squelette de plugin avec la commande intégrée :',
    cmd: 'scaffold plugin create mon-plugin'
  },
  {
    q: 'Comment utiliser l\'IA ?',
    a: 'Configurez d\'abord votre clé API et le fournisseur, puis utilisez les commandes suggest, explain, fix ou generate :',
    cmd: 'scaffold config set apiKey sk-xxxxx && scaffold config set provider grok',
    link: { to: '/docs/ai', label: 'Documentation IA' }
  },
  {
    q: 'Quels fournisseurs IA sont supportés ?',
    a: 'OpenAI (gpt-4o-mini), Claude (claude-3-haiku), Gemini (gemini-2.0-flash) et Grok (grok-2). Changez de fournisseur avec :',
    cmd: 'scaffold config set provider openai'
  },
  {
    q: 'Comment déployer un projet ?',
    a: 'Scaffolder peut déployer sur Vercel, Railway, Docker ou GitHub Pages. Sans argument, la plateforme est détectée automatiquement :',
    cmd: 'scaffold deploy --target=vercel --prod',
    link: { to: '/docs/deployment', label: 'Guide de déploiement' }
  },
  {
    q: 'Les templates composés, ça fonctionne comment ?',
    a: 'Vous pouvez combiner plusieurs templates avec le signe + pour créer un projet fullstack. Exemple : frontend React + backend API :',
    cmd: 'scaffold new webapi+react --name=full-app'
  },
  {
    q: 'Comment créer un projet fullstack complet ?',
    a: 'La commande stack génère un projet complet frontend + backend + base de données :',
    cmd: 'scaffold stack vite-dotnet --name=ecommerce'
  },
  {
    q: 'Comment utiliser un template du registry ?',
    a: 'Recherchez et installez depuis le registry communautaire :',
    cmd: 'scaffold registry search blog && scaffold registry install blog-template',
    link: { to: '/docs/registry', label: 'Documentation du registry' }
  },
  {
    q: 'Comment configurer un template favori ?',
    a: 'Définissez un template par défaut pour utiliser --fav dans scaffold new :',
    cmd: 'scaffold config set fav webapi'
  },
  {
    q: 'Comment vérifier ma configuration ?',
    a: 'La commande doctor vérifie tous les outils installés et la configuration :',
    cmd: 'scaffold doctor'
  },
  {
    q: 'Comment activer l\'auto-complétion ?',
    a: 'Générez le script d\'auto-complétion pour votre shell :',
    cmd: 'scaffold completion bash > /etc/bash_completion.d/scaffold'
  },
  {
    q: 'Quels shells sont supportés pour l\'auto-complétion ?',
    a: 'bash, zsh, fish, powershell. Générez le script adapté à votre shell :',
    cmd: 'scaffold completion zsh > /usr/local/share/zsh/site-functions/_scaffold'
  },
  {
    q: 'Comment générer une licence pour mon projet ?',
    a: 'Scaffolder supporte 10 types de licences :',
    cmd: 'scaffold license mit'
  },
  {
    q: 'Comment créer un workspace monorepo ?',
    a: 'Initialisez un workspace avec plusieurs sous-projets en une commande :',
    cmd: 'scaffold workspace init monorepo --projects=frontend+vite,backend+webapi --manager=npm',
    link: { to: '/docs/workspace', label: 'Documentation workspace' }
  },
  {
    q: 'Comment générer une extension VS Code ?',
    a: 'Scaffolder peut générer une extension VS Code complète prête à publier :',
    cmd: 'scaffold vscode init mon-extension'
  },
  {
    q: 'Comment exécuter plusieurs générations à la suite ?',
    a: 'Utilisez le mode batch avec un fichier YAML de configuration :',
    cmd: 'scaffold batch scaffold-batch.yml'
  },
  {
    q: 'Quels sont les prérequis système ?',
    a: 'Aucun runtime requis. Scaffolder est compilé en binaire natif AOT. Il fonctionne sur Linux (x64, arm64, musl), macOS (Intel, Apple Silicon) et Windows (x64, x86).',
    cmd: null
  },
  {
    q: 'Quelle est la taille du binaire ?',
    a: '~12 MB en moyenne selon la plateforme. Grâce à la compilation AOT, pas de runtime .NET nécessaire.',
    cmd: null
  },
  {
    q: 'Comment signaler un bug ?',
    a: 'Utilisez la commande intégrée qui ouvre votre client mail avec un rapport pré-rempli :',
    cmd: 'scaffold bug "description du bug"'
  },
  {
    q: 'Comment contribuer au projet ?',
    a: 'Clonez le dépôt, créez une branche, faites vos modifications et soumettez une PR :',
    cmd: 'git clone https://github.com/akaletekoffilevis/Scaffolder-CLI.git',
    link: { to: '/contributing', label: 'Guide de contribution' }
  },
  {
    q: 'Scaffolder est-il gratuit ?',
    a: 'Oui, Scaffolder est 100% open source sous licence MIT. Gratuit à utiliser, modifier et distribuer.',
    cmd: null
  },
  {
    q: 'Comment comparer deux templates ?',
    a: 'Comparez la structure, les fichiers et les dépendances de deux templates :',
    cmd: 'scaffold compare vite next'
  },
  {
    q: 'Comment auditer la sécurité d\'un template ?',
    a: 'Vérifiez les vulnérabilités, dépendances et fichiers sensibles :',
    cmd: 'scaffold audit mon-projet'
  },
  {
    q: 'Comment générer un marketplace de templates ?',
    a: 'Créez un site statique avec tous vos templates pour les partager :',
    cmd: 'scaffold store --output=./mon-marketplace --publish'
  },
  {
    q: 'Comment initialiser un projet complet rapidement ?',
    a: 'La commande init configure Docker, CI, GitHub, .env et .gitignore en une étape :',
    cmd: 'scaffold init'
  },
  {
    q: 'Comment lancer l\'interface web locale ?',
    a: 'Scaffolder inclut un serveur HTTP intégré avec interface web interactive :',
    cmd: 'scaffold ui --port=3000'
  },
  {
    q: 'Comment migrer un projet d\'un template à un autre ?',
    a: 'Migrez la structure tout en préservant le code personnalisé :',
    cmd: 'scaffold migrate webapi blazor --path=./mon-projet'
  },
  {
    q: 'Comment regarder un dossier et re-générer automatiquement ?',
    a: 'Utilisez le mode watch pour le développement en temps réel :',
    cmd: 'scaffold watch webapi --name=mon-api --watch-dir=./src'
  },
  {
    q: 'Quels outils sont vérifiés par scaffold doctor ?',
    a: 'dotnet, node, npm, cargo, rustc, go, python, flutter, docker, git, gh. Selon votre OS et vos projets.',
    cmd: null
  },
  {
    q: 'Comment exporter/importer ma configuration ?',
    a: 'Sauvegardez ou transférez votre configuration entre machines :',
    cmd: 'scaffold config export ~/scaffold-config.json'
  },
]

export default function FAQ() {
  const [search, setSearch] = useState('')
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const filtered = faqs.filter(f =>
    f.q.toLowerCase().includes(search.toLowerCase()) ||
    (f.cmd && f.cmd.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className="page-content">
      <h1>FAQ</h1>
      <p>Plus de 30 questions fréquentes sur Scaffolder. Utilisez la recherche pour trouver rapidement une réponse.</p>

      <div className="search-box">
        <input
          type="text"
          placeholder="Rechercher dans la FAQ..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {filtered.map((item, i) => (
        <div
          key={i}
          className={`cmd-accordion${openIdx === i ? ' open' : ''}`}
          style={{ marginBottom: 8 }}
        >
          <div className="cmd-header" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
            <span style={{ flex: 1 }}>{item.q}</span>
            <span className="cmd-arrow">{openIdx === i ? '▲' : '▼'}</span>
          </div>
          {openIdx === i && (
            <div className="cmd-body">
              <p>{item.a}</p>
              {item.cmd && (
                <div className="install-cmd">
                  <code>{item.cmd}</code>
                  <button className="btn-copy" onClick={() => copyText(item.cmd!)}>Copier</button>
                </div>
              )}
              {item.link && (
                <p style={{ marginTop: 8 }}>
                  <Link to={item.link.to}>{item.link.label}</Link>
                </p>
              )}
            </div>
          )}
        </div>
      ))}

      <h2>Vous ne trouvez pas votre réponse ?</h2>
      <p>
        Consultez la <Link to="/docs">documentation complète</Link>,
        ouvrez une <a href="https://github.com/akaletekoffilevis/Scaffolder-CLI/discussions" target="_blank" rel="noopener noreferrer">discussion GitHub</a>,
        ou contactez-nous directement :
      </p>
      <ContactForm />
    </div>
  )
}
