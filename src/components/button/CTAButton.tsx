'use client';

import { Button, ButtonProps } from '@chakra-ui/react';

type Props = Omit<ButtonProps, 'children'>;

export default function CTAButton({ onClick, ...props }: Props) {
  return (
    <Button onClick={() => console.log('click')} {...props}>
      시작하기!
    </Button>
  );
}
