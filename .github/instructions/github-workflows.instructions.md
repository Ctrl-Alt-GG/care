---
description: Rules for editing GitHub Actions workflows
applyTo: '.github/workflows/*.yml'
---

# Workflow conventions

Deployment to Azure Static Web Apps and OCI publishing happen through the
workflow file in this directory. Treat it as load-bearing.

## Build order (must not change)

The pipeline installs Hugo (extended), installs Node (using `.nvmrc`),
runs `npm ci`, then builds Tailwind, then builds Hugo:

1. `npm ci`
2. `npm run build:css`
3. `hugo --environment production --minify`

The `build_site_job` runs these steps once and uploads `public/` as an
intermediate artifact. Azure deployment and OCI publishing consume that
artifact; do not rebuild the site in either job. If you add a new build step,
insert it before the artifact upload and do not reorder the three above. The
npm scripts encode the same order locally (`package.json` → `scripts.build`);
keep them consistent.

## Azure Static Web Apps deploy

- `app_location` must point at Hugo's output directory (`/public`).
  Do **not** change it unless Hugo's `publishDir` is also changed.
- `api_location` and `output_location` are intentionally empty — this is
  a pure static upload, no functions app.
- The API token secret name encodes the Azure-generated site slug. Do not
  rename it without rotating the secret on the Azure side.
- The `close_pull_request_job` tears down preview environments; keep it.

## OCI publishing

- Pushes to `main` publish `ghcr.io/ctrl-alt-gg/care` with `latest` and
  source-commit tags.
- Build the image from the shared site artifact; do not duplicate the Hugo or
  Tailwind build inside the container.
- Keep the runtime unprivileged and pin its base image by digest.

## Versions

- Hugo version comes from `module.hugoVersion` in `hugo.toml`; keep the
  `peaceiris/actions-hugo` input in step with that floor.
- Node version is read from `.nvmrc` via `actions/setup-node`'s
  `node-version-file`. Do not hard-code a Node version inline.

## Secrets and identity

- OIDC is used (`id-token: write` permission, `actions/github-script` fetches
  the token). Do not downgrade to long-lived credentials.
- Never echo secrets to logs, never commit a secret value, never reference
  a secret in a PR-from-fork context without scoping.

## Before merging a workflow change

- Validate YAML locally (`yamllint` or an editor's schema) — a broken
  workflow file blocks all subsequent deploys.
- Confirm the change is the subject of the PR. Drive-by edits to the
  deploy workflow are discouraged.
