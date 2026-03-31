import { useTranslation } from 'react-i18next';
import { href, useLoaderData, useNavigate } from 'react-router';

import { DataTable } from '@/components/DataTable';
import type { User } from '@/types/entities';

import { getColumns } from './constants';
import type { usersLoader } from './loader';

export const UsersRoute = () => {
  const { t } = useTranslation('users');
  const navigate = useNavigate();
  const { users } = useLoaderData<typeof usersLoader>();
  const columns = getColumns(t);

  const handleRowClick = (user: User) => {
    navigate(href('/users/:id', { id: user.id }));
  };

  return (
    <DataTable
      data={users}
      columns={columns}
      interactive
      onRowClick={handleRowClick}
    />
  );
};
