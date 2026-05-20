import { featureItems } from './data/landing-content'
import { LandingIcon } from './svg/landing-icon'

export function FeaturesSection() {
  return (
    <section className="section" id="features" style={{ paddingTop: 32 }}>
      <div className="container">
        <div className="eyebrow"><span className="dot" /> Features</div>
        <h2>Built for tickets, vouchers, badges, anything that can&apos;t be forged.</h2>
        <p className="lede">
          A focused tool that does signing and validation well — not another QR generator with a checkout flow stapled on.
        </p>

        <div className="features">
          {featureItems.map((item) => (
            <div key={item.title} className="feature">
              <div className="ico"><LandingIcon d={item.d} /></div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}