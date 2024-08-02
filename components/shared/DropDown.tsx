"use client";
import ThemeToggle from "./ThemeToggle";
import { Hamburger, User } from "../ui/icons";
import { fetchLogout } from "@/libs/api/api";

const DropDown = () => {
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
            onClick={fetchLogout}
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
