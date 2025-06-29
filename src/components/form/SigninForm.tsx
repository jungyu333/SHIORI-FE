'use client';

import { Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import EmailInput from '@/components/input/EmailInput';
import PasswordInput from '@/components/input/PasswordInput';
import { colors } from '@/styles/theme/foundations/colors';
import { SigninFormValues } from '@/types/signin';

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SigninFormValues>();

  const onSubmit = (data: SigninFormValues) => {
    console.log('로그인 시도', data);
    // 여기에 로그인 API 호출 등 로직 추가
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Email */}
      <EmailInput register={register} error={errors.email} />

      {/* Password */}
      <PasswordInput register={register} error={errors.password} />

      <Button
        isDisabled={Boolean(errors.email?.message || errors.password?.message)}
        bgColor={colors.primary}
        _hover={{ bgColor: 'secondary' }}
        color={colors.white}
        mt="24"
        isLoading={isSubmitting}
        type="submit"
      >
        로그인!
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
