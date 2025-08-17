'use client';

import React from 'react';
import * as S from './style';
import WeekHeader from '@/features/diary/ui/WeekHeader';
import WeekTable from '@/features/diary/ui/WeekTable';
import { useWeekNavigator } from '@/features/diary/hooks/useWeekNavigator';

export default function WeekPage() {
  const { label, rangeText, prevWeek, nextWeek, diaryMeta } = useWeekNavigator();

  return (
    <S.Wrapper>
      <WeekHeader
        label={label}
        rangeText={rangeText}
        isDisabled={!diaryMeta || diaryMeta.length === 0}
        prevWeekAction={prevWeek}
        nextWeekAction={nextWeek}
        onGenerateSummaryAction={() => console.log('Generate Summary')}
      />

      <WeekTable diaryMeta={diaryMeta ?? []} />
    </S.Wrapper>
  );
}
