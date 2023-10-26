import CommentCard from "../cards/CommentCard";
const CommentsSection = () => {
  return (
    <div className="py-2">
      <h1 className="pb-4">
        <b className="text-primary">123</b> comments
      </h1>
      <div className="flex flex-col gap-2">
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
    </div>
  );
};

export default CommentsSection;
