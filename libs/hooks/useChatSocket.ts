// hooks/useChatSocket.ts
import { useEffect } from 'react';
import { socket } from '../socket/socket';

const useChatSocket = (
  chat_id: string,
  setMessages: React.Dispatch<React.SetStateAction<any[]>>
) => {
  useEffect(() => {
    const onConnect = () => {
      socket.io.engine.on('upgrade', (transport) => {
        console.log(`Connected, transport: ${transport}`);
      });
    };

    const onDisconnect = () => {
      console.log('Disconnected');
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
  }, [chat_id]);
};

export default useChatSocket;
