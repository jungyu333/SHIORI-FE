import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { SigninFormValues } from '@/types/signin';
import { colors } from '@/styles/theme/foundations/colors';

type Props = {
  register: UseFormRegister<SigninFormValues>;
  error: FieldErrors<SigninFormValues>['email'];
};

export default function EmailInput({ register, error }: Props) {
  return (
    <FormControl isInvalid={!!error} pb="1">
      <FormLabel fontSize={'sm'}>이메일</FormLabel>
      <Input
        focusBorderColor={colors.primary}
        type="email"
        placeholder={'이메일을 입력해주세요'}
        _placeholder={{ fontSize: 'xs', color: 'gray.400' }}
        {...register('email', {
          required: '이메일을 입력해주세요.',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: '이메일 형식이 올바르지 않아요.',
          },
        })}
      />

      <FormErrorMessage fontSize={'xs'}>{error?.message}</FormErrorMessage>
    </FormControl>
  );
}
