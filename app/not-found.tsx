'use client'

import Link from 'next/link'
import { BrandMark } from '@/components/brand-mark'


export default function ErrorBoundary() {
  const title = 'Something went wrong'
  const body = 'We can\'t find the page you\'re looking for.'
  const isExpired = false

  return (
    <div style={{
      minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 40,
      background: 'var(--dash-bg)',
      fontFamily: 'var(--font-geist-sans),ui-sans-serif,system-ui,sans-serif',
    }}>
      <div style={{ width: '100%', maxWidth: 420, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 32 }}>
          <BrandMark />
          <span style={{ fontWeight: 600, fontSize: 15 }}>qr-server</span>
        </div>

        <div style={{
          width: 56, height: 56, borderRadius: 14, background: 'oklch(0.97 0.03 25)',
          border: '1px solid oklch(0.87 0.07 25)', display: 'grid', placeItems: 'center',
          marginBottom: 24,
        }}>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="oklch(0.55 0.18 25)" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
            <circle cx={12} cy={12} r={10} />
            <line x1={12} y1={8} x2={12} y2={12} />
            <line x1={12} y1={16} x2={12.01} y2={16} />
          </svg>
        </div>

        <h1 style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-0.02em', margin: '0 0 10px', color: 'var(--dash-text)' }}>
          {title}
        </h1>

        <p style={{ fontSize: 14.5, color: 'var(--dash-muted)', margin: '0 0 28px', lineHeight: 1.55, maxWidth: 340 }}>
          {body}
        </p>

        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
          {isExpired && (
            <Link href="/login" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '7px 14px', fontSize: 13.5, fontWeight: 500,
              borderRadius: 6, textDecoration: 'none',
              background: 'oklch(0.56 0.14 155)', color: '#fff',
              border: '1px solid oklch(0.48 0.13 155)',
            }}>
              Request a new link
            </Link>
          )}
          <Link href="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '7px 14px', fontSize: 13.5, fontWeight: 500,
            border: '1px solid var(--dash-border)', borderRadius: 6,
            background: 'var(--dash-surface)', color: 'var(--dash-text)',
            boxShadow: 'var(--dash-shadow-xs)', textDecoration: 'none',
          }}>
            Back to home
          </Link>
        </div>
        <p style={{ marginTop: 16, fontSize: 12.5, color: 'var(--dash-muted)' }}>
          © 2026 qr-server
        </p>
      </div>
    </div>
  )
}
