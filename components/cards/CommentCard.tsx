"use client";
import { useState } from "react";
import UserInfo from "../shared/UserInfo";
import LikeButton from "../shared/LikeButton";
import DislikeButton from "../shared/DislikeButton";

const CommentCard = ({ data }: any) => {
  const [detail, setDetail] = useState(false);

  const detailToggle = () => {
    setDetail(detail ? false : true);
  };
  return (
    <div className="rounded-lg bg-gray-100 dark:bg-dark-lg/30 p-4">
      <UserInfo />
      <p className="py-2 text-sm">
        {detail
          ? data.comment
          : data.comment.split(" ").slice(0, 15).join(" ") + "..."}{" "}
        {detail ? (
          <button onClick={() => detailToggle()} className="text-primary">
            show less
          </button>
        ) : (
          <button onClick={() => detailToggle()} className="text-primary">
            show detail
          </button>
        )}
      </p>
      <div className="flex gap-4 pt-2 justify-start items-start px-1">
        <LikeButton w={5} h={5} isComment={true} />
        <DislikeButton w={5} h={5}/>
      </div>
    </div>
  );
};

export default CommentCard;
