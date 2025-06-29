'use client';

import { useRouter } from 'next/navigation';
import { Button, ButtonProps } from '@chakra-ui/react';

type Props = Omit<ButtonProps, 'children'>;

export default function CTAButton({ onClick, ...props }: Props) {
  const router = useRouter();

  return (
    <Button onClick={() => router.push('/signin')} {...props}>
      시작하기!
    </Button>
  );
}
