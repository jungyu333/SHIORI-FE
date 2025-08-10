'use client';

import { SimpleEditor } from '@/components/tiptap-templates/simple/simple-editor';
import { useGetDiaryContent } from '@/features/diary/queries/useGetDiaryContent';
import { parseDDMMYYYY, toYYYYMMDD } from '@/shared/lib/utils/date';

type Props = {
  date: string;
};

export default function DiaryBody({ date }: Props) {
  const { isFetching, error, data } = useGetDiaryContent(toYYYYMMDD(parseDDMMYYYY(date)));

  return (
    <>
      <SimpleEditor content={data?.content} />
    </>
  );
}
