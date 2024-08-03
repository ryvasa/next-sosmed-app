"use client";
import { userStore } from "@/store";
import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";

const SOCKET_URL = "http://localhost:3000/users";

export const useSocket = () => {
  const { user } = userStore((state: any) => state);

  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    socketRef.current = io(SOCKET_URL, {
      withCredentials: true,
    });

    const socketIo = socketRef.current;
    // Menangani event 'setactive' dari server
    socketIo?.on("setactive", (data) => {
      console.log("User activity status:", data);
    });

    // Mengirim sinyal aktif saat terhubung
    socketIo?.emit("setActive", user.id);

    // Mengatur event listener untuk menangani saat pengguna terputus
    socketIo?.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    // Mengirimkan sinyal aktivitas secara berkala
    const activityInterval = setInterval(
      () => {
        socketRef.current?.emit("activity");
      },
      5 * 60 * 1000,
    ); // Setiap 5 menit

    // Cleanup saat komponen di-unmount
    return () => {
      clearInterval(activityInterval);
      socketRef.current?.disconnect();
    };
  }, []);

  // hooks/useSocket.ts (lanjutan)
  useEffect(() => {
    const handleBeforeUnload = () => {
      socketRef.current?.emit("activity");
      socketRef.current?.disconnect();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return socketRef.current;
};
