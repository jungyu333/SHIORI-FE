'use client';

import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import SideBar from '@/features/diary/ui/SideBar';

export default function DiaryLayout({ children }: { children: ReactNode }) {
  return (
    <Box display="flex">
      <SideBar />
      <Box ml="220px" p={6} w="full">
        {children}
      </Box>
    </Box>
  );
}
