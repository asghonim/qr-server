'use client'

import { useCallback, useState } from 'react'

export function useCopy(): [string | null, (text: string, key: string) => void] {
  const [copied, setCopied] = useState<string | null>(null)

  const copy = useCallback((text: string, key: string) => {
    try {
      navigator.clipboard.writeText(text)
    } catch {}
    setCopied(key)
    setTimeout(() => setCopied(null), 1400)
  }, [])

  return [copied, copy]
}