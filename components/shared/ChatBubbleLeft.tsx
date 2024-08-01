import image from '../../public/pf.jpg';
import Image from 'next/image';
import { formaterTime } from '../../helper/formaterTime';

const ChatBubbleLeft = ({ data }: any) => {
  return (
    <>
      {data && (
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <Image src={image} alt="profile" />
            </div>
          </div>

          <div className="chat-bubble bg-gray-200 dark:bg-dark-lg text-dark-sm dark:text-dark-xs">
            <p>{data.message}</p>
          </div>
          <div className="chat-footer opacity-50 pt-1 flex gap-2">
            <p>{formaterTime(data.created_at).formattedTime}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBubbleLeft;
