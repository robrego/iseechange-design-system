import React from 'react';

// Figma source: Components › Popups
//   popup_2btns/360  (id: 2972:8688)   popup_2btns/768+ (id: 2972:8774)
//   popup_share/360  (id: 2972:8696)   popup_share/768+ (id: 2972:8712)
//   popup_reg/360    (id: 2972:8728)   popup_reg/768+   (id: 2972:8782)

export type PopupVariant    = '2btns' | 'share' | 'reg';
export type PopupBreakpoint = '360' | '768+';

export interface PopupProps {
  variant?:    PopupVariant;
  breakpoint?: PopupBreakpoint;
  title?:      string;
  message?:    string;
  primaryLabel?:   string;
  secondaryLabel?: string;
  onPrimary?:   () => void;
  onSecondary?: () => void;
  onClose?:     () => void;
  children?:    React.ReactNode;
  className?:   string;
}

export function Popup({
  variant    = '2btns',
  breakpoint = '360',
  title,
  message,
  primaryLabel   = 'Confirm',
  secondaryLabel = 'Cancel',
  onPrimary,
  onSecondary,
  onClose,
  children,
  className,
}: PopupProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      data-variant={variant}
      data-breakpoint={breakpoint}
      className={['isc-popup', className].filter(Boolean).join(' ')}
    >
      <div className="isc-popup__content">
        {title   && <h2 className="isc-popup__title">{title}</h2>}
        {message && <p  className="isc-popup__message">{message}</p>}
        {children}
      </div>
      {variant === '2btns' && (
        <div className="isc-popup__actions">
          {onSecondary && <button type="button" onClick={onSecondary}>{secondaryLabel}</button>}
          {onPrimary   && <button type="button" onClick={onPrimary}>{primaryLabel}</button>}
        </div>
      )}
      {onClose && (
        <button type="button" className="isc-popup__close" onClick={onClose} aria-label="Close">✕</button>
      )}
    </div>
  );
}
