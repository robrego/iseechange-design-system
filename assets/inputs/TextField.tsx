import React from 'react';

// Figma source: Assets › Inputs › Form/text_field (id: 2293:4635, 5 variants)
// Figma source: Assets › Inputs › Form/default   (id: 2293:4668, 14 variants)

export type TextFieldState =
  | 'Default' | 'active' | 'filled' | 'hover' | 'filled_hover' | 'error'
  | 'not required'
  | 'default / one line' | 'hover / one line' | 'active / one line'
  | 'filled / one line' | 'filled hover / one line' | 'error / one line'
  | 'not required / one line';

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'required'> {
  label?:     string;
  hint?:      string;
  error?:     string;
  required?:  boolean;
  oneLine?:   boolean;
  className?: string;
}

export function TextField({
  label,
  hint,
  error,
  required = true,
  oneLine  = false,
  className,
  id,
  ...props
}: TextFieldProps) {
  const fieldId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
  return (
    <div
      data-one-line={oneLine}
      data-required={required}
      className={['isc-text-field', error && 'isc-text-field--error', className].filter(Boolean).join(' ')}
    >
      {label && <label htmlFor={fieldId}>{label}{required && ' *'}</label>}
      <input id={fieldId} required={required} {...props} />
      {error  && <span className="isc-text-field__error">{error}</span>}
      {!error && hint && <span className="isc-text-field__hint">{hint}</span>}
    </div>
  );
}
