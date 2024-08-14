// hooks/useChatSocket.ts
import { useEffect } from "react";
import { notificationSocket } from "../socket/socket";

const useComentNotification = (fetchData: any) => {
  useEffect(() => {
    notificationSocket.on("comment-notify", (data: any) => {
      fetchData();
    });

    return () => {
      notificationSocket.off("comment-notify", (data: any) => {
        console.log(data);
      });
    };
  }, []);
};

export default useComentNotification;
