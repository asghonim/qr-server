import Link from 'next/link'

import { STEPS } from './constants'
import { Icon } from '@/components/onboarding/icon'

export function TopBar({ step }: { step: number }) {
  return (
    <header className="ob-top">
      <Link href="/" className="ob-brand" data-testid="ob-brand-link">
        <div className="ob-brand-mark">
          <span /><span /><span /><span /><span /><span /><span /><span /><span />
        </div>
        <span>qr-server</span>
      </Link>
      <div className="ob-top-mid">
        <div className="ob-stepper" role="progressbar" aria-valuemin={1} aria-valuemax={5} aria-valuenow={step}>
          {STEPS.map((stepDef, index) => {
            const state = step > stepDef.id ? 'done' : step === stepDef.id ? 'active' : ''
            return (
              <span key={stepDef.id} style={{ display: 'contents' }}>
                <div data-testid={`ob-step-${stepDef.id}`} className={`step${state ? ` ${state}` : ''}`}>
                  <span className="num">{state === 'done' ? <Icon name="check" size={11} /> : stepDef.id}</span>
                  <span className="slbl">{stepDef.label}</span>
                </div>
                {index < STEPS.length - 1 && <span className="sep" />}
              </span>
            )
          })}
        </div>
      </div>
      <div className="ob-top-right">
        <Link href="/app" className="ob-skip" data-testid="ob-skip-link">Skip setup</Link>
        <div className="ob-user-chip">JS</div>
      </div>
    </header>
  )
}