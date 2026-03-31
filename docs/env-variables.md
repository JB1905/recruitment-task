# Environment Variables

All environment variables are prefixed with `VITE_` so Vite exposes them to the client bundle via `import.meta.env`.

Copy `.env.example` to `.env` and fill in the values before running the project.

## Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_KITTENS_BASE_URL` | ✅ | Base URL used by the kittens package to build image URLs (e.g. `https://placekittens.com`) |

## Usage in Code

```ts
import.meta.env.VITE_KITTENS_BASE_URL
```

## Notes

- Never commit `.env` to source control — only `.env.example`.
- Variables added here must also be declared in `src/types/vite-env.d.ts` to be type-safe.
