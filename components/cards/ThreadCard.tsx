"use client";
import { Comment } from "../ui/icons";
import LikeButton from "../shared/LikeButton";
import UserInfo from "../shared/UserInfo";
import PostContent from "../shared/PostContent";
import Link from "next/link";
import DislikeButton from "../shared/DislikeButton";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchGetOneThread } from "@/libs/api/api";
import useActiveStatus from "@/libs/hooks/useActiveStatus";

const ThreadCard = () => {
  const [thread, setThread] = useState<any>({});
  const { id } = useParams();
  const getOneThread = async () => {
    const response = await fetchGetOneThread(id as string);
    setThread(response.data);
  };
  useEffect(() => {
    getOneThread();
  }, [id]);
  useActiveStatus(getOneThread);
  return (
    <div className="border-b-[2px] border-gray-200 dark:border-gray-600 pt-10 pb-5 ">
      <div className="flex gap-4 flex-col">
        <UserInfo user={thread?.user} createdAt={thread.created_at} />
        <PostContent detail={false} id={thread.id} />
      </div>
      <div className="flex pt-5 gap-4">
        <LikeButton
          w={5}
          h={5}
          isComment={false}
          dataCount={thread.count?.thread_likes}
        />
        <div className="pt-1">
          <DislikeButton
            w={5}
            h={5}
            dataCount={thread.count?.thread_dislikes}
          />
        </div>
        <Link
          href={`/threads/${thread.id}`}
          className="flex-1 flex items-center justify-center gap-2"
        >
          <Comment w={4} h={4} />
          {thread.count?.comments > 0 && <p>{thread.count?.comments}</p>}
        </Link>
      </div>
    </div>
  );
};

export default ThreadCard;
