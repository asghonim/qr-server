import type { ReactElement } from 'react'

function hashStr(s: string): number {
  let h = 2166136261 >>> 0
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619) >>> 0
  }
  return h
}

function prng(seed: number) {
  let x = seed || 1
  return () => {
    x ^= x << 13
    x >>>= 0
    x ^= x >> 17
    x >>>= 0
    x ^= x << 5
    x >>>= 0
    return x / 4294967295
  }
}

export function QRCanvas({ payload = '', size = 220, qrStyle = 'square' }: { payload?: string; size?: number; qrStyle?: string }) {
  const grid = 29
  const moduleSize = size / (grid + 2)
  const offset = moduleSize
  const seed = hashStr(String(payload) || 'empty')
  const rand = prng(seed)
  const modules: (boolean | null)[][] = Array.from({ length: grid }, () => Array.from({ length: grid }, () => rand() > 0.5))

  const carve = (x: number, y: number) => {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (modules[x + i] && modules[x + i][y + j] !== undefined) {
          modules[x + i][y + j] = null
        }
      }
    }
  }

  carve(0, 0)
  carve(0, grid - 8)
  carve(grid - 8, 0)

  for (let i = grid - 9; i < grid - 4; i++) {
    for (let j = grid - 9; j < grid - 4; j++) modules[i][j] = null
  }

  for (let i = 8; i < grid - 8; i++) {
    modules[6][i] = i % 2 === 0
    modules[i][6] = i % 2 === 0
  }

  const cells: ReactElement[] = []
  for (let row = 0; row < grid; row++) {
    for (let col = 0; col < grid; col++) {
      if (!modules[row][col]) continue
      const x = offset + col * moduleSize
      const y = offset + row * moduleSize

      if (qrStyle === 'dot') {
        cells.push(<circle key={`${row}-${col}`} cx={x + moduleSize / 2} cy={y + moduleSize / 2} r={(moduleSize / 2) * 0.95} />)
      } else {
        cells.push(<rect key={`${row}-${col}`} x={x} y={y} width={moduleSize} height={moduleSize} />)
      }
    }
  }

  function Finder({ cx, cy }: { cx: number; cy: number }) {
    const module = moduleSize
    return (
      <g transform={`translate(${offset + cx * module},${offset + cy * module})`}>
        <rect width={7 * module} height={7 * module} rx={module * 1.2} />
        <rect x={module} y={module} width={5 * module} height={5 * module} rx={module * 0.8} fill="#fff" />
        <rect x={2 * module} y={2 * module} width={3 * module} height={3 * module} rx={module * 0.4} />
      </g>
    )
  }

  function Align({ cx, cy }: { cx: number; cy: number }) {
    const module = moduleSize
    return (
      <g transform={`translate(${offset + cx * module},${offset + cy * module})`}>
        <rect width={5 * module} height={5 * module} rx={module * 0.6} />
        <rect x={module} y={module} width={3 * module} height={3 * module} rx={module * 0.4} fill="#fff" />
        <rect x={2 * module} y={2 * module} width={module} height={module} />
      </g>
    )
  }

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="#0c0a09">
      <rect width={size} height={size} fill="#fff" />
      <g>{cells}</g>
      <Finder cx={0} cy={0} />
      <Finder cx={grid - 7} cy={0} />
      <Finder cx={0} cy={grid - 7} />
      <Align cx={grid - 9} cy={grid - 9} />
    </svg>
  )
}