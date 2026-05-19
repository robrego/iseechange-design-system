import React from 'react';

// Figma source: Components › Web-App Navigation › Top navigation (id: 2660:5294, 2 variants)

export type TopNavDevice = 'Desktop' | 'Tablet Landscape';

export interface TopNavigationProps {
  device?:    TopNavDevice;
  children?:  React.ReactNode;
  className?: string;
}

export function TopNavigation({ device = 'Desktop', children, className }: TopNavigationProps) {
  return (
    <nav
      data-device={device}
      className={['isc-top-nav', className].filter(Boolean).join(' ')}
    >
      {children}
    </nav>
  );
}
