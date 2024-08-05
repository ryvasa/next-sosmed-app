import { Unfriend, Chat, Check, Close, AddFriend } from "../ui/icons";
import Link from "next/link";
import ProfilePicture from "../shared/ProfilePicture";
import { formatRelativeTime } from "@/helper/formaterTime";

const UserCard = ({ user, friend, invitation }: any) => {
  return (
    <Link
      href={`/users/${user.id}`}
      className="dark:border-none dark:bg-dark-sm dark:rounded-lg lg:py-2 px-4 lg:px-10 py-3 border-b-2 border-gray-100 dark:border-gray-700 flex justify-between"
    >
      <div className="flex gap-3 items-center justify-center">
        <ProfilePicture active={user.active} />
        <div className="flex justify-center items-start flex-col gap-1">
          <p className="font-semibold text-lg">{user.username}</p>
          {user.active ? (
            <p className="text-sm text-success">Online</p>
          ) : (
            <p className="text-sm text-error">
              {formatRelativeTime(user.updated_at)}
            </p>
          )}
        </div>
      </div>
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
    </Link>
  );
};

export default UserCard;
