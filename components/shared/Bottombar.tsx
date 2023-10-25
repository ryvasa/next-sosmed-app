"use client";
import Link from "next/link";
import { Add, Chat, FriendList, Home, Search } from "@/components/ui/icons";
import { usePathname } from "next/navigation";

const Bottombar = () => {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 w-full flex items-center justify-center">
      <div className="bg-gray-800 w-full px-5 py-3 rounded-t-2xl">
        <ul className="flex justify-between w-full">
          <li>
            <Link
              className={`btn btn-square btn-sm ${
                pathname === "/"
                  ? " text-gray-800 btn-primary"
                  : "bg-transparent text-gray-400 border-none"
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
                  ? " text-gray-800 btn-primary"
                  : "bg-transparent text-gray-400 border-none"
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
                  ? " text-gray-800 btn-primary"
                  : "bg-transparent text-gray-400 border-none"
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
                  ? " text-gray-800 btn-primary"
                  : "bg-transparent text-gray-400 border-none"
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
                  ? " text-gray-800 btn-primary"
                  : "bg-transparent text-gray-400 border-none"
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
