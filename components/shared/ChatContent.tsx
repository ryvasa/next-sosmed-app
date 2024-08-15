"use client";
import ChatForm from "@/components/forms/ChatForm";
import ChatBubbleLeft from "@/components/shared/ChatBubbleLeft";
import ChatBubbleRight from "@/components/shared/ChatBubbleRight";
import DeleteChatButton from "@/components/shared/DeleteChatButton";
import { formaterDateChat } from "@/helper/formaterTime";
import useReadMessage from "@/libs/hooks/useReadMessage";
import useChatRoom from "@/libs/hooks/useChatRoom";
import { messagesStore, userStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  fetchGetCountMessages,
  fetchGetMessages,
  fetchGetOneUser,
  fetchGetUnreadedMessages,
} from "../../libs/api/api";
import useChatSocket from "../../libs/hooks/useChatSocket";
import { messageSocket } from "../../libs/socket/socket";
import image from "../../public/pf.jpg";
import useActiveStatus from "@/libs/hooks/useActiveStatus";

const ChatContent = () => {
  const [countMessages, setCountMessages] = useState({ data: 0 });
  const [receiverUser, setReceiverUser] = useState({
    avatar: "",
    id: "",
    username: "",
    active: "",
  });
  const [visibleTrigger, setVisibleTrigger] = useState(false);
  const { chat_id } = useParams();
  const [messages, setMessages] = useState<any[]>([]);
  const { user } = userStore((state: any) => state);
  const { updateUnreadedMessages } = messagesStore((state: any) => state);
  const fetchUnreadedMessage = async () => {
    const response = await fetchGetUnreadedMessages();
    updateUnreadedMessages(response.data);
  };
  const { receiver_id } = useParams();
  async function fetchReceiverUser() {
    if (receiver_id) {
      const response = await fetchGetOneUser(receiver_id as string);
      setReceiverUser(response.data);
    }
  }

  useEffect(() => {
    fetchReceiverUser();
  }, [receiver_id]);
  useEffect(() => {
    fetchUnreadedMessage();
    messageSocket.emit("readMessage", chat_id);
  }, []);

  useChatRoom(chat_id as string);
  useChatSocket(chat_id as string, user.id, setMessages);

  const getAnotherMessages = async () => {
    if (visibleTrigger && messages.length !== countMessages.data) {
      const response = await fetchGetMessages(
        chat_id as string,
        messages.length,
      );
      setMessages((prevComments: any) => [...prevComments, ...response.data]);
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
  useActiveStatus(fetchReceiverUser);

  useReadMessage(chat_id as string, setMessages);
  const handleSubmit = (data: string) => {
    messageSocket.emit("message", data);
  };

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
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
      document.querySelector(".bottomMessage") as HTMLElement,
    );
    if (visibleBottomMessage) {
      setTimeout(() => {
        document.querySelector(".myElement")?.classList.remove("hidden");
      }, 200);
    }
    const visible = await isVisible(
      document.querySelector(".myElement") as HTMLElement,
    );
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
          href={`/users/${receiverUser.id}`}
        >
          <div
            className={`avatar-profile ${
              receiverUser.active && "avatar-profile-online"
            } outline-offset-2`}
          >
            <Image
              alt="profile"
              width={10000}
              height={10000}
              style={{ width: "112px", height: `112px` }}
              src={
                receiverUser.avatar
                  ? `${process.env.NEXT_PUBLIC_API_URL}/${receiverUser.avatar}`
                  : image
              }
              quality={1}
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-lg">{receiverUser.username}</p>
            {receiverUser.active && (
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
          <div className="" ref={messagesEndRef} />
          {messages.map((message: any, index: number) => {
            const currentDate = formaterDateChat(message.created_at);
            const prevDate = formaterDateChat(messages[index + 1]?.created_at);

            return (
              <div
                key={index}
                className={`${
                  index === messages.length - 3 && "myElement hidden"
                } ${index === messages.length - 8 && "bottomMessage"}`}
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
          <div className="myElement bg-red-700 h-5 hidden" />
        </div>
        <div className="bottom-0 absolute">
          <ChatForm submit={handleSubmit} />
        </div>
      </div>
    </>
  );
};

export default ChatContent;
