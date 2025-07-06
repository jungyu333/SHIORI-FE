import HeaderText from '@/shared/ui/headerText';
import * as S from './style';
import SigninForm from '@/components/form/SigninForm';

const SigninPage = () => {
  return (
    <S.Wrapper>
      <HeaderText title={'기록은 계속됩니다'} subTitle={'오늘도 시오리와 함께해요'} />

      <SigninForm />
    </S.Wrapper>
  );
};

export default SigninPage;
