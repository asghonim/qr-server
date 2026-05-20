import Link from 'next/link'

import { QRCodeSVG } from './svg/qr-code-svg'

export function CtaSection() {
  const ctaPayload = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IlFSIn0.eyJ3ZWxjb21lIjp0cnVlfQ.a1b2c3d4e5f6a7b8'

  return (
    <section className="section" style={{ paddingTop: 32 }}>
      <div className="container">
        <div className="cta-banner">
          <div>
            <h2>Get to your first signed QR in under a minute.</h2>
            <p>
              No credit card. No &quot;talk to sales&quot; wall. The free tier is real and we don&apos;t downgrade you without warning.
            </p>
            <div className="cta-row">
              <Link href="/app" className="btn primary lg" data-testid="cta-start-free-btn">Start free →</Link>
              <Link href="/app" className="btn-outline" data-testid="cta-dashboard-btn">See the dashboard</Link>
            </div>
          </div>
          <div className="cta-banner-art">
            <div style={{ background: 'white', padding: 18, borderRadius: 14, boxShadow: '0 24px 48px -16px rgba(0,0,0,0.4)' }}>
              <QRCodeSVG payload={ctaPayload} size={200} qrStyle="dot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}