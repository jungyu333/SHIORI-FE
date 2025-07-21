import { useRouter } from 'next/navigation';
import { formatDDMMYYYYToKorean, parseDDMMYYYY, toDDMMYYYY } from '@/shared/lib/utils/date';

export const useDiaryDate = (date: string) => {
  const router = useRouter();
  const formattedDate = formatDDMMYYYYToKorean(date);

  const goToDate = (offset: number) => {
    const current = parseDDMMYYYY(date);
    current.setDate(current.getDate() + offset);
    const newDate = toDDMMYYYY(current);
    console.log(newDate);
    router.push(`/diary/${newDate}`);
  };

  return {
    formattedDate,
    goToPrev: () => goToDate(-1),
    goToNext: () => goToDate(1),
  };
};
