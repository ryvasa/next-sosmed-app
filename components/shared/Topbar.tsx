import Image from "next/image";
import image from "../../public/pf.jpg";
import Link from "next/link";
import { Notification } from "../ui/icons";
import DropDown from "./DropDown";

const Topbar = () => {
  return (
    <nav className="navbar ">
      <div className="flex-1 ">
        <Link
          className="flex gap-4 justify-center items-center"
          href="/users/123"
        >
          <div className="avatar-profile avatar-profile-online outline-offset-2">
            <Image alt="profile" src={image} quality={1} />
          </div>
          <p className="font-semibold text-lg">Username</p>
        </Link>
      </div>

      <div className="flex-none flex gap-2">
        <Link href={"/notifications"}>
          <Notification />
        </Link>
        <DropDown />
      </div>
    </nav>
  );
};

export default Topbar;
