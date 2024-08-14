"use client";
import { useEffect, useState } from "react";
import { Send } from "../ui/icons";
import { useParams } from "next/navigation";
import { fetchCreateComment, fetchGetOneThread } from "../../libs/api/api";
import { notificationSocket } from "../../libs/socket/socket";

const CommentForm = () => {
  const { id } = useParams();
  const [newComment, setNewComment] = useState("");
  const [thread, setThread] = useState({
    user: {
      id: "",
    },
  });

  const getThread = async () => {
    const response = await fetchGetOneThread(id as string);
    setThread(response.data);
  };
  useEffect(() => {
    getThread();
  }, [id]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetchCreateComment(id as string, {
      body: newComment,
    });
    notificationSocket.emit("comment-notify", thread?.user?.id);
    notificationSocket.emit("thread-notify", thread?.user?.id);
    setNewComment("");
  };

  return (
    <form
      id="comment"
      onSubmit={handleSubmit}
      className="rounded-lg flex gap-4 bg-gray-100 dark:bg-dark-sm min-h-6 items-center justify-center relative"
    >
      <textarea
        name="body"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Comment here..."
        className="lg:text-md text-sm bg-transparent textarea flex-1 border-none  resize-none pr-11"
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
