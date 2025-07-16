import { Box, useToast } from '@chakra-ui/react';

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
      render: () => (
        <Box
          bg="white"
          borderColor={'green.500'}
          borderWidth={3}
          color="gray"
          p={4}
          borderRadius="md"
          fontSize="md"
          boxShadow="md"
        >
          <strong>{title}</strong>
          {description && (
            <Box fontWeight={600} mt={1}>
              {description}
            </Box>
          )}
        </Box>
      ),
    });

  const error = (title: string, description?: string) =>
    toast({
      title,
      description,
      status: 'error',
      duration: 3000,
      isClosable: true,
      position: 'top',
      render: () => (
        <Box
          bg="white"
          borderColor={'red.500'}
          borderWidth={3}
          color="gray"
          p={4}
          borderRadius="md"
          fontSize="md"
          boxShadow="md"
        >
          <strong>{title}</strong>
          {description && (
            <Box fontWeight={600} mt={1}>
              {description}
            </Box>
          )}
        </Box>
      ),
    });

  const warning = (title: string, description?: string) =>
    toast({
      title,
      description,
      status: 'warning',
      duration: 3000,
      isClosable: true,
      position: 'top',
      render: () => (
        <Box
          bg="white"
          borderColor={'yellow.500'}
          borderWidth={3}
          color="gray"
          p={4}
          borderRadius="md"
          fontSize="md"
          boxShadow="md"
        >
          <strong>{title}</strong>
          {description && (
            <Box fontWeight={600} mt={1}>
              {description}
            </Box>
          )}
        </Box>
      ),
    });

  return { success, error, warning };
};
