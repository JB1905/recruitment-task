import { getUsers } from '@/services/users';

export const usersLoader = () => {
  return { users: getUsers() };
};
