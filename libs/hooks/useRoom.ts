import { useEffect } from 'react';
import { socket } from '../socket/socket';

const useRoom = (chat_id: string | null) => {
  useEffect(() => {
    if (chat_id) {
      // Bergabung dengan room
      socket.emit('joinRoom', chat_id);

      // Cleanup saat komponen di-unmount atau chat_id berubah
      return () => {
        socket.emit('leaveRoom', chat_id);
      };
    }
  }, [chat_id]);
};

export default useRoom;
