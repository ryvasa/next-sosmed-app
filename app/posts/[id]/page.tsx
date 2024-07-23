import PostCard from '@/components/cards/PostCard';
import CommentsSection from '@/components/shared/CommentsSection';

const Page = () => {
  return (
    <div>
      <PostCard detail={true} />
      <CommentsSection />
    </div>
  );
};

export default Page;
