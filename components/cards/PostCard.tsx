import Image from "next/image";
import image from "../../public/pf.jpg";

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
    <div className="border-b-[3px] border-gray-600 py-10 ">
      <div className="flex gap-4 flex-col">
        <div className="flex gap-4 items-center ">
          <div className="avatar-profile">
            <Image src={image} alt="photo frofile" />
          </div>
          <div className="user-info">
            <p className="text-md">Username</p>
            <p className="text-sm">10:18</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p>{desc.split(" ").slice(0, 30).join(" ")}...</p>
          <div className="h-96">
            <Image
              src={image}
              alt="photo postingan"
              className="w-full h-full object-cover  rounded-xl"
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex-1 flex items-center justify-center gap-2">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57l.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"
              ></path>
            </svg>
            <p>123</p>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4l-.01-18z"
              ></path>
            </svg>
            <p>123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
