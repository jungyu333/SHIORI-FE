import { useMutation } from '@tanstack/react-query';
import { logout } from '@/features/diary/api/promise';

export const useLogOut = () => {
  const mutation = useMutation({
    mutationFn: async () => {
      const response = await logout();
      return response.data;
    },
  });

  return mutation;
};
