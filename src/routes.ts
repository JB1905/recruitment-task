import {
  index,
  layout,
  prefix,
  route,
  type RouteConfig,
} from '@react-router/dev/routes';

import { usersRoutes } from './features/users';

export default [
  layout('./routes/_app/index.ts', [
    index('./routes/home/index.ts'),
    ...prefix('users', usersRoutes),
    route('*', './routes/not-found/index.ts'),
  ]),
] satisfies RouteConfig;
