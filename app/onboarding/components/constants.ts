import type { StepDefinition, UseCaseDefinition } from './types'

export const USE_CASES: UseCaseDefinition[] = [
  { id: 'tickets', label: 'Event tickets', sub: 'Festival, theatre, sports', icon: 'qr', suggested: 'Festival Tickets', samplePayload: { event: 'sun-festival-2026', seat: 'B-14', tier: 'GA' } },
  { id: 'vouchers', label: 'Vouchers & coupons', sub: 'Discounts, promos', icon: 'sparkle', suggested: 'Storefront Vouchers', samplePayload: { code: 'SAVE10', user_id: 'usr_4F2K9P', value: 10 } },
  { id: 'badges', label: 'Badges & passes', sub: 'Conferences, events', icon: 'shield', suggested: 'Conference Badges', samplePayload: { attendee: 'usr_4F2K9P', role: 'speaker', day: 1 } },
  { id: 'access', label: 'Access control', sub: 'Doors, gates, locker rooms', icon: 'lock', suggested: 'Door Access', samplePayload: { user_id: 'usr_4F2K9P', zone: 'floor-3', valid_from: '09:00' } },
  { id: 'inventory', label: 'Inventory tags', sub: 'Warehouse, asset tracking', icon: 'apps', suggested: 'Inventory Tags', samplePayload: { sku: 'SKU-78213', bin: 'A-04', batch: 'B26-Q2' } },
  { id: 'other', label: 'Something else', sub: 'You decide', icon: 'plus', suggested: 'My First App', samplePayload: { id: 'demo-1', ref: 'hello-world' } },
]

export const STEPS: StepDefinition[] = [
  { id: 1, label: 'Welcome' },
  { id: 2, label: 'App ID' },
  { id: 3, label: 'Save key' },
  { id: 4, label: 'Generate' },
  { id: 5, label: 'Validate' },
]