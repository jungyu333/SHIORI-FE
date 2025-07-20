'use client';

import { Box, Text as ChakraText, VStack } from '@chakra-ui/react';
import { CalendarIcon, EditIcon, StarIcon, TimeIcon } from '@chakra-ui/icons';
import { getTodayAsDDMMYYYY } from '@/shared/lib/utils/date';
import { colors } from '@/styles/theme/foundations/colors';
import SidebarNavigationButton from './SideBarNavigationButton';
import styled from '@emotion/styled';
import UserSection from '@/features/diary/ui/UserSection';
import { useLogOut } from '@/features/diary/queries/useLogOut';
import { useNotify } from '@/shared/lib/hooks/useNotify';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

export default function SideBar() {
  const { mutate, isLoading } = useLogOut();

  const toast = useNotify();

  const router = useRouter();

  const handleLogout = () => {
    mutate(undefined, {
      onSuccess: (data) => {
        toast.success(data.message);
        localStorage.removeItem('access_token');
        router.push('/signin');
      },
      onError: (error: AxiosError<{ message: string }>) => {
        toast.warning(error.response.data.message);
      },
    });
  };

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

      <UserSection
        email={'jungyu3826@naver.com'}
        logout={{
          handle: handleLogout,
          isLoading: isLoading,
        }}
        onProfile={() => console.log}
      />
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
