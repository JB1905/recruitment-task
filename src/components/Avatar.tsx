import { Avatar as ChakraAvatar } from '@chakra-ui/react';
import type { ComponentProps } from 'react';

interface AvatarProps {
  name?: string;
  src?: string;
  size?: ComponentProps<typeof ChakraAvatar.Root>['size'];
}

export const Avatar = ({ name, src, size = '2xl' }: AvatarProps) => {
  return (
    <ChakraAvatar.Root size={size}>
      <ChakraAvatar.Fallback name={name} />
      <ChakraAvatar.Image src={src} />
    </ChakraAvatar.Root>
  );
};
