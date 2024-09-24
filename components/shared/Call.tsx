'use client';
import { useEffect, useRef, useState } from 'react';
import Peer from 'simple-peer';
import { io } from 'socket.io-client';
import { CallOff, CameraOn, MicOn, Screen } from '../ui/icons';
import { useParams, useRouter } from 'next/navigation';

const socket = io('http://localhost:3000/calls', {
  withCredentials: true,
});

const Call = () => {
  const [me, setMe] = useState('');
  const [stream, setStream] = useState(null);
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState('');
  const [callerSignal, setCallerSignal] = useState(null);
  const [callAccepted, setCallAccepted] = useState(false);
  const [idToCall, setIdToCall] = useState('');
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState('');
  const { id } = useParams();

  const userVideo = useRef<any>(null);
  const connectionRef = useRef<any>(null);
  const myVideo = useRef<any>(null);
  const router = useRouter();

  const callUser = (id: any) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });

    peer.on('signal', (data: any) => {
      socket.emit('callUser', {
        userToCall: id,
        signalData: data,
        from: me,
        name: name,
      });
    });

    peer.on('stream', (stream: any) => {
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    });

    socket.on('callAccepted', (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };
  useEffect(() => {
    socket.emit('call');

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream: any) => {
        setStream(stream);
        if (myVideo.current) {
          myVideo.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error('Error accessing media devices:', error);
      });

    socket.on('me', (id) => {
      console.log(id);
      setMe(id);
    });

    socket.on('callUser', (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setName(data.name);
      setCallerSignal(data.signal);
    });
  }, []);

  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });

    peer.on('signal', (data: any) => {
      socket.emit('answerCall', { signal: data, to: caller });
    });

    peer.on('stream', (stream: any) => {
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    });

    peer.signal(callerSignal);
    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    if (connectionRef.current) {
      connectionRef.current.destroy();
    }

    router.push('/users');
  };

  return (
    <div className="bg-dark-xl h-screen w-screen">
      <div className="absolute z-10 right-4 bottom-4">
        <div className="video">
          {stream && (
            <video
              className="rounded-md"
              playsInline
              muted
              ref={myVideo}
              autoPlay
              style={{ width: '300px' }}
            />
          )}
        </div>
        <span className="text-white font-bold text-lg mb-4">{caller}</span>
        <p className="text-white">{me}</p>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        {callAccepted && !callEnded ? (
          <video
            className="rounded-md w-full h-screen"
            playsInline
            ref={userVideo}
            autoPlay
          />
        ) : (
          <img
            src="https://w0.peakpx.com/wallpaper/416/423/HD-wallpaper-devil-boy-in-mask-red-hoodie-dark-background-4ef517.jpg"
            className="rounded-md h-full object-contain"
            alt="User Avatar"
          />
        )}
      </div>
      <div className="flex gap-8 absolute bottom-6 justify-center items-center w-full z-[9]">
        <button className="btn btn-circle btn-primary">
          <CameraOn />
        </button>
        <button className="btn btn-circle btn-primary">
          <MicOn />
        </button>
        <button className="btn btn-circle btn-primary">
          <Screen />
        </button>

        <button
          onClick={() => {
            leaveCall();
          }}
          className="btn btn-circle btn-error"
        >
          <CallOff />
        </button>
      </div>
      <div className="absolute top-0">
        <textarea
          className="text-black"
          value={idToCall}
          onChange={(e) => {
            setIdToCall(e.target.value);
          }}
        />
        <div>
          {callAccepted && !callEnded ? (
            <button
              className="text-black hover:text-gray-400 mr-6 font-bold bg-white rounded-md m-4 px-2"
              onClick={leaveCall}
            >
              End Call
            </button>
          ) : (
            <button
              className="text-black hover:text-gray-400 mr-6 font-bold bg-white rounded-md m-4 px-2"
              onClick={() => callUser(id)}
            >
              Call
            </button>
          )}
        </div>
        <div className="text-white">
          {receivingCall && !callAccepted ? (
            <div className="caller flex flex-col">
              <h1 className="text-white">{caller} is calling...</h1>
              <button
                className="text-black text-xl hover:text-gray-400 mr-6 font-bold bg-white rounded-md m-4 px-2"
                onClick={answerCall}
              >
                Answer
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Call;
