'use client';
import { useEffect } from 'react';
import { useSocket } from './useSocket';

export const useUserActivity = () => {
  const socket = useSocket(); // Pastikan ini hanya digunakan di dalam komponen yang dipasang.

  useEffect(() => {
    if (!socket) return;

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        socket.emit('setActive');
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [socket]);
};
