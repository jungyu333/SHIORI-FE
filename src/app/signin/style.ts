'use client';

import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-left: 28px;
  padding-right: 28px;
  background: linear-gradient(135deg, ${theme.colors.primary[100]} 10%, ${theme.colors.primary[300]} 100%);
`;
