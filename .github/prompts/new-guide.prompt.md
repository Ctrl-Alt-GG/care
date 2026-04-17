---
description: Scaffold a new bilingual guide page under content/<section>/
mode: agent
---

# New bilingual guide

Inputs:

- `${input:section}` — one of the sections listed in `mainSections`
  (`[languages.hu.params]` / `[languages.en.params]`) in `hugo.toml`.
  Stop and ask the user if they pick one that is not whitelisted.
- `${input:slug}` — kebab-case, unique within the section.
- `${input:titleHu}` — Hungarian page title.
- `${input:titleEn}` — English page title.
- `${input:descriptionHu}` — Hungarian description, one sentence, ≤160 chars.
- `${input:descriptionEn}` — English description, one sentence, ≤160 chars.

## Steps

1. Pick a `weight`: read existing siblings under
   `content/${input:section}/` and choose the next free multiple of 10
   after the current max. Use the **same** weight for both locales.
2. Create `content/${input:section}/${input:slug}.md` (Hungarian default):

   ```markdown
   ---
   title: "${input:titleHu}"
   description: "${input:descriptionHu}"
   weight: <chosen weight>
   ---

   {{< callout type="note" >}}
   Rövid bevezető — mit tud meg az olvasó ezen az oldalon.
   {{< /callout >}}

   ## Mi a probléma?

   …

   ## Megoldás

   …
   ```

3. Create `content/${input:section}/${input:slug}.en.md` with the **same**
   `weight` and translated `title` / `description`:

   ```markdown
   ---
   title: "${input:titleEn}"
   description: "${input:descriptionEn}"
   weight: <same weight>
   ---

   {{< callout type="note" >}}
   Short intro — what the reader will learn on this page.
   {{< /callout >}}

   ## What's the problem?

   …

   ## Fix

   …
   ```

4. Do **not** touch menus, `hugo.toml`, or any other file — the page will
   be picked up automatically by its section list.
5. Run `npm run build` and report any template errors back.

## Invariants to double-check before finishing

- Both files exist and have matching `weight`.
- Neither sets `url`, `slug`, or `aliases`.
- Hungarian comes first (it is the default locale); English mirrors it.
- Shortcodes used (`callout`, `problem-link`) still match the parameters
  declared in `layouts/shortcodes/`.
