# care

Support and care hub for the [Ctrl-Alt-GG](https://ctrl-alt-gg.hu) LAN community. Guides, troubleshooting, house rules, and everything you need for a smooth weekend.

Built with [Hugo](https://gohugo.io/) and [Tailwind CSS](https://tailwindcss.com/), deployed to [Azure Static Web Apps](https://azure.microsoft.com/en-us/products/app-service/static).

## Prerequisites

- [Hugo](https://gohugo.io/installation/) v0.116.0+
- [Node.js](https://nodejs.org/) (for Tailwind CSS)
- Git (with submodule support)

## Local development

```bash
# Clone with the theme submodule
git clone --recurse-submodules https://github.com/Ctrl-Alt-GG/care.git
cd care

# Install Node dependencies
npm install

# Start the dev server (Tailwind watch + Hugo server in parallel)
npm run dev
```

The site will be available at `http://localhost:1313/`.

## Build

```bash
npm run build
```

This runs the Tailwind CSS build first, then the Hugo build. The output is in the `public/` directory.

## Content structure

Content is organised by section under `content/`:

| Section | Description |
|---------|-------------|
| `network/` | Network & connectivity guides |
| `hardware/` | Hardware & power guides |
| `software/` | Software basics |
| `wellness/` | Wellness & community |
| `logistics/` | Logistics & arrival |
| `help/` | How to get help |

Each section has bilingual content: Hungarian (`.md`) and English (`.en.md`).

## Deployment

Pushes to `main` are automatically built and deployed to Azure Static Web Apps via GitHub Actions.
