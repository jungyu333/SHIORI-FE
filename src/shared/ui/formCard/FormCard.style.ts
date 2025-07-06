'use client';

import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const FormBox = styled(Box)`
  width: 90%;
  max-width: 500px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 1rem;
  background-color: ${theme.colors.white};
  box-shadow: 0 4px 12px ${theme.colors.grey['3']};
  @media (min-width: 30em) {
    padding: 2rem;
  }
`;
