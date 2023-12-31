"use client";
import { useState } from "react";
import { Dislike } from "../ui/icons";

const DislikeButton = ({ w, h }: any) => {
  const [dislike, setDislike] = useState(false);
  const [dislikeCount, setDislikeCount] = useState(123);

  const likePost = () => {
    dislike
      ? setDislikeCount(dislikeCount - 1)
      : setDislikeCount(dislikeCount + 1);
    setDislike(dislike ? false : true);
  };

  return (
    <button
      onClick={() => {
        likePost();
      }}
      className={` flex items-center justify-start gap-2  ${
        dislike && "text-primary"
      }`}
    >
      <Dislike w={w} h={h} />
      <p className="text-sm">{dislikeCount}</p>
    </button>
  );
};

export default DislikeButton;
