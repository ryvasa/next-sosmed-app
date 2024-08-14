"use client";
import { useEffect, useState } from "react";
import CommentCard from "../cards/CommentCard";
import CommentForm from "../forms/CommentForm";
import { useParams } from "next/navigation";
import { fetchGetComments, fetchGetCountComments } from "../../libs/api/api";
// import useNotification from "../../libs/hooks/useNotification";
import useActiveStatus from "@/libs/hooks/useActiveStatus";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingCircle from "./LoadingCircle";

const CommentsSection = () => {
  const [comments, setComments] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [countComments, setCountComments] = useState(0);
  const { id } = useParams();

  const getNewComment = async () => {
    if (countComments > comments.length) {
      setHasMore(true);
    } else {
      setHasMore(false);
    }
    const response = await fetchGetComments(id as string, comments.length);
    setComments((prevComments) => [...prevComments, ...response.data]);
  };

  const getCommenst = async () => {
    const response = await fetchGetComments(id as string, comments.length);
    const count = await fetchGetCountComments(id as string);

    setCountComments(count.data.count);
    setComments(response.data);
  };

  useEffect(() => {
    getCommenst();
  }, [id]);

  useActiveStatus(getCommenst);
  // useNotification(getCommenst);
  return (
    <div className={`py-2 ${comments.length > 0 ? "h-fit" : "h-[400px]"} `}>
      <h1 className="pb-4 lg:text-md">
        <b className="text-primary">{countComments}</b> comments
      </h1>
      <CommentForm />
      {comments.length > 0 ? (
        <InfiniteScroll
          dataLength={comments.length}
          next={getNewComment}
          hasMore={hasMore}
          endMessage={
            <p className="text-center text-md font-semibold  text-primary py-3">
              All comments have been shown!
            </p>
          }
          loader={comments.length < countComments && <LoadingCircle />}
        >
          <div className="flex flex-col gap-2 pt-4">
            {comments?.map((comment: any, index: number) => (
              <CommentCard key={index} data={comment} />
            ))}
          </div>
        </InfiniteScroll>
      ) : (
        <div className=" text-center py-10 text-primary text-lg font-semibold">
          <p>This thread has no comments yet</p>
        </div>
      )}
    </div>
  );
};

export default CommentsSection;
