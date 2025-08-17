'use client';

import { Box, Table } from '@chakra-ui/react';
import React from 'react';
import styled from '@emotion/styled';
import WeekTableHeader from '@/features/diary/ui/WeekTableHeader';
import WeekTableBody from '@/features/diary/ui/WeekTableBody';
import { WeekDiaryMeta } from '@/features/diary/model/response/getWeekDiaryMeta';

type Props = {
  diaryMeta: WeekDiaryMeta[];
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
  //height: 100%;

  overflow-y: auto;

  height: 40vh;
`;
