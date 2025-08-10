'use client';

import { Skeleton, SkeletonText, Stack } from '@chakra-ui/react';
import { SimpleEditor } from '@/components/tiptap-templates/simple/simple-editor';
import { useGetDiaryContent } from '@/features/diary/queries/useGetDiaryContent';
import { parseDDMMYYYY, toYYYYMMDD } from '@/shared/lib/utils/date';
import { useUpsertDiary } from '@/features/diary/queries/useUpsertDiary';
import { useMemo } from 'react';

type Props = {
  date: string;
};

export default function DiaryBody({ date }: Props) {
  const dateString = useMemo(() => toYYYYMMDD(parseDDMMYYYY(date)), [date]);

  const { isFetching, error, data } = useGetDiaryContent(dateString);

  const { mutate, isLoading } = useUpsertDiary();

  const onSaveHandler = (contentJson: any) => {
    const extractedTitle = contentJson?.content?.[0]?.content?.[0]?.text ?? '';

    mutate({
      date: dateString,
      content: contentJson,
      title: extractedTitle,
    });
  };

  if (isFetching) {
    return (
      <Stack spacing={4} py={4}>
        <Skeleton height="40px" borderRadius="md" />

        <SkeletonText noOfLines={4} spacing="4" skeletonHeight="10px" />

        <SkeletonText noOfLines={3} spacing="4" skeletonHeight="10px" />
      </Stack>
    );
  }

  console.log(data);

  return (
    <>
      <SimpleEditor content={data?.content} onSaveAction={onSaveHandler} />
    </>
  );
}
