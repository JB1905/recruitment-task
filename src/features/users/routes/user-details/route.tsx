import { Box, Button, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { href, Link, useLoaderData } from 'react-router';

import { Select } from '@/components/Select';

import { PackageSections } from './components/PackageSections';
import { ProfileCard } from './components/ProfileCard';
import { useSelectedCompany } from './hooks/useSelectedCompany';
import type { userDetailsLoader } from './loader';
import { getPackageDefinitions } from './utils/getPackageDefinitions';

export const UserDetailsRoute = () => {
  const { t } = useTranslation('users');
  const { user, userCompanies, allUsers } =
    useLoaderData<typeof userDetailsLoader>();

  const { selectedCompanyId, setSelectedCompanyId, selectedCompany, packages } =
    useSelectedCompany(userCompanies);
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

      {userCompanies.length > 1 && selectedCompany && (
        <Box w="full" maxW={{ base: 'full', md: 'xs' }}>
          <Select
            label={t('detail.companySelectLabel')}
            value={selectedCompanyId}
            onChange={setSelectedCompanyId}
            options={userCompanies.map((company) => ({
              label: company.name,
              value: company.id,
            }))}
          />
        </Box>
      )}

      <PackageSections
        packages={packages}
        packageDefinitions={packageDefinitions}
        packageRenderContext={{
          allUsers,
          userCompanies,
        }}
      />
    </VStack>
  );
};
