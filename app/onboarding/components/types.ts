export interface AppData {
  id: string
  name: string
  env: string
  algo: string
  ttl: number
  publicKey: string
  signingKey: string
  created: string
}

export interface GeneratedData {
  token: string
  image_url: string
  expires_at: number
  ttl: number
}

export interface FormData {
  name: string
  env: 'staging' | 'production'
  algo: string
  ttl: string
}

export interface UseCaseDefinition {
  icon: string
  id: string
  label: string
  samplePayload: Record<string, unknown>
  sub: string
  suggested: string
}

export interface StepDefinition {
  id: number
  label: string
}