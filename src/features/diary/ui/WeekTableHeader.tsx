import { Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import { colors } from '@/styles/theme/foundations/colors';

export default function WeekTableHeader() {
  return (
    <>
      <Thead height={'30px'} bg={colors.grey['2']}>
        <Tr>
          <Th minW={'200px'} width="15%">
            Date
          </Th>
          <Th minW={'300px'} width="50%">
            Title
          </Th>
          <Th minW={'100px'} width="15%">
            Update
          </Th>
          <Th minW={'100px'} width="10%">
            Status
          </Th>
          <Th minW={'100px'} width="10%" isNumeric />
        </Tr>
      </Thead>
    </>
  );
}
