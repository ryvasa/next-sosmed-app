"use client";
import Image from "next/image";
import Link from "next/link";
import image from "../../public/pf.jpg";
import { useEffect, useState } from "react";
import { userStore } from "@/store";
import { fetchGetOneUser } from "@/libs/api/api";
import ThemeToggle from "./ThemeToggle";
import LogoutButton from "./LogoutButton";
import { useUserActive } from "@/libs/hooks/useUserActive";
import ChatList from "./ChatList";
import RightBarChats from "./RightBarChats";
import NotificationButton from "./NotificationButton";

const RightBar = () => {
  const currentUser = userStore((state: any) => state.user);
  const [user, setUser] = useState({
    id: "",
    avatar: image,
    username: "",
    active: false,
  });
  const fetchCurrentUser = async () => {
    const response = await fetchGetOneUser(currentUser.id);
    setUser(response.data);
  };
  useEffect(() => {
    fetchCurrentUser();
  }, [currentUser]);
  return (
    <div className="fixed w-[305px] h-screen bg-white dark:bg-dark-md top-0 right-0 flex-col hidden lg:flex justify-start items-center">
      <div className="w-full px-4">
        <div className="flex w-full dark:border-gray-700 border-gray-200 border-b-[2px]  py-3 justify-center items-center gap-2 ">
          <Link
            className="flex w-full  gap-4 justify-start items-center"
            href={`/users/${user.id}`}
          >
            <div
              className={`avatar-profile ${
                user.active && "avatar-profile-online"
              } outline-offset-2`}
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
          <NotificationButton />
          <ThemeToggle showText={false} />
        </div>
      </div>
      <RightBarChats />
      <div className="fixed border-none flex justify-center items-center bottom-5 btn bg-primary rounded-lg p-4 w-52">
        <LogoutButton showText={false} />
      </div>
    </div>
  );
};

export default RightBar;
