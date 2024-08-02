"use client";
import SearchForm from "@/components/forms/SearchForm";
import ChatCard from "@/components/cards/ChatCard";
import { useEffect, useState } from "react";
import { fetchGetChats } from "../../../libs/api/api";
import { io } from "socket.io-client";
import { chatsStore } from "../../../store";
import useRoom from "@/libs/hooks/useRoom";
import useChatNotify from "@/libs/hooks/useChatNotify";

const Page = () => {
  const { chats, updateChats } = chatsStore((state: any) => state);
  const [data, setData] = useState(chats || []);
  const socket = io("http://localhost:3000/notifications", {
    withCredentials: true,
  });
  async function fetchData() {
    const res = await fetchGetChats();
    updateChats(res.data);
    setData(res.data);
  }
  useRoom(data);
  useEffect(() => {
    fetchData();
  }, []);

  useChatNotify(fetchData);
  // useEffect(() => {
  //   const onConnect = () => {
  //     socket.io.engine.on("upgrade", (transport) => {
  //       console.log(transport);
  //     });
  //   };

  //   const onDisconnect = () => {
  //     console.log("Disconnected");
  //   };

  //   socket.on("connect", onConnect);
  //   socket.on("disconnect", onDisconnect);
  //   socket.on("notify", (data: any) => {
  //     console.log(data);
  //     fetchData();
  //   });

  //   return () => {
  //     socket.off("connect", onConnect);
  //     socket.off("disconnect", onDisconnect);
  //     socket.off("notify", (data: any) => {
  //       console.log(data);
  //     });
  //   };
  // }, []);

  const coba = () => {
    socket.emit("notify");
  };
  return (
    <div className="pt-10">
      <button className="btn-ghost" onClick={coba}>
        cek{" "}
      </button>
      <SearchForm />
      <div className="flex flex-col pt-3 gap-1">
        {data.map((item: any) => (
          <div key={item.id}>
            <ChatCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
