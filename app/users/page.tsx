import SearchForm from '@/components/forms/SearchForm';
import TabMenu from '@/components/shared/TabMenu';
import FriendList from '@/components/shared/FriendList';

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
