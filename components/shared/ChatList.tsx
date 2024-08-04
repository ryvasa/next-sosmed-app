"use client";
import ChatCard from "../cards/ChatCard";
import SearchForm from "../forms/SearchForm";
import { useEffect, useState } from "react";
import useChatNotify from "@/libs/hooks/useChatNotify";
import { fetchGetChats } from "../../libs/api/api";
import { chatsStore } from "../../store";
import useActiveStatus from "@/libs/hooks/useActiveStatus";

const ChatList = () => {
  const { chats, updateChats } = chatsStore((state: any) => state);
  const [data, setData] = useState([]);

  async function fetchData() {
    const res = await fetchGetChats();
    updateChats(res.data);
    setData(res.data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  useChatNotify(fetchData);
  useActiveStatus(fetchData);
  return (
    <div className=" bg-white dark:bg-dark-md rounded-lg px-2 py-6">
      <SearchForm />
      <div className="flex flex-col pt-3 gap-1">
        {data.map((item: any) => (
          <div key={item.id}>{<ChatCard data={item} />}</div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
