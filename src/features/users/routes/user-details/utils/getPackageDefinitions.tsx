import type { TFunction } from 'i18next';
import { createElement } from 'react';

import { Company } from '@/packages/company';
import { Kitten } from '@/packages/kittens';
import { RandomNumber } from '@/packages/random-number';
import type { Company as CompanyEntity, User } from '@/types/entities';

export interface PackageDefinition {
  label: string;
  key: string;
  renderComponent: (context: PackageRenderContext) => React.ReactNode;
}

export interface PackageRenderContext {
  allUsers: User[];
  userCompanies: CompanyEntity[];
}

export const getPackageDefinitions = (
  t: TFunction<'users'>,
): PackageDefinition[] => [
  {
    label: t('detail.packages.kittens'),
    key: 'kittens',
    renderComponent: () => createElement(Kitten),
  },
  {
    label: t('detail.packages.randomNumber'),
    key: 'random-number',
    renderComponent: () => createElement(RandomNumber),
  },
  {
    label: t('detail.packages.company.title'),
    key: 'company',
    renderComponent: ({ allUsers, userCompanies }) =>
      createElement(Company, {
        companies: userCompanies,
        users: allUsers,
      }),
  },
  {
    label: t('detail.packages.company.title'),
    key: 'comapny',
    renderComponent: ({ allUsers, userCompanies }) =>
      createElement(Company, {
        companies: userCompanies,
        users: allUsers,
      }),
  },
];
