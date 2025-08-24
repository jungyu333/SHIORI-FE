import { useCallback, useMemo, useState } from 'react';
import {
  addDaysToDate,
  formatDateToYMD,
  getMonthWeekLabel,
  getWeekStartDate,
  toYYYYMMDD,
} from '@/shared/lib/utils/date';
import { useGetWeekDiaryMeta } from '@/features/diary/queries/useGetWeekDiaryMeta';
import { WeekDiaryMeta } from '@/features/diary/model/response/getWeekDiaryMeta';

export type WeekNavigator = {
  weekStart: Date;
  weekEnd: Date;
  label: string;
  rangeText: string;
  days: string[];
  rangeQuery: { from: string; to: string };
  prevWeek: () => void;
  nextWeek: () => void;
  goToday: () => void;
  setWeekStart: (date: Date) => void;
  diaryMeta: WeekDiaryMeta[];
  isLoading: boolean;
};

export const useWeekNavigator = (initial?: Date): WeekNavigator => {
  const [weekStart, setWeekStart] = useState(() => getWeekStartDate(initial ?? new Date()));

  const weekEnd = useMemo(() => addDaysToDate(weekStart, 6), [weekStart]);

  const formattedStart = useMemo(() => formatDateToYMD(weekStart), [weekStart]);
  const formattedEnd = useMemo(() => formatDateToYMD(weekEnd), [weekEnd]);

  const startDate = useMemo(() => toYYYYMMDD(weekStart), [weekStart]);
  const endDate = useMemo(() => toYYYYMMDD(weekEnd), [weekEnd]);

  const { data, isFetching, error } = useGetWeekDiaryMeta({
    startDate,
    endDate,
  });

  const days = useMemo(
    () => Array.from({ length: 7 }, (_, i) => formatDateToYMD(addDaysToDate(weekStart, i))),
    [weekStart]
  );

  const prevWeek = useCallback(() => setWeekStart(addDaysToDate(weekStart, -7)), [weekStart]);

  const nextWeek = useCallback(() => setWeekStart(addDaysToDate(weekStart, 7)), [weekStart]);

  const goToday = useCallback(() => setWeekStart(getWeekStartDate(new Date())), []);

  return {
    weekStart,
    weekEnd,
    label: getMonthWeekLabel(weekStart),
    rangeText: `${formattedStart} ~ ${formattedEnd}`,
    days,
    rangeQuery: { from: startDate, to: endDate },
    prevWeek,
    nextWeek,
    goToday,
    setWeekStart,
    diaryMeta: data,
    isLoading: isFetching,
  };
};
