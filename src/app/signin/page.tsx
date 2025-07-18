import HeaderText from '@/shared/ui/headerText';
import * as S from './style';
import SigninForm from '@/features/auth/ui/SigninForm';
import FormCard from '@/shared/ui/formCard';

const SigninPage = () => {
  return (
    <S.Wrapper>
      <FormCard>
        <HeaderText title={'기록은 계속됩니다'} subTitle={'오늘도 시오리와 함께해요'} />

        <SigninForm />
      </FormCard>
    </S.Wrapper>
  );
};

export default SigninPage;
