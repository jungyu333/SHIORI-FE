import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { FieldError, Path, UseFormRegister } from 'react-hook-form';
import { colors } from '@/styles/theme/foundations/colors';

type TextInputProps<T> = {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: FieldError;
};

export default function TextInput<T>({ label, name, register, error }: TextInputProps<T>) {
  return (
    <FormControl isInvalid={!!error} pb="1">
      <FormLabel fontSize="sm">{label}</FormLabel>
      <Input
        focusBorderColor={colors.primary['500']}
        _placeholder={{ fontSize: 'xs', color: 'gray.400' }}
        {...register(name, {
          required: `${label}을(를) 입력해주세요.`,
        })}
        placeholder={`${label}을(를) 입력해주세요`}
      />
      <FormErrorMessage fontSize="xs">{error?.message}</FormErrorMessage>
    </FormControl>
  );
}
