import Link from 'next/link'

import { Icon } from '@/components/onboarding/icon'
import type { AppData, GeneratedData } from './types'

export function StepDone({ app, generated }: { app: AppData; generated: GeneratedData }) {
  return (
    <div className="ob-card single">
      <div className="ob-right done-card">
        <div className="done-glyph">
          <span /><span /><span />
          <span /><span /><span />
          <span /><span /><span />
          <div className="done-checkring">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.025em', margin: '0 0 8px', textAlign: 'center' }}>
          You&apos;re live.
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: 15, margin: '0 auto', maxWidth: 440, lineHeight: 1.55, textAlign: 'center' }}>
          Your workspace is set up, your first App is signing real QRs, and the validate endpoint is returning <code style={{ fontFamily: 'var(--mono)', fontSize: 12, background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 3, padding: '1px 5px' }}>valid: true</code>. From here it&apos;s just code.
        </p>
        <div className="done-stats">
          <div className="ds"><div className="dlbl">Your App</div><div className="dval">{app.id}</div></div>
          <div className="ds"><div className="dlbl">Algorithm</div><div className="dval">{app.algo}</div></div>
          <div className="ds"><div className="dlbl">First token</div><div className="dval">{generated.token.slice(0, 14)}…</div></div>
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 28, flexWrap: 'wrap' }}>
          <Link href="/app" className="ob-btn primary" style={{ padding: '10px 18px' }} data-testid="ob-open-dashboard-link">
            Open dashboard <Icon name="arrow-right" size={14} />
          </Link>
          <Link href="/docs" className="ob-btn" style={{ padding: '10px 18px' }} data-testid="ob-read-docs-link">
            <Icon name="book" size={14} /> Read the docs
          </Link>
        </div>
      </div>
    </div>
  )
}