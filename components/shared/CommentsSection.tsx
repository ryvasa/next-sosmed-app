'use client';
import { useEffect, useState } from 'react';
import CommentCard from '../cards/CommentCard';
import CommentForm from '../forms/CommentForm';

const CommentsSection = ({ data }: any) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    setComments(data);
  }, [data]);
  return (
    <div className="py-2">
      <h1 className="pb-4 lg:text-lg">
        <b className="text-primary">{comments?.length}</b> comments
      </h1>
      <CommentForm setComments={setComments} comments={comments} />
      <div className="flex flex-col gap-2 pt-4">
        {comments?.map((comment: any, index: number) => (
          <CommentCard key={index} data={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
