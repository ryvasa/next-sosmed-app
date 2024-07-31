'use client';
import Link from 'next/link';
import ProfilePicture from '../shared/ProfilePicture';
import { useEffect, useState } from 'react';

const ChatCard = ({ data }: any) => {
  const [filteredUsers, setFilteredUsers] = useState({
    user: { username: '', avatar: '', id: '' },
  });
  useEffect(() => {
    const users = data.users;
    const currentUser = localStorage.getItem('user');
    if (currentUser) {
      const response = JSON.parse(currentUser);
      const otherUser = users?.filter((user: any) => {
        return user.user.id !== response.data.id;
      });
      setFilteredUsers(otherUser[0]);
      console.log({ otherUser });
    }
    // If there is no other user or the data is missing, return null or a fallback component
  }, [data]);
  return (
    <div className="px-4 py-3 flex justify-between border-gray-100 border-b-2 dark:border-dark-lg/30">
      <div className="flex gap-3 items-center justify-center">
        <ProfilePicture />
        <Link
          href={`/chats/${data?.id}/${filteredUsers?.user?.id}`}
          className="flex flex-col"
        >
          <p className="font-semibold lg:text-lg">
            {filteredUsers?.user?.username || 'Unknown'}
          </p>
          <p className="text-sm lg:text-md">
            {data?.messages[0]?.message.length > 20
              ? data?.messages[0]?.message?.split('').slice(0, 20).join('') +
                '...'
              : data?.messages[0]?.message}
          </p>
        </Link>
      </div>
      <p className="text-sm text-primary">10:11</p>
    </div>
  );
};

export default ChatCard;
