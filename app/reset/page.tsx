'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

import { ForgotStep } from '@/components/forgot-step'
import { ResetCard } from '@/components/reset-card'
import { UpdateStep } from '@/components/update-step'

function ResetPageInner() {
  const searchParams = useSearchParams()
  const step = searchParams.get('step')
  const isUpdate = step === 'update'

  const title = isUpdate ? 'Set new password' : 'Reset your password'
  const description = isUpdate
    ? 'Choose a strong password for your account.'
    : 'Enter the email you signed up with and we\'ll send a reset link. Links expire in 30 minutes.'

  return (
    <div style={{
      minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 40,
      background: 'var(--dash-bg)',
      fontFamily: 'var(--font-geist-sans),ui-sans-serif,system-ui,sans-serif',
    }}>
      <ResetCard isUpdate={isUpdate} title={title} description={description}>
        {isUpdate ? <UpdateStep /> : <ForgotStep />}
      </ResetCard>
    </div>
  )
}

export default function ResetPage() {
  return (
    <Suspense>
      <ResetPageInner />
    </Suspense>
  )
}
