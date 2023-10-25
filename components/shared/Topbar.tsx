import Image from "next/image";
import image from "../../public/pf.jpg";
import Link from "next/link";
import { Hamburger, Notification } from "../ui/icons";

const Topbar = () => {
  return (
    <div className="navbar fixed top-0 left-0 shadow-2xl bg-gray-800 z-[99]">
      <div className="flex-1">
        <Link href="/users/123" className="avatar-profile">
          <Image alt="profile" src={image} quality={1} />
        </Link>
      </div>

      <div className="flex-none flex gap-2">
        <Link href={"/"}>
          <Notification />
        </Link>
        <button className="btn btn-square btn-ghost">
          <Hamburger />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
