import PostCard from "@/components/cards/PostCard";
import ProfileCard from "@/components/cards/ProfileCard";
const Page = () => {
  return (
    <>
      <div className="flex flex-col gap-2 lg:gap-5 mt-10 lg:mt-5">
        <ProfileCard />
        <PostCard />
      </div>
    </>
  );
};

export default Page;
