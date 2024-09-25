"use client";
import { useEffect } from "react";
import { callSocket } from "../socket/socket";
import { useRouter } from "next/navigation";

const useCall = () => {
  const router = useRouter();

  useEffect(() => {
    callSocket.emit("call");

    callSocket.on("callUser", (data) => {
      data.receiver = true;
      data.receivingCall = true;
      data.caller = data.from;
      data.callerSignal = data.signal;
      router.push(`/video-call/${data.from}`);
    });
  }, []);
};

export default useCall;
