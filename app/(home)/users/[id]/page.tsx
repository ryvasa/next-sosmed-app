"use client";
import PostCard from "@/components/cards/PostCard";
import ProfileCard from "@/components/cards/ProfileCard";
import { fetchGetUserThreads } from "@/libs/api/api";
import { useEffect, useState } from "react";

const Page = () => {
  const [threads, setThreads] = useState([]);
  const [count, setCount] = useState(0);
  const fetchData = async () => {
    const response = await fetchGetUserThreads();
    console.log(response.data);
    setThreads(response.data.threads);
    setCount(response.data.count);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="flex flex-col gap-2 lg:gap-5 mt-10 lg:mt-5">
        <ProfileCard data={count} />
        {threads.map((thread) => (
          <div key={thread.id} className="">
            <PostCard data={thread} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
