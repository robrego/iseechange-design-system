import React from 'react';

// Figma source: Components › Insights Navigation
//   Filters title (id: 2663:5828) — Device: Desktop | Tablet
//   Filters CTA   (id: 2663:5840) — Device: Desktop | Tablet
//   Filters Panel (id: 2663:5860) — Device: Desktop | Tablet
//   Data type title (id: 2669:6609) — Device: Desktop | Tablet | New

export type FiltersDevice = 'Desktop' | 'Tablet';
export type DataTypeTitleDevice = 'Desktop' | 'Tablet' | 'New';

export interface FiltersPanelProps {
  device?:       FiltersDevice;
  title?:        string;
  onApply?:      () => void;
  onReset?:      () => void;
  children?:     React.ReactNode;
  className?:    string;
}

export function FiltersPanel({
  device    = 'Desktop',
  title,
  onApply,
  onReset,
  children,
  className,
}: FiltersPanelProps) {
  return (
    <div
      data-device={device}
      className={['isc-filters-panel', className].filter(Boolean).join(' ')}
    >
      {title && (
        <div className="isc-filters-panel__title">{title}</div>
      )}
      <div className="isc-filters-panel__body">{children}</div>
      <div className="isc-filters-panel__cta">
        {onReset && <button type="button" onClick={onReset}>Reset</button>}
        {onApply && <button type="button" onClick={onApply}>Apply</button>}
      </div>
    </div>
  );
}
