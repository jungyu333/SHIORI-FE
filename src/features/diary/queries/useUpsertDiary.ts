import { useMutation } from '@tanstack/react-query';
import { upsertDiaryContent } from '@/features/diary/api/promise';
import { UpsertDiaryContentForm } from '@/features/diary/model/request/upsertDiaryContent';

export const useUpsertDiary = () => {
  const mutation = useMutation({
    mutationFn: async ({ date, content, title }: UpsertDiaryContentForm) => {
      const response = await upsertDiaryContent({
        date: date,
        content: content,
        title: title,
      });
      return response.data;
    },
  });

  return mutation;
};
