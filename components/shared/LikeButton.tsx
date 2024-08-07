"use client";
import { useEffect, useState } from "react";
import { Like } from "../ui/icons";
import {
  fetchCancelLikeComment,
  fetchCancelLikeThread,
  fetchLikeComment,
  fetchLikeThread,
} from "@/libs/api/api";
import { userStore } from "@/store";

interface Props {
  w: number;
  h: number;
  dataCount: number;
  data: any;
  threadId: string;
  commentId?: string;
}

const LikeButton = ({ w, h, dataCount, data, threadId, commentId }: Props) => {
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
        } else {
          response = await fetchCancelLikeThread(threadId);
        }
        if (response) {
          setLikeCount((prevCount) => prevCount - 1);
          setLike(false);
        }
      } else {
        // Like operation
        if (commentId) {
          response = await fetchLikeComment(threadId, commentId);
        } else {
          response = await fetchLikeThread(threadId);
        }
        if (response) {
          setLikeCount((prevCount) => prevCount + 1);
          setLike(true);
        }
      }
    } catch (error) {
      console.error("Error liking/unliking post", error);
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
        commentId ? "justify-start" : "flex-1 justify-center"
      } ${like && "text-primary"}`}
    >
      <Like w={w} h={h} />
      <p className={`${commentId ? "text-sm" : ""}`}>
        {likeCount > 0 && likeCount}
      </p>
    </button>
  );
};

export default LikeButton;
