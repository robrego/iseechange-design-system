import React from 'react';

// Figma source: Assets › Switch › switch (id: 4257:1176, 4 variants)

export type SwitchStatus = 'default' | 'active' | 'disabled' | 'hover';

export interface SwitchProps {
  checked?:   boolean;
  label?:     string;
  disabled?:  boolean;
  onChange?:  (checked: boolean) => void;
  className?: string;
}

export function Switch({ checked = false, label, disabled = false, onChange, className }: SwitchProps) {
  return (
    <label
      data-status={disabled ? 'disabled' : checked ? 'active' : 'default'}
      className={['isc-switch', disabled && 'isc-switch--disabled', className].filter(Boolean).join(' ')}
    >
      <input
        type="checkbox"
        role="switch"
        checked={checked}
        disabled={disabled}
        onChange={e => onChange?.(e.target.checked)}
      />
      {label && <span className="isc-switch__label">{label}</span>}
    </label>
  );
}
