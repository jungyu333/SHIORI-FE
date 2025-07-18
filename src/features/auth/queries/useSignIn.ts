import { useMutation } from '@tanstack/react-query';
import { signIn } from '@/features/auth/api/promise';
import { SignInFormValues } from '@/features/auth/model/types/signIn';

export const useSignIn = () => {
  const mutation = useMutation({
    mutationFn: async ({ email, password }: SignInFormValues) => {
      const response = await signIn({
        email,
        password,
      });
      return response.data.data;
    },
  });

  return mutation;
};
