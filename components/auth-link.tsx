import type { ReactNode } from 'react'

import Link from 'next/link'

export function AuthLink({ href, children, 'data-testid': dataTestId }: { href: string; children: ReactNode; 'data-testid'?: string }) {
  return (
    <Link href={href} data-testid={dataTestId} style={{ color: 'var(--dash-text)', fontWeight: 500, textDecoration: 'underline', textDecorationColor: 'var(--dash-border-strong)', textUnderlineOffset: 3 }}>
      {children}
    </Link>
  )
}