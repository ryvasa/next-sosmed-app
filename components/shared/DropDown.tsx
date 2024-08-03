"use client";
import ThemeToggle from "./ThemeToggle";
import { Hamburger, User } from "../ui/icons";
import { fetchLogout } from "@/libs/api/api";
import { useRouter } from "next/navigation";

const DropDown = () => {
  const router = useRouter();
  const handleLogout = async () => {
    const response = await fetchLogout();
    if (response.data.message) {
      router.push("/login");
      localStorage.clear();
    }
  };
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="m-1">
        <button className="btn btn-square btn-ghost">
          <Hamburger />
        </button>
      </label>
      <ul className="dropdown-list">
        <li>
          <ThemeToggle />
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="flex justify-start items-center"
          >
            <User c={"primary"} />
            <p className="text-sm lg:text-md">Log out</p>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
