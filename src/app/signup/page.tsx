import * as S from './style';
import HeaderText from '@/shared/ui/headerText';
import SignupForm from '@/components/form/SignupForm';
import FormCard from '@/shared/ui/formCard';

const SignupPage = () => {
  return (
    <S.Wrapper>
      <FormCard>
        <HeaderText title={'함께 하루를 기록해요'} />

        <SignupForm />
      </FormCard>
    </S.Wrapper>
  );
};

export default SignupPage;
