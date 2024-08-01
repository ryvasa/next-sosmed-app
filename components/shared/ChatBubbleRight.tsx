'use client';
import image from '../../public/pf.jpg';
import Image from 'next/image';
import { Readed } from '../ui/icons';
import { formaterTime } from '../../helper/formaterTime';
const ChatBubbleRight = ({ data }: any) => {
  return (
    <>
      {data && (
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <Image src={image} alt="profile" />
            </div>
          </div>

          <div className="chat-bubble bg-primary text-white dark:text-dark-xs">
            <p>{data.message}</p>
          </div>
          <div className="chat-footer opacity-50 pt-1 flex gap-2">
            <p>{formaterTime(data.created_at).formattedTime}</p>
            <p>{data.readed && <Readed />}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBubbleRight;
