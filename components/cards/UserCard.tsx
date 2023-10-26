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
          <div className="flex flex-col text-color">
            <p className="text-2xl font-semibold">Username</p>
            <p className="text-sm">Join on 23 April 2023</p>
          </div>
        </div>

        <Edit />
      </div>
      <div className="py-5 flex gap-10">
        <div className="user-profile-action">
          <Check w={5} h={5} />
          <p className="normal-case">Confirm</p>
        </div>
        <div className="user-profile-action">
          <Close w={5} h={5} />
          <p className="normal-case">Cancel</p>
        </div>
      </div>
      <div className="flex items-center py-5 gap-3 text-color">
        <FriendList />
        <p>
          <b>123</b> friends
        </p>
      </div>
    </div>
  );
};

export default UserCard;
