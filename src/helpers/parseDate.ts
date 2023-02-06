export const yearMonthToString = (date: Date): string => {
  return `${date.getFullYear().toString().slice(2, 4)}/${(
    '0' +
    (date.getMonth() + 1)
  ).slice(-2)}`;
};
