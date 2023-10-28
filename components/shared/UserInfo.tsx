import Link from "next/link";
import ProfilePicture from "./ProfilePicture";

const UserInfo = () => {
  return (
    <Link href={"/users/123"} className="flex gap-4 items-center ">
      <ProfilePicture />

      <div className="user-info">
        <p className="text-md font-semibold">Username</p>
        <p className="text-sm text-primary">10:18</p>
      </div>
    </Link>
  );
};

export default UserInfo;
