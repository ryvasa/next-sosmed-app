'use client';
import PostCard from '@/components/cards/PostCard';
import CommentsSection from '@/components/shared/CommentsSection';
import { fetchGetOneThread } from '../../../../libs/api/api';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Page = () => {
  const [thread, setThread] = useState<any>({});
  const { id } = useParams();
  const getOneThread = async () => {
    const response = await fetchGetOneThread(id as string);
    setThread(response.data);
  };
  useEffect(() => {
    getOneThread();
  }, [id]);
  return (
    <div>
      <PostCard detail={true} data={thread} />
      <CommentsSection data={thread?.comments} />
    </div>
  );
};

export default Page;
