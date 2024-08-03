'use client';
import { useState } from 'react';
import { Send } from '../ui/icons';
import { useParams } from 'next/navigation';
import { fetchCreateComment } from '../../libs/api/api';
import { notificationSocket } from '../../libs/socket/socket';

const CommentForm = () => {
  const { id } = useParams();
  const [newComment, setNewComment] = useState('');
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetchCreateComment(id as string, {
      body: newComment,
    });
    notificationSocket.emit('notify');
    setNewComment('');
  };

  return (
    <form
      id="comment"
      onSubmit={handleSubmit}
      className="rounded-lg flex gap-4 bg-gray-100 dark:bg-dark-lg/30 min-h-6 items-center justify-center relative"
    >
      <textarea
        name="body"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Comment here..."
        className="lg:text-lg text-sm bg-transparent textarea flex-1 border-none  resize-none pr-11"
      ></textarea>
      <button
        disabled={!newComment}
        type="submit"
        className="absolute disabled:cursor-not-allowed disabled:text-gray-500 text-primary right-4 bottom-4"
      >
        <Send w={7} h={7} />
      </button>
    </form>
  );
};

export default CommentForm;
