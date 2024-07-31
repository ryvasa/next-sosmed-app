'use client';
import ChatForm from '@/components/forms/ChatForm';
import ChatBubbleRight from '@/components/shared/ChatBubbleRight';
import ChatBubbleLeft from '@/components/shared/ChatBubbleLeft';
import { useEffect, useState } from 'react';
import { socket } from '../../../../../service/socket';
import { useParams } from 'next/navigation';
import { fetchGetOneChat } from '../../../../../service/api';

const Page = () => {
  const [room, setRoom] = useState(useParams().chat_id);
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState('N/A');
  const [messages, setMessages] = useState([]);
  const { chat_id } = useParams();
  const [user, setUser] = useState({
    username: '',
    avatar: '',
    id: '',
  });

  useEffect(() => {
    const data = localStorage.getItem('user');
    if (!data) {
      return;
    }
    const response = JSON.parse(data);
    setUser(response.data);

    const onConnect = () => {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);
      socket.io.engine.on('upgrade', (transport) => {
        setTransport(transport.name);
      });
    };

    const onDisconnect = () => {
      setIsConnected(false);
      setTransport('N/A');
    };

    const onMessage = (data: any) => {
      console.log('Message received:', data);
      setMessages((prevMessages: any) => [...prevMessages, data] as any);
    };

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('messages', onMessage);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('messages', onMessage);
    };
  }, []);

  useEffect(() => {
    // Leave the current room when chat_id changes
    if (room) {
      socket.emit('leaveRoom', room);
    }

    // Join the new room
    setRoom(chat_id);
    socket.emit('joinRoom', chat_id);

    // Fetch messages for the new chat
    const getMessages = async () => {
      const response = await fetchGetOneChat(chat_id as string);
      console.log(response.data);
      setMessages(response.data.messages);
    };

    getMessages();

    // Cleanup function to leave the room when the component unmounts
    return () => {
      if (room) {
        socket.emit('leaveRoom', room);
      }
    };
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

      <div>
        <p>Status: {isConnected ? 'connected' : 'disconnected'}</p>
        <p>Transport: {transport}</p>
      </div>
      <ChatForm submit={handleSubmit} />
    </div>
  );
};

export default Page;
