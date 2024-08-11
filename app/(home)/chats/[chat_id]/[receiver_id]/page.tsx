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
import DeleteChatButton from "@/components/shared/DeleteChatButton";
import Link from "next/link";
import image from "../../../../../public/pf.jpg";
import Image from "next/image";

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
    <>
      <div className="pt-16 lg:pt-20 flex gap-5 w-full min-h-screen dark:bg-dark-md lg:p-6 relative ">
        <div className="fixed hidden lg:flex top-0 left-[4.74%] right-[22.3%] w-[72.75%] z-10 bg-white dark:bg-dark-md/70 shadow-md backdrop-blur-sm justify-between items-center p-4 ">
          <Link
            className="flex gap-4 justify-center items-center"
            href={`/users/${user.id}`}
          >
            <div
              className={`avatar-profile ${user.active && "avatar-profile-online"} outline-offset-2`}
            >
              <Image
                alt="profile"
                width={user.avatar && 10000}
                height={user.avatar && 10000}
                style={user.avatar && { width: "112px", height: `112px` }}
                src={
                  user.avatar ? `http://localhost:3000/${user.avatar}` : image
                }
                quality={1}
              />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-lg">{user.username}</p>
              {user.active && (
                <p className="text-xs font-semibold lg:text-sm text-success">
                  Online
                </p>
              )}
            </div>
          </Link>
          <DeleteChatButton />
        </div>
        <div className="lg:flex-1 py-10 relative w-full flex flex-col">
          <div className="flex flex-col pb-10">
            {messages.map((message: any, index: number) => {
              const currentDate = formaterDateChat(message.created_at);
              const prevDate =
                index > 0
                  ? formaterDateChat(messages[index - 1].created_at)
                  : "";

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
    </>
  );
};

export default Page;
