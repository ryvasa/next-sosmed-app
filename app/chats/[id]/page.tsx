import ChatForm from "@/components/forms/ChatForm";
import ChatBubbleLeft from "../../../components/shared/ChatBubbleLeft";
import ChatBubbleRight from "../../../components/shared/ChatBubbleRight";
const Page = () => {
  return (
    <div className="py-10 relative w-full flex flex-col">
      <div className="flex flex-col pb-10">
        <ChatBubbleLeft />
        <ChatBubbleRight /> <ChatBubbleLeft />
        <ChatBubbleRight /> <ChatBubbleLeft />
        <ChatBubbleRight /> <ChatBubbleLeft />
        <ChatBubbleRight /> <ChatBubbleLeft />
        <ChatBubbleRight /> <ChatBubbleLeft />
        <ChatBubbleRight /> <ChatBubbleLeft />
        <ChatBubbleRight />
      </div>
      <ChatForm />
    </div>
  );
};

export default Page;
