import React from 'react';

// Figma source: Assets › Inputs › Form/search (id: 2293:4617, 5 variants)

export type SearchState = 'Default' | 'active_start' | 'active_process' | 'filled' | 'error';

export interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  state?:       SearchState;
  onClear?:     () => void;
  className?:   string;
}

export function SearchInput({
  state     = 'Default',
  onClear,
  className,
  ...props
}: SearchInputProps) {
  return (
    <div
      data-state={state}
      className={['isc-search-input', className].filter(Boolean).join(' ')}
    >
      <input type="search" {...props} />
      {state === 'active_process' && onClear && (
        <button type="button" onClick={onClear} aria-label="Clear search">✕</button>
      )}
    </div>
  );
}
