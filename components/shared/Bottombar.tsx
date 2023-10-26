"use client";
import Link from "next/link";
import { Add, Chat, FriendList, Home, Search } from "@/components/ui/icons";
import { usePathname } from "next/navigation";

const Bottombar = () => {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 w-full flex items-center justify-center">
      <div className="bg-gradient-to-t from-dark-xs to-dark-xs/0 dark:from-dark-xl dark:to-dark-xl/0 h-28 w-full  "></div>
      <div className="bg-white/75 dark:bg-dark-sm/75 absolute z-[10] backdrop-blur-md  w-full px-5 py-3 rounded-t-2xl bottom-0 ">
        <ul className="flex justify-between w-full">
          <li>
            <Link
              className={`btn btn-square btn-sm ${
                pathname === "/"
                  ? " text-white dark:text-dark-xl btn-primary"
                  : "bg-transparent text-dark-lg dark:text-gray-400 border-none"
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
                  ? " text-white dark:text-dark-xl btn-primary"
                  : "bg-transparent text-dark-lg dark:text-gray-400 border-none"
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
                  ? " text-white dark:text-dark-xl btn-primary"
                  : "bg-transparent text-dark-lg dark:text-gray-400 border-none"
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
                  ? " text-white dark:text-dark-xl btn-primary"
                  : "bg-transparent text-dark-lg dark:text-gray-400 border-none"
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
                  ? " text-white dark:text-dark-xl btn-primary"
                  : "bg-transparent text-dark-lg dark:text-gray-400 border-none"
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
