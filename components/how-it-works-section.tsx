import { step1CodeHTML, step2CodeHTML, step3CodeHTML } from './data/landing-content'

export function HowItWorksSection() {
  return (
    <section className="section" id="how">
      <div className="container">
        <div className="eyebrow"><span className="dot" /> How it works</div>
        <h2>Three steps. Two endpoints.</h2>
        <p className="lede">
          Create an App ID for each surface you need signed QRs on. Generate codes with your secret. Validate anywhere — even from untrusted clients.
        </p>

        <div className="steps">
          <div className="step">
            <div className="num"><span className="pill">01</span> Create an App ID</div>
            <h3>One scope per product</h3>
            <p>Each App ID gets its own signing key, audit log, and rate limit. Rotate independently.</p>
            <pre dangerouslySetInnerHTML={{ __html: step1CodeHTML }} />
          </div>

          <div className="step">
            <div className="num"><span className="pill">02</span> Generate</div>
            <h3>Issue a signed token</h3>
            <p>Returns the QR image, the signed string, or both. Set per-request TTL and rendering.</p>
            <pre dangerouslySetInnerHTML={{ __html: step2CodeHTML }} />
          </div>

          <div className="step">
            <div className="num"><span className="pill">03</span> Validate</div>
            <h3>Verify anywhere</h3>
            <p>Single GET. Returns the decoded payload, expiry status, and revocation state — in 12 ms p50.</p>
            <pre dangerouslySetInnerHTML={{ __html: step3CodeHTML }} />
          </div>
        </div>
      </div>
    </section>
  )
}