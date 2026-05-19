import React from 'react';

// Figma source: Components › Web-App Navigation › Header (id: 4041:7885, 3 variants)

export type HeaderState = 'Log out' | 'Log in' | 'Login_Customer';

export interface HeaderProps {
  state?:     HeaderState;
  logo?:      React.ReactNode;
  children?:  React.ReactNode;
  className?: string;
}

export function Header({ state = 'Log out', logo, children, className }: HeaderProps) {
  return (
    <header
      data-state={state}
      className={['isc-header', className].filter(Boolean).join(' ')}
    >
      {logo && <div className="isc-header__logo">{logo}</div>}
      {children}
    </header>
  );
}
