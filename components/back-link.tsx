import Link from 'next/link'

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13, color: 'var(--dash-muted)', marginBottom: 18, textDecoration: 'none' }}
      onMouseEnter={(event) => {
        event.currentTarget.style.color = 'var(--dash-text)'
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.color = 'var(--dash-muted)'
      }}
    >
      <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="m15 18-6-6 6-6" />
      </svg>
      {label}
    </Link>
  )
}