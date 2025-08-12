import { SummaryStatus } from '@/features/diary/model/types/week';

const STATUS_BADGE_MAP: Record<SummaryStatus, { colorScheme: string; label: string }> = {
  pending: { colorScheme: 'gray', label: '대기' },
  completed: { colorScheme: 'green', label: '완료' },
  failed: { colorScheme: 'red', label: '실패' },
};

export { STATUS_BADGE_MAP };
