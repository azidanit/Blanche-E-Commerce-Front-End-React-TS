export const dateToYearMonth = (date: Date): string => {
  return `${date.getFullYear().toString().slice(2, 4)}/${(
    '0' +
    (date.getMonth() + 1)
  ).slice(-2)}`;
};

export const dateToDayMonthYear = (date: Date): string => {
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};
