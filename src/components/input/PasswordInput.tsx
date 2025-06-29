import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { SigninFormValues } from '@/types/signin';
import { colors } from '@/styles/theme/foundations/colors';

type Props = {
  register: UseFormRegister<SigninFormValues>;
  error: FieldErrors<SigninFormValues>['password'];
};

export default function PasswordInput({ register, error }: Props) {
  return (
    <FormControl isInvalid={!!error} pb="1">
      <FormLabel fontSize={'sm'}>비밀번호</FormLabel>
      <Input
        focusBorderColor={colors.primary}
        type="password"
        placeholder={'비밀번호를 입력해주세요'}
        _placeholder={{ fontSize: 'xs', color: 'gray.400' }}
        {...register('password', {
          required: '비밀번호를 입력해주세요.',
          minLength: {
            value: 8,
            message: '8자 이상 입력해주세요.',
          },
        })}
      />

      <FormErrorMessage fontSize={'xs'}>{error?.message}</FormErrorMessage>
    </FormControl>
  );
}
