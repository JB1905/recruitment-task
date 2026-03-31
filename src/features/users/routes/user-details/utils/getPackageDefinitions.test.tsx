import { isValidElement } from 'react';

import { Company } from '@/packages/company';
import { Kitten } from '@/packages/kittens';
import { RandomNumber } from '@/packages/random-number';
import type { Company as CompanyEntity, User } from '@/types/entities';

import { getPackageDefinitions } from './getPackageDefinitions';

jest.mock('@/packages/company', () => ({
  Company: function MockCompany() {
    return null;
  },
}));

jest.mock('@/packages/kittens', () => ({
  Kitten: function MockKitten() {
    return null;
  },
}));

jest.mock('@/packages/random-number', () => ({
  RandomNumber: function MockRandomNumber() {
    return null;
  },
}));

describe('getPackageDefinitions', () => {
  const t = ((key: string) => `translated:${key}`) as never;
  const renderContext = {
    allUsers: [
      { id: '1', name: 'User One', avatar: '', createdAt: '' },
    ] as User[],
    userCompanies: [{ id: '1', name: 'Company One' }] as CompanyEntity[],
  };

  it('returns translated package metadata in the expected order', () => {
    expect(getPackageDefinitions(t)).toMatchObject([
      {
        key: 'kittens',
        label: 'translated:detail.packages.kittens',
      },
      {
        key: 'random-number',
        label: 'translated:detail.packages.randomNumber',
      },
      {
        key: 'company',
        label: 'translated:detail.packages.company',
      },
    ]);
  });

  it('returns render functions for the matching package components', () => {
    const definitions = getPackageDefinitions(t);
    const kittenElement = definitions[0]?.renderComponent(renderContext);
    const randomNumberElement = definitions[1]?.renderComponent(renderContext);
    const companyElement = definitions[2]?.renderComponent(renderContext);

    expect(isValidElement(kittenElement)).toBe(true);
    expect(isValidElement(randomNumberElement)).toBe(true);
    expect(isValidElement(companyElement)).toBe(true);

    if (
      !isValidElement(kittenElement) ||
      !isValidElement(randomNumberElement) ||
      !isValidElement(companyElement)
    ) {
      throw new Error('Expected package definitions to render React elements');
    }

    expect(kittenElement.type).toBe(Kitten);
    expect(randomNumberElement.type).toBe(RandomNumber);
    expect(companyElement.type).toBe(Company);
  });
});
