import React from 'react';

// Figma source: Components
//   Mobile Bottom Navigation/Users     (id: 3029:18848) — 6 variants: 1st–5th + None
//   Mobile Bottom Navigation/Customers (id: 2791:8154)  — 5 variants: 1st–5th element

export type BottomNavSelected = '1st element' | '2nd element' | '3rd element' | '4th element' | '5th element' | 'None';
export type BottomNavAudience = 'Users' | 'Customers';

export interface BottomNavItem {
  id:       string;
  label:    string;
  icon:     React.ReactNode;
  href?:    string;
  onClick?: () => void;
}

export interface MobileBottomNavProps {
  items:      BottomNavItem[];
  selected?:  BottomNavSelected;
  audience?:  BottomNavAudience;
  className?: string;
}

export function MobileBottomNav({
  items,
  selected = '1st element',
  audience = 'Users',
  className,
}: MobileBottomNavProps) {
  const selectedIndex = selected === 'None'
    ? -1
    : parseInt(selected) - 1;

  return (
    <nav
      data-audience={audience}
      data-selected={selected}
      className={['isc-bottom-nav', className].filter(Boolean).join(' ')}
      aria-label="Main navigation"
    >
      {items.map((item, i) => (
        <a
          key={item.id}
          href={item.href}
          onClick={item.onClick}
          aria-current={i === selectedIndex ? 'page' : undefined}
          className={['isc-bottom-nav__item', i === selectedIndex && 'isc-bottom-nav__item--active'].filter(Boolean).join(' ')}
        >
          <span className="isc-bottom-nav__icon">{item.icon}</span>
          <span className="isc-bottom-nav__label">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
