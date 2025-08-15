export type GetWeekDiaryMetaResponseDTO = WeekDiaryMeta[];

export type WeekDiaryMeta = {
  date: string;
  title: string;
  isArchived: boolean;
  summaryStatus: string;
  updatedAt: string;
};
