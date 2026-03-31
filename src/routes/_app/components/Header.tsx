import { Flex, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

export const Header = () => {
  const { t } = useTranslation('common');

  return (
    <Flex
      align="center"
      px={6}
      py={4}
      borderBottomWidth="1px"
      borderColor="gray.200"
      pos="sticky"
      top={0}
      zIndex="docked"
      bg="white"
    >
      <Heading as="h1" size="lg">
        <Link to="/">{t('title')}</Link>
      </Heading>
    </Flex>
  );
};
