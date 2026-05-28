import type { Metadata } from 'next'
import { Footer } from '@/components/footer'
import { Nav } from '@/components/nav'
import '../landing.css'
import { ComingSoon } from '@/components/coming-soon'

export const metadata: Metadata = { title: 'Docs — qr-server' }

export default function DocsPage() {
  return (
    <div className="landing-page">
      <Nav />
      <main className="page"
        style={{
          minHeight: 'calc(90dvh - 56px)',
          display: 'flex',
          flexDirection: 'column',
        }}>
        <ComingSoon title='docs' description='Comprehensive documentation for all features and APIs, including guides, references, and examples.' />
        {/* <div className="status-hero">
          <div className="status-dot-lg" />
          <h1>All systems operational</h1>
          <p>Last checked just now · 90-day uptime shown below</p>
        </div>

        <div className="status-list">
          {services.map((svc) => (
            <div key={svc.name} className="status-row">
              <div className="status-row-header">
                <span className="status-name">{svc.name}</span>
                &nbsp;
                <span className={`status-badge ${svc.status}`}>{STATUS_LABEL[svc.status]}</span>
              </div>
              <UptimeBar warns={svc.warns} errs={svc.errs} />
              <div className="status-row-footer">
                <span>90 days ago</span>
                &nbsp;·&nbsp;
                <span>{svc.uptime} uptime</span>
                &nbsp;·&nbsp;
                <span>Today</span>
              </div>
            </div>
          ))}
        </div>

        <div className="prose" style={{ marginTop: 56 }}>
          <h2>Past incidents</h2>
        </div>
        <div className="status-list" style={{ marginTop: 16 }}>
          {incidents.map((inc) => (
            <div key={inc.title} className="incident-row">
              <div className="incident-header">
                <span className="incident-date">{inc.date}</span>
                <span className="badge amber">Resolved · {inc.duration}</span>
              </div>
              <div className="incident-title">{inc.title}</div>
              <div className="incident-desc">{inc.desc}</div>
            </div>
          ))}
        </div> */}
      </main>
      <Footer />
    </div>
  )
}
