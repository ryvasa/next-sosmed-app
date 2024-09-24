'use client';
import { useEffect, useRef, useState } from 'react';
import Peer from 'simple-peer';
import { io } from 'socket.io-client';
import { CallOff, CameraOn, Close, MicOn, Screen } from '../ui/icons';

const socket = io('http://localhost:3000/video-call');

// function VideoCall() {
//   const [me, setMe] = useState('');
//   const [stream, setStream] = useState(null);
//   const [receivingCall, setReceivingCall] = useState(false);
//   const [caller, setCaller] = useState('');
//   const [callerSignal, setCallerSignal] = useState(null);
//   const [callAccepted, setCallAccepted] = useState(false);
//   const [idToCall, setIdToCall] = useState('');
//   const [callEnded, setCallEnded] = useState(false);
//   const [name, setName] = useState('');

//   const [open, setOpen] = useState(false);

//   const userVideo = useRef<any>(null);
//   const connectionRef = useRef<any>(null);
//   const myVideo = useRef<any>(null);

//   useEffect(() => {
//     if (open) {
//       socket.emit('joinRoom', '123');

//       navigator.mediaDevices
//         .getUserMedia({ video: true, audio: true })
//         .then((stream: any) => {
//           setStream(stream);
//           if (myVideo.current) {
//             myVideo.current.srcObject = stream;
//           }
//         })
//         .catch((error) => {
//           console.error('Error accessing media devices:', error);
//         });

//       socket.on('me', (id) => {
//         console.log(id);
//         setMe(id);
//       });

//       socket.on('callUser', (data) => {
//         setReceivingCall(true);
//         setCaller(data.from);
//         setName(data.name);
//         setCallerSignal(data.signal);
//       });
//     }
//   }, [open]);

//   const callUser = (id: any) => {
//     const peer = new Peer({
//       initiator: true,
//       trickle: false,
//       stream: stream,
//     });

//     peer.on('signal', (data: any) => {
//       socket.emit('callUser', {
//         userToCall: id,
//         signalData: data,
//         from: me,
//         name: name,
//       });
//     });

//     peer.on('stream', (stream: any) => {
//       if (userVideo.current) {
//         userVideo.current.srcObject = stream;
//       }
//     });

//     socket.on('callAccepted', (signal) => {
//       setCallAccepted(true);
//       peer.signal(signal);
//     });

//     connectionRef.current = peer;
//   };

//   const answerCall = () => {
//     setCallAccepted(true);
//     const peer = new Peer({
//       initiator: false,
//       trickle: false,
//       stream: stream,
//     });

//     peer.on('signal', (data: any) => {
//       socket.emit('answerCall', { signal: data, to: caller });
//     });

//     peer.on('stream', (stream: any) => {
//       if (userVideo.current) {
//         userVideo.current.srcObject = stream;
//       }
//     });

//     peer.signal(callerSignal);
//     connectionRef.current = peer;
//   };

//   const leaveCall = () => {
//     setCallEnded(true);
//     if (connectionRef.current) {
//       connectionRef.current.destroy();
//     }
//   };

//   return (
//     <>
//       <button
//         className="text-primary"
//         onClick={() => {
//           setOpen(true);
//           if (document) {
//             (document.getElementById('call') as HTMLFormElement).showModal();
//           }
//         }}
//       >
//         <CameraOn />
//       </button>
//       <dialog id="call" className="modal">
//         <div className="modal-box w-[95%] max-w-5xl h-5/6 p-0 m-0">
//           <div className="absolute bottom-10 right-10 z-10">
//             <div className="video">
//               {stream && (
//                 <video
//                   className="rounded-md"
//                   playsInline
//                   muted
//                   ref={myVideo}
//                   autoPlay
//                   style={{ width: '250px' }}
//                 />
//               )}
//             </div>
//             <span className="text-white font-bold text-lg mb-4">{caller}</span>
//             {/*
//              */}
//             <p className="text-white">{me}</p>
//           </div>

