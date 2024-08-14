"use client";
import PostCard from "@/components/cards/PostCard";
import { fetchGetThreads } from "@/libs/api/api";
import { useEffect, useState } from "react";
import { threadStore } from "../../store";

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
  return (
    <div className="pt-8 flex gap-5 flex-col lg:gap-6">
      {threads.map((thread: any) => (
        <div key={thread.id}>
          <PostCard data={thread} />
        </div>
      ))}
    </div>
  );
}

// import PostCard from "@/components/cards/PostCard";
// import { fetchGetThreads } from "@/libs/api/ssrApi";

// export default async function Home() {
//   const threads = await fetchGetThreads();
//   return (
//     <div className="pt-8 flex gap-5 flex-col lg:gap-6">
//       {threads.data.map((thread: any) => (
//         <div key={thread.id}>
//           <PostCard data={thread} />
//         </div>
//       ))}
//     </div>
//   );
// }
