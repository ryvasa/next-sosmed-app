"use client";
import ChatForm from "@/components/forms/ChatForm";
import ChatBubbleLeft from "@/components/shared/ChatBubbleLeft";
import ChatBubbleRight from "@/components/shared/ChatBubbleRight";
import DeleteChatButton from "@/components/shared/DeleteChatButton";
import { formaterDateChat } from "@/helper/formaterTime";
import useReadMessage from "@/libs/hooks/useReadMessage";
import useRoom from "@/libs/hooks/useRoom";
import { messagesStore, userStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  fetchGetCountMessages,
  fetchGetMessages,
  fetchGetUnreadedMessages,
} from "../../libs/api/api";
import useChatSocket from "../../libs/hooks/useChatSocket";
import { messageSocket } from "../../libs/socket/socket";
import image from "../../public/pf.jpg";
import useScrollStatus from "@/libs/hooks/useScrollStatus";

const ChatContent = () => {
  const [countMessages, setCountMessages] = useState({ data: 0 });
  const [visibleTrigger, setVisibleTrigger] = useState(false);
  const { chat_id } = useParams();
  const [messages, setMessages] = useState<any[]>([]);
  const { user } = userStore((state: any) => state);
  const { updateUnreadedMessages } = messagesStore((state: any) => state);
  const fetchUnreadedMessage = async () => {
    const response = await fetchGetUnreadedMessages();
    updateUnreadedMessages(response.data);
  };
  const isScrolling = useScrollStatus();
  useEffect(() => {
    fetchUnreadedMessage();
    messageSocket.emit("readMessage", chat_id);
  }, []);

  useRoom(chat_id as string);
  useChatSocket(chat_id as string, user.id, setMessages);

  const getAnotherMessages = async () => {
    if (visibleTrigger && messages.length !== countMessages.data) {
      const response = await fetchGetMessages(
        chat_id as string,
        messages.length,
      );
      setMessages((prevComments) => [...prevComments, ...response.data]);
    }
  };
  const getMessages = async () => {
    if (chat_id) {
      const response = await fetchGetMessages(chat_id as string);
      const countMessage = await fetchGetCountMessages(chat_id as string);
      setMessages(response.data);
      setCountMessages(countMessage);
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
  };

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current && messages.length !== countMessages.data) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  function isVisible(domElement: HTMLElement) {
    if (domElement) {
      return new Promise((resolve) => {
        const o = new IntersectionObserver(([entry]) => {
          resolve(entry.intersectionRatio === 1);
          o.disconnect();
        });
        o.observe(domElement);
      });
    }
  }
  window.onscroll = async function () {
    const visibleBottomMessage = await isVisible(
      document.querySelector(".bottomMessage"),
    );
    if (visibleBottomMessage) {
      setTimeout(() => {
        document.querySelector(".myElement")?.classList.remove("hidden");
      }, 200);
    }
    const visible = await isVisible(document.querySelector(".myElement"));
    if (messages.length > 0) {
      setVisibleTrigger(visible as any);
    }
  };
  useEffect(() => {
    getAnotherMessages();
  }, [visibleTrigger]);

  return (
    <>
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
              src={user.avatar ? `http://localhost:3000/${user.avatar}` : image}
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
        <div className="flex flex-col-reverse pb-10 min-h-screen">
          <div className=" h-5 mt-14" ref={messagesEndRef} />
          {messages.map((message: any, index: number) => {
            const currentDate = formaterDateChat(message.created_at);
            const prevDate = formaterDateChat(messages[index + 1]?.created_at);

            return (
              <div
                key={index}
                className={`${index === messages.length - 3 && "myElement hidden"} ${index === messages.length - 8 && "bottomMessage"}`}
              >
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
          <div className="myElement bg-red-700 h- hidden" />
        </div>
        <div className="bottom-0 absolute">
          <ChatForm submit={handleSubmit} />
        </div>
      </div>
    </>
  );
};

export default ChatContent;
