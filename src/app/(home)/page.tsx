import BrandText from '@/shared/ui/BrandText';
import OnboardingIcon from '@/shared/ui/OnboardingIcon';
import * as S from './style';
import CTAButton from '@/components/button/CTAButton';
import { colors } from '@/styles/theme/foundations/colors';

const HomePage = () => {
  return (
    <S.Wrapper>
      <BrandText />

      <S.Space />

      <OnboardingIcon />

      <CTAButton _hover={{ bgColor: 'secondary' }} color={colors.white} bgColor={colors.primary} />
    </S.Wrapper>
  );
};

export default HomePage;
