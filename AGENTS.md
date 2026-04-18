# AGENTS.md — Ctrl-Alt-GG Care

> Canonical guide for AI coding agents (GitHub Copilot, Cursor, Codex, Claude, etc.)
> working on this repository. Editors, humans, and automation should all read this first.
> See `README.md` for the human-facing quickstart.

## 1. What this repo is

Ctrl-Alt-GG **Care** is the support and care hub for the Ctrl-Alt-GG LAN community —
troubleshooting guides, house rules, arrival info, wellness tips. It is a static
site built with Hugo, styled with Tailwind CSS v4, and deployed to Azure Static
Web Apps. Live at <https://care.ctrl-alt-gg.hu/>.

The site is **bilingual**: Hungarian (`hu`) is the default language, English
(`en`) is the secondary. Language pairing and parity is a first-class invariant
(see §5).

## 2. Source of truth for the stack

Do **not** hard-code tool versions or commands in documentation or code. Always
read them from the pinned source:

| Fact | Pinned in |
|---|---|
| Node.js version | `.nvmrc` and `engines.node` in `package.json` |
| Hugo version floor | `module.hugoVersion` in `hugo.toml` |
| Dev / build commands | `scripts` in `package.json` |
| Deploy pipeline | `.github/workflows/azure-static-web-apps-*.yml` |
| Site languages, menus, sections | `hugo.toml` (`[languages]`, `mainSections`) |
| Ignored / generated paths | `.gitignore` |

When in doubt, re-read those files. If your change would contradict them,
update the pinned source — not the docs.

## 3. Repository shape (conventions, not inventory)

Hugo's default layout is assumed. The names below describe **roles**; agents
should discover actual files via the filesystem, not from a hard-coded list.

- `content/<section>/` — Markdown content. Each `<slug>.md` is Hungarian and
  each matching `<slug>.en.md` is the English counterpart (see §5).
- `layouts/_default/` — site-wide templates (`baseof`, `list`, `single`, `home`).
- `layouts/partials/` — reusable template fragments. Nested folders group
  related partials (e.g. `head/`, `footer/`, `content/`).
- `layouts/shortcodes/` — Markdown-callable components used in content.
- `assets/css/` — Tailwind source; the compiled output lives under
  `assets/css/compiled/` and is **git-ignored** (see `.gitignore`).
- `assets/icons/` — SVG icon set referenced by the `icon.html` partial.
- `assets/js/` — small hand-written JS; no bundler.
- `i18n/` — per-locale string tables (`<lang>.toml`).
- `static/` — files copied verbatim to the site root.
- `public/` — Hugo build output. **Never commit.**

If a new top-level directory is needed, prefer extending an existing one
(e.g. add a subfolder under `layouts/partials/`) rather than inventing a new root.

## 4. Running the project

Always use the npm scripts; they encode the correct order (Tailwind first,
then Hugo):

```bash
nvm use              # honours .nvmrc
npm ci               # install locked deps
npm run dev          # watch-mode dev server (Tailwind --watch + hugo server)
npm run build        # production build (build:css then build:hugo)
```

Never run `hugo` directly without running `npm run build:css` first — templates
reference classes that only exist in the compiled stylesheet.

## 5. Content invariants (bilingual parity)

Every page **must** exist in both Hungarian and English:

- Hungarian (default): `content/<section>/<slug>.md`
- English: `content/<section>/<slug>.en.md`
- Section index pages follow the same rule: `_index.md` + `_index.en.md`.
- `weight` in frontmatter **must match** across the language pair so the menu
  order is stable.
- `title` and `description` are translated; `weight`, `draft`, `date`, slugs
  are identical.
- Allowed sections are whitelisted by `mainSections` in `hugo.toml`. Adding
  a new section means: update `mainSections` for both languages, add the
  menu entries, and create `_index` pairs.

Shortcodes available to content authors:

- `{{< callout type="note|tip|warning|danger" >}}...{{< /callout >}}`
- `{{< problem-link href="..." icon="wifi|hardware|pc|ping|network|question|arrow" >}}Label{{< /problem-link >}}`

Prefer these over raw HTML; consult `layouts/shortcodes/` for the current
parameter contract before inventing new markup.

## 6. Templating conventions (Hugo / Go templates)

- Start non-trivial templates with `{{ $page := . }}` and work off `$page`
  rather than re-dotting into `.` — it reads better and survives
  `range`/`with` refactors.
- Prefer `{{ .Param "cag.site.color" }}` over direct `.Params.cag.site.color`
  access so values can cascade from site → section → page.
- Always use `{{ i18n "key" }}` for user-facing strings; add the key to
  **both** `i18n/hu.toml` and `i18n/en.toml`.
- Partial vs shortcode: **partials** are internal, composed from templates;
  **shortcodes** are the authoring API for Markdown. Do not call shortcodes
  from layouts; do not expect partials to be available from Markdown.
- Pipe through `markdownify | plainify | htmlUnescape` when rendering user
  titles/descriptions into attributes like `<title>` or `<meta>`.

## 7. Styling (Tailwind CSS v4)

- The entry point is `assets/css/main.css`; it declares
  `@import "tailwindcss"`, `@plugin "@tailwindcss/typography"`, and the shared
  `@theme { … }` tokens.
- **Never** edit anything under `assets/css/compiled/` — it is generated.
- Prefer utility classes in templates. When a pattern repeats, lift it into
  `@layer components` in `main.css`.
- Dark mode uses Tailwind v4's built-in `dark:` variant, which activates via
  the `prefers-color-scheme: dark` media query. No custom variant or JS toggle
  is required.
- Brand colours are the `--color-brand-*` CSS custom properties in `@theme`.
  Do not introduce ad-hoc hexes in templates.

## 8. Deployment

`main` pushes and PRs are built and deployed by the Azure Static Web Apps
workflow under `.github/workflows/`. The required build order (`npm ci` →
`npm run build:css` → `hugo`) is encoded there; keep it consistent with
`package.json` scripts. The deploy uploads from `app_location: /public`.

Do not rename `public/`, do not commit it, and do not change the secret name
without updating Azure.

## 9. Do-not-touch list

- `assets/css/compiled/**` — generated, git-ignored.
- `public/**`, `resources/**`, `.hugo_build.lock`, `hugo_stats.json` — build output.
- `node_modules/**` — dependency cache.
- Anything under `.github/workflows/` unless the change is the subject of the
  task; treat deploy tokens and `app_location` as load-bearing.

## 10. How to make changes safely

1. Identify the smallest scope. Most changes are either **content** (Markdown
   under `content/`), **presentation** (a partial, shortcode, or CSS token),
   or **config** (`hugo.toml`, `package.json`, workflow).
2. Read the matching `.github/instructions/*.instructions.md` file — it is
   auto-applied by Copilot for the file glob you are editing, but you should
   read it explicitly so you understand the rules.
3. Run `npm run build` locally. A clean build with no template errors is the
   bar for "done".
4. For bilingual content edits, verify both `.md` and `.en.md` changed, and
   that `weight` still matches.

## 11. Where the other Copilot files fit

- `.github/copilot-instructions.md` — short, always-loaded pointer to this
  document. Keep it thin.
- `.github/instructions/*.instructions.md` — path-scoped rules triggered by
  `applyTo` globs. Each one covers one concern (templates, content, CSS,
  workflows).
- `.github/prompts/*.prompt.md` — reusable slash-command scaffolds for
  recurring tasks (new guide, new shortcode, new partial). Invoke via
  `/<prompt-name>` in Copilot Chat.
