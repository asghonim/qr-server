import Link from 'next/link'

import { pricingTiers } from './data/landing-content'

export function PricingSection() {
  return (
    <section className="section" id="pricing" style={{ paddingTop: 64 }}>
      <div className="container">
        <div className="eyebrow"><span className="dot" /> Pricing</div>
        <h2>Pay for what scans, not what sits.</h2>
        <p className="lede">
          Only validations count toward your meter. Generate as many QRs as you like — most never get scanned.
        </p>

        <div className="pricing">
          {pricingTiers.map((tier) => {
            const className = tier.featured ? 'tier featured' : 'tier'
            const buttonClass = tier.featured ? 'btn primary lg' : 'btn lg'

            return (
              <div key={tier.name} className={className}>
                <div className="tier-name">
                  {tier.name}
                  {tier.badge && (
                    <span className="badge green" style={{ fontSize: 10.5 }}>
                      <span className="dot" />{tier.badge}
                    </span>
                  )}
                </div>
                <div className="price">{tier.price}<span>{tier.suffix}</span></div>
                <p className="desc">{tier.description}</p>
                <ul>
                  {tier.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                <Link href={tier.href} className={buttonClass} style={{ justifyContent: 'center' }} data-testid={`pricing-${tier.name.toLowerCase()}-cta-btn`}>
                  {tier.ctaLabel}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}