import type { Company } from '@/types/entities';

import { getAccessiblePackages } from './getAccessiblePackages';

describe('getAccessiblePackages', () => {
  it('returns the union of package keys across user companies', () => {
    const userCompanies: Company[] = [
      { id: '1', name: 'Company One', features: ['kittens', 'company'] },
      { id: '2', name: 'Company Two', features: ['random-number', 'company'] },
    ];

    expect(getAccessiblePackages(userCompanies)).toEqual([
      'kittens',
      'company',
      'random-number',
    ]);
  });

  it('skips missing features arrays', () => {
    const userCompanies: Company[] = [
      { id: '1', name: 'Company One' },
      { id: '2', name: 'Company Two', features: ['kittens'] },
    ];

    expect(getAccessiblePackages(userCompanies)).toEqual(['kittens']);
  });

  it('returns an empty array when no company exposes packages', () => {
    const userCompanies: Company[] = [
      { id: '1', name: 'Company One', features: [] },
      { id: '2', name: 'Company Two' },
    ];

    expect(getAccessiblePackages(userCompanies)).toEqual([]);
  });
});
