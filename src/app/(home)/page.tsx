import BrandText from '@/shared/ui/BrandText';
import OnboardingIcon from '@/shared/ui/OnboardingIcon';
import * as S from './style';
import CTAButton from '@/components/button/CTAButton';

const HomePage = () => {
  return (
    <S.Wrapper>
      <BrandText />

      <S.Space />

      <CTAButton _hover={{ bgColor: 'secondary.500' }} color={'white'} bgColor={'primary.500'}
                 w={{ base: '100%', md: '500px' }}
                 h={{ base: '56px', md: '70px' }}
                 fontSize={{ base: 'lg', md: '2xl' }}
                 marginBottom={{ base: '30px' }}
      />

      <OnboardingIcon />

    </S.Wrapper>
  );
};

export default HomePage;
