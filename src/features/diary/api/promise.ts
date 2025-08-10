import { SHIORI_BE } from '@/shared/api/axios/instance';
import { GetDiaryContentRequestDTO } from '@/features/diary/model/request/getDiaryContent';
import { GetDiaryContentResponseDTO } from '@/features/diary/model/response/getDiaryContent';
import {
  UpsertDiaryContentForm,
  UpsertDiaryContentRequestDTO,
} from '@/features/diary/model/request/upsertDiaryContent';
import { UpsertDiaryContentResponseDTO } from '@/features/diary/model/response/upsertDiaryContent';

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
