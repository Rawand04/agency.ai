# agency.ai

`agency.ai` is a responsive digital agency website built with React, TypeScript, and Vite. It presents the agency's services, selected work, team, and a contact form.

## Features

- Single-page layout with navigation to the main sections.
- English and Arabic translations powered by i18next, with right-to-left layout for Arabic.
- Light and dark theme controls.
- Portfolio, services, team, and contact sections.

## Getting started

Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

Vite prints the local URL in the terminal.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Type-check and create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run Oxlint. |

## Project layout

- `src/components/` — page sections and reusable UI components.
- `src/i18n/` — English and Arabic translation dictionaries.
- `src/assets/` — images, icons, and logos used by the site.
- `src/lib/constants.tsx` — navigation, service, and portfolio data.
- `src/App.tsx` — assembles the page sections and shared application behavior.
