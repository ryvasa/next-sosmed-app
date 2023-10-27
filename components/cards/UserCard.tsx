import Image from "next/image";
import { Unfriend, Chat, Check, Close } from "../ui/icons";
import image from "../../public/pf.jpg";
import Link from "next/link";

const UserCard = ({ friend }: any) => {
  return (
    <div className="rounded-lg px-4 py-2 bg-gray-100 dark:bg-dark-lg/30 flex justify-between">
      <Link
        href={"/users/123"}
        className="flex gap-3 items-center justify-center"
      >
        <div className="avatar-profile">
          <Image placeholder="blur" src={image} alt="photo frofile" />
        </div>
        <p className="">Username</p>
      </Link>
      <div className="flex justify-center items-center gap-4">
        {friend ? (
          <>
            <div className="text-primary">
              <Chat />
            </div>
            <div className="text-error">
              <Unfriend />
            </div>
          </>
        ) : (
          <>
            <div className="text-primary">
              <Check />
            </div>
            <div className="text-error">
              <Close />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserCard;
