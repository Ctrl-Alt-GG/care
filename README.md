# Ctrl-Alt-GG Care

Support and care hub for the [Ctrl-Alt-GG](https://ctrl-alt-gg.hu) LAN community — troubleshooting guides, house rules, arrival info, and wellness tips. Bilingual (Hungarian / English). Live at <https://care.ctrl-alt-gg.hu/>.

The site exists so nobody has to DM an organiser at 2 AM to ask why the Wi-Fi is slow or where the kitchen is. Content is short, practical, and written for tired gamers.

## Stack

Hugo (extended) + Tailwind CSS v4 + Node.js, deployed to Azure Static Web Apps.

Tool versions and build commands are pinned in the repo — don't copy them into docs. Read them from:

- `.nvmrc` and `engines.node` in `package.json` — Node version
- `module.hugoVersion` in `hugo.toml` — Hugo version floor
- `scripts` in `package.json` — dev and build commands

## Local development

```bash
nvm use
npm ci
npm run dev
```

The dev server runs Tailwind in watch mode alongside `hugo server` and serves the site at <http://localhost:1313/>.

## Build

```bash
npm run build
```

This builds the Tailwind stylesheet first, then runs Hugo. Output is written to `public/`. Never run `hugo` directly without `npm run build:css` first — templates reference classes that only exist in the compiled stylesheet.

## Project layout

- `content/<section>/` — bilingual Markdown pairs: `<slug>.md` (Hungarian) + `<slug>.en.md` (English). `weight`, `draft`, `date`, and slugs must match across the pair.
- `layouts/` — Hugo templates. `shortcodes/` contains the authoring API (`callout`, `problem-link`); `partials/` holds reusable fragments.
- `assets/css/main.css` — Tailwind v4 source. The compiled output in `assets/css/compiled/` is git-ignored.
- `assets/icons/` — SVG set referenced by the `icon.html` partial.
- `i18n/hu.toml`, `i18n/en.toml` — per-locale string tables. Every user-facing string goes through `{{ i18n "key" }}`.
- `static/` — files copied verbatim to the site root.

Sections (whitelisted in `mainSections` per language in `hugo.toml`):

| Section | Description |
|---------|-------------|
| `network/` | Network & connectivity guides |
| `hardware/` | Hardware & power guides |
| `software/` | Software basics |
| `wellness/` | Wellness & community |
| `logistics/` | Logistics & arrival |
| `help/` | How to get help |

## Contributing and working with AI agents

The canonical contributor guide — for humans and AI agents alike — is [`AGENTS.md`](AGENTS.md). It covers bilingual parity rules, templating conventions, the Tailwind setup, and the "do-not-touch" list.

Path-scoped rules for Copilot and other agents live under `.github/instructions/` and are auto-applied by glob. Reusable slash-command scaffolds (new guide, new shortcode, new partial) live under `.github/prompts/`.

When opening a PR, follow [`.github/PULL_REQUEST_TEMPLATE.md`](.github/PULL_REQUEST_TEMPLATE.md). The most important checks are that `npm run build` is clean, no generated artefacts are committed, and bilingual parity is maintained.

## Deployment

Pushes and PRs targeting `main` are built and deployed to Azure Static Web Apps via the workflow in `.github/workflows/`. The required build order (`npm ci` → `npm run build:css` → `hugo`) is encoded there and mirrors the npm scripts.
