"use client";
import { useEffect, useState } from "react";
import UserInfo from "../shared/UserInfo";
import LikeButton from "../shared/LikeButton";
import DislikeButton from "../shared/DislikeButton";
import { truncateText } from "../../helper/truncateText";

const CommentCard = ({ data }: any) => {
  const [detail, setDetail] = useState(false);
  useEffect(() => {}, [data]);

  const detailToggle = () => {
    setDetail(!detail);
  };

  return (
    <div className="rounded-lg bg-gray-100 dark:bg-dark-lg/30 p-4">
      <UserInfo user={data?.user} createdAt={data?.created_at} />
      <div className="py-2 text-sm lg:text-lg">
        {detail ? data.body : truncateText(data.body, 30)}
        {data.body.length > 30 && (
          <button onClick={detailToggle} className="text-primary">
            {detail ? "show less" : "show detail"}
          </button>
        )}
      </div>
      <div className="flex gap-4 pt-2 justify-start items-start px-1">
        <LikeButton
          w={5}
          h={5}
          isComment={true}
          dataCount={data?._count?.comment_likes}
        />
        <DislikeButton w={5} h={5} dataCount={data?._count?.comment_dislikes} />
      </div>
    </div>
  );
};

export default CommentCard;
