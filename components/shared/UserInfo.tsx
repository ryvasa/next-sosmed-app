import Link from "next/link";
import ProfilePicture from "./ProfilePicture";
import { formatRelativeTime } from "../../helper/formaterTime";

const UserInfo = ({ user, createdAt }: any) => {
  return (
    <>
      {user && (
        <Link href={`/users/${user.id}`} className="flex gap-4 items-center ">
          <ProfilePicture active={user.active} />

          <div className="user-info">
            <p className="text-lg font-semibold">{user.username}</p>
            <p className="text-sm text-primary">
              {formatRelativeTime(createdAt)}
            </p>
          </div>
        </Link>
      )}
    </>
  );
};

export default UserInfo;
