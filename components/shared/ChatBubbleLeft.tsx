import image from "../../public/pf.jpg";
import Image from "next/image";

const ChatBubbleLeft = () => {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <Image src={image} alt="profile" />
        </div>
      </div>

      <div className="chat-bubble bg-dark-lg text-dark-xl dark:text-dark-xs">
        You were the Chosen One!
      </div>
      <div className="chat-footer opacity-50 pt-1">12:46</div>
    </div>
  );
};

export default ChatBubbleLeft;
