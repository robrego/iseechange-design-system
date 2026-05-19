import React from 'react';

// Figma source: Assets › Messages › notification (id: 3081:1202, 2 variants)

export type NotificationSize = '360' | '768+';

export interface NotificationProps {
  size?:      NotificationSize;
  title?:     string;
  message?:   string;
  onClose?:   () => void;
  children?:  React.ReactNode;
  className?: string;
}

export function Notification({
  size      = '360',
  title,
  message,
  onClose,
  children,
  className,
}: NotificationProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      data-size={size}
      className={['isc-notification', className].filter(Boolean).join(' ')}
    >
      {title   && <p className="isc-notification__title">{title}</p>}
      {message && <p className="isc-notification__message">{message}</p>}
      {children}
      {onClose && (
        <button type="button" onClick={onClose} aria-label="Dismiss">✕</button>
      )}
    </div>
  );
}
