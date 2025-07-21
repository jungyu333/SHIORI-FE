export const getTodayAsDDMMYYYY = () => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();

  return `${day}${month}${year}`;
};

export const formatDDMMYYYYToKorean = (ddmmyyyy: string): string => {
  const day = parseInt(ddmmyyyy.slice(0, 2), 10);
  const month = parseInt(ddmmyyyy.slice(2, 4), 10) - 1; // JS는 0-indexed month
  const year = parseInt(ddmmyyyy.slice(4), 10);

  const date = new Date(year, month, day);
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  const dayName = dayNames[date.getDay()];

  return `${year}년 ${month + 1}월 ${day}일 (${dayName})`;
};
