"use client";
import { Comment } from "../ui/icons";
import LikeButton from "../shared/LikeButton";
import UserInfo from "../shared/UserInfo";
import Link from "next/link";
// import DislikeButton from "../shared/DislikeButton";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchGetOneThread } from "@/libs/api/api";
import useActiveStatus from "@/libs/hooks/useActiveStatus";
// import useNotification from "@/libs/hooks/useNotification";
import ThreadContent from "../shared/ThreadContent";

const ThreadCard = () => {
  const [thread, setThread] = useState<any>({});
  const { id } = useParams();
  const getOneThread = async () => {
    if (id) {
      const response = await fetchGetOneThread(id as string);
      setThread(response.data);
    }
  };
  useEffect(() => {
    getOneThread();
  }, [id]);
  useActiveStatus(getOneThread);
  // useNotification(getOneThread);
  return (
    <div className="border-b-[2px] border-gray-200 dark:border-gray-600 pt-10 pb-5 ">
      <div className="flex gap-4 flex-col">
        <UserInfo user={thread?.user} createdAt={thread.created_at} />
        <ThreadContent id={thread.id} />
      </div>
      <div className="flex pt-5 gap-4">
        <LikeButton
          w={5}
          h={5}
          data={thread?.thread_likes}
          threadId={thread?.id}
          dataCount={thread.count?.thread_likes}
        />
        {/* <div className="pt-1">
          <DislikeButton
            w={5}
            h={5}
            dataCount={thread.count?.thread_dislikes}
          />
        </div> */}
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
