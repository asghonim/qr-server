import { Footer } from '@/components/footer'
import { Nav } from '@/components/nav'
import type { Metadata } from 'next'
import '../landing.css'
import { ComingSoon } from '@/components/coming-soon'

export const metadata: Metadata = { title: 'Login — qr-server' }

export default function LoginPage() {
  return (
    <div className="landing-page">
      <Nav />
      <main
        className="page"
        style={{
          minHeight: 'calc(90dvh - 56px)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ComingSoon title='login' />
        {/* <div className="page-header">
          <div className="eyebrow"><span className="dot" /> About</div>
          <h1>A focused tool, run by a small team.</h1>
          <p className="lede">We make signed QR codes work, so you don&apos;t have to. Two endpoints, real keys, sober pricing.</p>
        </div>

        <div className="prose">
          <p>qr-server started in 2024 as an internal tool at a ticketing startup. The founders kept watching teams build the same brittle pipeline — sign with a JWT library, render with a QR library, validate with a third one, glue it together with a Lambda, hope nothing rotates. We extracted that pipeline into a service and discovered we weren&apos;t the only ones doing it.</p>
          <p>Today qr-server signs and validates several million QR codes a day for festivals, transit operators, warehouses, and (yes) ticketing startups. We are still a small team. We intend to stay that way.</p>

          <h2>What we believe</h2>
          <h3>Two endpoints is the right number</h3>
          <p>Most developer products grow by adding features. We grow by adding reliability, performance, and observability behind a tiny API surface. If you can&apos;t ship an integration in a single afternoon, we&apos;ve failed.</p>
          <h3>Pricing should match value</h3>
          <p>We meter validations, not generations. Most QR codes get printed and never scanned — charging for those is theatre. You pay when something actually runs through your system.</p>
          <h3>Boring infrastructure is good infrastructure</h3>
          <p>Our stack is Postgres, Redis, and a small Go service per region. No queue, no Kubernetes, no microservices. The whole production system fits on a whiteboard.</p>

          <h2>The team</h2>
        </div>

        <div className="team-grid" style={{ maxWidth: 720, margin: '24px auto 32px' }}>
          {[
            { initials: 'MR', name: 'Maya Rodriguez', role: 'Co-founder, CEO', bg: 'linear-gradient(135deg, oklch(0.65 0.09 30), oklch(0.5 0.1 350))' },
            { initials: 'JD', name: 'Jamie Diop', role: 'Co-founder, CTO', bg: 'linear-gradient(135deg, oklch(0.65 0.1 200), oklch(0.55 0.13 240))' },
            { initials: 'SL', name: 'Saoirse Lima', role: 'Platform engineering', bg: 'linear-gradient(135deg, oklch(0.7 0.1 155), oklch(0.55 0.12 200))' },
            { initials: 'HT', name: 'Hassan Talib', role: 'Customer engineering', bg: 'linear-gradient(135deg, oklch(0.75 0.1 60), oklch(0.6 0.13 30))' },
          ].map((m) => (
            <div key={m.initials} className="team-member">
              <div className="avatar" style={{ background: m.bg }}>{m.initials}</div>
              <div className="name">{m.name}</div>
              <div className="role">{m.role}</div>
            </div>
          ))}
        </div>

        <div className="prose">
          <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: 13.5 }}>
            Plus a fluctuating advisory cast of designers, contractors, and one extremely opinionated dog.
          </p>
          <hr />
          <h2>Want to work with us?</h2>
          <p>We hire slowly and deliberately. If our values resonate and you&apos;ve built things you&apos;re proud of, we&apos;d love to hear from you — even if there&apos;s no posted role. Write to <a href="mailto:hello@qrserver.io">hello@qrserver.io</a>.</p>
        </div> */}
      </main>
      <Footer />
    </div>
  )
}
