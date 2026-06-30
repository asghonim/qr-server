import type { Metadata } from 'next'
import { Footer } from '@/components/footer'
import { Nav } from '@/components/nav'
import '../landing.css'

export const metadata: Metadata = { title: 'Blog — qr-server' }

export default function BlogPage() {
  return (
    <div className="landing-page">
      <Nav />
      <main className="page">
        <div className="page-header">
          <div className="eyebrow"><span className="dot" /> Blog</div>
          <h1>Notes from the team.</h1>
          <p className="lede">Engineering write-ups, post-mortems, product announcements, occasional opinions about JWTs.</p>
        </div>

        <div className="blog-list">
          <div className="blog-empty">
            <span>No posts yet.</span>
            <span>Check back soon.</span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
