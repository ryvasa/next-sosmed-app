"use client";
import ChatForm from "@/components/forms/ChatForm";
import ChatBubbleRight from "@/components/shared/ChatBubbleRight";
import ChatBubbleLeft from "@/components/shared/ChatBubbleLeft";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  fetchGetOneChat,
  fetchGetUnreadedMessages,
} from "../../../../../libs/api/api";
import { socket } from "../../../../../libs/socket/socket";
import useChatSocket from "../../../../../libs/hooks/useChatSocket";
import useReadMessage from "@/libs/hooks/useReadMessage";
import useRoom from "@/libs/hooks/useRoom";
import { messagesStore, userStore } from "@/store";

const Page = () => {
  const { chat_id } = useParams();
  const [messages, setMessages] = useState<any[]>([]);
  const { user } = userStore((state: any) => state);
  const { updateUnreadedMessages } = messagesStore((state: any) => state);

  const fetchUnreadedMessage = async () => {
    const response = await fetchGetUnreadedMessages();
    updateUnreadedMessages(response.data);
  };

  useEffect(() => {
    fetchUnreadedMessage();
  }, []);

  // user id undefined
  useRoom(chat_id as string);
  useChatSocket(chat_id as string, user.id, setMessages);
  const getMessages = async () => {
    if (chat_id) {
      const response = await fetchGetOneChat(chat_id as string);
      setMessages(response.data.messages);
    }
  };
  useEffect(() => {
    socket.emit("readMessage", chat_id);
  }, []);
  useEffect(() => {
    console.log(user?.id);
    getMessages();
  }, [chat_id]);
  useReadMessage(chat_id as string, setMessages);
  const handleSubmit = (data: string) => {
    socket.emit("message", data);
  };
  return (
    <div className="py-10 relative w-full flex flex-col">
      <div className="flex flex-col pb-10">
        {messages.map((message: any, index: number) => (
          <div key={index}>
            {message.sender_id === user?.id ? (
              <ChatBubbleRight data={message} />
            ) : (
              <ChatBubbleLeft data={message} />
            )}
          </div>
        ))}
      </div>

      <ChatForm submit={handleSubmit} />
    </div>
  );
};

export default Page;
