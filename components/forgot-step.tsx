'use client'

import { useCallback, useState } from 'react'
import Link from 'next/link'

import { getSupabaseBrowserClient } from '@/lib/supabase/client'
import { AuthInput } from '@/components/auth-input'
import { AuthLink } from '@/components/auth-link'
import { FieldLabel } from '@/components/field-label'
import { SubmitBtn } from '@/components/submit-btn'

import { SuccessCard } from './success-card'

export function ForgotStep() {
  const [email, setEmail] = useState('')
  const [emailErr, setEmailErr] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [resent, setResent] = useState(false)
  const supabase = getSupabaseBrowserClient()

  const handleSubmit = useCallback(async (event: React.FormEvent) => {
    event.preventDefault()
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setEmailErr('Enter a valid email address')
      return
    }

    setEmailErr('')
    setLoading(true)
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${location.origin}/callback?type=recovery`,
    })
    setLoading(false)
    setSent(true)
  }, [email, supabase])

  const handleResend = useCallback(async (event: React.MouseEvent) => {
    event.preventDefault()
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${location.origin}/callback?type=recovery`,
    })
    setResent(true)
  }, [email, supabase])

  if (sent) {
    return (
      <>
        <SuccessCard data-testid="reset-success">
          <div style={{ fontWeight: 500, marginBottom: 2 }}>Check your inbox</div>
          <div style={{ color: 'oklch(0.32 0.1 155)' }}>
            We sent a reset link to{' '}
            <b style={{ fontFamily: 'var(--font-geist-mono),ui-monospace,monospace', fontSize: 12.5 }}>{email}</b>. It expires in 30 minutes.
          </div>
        </SuccessCard>
        <div style={{ fontSize: 13, color: 'var(--dash-muted)', marginBottom: 18, lineHeight: 1.55 }}>
          Didn&apos;t get the email? Check your spam folder, or{' '}
          <a
            href="#"
            data-testid="reset-resend-link"
            onClick={handleResend}
            style={{ color: resent ? 'oklch(0.56 0.11 155)' : 'var(--dash-text)', fontWeight: 500, textDecoration: 'underline', textDecorationColor: 'var(--dash-border-strong)', textUnderlineOffset: 3 }}
          >
            {resent ? 'resent ✓' : 'resend it'}
          </a>
          .
        </div>
        <Link data-testid="reset-back-to-login-link" href="/login" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '9px 16px', fontSize: 14, fontWeight: 500, background: '#0c0a09', color: '#fafaf9', border: '1px solid #0c0a09', borderRadius: 6, textDecoration: 'none' }}>
          Back to sign in
        </Link>
      </>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate data-testid="reset-forgot-form">
      <div style={{ marginBottom: 14 }}>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <AuthInput
          id="email"
          type="email"
          placeholder="you@company.com"
          autoComplete="email"
          value={email}
          onChange={(value) => {
            setEmail(value)
            setEmailErr('')
          }}
          error={emailErr}
        />
      </div>
      <div style={{ height: 14 }} />
      <SubmitBtn loading={loading}>{loading ? 'Sending…' : 'Send reset link'}</SubmitBtn>
      <p style={{ textAlign: 'center', margin: '18px 0 0', fontSize: 13.5, color: 'var(--dash-muted)' }}>
        Remembered it?{' '}<AuthLink href="/login" data-testid="reset-back-link">Back to sign in</AuthLink>
      </p>
    </form>
  )
}