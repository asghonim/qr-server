import { Icon } from '@/components/onboarding/icon'
import { QRCanvas } from './qr-canvas'
import type { AppData, GeneratedData } from './types'

export function StepValidate({
  app,
  generated,
  validating,
  validated,
  onValidate,
  payload,
}: {
  app: AppData
  generated: GeneratedData
  validating: boolean
  validated: boolean
  onValidate: () => void
  payload: string
}) {
  let parsedPayload: Record<string, unknown> = {}
  try {
    parsedPayload = JSON.parse(payload)
  } catch {}

  return (
    <div className="ob-card">
      <div className="ob-left">
        <div className="ob-eyebrow"><span className="pip" /> Step 5 · Validate</div>
        <h1>Verify, anywhere.</h1>
        <p className="lede">
          A single GET. No SDK, no client secret — your scanner only needs the token to ask us if it&apos;s genuine. Responses come back in 12 ms p50.
        </p>
        <div className="ob-terminal" style={{ marginBottom: 14 }}>
          <span className="tb">curl</span>{' '}<span className="ts">&quot;https://api.qrserver.io/{app.id}/validate?token={generated.token.slice(0, 14)}…&quot;</span>
        </div>
        <ul className="ob-bullets">
          <li><span className="icowrap"><Icon name="check-circle" size={14} /></span><span><b>Returns the verified payload.</b> Plus expiry, issuance time, and revoke status.</span></li>
          <li>
            <span className="icowrap"><Icon name="x-circle" size={14} /></span>
            <span>
              <b>Or a structured failure.</b>{' '}
              <code style={{ fontFamily: 'var(--mono)', fontSize: 11, background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 3, padding: '1px 5px' }}>expired</code>,{' '}
              <code style={{ fontFamily: 'var(--mono)', fontSize: 11, background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 3, padding: '1px 5px' }}>revoked</code>, or{' '}
              <code style={{ fontFamily: 'var(--mono)', fontSize: 11, background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 3, padding: '1px 5px' }}>bad_signature</code>.
            </span>
          </li>
        </ul>
      </div>
      <div className="ob-right">
        <div className="ob-right-head">
          <span className="method get">GET</span>
          <span className="rh-label">/{app.id}/validate</span>
          {validated && <span style={{ marginLeft: 'auto', color: 'oklch(0.4 0.13 155)', fontSize: 11 }}>200 OK · 12ms</span>}
        </div>
        <div className="ob-right-body">
          {!validated ? (
            <>
              <div className="scanner">
                <div className="scanner-frame">
                  <span className="scanner-corner bl" />
                  <span className="scanner-corner br" />
                  <QRCanvas payload={generated.token} size={200} qrStyle="square" />
                  {validating && <div className="scanner-line" />}
                </div>
              </div>
              <button data-testid="ob-validate-btn" type="button" className="ob-btn primary" style={{ width: '100%', justifyContent: 'center', marginTop: 16, padding: '10px 16px' }} onClick={onValidate} disabled={validating}>
                {validating ? <><span className="ob-spinner" /> Validating…</> : <><Icon name="check" size={13} /> Send validation request</>}
              </button>
            </>
          ) : (
            <>
              <div className="ob-terminal">
                {'{\n'}
                {'  '}<span className="tk">&quot;valid&quot;</span>{': '}<span className="tb">true</span>{',\n'}
                {'  '}<span className="tk">&quot;payload&quot;</span>{': '}
                {JSON.stringify(parsedPayload, null, 2).split('\n').map((line, index, all) => (
                  <span key={index}>{index === 0 ? line : `  ${line}`}{index < all.length - 1 ? '\n' : ''}</span>
                ))}
                {',\n'}
                {'  '}<span className="tk">&quot;issued_at&quot;</span>{': '}<span className="tn">{generated.expires_at - generated.ttl}</span>{',\n'}
                {'  '}<span className="tk">&quot;expires_at&quot;</span>{': '}<span className="tn">{generated.expires_at}</span>{',\n'}
                {'  '}<span className="tk">&quot;algorithm&quot;</span>{': '}<span className="ts">&quot;{app.algo}&quot;</span>{'\n}'}
              </div>
              <div data-testid="ob-validate-result" className="valid-card">
                <div className="vic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h4>Signature verified.</h4>
                  <p>That&apos;s a real signed QR, end to end. Nice work.</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}