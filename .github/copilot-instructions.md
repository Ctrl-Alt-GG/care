# Copilot instructions

The canonical guide for this repo is [`AGENTS.md`](../AGENTS.md). Read it first;
this file only lists always-true invariants so Copilot Chat never breaks them.

## Stack

Hugo (extended) + Tailwind CSS v4 + Node.js, deployed to Azure Static Web Apps.
Do **not** hard-code versions — read `.nvmrc`, `engines` in `package.json`, and
`module.hugoVersion` in `hugo.toml`.

## Non-negotiables

- Run Tailwind before Hugo. Use `npm run build` / `npm run dev`; never run
  `hugo` without first running `npm run build:css`.
- Never commit generated artefacts: `public/`, `resources/`, `assets/css/compiled/`,
  `.hugo_build.lock`, `hugo_stats.json`. They are all in `.gitignore`.
- Bilingual parity: every `content/**/<slug>.md` (Hungarian, default) has a
  matching `<slug>.en.md`. `weight`, `draft`, `date`, and slugs stay in sync;
  only `title` and `description` are translated.
- Sections must be whitelisted in `mainSections` under `[languages.hu.params]`
  and `[languages.en.params]` in `hugo.toml`. Menu entries live there too.
- Tailwind v4 syntax (`@import "tailwindcss"`, `@plugin`, `@theme`,
  `@custom-variant`). Edit `assets/css/main.css`; never touch
  `assets/css/compiled/**`.
- User-facing strings go through `{{ i18n "key" }}`, with the key added to
  **both** `i18n/hu.toml` and `i18n/en.toml`.
- Prefer extending existing partials and shortcodes over adding new files.

## Scope-specific rules

Path-scoped guidance lives in `.github/instructions/*.instructions.md` — Copilot
auto-applies the right file via its `applyTo` glob. Reusable scaffolds for
recurring tasks live in `.github/prompts/*.prompt.md`.
