import BrandText from '@/shared/ui/BrandText';
import OnboardingIcon from '@/shared/ui/OnboardingIcon';
import * as S from './style';
import CTAButton from '@/components/button/CTAButton';

const HomePage = () => {
  return (
    <S.Wrapper>
      <BrandText />

      <S.Space />

      <OnboardingIcon />

      <CTAButton _hover={{ bgColor: 'secondary.500' }} color={'white'} bgColor={'primary.500'} />
    </S.Wrapper>
  );
};

export default HomePage;
