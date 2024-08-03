"use client";
import { useEffect } from "react";
import { useUserActive } from "./useUserActive";

export const useUserActivity = () => {
  const socket = useUserActive(); // Pastikan ini hanya digunakan di dalam komponen yang dipasang.

  useEffect(() => {
    if (!socket) return;

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        socket.emit("active");
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [socket]);
};
