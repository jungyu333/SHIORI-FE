import { Tbody, Td, Tr } from '@chakra-ui/react';
import { colors } from '@/styles/theme/foundations/colors';
import React from 'react';

export default function EmptyTableRow() {
  return (
    <Tbody>
      <Tr>
        <Td colSpan={5} height={'40vh'} textAlign="center" py={8} color={colors.grey['5']}>
          이번 주 일지가 존재하지 않습니다.
        </Td>
      </Tr>
    </Tbody>
  );
}
