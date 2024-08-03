"use client";
import PostCard from "@/components/cards/PostCard";
import { fetchGetThreads } from "@/libs/api/api";
import { useEffect, useState } from "react";
import { chatsStore, threadStore } from "../../store";

export default function Home() {
  const { updateThreads } = threadStore((state: any) => state);
  const [threads, setThreads] = useState([]);
  const getThreads = async () => {
    const response = await fetchGetThreads();
    setThreads(response.data);
    updateThreads(response.data);
  };
  useEffect(() => {
    getThreads();
  }, []);
  // const { chats, updateChats } = chatsStore((state: any) => state);
  // useRoom(chats);
  return (
    <>
      {threads.map((thread) => (
        <div key={thread.id}>
          <PostCard data={thread} />
        </div>
      ))}
    </>
  );
}
