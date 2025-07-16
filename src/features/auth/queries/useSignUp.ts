import { useMutation } from '@tanstack/react-query';
import { signUp } from '@/features/auth/api/promise';
import { SignUpFormValues } from '@/features/auth/model/types/signUp';

export const useSignUp = () => {
  const mutation = useMutation({
    mutationFn: async ({ email, password, nickname }: SignUpFormValues) => {
      const response = await signUp({
        email,
        password,
        nickname,
      });
      return response.data.data;
    },
  });

  return mutation;
};
