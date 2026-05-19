# ISeeChange Design System

A structured design token library extracted directly from the ISeeChange Figma Design System using **Figma MCP + Claude Code**.

## How this was built

This repo was generated in a single Claude Code session by connecting Claude Code to the ISeeChange Figma file via the Figma MCP server. Claude read the live design file and extracted all tokens, assets, and components into a structured, importable package — no manual copy-paste, no screenshots.

```
plugin:figma: https://mcp.figma.com/mcp (HTTP) — ✓ Connected
```

## Structure

```
iseechange-design-system/
├── tokens/
│   ├── colors.css        — 39 CSS custom properties (--color-primary-*, --color-secondary-*)
│   ├── typography.css    — font variables + utility classes (.text-h1, .text-body, etc.)
│   ├── shadows.css       — 4 shadow variables (--shadow-small/medium/big/bottom-nav)
│   └── index.css         — single import entry point
├── assets/               — UI primitives & building blocks
│   ├── banners/          — Banner
│   ├── buttons/          — Button, ButtonSocial
│   ├── checkbox/         — Checkbox
│   ├── inputs/           — SearchInput, TextField, Dropdown
│   ├── messages/         — Tooltip, Notification
│   ├── pills/            — Pill
│   ├── radio/            — RadioGroup
│   ├── switch/           — Switch
│   └── manifest.ts       — all Figma IDs (avatars, icons, layout blocks)
├── components/           — composed page-level components
│   ├── navigation/       — TopNavigation, SideNavigation, MobileBottomNav, Header, Footer
│   ├── filters/          — FiltersPanel
│   ├── popups/           — Popup
│   ├── progress/         — ProgressStates
│   └── comment/          — Comment
├── tokens.ts             — TypeScript constants for all tokens
└── index.ts              — single entry point
```

## Usage

Add to your Next.js or React project:

```json
// package.json
"dependencies": {
  "@iseechange/design-system": "file:../iseechange-design-system"
}
```

```tsx
// TypeScript tokens + React components
import { colors, textStyles, Button, Banner } from '@iseechange/design-system';
import { SideNavigation } from '@iseechange/design-system/components';

// CSS variables (in layout.tsx or globals.css)
import '@iseechange/design-system/tokens/css';
```

## What this demonstrates

- **Figma MCP integration**: Claude Code connected directly to a live Figma file via the Figma MCP server, reading component specs, design tokens, and layout structures in real time
- **Design-to-code workflow**: From Figma source of truth to importable npm-ready package in one session
- **Token architecture**: Clear separation between raw design values (tokens), atomic UI elements (assets), and composed page structures (components)

This workflow is directly applicable to standardizing design systems, brand guidelines, and usability rules across product teams — connecting design tools to AI coding agents without manual handoff.

---

Built by [Roberto Salodini](https://robertosalodini.com) · May 2026
