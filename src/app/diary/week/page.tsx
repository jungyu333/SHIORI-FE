'use client';

import React from 'react';
import * as S from './style';
import WeekHeader from '@/features/diary/ui/WeekHeader';
import WeekTable from '@/features/diary/ui/WeekTable';
import { useWeekNavigator } from '@/features/diary/hooks/useWeekNavigator';
import { useSummaryDiary } from '@/features/diary/queries/useSummaryDiary';
import { AxiosError } from 'axios';
import { useNotify } from '@/shared/lib/hooks/useNotify';

export default function WeekPage() {
  const { label, rangeText, prevWeek, nextWeek, diaryMeta, rangeQuery } = useWeekNavigator();

  const toast = useNotify();

  const { mutate, isLoading } = useSummaryDiary();

  const summaryTrigger = () => {
    mutate(
      { start: rangeQuery.from, end: rangeQuery.to },
      {
        onSuccess: (data) => {
          toast.success(data.message);
        },
        onError: (error: AxiosError<{ message: string }>) => {
          toast.warning(error.response.data.message);
        },
      }
    );
  };

  return (
    <S.Wrapper>
      <WeekHeader
        label={label}
        rangeText={rangeText}
        isDisabled={!diaryMeta || diaryMeta.length === 0}
        prevWeekAction={prevWeek}
        nextWeekAction={nextWeek}
        onGenerateSummaryAction={summaryTrigger}
        isLoading={isLoading}
      />

      <WeekTable diaryMeta={diaryMeta ?? []} />
    </S.Wrapper>
  );
}
