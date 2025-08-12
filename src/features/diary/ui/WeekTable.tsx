'use client';

import { Box, Table } from '@chakra-ui/react';
import React from 'react';
import styled from '@emotion/styled';
import { DiaryMeta } from '@/features/diary/model/types/week';
import WeekTableHeader from '@/features/diary/ui/WeekTableHeader';
import WeekTableBody from '@/features/diary/ui/WeekTableBody';

type Props = {
  diaryMeta: DiaryMeta[];
};

export default function WeekTable({ diaryMeta }: Props) {
  return (
    <>
      <TableWrapper>
        <Table size="sm" variant="simple">
          <WeekTableHeader />

          <WeekTableBody diaryMeta={diaryMeta} />
        </Table>
      </TableWrapper>
    </>
  );
}

const TableWrapper = styled(Box)`
  overflow-x: auto;
  border-width: 2px;
  width: 100%;
`;
