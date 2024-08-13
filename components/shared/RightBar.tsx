"use client";
import Image from "next/image";
import Link from "next/link";
import image from "../../public/pf.jpg";
import { useEffect, useState } from "react";
import { fetchCurrentUser } from "@/libs/api/api";
import ThemeToggle from "./ThemeToggle";
import LogoutButton from "./LogoutButton";
import RightBarChats from "./RightBarChats";
import NotificationButton from "./NotificationButton";
import { truncateText } from "@/helper/truncateText";

const RightBar = () => {
  const [user, setUser] = useState({
    id: "",
    avatar: "",
    username: "",
    active: false,
  });

  const fetchCurrent = async () => {
    try {
      const response = await fetchCurrentUser();
      if (response.data) {
        setUser(response.data);
      }
    } catch (error) {
      console.error("Error fetching current user:", error);
    }
  };

  useEffect(() => {
    fetchCurrent();
  }, []);

  // Ensure avatar is a string
  // const avatarSrc = typeof user.avatar === "string" ? user.avatar : "";

  return (
    <div className="fixed w-[305px] h-screen bg-white dark:bg-dark-md top-0 right-0 flex-col hidden lg:flex justify-start items-center">
      <div className="w-full px-4">
        <div className="flex w-full dark:border-gray-700 border-gray-200 border-b-[2px]  py-3 justify-center items-center gap-2 ">
          <Link
            className="flex w-full gap-4 justify-start items-center"
            href={`/users/${user.id}`}
          >
            <div
              className={`avatar-profile ${
                user.active && "avatar-profile-online"
              } outline-offset-2`}
            >
              <Image
                width={user.avatar && 112}
                height={user.avatar && 112}
                style={user.avatar && { width: "112px", height: "112px" }}
                alt="profile"
                src={
                  user.avatar ? `http://localhost:3000/${user.avatar}` : image
                }
              />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-md">
                {truncateText(user.username, 10)}
              </p>
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
