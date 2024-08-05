export const truncateText = (text: string | undefined, length: number) => {
  if (!text) {
    return ""; // atau kembalikan teks default sesuai kebutuhan
  }
  return text.length > length ? text.slice(0, length) + "..." : text;
};
