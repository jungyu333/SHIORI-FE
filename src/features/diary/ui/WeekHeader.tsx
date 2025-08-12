'use client';

import { Button, Heading, HStack, IconButton, Spacer, Tooltip } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import React from 'react';
import styled from '@emotion/styled';
import { useWeekNavigator } from '@/features/diary/hooks/useWeekNavigator';
import { colors } from '@/styles/theme/foundations/colors';

type Props = {
  allCompleted: boolean;
  onGenerateSummaryAction: () => void;
};

export default function WeekHeader({ allCompleted, onGenerateSummaryAction }: Props) {
  const { label, rangeText, prevWeek, nextWeek } = useWeekNavigator();

  return (
    <HeaderBar>
      <Heading size="md">
        {label} ({rangeText})
      </Heading>
      <Spacer />
      <HStack>
        <IconButton aria-label="지난주" icon={<ChevronLeftIcon />} variant="ghost" onClick={prevWeek} />
        <IconButton aria-label="다음주" icon={<ChevronRightIcon />} variant="ghost" onClick={nextWeek} />
        <Tooltip label="모든 일지 준비가 완료되면 생성할 수 있어요" isDisabled={allCompleted}>
          <Button
            color={colors.primary['200']}
            backgroundColor={colors.secondary['500']}
            isDisabled={!allCompleted}
            onClick={onGenerateSummaryAction}
          >
            주간 요약 생성
          </Button>
        </Tooltip>
      </HStack>
    </HeaderBar>
  );
}

const HeaderBar = styled(HStack)`
  width: 100%;
`;
