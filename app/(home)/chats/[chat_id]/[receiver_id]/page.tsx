'use client';
import ChatForm from '@/components/forms/ChatForm';
import ChatBubbleRight from '@/components/shared/ChatBubbleRight';
import ChatBubbleLeft from '@/components/shared/ChatBubbleLeft';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchGetOneChat } from '../../../../../libs/api/api';
import { socket } from '../../../../../libs/socket/socket';
import useChatSocket from '../../../../../libs/hooks/useChatSocket';
import useRoom from '../../../../../libs/hooks/useRoom';

const Page = () => {
  const { chat_id } = useParams();
  const [messages, setMessages] = useState<any[]>([]);
  const [user, setUser] = useState({ username: '', avatar: '', id: '' });

  useEffect(() => {
    const data = localStorage.getItem('user');
    if (data) {
      const response = JSON.parse(data);
      setUser(response.data);
    }
  }, []);

  useRoom(chat_id as string); // Menggunakan custom hook untuk bergabung dan meninggalkan room
  useChatSocket(chat_id as string, setMessages);

  useEffect(() => {
    // Fetch messages for the new chat
    const getMessages = async () => {
      if (chat_id) {
        const response = await fetchGetOneChat(chat_id as string);
        setMessages(response.data.messages);
      }
    };

    getMessages();
  }, [chat_id]);

  const handleSubmit = (data: string) => {
    socket.emit('messages', data);
  };
  return (
    <div className="py-10 relative w-full flex flex-col">
      <div className="flex flex-col pb-10">
        {messages.map((message: any, index: number) => (
          <div key={index}>
            {message.sender_id === user.id ? (
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
