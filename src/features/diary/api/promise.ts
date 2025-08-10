import { SHIORI_BE } from '@/shared/api/axios/instance';
import { GetDiaryContentRequestDTO } from '@/features/diary/model/request/getDiaryContent';
import { GetDiaryContentResponseDTO } from '@/features/diary/model/response/getDiaryContent';

export const logout = () => {
  return SHIORI_BE.delete('/user/logout');
};

export const getDiaryContent = ({ date }: GetDiaryContentRequestDTO) => {
  return SHIORI_BE.get<GetDiaryContentResponseDTO>(`/diary/${date}`);
};
