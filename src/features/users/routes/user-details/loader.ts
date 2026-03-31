import type { LoaderFunctionArgs } from 'react-router';

import { getCompaniesByUserId } from '@/api/companies';
import { getUsers } from '@/api/users';
import { HttpStatus } from '@/constants/api';

export const userDetailsLoader = ({ params }: LoaderFunctionArgs) => {
  const userId = params.id!;
  const users = getUsers();

  const user = users.find((u) => u.id === userId);
  const userCompanies = getCompaniesByUserId(userId);

  if (!user) {
    throw new Response('User not found', { status: HttpStatus.NOT_FOUND });
  }

  return { user, userCompanies, allUsers: users };
};
