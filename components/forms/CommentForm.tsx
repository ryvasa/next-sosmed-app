"use client";
import { useState } from "react";
import { Send } from "../ui/icons";

const CommentForm = ({ comments, setComments }: any) => {
  const [newComment, setNewComment] = useState("");
  const submitComment = (e: any) => {
    setComments([{ comment: newComment }, ...comments]);
    e.preventDefault();
    setNewComment("");
  };
  return (
    <form
      id="comment"
      onSubmit={submitComment}
      className="rounded-lg flex gap-4 bg-gray-100 dark:bg-dark-lg/30 min-h-6 items-center justify-center relative"
    >
      <textarea
        name="comment"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Comment here..."
        className="text-sm bg-transparent textarea flex-1 border-none  resize-none pr-11"
      ></textarea>
      <button type="submit" className="absolute right-4 bottom-4">
        <Send w={7} h={7} />
      </button>
    </form>
  );
};

export default CommentForm;
