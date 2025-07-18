import styled from '@emotion/styled';
import { Text } from '@chakra-ui/react';
import theme from '@/styles/theme';
import { useRouter } from 'next/navigation';

export default function SignupButton() {
  const router = useRouter();

  return <Navigation onClick={() => router.push('/signup')}>처음이신가요?</Navigation>;
}

const Navigation = styled(Text)`
  width: fit-content;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.02em;
  text-align: center;
  cursor: pointer;
  align-self: center;

  transition: color 0.2s ease-in-out;

  :hover {
    color: ${theme.colors.primary['500']};
  }
`;