//           <div className="h-full w-full relative ">
//             {callAccepted && !callEnded ? (
//               <video
//                 className="w-full h-full"
//                 playsInline
//                 ref={userVideo}
//                 autoPlay
//               />
//             ) : (
//               <img
//                 src="https://w0.peakpx.com/wallpaper/416/423/HD-wallpaper-devil-boy-in-mask-red-hoodie-dark-background-4ef517.jpg"
//                 className="object-contain w-full h-full border"
//                 alt="User Avatar"
//               />
//             )}
//             <div className="flex gap-8 absolute bottom-6 justify-center items-center w-full z-10">
//               <button className="btn btn-circle btn-primary">
//                 <CameraOn />
//               </button>
//               <button className="btn btn-circle btn-primary">
//                 <MicOn />
//               </button>
//               <button className="btn btn-circle btn-primary">
//                 <Screen />
//               </button>
//               <button className="btn btn-circle btn-error">
//                 <CallOff />
//               </button>
//             </div>
//           </div>
//           <div className="absolute top-0 left-0 bg-red-700">
//             <textarea
//               className="text-black"
//               value={idToCall}
//               onChange={(e) => {
//                 setIdToCall(e.target.value);
//               }}
//             />
//             <div>
//               {callAccepted && !callEnded ? (
//                 <button
//                   className="text-black hover:text-gray-400 mr-6 font-bold bg-white rounded-md m-4 px-2"
//                   onClick={leaveCall}
//                 >
//                   End Call
//                 </button>
//               ) : (
//                 <button
//                   className="text-black hover:text-gray-400 mr-6 font-bold bg-white rounded-md m-4 px-2"
//                   onClick={() => callUser(idToCall)}
//                 >
//                   Call
//                 </button>
//               )}
//             </div>
//             <div className="text-white">
//               {receivingCall && !callAccepted ? (
//                 <div className="caller flex flex-col">
//                   <h1 className="text-white">{caller} is calling...</h1>
//                   <button
//                     className="text-black text-xl hover:text-gray-400 mr-6 font-bold bg-white rounded-md m-4 px-2"
//                     onClick={answerCall}
//                   >
//                     Answer
//                   </button>
//                 </div>
//               ) : null}
//             </div>
//           </div>
//           {/*

//         */}
//           <div className="modal-action absolute -top-3 right-4">
//             <form method="dialog">
//               {/* if there is a button, it will close the modal */}

//               <button
//                 onClick={() => {
//                   setOpen(false);
//                 }}
//                 className="btn btn-ghost btn-circle btn-sm flex justify-center items-center"
//               >
//                 <Close c={'text-error'} />
//               </button>
//             </form>
//           </div>
//         </div>
//       </dialog>
//     </>
//   );
// }

function VideoCall({ userId }: { userId: string }) {
  const [me, setMe] = useState('');
  const [stream, setStream] = useState(null);
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState('');
  const [callerSignal, setCallerSignal] = useState(null);
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);

  const [open, setOpen] = useState(false);

  const userVideo = useRef<any>(null);
  const connectionRef = useRef<any>(null);
  const myVideo = useRef<any>(null);

  const callUser = (id: any) => {
    console.log(id);
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });

    peer.on('signal', (data: any) => {
      console.log(data);
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
    if (open) {
      socket.emit('joinRoom', '123');

      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream: any) => {
          setStream(stream);
          console.log(stream);
          if (myVideo.current) {
            myVideo.current.srcObject = stream;
          }
        })
        .catch((error) => {
          console.error('Error accessing media devices:', error);
        });

      socket.on('me', (id) => {
        setMe(id);
      });

      socket.on('callUser', (data) => {
        console.log(data);
        setReceivingCall(true);
        setCaller(data.from);
        setCallerSignal(data.signal);
      });

      callUser(userId);
    }
  }, [open]);

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
  };

  return (
    <>
      <button
        className="text-primary"
        onClick={() => {
          setOpen(true);
          if (document) {
            (document.getElementById('call') as HTMLFormElement).showModal();
          }
        }}
      >
        <CameraOn />
      </button>
      <dialog id="call" className="modal">
        <div className="modal-box w-[95%] max-w-5xl h-5/6 p-0 m-0">
          <div className="absolute bottom-10 right-10 z-10">
            <div className="video">
              {stream && (
                <video
                  className="rounded-md"
                  playsInline
                  muted
                  ref={myVideo}
                  autoPlay
                  style={{ width: '250px' }}
                />
              )}
            </div>
            <span className="text-white font-bold text-lg mb-4">{caller}</span>
            {/*
             */}
            <p className="text-white">{me}</p>
          </div>

          <div className="h-full w-full relative ">
            {callAccepted && !callEnded ? (
              <video
                className="w-full h-full"
                playsInline
                ref={userVideo}
                autoPlay
              />
            ) : (
              <img
                src="https://w0.peakpx.com/wallpaper/416/423/HD-wallpaper-devil-boy-in-mask-red-hoodie-dark-background-4ef517.jpg"
                className="object-contain w-full h-full border"
                alt="User Avatar"
              />
            )}
            <div className="flex gap-8 absolute bottom-6 justify-center items-center w-full z-10">
              <button className="btn btn-circle btn-primary">
                <CameraOn />
              </button>
              <button className="btn btn-circle btn-primary">
                <MicOn />
              </button>
              <button className="btn btn-circle btn-primary">
                <Screen />
              </button>
              <div className="modal-actiong ">
                <form method="dialog ">
                  {/* if there is a button, it will close the modal */}
                  <button
                    onClick={() => {
                      leaveCall();
                      setOpen(false);
                    }}
                    className="btn btn-circle btn-error"
                  >
                    <CallOff />
                  </button>
                </form>
              </div>
            </div>
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
          <div className="modal-action absolute -top-3 right-4">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}

              <button
                onClick={() => {
                  setOpen(false);
                }}
                className="btn btn-ghost btn-circle btn-sm flex justify-center items-center"
              >
                <Close c={'text-error'} />
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default VideoCall;
