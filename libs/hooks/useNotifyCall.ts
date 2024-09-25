import { useEffect } from 'react';
import { callSocket } from '../socket/socket';

const useCall = () => {
  useEffect(() => {
    callSocket.emit('call');
  }, []);
};

export default useCall;
