import { Unfriend, Chat, Check, Close, AddFriend } from "../ui/icons";
import Link from "next/link";
import ProfilePicture from "../shared/ProfilePicture";

const UserCard = ({ friend, invitation }: any) => {
  return (
    <div className="rounded-lg px-4 lg:px-10 py-3 border-b-2 border-gray-100 dark:border-dark-lg/30 flex justify-between">
      <Link
        href={"/users/123"}
        className="flex gap-3 items-center justify-center"
      >
        <ProfilePicture active={false} />
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
        ) : invitation ? (
          <>
            <div className="text-primary">
              <Check />
            </div>
            <div className="text-error">
              <Close />
            </div>
          </>
        ) : (
          <>
            <div className="text-primary">
              <AddFriend />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserCard;
