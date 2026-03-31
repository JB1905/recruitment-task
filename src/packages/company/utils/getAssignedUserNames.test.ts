import type { Company, User } from '@/types/entities';

import { getAssignedUserNames } from './getAssignedUserNames';

describe('getAssignedUserNames', () => {
  const users: User[] = [
    { id: '1', name: 'Dominic Nitzsche', avatar: '', createdAt: '' },
    { id: '2', name: 'Roxanne Mills', avatar: '', createdAt: '' },
    { id: '3', name: 'Mrs. Marianne Paucek', avatar: '', createdAt: '' },
  ];

  it('returns the names of users assigned to a company', () => {
    const company: Company = {
      id: '1',
      name: 'Hyatt, Johnston and Hansen',
      users: ['1', '2'],
    };

    expect(getAssignedUserNames(company, users)).toEqual([
      'Dominic Nitzsche',
      'Roxanne Mills',
    ]);
  });

  it('returns an empty array when the company has no assigned users', () => {
    const company: Company = {
      id: '2',
      name: 'Stracke, Gutmann and Goldner',
      users: [],
    };

    expect(getAssignedUserNames(company, users)).toEqual([]);
  });

  it('returns an empty array when the company users field is missing', () => {
    const company: Company = {
      id: '3',
      name: 'Feest, Schultz and Kemmer',
    };

    expect(getAssignedUserNames(company, users)).toEqual([]);
  });
});
