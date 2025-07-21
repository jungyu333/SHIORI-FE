'use client';

import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { colors } from '@/styles/theme/foundations/colors';
import { useDiaryDate } from '@/features/diary/hooks/useDiaryDate';

type Props = {
  date: string;
};

export default function DiaryHeader({ date }: Props) {
  const { formattedDate, goToPrev, goToNext } = useDiaryDate(date);

  return (
    <Wrapper>
      <NavButton variant="ghost" size="sm" onClick={goToPrev}>
        <Icon as={ChevronLeftIcon} boxSize={5} />
        <div>지난 하루</div>
      </NavButton>

      <DateSection>
        <Text fontSize="lg" fontWeight="bold">
          {formattedDate}
        </Text>
        <QuoteText>"오늘 하루도 고생 많았어요."</QuoteText>
      </DateSection>

      <NavButton variant="ghost" size="sm" onClick={goToNext}>
        <div>다음 이야기</div>
        <Icon as={ChevronRightIcon} boxSize={5} />
      </NavButton>
    </Wrapper>
  );
}

const Wrapper = styled(Flex)`
  padding: 12px 16px;
  border-bottom: 1px solid ${colors.grey['3']};
  background-color: white;
  align-items: center;
  justify-content: space-between;
`;

const NavButton = styled(Button)`
  font-weight: 500;
  display: flex;
  align-items: center;
`;

const DateSection = styled(Box)`
  text-align: center;
  flex-grow: 1;
`;

const QuoteText = styled(Text)`
  margin-top: 4px;
  color: ${colors.grey['4']};
`;
