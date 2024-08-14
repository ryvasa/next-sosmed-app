import ThreadCard from "@/components/cards/ThreadCard";
import CommentsSection from "@/components/shared/CommentsSection";

const Page = () => {
  return (
    <div className="dark:bg-dark-md bg-white rounded-lg px-6">
      <ThreadCard />
      <CommentsSection />
    </div>
  );
};

export default Page;
