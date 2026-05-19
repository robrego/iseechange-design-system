import React from 'react';

// Figma source: Assets › Buttons › Button (id: 2251:4413, 131 variants)

export type ButtonState   = 'Default' | 'Hover' | 'Clicked' | 'Disabled';
export type ButtonType    = 'Primary' | 'Secondary' | 'Tertiary';
export type ButtonColor   = 'Default' | 'Inverse' | 'Dark';
export type ButtonIcon    = 'No' | 'Right' | 'Left';
export type ButtonSize    = 'Big' | 'Small';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType;
  color?:   ButtonColor;
  size?:    ButtonSize;
  icon?:    ButtonIcon;
  iconElement?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({
  variant  = 'Primary',
  color    = 'Default',
  size     = 'Big',
  icon     = 'No',
  iconElement,
  children,
  disabled,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      data-variant={variant}
      data-color={color}
      data-size={size}
      className={['isc-button', className].filter(Boolean).join(' ')}
      {...props}
    >
      {icon === 'Left' && iconElement}
      {children}
      {icon === 'Right' && iconElement}
    </button>
  );
}
