import { logos } from './data/landing-content'

export function LogosSection() {
  return (
    <section className="logos">
      <div className="label">Powering signed QRs for teams at</div>
      <div className="logos-row">
        {logos.map((name) => (
          <div key={name} className="lg">
            <span className="glyph" />
            {name}
          </div>
        ))}
      </div>
    </section>
  )
}