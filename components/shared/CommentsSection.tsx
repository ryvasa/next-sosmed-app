"use client";
import { useState } from "react";
import CommentCard from "../cards/CommentCard";
import CommentForm from "../forms/CommentForm";

const data = [
  {
    comment:
      "1 Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio inventore neque vel, impedit vero laboriosam itaque unde fugiat iste consequuntur pariatur hic reprehenderit! Consequuntur, sit! Aspernatur provident ipsum ea debitis iure, similique quod veniam exercitationem architecto. Fugiat quis eligendi nihil quam, nemo fugit facere sint eius hic qui aspernatur ut et ipsam, quasi blanditiis veritatis, aperiam placeat ducimus. Sed dolorem tenetur quasi in laboriosam repudiandae praesentium deserunt officiis id? Tenetur culpa consectetur voluptates inventore quas cupiditate dicta debitis, voluptatibus praesentium recusandae doloribus quaerat iusto libero sapiente labore? Cum maiores commodi, inventore necessitatibus, excepturi quia error magni eaque accusamus fuga aliquam.",
  },
  {
    comment:
      "2 Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio inventore neque vel, impedit vero laboriosam itaque unde fugiat iste consequuntur pariatur hic reprehenderit! Consequuntur, sit! Aspernatur provident ipsum ea debitis iure, similique quod veniam exercitationem architecto. Fugiat quis eligendi nihil quam, nemo fugit facere sint eius hic qui aspernatur ut et ipsam, quasi blanditiis veritatis, aperiam placeat ducimus. Sed dolorem tenetur quasi in laboriosam repudiandae praesentium deserunt officiis id? Tenetur culpa consectetur voluptates inventore quas cupiditate dicta debitis, voluptatibus praesentium recusandae doloribus quaerat iusto libero sapiente labore? Cum maiores commodi, inventore necessitatibus, excepturi quia error magni eaque accusamus fuga aliquam.",
  },
  {
    comment:
      "3 Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio inventore neque vel, impedit vero laboriosam itaque unde fugiat iste consequuntur pariatur hic reprehenderit! Consequuntur, sit! Aspernatur provident ipsum ea debitis iure, similique quod veniam exercitationem architecto. Fugiat quis eligendi nihil quam, nemo fugit facere sint eius hic qui aspernatur ut et ipsam, quasi blanditiis veritatis, aperiam placeat ducimus. Sed dolorem tenetur quasi in laboriosam repudiandae praesentium deserunt officiis id? Tenetur culpa consectetur voluptates inventore quas cupiditate dicta debitis, voluptatibus praesentium recusandae doloribus quaerat iusto libero sapiente labore? Cum maiores commodi, inventore necessitatibus, excepturi quia error magni eaque accusamus fuga aliquam.",
  },
  {
    comment:
      "4 Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio inventore neque vel, impedit vero laboriosam itaque unde fugiat iste consequuntur pariatur hic reprehenderit! Consequuntur, sit! Aspernatur provident ipsum ea debitis iure, similique quod veniam exercitationem architecto. Fugiat quis eligendi nihil quam, nemo fugit facere sint eius hic qui aspernatur ut et ipsam, quasi blanditiis veritatis, aperiam placeat ducimus. Sed dolorem tenetur quasi in laboriosam repudiandae praesentium deserunt officiis id? Tenetur culpa consectetur voluptates inventore quas cupiditate dicta debitis, voluptatibus praesentium recusandae doloribus quaerat iusto libero sapiente labore? Cum maiores commodi, inventore necessitatibus, excepturi quia error magni eaque accusamus fuga aliquam.",
  },
];

const CommentsSection = () => {
  const [comments, setComments] = useState(data.reverse());
  return (
    <div className="py-2">
      <h1 className="pb-4">
        <b className="text-primary">123</b> comments
      </h1>
      <CommentForm setComments={setComments} comments={comments} />
      <div className="flex flex-col gap-2 pt-4">
        {comments.map((comment: any, index: number) => (
          <CommentCard key={index} data={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
