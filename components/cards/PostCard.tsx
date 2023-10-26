import image from "../../public/pf.jpg";
import { Comment } from "../ui/icons";
import LikeButton from "../shared/LikeButton";
import UserInfo from "../shared/UserInfo";
import PostContent from "../shared/PostContent";

const desc = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
id recusandae natus aliquid alias dolore totam nam in ad ex,
adipisci quam itaque provident fugit voluptatem blanditiis sequi
architecto saepe at rerum sed quas. Similique praesentium nisi
culpa perferendis dolorum expedita quae modi, sunt rerum iure
vitae at recusandae, pariatur velit nemo. Voluptatum rem esse
quod libero. Ea corporis eum omnis qui et exercitationem quaerat
consequuntur quod perferendis a non, repellat dignissimos quos
ullam optio quae necessitatibus iste reprehenderit quasi
explicabo adipisci sint. Ducimus eligendi reprehenderit maiores
iste et. Quam dolorum doloremque molestias expedita qui
dignissimos ut ab aperiam aspernatur.`;

const images = [image, image, image];

const data = {
  desc,
  images,
};

const PostCard = ({ detail }: any) => {
  return (
    <div className="border-b-[2px] border-gray-200 dark:border-gray-600 pt-10 pb-5 ">
      <div className="flex gap-4 flex-col">
        <UserInfo />
        <PostContent detail={detail} data={data} />
      </div>
      <div className="flex pt-5">
        <LikeButton />
        <div className="flex-1 flex items-center justify-center gap-2">
          <Comment />
          <p>123</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
