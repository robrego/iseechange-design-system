/* ISC Design System — Token Constants */
/* Auto-generated from Figma: Design System - ISC */

// ─── Colors ───────────────────────────────────────────────────────────────────

export const colors = {
  primary: {
    redFanta:   '#ff7262',
    greenLight: '#46d1b4',
    yellow:     '#f7d764',
    celticBlue: '#0172da',
    royal:      '#062b62',
    blueOcean:  '#20a0ec',
    white:      '#ffffff',
    black:      '#000000',
  },
  secondary: {
    royal: {
      30: '#14448f',
      40: '#345ca8',
      50: '#4f75c3',
    },
    celtic: {
      60: '#3f91fa',
      70: '#77acff',
      80: '#a8cbff',
      90: '#d5eafe',
      95: '#ecf6ff',
      98: '#f8fcff',
    },
    green: {
      40: '#048485',
      50: '#109c97',
      60: '#28b0a5',
      70: '#28c7ac',
      90: '#80ddca',
      95: '#baefe4',
      98: '#e1fdf7',
    },
    gray: {
      50: '#464b52',
      60: '#535962',
      70: '#6d7782',
      80: '#a1a9b2',
      90: '#d0d5d9',
      95: '#e1e7ed',
      98: '#edf2f7',
    },
    red: {
      30: '#9e1303',
      40: '#ba2a1a',
      50: '#e53c29',
      60: '#ff5a47',
      80: '#ffb3ab',
      90: '#ffdad5',
      95: '#ffedea',
      98: '#fff8f7',
    },
    yellow: {
      40: '#deb31b',
    },
  },
} as const;

export type ColorToken = typeof colors;

// ─── Typography ───────────────────────────────────────────────────────────────

export const fontFamilies = {
  heading: "'General Sans', Arial, sans-serif",
  body:    "'Inter', system-ui, sans-serif",
} as const;

export const fontSizes = {
  h1:        '5rem',        // 80px
  h2:        '3.75rem',     // 60px
  h3:        '2.5rem',      // 40px
  h4:        '1.75rem',     // 28px
  bodyBig:   '1.25rem',     // 20px
  body:      '1rem',        // 16px
  bodySmall: '0.875rem',    // 14px
  overline:  '0.6875rem',   // 11px
  caption:   '0.75rem',     // 12px
  label:     '0.75rem',     // 12px
} as const;

export const fontWeights = {
  regular:  400,
  medium:   500,
  semibold: 600,
} as const;

export const lineHeights = {
  tight:  1.1,   // h1, h2
  normal: 1.25,  // h3, h4
  body:   1.5,   // body, overline, caption
  label:  1.2,
} as const;

export const textStyles = {
  h1:            { fontFamily: fontFamilies.heading, fontSize: fontSizes.h1,        fontWeight: fontWeights.medium,   lineHeight: lineHeights.tight  },
  h2:            { fontFamily: fontFamilies.heading, fontSize: fontSizes.h2,        fontWeight: fontWeights.medium,   lineHeight: lineHeights.tight  },
  h3:            { fontFamily: fontFamilies.heading, fontSize: fontSizes.h3,        fontWeight: fontWeights.medium,   lineHeight: lineHeights.normal },
  h4:            { fontFamily: fontFamilies.heading, fontSize: fontSizes.h4,        fontWeight: fontWeights.medium,   lineHeight: lineHeights.normal },
  bodyBigMedium: { fontFamily: fontFamilies.body,    fontSize: fontSizes.bodyBig,   fontWeight: fontWeights.medium,   lineHeight: lineHeights.body   },
  bodyBig:       { fontFamily: fontFamilies.body,    fontSize: fontSizes.bodyBig,   fontWeight: fontWeights.regular,  lineHeight: lineHeights.body   },
  bodyMedium:    { fontFamily: fontFamilies.body,    fontSize: fontSizes.body,      fontWeight: fontWeights.medium,   lineHeight: lineHeights.body   },
  body:          { fontFamily: fontFamilies.body,    fontSize: fontSizes.body,      fontWeight: fontWeights.regular,  lineHeight: lineHeights.body   },
  bodySmallMed:  { fontFamily: fontFamilies.body,    fontSize: fontSizes.bodySmall, fontWeight: fontWeights.medium,   lineHeight: lineHeights.body   },
  bodySmall:     { fontFamily: fontFamilies.body,    fontSize: fontSizes.bodySmall, fontWeight: fontWeights.regular,  lineHeight: lineHeights.body   },
  overline:      { fontFamily: fontFamilies.body,    fontSize: fontSizes.overline,  fontWeight: fontWeights.semibold, lineHeight: lineHeights.body,  letterSpacing: '0.08em', textTransform: 'uppercase' as const },
  caption:       { fontFamily: fontFamilies.body,    fontSize: fontSizes.caption,   fontWeight: fontWeights.regular,  lineHeight: lineHeights.body   },
  label:         { fontFamily: fontFamilies.body,    fontSize: fontSizes.label,     fontWeight: fontWeights.medium,   lineHeight: lineHeights.label  },
} as const;

export type TextStyleToken = keyof typeof textStyles;

// ─── Shadows ──────────────────────────────────────────────────────────────────

export const shadows = {
  small:     '0px 8px 24px rgba(151, 151, 151, 0.13)',
  medium:    '0px 12px 30px rgba(0, 0, 0, 0.10)',
  big:       '0px 16px 30px rgba(0, 0, 0, 0.12)',
  bottomNav: '0px 0px 30px rgba(0, 0, 0, 0.12)',
} as const;

export type ShadowToken = keyof typeof shadows;
