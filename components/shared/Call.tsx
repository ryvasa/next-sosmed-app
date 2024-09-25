"use client";
import { useEffect, useRef, useState } from "react";
import Peer from "simple-peer";
import { CallOff, CallOn, CameraOn, MicOn, Screen } from "../ui/icons";
import { useParams, useRouter } from "next/navigation";
import { callStore, userStore } from "../../store";
import { callSocket } from "../../libs/socket/socket";

const Call = () => {
  const [stream, setStream] = useState(null);
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const { id } = useParams();
  const { user } = userStore((state: any) => state);
  const [isCalling, setIsCalling] = useState(false);
  const { call, calling, updateCall } = callStore((state: any) => state);

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

    peer.on("signal", (data: any) => {
      callSocket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: user.id,
      });
    });

    peer.on("stream", (stream: any) => {
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    });

    callSocket.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });

    peer.on("signal", (data: any) => {
      console.log(data);
      callSocket.emit("answerCall", { signal: data, to: call.caller });
    });

    peer.on("stream", (stream: any) => {
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    });

    peer.signal(call.callerSignal);
    connectionRef.current = peer;
  };

  useEffect(() => {
    setIsCalling(calling);
    if (isCalling) {
      callUser(user.id);
    }
  }, [calling]);

  useEffect(() => {
    callSocket.emit("call");
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream: any) => {
        setStream(stream);
        if (myVideo.current) {
          myVideo.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error("Error accessing media devices:", error);
      });

    callSocket.on("callEnded", () => {
      setCallEnded(true);
      if (connectionRef.current) {
        connectionRef.current.destroy();
      }
    });
  }, []);

  const leaveCall = () => {
    callSocket.emit("endCall", { to: call.caller || id });
    setCallEnded(true);
    if (connectionRef.current) {
      connectionRef.current.destroy();

      updateCall({});
    }
  };

  useEffect(() => {
    if (callEnded) {
      router.push("/users");
    }
  }, [callEnded]);

  return (
    <div className="bg-dark-xl lg:h-5/6 h-full w-full">
      {call.receivingCall && !callAccepted ? (
        <div className="absolute gap-4 w-full justify-center items-center flex top-10 flex-col">
          <h1 className="text-white text-2xl font-bold">{call.caller}</h1>
          <p className="text-white font-semibold"> is calling...</p>
        </div>
      ) : null}

      <div className="absolute z-10 right-4 bottom-4">
        <div className="video">
          {stream && (
            <video
              className="rounded-md"
              playsInline
              muted
              ref={myVideo}
              autoPlay
              style={{ width: "200px" }}
            />
          )}
        </div>
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
        {stream && call.receivingCall && !callAccepted ? (
          <div className="flex flex-col gap-1 pb-10">
            <div className="bg-white/30 backdrop-blur-sm rounded-full p-4 modal-action w-full flex gap-36 justify-between items-center">
              <button
                onClick={answerCall}
                className="text-white btn btn-circle btn-success"
              >
                <CallOn />
              </button>
              <button className="text-white btn btn-circle btn-error">
                <CallOff />
              </button>
            </div>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
      <div className="absolute top-0">
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
      </div>
    </div>
  );
};

export default Call;
