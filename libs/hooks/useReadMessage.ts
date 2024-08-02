// hooks/useChatSocket.ts
import { useEffect } from "react";
import { socket } from "../socket/socket";

const useReadMessage = (
  room: string,
  // fetchData: any,
  setMessages: React.Dispatch<React.SetStateAction<any[]>>,
) => {
  useEffect(() => {
    const handleReadMessage = (data: any) => {
      console.log("from message");
      setMessages((prevMessages) =>
        prevMessages.map((message) =>
          message.chat_id === room && message.readed === false
            ? { ...message, readed: true }
            : message,
        ),
      );
    };

    socket.on("readMessage", handleReadMessage);

    return () => {
      socket.off("readMessage", handleReadMessage);
    };
  }, [room]);
};

export default useReadMessage;
