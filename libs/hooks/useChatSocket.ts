// hooks/useChatSocket.ts
import { useEffect } from "react";
import { socket } from "../socket/socket";

const useChatSocket = (
  chat_id: string,
  user_id: string,
  setMessages: React.Dispatch<React.SetStateAction<any[]>>,
) => {
  useEffect(() => {
    const onMessage = (data: any) => {
      setMessages((prevMessages) => [...prevMessages, data]);
      if (data.receiver_id === user_id) {
        socket.emit("readMessage", chat_id);
      }
    };

    socket.on("message", onMessage);

    return () => {
      socket.off("message", onMessage);
    };
  }, [chat_id, user_id]);
};

export default useChatSocket;
