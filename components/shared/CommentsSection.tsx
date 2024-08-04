"use client";
import { useEffect, useState } from "react";
import CommentCard from "../cards/CommentCard";
import CommentForm from "../forms/CommentForm";
import { useParams } from "next/navigation";
import { fetchGetComments, fetchGetCountComments } from "../../libs/api/api";
import useNotification from "../../libs/hooks/useNotification";
import useActiveStatus from "@/libs/hooks/useActiveStatus";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingCircle from "./LoadingCircle";

const CommentsSection = () => {
  const [comments, setComments] = useState([]);
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
  useNotification(getCommenst);
  return (
    <div className="py-2">
      <h1 className="pb-4 lg:text-lg">
        <b className="text-primary">{countComments}</b> comments
      </h1>
      <CommentForm />
      <InfiniteScroll
        dataLength={comments.length}
        next={getNewComment}
        hasMore={hasMore}
        loader={
          <div className="py-3">
            <LoadingCircle />
          </div>
        }
        endMessage={
          <p className="text-center py-3">
            <b>Komentarnya cuman segitu!</b>
          </p>
        }
      >
        <div className="flex flex-col gap-2 pt-4">
          {comments?.map((comment: any, index: number) => (
            <CommentCard key={index} data={comment} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default CommentsSection;
