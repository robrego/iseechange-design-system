import React from 'react';

// Figma source: Assets › Buttons › Button - Social (id: 3246:4678, 3 variants)

export type SocialProvider = 'Facebook' | 'Google' | 'Apple';

export interface ButtonSocialProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  provider: SocialProvider;
  children?: React.ReactNode;
}

export function ButtonSocial({ provider, children, className, ...props }: ButtonSocialProps) {
  return (
    <button
      data-provider={provider}
      className={['isc-button-social', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children ?? `Continue with ${provider}`}
    </button>
  );
}
