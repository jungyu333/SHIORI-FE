import { SummaryStatus } from '@/features/diary/model/types/week';
import { Badge } from '@chakra-ui/react';
import { STATUS_BADGE_MAP } from '@/features/diary/constants/week';
import React from 'react';

type Props = {
  status: SummaryStatus;
};

export default function StatusBadge({ status }: Props) {
  const { colorScheme, label } = STATUS_BADGE_MAP[status];

  return (
    <Badge colorScheme={colorScheme} variant="subtle">
      {label}
    </Badge>
  );
}
