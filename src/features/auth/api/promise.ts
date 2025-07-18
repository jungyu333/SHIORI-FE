import { SHIORI_BE } from '@/shared/api/axios/instance';
import { SignUpRequestDTO } from '@/features/auth/model/request/signUp';
import { SignUpResponseDTO } from '@/features/auth/model/response/signUp';
import { SignInRequestDTO } from '@/features/auth/model/request/signIn';
import { SignInResponseDTO } from '@/features/auth/model/response/signIn';

export const signUp = ({ email, password, nickname }: SignUpRequestDTO) => {
  const body = {
    email: email,
    password: password,
    nickname: nickname,
  };

  return SHIORI_BE.post<SignUpRequestDTO, SignUpResponseDTO>('/user/signup', body);
};

export const signIn = ({ email, password }: SignInRequestDTO) => {
  const body = {
    email: email,
    password: password,
  };

  return SHIORI_BE.post<SignInRequestDTO, SignInResponseDTO>('/user/login', body);
};
