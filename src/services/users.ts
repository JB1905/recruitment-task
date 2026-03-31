import usersData from '@/mocks/users.json';
import type { User } from '@/types/entities';

export const getUsers = () => usersData as User[];

export const getUserById = (id: string) =>
  (usersData as User[]).find((u) => u.id === id);
