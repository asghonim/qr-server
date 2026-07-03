'use client'

import { useState } from 'react'
import { EMAIL } from '@/lib/constants'
import { createClient } from '@/lib/supabase/client'
import { ServerError } from '@/components/server-error'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formError, setFormError] = useState<string | null>(null)

  function validate(data: FormData) {
    const errs: Record<string, string> = {}
    if (!String(data.get('name')).trim()) errs.name = 'Name is required.'
    const email = String(data.get('email')).trim()
    if (!email) errs.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Enter a valid email address.'
    if (!String(data.get('message')).trim()) errs.message = 'Message is required.'
    return errs
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const errs = validate(data)
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setErrors({})
    setFormError(null)
    setState('submitting')

    const supabase = createClient()
    const { error } = await supabase.rpc('contact_submit', {
      p_name: (data.get('name') as string || '').trim(),
      p_email: (data.get('email') as string || '').trim(),
      p_body: (data.get('message') as string || '').trim(),
      p_channel: (data.get('topic') as string || 'default').trim(),
    })

    if (error) {
      setState('idle')
      if (/invalid email address/i.test(error.message)) {
        setErrors({ email: 'Enter a valid email address.' })
      } else if (/rate limit exceeded/i.test(error.message)) {
        setFormError('Too many messages sent recently. Please try again in a bit.')
      } else {
        setFormError('Something went wrong sending your message. Please try again or email us directly.')
      }
      return
    }

    setState('success')
  }

  if (state === 'success') {
    return (
      <div data-testid="contact-success" className="form-success">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
        <h3>Message sent.</h3>
        <p>We typically reply within one business day. Check your inbox — we reply from {EMAIL.hello}.</p>
      </div>
    )
  }

  return (
    <form className="contact-form-inner" onSubmit={handleSubmit} noValidate data-testid="contact-form">
      {formError && <ServerError msg={formError} />}
      <div className="field">
        <label htmlFor="name">Name</label>
        <input data-testid="contact-name-input" id="name" name="name" type="text" className={`input${errors.name ? ' input-err' : ''}`} placeholder="Your name" autoComplete="name" />
        {errors.name && <span className="field-err">{errors.name}</span>}
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input data-testid="contact-email-input" id="email" name="email" type="email" className={`input${errors.email ? ' input-err' : ''}`} placeholder="you@example.com" autoComplete="email" />
        {errors.email && <span className="field-err">{errors.email}</span>}
      </div>
      <div className="field">
        <label htmlFor="topic">Topic</label>
        <select data-testid="contact-topic-select" id="topic" name="topic" className="select">
          <option value="default">General enquiry</option>
          <option value="sales">Sales / pricing</option>
          <option value="support">Technical support</option>
          <option value="security">Security disclosure</option>
          <option value="press">Press</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea data-testid="contact-message-textarea" id="message" name="message" className={`textarea${errors.message ? ' input-err' : ''}`} rows={5} placeholder="Tell us what's on your mind." />
        {errors.message && <span className="field-err">{errors.message}</span>}
      </div>
      <button data-testid="contact-submit-btn" type="submit" className="btn primary" disabled={state === 'submitting'} style={{ width: '100%', justifyContent: 'center' }}>
        {state === 'submitting' ? <span className="spinner" /> : 'Send message'}
      </button>
    </form>
  )
}
