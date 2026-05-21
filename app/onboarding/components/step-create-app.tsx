import type { FormData } from './types'

import { Icon } from '@/components/onboarding/icon'

export function StepCreateApp({ form, setForm }: { form: FormData; setForm: (form: FormData) => void }) {
  return (
    <div className="ob-card">
      <div className="ob-left">
        <div className="ob-eyebrow"><span className="pip" /> Step 2 · App ID</div>
        <h1>An App ID isolates one product.</h1>
        <p className="lede">
          Each App gets its own signing key, audit log, and rate limit. Most teams have one per surface — one for tickets, one for vouchers, one for access. They rotate independently.
        </p>
        <ul className="ob-bullets">
          <li><span className="icowrap"><Icon name="shield" size={14} /></span><span><b>Independent keys.</b> A leak in one App can&apos;t compromise another.</span></li>
          <li><span className="icowrap"><Icon name="activity" size={14} /></span><span><b>Separate metering.</b> See exactly where your validations are coming from.</span></li>
          <li><span className="icowrap"><Icon name="settings" size={14} /></span><span><b>Per-App config.</b> Different TTLs, algorithms, and webhook URLs.</span></li>
        </ul>
      </div>
      <div className="ob-right">
        <div className="ob-right-head">
          <span className="method post">POST</span>
          <span className="rh-label">/v1/apps</span>
        </div>
        <div className="ob-right-body">
          <div className="ob-form">
            <div className="ob-field">
              <label htmlFor="ob-name">App name</label>
              <input data-testid="ob-app-name-input" id="ob-name" className="ob-input" placeholder="e.g. Festival Tickets" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} autoFocus />
              <div className="ob-hint">Shown in dashboards and audit logs. Not used in API requests.</div>
            </div>
            <div className="ob-field">
              <label>Environment</label>
              <div className="ob-seg" style={{ alignSelf: 'flex-start' }}>
                <button data-testid="ob-env-staging-btn" type="button" className={form.env === 'staging' ? 'active' : ''} onClick={() => setForm({ ...form, env: 'staging' })}>Staging</button>
                <button data-testid="ob-env-production-btn" type="button" className={form.env === 'production' ? 'active' : ''} onClick={() => setForm({ ...form, env: 'production' })}>Production</button>
              </div>
              <div className="ob-hint">Start in staging. You can promote later from the dashboard.</div>
            </div>
            <div className="ob-field-row">
              <div className="ob-field">
                <label>Signing algorithm</label>
                <select data-testid="ob-algo-select" className="ob-select" value={form.algo} onChange={(event) => setForm({ ...form, algo: event.target.value })}>
                  <option value="HS256">HS256 — HMAC-SHA256</option>
                  <option value="HS512">HS512 — HMAC-SHA512</option>
                  <option value="ES256">ES256 — ECDSA P-256</option>
                  <option value="EdDSA">EdDSA — Ed25519</option>
                </select>
              </div>
              <div className="ob-field">
                <label>Default TTL (seconds)</label>
                <input data-testid="ob-ttl-input" className="ob-input" type="number" min="0" value={form.ttl} onChange={(event) => setForm({ ...form, ttl: event.target.value })} />
                <div className="ob-hint">0 = no expiry. Overridable per request.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}