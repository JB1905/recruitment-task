# AGENTS.md

Context for AI agents working on **Recruitment Task**: a React web application.

## Tech stack

- **React 18** + **Vite 6** + **React Router 7** (framework mode, file-based routing)
- **Chakra UI 3** for UI; app provider in `src/components/AppProvider.tsx`, theme in `src/config/theme.ts`
- **TypeScript**; run `npm run types:check` for type-check, `npm run typegen` to regenerate route types
- **i18next** / **react-i18next**; shared locales in `src/locales/<namespace>/en.json`, feature locales in feature folders such as `src/features/users/locales/`
- **ESLint** + **Prettier**; commitlint + Husky + lint-staged for commits
- **Jest** + **ts-jest** for unit tests
- **Playwright** for end-to-end tests

## Project layout

- `src/` — app code; use `@/` for absolute imports
- `src/root.tsx` — HTML document shell (exported `Layout`) + root `<Outlet />` component
- `src/routes.ts` — React Router route config; uses `layout()`, `prefix()`, `route()`, `index()`
- `src/routes/` — app-level routes not owned by a feature, e.g. `_app`, `home`, `not-found`
  - Per-route: `index.ts` (re-exports), `route.tsx` (component), optional `loader.ts`, `middleware.ts`, plus route-local `components/`, `hooks/`, `utils/`
- `src/features/` — domain-driven feature slices; current feature routes live under `src/features/<feature>/routes/`
  - Features can use packages, but should not depend on other features
- `src/packages/` — smaller reusable modules that expose UI and/or logic
  - Packages can depend on other packages, but not on features
- `src/api/` — shared top-level API accessors
- `src/components/` — shared cross-feature components
- `src/config/` — app configuration such as `i18n` and Chakra theme
- `src/stores/` — global stores
- `src/hooks/` — shared global hooks
- `src/utils/` — shared reusable utilities
- `src/types/` — shared TypeScript types
- `src/constants/` — enums and constants
- `src/locales/` — shared i18n translation files
- `docs/` — technical decisions, project structure, env vars, commit/i18n conventions
- `e2e/` — Playwright end-to-end tests

## Routes

| Path | Feature | Route file |
|------|---------|------------|
| `/` | Home | `src/routes/home/index.ts` |
| `/users` | Users list | `src/features/users/routes/users/index.ts` |
| `/users/:id` | User detail | `src/features/users/routes/user-details/index.ts` |
| `*` | Not found | `src/routes/not-found/index.ts` |

## Conventions

- Follow existing docs: [Technical decisions](./docs/technical-decisions.md), [Project structure](./docs/project-structure.md), [Env variables](./docs/env-variables.md), [Commit naming](./docs/commit-naming-convention.md), [i18n naming](./docs/i18n-naming-convention.md).
- Import from `react-router` (not `react-router-dom`) in framework mode.
- Keep imports at the top of files; avoid inline imports.
- Use exhaustive switch handling for TypeScript unions and enums.
- Use **npm** for install/scripts; Node >= v22.16.0.

## Commands

- `npm run dev` — dev server (port 3000)
- `npm run build` — production build
- `npm run preview` — preview the production build
- `npm run types:check` — TypeScript check
- `npm run typegen` — regenerate React Router types after route changes
- `npm run lint` / `npm run lint:check` — ESLint
- `npm run format` / `npm run format:check` — Prettier
- `npm run test` — Jest
- `npm run test:e2e` — Playwright e2e
- `npm run test:e2e:ui` — Playwright UI mode

## Agent memory (durable preferences)

- Keep `.keep` files empty; document directory intent in `AGENTS.md`, `README.md`, or `docs/`.
- Prefer route-specific subfolders such as `components/`, `hooks/`, and `utils/` inside a route when logic is only used there.
- Use “packages” for reusable modules like `kittens` and `random-number`; avoid calling them “features” in new code or docs.
