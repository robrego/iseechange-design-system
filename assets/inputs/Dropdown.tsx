import React from 'react';

// Figma source: Assets › Inputs › Form/dropdown (id: 2293:4926, 7 variants)

export type DropdownState = 'Default' | 'active' | 'filled' | 'hover' | 'filled_hover' | 'error' | 'not required';

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'required'> {
  label?:     string;
  options:    DropdownOption[];
  error?:     string;
  hint?:      string;
  required?:  boolean;
  placeholder?: string;
  className?: string;
}

export function Dropdown({
  label,
  options,
  error,
  hint,
  required  = true,
  placeholder,
  className,
  id,
  ...props
}: DropdownProps) {
  const fieldId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
  return (
    <div
      data-required={required}
      className={['isc-dropdown', error && 'isc-dropdown--error', className].filter(Boolean).join(' ')}
    >
      {label && <label htmlFor={fieldId}>{label}{required && ' *'}</label>}
      <select id={fieldId} required={required} {...props}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      {error  && <span className="isc-dropdown__error">{error}</span>}
      {!error && hint && <span className="isc-dropdown__hint">{hint}</span>}
    </div>
  );
}
