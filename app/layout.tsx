import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: 'QR Server',
  description: 'A simple QR code generator built with Next.js and TypeScript.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#F8F9FA" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icon-1254x1254.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={[
          'antialiased',
        ].join(' ')}
        style={{ margin: 0, padding: 0, background: 'var(--app-bg)' }}
      >
        <ThemeProvider>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ThemeProvider>
        <SpeedInsights/>
        <Analytics/>
      </body>
    </html>
  )
}
