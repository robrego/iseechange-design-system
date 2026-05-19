import React from 'react';

// Figma source: Components › Web-App Navigation
//   Footer/Desktop (id: 4041:7961) — State: Default | Language selected
//   Footer/Mobile  (id: 4043:4048) — standalone

export type FooterState = 'Default' | 'Language selected';
export type FooterDevice = 'Desktop' | 'Mobile';

export interface FooterProps {
  device?:   FooterDevice;
  state?:    FooterState;
  children?: React.ReactNode;
  className?: string;
}

export function Footer({ device = 'Desktop', state = 'Default', children, className }: FooterProps) {
  return (
    <footer
      data-device={device}
      data-state={state}
      className={['isc-footer', className].filter(Boolean).join(' ')}
    >
      {children}
    </footer>
  );
}
