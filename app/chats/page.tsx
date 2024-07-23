import SearchForm from '@/components/forms/SearchForm';
import ChatCard from '@/components/cards/ChatCard';

const Page = () => {
  return (
    <div className="pt-10">
      <SearchForm />
      <div className="flex flex-col pt-3 gap-1">
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
      </div>
    </div>
  );
};

export default Page;
