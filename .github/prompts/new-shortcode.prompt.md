---
description: Create a new Hugo shortcode under layouts/shortcodes/
mode: agent
---

# New shortcode

Inputs:

- `${input:name}` — kebab-case filename (becomes `{{< name … >}}`).
- `${input:summary}` — one-line description of what the shortcode renders.
- `${input:params}` — comma-separated parameter names, e.g. `href, icon, type`.

## Before writing anything

1. List `layouts/shortcodes/`. If a shortcode with overlapping purpose
   already exists (e.g. you were asked for `alert` but `callout` is there),
   stop and recommend extending the existing one instead of forking.
2. Decide whether each parameter is **named** (`{{ .Get "href" }}`) or
   **positional** (`{{ .Get 0 }}`). Named is the default for anything a
   content author will touch; positional is only for one-argument
   utilities. State your choice in the shortcode's leading comment.

## Create `layouts/shortcodes/${input:name}.html`

Template skeleton (adapt to your parameters):

```html
{{- /*
  ${input:summary}

  Usage:
    {{</* ${input:name} param1="…" param2="…" */>}}Inner content{{</* /${input:name} */>}}
*/ -}}
{{- $param1 := .Get "param1" | default "" -}}
{{- $param2 := .Get "param2" | default "" -}}
<div class="…">
  {{ .Inner | markdownify }}
</div>
```

Rules:

- Use Tailwind utility classes only; do **not** introduce new CSS files.
  If a pattern repeats, lift it into `@layer components` in
  `assets/css/main.css`.
- Pipe `.Inner` through `markdownify` (for block Markdown) or
  `markdownify | plainify` (when embedding into an attribute).
- Render icons via `{{ partial "icon.html" (dict "name" "…" "size" 18) }}`
  rather than inlining SVG paths.
- Never call another shortcode from inside a shortcode — delegate to a
  partial instead.

## After writing

1. Add a short usage example to the shortcode's leading comment (shown
   above) so authors can discover it from the file itself.
2. If the shortcode is likely to appear in both locales, write a
   single-line sample in one HU page and one EN page so it gets coverage
   on the live site.
3. Run `npm run build` and confirm no template errors.
