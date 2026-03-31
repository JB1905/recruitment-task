# Internationalization Naming Convention

Translations are split by namespace and can live in:

- shared locale files under `src/locales/<namespace>/en.json`, e.g. `src/locales/common/en.json`
- feature-local files such as `src/features/users/locales/en.json`
- package-local files when a package owns its own copy, e.g. `src/packages/<package>/locales/en.json`

## Key Structure

Keys are namespaced by **module**, then by **component or concept**, then by **specific string**:

```
<module>.<component|concept>.<string>
```

## Example

```json
{
  "detail": {
    "backToList": "Back to users",
    "memberSince": "Member since {{date}}",
    "packages": {
      "kittens": "Kittens",
      "randomNumber": "Random Number"
    }
  },
  "list": {
    "columns": {
      "name": "Name",
      "createdAt": "Created At"
    }
  }
}
```

## Usage in Code

```tsx
import { useTranslation } from 'react-i18next';

const { t } = useTranslation('users');

<h1>{t('detail.backToList')}</h1>
<p>{t('list.columns.name')}</p>
```

## Rules

- Keys are **camelCase**.
- Nesting depth should not exceed **3 levels**.
- Shared strings belong under shared namespaces such as `common` in `src/locales/common/en.json`.
- Feature- or package-specific strings should stay close to the owning module when they are not shared elsewhere.
- Never hardcode user-facing strings outside translation files.
