"use client";
import { useState } from "react";
import UserInfo from "../shared/UserInfo";
import LikeButton from "../shared/LikeButton";
import DislikeButton from "../shared/DislikeButton";

const comment = ` Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur
adipisicing elit. Optio inventore neque vel, impedit vero laboriosam
itaque unde fugiat iste consequuntur pariatur hic reprehenderit!
Consequuntur, sit! Aspernatur provident ipsum ea debitis iure, similique
quod veniam exercitationem architecto. Fugiat quis eligendi nihil quam,
nemo fugit facere sint eius hic qui aspernatur ut et ipsam, quasi
blanditiis veritatis, aperiam placeat ducimus. Sed dolorem tenetur quasi
in laboriosam repudiandae praesentium deserunt officiis id? Tenetur
culpa consectetur voluptates inventore quas cupiditate dicta debitis,
voluptatibus praesentium recusandae doloribus quaerat iusto libero
sapiente labore? Cum maiores commodi, inventore necessitatibus,
excepturi quia error magni eaque accusamus fuga aliquam.`;

const CommentCard = () => {
  const [detail, setDetail] = useState(false);

  const detailToggle = () => {
    setDetail(detail ? false : true);
  };
  return (
    <div className="rounded-lg bg-dark-lg/30 p-4">
      <UserInfo />
      <p className="py-2">
        {detail ? comment : comment.split(" ").slice(0, 15).join(" ") + "..."}{" "}
        {detail ? (
          <button onClick={() => detailToggle()} className="text-primary">
            show less
          </button>
        ) : (
          <button onClick={() => detailToggle()} className="text-primary">
            show detail
          </button>
        )}
      </p>
      <div className="flex gap-4 pt-2 justify-start items-start px-1">
        <LikeButton w={4} h={4} isComment={true} />
        <DislikeButton />
      </div>
    </div>
  );
};

export default CommentCard;
