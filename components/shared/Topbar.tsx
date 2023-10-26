import Image from "next/image";
import image from "../../public/pf.jpg";
import Link from "next/link";
import { Notification } from "../ui/icons";
import DropDown from "./DropDown";

const Topbar = () => {
  return (
    <nav className="navbar">
      <div className="flex-1 ">
        <Link href="/users/123" className="avatar-profile">
          <Image alt="profile" src={image} quality={1} />
        </Link>
      </div>

      <div className="flex-none flex gap-2">
        <Link href={"/"}>
          <Notification />
        </Link>
        <DropDown />
      </div>
    </nav>
  );
};

export default Topbar;
