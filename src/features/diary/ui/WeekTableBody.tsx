import { Box, Button, HStack, Tbody, Td, Tr } from '@chakra-ui/react';
import StatusBadge from '@/features/diary/ui/StatusBadge';
import React from 'react';
import styled from '@emotion/styled';
import theme from '@/styles/theme';
import { DiaryMeta } from '@/features/diary/model/types/week';

type Props = {
  diaryMeta: DiaryMeta[];
};

export default function WeekTableBody({ diaryMeta }: Props) {
  return (
    <>
      <Tbody>
        {diaryMeta.map((meta: DiaryMeta) => (
          <HoverRow key={meta.date}>
            <Td>{meta.date}</Td>
            <Td>{meta.title || <Box color="gray.400">제목 없음</Box>}</Td>
            <Td>{meta.updatedAt}</Td>
            <Td>{<StatusBadge status={meta.status} />}</Td>
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
    </>
  );
}

const HoverRow = styled(Tr)`
  &:hover {
    background: ${theme.colors.gray['100']};
  }

  cursor: pointer;
`;
