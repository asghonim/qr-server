export function BrandMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <div
      style={{
        width: 24,
        height: 24,
        borderRadius: 6,
        background: inverted ? '#fafaf9' : '#0c0a09',
        display: 'grid',
        gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
        gap: 2,
        padding: 4,
        flexShrink: 0,
      }}
    >
      {Array.from({ length: 9 }, (_, index) => (
        <span
          key={index}
          style={{
            borderRadius: 1,
            background: [1, 3, 8].includes(index) ? 'transparent' : inverted ? '#0c0a09' : '#fafaf9',
          }}
        />
      ))}
    </div>
  )
}