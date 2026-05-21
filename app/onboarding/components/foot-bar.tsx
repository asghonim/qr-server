import { STEPS } from './constants'
import { Icon } from '@/components/onboarding/icon'

export function FootBar({
  step,
  onBack,
  onNext,
  nextLabel,
  canNext,
  nextLoading,
}: {
  step: number
  onBack: () => void
  onNext: () => void
  nextLabel: string
  canNext: boolean
  nextLoading: boolean
}) {
  const progress = ((step - 1) / (STEPS.length - 1)) * 100

  return (
    <footer className="ob-foot">
      <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
        <div data-testid="ob-progress" className="ob-progress"><div className="ob-bar" style={{ width: `${progress}%` }} /></div>
        <span className="ob-ptext">Step {step} of {STEPS.length}</span>
      </div>
      <div className="ob-actions">
        <button data-testid="ob-back-btn" type="button" className="ob-btn" onClick={onBack} disabled={step === 1} style={{ opacity: step === 1 ? 0.4 : 1 }}>
          <Icon name="chevron-left" size={14} /> Back
        </button>
        <button data-testid="ob-next-btn" type="button" className="ob-btn primary" onClick={onNext} disabled={!canNext || nextLoading}>
          {nextLoading ? <><span className="ob-spinner" /> Working…</> : <>{nextLabel} <Icon name="arrow-right" size={14} /></>}
        </button>
      </div>
    </footer>
  )
}