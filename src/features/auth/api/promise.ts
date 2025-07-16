import { SHIORI_BE } from '@/shared/api/axios/instance';
import { SignUpRequestDTO } from '@/features/auth/model/request/signUp';
import { SignUpResponseDTO } from '@/features/auth/model/response/signUp';

export const signUp = ({ email, password, nickname }: SignUpRequestDTO) => {
  const body = {
    email: email,
    password: password,
    nickname: nickname,
  };

  return SHIORI_BE.post<SignUpRequestDTO, SignUpResponseDTO>('/user/signup', body);
};
