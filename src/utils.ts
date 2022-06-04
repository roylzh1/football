export const dateStringToDate = (date: string): Date => {
  const dataParts = date.split("/").map((item: string): number => {
    return parseInt(item);
  });
  // 28/10/2018
  return new Date(dataParts[2], dataParts[1] - 1, dataParts[0]);
};
