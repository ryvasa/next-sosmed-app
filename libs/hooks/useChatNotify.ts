// hooks/useChatSocket.ts
import { useEffect } from "react";
import { messageSocket } from "../socket/socket";

const useChatNotify = (fetchData: any) => {
  useEffect(() => {
    messageSocket.on("notify", (data: any) => {
      fetchData();
    });

    return () => {
      messageSocket.off("notify", (data: any) => {
        console.log(data);
      });
    };
  }, []);
};

export default useChatNotify;
