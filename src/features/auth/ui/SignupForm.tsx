'use client';

import { Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import EmailInput from '@/components/input/EmailInput';
import PasswordInput from '@/components/input/PasswordInput';
import TextInput from '@/components/input/TextInput';
import { colors } from '@/styles/theme/foundations/colors';
import { SignUpFormValues } from '@/features/auth/model/types/signUp';
import { useSignUp } from '@/features/auth/queries/useSignUp';
import { useRouter } from 'next/navigation';

export default function SignupForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>();

  const { mutate, isLoading } = useSignUp();

  const router = useRouter();

  const onSubmit = (data: SignUpFormValues) => {
    mutate(
      {
        email: data.email,
        password: data.password,
        nickname: data.nickname,
      },
      {
        onSuccess: (data) => {
          router.replace('/signin');
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)} noValidate>
      <EmailInput register={register} error={errors.email} name={'email'} />
      <PasswordInput register={register} error={errors.password} name={'password'} />
      <TextInput label="닉네임" name="nickname" register={register} error={errors.nickname} />
      <Button
        isDisabled={Object.keys(errors).length > 0}
        bgColor={colors.primary['500']}
        _hover={{ bgColor: 'secondary.500' }}
        color={colors.white}
        mt="24"
        fontSize={20}
        isLoading={isSubmitting || isLoading}
        type="submit"
      >
        가입하기
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
