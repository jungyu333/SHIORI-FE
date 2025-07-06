'use client';

import styled from '@emotion/styled';
import theme from '@/styles/theme';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  header?: ReactNode;
  headerHeight?: number;
  floatButton?: ReactNode;
  hideBottomNavigation?: boolean;
};

const BOTTOM_NAV_HEIGHT = 60;

const MainLayout = ({ children, header, headerHeight = 0, floatButton, hideBottomNavigation = false }: Props) => {
  return (
    <MainContainer>
      {header}
      <MainSection headerHeight={headerHeight} bottomNavHeight={hideBottomNavigation ? 0 : BOTTOM_NAV_HEIGHT}>
        {children}
      </MainSection>
    </MainContainer>
  );
};

export default MainLayout;

const MainContainer = styled.main`
    position: relative;
    max-width: 100%;
    height: 100dvh;
    margin: 0 auto;
    background-color: ${theme.colors.white};
`;

const MainSection = styled.section<{ headerHeight: number; bottomNavHeight: number }>`
    height: 100%;
    width: 100%;
`;
