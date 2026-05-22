import type { ReactNode } from 'react'

import { BrandMark } from '@/components/brand-mark'

import { BackLink } from './back-link'

type ResetCardProps = {
  isUpdate: boolean
  title: string
  description: string
  children: ReactNode
}

export function ResetCard({ isUpdate, title, description, children }: ResetCardProps) {
  return (
    <div
      style={{
        background: 'var(--dash-surface)',
        border: '1px solid var(--dash-border)',
        borderRadius: 12,
        padding: 32,
        width: '100%',
        maxWidth: 420,
        boxShadow: 'var(--dash-shadow-md)',
      }}
    >
      {!isUpdate && <BackLink href="/login" label="Back to sign in" />}

      <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 24 }}>
        <BrandMark />
        <span style={{ fontWeight: 600 }}>qr-server</span>
      </div>

      <h1 style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-0.02em', margin: '0 0 6px', color: 'var(--dash-text)' }}>
        {title}
      </h1>
      <p style={{ fontSize: 14, color: 'var(--dash-muted)', margin: '0 0 24px' }}>{description}</p>

      {children}
    </div>
  )
}