import SearchForm from "@/components/forms/SearchForm";
import FriendList from "@/components/shared/FriendList";

const Page = () => {
  return (
    <div className="pt-10">
      <SearchForm />
      <FriendList section={"Invitation"} friend={false} />
      <FriendList section={"Friend"} friend={true} />
    </div>
  );
};

export default Page;
