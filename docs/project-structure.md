# Project Structure

This document describes the layout of the project.

## Root

```
/project-root
├── docs/                       # Architecture & convention docs
├── e2e/                        # Playwright end-to-end tests
├── src/
│   ├── services/               # Top-level data access services
│   ├── components/             # Shared components
│   ├── config/                 # App config such as i18n and theme
│   ├── constants/              # Enums and constants
│   ├── features/               # Domain-driven feature slices
│   ├── hooks/                  # Shared custom hooks
│   ├── locales/                # Shared i18n translation files
│   ├── packages/               # Reusable packages (UI and/or logic modules)
│   ├── routes/                 # React Router route files
│   ├── stores/                 # Zustand stores
│   ├── types/                  # Shared TypeScript types
│   ├── utils/                  # Shared utility functions
│   ├── root.tsx                # HTML shell (Layout) + root Outlet
│   └── routes.ts               # Declarative route config
├── react-router.config.ts
├── vite.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── playwright.config.ts
└── package.json
```

## `src/routes/`

App-level route files that are not owned by a feature. Layout routes are prefixed with `_`.

```
src/routes/
├── _app/
│   ├── index.ts        ← re-exports (default, clientLoader)
│   ├── layout.tsx      ← App layout component
│   └── components/
│       ├── Container.tsx
│       └── Header.tsx
├── home/
│   ├── index.ts
│   └── middleware.ts
└── not-found/
    ├── index.ts
    └── route.tsx
```

Each route directory may also contain:
- `components/` — route-specific components
- `hooks/` — route-specific hooks
- `loader.ts` — data loading functions
- `middleware.ts` — auth / authorization middleware

## `src/features/`

Feature slices own their domain logic end-to-end. The current feature route files live under the feature instead of `src/routes/`.

```
src/features/
└── users/
    ├── index.ts
    ├── locales/
    │   └── en.json
    └── routes/
        ├── users/
        │   ├── constants.ts
        │   ├── index.ts
        │   ├── loader.ts
        │   └── route.tsx
        └── user-details/
            ├── components/
            ├── hooks/
            ├── utils/
            ├── index.ts
            ├── loader.ts
            └── route.tsx
```

Features can use packages, but should not depend on other features.

## `src/packages/`

Packages are smaller reusable modules that can expose UI, hooks, utilities, or pure logic.

```
src/packages/
├── company/
│   ├── components/
│   ├── locales/
│   ├── index.ts
│   └── utils/
├── kittens/
│   ├── components/
│   ├── constants.ts
│   ├── index.ts
│   └── utils/
└── random-number/
    ├── components/
    ├── constants.ts
    ├── hooks/
    ├── index.ts
    └── utils/
```

Packages can depend on other packages, but must not depend on features.

## `src/config/`

| File | Purpose |
|------|---------|
| `i18n.ts` | i18next initialization |
| `theme.ts` | Chakra UI system configuration |

## `src/constants/`

| File | Purpose |
|------|---------|
| `network.ts` | Network-related enums such as `HttpStatus` |

## Directory Intent

- `src/services/` — shared data access services used across the app
- `src/components/` — shared cross-feature UI components
- `src/hooks/` — global hooks such as app-level initialization or auth hooks
- `src/stores/` — global state stores
- `src/types/` — shared app-wide TypeScript types
- `src/utils/` — reusable generic utilities
