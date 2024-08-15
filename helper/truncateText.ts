import DOMPurify from "dompurify";

export const truncateText = (
  textWithTag: string | undefined,
  length: number,
) => {
  if (!textWithTag) {
    return ""; // atau kembalikan teks default sesuai kebutuhan
  }
  const text = DOMPurify.sanitize(textWithTag);
  // console.log({ textlebihbanyakdaripadalength: text.length > length, text });
  if (text.length > length) {
    return text.slice(0, length) + "...";
  } else {
    return text;
  }
};
