'use client';

import styled from '@emotion/styled';
import { Heading, Text } from '@chakra-ui/react';

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 56px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const MainText = styled(Heading)`
  font-weight: 600;
  letter-spacing: -0.02em;
  white-space: pre-line;
  text-align: center;
  font-size: 24px;

  @media (min-width: 48em) {
    font-size: 32px;
  }
`;

export const SubText = styled(Text)`
  letter-spacing: -0.02em;
  white-space: pre-line;
  text-align: center;
  font-size: 16px;

  @media (min-width: 48em) {
    font-size: 20px;
  }
`;
