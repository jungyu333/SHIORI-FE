import { SHIORI_BE } from '@/shared/api/axios/instance';
import { GetDiaryContentRequestDTO } from '@/features/diary/model/request/getDiaryContent';
import { GetDiaryContentResponseDTO } from '@/features/diary/model/response/getDiaryContent';
import {
  UpsertDiaryContentForm,
  UpsertDiaryContentRequestDTO,
} from '@/features/diary/model/request/upsertDiaryContent';
import { UpsertDiaryContentResponseDTO } from '@/features/diary/model/response/upsertDiaryContent';
import { GetWeekDiaryMetaForm } from '@/features/diary/model/request/getWeekDiaryMeta';
import { GetWeekDiaryMetaResponseDTO } from '@/features/diary/model/response/getWeekDiaryMeta';
import { SummaryDiaryForm, SummaryDiaryRequestDTO } from '@/features/diary/model/request/summaryDiary';

export const logout = () => {
  return SHIORI_BE.delete('/user/logout');
};

export const getDiaryContent = ({ date }: GetDiaryContentRequestDTO) => {
  return SHIORI_BE.get<GetDiaryContentResponseDTO>(`/diary/${date}`);
};

export const upsertDiaryContent = ({ date, content, title }: UpsertDiaryContentForm) => {
  const body = {
    content: content,
    title: title,
  };

  return SHIORI_BE.post<UpsertDiaryContentRequestDTO, UpsertDiaryContentResponseDTO>(`/diary/${date}`, body);
};

export const getWeekDiaryMeta = ({ startDate, endDate }: GetWeekDiaryMetaForm) => {
  return SHIORI_BE.get<GetWeekDiaryMetaResponseDTO>(`/diary?start=${startDate}&end=${endDate}`);
};

export const summaryDiary = ({ start, end }: SummaryDiaryForm) => {
  const body = {
    start: start,
    end: end,
  };

  return SHIORI_BE.post<SummaryDiaryRequestDTO, null>(`/diary/summary`, body);
};
