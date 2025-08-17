import { SummaryStatus } from '@/features/diary/model/types/week';

export type GetWeekDiaryMetaResponseDTO = WeekDiaryMeta[];

export type WeekDiaryMeta = {
  date: string;
  title: string;
  isArchived: boolean;
  summaryStatus: SummaryStatus;
  updatedAt: string;
};
