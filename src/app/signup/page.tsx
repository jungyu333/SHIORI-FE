import * as S from './style';
import HeaderText from '@/shared/ui/headerText';
import SignupForm from '@/components/form/SignupForm';

const SignupPage = () => {
  return (
    <S.Wrapper>
      <HeaderText title={'함께 지출을 관리해보세요'} />

      <SignupForm />
    </S.Wrapper>
  );
};

export default SignupPage;
