import { useState } from 'react';

import type { Company } from '@/types/entities';

export const useSelectedCompany = (userCompanies: Company[]) => {
  const [selectedCompanyId, setSelectedCompanyId] = useState(
    userCompanies[0]?.id ?? '',
  );

  const selectedCompany =
    userCompanies.find((company) => company.id === selectedCompanyId) ??
    userCompanies[0];

  const packages = selectedCompany?.features ?? [];

  return {
    selectedCompanyId,
    setSelectedCompanyId,
    selectedCompany,
    packages,
  };
};
