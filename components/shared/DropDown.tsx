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
            <User />
            <p className="text-md text-color">Log out</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
