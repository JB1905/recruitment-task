import type { Company, User } from '@/types/entities';

export const getAssignedUserNames = (company: Company, users: User[]) => {
  const assignedUsers = company.users ?? [];

  return users
    .filter((user) => assignedUsers.includes(user.id))
    .map((user) => user.name);
};
