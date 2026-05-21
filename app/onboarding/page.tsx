'use client'

import { useEffect, useState } from 'react'

import './onboarding.css'

import { USE_CASES } from './components/constants'
import { FootBar } from './components/foot-bar'
import { buildAppData, buildGeneratedData } from './components/helpers'
import { StepCreateApp } from './components/step-create-app'
import { StepDone } from './components/step-done'
import { StepGenerate } from './components/step-generate'
import { StepSaveKey } from './components/step-save-key'
import { StepValidate } from './components/step-validate'
import { StepWelcome } from './components/step-welcome'
import { TopBar } from './components/top-bar'
import type { AppData, FormData, GeneratedData } from './components/types'

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const [useCase, setUseCase] = useState<string | null>(null)
  const [form, setForm] = useState<FormData>({ name: '', env: 'staging', algo: 'HS256', ttl: '3600' })
  const [app, setApp] = useState<AppData | null>(null)
  const [ack, setAck] = useState(false)
  const [payload, setPayload] = useState('')
  const [generated, setGenerated] = useState<GeneratedData | null>(null)
  const [validated, setValidated] = useState(false)
  const [working, setWorking] = useState(false)

  useEffect(() => {
    if (!useCase) return
    const selectedUseCase = USE_CASES.find((option) => option.id === useCase)
    if (!selectedUseCase) return

    setForm((current) => current.name ? current : { ...current, name: selectedUseCase.suggested })
    setPayload(JSON.stringify(selectedUseCase.samplePayload, null, 2))
  }, [useCase])

  function next() {
    if (working) return

    if (step === 1) {
      setStep(2)
      return
    }

    if (step === 2) {
      setWorking(true)
      setTimeout(() => {
        setApp(buildAppData(form))
        setWorking(false)
        setStep(3)
      }, 700)
      return
    }

    if (step === 3) {
      setStep(4)
      return
    }

    if (step === 4) {
      setStep(5)
      return
    }

    if (step === 5) {
      setStep(6)
    }
  }

  function back() {
    setStep((current) => Math.max(1, current - 1))
  }

  function generate() {
    if (working || !app) return
    setWorking(true)
    setTimeout(() => {
      setGenerated(buildGeneratedData(app))
      setWorking(false)
    }, 700)
  }

  function validate() {
    if (working) return
    setWorking(true)
    setTimeout(() => {
      setValidated(true)
      setWorking(false)
    }, 900)
  }

  let canNext = false
  let nextLabel = 'Continue'
  let nextLoading = false

  if (step === 1) {
    canNext = !!useCase
  } else if (step === 2) {
    canNext = !!form.name.trim()
    nextLabel = 'Create App ID'
    nextLoading = working
  } else if (step === 3) {
    canNext = ack
  } else if (step === 4) {
    canNext = !!generated
    nextLabel = generated ? 'Continue' : 'Generate first'
  } else if (step === 5) {
    canNext = validated
    nextLabel = validated ? 'Finish' : 'Validate first'
  }

  return (
    <div className="ob-shell">
      <TopBar step={step} />
      <main className="ob-main">
        {step === 1 && <StepWelcome useCase={useCase} setUseCase={setUseCase} />}
        {step === 2 && <StepCreateApp form={form} setForm={setForm} />}
        {step === 3 && app && <StepSaveKey app={app} ack={ack} setAck={setAck} />}
        {step === 4 && app && <StepGenerate app={app} useCase={useCase} payload={payload} setPayload={setPayload} generated={generated} generating={working} onGenerate={generate} />}
        {step === 5 && app && generated && <StepValidate app={app} generated={generated} payload={payload} validating={working} validated={validated} onValidate={validate} />}
        {step === 6 && app && generated && <StepDone app={app} generated={generated} />}
      </main>
      {step <= 5 ? (
        <FootBar step={step} onBack={back} onNext={next} nextLabel={nextLabel} canNext={canNext} nextLoading={nextLoading} />
      ) : (
        <footer className="ob-foot">
          <div style={{ display: 'flex', alignItems: 'center', flex: 1, color: 'var(--muted)', fontSize: 12 }}>
            <span className="ob-status-dot" style={{ marginRight: 8 }} />
            Workspace ready · 10,000 free validations/month
          </div>
        </footer>
      )}
    </div>
  )
}
