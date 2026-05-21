import { USE_CASES } from './constants'
import { Icon } from '@/components/onboarding/icon'
import { QRCanvas } from './qr-canvas'
import type { AppData, GeneratedData } from './types'

export function StepGenerate({
  app,
  useCase,
  payload,
  setPayload,
  generated,
  generating,
  onGenerate,
}: {
  app: AppData
  useCase: string | null
  payload: string
  setPayload: (value: string) => void
  generated: GeneratedData | null
  generating: boolean
  onGenerate: () => void
}) {
  const useCaseDef = USE_CASES.find((option) => option.id === useCase) || USE_CASES[5]

  return (
    <div className="ob-card">
      <div className="ob-left">
        <div className="ob-eyebrow"><span className="pip" /> Step 4 · Generate</div>
        <h1>Sign a payload.</h1>
        <p className="lede">
          The payload is whatever your scanner needs — a ticket ID, a seat number, an expiry. We sign it with your key and hand you back a token plus a renderable QR image.
        </p>
        <div className="ob-terminal" style={{ marginBottom: 14 }}>
          <span className="tc"># curl, no SDK needed</span>{'\n'}
          <span className="tb">curl</span>{' -X '}<span className="tb">POST</span>{' '}<span className="ts">&quot;https://api.qrserver.io/{app.id}/generate&quot;</span>{' \\\n'}
          {'  '}<span className="ts">-H &quot;Authorization: Bearer sk_...&quot;</span>{' \\\n'}
          {'  '}<span className="ts">-H &quot;Content-Type: application/json&quot;</span>{' \\\n'}
          {'  '}<span className="ts">-d &apos;&#123;...payload...&#125;&apos;</span>
        </div>
        <ul className="ob-bullets">
          <li><span className="icowrap"><Icon name="sparkle" size={14} /></span><span><b>Returns a signed token + image URL.</b> Use either, or both.</span></li>
          <li><span className="icowrap"><Icon name="apps" size={14} /></span><span><b>Renders to your brand.</b> Square or dot modules, custom colors, PNG or SVG.</span></li>
        </ul>
      </div>
      <div className="ob-right">
        <div className="ob-right-head">
          <span className="method post">POST</span>
          <span className="rh-label">/{app.id}/generate</span>
          {generated && <span style={{ marginLeft: 'auto', color: 'oklch(0.4 0.13 155)', fontSize: 11 }}>200 OK · 38ms</span>}
        </div>
        <div className="ob-right-body">
          {!generated ? (
            <>
              <div className="ob-field" style={{ marginBottom: 14 }}>
                <label>Payload <span style={{ color: 'var(--muted)', fontWeight: 400, fontFamily: 'var(--mono)', fontSize: 11 }}>· JSON</span></label>
                <textarea data-testid="ob-payload-textarea" className="json-editor" value={payload} onChange={(event) => setPayload(event.target.value)} spellCheck={false} />
                <div className="ob-hint">We pre-filled this based on &ldquo;{useCaseDef.label}&rdquo;. Edit anything you like.</div>
              </div>
              <button data-testid="ob-generate-btn" type="button" className="ob-btn primary" style={{ width: '100%', justifyContent: 'center', padding: '10px 16px' }} onClick={onGenerate} disabled={generating}>
                {generating ? <><span className="ob-spinner" /> Signing…</> : <><Icon name="play" size={13} /> Generate signed QR</>}
              </button>
            </>
          ) : (
            <>
              <div data-testid="ob-qr-result" className="qr-result">
                <div className="qr-box">
                  <QRCanvas payload={generated.token} size={150} qrStyle="square" />
                </div>
                <div className="qr-meta">
                  <div className="qkv"><span className="qk">Token</span><span className="qv" title={generated.token}>{generated.token.slice(0, 22)}…</span></div>
                  <div className="qkv"><span className="qk">Image</span><span className="qv">{generated.image_url}</span></div>
                  <div className="qkv"><span className="qk">Expires</span><span className="qv">in {Math.floor(generated.ttl / 60)} min</span></div>
                  <div className="qkv"><span className="qk">Algorithm</span><span className="qv">{app.algo}</span></div>
                </div>
              </div>
              <div className="ob-terminal" style={{ marginTop: 14 }}>
                {'{\n'}
                {'  '}<span className="tk">&quot;token&quot;</span>{': '}<span className="ts">&quot;{generated.token.slice(0, 32)}…&quot;</span>{',\n'}
                {'  '}<span className="tk">&quot;image_url&quot;</span>{': '}<span className="ts">&quot;{generated.image_url}&quot;</span>{',\n'}
                {'  '}<span className="tk">&quot;expires_at&quot;</span>{': '}<span className="tn">{generated.expires_at}</span>{',\n'}
                {'  '}<span className="tk">&quot;algorithm&quot;</span>{': '}<span className="ts">&quot;{app.algo}&quot;</span>{'\n}'}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}