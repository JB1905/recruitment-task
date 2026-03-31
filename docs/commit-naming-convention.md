# Commit Naming Convention

This project enforces [Conventional Commits](https://www.conventionalcommits.org/) via `commitlint`.

## Format

```
<type>(<scope>): <subject>
```

- **type** — the kind of change (see table below)
- **scope** — optional, the area of the codebase affected (e.g. `users`, `auth`, `services`)
- **subject** — short imperative description in lowercase, no trailing period

## Types

| Type | When to use |
|------|-------------|
| `feat` | A new feature |
| `fix` | A bug fix |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `style` | Formatting, missing semicolons, etc. — no logic change |
| `test` | Adding or updating tests |
| `docs` | Documentation only changes |
| `chore` | Build process, dependency updates, tooling |
| `perf` | Performance improvements |
| `ci` | CI/CD configuration changes |
| `revert` | Reverts a previous commit |

## Examples

```
feat(users): add user detail page
fix(services): handle 401 response in data service
refactor(types): move shared user types to src/types/entities
docs: update project structure doc
chore: upgrade react-router to 7.13.2
test(users): add playwright e2e test for users list
```
