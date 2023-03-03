export const dateToYearMonth = (date: Date, separator = '-'): string => {
  return `${date.getFullYear().toString().slice(2, 4)}${separator}${(
    '0' +
    (date.getMonth() + 1)
  ).slice(-2)}`;
};

export const dateToDayMonthYear = (date: Date, separator = '-'): string => {
  return `${date.getDate()}${separator}${
    date.getMonth() + 1
  }${separator}${date.getFullYear()}`;
};

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const dateToDayMonthStringYear = (
  date: Date,
  separator = '-',
): string => {
  return `${date.getDate()}${separator}${
    months[date.getMonth()]
  }${separator}${date.getFullYear()}`;
};

export const dateToMinuteHourMonthStringDayYear = (
  date: Date,
  separator = '-',
): string => {
  return `${date.getDate()}${separator}${
    months[date.getMonth()]
  }${separator}${date.getUTCFullYear()} ${date.getHours()}:${date.getMinutes()}`;
};
