export type UpsertDiaryContentRequestDTO = Omit<UpsertDiaryContentForm, 'date'>;

export type UpsertDiaryContentForm = {
  date: string;
  content: object;
  title: string | null;
};
