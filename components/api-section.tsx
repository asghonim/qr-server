import { getCodeHTML, postCodeHTML } from './data/landing-content'

export function ApiSection() {
  return (
    <section className="section" id="docs" style={{ paddingTop: 32 }}>
      <div className="container">
        <div className="eyebrow"><span className="dot" /> The whole API</div>
        <h2>Two endpoints. That&apos;s it.</h2>
        <p className="lede">If you&apos;ve got 60 seconds and a terminal, you have a working integration.</p>

        <div className="code-split">
          <div className="code-half">
            <div className="label"><span className="method post">POST</span><span>Issue a signed QR</span></div>
            <pre dangerouslySetInnerHTML={{ __html: postCodeHTML }} />
          </div>

          <div className="code-half">
            <div className="label"><span className="method get">GET</span><span>Validate at the door</span></div>
            <pre dangerouslySetInnerHTML={{ __html: getCodeHTML }} />
          </div>
        </div>
      </div>
    </section>
  )
}