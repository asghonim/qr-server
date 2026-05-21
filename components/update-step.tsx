'use client'

import { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'

import { getSupabaseBrowserClient } from '@/lib/supabase/client'
import { AuthInput } from '@/components/auth-input'
import { FieldLabel } from '@/components/field-label'
import { ServerError } from '@/components/server-error'
import { SubmitBtn } from '@/components/submit-btn'

import { SuccessCard } from './success-card'

export function UpdateStep() {
  const router = useRouter()
  const supabase = getSupabaseBrowserClient()

  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [passwordErr, setPasswordErr] = useState('')
  const [confirmErr, setConfirmErr] = useState('')
  const [serverErr, setServerErr] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const handleSubmit = useCallback(async (event: React.FormEvent) => {
    event.preventDefault()
    let ok = true
    setServerErr('')

    if (password.length < 10) {
      setPasswordErr('Password must be at least 10 characters')
      ok = false
    } else {
      setPasswordErr('')
    }

    if (password !== confirm) {
      setConfirmErr("Passwords don't match")
      ok = false
    } else {
      setConfirmErr('')
    }

    if (!ok) return

    setLoading(true)
    const { error } = await supabase.auth.updateUser({ password })
    setLoading(false)

    if (error) {
      setServerErr(error.message)
      return
    }

    setDone(true)
    setTimeout(() => router.push('/app'), 1800)
  }, [confirm, password, router, supabase])

  if (done) {
    return (
      <SuccessCard data-testid="reset-update-success">
        <div style={{ fontWeight: 500, marginBottom: 2 }}>Password updated</div>
        <div>You&apos;re being redirected to your dashboard…</div>
      </SuccessCard>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate data-testid="reset-update-form">
      {serverErr && <ServerError msg={serverErr} />}
      <div style={{ marginBottom: 14 }}>
        <FieldLabel htmlFor="password">New password</FieldLabel>
        <AuthInput
          id="password"
          type="password"
          placeholder="At least 10 characters"
          autoComplete="new-password"
          value={password}
          onChange={(value) => {
            setPassword(value)
            setPasswordErr('')
          }}
          error={passwordErr}
        />
      </div>
      <div style={{ marginBottom: 18 }}>
        <FieldLabel htmlFor="confirm">Confirm password</FieldLabel>
        <AuthInput
          id="confirm"
          type="password"
          placeholder="Re-enter password"
          autoComplete="new-password"
          value={confirm}
          onChange={(value) => {
            setConfirm(value)
            setConfirmErr('')
          }}
          error={confirmErr}
        />
      </div>
      <SubmitBtn loading={loading}>{loading ? 'Updating…' : 'Set new password'}</SubmitBtn>
    </form>
  )
}