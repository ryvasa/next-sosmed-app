import Link from "next/link";
import image from "../../public/pf.jpg";
import Image from "next/image";

const UserInfo = () => {
  return (
    <Link href={"/users/123"} className="flex gap-4 items-center ">
      <div className="avatar-profile">
        <Image placeholder="blur" src={image} alt="photo frofile" />
      </div>
      <div className="user-info">
        <p className="text-md font-semibold">Username</p>
        <p className="text-sm text-primary">10:18</p>
      </div>
    </Link>
  );
};

export default UserInfo;
