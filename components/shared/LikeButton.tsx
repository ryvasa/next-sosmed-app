'use client';
import { useEffect, useState } from 'react';
import { Like } from '../ui/icons';
import {
  fetchCancelLikeComment,
  fetchCancelLikeThread,
  fetchLikeComment,
  fetchLikeThread,
} from '@/libs/api/api';
import { userStore } from '@/store';
import { notificationSocket } from '../../libs/socket/socket';

interface Props {
  w: number;
  h: number;
  dataCount: number;
  data: any;
  threadId: string;
  commentId?: string;
  authorId: string;
}

const LikeButton = ({
  w,
  h,
  dataCount,
  data,
  threadId,
  commentId,
  authorId,
}: Props) => {
  const [like, setLike] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [likeCount, setLikeCount] = useState(dataCount);
  const [users, setUsers] = useState([]);
  const currentUser = userStore((state: any) => state.user);

  const likePost = async (e: any) => {
    e.preventDefault();
    setDisabled(true);
    try {
      let response;
      if (like) {
        // Unlike operation
        if (commentId) {
          response = await fetchCancelLikeComment(threadId, commentId);
          notificationSocket.emit('comment-notify', authorId);
        } else {
          response = await fetchCancelLikeThread(threadId);
          notificationSocket.emit('thread-notify', authorId);
        }
        if (response) {
          setLikeCount((prevCount: number) => prevCount - 1);
          setLike(false);
        }
      } else {
        // Like operation
        if (commentId) {
          response = await fetchLikeComment(threadId, commentId);
          notificationSocket.emit('comment-notify', authorId);
        } else {
          response = await fetchLikeThread(threadId);
          notificationSocket.emit('thread-notify', authorId);
        }
        if (response) {
          setLikeCount((prevCount: number) => prevCount + 1);
          setLike(true);
        }
      }
    } catch (error) {
      console.error('Error liking/unliking post', error);
    } finally {
      setDisabled(false);
    }
  };

  useEffect(() => {
    if (data) {
      setLikeCount(dataCount);
      setUsers(data);
    }
  }, [data, dataCount]);

  useEffect(() => {
    if (users && currentUser) {
      const exists = users.some((user: any) => user.user.id === currentUser.id);
      setLike(exists);
    }
  }, [users, currentUser]);

  return (
    <button
      disabled={disabled}
      type="button"
      onClick={likePost}
      className={`disabled:cursor-not-allowed flex items-center gap-2 ${
        commentId ? 'justify-start' : 'flex-1 justify-center'
      } ${like && 'text-primary'}`}
    >
      <Like w={w} h={h} />
      <p className={`${commentId ? 'text-sm' : ''}`}>
        {likeCount > 0 && likeCount}
      </p>
    </button>
  );
};

export default LikeButton;
