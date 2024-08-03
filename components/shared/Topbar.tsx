"use client";
import Image from "next/image";
import image from "../../public/pf.jpg";
import Link from "next/link";
import { Notification } from "../ui/icons";
import DropDown from "./DropDown";
import { useSocket } from "../../libs/hooks/useSocket";
import { useUserActivity } from "../../libs/hooks/useUserActivity";
import { chatsStore, messagesStore, userStore } from "@/store";
import useRoom from "@/libs/hooks/useRoom";
import { fetchGetChats, fetchGetUnreadedMessages } from "@/libs/api/api";
import { useEffect } from "react";
import { socket } from "@/libs/socket/socket";
import useChatNotify from "@/libs/hooks/useChatNotify";

const Topbar = () => {
  const { chats, updateChats } = chatsStore((state: any) => state);
  const { user } = userStore((state: any) => state);
  const { updateUnreadedMessages } = messagesStore((state: any) => state);
  async function fetchChats() {
    const res = await fetchGetChats();
    updateChats(res.data);
  }
  const fetchUnreadedMessage = async () => {
    const response = await fetchGetUnreadedMessages();
    updateUnreadedMessages(response.data);
  };
  useEffect(() => {
    if (user?.id) {
      fetchChats();
      fetchUnreadedMessage();
    }
  }, [user]);
  useUserActivity();
  useSocket();
  useRoom(chats);
  useChatNotify(fetchUnreadedMessage);
  return (
    <nav className="navbar ">
      <div className="flex-1 px-10 ">
        <Link
          className="flex gap-4 justify-center items-center"
          href="/users/123"
        >
          <div className="avatar-profile avatar-profile-online outline-offset-2">
            <Image alt="profile" src={image} quality={1} />
          </div>
          <p className="font-semibold text-lg">Username</p>
        </Link>
      </div>

      <div className="flex-none flex gap-2 ">
        <Link
          className="flex items-center justify-center btn btn-ghost btn-circle"
          data-tip="Notifications"
          href={"/notifications"}
        >
          <Notification />
        </Link>
        <DropDown />
      </div>
    </nav>
  );
};

export default Topbar;
