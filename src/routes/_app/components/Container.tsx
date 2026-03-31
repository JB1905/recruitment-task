import { Box } from '@chakra-ui/react';
import type { PropsWithChildren } from 'react';

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <Box as="main" p={6} maxW="breakpoint-xl" mx="auto">
      {children}
    </Box>
  );
};
