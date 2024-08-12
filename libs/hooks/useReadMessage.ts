// hooks/useChatSocket.ts
import { useEffect } from "react";
import { messageSocket } from "../socket/socket";

const useReadMessage = (
  room: string,
  // fetchData: any,
  setMessages: React.Dispatch<React.SetStateAction<any[]>>,
) => {
  useEffect(() => {
    const handleReadMessage = (data: any) => {
      setMessages((prevMessages) =>
        prevMessages.map((message) =>
          message.chat_id === room && message.readed === false
            ? { ...message, readed: true }
            : message,
        ),
      );
    };

    messageSocket.on("readMessage", handleReadMessage);

    return () => {
      messageSocket.off("readMessage", handleReadMessage);
    };
  }, [room]);
};

export default useReadMessage;
