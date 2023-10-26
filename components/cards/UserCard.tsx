import Image from "next/image";
import image from "../../public/pf.jpg";
import { Check, Close, Edit, FriendList } from "../ui/icons";

const UserCard = () => {
  return (
    <div className="border-b-2 border-gray-700">
      <div className="pt-10 flex items-center justify-between">
        <div className="flex gap-5 items-center ">
          <div className="rounded-full overflow-hidden">
            <Image
              alt="profile"
              src={image}
              className="object-cover h-28 w-28 "
            />
          </div>
          <div className="flex flex-col text-dark-xl dark:text-dark-xs">
            <p className="text-2xl font-semibold">Username</p>
            <p className="text-sm">Join on 23 April 2023</p>
          </div>
        </div>

        <Edit />
      </div>
      <div className="py-5 flex gap-4 ">
        <div className="btn btn-sm btn-primary flex-1 text-white dark:text-dark-sm">
          <Check />
          <p>Confirm</p>
        </div>
        <div className="btn btn-sm btn-primary flex-1 text-white dark:text-dark-sm">
          <Close />
          <p>Cancel</p>
        </div>
      </div>
      <div className="flex items-center py-5 gap-3 text-dark-xl dark:text-dark-xs">
        <FriendList />
        <p>
          <b>123</b> friends
        </p>
      </div>
    </div>
  );
};

export default UserCard;
