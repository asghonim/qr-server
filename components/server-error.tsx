export function ServerError({ msg }: { msg: string }) {
  return (
    <div data-testid="server-error" style={{ background: 'oklch(0.96 0.04 25)', border: '1px solid oklch(0.85 0.08 25)', borderRadius: 6, padding: '10px 12px', fontSize: 13, color: 'oklch(0.45 0.18 25)', marginBottom: 14 }}>
      {msg}
    </div>
  )
}