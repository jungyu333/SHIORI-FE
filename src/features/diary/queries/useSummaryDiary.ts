import { useMutation } from '@tanstack/react-query';
import { summaryDiary } from '@/features/diary/api/promise';
import { SummaryDiaryForm } from '@/features/diary/model/request/summaryDiary';

export const useSummaryDiary = () => {
  const mutation = useMutation({
    mutationFn: async ({ start, end }: SummaryDiaryForm) => {
      const response = await summaryDiary({
        start: start,
        end: end,
      });
      return response.data;
    },
  });

  return mutation;
};
