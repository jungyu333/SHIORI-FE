'use client';

import styled from '@emotion/styled';
import { Text } from '@chakra-ui/react';
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding-left: 28px;
  padding-right: 28px;
`;

export const SignUpButton = styled(Text)`
  width: fit-content;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.02em;
  text-align: center;
  cursor: pointer;
  align-self: center;

  transition: color 0.2s ease-in-out;

  :hover {
    color: ${theme.colors.primary};
  }
`;
