'use client';

import { useEffect, useState } from 'react';
import { callSocket } from '../../libs/socket/socket';

const CallAllert = () => {
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState('');
  const [callerSignal, setCallerSignal] = useState<any>();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    callSocket.emit('call');

    callSocket.on('callUser', (data) => {
      setOpen(true);
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
    });
  }, []);
  useEffect(() => {
    open && document.querySelector('#call')?.classList.add('modal-open');
  }, [open]);
  const closeModal = () => {
    document.querySelector('#call')?.classList.remove('modal-open');
  };
  return (
    <>
      <div id="call" className="modal" role="dialog">
        <div className="modal-box bg-white absolute z-50">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">This modal works with a hidden checkbox!</p>
          <div className="modal-action">
            <button className="btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallAllert;
