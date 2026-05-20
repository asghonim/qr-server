import Link from 'next/link'

import { heroCodeHTML } from './data/landing-content'
import { QRCodeSVG } from './svg/qr-code-svg'

export function HeroSection() {
  const heroPayload = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IlFSIn0.eyJzZWF0IjoiQi0xNCJ9.4e8c1f2a93b6d7c0'

  return (
    <header className="hero">
      <div className="hero-grid">
        <div>
          <div className="eyebrow"><span className="dot" /> v2.4 — Ed25519 signing now available</div>
          <h1>
            <span className="signed">Signed</span> QR codes,<br />
            as an <em>API.</em>
          </h1>
          <p className="hero-sub">
            Generate tamper-proof QR codes and validate them in a single request. Two endpoints, real keys, audit logs. No SDK lock-in.
          </p>
          <div className="cta-row">
            <Link href="/app" className="btn primary lg" data-testid="hero-start-free-btn">Start free →</Link>
            <Link href="/docs" className="btn lg" data-testid="hero-docs-btn">Read the docs</Link>
            <span className="cta-meta"><span className="status-dot" /> No credit card. 10k QRs/mo free.</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-code">
            <div className="titlebar">
              <span className="dot" /><span className="dot" /><span className="dot" />
              <span className="file">issue-ticket.ts</span>
            </div>
            <pre style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: heroCodeHTML }} />
          </div>

          <div className="hero-qr-meta">
            <div className="row"><span className="k">App</span><span className="v">app_7gXk2pQ</span></div>
            <div className="row"><span className="k">Algorithm</span><span className="v">HS256</span></div>
            <div className="row"><span className="k">Expires</span><span className="v">in 59m 47s</span></div>
            <div className="row">
              <span className="k">Status</span>
              <span className="valid">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Signed
              </span>
            </div>
          </div>

          <div className="hero-qr">
            <QRCodeSVG payload={heroPayload} size={168} qrStyle="square" />
          </div>
        </div>
      </div>
    </header>
  )
}