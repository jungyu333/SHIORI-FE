type SummaryStatus = 'pending' | 'completed' | 'failed';
type DiaryMeta = { date: string; title: string; updatedAt: string; status: SummaryStatus };

export type { SummaryStatus, DiaryMeta };
