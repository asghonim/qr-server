import type { Metadata } from 'next'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import '../landing.css'
import { ComingSoon } from '@/components/coming-soon'

export const metadata: Metadata = { title: 'Privacy Policy — qr-server' }

export default function PrivacyPage() {
  return (
    <div className="landing-page">
      <Nav />
      <main className="page" style={{
        minHeight: 'calc(90dvh - 56px)',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <ComingSoon title='privacy policy' description='Last updated May 1, 2026. We process as little data as possible to run the service.' />
        {/* <div className="page-header">
          <div className="eyebrow"><span className="dot" /> Legal</div>
          <h1>Privacy Policy.</h1>
          <p className="lede">Last updated May 1, 2026. We process as little data as possible to run the service.</p>
        </div>

        <div className="prose">
          <h2>1. What we collect</h2>
          <p>When you sign up, we collect your email address and a bcrypt-hashed password (or an OAuth token if you sign in via GitHub/Google). When you use the API, we log the App ID, timestamp, source IP, response status, and a hash of the token payload — never the raw payload or any user-identifying fields inside the QR code.</p>
          <p>We collect standard server logs (IP address, user-agent, request path, response code) for up to 30 days for operational purposes and then delete them.</p>

          <h2>2. How we use it</h2>
          <p>We use your email to send transactional messages (account creation, password reset, billing receipts, incident notifications). We do not send marketing email unless you explicitly opt in. We use request logs to detect abuse, generate aggregate metrics, and debug issues. We do not sell, rent, or share your data with third parties for advertising.</p>

          <h2>3. Sub-processors</h2>
          <p>We use a small number of sub-processors to run the service:</p>
          <ul>
            <li><strong>Hetzner / OVH</strong> — infrastructure hosting in EU data centers</li>
            <li><strong>Postmark</strong> — transactional email delivery</li>
            <li><strong>Stripe</strong> — payment processing (we never see your card number)</li>
            <li><strong>Cloudflare</strong> — DDoS mitigation and DNS</li>
          </ul>
          <p>All sub-processors are contractually bound to process your data only on our behalf and under equivalent data protection obligations.</p>

          <h2>4. Data location</h2>
          <p>All customer data is stored in the European Union (Frankfurt primary, Lisbon failover). If you are on an Enterprise plan, we can discuss data residency requirements separately.</p>

          <h2>5. Retention</h2>
          <p>Account data is retained for the life of the account plus 30 days after deletion (to allow for accidental deletion recovery). API audit logs are retained for 90 days on Free, 12 months on Pro, and as configured on Enterprise. Billing records are retained for 7 years as required by law.</p>

          <h2>6. Your rights</h2>
          <p>Under GDPR and similar regulations you have the right to access, correct, export, or delete your personal data. To exercise any of these rights, email <a href="mailto:privacy@qrserver.io" className="auth-link">privacy@qrserver.io</a> from your account email address. We will respond within 30 days.</p>

          <h2>7. Cookies</h2>
          <p>We use a single first-party session cookie to keep you logged in. We do not use tracking cookies, analytics pixels, or third-party advertising scripts on any page of the application or marketing site.</p>

          <h2>8. Changes to this policy</h2>
          <p>Material changes will be emailed to all registered users at least 14 days before they take effect. The changelog for this document is available on request.</p>

          <h2>9. Contact</h2>
          <p>Data controller: qr-server GmbH, Berlin, Germany. For privacy enquiries: <a href="mailto:privacy@qrserver.io" className="auth-link">privacy@qrserver.io</a>.</p>
        </div> */}
      </main>
      <Footer />
    </div>
  )
}
