import React from 'react';

// Figma source: Assets › Banners › Banner (id: 2686:5694, 12 variants)

export type BannerType = 'Confirmed' | 'Information' | 'Error';

export interface BannerProps {
  type?:      BannerType;
  title?:     string;
  subtitle?:  string;
  closeable?: boolean;
  onClose?:   () => void;
  children?:  React.ReactNode;
  className?: string;
}

export function Banner({
  type      = 'Information',
  title,
  subtitle,
  closeable = false,
  onClose,
  children,
  className,
}: BannerProps) {
  return (
    <div
      role="alert"
      data-type={type}
      className={['isc-banner', className].filter(Boolean).join(' ')}
    >
      {(title || subtitle) && (
        <div className="isc-banner__content">
          {title    && <p className="isc-banner__title">{title}</p>}
          {subtitle && <p className="isc-banner__subtitle">{subtitle}</p>}
        </div>
      )}
      {children}
      {closeable && (
        <button className="isc-banner__close" onClick={onClose} aria-label="Close">
          ✕
        </button>
      )}
    </div>
  );
}
