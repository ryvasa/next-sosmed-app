// hooks/useChatSocket.ts
import { useEffect } from "react";
import { messageSocket } from "../socket/socket";

const useChatSocket = (
  chat_id: string,
  user_id: string,
  setMessages: React.Dispatch<React.SetStateAction<any[]>>,
) => {
  useEffect(() => {
    const onMessage = (data: any) => {
      setMessages((prevMessages) => [data, ...prevMessages]);
      if (data.receiver_id === user_id) {
        messageSocket.emit("readMessage", chat_id);
      }
    };

    messageSocket.on("message", onMessage);

    return () => {
      messageSocket.off("message", onMessage);
    };
  }, [chat_id, user_id]);
};

export default useChatSocket;
