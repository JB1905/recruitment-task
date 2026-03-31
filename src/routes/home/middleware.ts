import { href, redirect } from 'react-router';

export const homeMiddleware = () => {
  throw redirect(href('/users'));
};
