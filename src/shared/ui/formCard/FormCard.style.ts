'use client';

import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const FormBox = styled(Box)`
  width: 90%;
  max-width: 500px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 1rem;
  box-shadow: var(--chakra-shadows-lg);
  @media (min-width: 30em) {
    padding: 2rem;
  }
`;
