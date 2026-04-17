---
description: Create a new partial template under layouts/partials/
mode: agent
---

# New partial

Inputs:

- `${input:area}` — subfolder under `layouts/partials/` (`head`, `footer`,
  `content`, …). Use an existing one whenever possible; create a new
  subfolder only if the partial does not belong to any current group.
- `${input:name}` — kebab-case filename (without `.html`).
- `${input:summary}` — one sentence about what the partial renders.

## Before writing anything

1. List `layouts/partials/${input:area}/` (if the area exists) and
   `layouts/partials/` for top-level partials. If an existing partial
   already covers the need, extend it rather than forking.
2. Decide the partial's input contract. Options:
   - `{{ partial "area/name.html" . }}` — receives the current page.
   - `{{ partial "area/name.html" (dict "key" value …) }}` — receives an
     explicit dict. Prefer this for reusable components.
3. Confirm you are writing a **partial**, not a shortcode. Partials are for
   template composition; shortcodes are for Markdown authors.

## Create `layouts/partials/${input:area}/${input:name}.html`

```html
{{- /*
  ${input:summary}

  Call sites:
    {{- /* layouts/.../somewhere.html */ -}}
    {{ partial "${input:area}/${input:name}.html" (dict
        "page"    .
        "variant" "default"
    ) }}
*/ -}}
{{- $page    := .page    | default . -}}
{{- $variant := .variant | default "default" -}}

<div class="…">
  …
</div>
```

Rules:

- Start with `$page := .page | default .` (or similar) so the partial
  works both with a page context and with an explicit dict.
- Use `.Param "foo.bar"` for configuration so values cascade.
- All user-facing strings go through `{{ i18n "key" }}`; add the key to
  both `i18n/hu.toml` and `i18n/en.toml`.
- Use the `icon.html` partial instead of inlining SVG.

## After writing

1. Add at least one call site. An unused partial is dead code.
2. Run `npm run build` and confirm no template errors and no new lint
   issues in the CSS build.
