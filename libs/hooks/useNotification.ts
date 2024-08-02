'use client';
import { useEffect } from 'react';
import { io } from 'socket.io-client';

export const useNotification = (fetchData: any) => {
  const socket = io('http://localhost:3000/notifications', {
    withCredentials: true,
  });

  useEffect(() => {
    const onConnect = () => {
      socket.io.engine.on('upgrade', (transport) => {
        console.log(transport);
      });
    };

    const onDisconnect = () => {
      console.log('Disconnected');
    };

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('notify', (data: any) => {
      fetchData();
    });

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('notify', (data: any) => {
        console.log(data);
      });
    };
  }, []);
};
