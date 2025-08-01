import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { FieldError, Path, UseFormRegister } from 'react-hook-form';
import { colors } from '@/styles/theme/foundations/colors';

type EmailInputProps<T> = {
  register: UseFormRegister<T>;
  error?: FieldError;
  name: Path<T>;
  label?: string;
};

export default function EmailInput<T>({ register, error, name, label = '이메일' }: EmailInputProps<T>) {
  return (
    <FormControl isInvalid={!!error} pb="1">
      <FormLabel fontSize="sm">{label}</FormLabel>
      <Input
        type="email"
        autoFocus={true}
        focusBorderColor={colors.primary['500']}
        placeholder="이메일을 입력해주세요"
        _placeholder={{ fontSize: 'xs', color: 'gray.400' }}
        {...register(name, {
          required: '이메일을 입력해주세요.',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: '이메일 형식이 올바르지 않아요.',
          },
        })}
      />
      <FormErrorMessage fontSize="xs">{error?.message}</FormErrorMessage>
    </FormControl>
  );
}
