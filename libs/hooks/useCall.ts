import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const useWebRTC = (meetingId: any) => {
  const [remoteStreams, setRemoteStreams] = useState([]);
  const localStream = useRef<any>(null);
  const socket = useRef<any>(null);
  const peerConnections = useRef<any>({});
  socket.current.on("signal", (data) => {
    console.log(data);
  });
  useEffect(() => {
    socket.current = io("http://localhost:3000");

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        console.log(stream);
        localStream.current.srcObject = stream;

        socket.current.emit("joinMeeting", meetingId);

        socket.current.on("userJoined", (userId: any) => {
          const peerConnection = createPeerConnection(userId);
          peerConnections.current[userId] = peerConnection;
          stream
            .getTracks()
            .forEach((track) => peerConnection.addTrack(track, stream));
        });

        socket.current.on("signal", async ({ userId, signal }: any) => {
          if (peerConnections.current[userId]) {
            await peerConnections.current[userId].setRemoteDescription(
              new RTCSessionDescription(signal),
            );
            if (signal.type === "offer") {
              const answer =
                await peerConnections.current[userId].createAnswer();
              await peerConnections.current[userId].setLocalDescription(answer);
              socket.current.emit("signal", { meetingId, signal: answer });
            }
          } else {
            const peerConnection = createPeerConnection(userId);
            await peerConnection.setRemoteDescription(
              new RTCSessionDescription(signal),
            );
            peerConnections.current[userId] = peerConnection;
            if (signal.type === "offer") {
              const answer = await peerConnection.createAnswer();
              await peerConnection.setLocalDescription(answer);
              socket.current.emit("signal", { meetingId, signal: answer });
            }
          }
        });
      });

    return () => {
      Object.values(peerConnections.current).forEach((pc: any) => pc.close());
      socket.current.disconnect();
    };
  }, [meetingId]);

  const createPeerConnection = (userId: any) => {
    const pc = new RTCPeerConnection();
    pc.onicecandidate = (event) => {
      if (event.candidate) {
        socket.current.emit("signal", { meetingId, signal: event.candidate });
      }
    };
    pc.ontrack = (event) => {
      setRemoteStreams((prevStreams: any) => {
        const existingStream = prevStreams.find(
          (stream: any) => stream.id === event.streams[0].id,
        );
        if (existingStream) return prevStreams;
        return [...prevStreams, event.streams[0]];
      });
    };
    return pc;
  };

  return { localStream, remoteStreams };
};

export default useWebRTC;
