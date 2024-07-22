import SearchForm from '@/components/forms/SearchForm';
import FriendList from '@/components/shared/FriendList';
import TabMenu from '@/components/shared/TabMenu';

const Page = () => {
  return (
    <div className="pt-10">
      <div className="flex flex-col gap-2">
        <SearchForm />
        <TabMenu />
      </div>
      <FriendList section={'Invitation'} friend={false} invitation={true} />
      <FriendList section={'Friend'} friend={true} invitation={false} />
    </div>
  );
};

export default Page;
