import type { Metadata } from 'next'
import { Footer } from '@/components/footer'
import { Nav } from '@/components/nav'
import '../landing.css'

export const metadata: Metadata = { title: 'Changelog — qr-server' }

const entries = [
  {
    date: 'May 14, 2026',
    ver: 'v2.4.0 · 14 commits',
    title: 'EdDSA signing & webhook retries',
    items: [
      { tag: 'new', text: 'Ed25519 signing algorithm for all plans.' },
      { tag: 'new', text: 'Webhook deliveries now retry with exponential backoff up to 24 hours.' },
      { tag: 'fix', text: 'Validate endpoint no longer caches negative results across rotations.' },
      { tag: 'fix', text: 'Dashboard timezone respects browser locale instead of UTC.' },
    ],
  },
  {
    date: 'Apr 28, 2026',
    ver: 'v2.3.4 · patch',
    title: 'Rate limit headers + minor fixes',
    items: [
      { tag: 'new', text: 'X-RateLimit-Remaining and Retry-After on all responses.', code: true },
      { tag: 'fix', text: 'Activity feed export missed events at 5-minute window boundaries.' },
    ],
  },
  {
    date: 'Apr 09, 2026',
    ver: 'v2.3.0',
    title: 'Revoke list & single-use tokens',
    items: [
      { tag: 'new', text: 'POST /revoke endpoint to invalidate specific tokens.', code: true },
      { tag: 'new', text: 'single_use: true option burns a token on first successful validation.', code: true },
      { tag: 'brk', text: '/validate now returns 410 Gone for revoked tokens. Was 401 before — update your error handlers.', code: true },
    ],
  },
  {
    date: 'Mar 22, 2026',
    ver: 'v2.2.0',
    title: 'Dot-style QR rendering & logos',
    items: [
      { tag: 'new', text: 'Render QRs as dots instead of squares.' },
      { tag: 'new', text: 'Embed a small logo in the center of the code. Auto-adjusts error correction.' },
    ],
  },
  {
    date: 'Feb 18, 2026',
    ver: 'v2.1.2 · patch',
    title: 'Faster validation, smaller payloads',
    items: [
      { tag: 'fix', text: 'Validation p95 latency down from 38ms to 12ms after switching the verifier path to ring buffer cache.' },
      { tag: 'fix', text: 'Default token serialization is now base64url everywhere. Old URL-safe-base64 tokens still validate.' },
    ],
  },
  {
    date: 'Jan 30, 2026',
    ver: 'v2.1.0',
    title: 'Audit log search',
    items: [
      { tag: 'new', text: 'Search the activity feed by App ID, IP, status code, or payload substring.' },
      { tag: 'new', text: 'Export filtered events as CSV up to 100k rows.' },
    ],
  },
  {
    date: 'Dec 12, 2025',
    ver: 'v2.0.0',
    title: 'qr-server 2.0 — multi-app workspaces',
    items: [
      { tag: 'new', text: 'Each workspace can host unlimited App IDs (paid plans). Each App ID has its own signing scope, audit log, and rate limit.' },
      { tag: 'new', text: 'SAML SSO & SCIM on Enterprise.' },
      { tag: 'brk', text: 'The legacy /v1/qr endpoint is removed. Migrate to /api/<appid>/generate.', code: true },
    ],
  },
]

export default function ChangelogPage() {
  return (
    <div className="landing-page">
      <Nav />
      <main className="page">
        <div className="page-header">
          <div className="eyebrow"><span className="dot" /> Changelog</div>
          <h1>What&apos;s new in qr-server.</h1>
          <p className="lede">
            Every shipped change, smallest first. Subscribe to the <a href="#" className="auth-link">RSS feed</a> or follow <a href="#" className="auth-link">@qr_server</a> for live updates.
          </p>
        </div>

        <div className="timeline">
          {entries.map((e) => (
            <div key={e.date} className="tl-entry">
              <div className="tl-date">{e.date}</div>
              <div className="tl-card">
                <div className="ver">{e.ver}</div>
                <h3>{e.title}</h3>
                <ul>
                  {e.items.map((item, i) => (
                    <li key={i}>
                      <span className={`tag ${item.tag}`}>{item.tag}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
