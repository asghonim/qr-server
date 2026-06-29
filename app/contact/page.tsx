import ContactForm from './contact-form'
import { Footer } from '@/components/footer'
import { Nav } from '@/components/nav'
import type { Metadata } from 'next'
import '../landing.css'

export const metadata: Metadata = { title: 'Contact — qr-server' }

export default function ContactPage() {
  return (
    <div className="landing-page">
      <Nav />
      <main className="page" style={{ minHeight: 'calc(90dvh - 56px)', display: 'flex', flexDirection: 'column' }}>
        <div className="page-header">
          <div className="eyebrow"><span className="dot" /> Contact</div>
          <h1>Talk to us.</h1>
          <p className="lede">We&apos;re a small team. Real humans answer. Replies usually come within a business day, often within an hour.</p>
        </div>

        <div className="contact-grid">
          <dl className="contact-info">
            <dt>General</dt>
            <dd><a href="mailto:hello@qrserver.io">hello@qrserver.io</a></dd>

            <dt>Support</dt>
            <dd>
              <a href="mailto:support@qrserver.io">support@qrserver.io</a><br />
              <span style={{ fontSize: 12.5, color: 'var(--muted)' }}>For account or API issues</span>
            </dd>

            <dt>Security</dt>
            <dd>
              <a href="mailto:security@qrserver.io">security@qrserver.io</a><br />
              {/* <span style={{ fontSize: 12.5, color: 'var(--muted)' }}>
                PGP key: <code className="kbd" style={{ fontSize: 11 }}>0x9F2A 93E4 C7B1 D6F0</code>
              </span> */}
            </dd>

            <dt>Press &amp; partnerships</dt>
            <dd><a href="mailto:press@qrserver.io">press@qrserver.io</a></dd>

            {/* <dt>Mailing address</dt>
            <dd>
              qr-server GmbH<br />
              Köpenicker Str. 154<br />
              10997 Berlin · Germany
            </dd> */}

            <dt>Status &amp; incidents</dt>
            <dd><a href="/status">status.qrserver.io</a></dd>
          </dl>

          <div className="contact-form">
            <div>
              <h2 style={{ margin: '0 0 4px', fontSize: 18, fontWeight: 600, letterSpacing: '-0.01em' }}>Send us a message</h2>
              <p style={{ margin: '0 0 8px', color: 'var(--muted)', fontSize: 13.5 }}>Tell us what&apos;s on your mind. The more specific, the faster we can help.</p>
            </div>
            <ContactForm />
            <p style={{ fontSize: 12, color: 'var(--muted)', margin: 0, textAlign: 'center' }}>
              We typically reply within 1 business day. For urgent issues, email{' '}
              <a href="mailto:support@qrserver.io" className="auth-link" style={{ fontWeight: 400 }}>support</a> directly.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
