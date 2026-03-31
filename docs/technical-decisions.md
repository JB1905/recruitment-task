# Technical Decisions

This document outlines the technical choices made for this project.

## Boilerplate

**Vite** + **React Router 7 (framework mode)**

- **[Vite](https://vitejs.dev/)**: Fast build tool with HMR and optimized production builds.
- **[React Router 7 framework mode](https://reactrouter.com/start/framework/installation)**: React Router as the full application framework — provides file-based routing, type-safe params/loaders, code splitting, and an `index.html`-free HTML shell via `root.tsx`.

## UI Library

**Chakra UI 3**

- **[Chakra UI](https://chakra-ui.com/)**: Accessible, composable component library with a robust theming system via `createSystem`.

## Routing

**React Router 7 (framework mode)**

- Route tree defined declaratively in `src/routes.ts` using `route()`, `layout()`, `prefix()`, `index()`.
- Per-route code splitting is automatic.
- Route types generated via `npm run typegen`; never edit `.react-router/` manually.

## Backend Connection

**Local mocks**

- The current implementation reads from local mock JSON files in `src/mocks/` through shared API accessors in `src/api/`.
- Runtime environment configuration is currently limited to `VITE_KITTENS_BASE_URL`.

## Architecture

**Feature + package based**

- Features in `src/features/` own route-level domain workflows.
- Packages in `src/packages/` contain smaller reusable modules such as `kittens`, `random-number`, and `company`.
- Packages can be used by other packages and by features.
- Features must not be used inside packages or inside other features.
- App-level routes such as home and not-found stay under `src/routes/`.

## Translations

**react-i18next**

- **[react-i18next](https://react.i18next.com/)**: Internationalization using namespace-based resources from shared locale files and feature-local locale files.

## Code Quality

**TypeScript**, **Prettier**, **ESLint**, **Husky**, **commitlint**, **lint-staged**

- Strict TypeScript, ESLint v9 flat config, single-quote Prettier, conventional commits enforced via commitlint.

## Testing

**Jest** + **Playwright**

- **[Jest](https://jestjs.io/)**: Unit tests for utilities and module-level logic.
- **[Playwright](https://playwright.dev/)**: End-to-end browser tests in `e2e/`.
