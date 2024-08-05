"use client";
import ChatForm from "@/components/forms/ChatForm";
import ChatBubbleRight from "@/components/shared/ChatBubbleRight";
import ChatBubbleLeft from "@/components/shared/ChatBubbleLeft";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import {
  fetchGetMessages,
  fetchGetUnreadedMessages,
} from "../../../../../libs/api/api";
import { messageSocket } from "../../../../../libs/socket/socket";
import useChatSocket from "../../../../../libs/hooks/useChatSocket";
import useReadMessage from "@/libs/hooks/useReadMessage";
import useRoom from "@/libs/hooks/useRoom";
import { messagesStore, userStore } from "@/store";
import { formaterDateChat } from "@/helper/formaterTime";
import { useUserActive } from "@/libs/hooks/useUserActive";

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
    messageSocket.emit("readMessage", chat_id);
  }, []);

  useRoom(chat_id as string);
  useChatSocket(chat_id as string, user.id, setMessages);
  const getMessages = async () => {
    if (chat_id) {
      const response = await fetchGetMessages(chat_id as string);
      setMessages(response.data.reverse());
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  useEffect(() => {
    getMessages();
  }, [chat_id]);
  useReadMessage(chat_id as string, setMessages);
  const handleSubmit = (data: string) => {
    messageSocket.emit("message", data);
    scrollToBottom();
  };

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="lg:bg-white flex gap-5 w-full dark:lg:bg-dark-md lg:p-6 ">
      <div className="lg:flex-1 py-10 relative w-full flex flex-col">
        <div className="flex flex-col pb-10">
          {messages.map((message: any, index: number) => {
            const currentDate = formaterDateChat(message.created_at);
            const prevDate =
              index > 0 ? formaterDateChat(messages[index - 1].created_at) : "";

            return (
              <div key={index}>
                {currentDate !== prevDate && (
                  <div className="text-center border-gray-200 dark:border-gray-700 p-2">
                    <span className="text-gray-500 dark:text-gray-400 text-sm pt-10">
                      {currentDate}
                    </span>
                  </div>
                )}
                {message.sender_id === user?.id ? (
                  <ChatBubbleRight data={message} />
                ) : (
                  <ChatBubbleLeft data={message} />
                )}
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>
        <div className="relative">
          <ChatForm submit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Page;
