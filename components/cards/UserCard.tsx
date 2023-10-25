import Image from "next/image";
import image from "../../public/pf.jpg";
import { Check, Close, FriendList } from "../ui/icons";

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
          <div className="flex flex-col">
            <p className="text-2xl font-semibold">Username</p>
            <p className="text-sm">Join on 23 April 2023</p>
          </div>
        </div>

        <svg
          className="w-6 h-6 text-left"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z"
          ></path>
        </svg>
      </div>
      <div className="py-5 flex gap-4">
        <div className="btn btn-sm btn-primary flex-1">
          <Check />
          <p>Confirm</p>
        </div>
        <div className="btn btn-sm btn-primary flex-1">
          <Close />
          <p>Cancel</p>
        </div>
      </div>
      <div className="flex items-center py-5 gap-3">
        <FriendList />
        <p>
          <b>123</b> friends
        </p>
      </div>
    </div>
  );
};

export default UserCard;
