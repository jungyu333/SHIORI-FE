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
