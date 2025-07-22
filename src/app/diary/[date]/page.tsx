import DiaryHeader from '@/features/diary/ui/DiaryHeader';
import { SimpleEditor } from '@/components/tiptap-templates/simple/simple-editor';

type Props = {
  params: Promise<{ date: string }>;
};

export default async function DiaryPage({ params }: Props) {
  const { date } = await params;

  return (
    <>
      <DiaryHeader date={date} />

      <SimpleEditor />
    </>
  );
}
