"use client";
import SearchForm from "@/components/forms/SearchForm";
import ChatCard from "@/components/cards/ChatCard";
import { useEffect, useState } from "react";
import { fetchGetChats } from "../../../libs/api/api";
import { chatsStore } from "../../../store";
import useChatNotify from "@/libs/hooks/useChatNotify";

const Page = () => {
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

  return (
    <div className="pt-10">
      <SearchForm />
      <div className="flex flex-col pt-3 gap-1">
        {data.map((item: any) => (
          <div key={item.id}>{<ChatCard data={item} />}</div>
        ))}
      </div>
    </div>
  );
};

export default Page;
