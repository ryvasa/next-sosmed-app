import Link from 'next/link';
import ProfilePicture from './ProfilePicture';
import { formaterTime } from '../../helper/formaterTime';

const UserInfo = ({ user, createdAt }: any) => {
  return (
    <>
      {user && (
        <Link href={`/users/${user.id}`} className="flex gap-4 items-center ">
          <ProfilePicture />

          <div className="user-info">
            <p className="text-lg font-semibold">{user.username}</p>
            <p className="text-sm text-primary">
              {formaterTime(createdAt).formattedTime}
            </p>
          </div>
        </Link>
      )}
    </>
  );
};

export default UserInfo;
