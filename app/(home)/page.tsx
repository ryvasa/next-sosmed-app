'use client';
import PostCard from '@/components/cards/PostCard';
import { fetchGetThreads } from '@/libs/api/api';
import { useEffect, useState } from 'react';
import { threadStore } from '../../store';

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
    <>
      {threads.map((thread) => (
        <div key={thread.id}>
          <PostCard data={thread} />
        </div>
      ))}
    </>
  );
}
