import React from 'react';

// Figma source: Components › Insights Navigation › Side Navigation (id: 2662:5344, 7 variants)

export type SideNavActive = '1st' | '2nd' | '3rd' | '4th' | '5th' | '6th' | '7th';

export interface SideNavItem {
  id:       string;
  label:    string;
  icon?:    React.ReactNode;
  href?:    string;
  onClick?: () => void;
}

export interface SideNavigationProps {
  items:      SideNavItem[];
  activeItem?: SideNavActive;
  className?: string;
}

export function SideNavigation({ items, activeItem = '1st', className }: SideNavigationProps) {
  return (
    <aside
      data-active={activeItem}
      className={['isc-side-nav', className].filter(Boolean).join(' ')}
    >
      <ul role="list">
        {items.map((item, i) => (
          <li
            key={item.id}
            data-active={`${i + 1}st` === activeItem}
            className="isc-side-nav__item"
          >
            <a href={item.href} onClick={item.onClick}>
              {item.icon && <span className="isc-side-nav__icon">{item.icon}</span>}
              <span className="isc-side-nav__label">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
