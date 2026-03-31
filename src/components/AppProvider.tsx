import { ChakraProvider } from '@chakra-ui/react';
import type { PropsWithChildren } from 'react';

import { system } from '@/config/theme';

// Separate component for better readability - there can be more providers here
export const AppProvider = ({ children }: PropsWithChildren) => {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
};
