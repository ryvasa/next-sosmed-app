'use client';
import ChatForm from '@/components/forms/ChatForm';
import ChatBubbleRight from '@/components/shared/ChatBubbleRight';
import ChatBubbleLeft from '@/components/shared/ChatBubbleLeft';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import {
  fetchGetMessages,
  fetchGetOneChat,
  fetchGetUnreadedMessages,
} from '../../../../../libs/api/api';
import { messageSocket } from '../../../../../libs/socket/socket';
import useChatSocket from '../../../../../libs/hooks/useChatSocket';
import useReadMessage from '@/libs/hooks/useReadMessage';
import useRoom from '@/libs/hooks/useRoom';
import { messagesStore, userStore } from '@/store';
import InfiniteScroll from 'react-infinite-scroll-component';
import ChatList from '../../../../../components/shared/ChatList';

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
    messageSocket.emit('readMessage', chat_id);
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
    messageSocket.emit('message', data);
    scrollToBottom();
  };

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex gap-5 ">
      {/* <div className="flex-1 pt-10">
        <ChatList />
      </div> */}
      <div className="lg:flex-1 py-10 relative w-full flex flex-col">
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
