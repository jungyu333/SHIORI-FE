'use client';

import { Box, Text as ChakraText, VStack } from '@chakra-ui/react';
import { CalendarIcon, EditIcon, StarIcon, TimeIcon } from '@chakra-ui/icons';
import { getTodayAsDDMMYYYY } from '@/shared/lib/utils/date';
import { colors } from '@/styles/theme/foundations/colors';
import SidebarNavigationButton from './SideBarNavigationButton';
import styled from '@emotion/styled';
import UserSection from '@/features/diary/ui/UserSection';

export default function SideBar() {
  return (
    <Container>
      <Title>SHIORI</Title>

      <VStack spacing={4} align="start">
        <SidebarNavigationButton href={`/diary/${getTodayAsDDMMYYYY()}`} icon={TimeIcon}>
          Today
        </SidebarNavigationButton>

        <SidebarNavigationButton href="/diary/week" icon={EditIcon}>
          Past Week
        </SidebarNavigationButton>

        <SidebarNavigationButton href="/diary/reflection" icon={StarIcon}>
          Reflection
        </SidebarNavigationButton>

        <SidebarNavigationButton href="/diary/calendar" icon={CalendarIcon}>
          Calendar
        </SidebarNavigationButton>
      </VStack>

      <UserSection email={'jungyu3826@naver.com'} onLogout={() => console.log} onProfile={() => console.log} />
    </Container>
  );
}

const Container = styled(Box)`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 300px;
  color: ${colors.white};
  padding: 24px 20px;
  background-color: ${colors.primary['500']};
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
`;

const Title = styled(ChakraText)`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;
