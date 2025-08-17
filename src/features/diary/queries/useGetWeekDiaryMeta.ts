import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/features/diary/constants/queryKeys';
import { getWeekDiaryMeta } from '@/features/diary/api/promise';
import { GetWeekDiaryMetaForm } from '@/features/diary/model/request/getWeekDiaryMeta';

export const useGetWeekDiaryMeta = ({ startDate, endDate }: GetWeekDiaryMetaForm) => {
  const { isFetching, data, refetch, error } = useQuery({
    queryKey: [QUERY_KEY.getWeekDiaryMeta, startDate, endDate],
    queryFn: async () => {
      const response = await getWeekDiaryMeta({
        startDate,
        endDate,
      });
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
