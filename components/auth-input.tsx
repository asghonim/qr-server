import { FieldError } from '@/components/ui/field'
import { Input } from '@/components/ui/input'

export function AuthInput({
  id,
  type,
  placeholder,
  autoComplete,
  value,
  onChange,
  error,
  disabled,
}: {
  id: string
  type: string
  placeholder: string
  autoComplete: string
  value: string
  onChange: (value: string) => void
  error?: string
  disabled?: boolean
}) {
  return (
    <div>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        aria-invalid={!!error}
        data-testid={`input-${id}`}
      />
      {error && <FieldError className="mt-1">{error}</FieldError>}
    </div>
  )
}
