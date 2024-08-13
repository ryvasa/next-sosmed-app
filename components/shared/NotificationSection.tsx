"use client";
import { useEffect, useState } from "react";
import NotificationCard from "../cards/NotificationCard";
import {
  fetchGetNotifications,
  fetchUpdateAllNotification,
} from "../../libs/api/api";
import useThreadNotification from "@/libs/hooks/useThreadNotification";
import { notificationSocket } from "@/libs/socket/socket";
import { userStore } from "@/store";
import useComentNotification from "@/libs/hooks/useComentNotification";

const NotificationSection = () => {
  const [notifications, setNotifications] = useState<any>([]);
  const { user } = userStore((state: any) => state);
  const fetchData = async () => {
    const response = await fetchGetNotifications();
    setNotifications(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = async () => {
    await fetchUpdateAllNotification();
    fetchData();
    notificationSocket.emit("thread-notify", user.id);
    notificationSocket.emit("comment-notify", user.id);
  };
  useThreadNotification(fetchData);
  useComentNotification(fetchData);
  return (
    <>
      <div className="flex w-full justify-between items-center pb-2">
        <h1 className="text-xl font-semibold text-primary">Notification</h1>
        <button
          type="button"
          onClick={handleClick}
          className=" normal-case text-xs lg:text-sm btn btn-xs btn-primary text-white"
        >
          Read all
        </button>
      </div>
      <div className="flex flex-col gap-[6px]">
        {notifications.map((notif: any) => (
          <div key={notif.id}>
            <NotificationCard data={notif} />
          </div>
        ))}
      </div>
    </>
  );
};

export default NotificationSection;
