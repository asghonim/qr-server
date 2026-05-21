import type { Metadata } from 'next'
import { Footer } from '@/components/footer'
import { Nav } from '@/components/nav'
import '../landing.css'

export const metadata: Metadata = { title: 'Blog — qr-server' }

const posts = [
  {
    date: 'May 14, 2026',
    readTime: '6 min read',
    tag: 'Engineering',
    title: 'Why we switched from HMAC to EdDSA for QR signing',
    desc: 'HMAC-SHA256 works fine until you need to share verification without sharing secrets. Here\'s the tradeoff we made and what it cost us in latency.',
    author: 'JD',
    authorName: 'Jamie Diop',
    bg: 'linear-gradient(135deg, oklch(0.65 0.1 200), oklch(0.55 0.13 240))',
    slug: 'eddsa-signing',
  },
  {
    date: 'Apr 21, 2026',
    readTime: '4 min read',
    tag: 'Engineering',
    title: 'Getting validation p95 from 38ms to 12ms',
    desc: 'A ring-buffer cache for the verifier path eliminated most of our Postgres round-trips. The implementation is surprisingly simple.',
    author: 'SL',
    authorName: 'Saoirse Lima',
    bg: 'linear-gradient(135deg, oklch(0.7 0.1 155), oklch(0.55 0.12 200))',
    slug: 'validation-latency',
  },
  {
    date: 'Apr 09, 2026',
    readTime: '5 min read',
    tag: 'Product',
    title: 'Single-use tokens and the revoke list: how they work',
    desc: 'Two new primitives for tighter token lifecycle control — and how they interact with key rotation.',
    author: 'MR',
    authorName: 'Maya Rodriguez',
    bg: 'linear-gradient(135deg, oklch(0.65 0.09 30), oklch(0.5 0.1 350))',
    slug: 'single-use-revoke',
  },
  {
    date: 'Mar 04, 2026',
    readTime: '8 min read',
    tag: 'Post-mortem',
    title: 'March 4 incident: what happened and what we changed',
    desc: 'On March 4 we had a 23-minute validation outage in eu-west-1. This is a full account of the timeline, root cause, and the three changes we made afterward.',
    author: 'JD',
    authorName: 'Jamie Diop',
    bg: 'linear-gradient(135deg, oklch(0.65 0.1 200), oklch(0.55 0.13 240))',
    slug: 'march-incident',
  },
  {
    date: 'Feb 03, 2026',
    readTime: '7 min read',
    tag: 'Engineering',
    title: 'qr-server vs. rolling your own JWT QR pipeline',
    desc: 'We benchmarked the DIY approach: one JWT library, one QR renderer, one Lambda. Here\'s what it actually costs in lines of code, ops overhead, and edge cases.',
    author: 'HT',
    authorName: 'Hassan Talib',
    bg: 'linear-gradient(135deg, oklch(0.75 0.1 60), oklch(0.6 0.13 30))',
    slug: 'vs-jwt-pipeline',
  },
  {
    date: 'Jan 30, 2026',
    readTime: '3 min read',
    tag: 'Product',
    title: 'Searching your audit log: a quick walkthrough',
    desc: 'The new search UI lets you filter by App ID, IP, status code, or payload substring. Here\'s a tour of the most useful queries we\'ve seen in beta.',
    author: 'MR',
    authorName: 'Maya Rodriguez',
    bg: 'linear-gradient(135deg, oklch(0.65 0.09 30), oklch(0.5 0.1 350))',
    slug: 'audit-log-search',
  },
]

export default function BlogPage() {
  return (
    <div className="landing-page">
      <Nav />
      <main className="page">
        <div className="page-header">
          <div className="eyebrow"><span className="dot" /> Blog</div>
          <h1>Writing from the team.</h1>
          <p className="lede">Engineering deep-dives, product updates, and occasional post-mortems. No marketing fluff.</p>
        </div>

        <div className="blog-list">
          {posts.map((post) => (
            <article key={post.slug} className="blog-post">
              <div className="blog-meta">
                <span className="blog-date">{post.date}</span>
                <span className="blog-sep">·</span>
                <span className="blog-read">{post.readTime}</span>
                <span className="blog-sep">·</span>
                <span className="blog-tag">{post.tag}</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.desc}</p>
              <div className="blog-author">
                <div className="avatar-sm" style={{ background: post.bg }}>{post.author}</div>
                <span>{post.authorName}</span>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
