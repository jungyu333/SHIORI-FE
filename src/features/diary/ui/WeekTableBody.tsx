import { Box, Button, HStack, Tbody, Td, Tr } from '@chakra-ui/react';
import React from 'react';
import styled from '@emotion/styled';
import theme from '@/styles/theme';

import { colors } from '@/styles/theme/foundations/colors';
import EmptyTableRow from '@/features/diary/ui/EmptyTableRow';
import StatusBadge from '@/features/diary/ui/StatusBadge';
import { WeekDiaryMeta } from '@/features/diary/model/response/getWeekDiaryMeta';
import { formatYYYYMMDDToDashed, utcStringToKoreanDate } from '@/shared/lib/utils/date';

type Props = {
  diaryMeta: WeekDiaryMeta[];
};

export default function WeekTableBody({ diaryMeta }: Props) {
  if (diaryMeta.length === 0) {
    return <EmptyTableRow />;
  }

  return (
    <Tbody>
      {diaryMeta.map((meta: WeekDiaryMeta) => (
        <HoverRow key={meta.date}>
          <Td>{formatYYYYMMDDToDashed(meta.date)}</Td>
          <Td>{meta.title || <Box color={colors.grey['4']}>제목 없음</Box>}</Td>
          <Td>{utcStringToKoreanDate(meta.updatedAt)}</Td>
          <Td>
            <StatusBadge status={meta.summaryStatus} />
          </Td>
          <Td isNumeric>
            <HStack justify="flex-end" spacing={2}>
              <Button size="xs" variant="ghost">
                Go
              </Button>
              <Button size="xs" variant="ghost">
                Archive
              </Button>
            </HStack>
          </Td>
        </HoverRow>
      ))}
    </Tbody>
  );
}

const HoverRow = styled(Tr)`
  &:hover {
    background: ${theme.colors.gray['100']};
  }

  cursor: pointer;
`;
