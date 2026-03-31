# Recruitment Task

## Getting Started

Ensure you have Node.js (>= v22.16.0) installed.

```bash
npm install
```

Copy the environment variables template and fill in your values:

```bash
cp .env.example .env
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in the browser.

## Building

```bash
npm run build
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the React Router dev server (port 3000) |
| `npm run build` | Type-check + production build |
| `npm run preview` | Preview the production build |
| `npm run types:check` | TypeScript type check without emit |
| `npm run typegen` | Generate React Router types |
| `npm run lint` | Run ESLint with auto-fix |
| `npm run lint:check` | Run ESLint (read-only) |
| `npm run format` | Format with Prettier |
| `npm run format:check` | Check formatting with Prettier |
| `npm run test` | Run Jest unit tests |
| `npm run test:e2e` | Run Playwright end-to-end tests |
| `npm run test:e2e:ui` | Run Playwright tests with interactive UI |

## Project Structure

- `src/routes/` contains app-level routes like `_app`, `home`, and `not-found`
- `src/features/` contains domain features such as `users`
- `src/packages/` contains smaller reusable modules such as `kittens`, `random-number`, and `company`
- `src/components/` contains shared UI components
- `src/locales/<namespace>/en.json` contains shared namespaces; feature-specific locales stay with the feature

## Package Manager

This project uses **npm** as its package manager.

## Documentation

- [Technical Decisions](./docs/technical-decisions.md)
- [Project Structure](./docs/project-structure.md)
- [Environment Variables](./docs/env-variables.md)
- [Commit Naming Convention](./docs/commit-naming-convention.md)
- [Internationalization Naming Convention](./docs/i18n-naming-convention.md)
