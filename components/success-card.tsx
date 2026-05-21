import type { ReactNode } from 'react'

export function SuccessCard({ children, 'data-testid': dataTestId }: { children: ReactNode; 'data-testid'?: string }) {
  return (
    <div data-testid={dataTestId} style={{ background: 'oklch(0.96 0.03 155)', border: '1px solid oklch(0.85 0.06 155)', borderRadius: 8, padding: '14px 16px', display: 'flex', gap: 10, fontSize: 13.5, color: 'oklch(0.32 0.1 155)', marginBottom: 18 }}>
      <svg width={18} height={18} style={{ flexShrink: 0, marginTop: 1 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
      <div>{children}</div>
    </div>
  )
}