export function ComingSoon({ title, description }: { title: string; description?: string }) {
  return (
    <div style={{
      flex: 1,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      padding: '80px 24px',
      textAlign: 'center',
    }}>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '4px 10px',
        borderRadius: 20,
        border: '1px solid var(--accent-border)',
        background: 'var(--accent-soft)',
        fontSize: 12,
        fontWeight: 500,
        color: 'var(--accent)',
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
      }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
        Coming soon
      </div>
      <h1 style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text)', margin: 0 }}>
        {title}
      </h1>
      {description && (
        <p style={{ fontSize: 15, color: 'var(--muted)', maxWidth: 420, margin: 0, lineHeight: 1.6 }}>
          {description}
        </p>
      )}
    </div>
  )
}
