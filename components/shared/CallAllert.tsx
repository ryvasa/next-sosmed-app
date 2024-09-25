"use client";

import { useEffect, useState } from "react";
import { callSocket } from "../../libs/socket/socket";
import Image from "next/image";
import image from "../../public/pf.jpg";
import { CallOff, CallOn } from "../ui/icons";
import { useRouter } from "next/navigation";
import { callStore } from "@/store";

const CallAllert = () => {
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState<any>();
  // const [open, setOpen] = useState(false);
  const router = useRouter();
  const { call, updateCall } = callStore((state: any) => state);

  useEffect(() => {
    callSocket.emit("call");

    callSocket.on("callUser", (data) => {
      // setOpen(true);
      updateCall(data);
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);

      data.receiver = true;
      data.receivingCall = true;
      data.caller = data.from;
      data.callerSignal = data.signal;
      router.push(`/video-call/${data.from}`);
    });
  }, []);

  // useEffect(() => {
  //   open && document.querySelector("#call")?.classList.add("modal-open");
  // }, [open]);

  // const closeModal = () => {
  //   document.querySelector("#call")?.classList.remove("modal-open");
  // };

  // const answerCall = () => {
  //   closeModal();
  //   router.push(`/video-call/${caller}`);
  // };
  return (
    <>
      <div id="call" className="modal " role="dialog">
        <div className="modal-box w-1/3 pt-4 p-0 bg-white absolute z-50 flex flex-col gap-4 items-center justify-center">
          <h3 className="lg:text-2xl text-lg font-bold text-primary">
            UserName
          </h3>
          <span className="font-semibold">Incoming Call</span>
          <div
            className={`rounded-full
               overflow-hidden`}
          >
            {/* <ShowPicture data={user?.avatar} /> */}
            <Image
              alt="profile"
              width={10000}
              height={10000}
              // style={{ width: "112px", height: `112px` }}
              src={image}
              className="object-cover h-20 w-20 lg:h-80 lg:w-80 "
            />
          </div>
          <div className="bg-dark-xs rounded-md p-2 pb-4 modal-action w-full flex gap-20 justify-center items-center">
            <button className="text-white btn btn-circle btn-success">
              <CallOn />
            </button>
            <button className="text-white btn btn-circle btn-error">
              <CallOff />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallAllert;
