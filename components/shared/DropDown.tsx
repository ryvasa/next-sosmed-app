import ThemeToggle from "./ThemeToggle";
import { Dark, Hamburger, Light, User, Notification } from "../ui/icons";

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
          <div className="flex justify-start items-center">
            <User c={'primary'} />
            <p className="text-sm lg:text-md">Log out</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
