import React from 'react';

// Figma source: Assets › Messages › tooltip (id: 2316:4989, 13 variants)

export type TooltipPosition =
  | 'top_left' | 'top_right' | 'top_center'
  | 'bottom_left' | 'bottom_right' | 'bottom_center'
  | 'right_middle' | 'left_middle';

export type TooltipSize = 'Small' | 'Big';

export interface TooltipProps {
  content:    React.ReactNode;
  position?:  TooltipPosition;
  size?:      TooltipSize;
  isError?:   boolean;
  children:   React.ReactNode;
  className?: string;
}

export function Tooltip({
  content,
  position  = 'top_center',
  size      = 'Small',
  isError   = false,
  children,
  className,
}: TooltipProps) {
  return (
    <div
      className={['isc-tooltip-wrapper', className].filter(Boolean).join(' ')}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {children}
      <div
        role="tooltip"
        data-position={position}
        data-size={size}
        data-error={isError}
        className="isc-tooltip"
      >
        {content}
      </div>
    </div>
  );
}
