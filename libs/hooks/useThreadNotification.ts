// hooks/useChatSocket.ts
import { useEffect } from "react";
import { notificationSocket } from "../socket/socket";

const useThreadNotification = (fetchData: any) => {
  useEffect(() => {
    notificationSocket.on("thread-notify", (data: any) => {
      fetchData();
    });

    return () => {
      notificationSocket.off("thread-notify", (data: any) => {
        console.log(data);
      });
    };
  }, []);
};

export default useThreadNotification;
