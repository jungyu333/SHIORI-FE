import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/features/diary/constants/queryKeys';
import { getDiaryContent } from '@/features/diary/api/promise';

export const useGetDiaryContent = (date: string) => {
  const { isFetching, data, refetch, error } = useQuery({
    queryKey: [QUERY_KEY.getDiaryContent, date],
    queryFn: async () => {
      const response = await getDiaryContent({ date });
      return response.data.data;
    },
  });

  return {
    isFetching,
    data,
    error,
    refetch,
  };
};
