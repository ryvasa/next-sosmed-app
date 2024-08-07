"use client";
import { useEffect, useState } from "react";
import { Dislike } from "../ui/icons";
import { userStore } from "@/store";
import { fetchCancelDislikeThread, fetchDislikeThread } from "@/libs/api/api";

interface props {
  w: number;
  h: number;
  isComment: boolean;
  dataCount: number;
  data: any;
  id: string;
}
const DislikeButton = ({ w, h, isComment, dataCount, data, id }: props) => {
  const [dislike, setDislike] = useState(false);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [users, setUsers] = useState([]);
  const currentUser = userStore((state: any) => state.user);
  const dislikePost = async (e: any) => {
    e.preventDefault();
    if (dislike) {
      const response = await fetchCancelDislikeThread(id);
      if (response) {
        setDislikeCount(dislikeCount - 1);
        setDislike(false);
      }
    }
    const response = await fetchDislikeThread(id);
    if (response) {
      setDislikeCount(dislikeCount + 1);
      setDislike(true);
    }
  };
  useEffect(() => {
    setDislikeCount(dataCount);
    setUsers(data);
  }, [data]);
  useEffect(() => {
    if (users) {
      const exists = users.some((user: any) => user.user.id === currentUser.id);
      setDislike(exists);
    }
  }, [users]);
  return (
    <button
      onClick={dislikePost}
      className={`flex items-center gap-2 ${
        isComment ? "  justify-start " : "flex-1  justify-center "
      }  ${dislike && "text-primary "}`}
    >
      <Dislike w={w} h={h} />
      <p className="text-sm">{dislikeCount > 0 && dislikeCount}</p>
    </button>
  );
};

export default DislikeButton;
