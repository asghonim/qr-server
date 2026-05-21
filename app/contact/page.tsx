import type { Metadata } from 'next'
import { Footer } from '@/components/footer'
import { Nav } from '@/components/nav'
import ContactForm from './contact-form'
import '../landing.css'

export const metadata: Metadata = { title: 'Contact — qr-server' }

export default function ContactPage() {
  return (
    <div className="landing-page">
      <Nav />
      <main className="page">
        <div className="page-header">
          <div className="eyebrow"><span className="dot" /> Contact</div>
          <h1>Get in touch.</h1>
          <p className="lede">We&apos;re a small team. You&apos;ll hear back from a real person, usually within one business day.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <div className="contact-label">General &amp; support</div>
                <a href="mailto:hello@qrserver.io" className="auth-link">hello@qrserver.io</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="contact-label">Office</div>
                <span style={{ color: 'var(--text-2)', fontSize: 14 }}>Berlin, Germany · Lisbon, Portugal</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                  <path d="M9 12h6M12 9v6" />
                </svg>
              </div>
              <div>
                <div className="contact-label">Security disclosures</div>
                <a href="mailto:security@qrserver.io" className="auth-link">security@qrserver.io</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </div>
              <div>
                <div className="contact-label">Response time</div>
                <span style={{ color: 'var(--text-2)', fontSize: 14 }}>Usually &lt; 1 business day</span>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
