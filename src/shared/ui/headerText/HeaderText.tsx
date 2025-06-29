import { MainText, SubText, Wrapper } from './HeaderText.style';

type Props = {
  title: string;
  subTitle?: string;
};

export default function HeaderText({ title, subTitle }: Props) {
  return (
    <Wrapper>
      <MainText>{title}</MainText>
      <SubText>{subTitle}</SubText>
    </Wrapper>
  );
}
