import image from "../../public/pf.jpg";
import Image from "next/image";
const ChatBubbleRight = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <Image src={image} alt="profile" />
        </div>
      </div>

      <div className="chat-bubble bg-primary text-dark-xl dark:text-dark-xs">
        I hate you!
      </div>
      <div className="chat-footer opacity-50 pt-1">12:46</div>
    </div>
  );
};

export default ChatBubbleRight;
