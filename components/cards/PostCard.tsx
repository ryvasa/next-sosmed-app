import { Comment } from "../ui/icons";
import LikeButton from "../shared/LikeButton";
import UserInfo from "../shared/UserInfo";
import PostContent from "../shared/PostContent";
import Link from "next/link";
import ThreadOption from "../shared/ThreadOption";
// import DislikeButton from "../shared/DislikeButton";

const PostCard = ({ data }: any) => {
  return (
    <div className=" dark:bg-dark-md bg-white rounded-xl px-5 py-3 ">
      <div className="flex gap-4 flex-col">
        <div className="flex justify-between items-center">
          <UserInfo user={data?.user} createdAt={data?.created_at} />
          <ThreadOption id={data?.id} />
        </div>

        <PostContent detail={false} id={data?.id} />
      </div>
      <div className="border-t-[2px] dark:border-gray-700 border-gray-200 flex mt-2 pt-2 gap-4">
        <LikeButton
          w={5}
          h={5}
          data={data?.thread_likes}
          dataCount={data?.count?.thread_likes}
          threadId={data?.id}
          authorId={data?.user?.id}
        />
        {/* <div className="pt-1">
          <DislikeButton
            w={5}
            h={5}
            isComment={false}
            data={data?.thread_likes}
            dataCount={data?.count?.thread_likes}
            id={data?.id}
          />
        </div> */}
        <Link
          href={`/threads/${data?.id}`}
          className="flex-1 flex items-center justify-center gap-2"
        >
          <Comment w={4} h={4} />
          {data?.count?.comments > 0 && <p>{data?.count?.comments}</p>}
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
