import { Heading, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { FallbackMessage } from '@/components/FallbackMessage';

import type {
  PackageDefinition,
  PackageRenderContext,
} from '../utils/getPackageDefinitions';

interface PackageSectionsProps {
  packages: string[];
  packageDefinitions: PackageDefinition[];
  packageRenderContext: PackageRenderContext;
}

export const PackageSections = ({
  packages,
  packageDefinitions,
  packageRenderContext,
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

            {renderComponent(packageRenderContext)}
          </VStack>
        );
      })}
    </>
  );
};
