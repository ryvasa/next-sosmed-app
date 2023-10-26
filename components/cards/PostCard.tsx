import Image from "next/image";
import image from "../../public/pf.jpg";
import { Comment } from "../ui/icons";
import LikeButton from "../shared/LikeButton";

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

const PostCard = () => {
  return (
    <div className="border-b-[2px] border-gray-200 dark:border-gray-600 py-10 ">
      <div className="flex gap-4 flex-col">
        <div className="flex gap-4 items-center ">
          <div className="avatar-profile">
            <Image placeholder="blur" src={image} alt="photo frofile" />
          </div>
          <div className="user-info">
            <p className="text-md text-color font-semibold">Username</p>
            <p className="text-sm text-primary">10:18</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-color">
            {desc.split(" ").slice(0, 30).join(" ")}...
          </p>
          <div className="h-96">
            <Image
              placeholder="blur"
              src={image}
              alt="photo postingan"
              className="w-full h-full object-cover  rounded-xl"
            />
          </div>
        </div>
        <div className="flex">
          <LikeButton />
          <div className="flex-1 flex items-center justify-center gap-2 text-color">
            <Comment />
            <p>123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
