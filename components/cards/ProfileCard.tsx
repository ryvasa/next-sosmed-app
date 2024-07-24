import Image from 'next/image';
import image from '../../public/pf.jpg';
import { Check, Close, Edit, Friend } from '../ui/icons';
import Link from 'next/link';

const ProfileCard = () => {
  return (
    <div className="border-b-2 border-gray-300 dark:border-gray-700">
      <div className="pt-10 flex items-center lg:justify-start justify-between lg:gap-4 ">
        <div className="flex gap-5 items-center ">
          <div className="rounded-full overflow-hidden">
            <Image
              alt="profile"
              src={image}
              className="object-cover h-28 w-28 "
            />
          </div>
          <div className="flex flex-col ">
            <p className="text-2xl font-semibold">Username</p>
            <p className="lg:text-md text-sm">Join on 23 April 2023</p>
          </div>
        </div>

        <Link href={'/users/123/edit'}>
          <Edit />
        </Link>
      </div>
      <div className="py-5 flex gap-10 lg:gap-5 lg:w-80">
        <div className="user-profile-action">
          <Check w={5} h={5} />
          <p className="normal-case">Confirm</p>
        </div>
        <div className="user-profile-cancle">
          <Close w={5} h={5} />
          <p className="normal-case">Cancel</p>
        </div>
      </div>
      <div className="flex items-center py-5 gap-3 ">
        <Friend textColor={'text-primary'} />
        <p>
          <b>123</b> friends
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
