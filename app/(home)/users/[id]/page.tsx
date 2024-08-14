"use client";
import PostCard from "@/components/cards/PostCard";
import ProfileCard from "@/components/cards/ProfileCard";
import { fetchGetUserThreads } from "@/libs/api/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const { id } = useParams();
  const [threads, setThreads] = useState<any>([]);
  const [count, setCount] = useState(0);
  const fetchData = async () => {
    const response = await fetchGetUserThreads(id as string);
    setThreads(response.data.threads);
    setCount(response.data.count);
  };
  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <>
      <div className="flex flex-col gap-2 lg:gap-5 mt-10 lg:mt-5">
        <ProfileCard data={count} />
        {threads ? (
          <>
            {threads.map((thread: any) => (
              <div key={thread.id} className="">
                <PostCard data={thread} />
              </div>
            ))}
            <div className="flex p-5 items-center justify-center">
              <p className="text-lg font-semibold text-primary">
                All threads have been shown
              </p>
            </div>
          </>
        ) : (
          <div className="w-full flex justify-center items-center py-20">
            <p className="text-xl text-primary font-bold">User has no thread</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
