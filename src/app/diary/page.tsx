import { redirect } from 'next/navigation';
import { getTodayAsDDMMYYYY } from '@/shared/lib/utils/date';

const DiaryRedirectPage = () => {
  redirect(`/diary/${getTodayAsDDMMYYYY()}`);
};

export default DiaryRedirectPage;
