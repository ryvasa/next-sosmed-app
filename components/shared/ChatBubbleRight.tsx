"use client";
import image from "../../public/pf.jpg";
import Image from "next/image";
import { Readed } from "../ui/icons";
import { formaterTimeChat } from "../../helper/formaterTime";
const ChatBubbleRight = ({ data }: any) => {
  return (
    <>
      {data && (
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <Image
                width={data?.user?.avatar && 10000}
                height={data?.user?.avatar && 10000}
                style={
                  data?.user?.avatar && { width: "112px", height: `112px` }
                }
                src={
                  data?.user?.avatar
                    ? `http://localhost:3000/${data?.user?.avatar}`
                    : image
                }
                alt="profile"
              />
            </div>
          </div>

          <div className="chat-bubble bg-primary text-white dark:text-dark-xs">
            <p>{data.message}</p>
          </div>
          <div className="chat-footer opacity-50 pt-1 flex gap-2">
            <p>{formaterTimeChat(data.created_at)}</p>
            <p className={`font-bold ${data.readed && "text-primary"}`}>
              {data.readed && <Readed />}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBubbleRight;
