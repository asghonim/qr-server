import type { ReactNode } from 'react'

import { Label } from '@/components/ui/label'

export function FieldLabel({ htmlFor, children, right }: { htmlFor: string; children: ReactNode; right?: ReactNode }) {
  return (
    <div className="mb-1.5 flex items-center justify-between">
      <Label htmlFor={htmlFor}>{children}</Label>
      {right}
    </div>
  )
}
