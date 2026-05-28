import type { Metadata } from 'next'
import { Footer } from '@/components/footer'
import { Nav } from '@/components/nav'
import '../landing.css'
import { ComingSoon } from '@/components/coming-soon'

export const metadata: Metadata = { title: 'Status — qr-server' }

type ServiceStatus = 'operational' | 'degraded' | 'outage'

const services: { name: string; status: ServiceStatus; uptime: string; warns: number[]; errs: number[] }[] = [
  { name: 'QR Generation API', status: 'operational', uptime: '99.98%', warns: [34], errs: [] },
  { name: 'Validation API', status: 'operational', uptime: '99.94%', warns: [11, 34], errs: [12] },
  { name: 'Dashboard', status: 'operational', uptime: '99.99%', warns: [], errs: [] },
  { name: 'Webhook delivery', status: 'operational', uptime: '99.91%', warns: [28, 29, 30], errs: [] },
  { name: 'Key management', status: 'operational', uptime: '100%', warns: [], errs: [] },
  { name: 'CDN / edge cache', status: 'operational', uptime: '99.97%', warns: [56], errs: [] },
]

const incidents = [
  {
    date: 'Mar 4, 2026',
    title: 'Validation API degraded — eu-west-1',
    duration: '23 min',
    resolved: true,
    desc: 'A bad deploy introduced a deadlock in the verifier path. Rolling back restored service. Post-mortem published.',
  },
  {
    date: 'Jan 11, 2026',
    title: 'Elevated error rate — webhook delivery',
    duration: '41 min',
    resolved: true,
    desc: 'Downstream HTTP client connection pool exhausted under burst load. Pool limits increased.',
  },
]

const STATUS_LABEL: Record<ServiceStatus, string> = {
  operational: 'Operational',
  degraded: 'Degraded',
  outage: 'Outage',
}

function UptimeBar({ warns, errs }: { warns: number[]; errs: number[] }) {
  return (
    <div className="uptime-bar">
      {Array.from({ length: 90 }).map((_, i) => {
        const cls = errs.includes(i) ? 'err' : warns.includes(i) ? 'warn' : ''
        return <span key={i} className={cls || undefined} />
      })}
    </div>
  )
}

export default function StatusPage() {
  return (
    <div className="landing-page">
      <Nav />
      <main className="page"
        style={{
          minHeight: 'calc(90dvh - 56px)',
          display: 'flex',
          flexDirection: 'column',
        }}>
        <ComingSoon title='status' description='Real-time status and historical uptime for every component of the service, plus a timeline of past incidents and their resolutions.' />
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
