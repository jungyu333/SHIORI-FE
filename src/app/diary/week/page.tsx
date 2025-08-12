'use client';

import React from 'react';
import * as S from './style';
import WeekHeader from '@/features/diary/ui/WeekHeader';
import WeekTable from '@/features/diary/ui/WeekTable';
import { DiaryMeta } from '@/features/diary/model/types/week';
import { addDaysToDate, formatDateToYMD } from '@/shared/lib/utils/date';

export default function WeekPage() {
  const [weekStart, setWeekStart] = React.useState(new Date()); // 교체 예정

  const weekEnd = addDaysToDate(weekStart, 6);

  // Mock rows (마크업용)
  const rows: DiaryMeta[] = [
    { date: formatDateToYMD(weekStart), title: '월: 킥오프 회의', updatedAt: '2025-08-04 09:10', status: 'completed' },
    {
      date: formatDateToYMD(addDaysToDate(weekStart, 1)),
      title: '화: API 스펙 정리',
      updatedAt: '2025-08-05 19:45',
      status: 'completed',
    },
    {
      date: formatDateToYMD(addDaysToDate(weekStart, 2)),
      title: '수: 버그 수정',
      updatedAt: '2025-08-06 22:12',
      status: 'failed',
    },
    {
      date: formatDateToYMD(addDaysToDate(weekStart, 3)),
      title: '목: 디자인 싱크',
      updatedAt: '2025-08-07 18:03',
      status: 'pending',
    },
    {
      date: formatDateToYMD(addDaysToDate(weekStart, 4)),
      title: '금: 배포 준비',
      updatedAt: '2025-08-08 21:55',
      status: 'completed',
    },
    {
      date: formatDateToYMD(addDaysToDate(weekStart, 5)),
      title: '토: 개인 메모',
      updatedAt: '2025-08-09 12:10',
      status: 'pending',
    },
    { date: formatDateToYMD(weekEnd), title: '일: 회고 초안', updatedAt: '2025-08-10 20:01', status: 'pending' },
  ];
  const allCompleted = rows.length > 0 && rows.every((r) => r.status === 'completed');

  return (
    <S.Wrapper>
      <WeekHeader allCompleted={allCompleted} onGenerateSummaryAction={() => console.log('Generate Summary')} />

      <WeekTable diaryMeta={rows} />
    </S.Wrapper>
  );
}
