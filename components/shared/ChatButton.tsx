import { fetchCreateChat } from '@/libs/api/api';
import { useRouter } from 'next/navigation';
import { Chat } from '../ui/icons';

interface Props {
  userId: string;
}

const ChatButton = ({ userId }: Props) => {
  const router = useRouter();
  const fetchData = async () => {
    const response = await fetchCreateChat(userId);
    console.log(response);
    if (response.data) {
      router.push(`/chats/${response.data.id}/${userId}`);
    }
  };
  return (
    <button
      onClick={fetchData}
      type="button"
      className="flex flex-1 justify-center items-center gap-4"
    >
      <div className="text-primary">
        <Chat />
      </div>
    </button>
  );
};

export default ChatButton;
