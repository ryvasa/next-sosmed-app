"use client";
import ChatCard from "../cards/ChatCard";
import SearchForm from "../forms/SearchForm";
import { useEffect, useState } from "react";
import useChatNotify from "@/libs/hooks/useChatNotify";
import { fetchGetChats } from "../../libs/api/api";
import useActiveStatus from "@/libs/hooks/useActiveStatus";

const ChatList = () => {
  const [data, setData] = useState([]);

  async function fetchData(username?: string) {
    const res = await fetchGetChats({ username });
    setData(res.data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  useChatNotify(fetchData);
  useActiveStatus(fetchData);
  return (
    <div className="">
      <SearchForm fetchData={fetchData} />
      <div className="flex justify-end border-gray-200 dark:border-gray-700 border-b-[2px] pt-4 pb-2 items-end">
        <button
          type="submit"
          onClick={() => fetchData()}
          className="text-primary font-semibold text-sm"
        >
          Show All
        </button>
      </div>
      <div className="flex flex-col pt-3 gap-1">
        {data.length > 0 ? (
          data.map((item: any) => (
            <div key={item.id}>{<ChatCard data={item} />}</div>
          ))
        ) : (
          <div className="flex w-full min-h-screen justify-center items-center">
            <h2 className="text-primary text-lg font-semibold">
              You don not have a chat yet
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatList;
