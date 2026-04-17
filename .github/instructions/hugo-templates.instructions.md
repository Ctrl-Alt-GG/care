---
description: Conventions for Hugo Go templates under layouts/
applyTo: 'layouts/**/*.html'
---

# Hugo template conventions

## Entry points

- `layouts/_default/baseof.html` wraps every page; most other templates are
  blocks it defines (`{{ define "main" }}…{{ end }}`).
- `layouts/_default/list.html`, `single.html`, `home.html` specialise the base.
- Prefer adding a partial over forking a `_default` template. Fork only when
  behaviour truly diverges per page kind.

## Idioms

- Open templates with `{{ $page := . }}` and refer to `$page` afterwards. This
  survives `range`/`with` blocks that reassign `.`.
- Read parameters through `.Param "foo.bar"` so values cascade site → section
  → page. Only reach into `.Params.foo.bar` when you specifically want to
  ignore the cascade.
- Never embed hard-coded hex colours or brand strings. Use the CSS tokens
  from `@theme` in `assets/css/main.css`, or `{{ .Param "cag.site.color" }}`.
- Pipe user content through `markdownify | plainify | htmlUnescape` when it
  ends up in attributes (`<title>`, `<meta content="…">`, `alt`, etc.).
- Icons are rendered via `{{ partial "icon.html" (dict "name" "wifi" "size" 18) }}`.
  Add new SVGs under `assets/icons/` and reference by base name.

## Partials vs shortcodes

- **Partials** (`layouts/partials/**`) are invoked from templates with
  `{{ partial "name.html" . }}`. They are internal composition.
- **Shortcodes** (`layouts/shortcodes/**`) are invoked from Markdown with
  `{{< name … >}}`. They are the authoring API for content editors.
- Do **not** call shortcodes from templates; do **not** expect partials to be
  reachable from Markdown.

## Internationalisation

- All user-facing strings go through `{{ i18n "key" }}`. Add every new key to
  **both** `i18n/hu.toml` and `i18n/en.toml` in the same commit.
- Do not inline Hungarian or English copy in templates — put it in `i18n/`.
- Language-aware links: use `ref`/`relref` or `.Permalink`, which Hugo
  resolves per locale, instead of building paths manually.

## Safety

- Treat Markdown input as trusted for internal content, but still prefer
  `markdownify` over `safeHTML` unless you are rendering a template-owned HTML
  fragment you control.
- Keep templates idempotent — no global state, no writes outside the render.
