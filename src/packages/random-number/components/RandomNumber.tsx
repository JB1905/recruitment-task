import { Text } from '@chakra-ui/react';

import { useRandomNumber } from '../hooks/useRandomNumber';

export const RandomNumber = () => {
  const { value } = useRandomNumber();

  return (
    <Text as="span" textStyle="lg" fontVariantNumeric="tabular-nums">
      {String(value)}
    </Text>
  );
};
