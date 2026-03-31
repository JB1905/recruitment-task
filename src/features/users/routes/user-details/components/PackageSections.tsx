import { Heading, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { FallbackMessage } from '@/components/FallbackMessage';

import type {
  PackageData,
  PackageDefinition,
} from '../utils/getPackageDefinitions';

interface PackageSectionsProps {
  packages: string[];
  packageDefinitions: PackageDefinition[];
  packageData: PackageData;
}

export const PackageSections = ({
  packages,
  packageDefinitions,
  packageData,
}: PackageSectionsProps) => {
  const { t } = useTranslation('users');

  if (packages.length === 0) {
    return <FallbackMessage>{t('detail.noPackages')}</FallbackMessage>;
  }

  return (
    <>
      {packages.map((packageKey) => {
        const packageDefinition = packageDefinitions.find(
          (item) => item.key === packageKey,
        );

        if (!packageDefinition) return null;

        const { label, renderComponent } = packageDefinition;

        return (
          <VStack as="section" align="start" key={packageKey}>
            <Heading as="h3" size="md" textTransform="capitalize">
              {label}
            </Heading>

            {renderComponent(packageData)}
          </VStack>
        );
      })}
    </>
  );
};
