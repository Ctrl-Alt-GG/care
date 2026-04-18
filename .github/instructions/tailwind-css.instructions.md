---
description: Tailwind CSS v4 rules for the site stylesheet source
applyTo: 'assets/css/**/*.css'
---

# Tailwind CSS v4

## Entry point

`assets/css/main.css` is the single source file. It must keep these at the top:

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";
```

The compiled output lives under `assets/css/compiled/` and is **git-ignored**.
Never edit compiled files, never add them to commits.

## Design tokens

Shared tokens live in `@theme { … }` at the top of `main.css`:

- Brand palette: `--color-brand-50` … `--color-brand-900` (cross-site red).
- Typography: `--font-sans` (Inter-first fallback chain).
- Radius / elevation: `--radius-*`, `--shadow-*`.

**Do not** introduce parallel token systems, ad-hoc hex values in templates,
or `!important` overrides. Add or rename tokens here so all three CAG
properties stay visually coherent.

## Authoring rules

- Prefer utility classes in templates; lift patterns into `@layer components`
  in `main.css` once they repeat.
- Dark mode is expressed with the `dark:` variant. It uses Tailwind v4's
  built-in behaviour, which activates via `prefers-color-scheme: dark`. Do not
  re-introduce a `@custom-variant dark` override or class-based toggling.
- Typography plugin is enabled; style Markdown output via `.prose` selectors
  under `@layer components`, not by decorating individual elements.
- If you need a new Tailwind plugin, register it with `@plugin "name"` in
  `main.css` and add the devDependency in `package.json`.

## Performance

- Tailwind v4 scans templates automatically; do not maintain a `content`
  glob list. If classes are being purged, the fix is almost always to
  unbreak the template expression so the class literal is visible to the
  scanner, not to add an allowlist.
- Keep selectors shallow. `@apply` is allowed inside `@layer components`
  but avoid deep selector chains.

## Build

`npm run build:css` runs the CLI once; `npm run dev:css` watches. Both are
wired from `package.json` — do not invoke the Tailwind binary directly.
