import { getUsers } from '@/api/users';

export const usersLoader = () => {
  return { users: getUsers() };
};
