import { index, route } from '@react-router/dev/routes';

export { default as usersLocales } from './locales/en.json';

export const usersRoutes = [
  index('./features/users/routes/users/index.ts'),
  route(':id', './features/users/routes/user-details/index.ts'),
];
