import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { FieldError, Path, UseFormRegister } from 'react-hook-form';
import { colors } from '@/styles/theme/foundations/colors';

type PasswordInputProps<T> = {
  register: UseFormRegister<T>;
  name: Path<T>;
  error?: FieldError;
  label?: string;
};

export default function PasswordInput<T>({ register, name, error, label = '비밀번호' }: PasswordInputProps<T>) {
  return (
    <FormControl isInvalid={!!error} pb="1">
      <FormLabel fontSize="sm">{label}</FormLabel>
      <Input
        type="password"
        focusBorderColor={colors.primary['500']}
        placeholder={`${label}를 입력해주세요`}
        _placeholder={{ fontSize: 'xs', color: 'gray.400' }}
        {...register(name, {
          required: `${label}를 입력해주세요.`,
          minLength: {
            value: 8,
            message: '8자 이상 입력해주세요.',
          },
        })}
      />
      <FormErrorMessage fontSize="xs">{error?.message}</FormErrorMessage>
    </FormControl>
  );
}
