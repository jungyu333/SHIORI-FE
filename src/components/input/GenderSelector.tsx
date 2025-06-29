import { Button, FormControl, FormErrorMessage, HStack } from '@chakra-ui/react';
import { Control, Controller, FieldError, Path } from 'react-hook-form';

type GenderToggleSelectorProps<T> = {
  name: Path<T>;
  control: Control<T>;
  error?: FieldError;
};

export default function GenderSelector<T>({ name, control, error }: GenderToggleSelectorProps<T>) {
  return (
    <FormControl isInvalid={!!error}>
      {/*<FormLabel fontSize="sm">성별</FormLabel>*/}
      <Controller
        name={name}
        control={control}
        rules={{ required: '성별을 선택해주세요.' }}
        render={({ field: { value, onChange } }) => (
          <HStack spacing={4}>
            <Button
              variant="outline"
              w="full"
              borderColor={value === 'male' ? 'primary.500' : 'grey.3'}
              color={value === 'male' ? 'primary.500' : 'grey.5'}
              _hover={{ bg: 'primary.50' }}
              onClick={() => onChange('male')}
            >
              남성
            </Button>
            <Button
              variant="outline"
              w="full"
              borderColor={value === 'female' ? 'primary.500' : 'grey.3'}
              color={value === 'female' ? 'primary.500' : 'grey.5'}
              _hover={{ bg: 'primary.50' }}
              onClick={() => onChange('female')}
            >
              여성
            </Button>
          </HStack>
        )}
      />
      <FormErrorMessage fontSize="xs">{error?.message}</FormErrorMessage>
    </FormControl>
  );
}
