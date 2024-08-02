'use client';
import image from '../../public/pf.jpg';
import { Comment } from '../ui/icons';
import LikeButton from '../shared/LikeButton';
import UserInfo from '../shared/UserInfo';
import PostContent from '../shared/PostContent';
import Link from 'next/link';
import DislikeButton from '../shared/DislikeButton';
import { useEffect } from 'react';

const PostCard = ({ data }: any) => {
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="border-b-[2px] border-gray-200 dark:border-gray-600 pt-10 pb-5 ">
      <div className="flex gap-4 flex-col">
        <UserInfo user={data?.user} createdAt={data?.created_at} />
        <PostContent detail={false} id={data?.id} />
      </div>
      <div className="flex pt-5 gap-4">
        <LikeButton
          w={5}
          h={5}
          isComment={false}
          dataCount={data?.count?.thread_likes}
        />
        <div className="pt-1">
          <DislikeButton w={5} h={5} dataCount={data?.count?.thread_dislikes} />
        </div>
        <Link
          href={`/threads/${data?.id}`}
          className="flex-1 flex items-center justify-center gap-2"
        >
          <Comment w={4} h={4} />
          <p>{data?.count?.comments}</p>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
