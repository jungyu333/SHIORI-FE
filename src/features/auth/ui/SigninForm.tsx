'use client';

import { Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import EmailInput from '@/components/input/EmailInput';
import PasswordInput from '@/components/input/PasswordInput';
import SignupButton from '@/features/auth/ui/SignupButton';
import { SignInFormValues } from '@/features/auth/model/types/signIn';
import { useSignIn } from '@/features/auth/queries/useSignIn';
import { AxiosError } from 'axios';
import { useNotify } from '@/shared/lib/hooks/useNotify';
import { useRouter } from 'next/navigation';

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormValues>();

  const { mutate, isLoading } = useSignIn();

  const toast = useNotify();

  const router = useRouter();

  const onSubmit = (data: SignInFormValues) => {
    mutate(
      {
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: (data) => {
          localStorage.setItem('access_token', data.token);
          toast.success('환영합니다!');
          router.replace('/diary');
        },
        onError: (error: AxiosError<{ message: string }>) => {
          toast.warning(error.response.data.message);
        },
      }
    );
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Email */}
      <EmailInput register={register} error={errors.email} name={'email'} />

      {/* Password */}
      <PasswordInput register={register} error={errors.password} name={'password'} />

      <Button
        isDisabled={Boolean(errors.email?.message || errors.password?.message)}
        bgColor={'primary.500'}
        _hover={{ bgColor: 'secondary.500' }}
        color={'white'}
        mt="24"
        fontSize={20}
        isLoading={isSubmitting || isLoading}
        type="submit"
      >
        로그인!
      </Button>

      <SignupButton />
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
