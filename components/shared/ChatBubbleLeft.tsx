"use client";
import image from "../../public/pf.jpg";
import Image from "next/image";
import { formaterTimeChat } from "../../helper/formaterTime";
import { useEffect } from "react";

const ChatBubbleLeft = ({ data }: any) => {
  useEffect(() => {}, [data]);
  return (
    <>
      {data && (
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <Image
                width={data?.sender?.avatar && 10000}
                height={data?.sender?.avatar && 10000}
                style={
                  data?.sender?.avatar && { width: "112px", height: `112px` }
                }
                src={
                  data?.sender?.avatar
                    ? `http://localhost:3000/${data?.sender?.avatar}`
                    : image
                }
                alt="profile"
              />
            </div>
          </div>

          <div className="chat-bubble bg-gray-200 dark:bg-dark-sm dark:lg:bg-dark-lg text-dark-sm dark:text-dark-xs">
            <p>{data.message}</p>
          </div>
          <div className="chat-footer opacity-50 pt-1 flex gap-2">
            <p>{formaterTimeChat(data.created_at)}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBubbleLeft;
