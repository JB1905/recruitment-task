import { Image } from '@chakra-ui/react';

import { KITTEN_HEIGHT, KITTEN_WIDTH, KITTENS_BASE_URL } from '../constants';
import { getKittenUrl } from '../utils/getKittenUrl';

interface KittenProps {
  width?: number;
  height?: number;
  alt?: string;
}

export const Kitten = ({
  width = KITTEN_WIDTH,
  height = KITTEN_HEIGHT,
  alt = '',
}: KittenProps) => {
  return (
    <Image
      src={getKittenUrl(KITTENS_BASE_URL, width, height)}
      width={width}
      height={height}
      alt={alt}
      display="block"
      rounded="lg"
      maxW="100%"
    />
  );
};
