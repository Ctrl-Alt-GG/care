---
description: Bilingual content rules for Markdown under content/
applyTo: 'content/**/*.md'
---

# Content rules (Hungarian + English)

## Pairing rule

Every page exists twice:

- `content/<section>/<slug>.md` — Hungarian (default language)
- `content/<section>/<slug>.en.md` — English

Creating, renaming, or deleting one half without the other breaks parity and
**must not** be done. Section indexes (`_index.md` / `_index.en.md`) follow
the same rule.

## Frontmatter

Required keys on every content page:

- `title` — translated per locale.
- `description` — translated per locale, one sentence, ≤160 characters.
- `weight` — integer, identical across the language pair, unique within the
  section (conventionally multiples of 10 so inserts are cheap).

Optional but encouraged:

- `date` — ISO date; kept identical across the pair.
- `draft: true` while in-progress; remove before merging to `main`.

Do **not** set `url`, `slug`, or `aliases` unless you are intentionally
overriding Hugo's defaults — they will desync the two locales.

## Allowed sections

Sections must be declared in `mainSections` under `[languages.hu.params]` and
`[languages.en.params]` in `hugo.toml`, and have matching menu entries. Do
not create content in a section that is not whitelisted there.

## Shortcodes

Prefer the project shortcodes over raw HTML:

```markdown
{{< callout type="note" >}}
Short heads-up for the reader.
{{< /callout >}}

{{< problem-link href="/network/wifi" icon="wifi" >}}My Wi-Fi is slow{{< /problem-link >}}
```

- `callout` types: `note`, `tip`, `warning`, `danger`.
- `problem-link` icons: `wifi`, `hardware`, `pc`, `ping`, `network`,
  `question`, `arrow` (falls back to `arrow-right`).

Check `layouts/shortcodes/` before adding new ones — prefer extending an
existing shortcode's parameters over forking a new variant.

## Writing style

- Hungarian copy is primary: write the Hungarian version first, translate to
  English afterwards, then cross-check that tone and structure match.
- Headings use sentence case in both locales.
- Keep heading depth shallow (H2/H3 mostly). Hugo generates anchor links.
- Link to other pages by `ref`/`relref`, never by hard-coded URL, so both
  locales resolve correctly.

## Assets inside content

Images and downloads placed next to a Markdown file become page resources.
Reference them via `![alt](image.webp)` rather than absolute `/static/...`
paths so the pair stays portable.
