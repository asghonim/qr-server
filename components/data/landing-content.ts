export const heroCodeHTML = `<span class="tok-kw">const</span> { token, image_url } = <span class="tok-kw">await</span> qr
  .app(<span class="tok-str">"app_7gXk2pQ"</span>)
  .<span class="tok-fn">generate</span>({
    payload: { user_id: <span class="tok-str">"usr_4F2K9P"</span>, seat: <span class="tok-str">"B-14"</span> },
    ttl: <span class="tok-str">3600</span>,
  });

<span class="tok-com">// later, at the gate:</span>
<span class="tok-kw">const</span> { valid, payload } = <span class="tok-kw">await</span> qr
  .app(<span class="tok-str">"app_7gXk2pQ"</span>)
  .<span class="tok-fn">validate</span>(token);`

export const step1CodeHTML = `<span class="tok-com">// Dashboard → New App ID</span>
app_7gXk2pQ  <span class="tok-com">→ tickets (prod)</span>
app_3mNb9wT  <span class="tok-com">→ vouchers (prod)</span>
app_2qVx8sB  <span class="tok-com">→ door access (stg)</span>`

export const step2CodeHTML = `<span class="tok-kw">POST</span> /api/&lt;appid&gt;/<span class="tok-fn">generate</span>
{
  <span class="tok-key">"payload"</span>: { <span class="tok-key">"seat"</span>: <span class="tok-str">"B-14"</span> },
  <span class="tok-key">"ttl"</span>: <span class="tok-str">3600</span>
}`

export const step3CodeHTML = `<span class="tok-kw">GET</span> /api/&lt;appid&gt;/<span class="tok-fn">validate</span>?token=eyJ...

<span class="tok-com">→ { valid: true, payload: {…} }</span>`

export const postCodeHTML = `curl -X POST https://api.qrserver.io/app_7gXk2pQ/generate \\
  -H <span class="tok-str">"Authorization: Bearer sk_live_a1b2c3..."</span> \\
  -H <span class="tok-str">"Content-Type: application/json"</span> \\
  -d <span class="tok-str">'{
    "payload": { "user_id": "usr_4F2K9P", "seat": "B-14" },
    "ttl": 3600
  }'</span>

<span class="tok-com">→ {
    "token": "eyJhbGciOi...4e8c1f2a",
    "image_url": "https://cdn.qrserver.io/...png",
    "expires_at": 1747587600
  }</span>`

export const getCodeHTML = `curl <span class="tok-str">"https://api.qrserver.io/app_7gXk2pQ/validate?token=eyJ...4e8c"</span>

<span class="tok-com">→ {
    "valid": true,
    "payload": {
      "user_id": "usr_4F2K9P",
      "seat": "B-14"
    },
    "issued_at": 1747584000,
    "expires_at": 1747587600
  }</span>

<span class="tok-com">// or, when something's off:</span>
<span class="tok-com">→ { "valid": false, "reason": "expired" }</span>`

export const logos = ['Northwind', 'Octorail', 'Stagepass', 'Loomify', 'Quickcart', 'Parcelhub']

export const featureItems = [
  {
    title: 'HMAC and ECDSA signing',
    body: 'HS256, HS512, ES256, EdDSA. Per-app key, never exposed to clients.',
    d: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  },
  {
    title: 'Zero-downtime rotation',
    body: 'Rotate keys whenever. We keep the previous key warm for 5 minutes so in-flight QRs still validate.',
    d: '<path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/>',
  },
  {
    title: 'Per-token TTL',
    body: 'Set expiry per request or per app. Single-use tokens, revoke list, the works.',
    d: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  },
  {
    title: 'Live activity stream',
    body: 'Every generate and validate is logged with IP, latency, and reason code. Searchable for 90 days.',
    d: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  },
  {
    title: 'Render to your brand',
    body: 'Square or dot modules. Bring your colors, your logo, your margin. PNG and SVG out.',
    d: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  },
  {
    title: 'Webhooks on validate',
    body: 'POST\'d to your endpoint on every validation. Signed with the same key for verifying in your stack.',
    d: '<path d="M3 12h4l3-9 4 18 3-9h4"/>',
  },
]

export const pricingTiers = [
  {
    name: 'Free',
    price: '$0',
    suffix: ' / month',
    description: 'For prototyping and side projects.',
    features: ['10,000 validations / month', '3 App IDs', 'HS256 signing', '30-day audit logs', 'Community support'],
    href: '/app',
    ctaLabel: 'Start free',
    featured: false,
    badge: null,
  },
  {
    name: 'Team',
    price: '$29',
    suffix: ' / month',
    description: 'For products in production with real volume.',
    features: ['500,000 validations included', 'Unlimited App IDs', 'All signing algorithms', '90-day audit logs', 'Webhooks & revoke list', 'Email support, 1-day SLA'],
    href: '/app',
    ctaLabel: 'Start 14-day trial',
    featured: true,
    badge: 'Most popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    suffix: '',
    description: 'For regulated workloads and large fleets.',
    features: ['Unlimited validations', 'Dedicated signing region', 'HSM-backed keys', '1-year audit retention', 'SAML SSO & SCIM', '99.99% SLA, named contact'],
    href: '#',
    ctaLabel: 'Contact sales',
    featured: false,
    badge: null,
  },
] as const