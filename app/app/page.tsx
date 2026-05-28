import { Footer } from '@/components/footer'
import { Nav } from '@/components/nav'
import type { Metadata } from 'next'
import '../landing.css'
import { ComingSoon } from '@/components/coming-soon'

export const metadata: Metadata = { title: 'App — qr-server' }

export default function AppPage() {
  return (
    <div className="landing-page">
      <Nav />
      <main
        className="page"
        style={{
          minHeight: 'calc(90dvh - 56px)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ComingSoon title='app' />
      </main>
      <Footer />
    </div>
  )
}
