import type { ReactNode } from 'react'

function hashStr(s: string) {
  let h = 2166136261 >>> 0
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function makePRNG(seed: number) {
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

function Finder({ cx, cy, offset, moduleSize }: { cx: number; cy: number; offset: number; moduleSize: number }) {
  const tx = offset + cx * moduleSize
  const ty = offset + cy * moduleSize
  return (
    <g transform={`translate(${tx},${ty})`}>
      <rect width={7 * moduleSize} height={7 * moduleSize} rx={moduleSize * 1.2} />
      <rect x={moduleSize} y={moduleSize} width={5 * moduleSize} height={5 * moduleSize} rx={moduleSize * 0.8} fill="white" />
      <rect x={2 * moduleSize} y={2 * moduleSize} width={3 * moduleSize} height={3 * moduleSize} rx={moduleSize * 0.4} />
    </g>
  )
}

function Align({ cx, cy, offset, moduleSize }: { cx: number; cy: number; offset: number; moduleSize: number }) {
  const tx = offset + cx * moduleSize
  const ty = offset + cy * moduleSize
  return (
    <g transform={`translate(${tx},${ty})`}>
      <rect width={5 * moduleSize} height={5 * moduleSize} rx={moduleSize * 0.6} />
      <rect x={moduleSize} y={moduleSize} width={3 * moduleSize} height={3 * moduleSize} rx={moduleSize * 0.4} fill="white" />
      <rect x={2 * moduleSize} y={2 * moduleSize} width={moduleSize} height={moduleSize} />
    </g>
  )
}

export function QRCodeSVG({
  payload,
  size,
  qrStyle = 'square',
}: {
  payload: string
  size: number
  qrStyle?: 'square' | 'dot'
}) {
  const grid = 29
  const moduleSize = size / (grid + 2)
  const offset = moduleSize
  const rand = makePRNG(hashStr(String(payload) || 'empty'))
  const modules: (boolean | null)[][] = Array.from({ length: grid }, () => Array.from({ length: grid }, () => rand() > 0.5))

  const carve = (row: number, col: number) => {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (row + i < grid && col + j < grid) modules[row + i][col + j] = null
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

  const dataModules: ReactNode[] = []
  for (let row = 0; row < grid; row++) {
    for (let col = 0; col < grid; col++) {
      if (!modules[row][col]) continue
      const x = offset + col * moduleSize
      const y = offset + row * moduleSize
      dataModules.push(qrStyle === 'dot' ? <circle key={`${row}-${col}`} cx={x + moduleSize / 2} cy={y + moduleSize / 2} r={(moduleSize / 2) * 0.95} /> : <rect key={`${row}-${col}`} x={x} y={y} width={moduleSize} height={moduleSize} />)
    }
  }

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="#0c0a09">
      <rect width={size} height={size} fill="white" />
      {dataModules}
      <Finder cx={0} cy={0} offset={offset} moduleSize={moduleSize} />
      <Finder cx={grid - 7} cy={0} offset={offset} moduleSize={moduleSize} />
      <Finder cx={0} cy={grid - 7} offset={offset} moduleSize={moduleSize} />
      <Align cx={grid - 9} cy={grid - 9} offset={offset} moduleSize={moduleSize} />
    </svg>
  )
}