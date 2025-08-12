import { useCallback, useMemo, useState } from 'react';
import { addDaysToDate, formatDateToYMD, getMonthWeekLabel, getWeekStartDate } from '@/shared/lib/utils/date';

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
};

export const useWeekNavigator = (initial?: Date): WeekNavigator => {
  const [weekStart, setWeekStart] = useState(() => getWeekStartDate(initial ?? new Date()));

  const weekEnd = useMemo(() => addDaysToDate(weekStart, 6), [weekStart]);

  const formattedStart = useMemo(() => formatDateToYMD(weekStart), [weekStart]);
  const formattedEnd = useMemo(() => formatDateToYMD(weekEnd), [weekEnd]);

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
    rangeQuery: { from: formattedStart, to: formattedEnd },
    prevWeek,
    nextWeek,
    goToday,
    setWeekStart,
  };
};
