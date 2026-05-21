import type { ReactNode } from 'react'

import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'

export function SubmitBtn({ loading, children, disabled, 'data-testid': dataTestId = 'submit-btn' }: { loading?: boolean; children: ReactNode; disabled?: boolean; 'data-testid'?: string }) {
  return (
    <Button type="submit" disabled={loading || disabled} className="w-full" data-testid={dataTestId}>
      {loading && <Spinner className="mr-1" />}
      {children}
    </Button>
  )
}
