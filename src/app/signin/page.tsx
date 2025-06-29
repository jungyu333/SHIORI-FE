import HeaderText from '@/shared/ui/headerText';
import * as S from './style';
import SigninForm from '@/components/form/SigninForm';

const SigninPage = () => {
  return (
    <S.Wrapper>
      <HeaderText title={'다시 만나서 반가워요'} subTitle={'오늘도 코코로와 함께해요'} />

      <SigninForm />
      <S.SignUpButton>처음이신가요?</S.SignUpButton>
    </S.Wrapper>
  );
};

export default SigninPage;
