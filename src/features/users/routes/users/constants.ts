import { createColumnHelper } from '@tanstack/react-table';
import type { TFunction } from 'i18next';

import type { User } from '@/types/entities';

const columnHelper = createColumnHelper<User>();

export const getColumns = (t: TFunction<'users'>) => [
  columnHelper.accessor('name', {
    header: t('list.columns.name'),
  }),
  columnHelper.accessor('createdAt', {
    header: t('list.columns.createdAt'),
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString(),
  }),
];
