export const getWeekStartDate = (date: Date): Date => {
  const result = new Date(date);
  const dayOfWeek = (result.getDay() + 6) % 7; // Monday = 0
  result.setDate(result.getDate() - dayOfWeek);
  result.setHours(0, 0, 0, 0);
  return result;
};

export const addDaysToDate = (date: Date, offset: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + offset);
  return result;
};

export const formatDateToYMD = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

export const getMonthWeekLabel = (weekStartDate: Date): string => {
  const month = weekStartDate.getMonth(); // 0-based
  const year = weekStartDate.getFullYear();

  const firstOfMonth = new Date(year, month, 1);
  const firstWeekStart = getWeekStartDate(firstOfMonth);

  const diffInDays = Math.floor((weekStartDate.getTime() - firstWeekStart.getTime()) / 86400000);
  const weekNumber = Math.floor(diffInDays / 7) + 1;

  return `${month + 1}월 ${weekNumber}주차`;
};

export const getTodayAsDDMMYYYY = () => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();

  return `${day}${month}${year}`;
};

export const toDDMMYYYY = (date: Date) => {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(date.getDate())}${pad(date.getMonth() + 1)}${date.getFullYear()}`;
};

export const toYYYYMMDD = (date: Date) => {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}`;
};

export const parseDDMMYYYY = (dateStr: string) => {
  const day = parseInt(dateStr.slice(0, 2), 10);
  const month = parseInt(dateStr.slice(2, 4), 10) - 1; // zero-based
  const year = parseInt(dateStr.slice(4), 10);
  return new Date(year, month, day);
};

export const formatDDMMYYYYToKorean = (dateStr: string) => {
  const date = parseDDMMYYYY(dateStr);
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayName = dayNames[date.getDay()];
  return `${year}년 ${month}월 ${day}일 (${dayName})`;
};
