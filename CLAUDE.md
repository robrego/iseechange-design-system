# ISeeChange Design System

## Project
Vanilla CSS + TypeScript design system extracted from Figma.
No Tailwind. No React. No frameworks.
Output: CSS files per component + TypeScript types.

## Structure
```
assets/        ← component CSS + TS (buttons, inputs, checkbox, radio, switch, pills, banners, messages)
components/    ← composed components (navigation, filters, popups, progress, comment)
tokens/        ← design token CSS variables
tokens.ts      ← TypeScript token exports
assets/manifest.ts  ← ALL Figma node IDs — always check here first
assets/index.ts     ← asset exports
iseechange-design-system.html  ← live showcase, update this after each component
```

## Styling conventions
- Classes: `isc-[component]` (e.g. `isc-button`, `isc-input`)
- Variants via data attributes: `data-variant`, `data-color`, `data-size`, `data-state`
- CSS variables from tokens: `--color-primary-celtic-blue`, `--color-secondary-gray-90`, etc.
- Never hardcode hex values in component CSS — always reference a token variable
- File per component group: `Button.css`, `Input.css`, `Checkbox.css`, etc.

## Figma MCP rules — READ BEFORE EVERY FIGMA CALL
- Figma file key: `AshFew4JR1iu9Gl1eQB2o7`
- ALWAYS check `assets/manifest.ts` for node IDs before calling Figma
- NEVER call `get_design_context` on a top-level frame (Button, Input, etc.) — they exceed context
- ALWAYS start from a specific variant node ID (e.g. a single Default/Primary/Big state)
- Fetch max 3 node IDs per parallel call
- After receiving a Figma response, write raw data to `/tmp/figma_[component].json` first
  then work from that file — do NOT hold the full response in context
- Fetch only the states you need: Default + Hover + Disabled (skip Clicked unless asked)
- If a response includes "too large to fit into context" — stop, drill to sublayer IDs

## Per-session scope
One session = one component family. Examples:
- "Style Button component" → Button.css only
- "Style Input fields" → Input.css only
Do not mix Figma-reading and GitHub-pushing in the same session.

## GitHub workflow
- Use `gh` CLI for all GitHub operations (PRs, commits, branch management)
- Branch per component: `feat/button-styles`, `feat/input-styles`, etc.
- Commit CSS and TS together: never commit one without the other
- Update `iseechange-design-system.html` showcase before pushing

## Do not read
- `node_modules/`
- Any `.html` file unless specifically asked to update the showcase
- `tsconfig.json`, `package.json` unless debugging a build issue
