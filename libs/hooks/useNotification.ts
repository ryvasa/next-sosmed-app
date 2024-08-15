// hooks/useChatSocket.ts
import { useEffect } from "react";
import { notificationSocket } from "../socket/socket";

const useNotification = (fetchData: any) => {
  useEffect(() => {
    notificationSocket.on("notify", (data: any) => {
      fetchData();
    });

    return () => {
      notificationSocket.off("notify", (data: any) => {
        console.log(data);
      });
    };
  }, []);
};

export default useNotification;
