import type { Metadata } from 'next'
import { Footer } from '@/components/footer'
import { Nav } from '@/components/nav'
import '../landing.css'

export const metadata: Metadata = { title: 'Security — qr-server' }

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function EyeOffIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  )
}

const sections = [
  {
    icon: <ShieldIcon />,
    title: 'Encryption',
    items: [
      'All data in transit encrypted with TLS 1.3. TLS 1.2 minimum enforced.',
      'Data at rest encrypted with AES-256 on all storage volumes.',
      'Ed25519 private keys stored in HSM-backed key stores — never written to disk in plaintext.',
      'API keys are hashed with bcrypt before storage; we cannot recover a lost key.',
    ],
  },
  {
    icon: <LockIcon />,
    title: 'Access control',
    items: [
      'Production access restricted to named engineers via short-lived certificates (no standing SSH keys).',
      'All production access is logged and reviewed weekly.',
      'Principle of least privilege enforced via IAM roles — services cannot access resources they don\'t own.',
      'Two-person approval required for database schema changes and key rotation.',
    ],
  },
  {
    icon: <EyeOffIcon />,
    title: 'Operational security',
    items: [
      'Automated dependency scanning on every commit (Dependabot + Trivy).',
      'Static analysis and SAST in CI; builds fail on critical findings.',
      'Penetration test performed annually by an independent third party. Summary available on request under NDA.',
      'Incident response plan tested with tabletop exercises each quarter.',
    ],
  },
]

export default function SecurityPage() {
  return (
    <div className="landing-page">
      <Nav />
      <main className="page">
        <div className="page-header">
          <div className="eyebrow"><span className="dot" /> Security</div>
          <h1>Built to be trusted.</h1>
          <p className="lede">Security is load-bearing infrastructure, not a checkbox. Here&apos;s how we approach it.</p>
        </div>

        <div className="badge-row">
          {['SOC 2 Type II', 'ISO 27001', 'GDPR', 'HIPAA-ready'].map((b) => (
            <div key={b} className="compliance-badge">{b}</div>
          ))}
        </div>

        <div className="security-grid">
          {sections.map((s) => (
            <div key={s.title} className="security-card">
              <div className="security-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <ul>
                {s.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="prose" style={{ marginTop: 48 }}>
          <h2>Responsible disclosure</h2>
          <p>If you discover a security vulnerability, please email <a href="mailto:security@qrserver.io" className="auth-link">security@qrserver.io</a> with a description and reproduction steps. We will acknowledge within 24 hours and keep you updated throughout remediation. We ask for 90 days to patch before public disclosure.</p>
          <p>We do not currently operate a bug bounty program, but we recognise researchers who report valid findings in our Hall of Fame (with their permission).</p>

          <h2>Compliance reports</h2>
          <p>Our SOC 2 Type II report and ISO 27001 certificate are available to Enterprise customers and qualified prospects under NDA. Contact <a href="mailto:security@qrserver.io" className="auth-link">security@qrserver.io</a> to request a copy.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
