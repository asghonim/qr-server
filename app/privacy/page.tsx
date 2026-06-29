import type { Metadata } from 'next'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import '../landing.css'
import { EMAIL } from '@/lib/constants'

export const metadata: Metadata = { title: 'Privacy Policy — qr-server' }

export default function PrivacyPage() {
  return (
    <div className="landing-page">
      <Nav />
      <main className="page" style={{ minHeight: 'calc(90dvh - 56px)', display: 'flex', flexDirection: 'column' }}>
        <div className="page-header">
          <div className="eyebrow"><span className="dot" /> Privacy Policy</div>
          <h1>Privacy policy.</h1>
          <p className="lede">
            Last updated: April 22, 2026 · This document explains what data we collect, how we use it, and the
            choices you have. 
            {/* Plain language version; legal version available{' '}
            <a href="#" className="auth-link">here</a>. */}
          </p>
        </div>

        <div className="prose">
          <h2>The short version</h2>
          <p>
            We collect the minimum amount of data needed to run a signing service. We don&apos;t sell it. We
            don&apos;t share it with advertisers. We don&apos;t have advertisers. You can export or delete your
            workspace at any time, and your audit log payloads are encrypted at rest.
          </p>

          <h2>What we collect</h2>
          <h3>Account data</h3>
          <p>
            Your email, name, workspace name, password hash (argon2id), and any team members you invite. If you
            sign in with Google or GitHub, the provider&apos;s ID and email.
          </p>
          <h3>Billing data</h3>
          <p>
            Plan, address, and the last four digits of your card. Full card data is held by Stripe and we never
            see it.
          </p>
          <h3>Usage data</h3>
          <p>
            For every API request: timestamp, App ID, endpoint, status code, latency, and source IP. For 90 days
            (Free) or 1 year (Enterprise). Used to populate your dashboard and detect abuse.
          </p>
          <h3>Token payloads</h3>
          <p>
            Whatever you put inside a signed QR. We treat this as your customer data — encrypted at rest, deleted
            on workspace deletion, never used for anything other than serving validation requests.
          </p>

          <h2>What we don&apos;t collect</h2>
          <ul>
            <li>Behavioral tracking on this marketing site beyond aggregate visit counts. No third-party analytics.</li>
            <li>Fingerprinting or session replay anywhere in the product.</li>
            <li>Anything from your codebase, environment variables, or local machine.</li>
          </ul>

          <h2>How we use it</h2>
          <p>
            To serve API requests, populate your dashboard, send you account-related emails, bill you, detect
            abuse, and improve the product through aggregated metrics. We will email you about service changes;
            we won&apos;t email you to sell you things.
          </p>

          <h2>How we share it</h2>
          <p>
            We share data with the subprocessors listed on our{' '}
            <a href="/security" className="auth-link">security page</a>, all of whom are bound by DPAs at least
            as strict as this policy. We share data with law enforcement only with a valid legal request, and we
            publish a transparency report.
          </p>

          <h2>Your rights</h2>
          <p>Wherever you live, you can:</p>
          <ul>
            <li>Export all your data as JSON from the dashboard.</li>
            <li>
              Delete your workspace, which deletes all token payloads, audit logs, and personal data within
              30 days.
            </li>
            <li>
              Request a copy of, correction of, or restriction on processing of your personal data by emailing{' '}
              <a href={`mailto:${EMAIL.privacy}`} className="auth-link">{EMAIL.privacy}</a>.
            </li>
          </ul>
          <p>
            EU and UK residents have additional rights under GDPR. California residents have rights under CCPA.
            We honor both regardless of where you live.
          </p>

          <h2>Data residency</h2>
          <p>
            EU and UK workspace data is stored in eu-central-1. US workspaces are stored in us-east-1. APAC
            workspaces in ap-southeast-1. Data is replicated within the region for durability; never
            cross-region.
          </p>

          <h2>Cookies</h2>
          <p>
            We use one cookie to keep you signed in. That&apos;s it. No advertising cookies, no third-party
            trackers, no preference modal you have to dismiss.
          </p>

          <h2>Contact</h2>
          <p>
            Privacy questions:{' '}
            <a href={`mailto:${EMAIL.privacy}`} className="auth-link">{EMAIL.privacy}</a>. 
            {/* Our EU
            representative for GDPR purposes is listed on our{' '}
            <a href="#" className="auth-link">legal page</a>. */}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
