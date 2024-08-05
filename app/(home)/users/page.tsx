import SearchForm from "@/components/forms/SearchForm";
import FriendList from "@/components/shared/FriendList";

const Page = () => {
  return (
    <div className="pt-10 bg-white dark:bg-dark-md p-6">
      <div className="flex flex-col gap-2">
        <SearchForm />
      </div>
      <FriendList section={"Add Friend"} friend={false} invitation={false} />
      <FriendList section={"Invitation"} friend={false} invitation={true} />
      <FriendList section={"Friend"} friend={true} invitation={false} />
    </div>
  );
};

export default Page;
