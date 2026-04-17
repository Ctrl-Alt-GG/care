<!--
Thanks for contributing to Ctrl-Alt-GG Care!
Keep this short. If a section doesn't apply, delete it.
-->

## What changed

<!-- One or two sentences. What does this PR do, and why? -->

## Scope

- [ ] Content (Markdown under `content/`)
- [ ] Presentation (layouts, shortcodes, CSS under `assets/css/`)
- [ ] Configuration (`hugo.toml`, `package.json`, workflows)
- [ ] Docs / agent files (`AGENTS.md`, `.github/instructions/`, `.github/prompts/`)

## Checks

- [ ] `npm run build` succeeds locally with no template errors
- [ ] No generated artefacts committed (`public/`, `resources/`, `assets/css/compiled/`, `.hugo_build.lock`, `hugo_stats.json`)
- [ ] Bilingual parity: every `content/**/<slug>.md` has a matching `<slug>.en.md`, with identical `weight`, `draft`, `date`, and slug
- [ ] New user-facing strings go through `{{ i18n "key" }}` with the key added to both `i18n/hu.toml` and `i18n/en.toml`
- [ ] New sections are whitelisted in `mainSections` in `hugo.toml` (both languages) and have `_index.md` + `_index.en.md`
- [ ] Agent-facing docs updated if behaviour changed (`AGENTS.md`, `.github/instructions/`)

## Screenshots / notes

<!-- Optional. Especially helpful for layout, shortcode, or CSS changes. -->
