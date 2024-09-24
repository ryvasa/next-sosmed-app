'use client';
import Link from 'next/link';
import ProfilePicture from '../shared/ProfilePicture';
import { formatRelativeTime } from '@/helper/formaterTime';
import ChatButton from '../shared/ChatButton';
import { CameraOn } from '../ui/icons';

const UserCard = ({ user }: any) => {
  return (
    <div className="justify-between flex dark:border-none dark:bg-dark-sm dark:rounded-lg lg:py-2 px-4 lg:px-10 py-3 border-b-2 border-gray-100 dark:border-gray-700">
      <Link
        href={`/users/${user.id}`}
        className="flex-[19] flex justify-between"
      >
        <div className="flex gap-3 items-center justify-center">
          <ProfilePicture active={user.active} avatar={user.avatar} />
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
      </Link>
      <div className="flex gap-4">
        <ChatButton userId={user.id} />
        <Link
          href={`/video-call/${user.id}`}
          className="text-primary flex justify-center items-center"
        >
          <CameraOn />
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
