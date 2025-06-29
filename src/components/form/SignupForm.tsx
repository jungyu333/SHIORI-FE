'use client';

import { Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import EmailInput from '@/components/input/EmailInput';
import PasswordInput from '@/components/input/PasswordInput';
import TextInput from '@/components/input/TextInput'; // 이름, 닉네임용
import { colors } from '@/styles/theme/foundations/colors';
import { SignupFormValues } from '@/types/signup';
import GenderSelector from '@/components/input/GenderSelector';

export default function SignupForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>();

  const onSubmit = (data: SignupFormValues) => {
    console.log('회원가입 시도', data);
    // 회원가입 API 호출 등 로직 추가
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)} noValidate>
      <EmailInput register={register} error={errors.email} name={'email'} />
      <PasswordInput register={register} error={errors.password} name={'password'} />
      <TextInput label="이름" name="name" register={register} error={errors.name} />
      <TextInput label="닉네임" name="nickname" register={register} error={errors.nickname} />
      <GenderSelector name="gender" control={control} error={errors.gender} />
      <Button
        isDisabled={Object.keys(errors).length > 0}
        bgColor={colors.primary['500']}
        _hover={{ bgColor: 'secondary.500' }}
        color={colors.white}
        mt="24"
        isLoading={isSubmitting}
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
