import { Box, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { href, Link } from 'react-router';

export const NotFoundRoute = () => {
  const { t } = useTranslation('notFound');

  return (
    <Box>
      <Heading>{t('title')}</Heading>
      <Link to={href('/users')}>{t('link')}</Link>
    </Box>
  );
};
