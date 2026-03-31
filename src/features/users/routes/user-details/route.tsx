import { Button, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { href, Link, useLoaderData } from 'react-router';

import { PackageSections } from './components/PackageSections';
import { ProfileCard } from './components/ProfileCard';
import type { userDetailsLoader } from './loader';
import { getAccessiblePackages } from './utils/getAccessiblePackages';
import { getPackageDefinitions } from './utils/getPackageDefinitions';

export const UserDetailsRoute = () => {
  const { t } = useTranslation('users');
  const { user, userCompanies, allUsers } =
    useLoaderData<typeof userDetailsLoader>();

  const packages = getAccessiblePackages(userCompanies);
  const packageDefinitions = getPackageDefinitions(t);

  return (
    <VStack gap={6} align="start">
      <Button asChild variant="outline">
        <Link to={href('/users')}>{t('detail.backToList')}</Link>
      </Button>

      <ProfileCard
        avatar={user?.avatar}
        createdAt={user.createdAt}
        name={user?.name}
      />

      <PackageSections
        packages={packages}
        packageDefinitions={packageDefinitions}
        packageData={{
          allUsers,
          userCompanies,
        }}
      />
    </VStack>
  );
};
