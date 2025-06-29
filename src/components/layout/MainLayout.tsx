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
      {floatButton && <FloatButtonContainer>{floatButton}</FloatButtonContainer>}
      {!hideBottomNavigation && <></>}
    </MainContainer>
  );
};

export default MainLayout;

const MainContainer = styled.main`
  position: relative;
  max-width: 480px;
  min-height: calc(var(--vh, 1vh) * 100);
  height: 100dvh;
  margin: 0 auto;
  background-color: ${theme.colors.white};
`;

const MainSection = styled.section<{ headerHeight: number; bottomNavHeight: number }>`
  position: absolute;
  top: ${(props) => props.headerHeight}px;
  left: 0;
  right: 0;
  bottom: ${(props) => props.bottomNavHeight}px;
  overflow: auto;
`;

const FloatButtonContainer = styled.div`
  position: absolute;
  right: 15px;
  bottom: ${BOTTOM_NAV_HEIGHT + 5}px;
`;
