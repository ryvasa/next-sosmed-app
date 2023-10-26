"use client";
import { useState } from "react";
import { Like } from "../ui/icons";

const LikeButton = () => {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(123);

  const likePost = () => {
    like ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
    setLike(like ? false : true);
  };

  return (
    <button
      onClick={() => {
        likePost();
      }}
      className={`flex-1 flex items-center justify-center gap-2  ${
        like ? "text-primary" : "text-color"
      }`}
    >
      <Like />
      <p className="text-color">{likeCount}</p>
    </button>
  );
};

export default LikeButton;
