import type { AppData, FormData, GeneratedData } from './types'

function randHex(len: number): string {
  const chars = 'abcdef0123456789'
  let result = ''

  for (let i = 0; i < len; i++) {
    result += chars[Math.floor(Math.random() * chars.length)]
  }

  return result
}

export function makeAppId(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let result = 'app_'

  for (let i = 0; i < 7; i++) {
    result += chars[Math.floor(Math.random() * chars.length)]
  }

  return result
}

export function makeToken(): string {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'QR' })).replace(/=+$/, '')
  const body = randHex(28)
  const sig = randHex(16)
  return `${header}.${body}.${sig}`
}

export function buildAppData(form: FormData): AppData {
  const isLive = form.env === 'production'

  return {
    id: makeAppId(),
    name: form.name.trim(),
    env: form.env,
    algo: form.algo,
    ttl: parseInt(form.ttl, 10) || 0,
    publicKey: `pk_${isLive ? 'live' : 'test'}_${randHex(32)}`,
    signingKey: `sk_${isLive ? 'live' : 'test'}_${randHex(48)}`,
    created: new Date().toISOString().slice(0, 10),
  }
}

export function buildGeneratedData(app: AppData): GeneratedData {
  const ttl = app.ttl || 3600
  const now = Math.floor(Date.now() / 1000)
  const token = makeToken()

  return {
    token,
    image_url: `https://cdn.qrserver.io/${app.id}/${token.slice(-12)}.png`,
    expires_at: now + ttl,
    ttl,
  }
}