// hooks/useChatSocket.ts
import { useEffect } from "react";
import { socket } from "../socket/socket";

const useChatNotify = (fetchData: any) => {
  useEffect(() => {
    socket.on("notify", (data: any) => {
      fetchData();
    });

    return () => {
      socket.off("notify", (data: any) => {
        console.log(data);
      });
    };
  }, []);
};

export default useChatNotify;
