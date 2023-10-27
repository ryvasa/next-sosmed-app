import Image from "next/image";
import image from "../../public/pf.jpg";

const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro atquedignissimos, ab harum nulla excepturi praesentium accusantium. Esse, possimus! Sit placeat assumenda incidunt velit rem molestias, perspiciatis ducimus soluta architecto, libero eligendi reiciendis enim nemo quidem necessitatibus. Nostrum explicabo fuga harum, at debitis similique? Rerum commodi velit eos ad assumenda?";

const ChatCard = () => {
  return (
    <div className="rounded-lg px-4 py-2 flex justify-between">
      <div className="flex gap-3">
        <div className="avatar-profile">
          <Image placeholder="blur" src={image} alt="photo frofile" />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold">Username</p>
          <p className="text-sm">{text.split("").slice(0, 30).join("")}...</p>
        </div>
      </div>
      <p className="text-sm text-primary">10:11</p>
    </div>
  );
};

export default ChatCard;
