import React from 'react';

// Figma source: Assets › Pills
//   40/filled  (id: 2287:4796, 6 variants) — state: default | hover | floating | selected
//   40/strokes (id: 2751:6018, 6 variants) — state: default | hover | floating | selected
//   48/filled  (id: 2607:5316)
//   48/strokes (id: 2751:6031)

export type PillState   = 'default' | 'hover' | 'floating' | 'selected';
export type PillVariant = 'filled' | 'strokes';
export type PillSize    = 40 | 48;

export interface PillProps {
  label?:     string;
  state?:     PillState;
  variant?:   PillVariant;
  size?:      PillSize;
  icon?:      React.ReactNode;
  onClick?:   () => void;
  className?: string;
}

export function Pill({
  label,
  state   = 'default',
  variant = 'filled',
  size    = 40,
  icon,
  onClick,
  className,
}: PillProps) {
  return (
    <button
      type="button"
      data-state={state}
      data-variant={variant}
      data-size={size}
      onClick={onClick}
      className={['isc-pill', className].filter(Boolean).join(' ')}
    >
      {icon && <span className="isc-pill__icon">{icon}</span>}
      {label && <span className="isc-pill__label">{label}</span>}
    </button>
  );
}
