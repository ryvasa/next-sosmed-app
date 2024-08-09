"use client";
import Link from "next/link";
import { Notification } from "../ui/icons";
import useThreadNotification from "../../libs/hooks/useThreadNotification";
import { notificationSocket } from "../../libs/socket/socket";
import { useEffect, useState } from "react";
import { fetchGetCountNotifications } from "@/libs/api/api";

const NotificationButton = () => {
  const [notification, setNotification] = useState(0);
  const fetchData = async () => {
    const response = await fetchGetCountNotifications();
    setNotification(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const setData = (data: number) => {
    setNotification(data);
  };
  useThreadNotification(setData);
  return (
    <>
      <Link
        className="relative text-primary flex items-center justify-center btn btn-ghost btn-sm btn-circle"
        data-tip="Notifications"
        href={"/notifications"}
      >
        {notification > 0 && (
          <span className="absolute top-1 right-1  translate-x-1/2 -translate-y-1/2 badge badge-error badge-xs text-white dark:text-dark-sm"></span>
        )}
        <Notification />
      </Link>
    </>
  );
};

export default NotificationButton;
