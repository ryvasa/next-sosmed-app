"use client";
import { userStore } from "@/store";
import { useEffect } from "react";
import { userSocket } from "../socket/socket";

export const useUserActive = () => {
  const { user } = userStore((state: any) => state);

  useEffect(() => {
    userSocket.on("activeStatus", (data) => {
      console.log("User activity status:", data);
    });

    userSocket.emit("active", user.id);

    userSocket.on("inactive", () => {
      console.log("Disconnected from server");
    });

    const activityInterval = setInterval(
      () => {
        userSocket.emit("activity");
      },
      5 * 60 * 1000,
    ); // Setiap 5 menit

    return () => {
      clearInterval(activityInterval);
      // userSocket.disconnect();
      userSocket.emit("inactive", user.id);
    };
  }, []);

  // hooks/useSocket.ts (lanjutan)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        userSocket.emit("active");
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const handleBeforeUnload = () => {
      userSocket.emit("activity");
      // userSocket.disconnect();
      userSocket.emit("inactive", user.id);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return userSocket;
};
