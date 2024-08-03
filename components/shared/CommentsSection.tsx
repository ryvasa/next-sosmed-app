'use client';
import { useEffect, useState } from 'react';
import CommentCard from '../cards/CommentCard';
import CommentForm from '../forms/CommentForm';
import { useParams } from 'next/navigation';
import { fetchGetComments } from '../../libs/api/api';
import useNotification from '../../libs/hooks/useNotification';

const CommentsSection = () => {
  const { id } = useParams();
  const getCommenst = async () => {
    const response = await fetchGetComments(id as string);
    setComments(response.data);
  };
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getCommenst();
  }, [id]);
  useNotification(getCommenst);
  return (
    <div className="py-2">
      <h1 className="pb-4 lg:text-lg">
        <b className="text-primary">{comments?.length}</b> comments
      </h1>
      <CommentForm />
      <div className="flex flex-col gap-2 pt-4">
        {comments?.map((comment: any, index: number) => (
          <CommentCard key={index} data={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
