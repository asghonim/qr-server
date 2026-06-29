import type { Metadata } from 'next'
import { Footer } from '@/components/footer'
import { Nav } from '@/components/nav'
import '../landing.css'

export const metadata: Metadata = { title: 'Security — qr-server' }

export default function SecurityPage() {
  return (
    <div className="landing-page">
      <Nav />
      <main className="page" style={{ minHeight: 'calc(90dvh - 56px)', display: 'flex', flexDirection: 'column' }}>
        <div className="page-header">
          <div className="eyebrow"><span className="dot" /> Security</div>
          <h1>Security at qr-server.</h1>
          <p className="lede">A signing service is only as good as the keys it protects. Here&apos;s how we protect yours.</p>
        </div>

        {/* <div style={{ maxWidth: 1080, margin: '0 auto 40px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          <div className="step">
            <div className="num"><span className="pill">SOC 2</span> Type II</div>
            <h3>Audited annually</h3>
            <p>Latest report available under NDA. Request via{' '}
              <a href="mailto:security@qrserver.io" className="auth-link" style={{ fontWeight: 400 }}>security@qrserver.io</a>.
            </p>
          </div>
          <div className="step">
            <div className="num"><span className="pill">ISO</span> 27001</div>
            <h3>Certified</h3>
            <p>Information security management system, certified by a recognized accreditor.</p>
          </div>
          <div className="step">
            <div className="num"><span className="pill">GDPR</span> compliant</div>
            <h3>EU data residency</h3>
            <p>EU customer data stays in eu-central-1. DPA available on request.</p>
          </div>
        </div> */}

        <div className="prose">
          <h2>Encryption</h2>
          <p>
            All traffic to qr-server is over TLS 1.3. We rate A+ on SSL Labs and reject anything older than TLS 1.2.
            At rest, customer data and audit logs are encrypted with AES-256-GCM via our cloud provider&apos;s managed
            KMS. Backups inherit the same encryption.
          </p>
          <p>
            Signing keys are a separate story. Free and Team plans store signing keys in an envelope-encrypted column,
            with the key-encrypting-key in a hardware-backed KMS. Enterprise plans get dedicated HSM-backed key
            custody — keys never leave the HSM, and signing happens inside the appliance.
          </p>

          <h2>Access control</h2>
          <p>
            Inside qr-server, fewer than 10 engineers can reach production data, and only via a bastion that requires
            hardware-key MFA and creates a session-level audit log. Read access to any specific customer&apos;s data
            is logged and reviewed.
          </p>
          <p>
            For your team, qr-server supports email + password with TOTP, Google, GitHub, and SAML SSO (Enterprise).
            We honor SCIM for automated provisioning.
          </p>

          <h2>Operational practices</h2>
          <ul>
            <li>
              <strong>Penetration testing.</strong> Annual third-party pen tests of the API and dashboard. Critical
              findings remediated within 30 days.
            </li>
            <li>
              <strong>Vulnerability scanning.</strong> Continuous SAST and dependency scanning in CI; weekly DAST
              against staging and prod.
            </li>
            <li>
              <strong>Backups.</strong> Postgres point-in-time recovery to 7 days. Audit logs are streamed to
              immutable storage with 1-year retention.
            </li>
            <li>
              <strong>Incident response.</strong> 24/7 on-call rotation. We publish post-mortems for any incident
              that affected customer requests; see{' '}
              <a href="/blog" className="auth-link">our blog</a>.
            </li>
          </ul>

          <h2>Responsible disclosure</h2>
          <p>
            If you find a vulnerability, please email{' '}
            <a href="mailto:security@qrserver.io" className="auth-link">security@qrserver.io</a>. We respond within
            one business day. 
            {/* and pay bounties for valid reports through our{' '}
            <a href="#" className="auth-link">disclosure program</a>. */}
          </p>
          <p>
            Out of scope: rate-limiting bypasses on the marketing site, missing security headers on docs pages,
            anything requiring a stolen signing key.
          </p>

          <h2>Subprocessors</h2>
          <p>We use a small, deliberately boring list of providers:</p>
          <ul>
            <li><strong>AWS</strong> — primary infrastructure (eu-central-1, us-east-1, ap-southeast-1).</li>
            <li><strong>Cloudflare</strong> — DNS, DDoS protection, image CDN.</li>
            <li><strong>Stripe</strong> — billing.</li>
            {/* <li><strong>Vanta</strong> — compliance automation.</li> */}
            <li><strong>Postmark</strong> — transactional email (password resets, webhook alerts).</li>
          </ul>
          <p>
            {/* The full list with versions and DPAs is at{' '}
            <a href="/subprocessors" className="auth-link">/subprocessors</a>.  */}
            Material changes are announced 30 days
            before they take effect.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
