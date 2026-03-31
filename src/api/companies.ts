import companiesData from '@/mocks/companies.json';
import type { Company } from '@/types/entities';

export const getCompanies = () => companiesData as Company[];

export const getCompaniesByUserId = (userId: string) =>
  (companiesData as Company[]).filter((c) => c.users?.includes(userId));
