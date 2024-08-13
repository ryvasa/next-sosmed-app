"use client";
import { formaterTimeChatList } from "@/helper/formaterTime";
import { userStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import image from "../../public/pf.jpg";

const RightBarChatCard = ({ data }: any) => {
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
    <Link href={`/chats/${data?.id}/${filteredUsers?.user?.id}`}>
      <div className="lg:px-4 py-3 flex justify-between bg-white border-b-[2px] border-gray-200 dark:border-none dark:bg-dark-sm dark:rounded-lg">
        <div className="flex gap-3 items-center justify-center">
          <div
            className={`avatar-sidebar-chats ${filteredUsers?.user?.active && "avatar-profile-online"}`}
          >
            <Image
              width={filteredUsers?.user?.avatar && 10000}
              height={filteredUsers?.user?.avatar && 10000}
              style={
                filteredUsers?.user?.avatar && {
                  width: "112px",
                  height: `112px`,
                }
              }
              src={
                filteredUsers?.user?.avatar
                  ? `http://localhost:3000/${filteredUsers?.user?.avatar}`
                  : image
              }
              alt="photo frofile"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-sm">
              {filteredUsers?.user?.username || "Unknown"}
            </p>
            <p className="text-sm font-light">
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
      </div>
    </Link>
  );
};
export default RightBarChatCard;
