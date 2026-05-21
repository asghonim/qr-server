'use client'

import { useState } from 'react'

import type { AppData } from './types'

import { Icon } from '@/components/onboarding/icon'
import { useCopy } from './use-copy'

export function StepSaveKey({ app, ack, setAck }: { app: AppData; ack: boolean; setAck: (value: boolean) => void }) {
  const [copied, copy] = useCopy()
  const [revealed, setRevealed] = useState(false)
  const masked = '•'.repeat(48)

  return (
    <div className="ob-card">
      <div className="ob-left">
        <div className="ob-eyebrow"><span className="pip" /> Step 3 · Save key</div>
        <h1>Save this key. We won&apos;t show it again.</h1>
        <p className="lede">
          Your signing key is the one secret in this whole system. Treat it like a database password — store it in a secret manager, never commit it to git, and never expose it to a client.
        </p>
        <ul className="ob-bullets">
          <li><span className="icowrap"><Icon name="lock" size={14} /></span><span><b>Server-side only.</b> The signing key never goes in browsers or mobile apps.</span></li>
          <li><span className="icowrap"><Icon name="refresh" size={14} /></span><span><b>Rotate any time.</b> We keep the previous key warm for 5 minutes so in-flight QRs still validate.</span></li>
          <li><span className="icowrap"><Icon name="eye" size={14} /></span><span><b>Public key is always retrievable.</b> Use it to verify in your own stack if you&apos;d like.</span></li>
        </ul>
      </div>
      <div className="ob-right">
        <div className="ob-right-head">
          <Icon name="check-circle" size={13} />
          <span className="rh-label">App created · {app.id}</span>
          <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--muted)' }}>{app.algo}</span>
        </div>
        <div className="ob-right-body">
          <div className="key-row">
            <div className="key-label-row">
              <span className="klbl">App ID</span>
              <span className="ktag safe">SAFE TO SHARE</span>
            </div>
            <div className="keybox">
              <span className="kv">{app.id}</span>
              <button data-testid="ob-copy-app-id-btn" type="button" className={`kbtn${copied === 'id' ? ' copied' : ''}`} onClick={() => copy(app.id, 'id')}>
                <Icon name={copied === 'id' ? 'check' : 'copy'} size={11} />
                {copied === 'id' ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>

          <div className="key-row">
            <div className="key-label-row">
              <span className="klbl">Public key</span>
              <span className="ktag public">PUBLIC</span>
            </div>
            <div className="keybox">
              <span className="kv">{app.publicKey}</span>
              <button data-testid="ob-copy-public-key-btn" type="button" className={`kbtn${copied === 'pk' ? ' copied' : ''}`} onClick={() => copy(app.publicKey, 'pk')}>
                <Icon name={copied === 'pk' ? 'check' : 'copy'} size={11} />
                {copied === 'pk' ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>

          <div className="key-row">
            <div className="key-label-row">
              <span className="klbl">Signing key</span>
              <span className="ktag secret">SECRET · SHOWN ONCE</span>
            </div>
            <div className="keybox danger">
              <span className={`kv${revealed ? '' : ' masked'}`}>{revealed ? app.signingKey : masked}</span>
              <button data-testid="ob-reveal-signing-key-btn" type="button" className="kbtn" onClick={() => setRevealed((current) => !current)}>
                <Icon name={revealed ? 'eye-off' : 'eye'} size={11} />
                {revealed ? 'Hide' : 'Reveal'}
              </button>
              <button data-testid="ob-copy-signing-key-btn" type="button" className={`kbtn${copied === 'sk' ? ' copied' : ''}`} onClick={() => copy(app.signingKey, 'sk')}>
                <Icon name={copied === 'sk' ? 'check' : 'copy'} size={11} />
                {copied === 'sk' ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>

          <label className={`ack-row${ack ? ' checked' : ''}`}>
            <input data-testid="ob-ack-checkbox" type="checkbox" checked={ack} onChange={(event) => setAck(event.target.checked)} />
            <span>
              <b style={{ fontWeight: 600 }}>I&apos;ve stored my signing key somewhere safe.</b><br />
              <span style={{ color: 'var(--muted)', fontSize: 12 }}>
                We can&apos;t show it to you again. If you lose it, you&apos;ll need to rotate.
              </span>
            </span>
          </label>
        </div>
      </div>
    </div>
  )
}