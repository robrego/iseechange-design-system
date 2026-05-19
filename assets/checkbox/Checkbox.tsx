import React from 'react';

// Figma source: Assets › Checkbox › element (id: 2293:4748, 3 variants)
// Figma source: Assets › Checkbox › with text  (id: 2293:4756)

export type CheckboxState = 'Default' | 'Active' | 'Hover';

export interface CheckboxProps {
  checked?:   boolean;
  label?:     string;
  disabled?:  boolean;
  onChange?:  (checked: boolean) => void;
  className?: string;
  id?:        string;
}

export function Checkbox({ checked = false, label, disabled = false, onChange, className, id }: CheckboxProps) {
  return (
    <label
      data-state={disabled ? 'Default' : checked ? 'Active' : 'Default'}
      className={['isc-checkbox', disabled && 'isc-checkbox--disabled', className].filter(Boolean).join(' ')}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={e => onChange?.(e.target.checked)}
      />
      {label && <span className="isc-checkbox__label">{label}</span>}
    </label>
  );
}
