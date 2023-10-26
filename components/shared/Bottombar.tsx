"use client";
import Link from "next/link";
import { Add, Chat, FriendList, Home, Search } from "@/components/ui/icons";
import { usePathname } from "next/navigation";

const Bottombar = () => {
  const pathname = usePathname();
  return (
    <div className="bottombar">
      <div className="bottombar-gradient"></div>
      <div className="bottombar-container">
        <ul className="flex justify-between w-full">
          <li>
            <Link
              className={`btn btn-square btn-sm ${
                pathname === "/" ? "bottombar-item-active" : "bottombar-item"
              }`}
              href={"/"}
            >
              <Home />
            </Link>
          </li>
          <li>
            <Link
              className={`btn btn-square btn-sm ${
                pathname === "/users"
                  ? "bottombar-item-active"
                  : "bottombar-item"
              }`}
              href={"/users"}
            >
              <FriendList />
            </Link>
          </li>
          <li>
            <Link
              className={`btn btn-square btn-sm ${
                pathname === "/create-post"
                  ? "bottombar-item-active"
                  : "bottombar-item"
              }`}
              href={"/create-post"}
            >
              <Add />
            </Link>
          </li>
          <li>
            <Link
              className={`btn btn-square btn-sm ${
                pathname === "/chats"
                  ? "bottombar-item-active"
                  : "bottombar-item"
              }`}
              href={"/chats"}
            >
              <Chat />
            </Link>
          </li>
          <li>
            <Link
              className={`btn btn-square btn-sm ${
                pathname === "/search"
                  ? "bottombar-item-active"
                  : "bottombar-item"
              }`}
              href={"/search"}
            >
              <Search />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Bottombar;
