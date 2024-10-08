"use client";
import Link from "next/link";
import ProfilePicture from "../shared/ProfilePicture";
import { useEffect, useState } from "react";
import { formaterTimeChatList } from "../../helper/formaterTime";
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
    <Link
      href={`/chats/${data?.id}/${filteredUsers?.user?.id}`}
      className=" lg:px-4 p-3 flex justify-between bg-white border-b-[2px] border-gray-200 dark:border-none dark:bg-dark-sm dark:rounded-lg "
    >
      <div className="flex gap-3 items-center justify-center">
        <ProfilePicture
          active={filteredUsers?.user?.active}
          avatar={filteredUsers?.user?.avatar}
        />

        <div className="flex flex-col">
          <p className="font-semibold lg:text-lg">
            {filteredUsers?.user?.username || "Unknown"}
          </p>
          <p className="text-sm lg:text-md">
            {data?.messages[0]?.message.length > 20
              ? data?.messages[0]?.message?.split("").slice(0, 20).join("") +
                "..."
              : data?.messages[0]?.message}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap 2 justify-between items-center">
        <p className="text-sm text-primary">
          {formaterTimeChatList(data?.messages[0]?.created_at)}
        </p>
        {data?._count.messages > 0 && (
          <p className="text-white dark:text-dark-sm badge badge-error badge-sm lg:badge-md">
            {data?._count.messages}
          </p>
        )}
      </div>
    </Link>
  );
};

export default ChatCard;
