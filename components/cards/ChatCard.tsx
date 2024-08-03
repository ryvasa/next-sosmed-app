"use client";
import Link from "next/link";
import ProfilePicture from "../shared/ProfilePicture";
import { useEffect, useState } from "react";
import { formaterTime } from "../../helper/formaterTime";
import { userStore } from "@/store";
const ChatCard = ({ data }: any) => {
  const { user } = userStore((state: any) => state);
  const [filteredUsers, setFilteredUsers] = useState({
    user: { username: "", avatar: "", id: "", active: false },
  });

  useEffect(() => {
    const users = data.users;
    if (user) {
      const otherUser = users?.filter((item: any) => {
        return item.user.id !== user.id;
      });
      setFilteredUsers(otherUser[0]);
    }
  }, [data]);

  return (
    <div className="px-4 py-3 flex justify-between border-gray-100 border-b-2 dark:border-dark-lg/30">
      <div className="flex gap-3 items-center justify-center">
        <ProfilePicture active={filteredUsers?.user?.active} />
        <Link
          href={`/chats/${data?.id}/${filteredUsers?.user?.id}`}
          className="flex flex-col"
        >
          <p className="font-semibold lg:text-lg">
            {filteredUsers?.user?.username || "Unknown"}
          </p>
          <p className="text-sm lg:text-md">
            {data?.messages[0]?.message.length > 20
              ? data?.messages[0]?.message?.split("").slice(0, 20).join("") +
                "..."
              : data?.messages[0]?.message}
          </p>
        </Link>
      </div>
      <div className="flex flex-col gap 2 justify-between items-center">
        <p className="text-sm text-primary">
          {formaterTime(data?.messages[0]?.created_at).formattedTime}
        </p>
        {data?._count.messages > 0 && (
          <p className="text-white dark:text-dark-sm badge badge-error badge-sm lg:badge-md">
            {data?._count.messages}
          </p>
        )}
      </div>
    </div>
  );
};

export default ChatCard;
