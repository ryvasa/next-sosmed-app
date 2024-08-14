"use client";
import { useState } from "react";
import { Send } from "../ui/icons";
import { useParams } from "next/navigation";

const ChatForm = ({ submit }: any) => {
  const [message, setMessage] = useState("");

  const { receiver_id, chat_id } = useParams();
  const handleChange = (e: any) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (e: any) => {
    const data = {
      message,
      receiver_id,
      chat_id,
    };
    e.preventDefault();
    submit(data);
    setMessage("");
  };
  return (
    <>
      <div className="fixed lg:pl-20 bottom-20 lg:bottom-10 z-10 left-0 w-full lg:w-[77%] px-4">
        <form
          onSubmit={handleSubmit}
          className="rounded-lg flex gap-4 bg-gray-100  dark:bg-dark-sm min-h-6 items-center justify-center"
        >
          <textarea
            onChange={handleChange}
            value={message}
            placeholder="Type here..."
            className="text-sm lg:text-md bg-transparent textarea flex-1 border-none  resize-none pr-11"
          ></textarea>
          <button
            disabled={!message}
            type="submit"
            className="absolute disabled:cursor-not-allowed disabled:text-gray-500 text-primary right-6 bottom-4"
          >
            <Send w={7} h={7} />
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatForm;
