import { Text } from '@chakra-ui/react';
import type { ReactNode } from 'react';

interface FallbackMessageProps {
  children: ReactNode;
}

export const FallbackMessage = ({ children }: FallbackMessageProps) => {
  return <Text color="gray.500">{children}</Text>;
};
