import { useMutation, useQueryClient } from '@tanstack/react-query';
import { summaryDiary } from '@/features/diary/api/promise';
import { SummaryDiaryForm } from '@/features/diary/model/request/summaryDiary';
import { QUERY_KEY } from '@/features/diary/constants/queryKeys';
import { WeekDiaryMeta } from '@/features/diary/model/response/getWeekDiaryMeta';

export const useSummaryDiary = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ start, end }: SummaryDiaryForm) => {
      const response = await summaryDiary({ start, end });
      return response.data;
    },

    onMutate: async ({ start, end }) => {
      await queryClient.cancelQueries({
        queryKey: [QUERY_KEY.getWeekDiaryMeta, start, end],
      });

      const prevData = queryClient.getQueryData<WeekDiaryMeta[]>([QUERY_KEY.getWeekDiaryMeta, start, end]);

      queryClient.setQueryData<WeekDiaryMeta[]>(
        [QUERY_KEY.getWeekDiaryMeta, start, end],
        (old) =>
          old?.map((meta) => ({
            ...meta,
            summaryStatus: 'pending',
          })) ?? old
      );

      return { prevData };
    },

    onSuccess: (_, { start, end }) => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.getWeekDiaryMeta, start, end],
      });
    },

    onError: (_err, { start, end }, context) => {
      if (context?.prevData) {
        queryClient.setQueryData([QUERY_KEY.getWeekDiaryMeta, start, end], context.prevData);
      }
    },
  });
};
