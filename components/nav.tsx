import Link from 'next/link'

function BrandMark() {
  return (
    <div className="brand-mark">
      {Array.from({ length: 9 }).map((_, i) => <span key={i} />)}
    </div>
  )
}

export function Nav() {
  return (
    <nav data-testid="marketing-nav" className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand" data-testid="marketing-nav-brand-link">
          <BrandMark />
          <span>qr-server</span>
        </Link>
        <div className="nav-links">
          <Link href="/#how" data-testid="marketing-nav-how-it-works-link">How it works</Link>
          <Link href="/#features" data-testid="marketing-nav-features-link">Features</Link>
          <Link href="/#pricing" data-testid="marketing-nav-pricing-link">Pricing</Link>
          <Link href="/docs" data-testid="marketing-nav-docs-link">Docs</Link>
        </div>
        <div className="nav-actions">
          <Link href="/app" className="btn ghost" data-testid="marketing-nav-signin-btn">Sign in</Link>
          <Link href="/app" className="btn primary" data-testid="marketing-nav-start-free-btn">Start free</Link>
        </div>
      </div>
    </nav>
  )
}
