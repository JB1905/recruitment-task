import type { Company } from '@/types/entities';

export const getAccessiblePackages = (userCompanies: Company[]) => {
  return [
    ...new Set(userCompanies.flatMap((company) => company.features ?? [])),
  ];
};
