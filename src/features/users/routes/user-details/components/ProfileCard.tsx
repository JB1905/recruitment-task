import { Flex, Heading, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { Avatar } from '@/components/Avatar';

interface ProfileCardProps {
  avatar?: string;
  createdAt: string;
  name?: string;
}

export const ProfileCard = ({ avatar, createdAt, name }: ProfileCardProps) => {
  const { t } = useTranslation('users');

  const formattedCreatedAt = new Date(createdAt).toLocaleDateString();

  return (
    <Flex align="center" gap={4}>
      <Avatar name={name} src={avatar} />

      <Flex direction="column" gap={1}>
        <Heading as="h2" size="md">
          {name}
        </Heading>

        <Text color="gray.600">
          {t('detail.memberSince', { date: formattedCreatedAt })}
        </Text>
      </Flex>
    </Flex>
  );
};
