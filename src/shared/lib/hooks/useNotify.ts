import { useToast } from '@chakra-ui/react';

export const useNotify = () => {
  const toast = useToast();

  const success = (title: string, description?: string) =>
    toast({
      title,
      description,
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top',
    });

  const error = (title: string, description?: string) =>
    toast({
      title,
      description,
      status: 'error',
      duration: 3000,
      isClosable: true,
      position: 'top',
    });

  const warning = (title: string, description?: string) =>
    toast({
      title,
      description,
      status: 'warning',
      duration: 3000,
      isClosable: true,
      position: 'top',
    });

  return { success, error, warning };
};
