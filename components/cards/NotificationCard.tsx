"use client";
import Link from "next/link";
import ProfilePicture from "../shared/ProfilePicture";
import { formatRelativeTime } from "@/helper/formaterTime";
import { fetchUpdateNotification } from "@/libs/api/api";
import { notificationSocket } from "@/libs/socket/socket";
import { userStore } from "@/store";

const NotificationCard = ({ data }: any) => {
  const { user } = userStore((state: any) => state);
  const getActionText = () => {
    if (data?.comment_id) {
      return data?.action === "LIKE"
        ? "liked your comment."
        : "commented on your comment.";
    } else {
      return data?.action === "LIKE"
        ? "liked your thread."
        : "commented on your thread.";
    }
  };
  const fetchUpdate = async () => {
    await fetchUpdateNotification(data.id);
  };
  const handleClick = () => {
    fetchUpdate();
    notificationSocket.emit("thread-notify", user.id);
    notificationSocket.emit("comment-notify", user.id);
  };
  return (
    <Link
      onClick={handleClick}
      href={`/threads/${data.thread_id}`}
      // href={`${!data.comment_id ? `/threads/${data.thread_id}` : `/threads/${data.thread_id}#${data.comment_id}`}`}
      className={`  bg-gray-50 dark:bg-dark-sm/70 flex gap-5 p-5 rounded-lg`}
    >
      <div className="flex-1">
        <ProfilePicture active={data?.sender?.active} />
      </div>
      <div className="flex w-full flex-auto justify-between items-center">
        <div className="flex flex-col gap-1">
          <p className=" text-sm">
            <span className={`text-primary font-semibold`}>
              {data?.sender?.username}
            </span>{" "}
            <span>{getActionText()}</span>
          </p>
          <span className="text-sm font-semibold text-primary">
            {formatRelativeTime(data?.created_at)}
          </span>
        </div>
        {!data?.readed && (
          <span className="badge badge-error badge-xs lg:badge-md text-white dark:text-dark-sm"></span>
        )}
      </div>
    </Link>
  );
};

export default NotificationCard;
