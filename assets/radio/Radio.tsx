import React from 'react';

// Figma source: Assets › Radio › radio (id: 2706:5824, 3 variants)

export type RadioStatus = 'Default' | 'active' | 'hover';

export interface RadioOption {
  value:    string;
  label:    string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name:       string;
  options:    RadioOption[];
  value?:     string;
  onChange?:  (value: string) => void;
  className?: string;
}

export function RadioGroup({ name, options, value, onChange, className }: RadioGroupProps) {
  return (
    <div role="radiogroup" className={['isc-radio-group', className].filter(Boolean).join(' ')}>
      {options.map(opt => (
        <label
          key={opt.value}
          data-status={opt.disabled ? 'Default' : value === opt.value ? 'active' : 'Default'}
          className={['isc-radio', opt.disabled && 'isc-radio--disabled'].filter(Boolean).join(' ')}
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            disabled={opt.disabled}
            onChange={() => onChange?.(opt.value)}
          />
          <span className="isc-radio__label">{opt.label}</span>
        </label>
      ))}
    </div>
  );
}
