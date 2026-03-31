import { Box, Heading, List, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { FallbackMessage } from '@/components/FallbackMessage';
import type { Company as CompanyEntity, User } from '@/types/entities';

import { getAssignedUserNames } from '../utils/getAssignedUserNames';

interface CompanyProps {
  companies: CompanyEntity[];
  users: User[];
}

export const Company = ({ companies, users }: CompanyProps) => {
  const { t } = useTranslation('users');

  return (
    <VStack align="stretch" gap={4} w="full">
      {companies.map((company) => {
        const assignedUserNames = getAssignedUserNames(company, users);

        return (
          <Box
            key={company.id}
            borderWidth="1px"
            borderColor="gray.200"
            rounded="md"
            p={4}
            w="full"
          >
            <Heading as="h4" size="sm" mb={3}>
              {company.name}
            </Heading>

            {assignedUserNames.length > 0 ? (
              <List.Root gap={1} listStyleType="none">
                {assignedUserNames.map((userName) => (
                  <List.Item key={userName}>{userName}</List.Item>
                ))}
              </List.Root>
            ) : (
              <FallbackMessage>
                {t('detail.packages.company.noUsers')}
              </FallbackMessage>
            )}
          </Box>
        );
      })}
    </VStack>
  );
};
