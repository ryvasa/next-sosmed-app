export function formaterTime(timestamp: any) {
  const date = new Date(timestamp);
  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  const formattedTime = `${date.getHours()}:${date.getMinutes()}`;
  return { formattedDate, formattedTime };
}
