'use client';
import ChatForm from '@/components/forms/ChatForm';
import ChatBubbleRight from '@/components/shared/ChatBubbleRight';
import ChatBubbleLeft from '@/components/shared/ChatBubbleLeft';
import { useEffect, useState } from 'react';
import { socket } from '../../../../../service/socket';

const Page = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState('N/A');
  const [messages, setMessages] = useState([]);
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
      setMessages((prevMessages) => [...prevMessages, data]);
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

  const handleSubmit = (data: string) => {
    socket.emit('messages', data);
  };
  return (
    <div className="py-10 relative w-full flex flex-col">
      <div className="flex flex-col pb-10">
        <ChatBubbleLeft />
        <ChatBubbleRight /> <ChatBubbleLeft />
        <ChatBubbleRight /> <ChatBubbleLeft />
        <ChatBubbleRight /> <ChatBubbleLeft />
        <ChatBubbleRight /> <ChatBubbleLeft />
        <ChatBubbleRight /> <ChatBubbleLeft />
        <ChatBubbleRight /> <ChatBubbleLeft />
        <ChatBubbleRight />
        {messages.map((message: any, index: number) => (
          <div key={index}>
            {message.senderId === user.id ? (
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
