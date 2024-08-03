"use client";
import Image from "next/image";
import image from "../../public/pf.jpg";
import Link from "next/link";
import { Notification } from "../ui/icons";
import DropDown from "./DropDown";
import { useUserActivity } from "../../libs/hooks/useUserActivity";
import { chatsStore, messagesStore, userStore } from "@/store";
import useRoom from "@/libs/hooks/useRoom";
import {
  fetchGetChats,
  fetchGetOneUser,
  fetchGetUnreadedMessages,
} from "@/libs/api/api";
import { useEffect, useState } from "react";
import useChatNotify from "@/libs/hooks/useChatNotify";
import LoadingCircle from "./LoadingCircle";
import { useParams } from "next/navigation";
import { useUserActive } from "@/libs/hooks/useUserActive";
import useActiveStatus from "@/libs/hooks/useActiveStatus";

const Topbar = () => {
  const { receiver_id } = useParams();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    id: "",
    avatar: image,
    username: "",
    active: false,
  });
  const { chats, updateChats } = chatsStore((state: any) => state);
  const currentUser = userStore((state: any) => state.user);
  const { updateUnreadedMessages } = messagesStore((state: any) => state);

  async function fetchReceiverUser() {
    if (receiver_id) {
      const response = await fetchGetOneUser(receiver_id as string);
      setUser(response.data);
    }
  }
  useEffect(() => {
    fetchReceiverUser();
    setUser(currentUser);
  }, [receiver_id]);

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
      setLoading(true);
    }
  }, [user]);
  useUserActivity();
  useUserActive();
  useRoom(chats);
  useChatNotify(fetchUnreadedMessage);
  useActiveStatus(fetchReceiverUser);
  return (
    <nav className="navbar ">
      <div className="flex-1 px-10 ">
        {!loading ? (
          <LoadingCircle />
        ) : (
          <Link
            className="flex gap-4 justify-center items-center"
            href={`/users/${user.id}`}
          >
            <div
              className={`avatar-profile ${user.active && "avatar-profile-online"} outline-offset-2`}
            >
              <Image alt="profile" src={user.avatar || image} quality={1} />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-lg">{user.username}</p>
              {user.active && (
                <p className="text-xs font-semibold lg:text-sm text-success">
                  Online
                </p>
              )}
            </div>
          </Link>
        )}
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
