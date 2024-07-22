import Link from 'next/link';
import ProfilePicture from '../shared/ProfilePicture';

const text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro atquedignissimos, ab harum nulla excepturi praesentium accusantium. Esse, possimus! Sit placeat assumenda incidunt velit rem molestias, perspiciatis ducimus soluta architecto, libero eligendi reiciendis enim nemo quidem necessitatibus. Nostrum explicabo fuga harum, at debitis similique? Rerum commodi velit eos ad assumenda?';

const ChatCard = () => {
  return (
    <div className="px-4 py-3 flex justify-between border-gray-100 border-b-2 dark:border-dark-lg/30">
      <div className="flex gap-3 items-center justify-center">
        <ProfilePicture />
        <Link href={'/chats/123'} className="flex flex-col">
          <p className="font-semibold lg:text-lg">Username</p>
          <p className="text-sm lg:text-md">
            {text.split('').slice(0, 20).join('')}...
          </p>
        </Link>
      </div>
      <p className="text-sm text-primary">10:11</p>
    </div>
  );
};

export default ChatCard;
