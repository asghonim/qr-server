import Link from 'next/link'

function BrandMark() {
  return (
    <div className="brand-mark">
      {Array.from({ length: 9 }).map((_, i) => <span key={i} />)}
    </div>
  )
}

export function Footer() {
  return (
    <footer data-testid="marketing-footer" className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="brand" data-testid="marketing-footer-brand-link">
            <BrandMark />
            <span>qr-server</span>
          </Link>
          <p>Signed QR codes, as an API. Built by a small team in Berlin and Lisbon.</p>
        </div>
        <div className="footer-col">
          <h4>Product</h4>
          <ul>
            <li><a href="/#features">Features</a></li>
            <li><a href="/#pricing">Pricing</a></li>
            <li><Link href="/app">Dashboard</Link></li>
            <li><Link href="/changelog">Changelog</Link></li>
            <li><Link href="/status">Status</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Developers</h4>
          <ul>
            <li><Link href="/docs">Documentation</Link></li>
            <li><Link href="/docs#api">API reference</Link></li>
            <li><Link href="/docs#sdks">SDKs</Link></li>
            <li><Link href="/docs#webhooks">Webhooks guide</Link></li>
            <li><a href="https://github.com" target="_blank" rel="noopener">GitHub ↗</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/security">Security</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-meta">
        <span>© 2026 qr-server. All rights reserved.</span>
        <span className="right">
          <span className="status-dot" />
          <Link href="/status" style={{ color: 'inherit' }}>All systems operational</Link>
        </span>
      </div>
    </footer>
  )
}
